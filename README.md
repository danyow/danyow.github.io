# Danyow publication repository

The website and original reports live in **`danyow/danyow`, branch `main`**. This repository coordinates publication; it is not a second content source.

## Two independent delivery paths

A change to `master:deployment/source.json` requests publication on both hosts:

```text
danyow/danyow main (canonical Astro source and reports)
                |
deployment/source.json on this repository's master
                |                              |
      GitHub Actions build             Vercel Git build
                |                              |
       gh-pages static output           Vercel static output
                |                              |
            danyow.cn                 project *.vercel.app URL
```

Both builds validate the request, check that the requested SHA is an ancestor of current source `main`, use Node 22 and locked npm dependencies, run content tests/type checking, and build with `SITE_BASE_URL=/`. Receipts record the actual source SHA and request commit. Concurrent report submissions cannot silently roll back a newer source version.

Vercel builds the canonical source independently. It does not proxy, iframe, redirect to, download from, or wait for the live primary website. Normal site navigation and assets are root-relative. SEO canonical URLs remain `https://danyow.cn/`; a canonical tag is not a browser redirect. No DNS, primary-domain assignment, email recipient, task schedule or secret changes are part of this setup.

## Vercel project contract

Keep the existing project connected to **`danyow/danyow.github.io`**, production branch **`master`**, Root Directory **repository root**. The committed `vercel.json` overrides framework detection, installation, build command and output directory. Root `package.json` pins the runtime to Node **22.x**; the build requires at least **22.16**. The public secondary address is the production domain actually assigned by Vercel, not a guessed project-name URL or a temporary protected preview.

The `gh-pages` branch is generated Pages output and must not trigger a second Vercel build. The Pages workflow writes `deployment/gh-pages.vercel.json` into every generated root so this exclusion survives subsequent publications. Real publisher feature branches retain preview builds.

Vercel settings that cannot be set in these files still require project access: Root Directory, production branch/domain assignment, and deployment protection. In particular, remove a legacy `website` Root Directory if the project still has one. A public production URL must be tested without a logged-in browser. Do not remove preview protection merely to make a check pass.

## Verification and maintenance

```sh
npm test
npm run build
npm run verify:vercel -- https://ACTUAL-PRODUCTION-HOST.vercel.app FULL_PUBLICATION_COMMIT_SHA
```

`npm test` exercises local fixtures: request validation, anti-rollback, runtime/configuration, static output isolation, and public checks that reject redirects, login screens, stale receipts and corrupted originals. `npm run build` requires network access to the public canonical repository and npm registry, performs the real build and writes `dist/`.

`Validate Vercel mirror build` runs the same tests and real entrypoint on publication changes and PRs. The public verifier checks homepage/assets, both channels, search, RSS, exact publication receipt and the three latest reports per channel (HTML marker, receipt, raw SHA-256). Run it against the actual returned Vercel production origin after deployment. A successful local test or CI artifact is not evidence of a successful Vercel deployment or a publicly accessible domain.

The existing Pages workflow retains its independent real-domain verification. Daily tasks continue to submit original Markdown and update only `deployment/source.json`; they do not need additional tokens, a second report copy, or a new scheduler.

Historical Docusaurus source remains in `website/`. Its former root package manifest and lockfile are preserved in `deployment/legacy/` only for historical reference. They are not active workspaces and are never installed by the publication build.
