import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { build, validateRequest, makeReceipt, assertNode } from './build-vercel.mjs';
import { validateOrigin, verify } from './verify-vercel.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const request = { schema: 1, repository: 'danyow/danyow', branch: 'main', source_sha: 'a'.repeat(40) };
const sourceSHA = 'b'.repeat(40), commitSHA = 'c'.repeat(40);

test('only the canonical repository, main and full SHA are accepted', () => {
  assert.equal(validateRequest(request), request);
  for (const invalid of [null, {}, { ...request, schema: 2 }, { ...request, repository: 'other/repo' },
    { ...request, branch: 'gh-pages' }, { ...request, source_sha: 'main' }, { ...request, source_sha: '-x' }]) {
    assert.throws(() => validateRequest(invalid), /INVALID_PUBLICATION_REQUEST/);
  }
});

test('Node version is constrained to the supported, tested major', () => {
  for (const version of ['16.14.0', '20.19.0', '22.15.0', '24.0.0', 'invalid']) assert.throws(() => assertNode(version));
  for (const version of ['22.16.0', 'v22.20.0']) assert.doesNotThrow(() => assertNode(version));
});

test('receipt identifies actual source, requested source and publication trigger', () => {
  const receipt = makeReceipt(request, sourceSHA, commitSHA, new Date('2026-09-16T00:00:00Z'));
  assert.equal(receipt.source_commit, sourceSHA);
  assert.equal(receipt.requested_source_commit, request.source_sha);
  assert.equal(receipt.request_commit, commitSHA);
  assert.equal(receipt.base, '/');
  assert.equal(receipt.platform, 'vercel');
  assert.equal(receipt.canonical_origin, 'https://danyow.cn');
  assert.throws(() => makeReceipt(request, 'invalid', commitSHA));
});

test('Vercel config disables legacy auto-detection and keeps production enabled', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  assert.equal(config.framework, null);
  assert.equal(config.installCommand, '');
  assert.equal(config.buildCommand, 'npm run build');
  assert.equal(config.outputDirectory, 'dist');
  assert.equal(config.trailingSlash, true);
  assert.equal(config.git.deploymentEnabled['gh-pages'], false);
  assert.notEqual(config.git.deploymentEnabled.master, false);
  assert.equal(pkg.engines.node, '22.x');
  assert.equal(pkg.scripts.build, 'node deployment/build-vercel.mjs');
  assert.equal(pkg.workspaces, undefined);
  assert.equal(pkg.scripts.postinstall, undefined);
  assert.equal(fs.existsSync(path.join(root, 'yarn.lock')), false);
});

test('generated gh-pages explicitly opts out of duplicate Vercel builds', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'deployment/gh-pages.vercel.json'), 'utf8'));
  assert.equal(config.git.deploymentEnabled, false);
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/deploy.yml'), 'utf8');
  assert(workflow.includes('cp ../deployment-repo/deployment/gh-pages.vercel.json dist/vercel.json'));
});

function fixture(t, fail = false) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'danyow-contract-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, 'deployment'));
  fs.writeFileSync(path.join(dir, 'deployment/source.json'), JSON.stringify(request));
  const calls = [];
  const execute = (command, args, cwd, env, capture) => {
    calls.push({ command, args, cwd, env, capture });
    assert.equal(env.SITE_BASE_URL, '/');
    assert.equal(env.SITE_URL, 'https://danyow.cn');
    if (args[0] === 'clone') {
      const source = args.at(-1);
      fs.mkdirSync(path.join(source, 'dist'), { recursive: true });
      for (const name of ['package.json', 'package-lock.json', 'astro.config.ts']) fs.writeFileSync(path.join(source, name), '{}');
      for (const name of ['index.html', '404.html', 'search-index.json', 'rss.xml', 'CNAME', '.nojekyll', 'vercel.json']) {
        fs.writeFileSync(path.join(source, 'dist', name), 'fixture');
      }
    }
    if (args[0] === 'rev-parse') return sourceSHA;
    if (args[0] === 'merge-base' && fail) throw new Error('SOURCE_NOT_DESCENDED_FROM_REQUEST');
    return '';
  };
  return { dir, calls, execute };
}

test('build checks ancestry, uses locked Astro dependencies, checks content and emits only static output', t => {
  const { dir, calls, execute } = fixture(t);
  fs.mkdirSync(path.join(dir, 'dist'));
  fs.writeFileSync(path.join(dir, 'dist/stale.html'), 'stale');
  const receipt = build({ root: dir, env: { VERCEL_GIT_COMMIT_SHA: commitSHA }, execute });
  assert.equal(receipt.source_commit, sourceSHA);
  assert(calls.some(c => c.args.join(' ') === 'merge-base --is-ancestor ' + request.source_sha + ' ' + sourceSHA));
  assert.deepEqual(calls.filter(c => c.command === 'npm').map(c => c.args), [
    ['ci', '--include=dev', '--ignore-scripts', '--no-audit', '--no-fund'], ['test'], ['run', 'check'], ['run', 'build'],
  ]);
  for (const name of ['CNAME', '.nojekyll', 'vercel.json', 'stale.html']) assert(!fs.existsSync(path.join(dir, 'dist', name)));
  assert(fs.existsSync(path.join(dir, 'dist/index.html')));
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir, 'dist/.well-known/danyow-deployment.json'))).request_commit, commitSHA);
  assert(!fs.existsSync(calls[0].args.at(-1)), 'temporary source must be removed');
});

test('invalid ancestry stops before installing, building or publishing', t => {
  const { dir, calls, execute } = fixture(t, true);
  assert.throws(() => build({ root: dir, env: { VERCEL_GIT_COMMIT_SHA: commitSHA }, execute }), /SOURCE_NOT_DESCENDED/);
  assert(!calls.some(c => c.command === 'npm'));
  assert(!fs.existsSync(path.join(dir, 'dist')));
  assert(!fs.existsSync(calls[0].args.at(-1)));
});

test('public verification accepts only credential-free Vercel HTTPS hosts', () => {
  assert.equal(validateOrigin('https://example.vercel.app/'), 'https://example.vercel.app');
  for (const value of ['http://example.vercel.app', 'https://danyow.cn', 'https://example.vercel.app.evil.test',
    'https://user:secret@example.vercel.app', 'https://example.vercel.app:8443', 'http://127.0.0.1']) {
    assert.throws(() => validateOrigin(value));
  }
});

function publicFixture(mode = '') {
  const raw = Buffer.from('published report\n');
  const report = { date: '2026-09-16', revision: 1, sha256: createHash('sha256').update(raw).digest('hex'),
    html: 'reports/2026-09-16', raw: 'raw/2026/09/2026-09-16.md' };
  return async input => {
    const pathname = new URL(input).pathname;
    if (mode === 'redirect') return new Response('', { status: 308, headers: { Location: 'https://danyow.cn/' } });
    if (mode === 'protected') return new Response('Login', { status: 401 });
    if (pathname === '/.well-known/danyow-deployment.json') {
      return Response.json(makeReceipt(request, sourceSHA, mode === 'stale' ? sourceSHA : commitSHA));
    }
    if (pathname === '/') return new Response('<link rel="canonical" href="https://danyow.cn/"><script src="/_astro/app.js"></script>');
    if (pathname.endsWith('/index/recent.json')) return Response.json({ schema: 1, reports: [report] });
    if (pathname.includes('/receipts/')) return Response.json(report);
    if (pathname.includes('/reports/')) return new Response('source-sha256:' + report.sha256);
    if (pathname.endsWith('.md')) return new Response(mode === 'bad-raw' ? 'corrupt' : raw);
    return new Response('fixture');
  };
}

test('public verification checks mirror routes, exact request, raw hash and both channels', async () => {
  const result = await verify('https://example.vercel.app', commitSHA, publicFixture());
  assert.equal(result.reports.length, 2);
});
for (const mode of ['redirect', 'protected', 'stale', 'bad-raw']) {
  test('public verification rejects ' + mode, async () => {
    await assert.rejects(verify('https://example.vercel.app', commitSHA, publicFixture(mode)));
  });
}
