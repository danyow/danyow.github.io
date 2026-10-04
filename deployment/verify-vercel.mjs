import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';

export function validateOrigin(value) {
  const url = new URL(value);
  assert(url.protocol === 'https:' && url.hostname.endsWith('.vercel.app') &&
    !url.username && !url.password && !url.port, 'EXPECTED_PUBLIC_VERCEL_HTTPS_ORIGIN');
  return url.origin;
}

// Report only allowlisted public metadata, never an arbitrary response body.
function safeReceiptValue(value) {
  if (value === undefined) return '[missing]';
  if (value === null) return 'null';
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  if (typeof value === 'string' &&
    (/^[a-f0-9]{40}$/.test(value) ||
      ['vercel', '/', '/danyow/', 'danyow/danyow'].includes(value))) return value;
  return '[unexpected]';
}

export function validateReceipt(receipt, requestCommit) {
  assert(typeof requestCommit === 'string' && /^[a-f0-9]{40}$/.test(requestCommit),
    'EXPECTED_REQUEST_COMMIT_REQUIRED');
  assert(receipt && typeof receipt === 'object' && !Array.isArray(receipt),
    'VERCEL_RECEIPT_MISMATCH:object');
  const expected = {
    schema: 1, platform: 'vercel', base: '/',
    source_repository: 'danyow/danyow', request_commit: requestCommit,
  };
  const mismatches = Object.entries(expected)
    .filter(([field, value]) => receipt[field] !== value)
    .map(([field, value]) => field + ' expected=' + safeReceiptValue(value) +
      ' actual=' + safeReceiptValue(receipt[field]));
  if (typeof receipt.source_commit !== 'string' || !/^[a-f0-9]{40}$/.test(receipt.source_commit)) {
    mismatches.push('source_commit expected=full-git-sha actual=' + safeReceiptValue(receipt.source_commit));
  }
  assert(mismatches.length === 0, 'VERCEL_RECEIPT_MISMATCH:' + mismatches.join('; '));
  return receipt;
}

export async function verify(originValue, requestCommit, fetcher = fetch) {
  const origin = validateOrigin(originValue);
  assert(/^[a-f0-9]{40}$/.test(requestCommit || ''), 'EXPECTED_REQUEST_COMMIT_REQUIRED');
  async function get(relative) {
    const response = await fetcher(new URL(relative, origin), {
      redirect: 'manual', headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(15000),
    });
    assert(response.status === 200, 'VERCEL_HTTP_' + response.status + ': ' + relative);
    return response;
  }
  const receipt = await (await get('/.well-known/danyow-deployment.json?verify=' + requestCommit)).json();
  validateReceipt(receipt, requestCommit);
  const home = await (await get('/')).text();
  assert(home.includes('https://danyow.cn/') && !home.includes('http-equiv="refresh"'), 'NOT_A_MIRROR_HOMEPAGE');
  const asset = home.match(/(?:src|href)=["'](\/_astro\/[^"']+)["']/)?.[1];
  assert(asset, 'ASTRO_ASSET_MISSING');
  await get(asset);
  for (const relative of ['/ai-engine-watch/', '/voice-agent-watch/', '/search/', '/search-index.json', '/rss.xml']) {
    await get(relative);
  }
  const reports = [];
  for (const channel of ['ai-engine-watch', 'voice-agent-watch']) {
    const index = await (await get('/' + channel + '/index/recent.json')).json();
    assert(index.schema === 1 && Array.isArray(index.reports) && index.reports.length, 'REPORT_INDEX_INVALID');
    for (const report of index.reports.slice(0, 3)) {
      assert(/^\d{4}-\d{2}-\d{2}$/.test(report.date || '') && /^[a-f0-9]{64}$/.test(report.sha256 || '') &&
        /^reports\/\d{4}-\d{2}-\d{2}$/.test(report.html || '') &&
        /^raw\/\d{4}\/\d{2}\/\d{4}-\d{2}-\d{2}\.md$/.test(report.raw || ''), 'REPORT_METADATA_INVALID');
      const prefix = '/' + channel + '/';
      const published = await (await get(prefix + 'receipts/' + report.date + '.json')).json();
      assert(published.date === report.date && published.revision === report.revision &&
        published.sha256 === report.sha256, 'REPORT_RECEIPT_MISMATCH');
      const html = await (await get(prefix + report.html + '/')).text();
      assert(html.includes('source-sha256:' + report.sha256), 'REPORT_HTML_MISMATCH');
      const raw = Buffer.from(await (await get(prefix + report.raw)).arrayBuffer());
      assert(createHash('sha256').update(raw).digest('hex') === report.sha256, 'REPORT_RAW_HASH_MISMATCH');
      reports.push({ channel, date: report.date, revision: report.revision, sha256: report.sha256 });
    }
  }
  const result = { vercelMirror: 'verified', origin, ...receipt, reports };
  console.log(JSON.stringify(result));
  return result;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const origin = process.argv[2] || process.env.VERCEL_PUBLIC_ORIGIN;
  const commit = process.argv[3] || process.env.EXPECTED_REQUEST_COMMIT;
  verify(origin, commit).catch(error => { console.error(error); process.exitCode = 1; });
}
