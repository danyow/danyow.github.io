import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { validateReceipt, verify } from './verify-vercel.mjs';

const requested = 'a'.repeat(40);
const source = 'b'.repeat(40);
const receipt = {
  schema: 1, platform: 'vercel', base: '/',
  source_repository: 'danyow/danyow', request_commit: requested, source_commit: source,
};

test('matching flat receipt passes without changing its fields', () => {
  assert.equal(validateReceipt(receipt, requested), receipt);
});

for (const [field, value] of Object.entries({
  schema: 2, platform: undefined, base: '/danyow/',
  source_repository: 'unexpected/repository', request_commit: source, source_commit: 'short',
})) {
  test('mismatch identifies ' + field + ' without accepting stale or foreign metadata', () => {
    assert.throws(() => validateReceipt({ ...receipt, [field]: value }, requested),
      new RegExp('VERCEL_RECEIPT_MISMATCH:.*' + field + ' expected='));
  });
}

test('diagnostics show both wrong platform and stale commit, not only the first mismatch', () => {
  assert.throws(() => validateReceipt({ ...receipt, platform: undefined, request_commit: source }, requested),
    error => error.message.includes('platform expected=vercel actual=[missing]') &&
      error.message.includes('request_commit expected=' + requested + ' actual=' + source));
});

test('arbitrary server strings and extra fields are never echoed by failure diagnostics', () => {
  const privateValue = 'do-not-log-this-untrusted-value\n::error::untrusted';
  assert.throws(() => validateReceipt({ ...receipt, request_commit: privateValue, extra: privateValue }, requested),
    error => !error.message.includes(privateValue) && error.message.includes('actual=[unexpected]'));
});

for (const invalid of [null, [], 'text', 0]) {
  test('non-object receipt is rejected: ' + JSON.stringify(invalid), () => {
    assert.throws(() => validateReceipt(invalid, requested), /VERCEL_RECEIPT_MISMATCH:object/);
  });
}

test('invalid expected commit is never treated as a receipt match', () => {
  assert.throws(() => validateReceipt(receipt, 'main'), /EXPECTED_REQUEST_COMMIT_REQUIRED/);
});

function fixture(mode = '') {
  const raw = Buffer.from('report\n');
  const report = {
    date: '2026-10-04', revision: 1, sha256: createHash('sha256').update(raw).digest('hex'),
    html: 'reports/2026-10-04', raw: 'raw/2026/10/2026-10-04.md',
  };
  return async (input, options) => {
    assert.equal(options.redirect, 'manual');
    assert.equal(options.headers['Cache-Control'], 'no-cache');
    const p = new URL(input).pathname;
    if (mode === 'protected') return new Response('Login', { status: 401 });
    if (mode === 'redirect') return new Response('', { status: 302 });
    if (p === '/.well-known/danyow-deployment.json') {
      return Response.json({ ...receipt, request_commit: mode === 'stale' ? source : requested });
    }
    if (p === '/') return new Response('<link href="https://danyow.cn/"><script src="/_astro/app.js"></script>');
    if (p.endsWith('/index/recent.json')) return Response.json({ schema: 1, reports: [report] });
    if (p.includes('/receipts/')) return Response.json(report);
    if (p.includes('/reports/')) return new Response('source-sha256:' + report.sha256);
    if (p.endsWith('.md')) return new Response(mode === 'bad-raw' ? 'corrupt' : raw);
    return new Response('ok');
  };
}

test('public verifier still validates both channels and exact raw hashes', async () => {
  const result = await verify('https://example.vercel.app', requested, fixture());
  assert.equal(result.reports.length, 2);
});
for (const [mode, expected] of [
  ['protected', /VERCEL_HTTP_401/], ['redirect', /VERCEL_HTTP_302/],
  ['stale', /VERCEL_RECEIPT_MISMATCH:request_commit/], ['bad-raw', /REPORT_RAW_HASH_MISMATCH/],
]) {
  test('public verifier still rejects ' + mode, async () => {
    await assert.rejects(verify('https://example.vercel.app', requested, fixture(mode)), expected);
  });
}
