import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SHA = /^[a-f0-9]{40}$/;
export const SOURCE_REPOSITORY = 'danyow/danyow';
export const CANONICAL_ORIGIN = 'https://danyow.cn';

export function validateRequest(request) {
  assert(request && request.schema === 1 && request.repository === SOURCE_REPOSITORY &&
    request.branch === 'main' && typeof request.source_sha === 'string' && SHA.test(request.source_sha),
  'INVALID_PUBLICATION_REQUEST');
  return request;
}

export function assertNode(version) {
  const [major, minor] = version.replace(/^v/, '').split('.').map(Number);
  assert(major === 22 && minor >= 16, 'NODE_22_16_OR_NEWER_WITHIN_22_REQUIRED');
}

export function makeReceipt(request, sourceCommit, requestCommit, now = new Date()) {
  validateRequest(request);
  assert(SHA.test(sourceCommit) && SHA.test(requestCommit), 'INVALID_RECEIPT_COMMIT');
  return {
    schema: 1, source_repository: SOURCE_REPOSITORY,
    source_commit: sourceCommit, requested_source_commit: request.source_sha,
    request_commit: requestCommit, base: '/', platform: 'vercel',
    canonical_origin: CANONICAL_ORIGIN, built_at: now.toISOString(),
  };
}

export function run(command, args, cwd, env, capture = false) {
  console.log('[publication] ' + command + ' ' + args.join(' '));
  const result = spawnSync(command, args, {
    cwd, env, encoding: 'utf8', timeout: 300000, maxBuffer: 4 * 1024 * 1024,
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  });
  if (result.error || result.status !== 0) {
    if (capture && result.stderr) process.stderr.write(result.stderr);
    throw new Error('PUBLICATION_COMMAND_FAILED: ' + command + ' ' + args[0] +
      ' (status=' + result.status + ', signal=' + result.signal + ')', { cause: result.error });
  }
  return capture ? result.stdout.trim() : '';
}

// A fresh source checkout prevents Vercel caches or the historical workspace from
// influencing the build. The requested commit must be contained in current main,
// matching the anti-rollback policy used by the GitHub Pages workflow.
export function build({ root = ROOT, env = process.env, execute = run } = {}) {
  assertNode(process.versions.node);
  const request = validateRequest(JSON.parse(fs.readFileSync(path.join(root, 'deployment/source.json'), 'utf8')));
  const childEnv = { ...env, CI: 'true', SITE_BASE_URL: '/', SITE_URL: CANONICAL_ORIGIN,
    GIT_TERMINAL_PROMPT: '0', npm_config_engine_strict: 'true' };
  const requestCommit = env.VERCEL_GIT_COMMIT_SHA || execute('git', ['rev-parse', 'HEAD'], root, childEnv, true);
  assert(typeof requestCommit === 'string' && SHA.test(requestCommit), 'INVALID_REQUEST_COMMIT');
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'danyow-vercel-'));
  const source = path.join(work, 'source');
  try {
    execute('git', ['clone', '--filter=blob:none', '--single-branch', '--branch', 'main',
      'https://github.com/' + SOURCE_REPOSITORY + '.git', source], work, childEnv);
    const sourceCommit = execute('git', ['rev-parse', 'HEAD'], source, childEnv, true);
    assert(SHA.test(sourceCommit), 'INVALID_SOURCE_COMMIT');
    execute('git', ['merge-base', '--is-ancestor', request.source_sha, sourceCommit], source, childEnv);
    for (const file of ['package.json', 'package-lock.json', 'astro.config.ts']) {
      assert(fs.existsSync(path.join(source, file)), 'CANONICAL_SOURCE_FILE_MISSING: ' + file);
    }
    // Dependencies belong to the canonical Astro source, never this publication repo.
    execute('npm', ['ci', '--include=dev', '--ignore-scripts', '--no-audit', '--no-fund'], source, childEnv);
    execute('npm', ['test'], source, childEnv);
    execute('npm', ['run', 'check'], source, childEnv);
    execute('npm', ['run', 'build'], source, childEnv);
    execute(process.execPath, [path.join(root, 'deployment/check-root.mjs')], source, childEnv);
    for (const file of ['index.html', '404.html', 'search-index.json', 'rss.xml']) {
      assert(fs.existsSync(path.join(source, 'dist', file)), 'STATIC_OUTPUT_MISSING: ' + file);
    }
    const receipt = makeReceipt(request, sourceCommit, requestCommit);
    const output = path.join(root, 'dist');
    fs.rmSync(output, { recursive: true, force: true });
    fs.cpSync(path.join(source, 'dist'), output, { recursive: true });
    // These are Pages-only controls, not Vercel runtime content or configuration.
    for (const file of ['CNAME', '.nojekyll', 'vercel.json']) {
      fs.rmSync(path.join(output, file), { force: true });
    }
    fs.mkdirSync(path.join(output, '.well-known'), { recursive: true });
    fs.writeFileSync(path.join(output, '.well-known/danyow-deployment.json'), JSON.stringify(receipt) + '\n');
    console.log(JSON.stringify({ vercelBuild: 'verified', ...receipt }));
    return receipt;
  } finally {
    fs.rmSync(work, { recursive: true, force: true });
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  try { build(); } catch (error) { console.error(error); process.exitCode = 1; }
}
