# Protocolhub

An independent rebuild of the historical Protocolbase networking reference, originally provided by Colasoft Co., Ltd. It preserves 108 protocol articles, 241 central glossary definitions, and supporting diagrams, with a searchable snapshot of official RFC metadata. Four sections: Home, Protocols, Glossary, RFCs.

Original Protocolbase content © 2006–2007 Colasoft Co., Ltd. All rights reserved. Historical source: <http://www.protocolbase.net/>. Read [CONTENT_SOURCES.md](CONTENT_SOURCES.md) before reusing inherited material. Source technical wording is historical, not a claim of present correctness or endorsement.

## Develop and preview

Use Node **24 LTS** (`nvm use`, latest 24.x patch) and npm 10 or newer. Astro 7.4.7 requires Node >=22.23.4. Exact package versions and transitive dependencies are pinned in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro (normally `http://localhost:4321/protocolhub/`). Local filters work in development; **production search requires the complete build**:

```sh
npm run check
npm test
npm run build
npm run preview
```

`dist/` is the complete publication artifact: prerendered HTML, local fonts/assets, Pagefind bundles, exact identifier lookups and RFC/search destination manifests. No PHP, server API, account, external search service, or runtime content fetch is needed. Installation downloads packages; normal validation/build does not need the sibling archive or contact content sources.

## Configure hosting

Origin and base path are centralized in `src/lib/urls.mjs`. Defaults match the repository remote: `https://tintii.github.io` and `/protocolhub/`. Origin must be an HTTP(S) origin without a path. Base is an absolute directory path with no query or fragment.

```sh
SITE_ORIGIN=https://example.org SITE_BASE=/ npm run build
SITE_ORIGIN=https://example.org SITE_BASE=/ npm run preview
```

Use **the same environment values** for build, preview and checks. Navigation, content links, assets, pagination, canonical URLs, identifier lookups and Pagefind results use these values. Do not move a built artifact to a different base; rebuild it. Static routes work directly and after refresh. No SPA fallback is required. There is a useful static `404.html`.

The committed legacy map records old `.htm` paths and anchors for migration. No server redirects, PHP endpoint compatibility, or control of the old domain is assumed. This version does not publish `.htm` compatibility stubs.

## Add a protocol

Copy `content/protocol-template.md` into `content/protocols/<slug>.md`; the template outside the collection is not published. Keep the immutable `id`, unique route `slug`, provenance, aliases, multiple layer/suite values, ordered summary fields, section IDs and typed related-record IDs. Use `origin: contribution` and your own provider/source. Add Markdown or allowed HTML for tables and preformatted diagrams. See [content policy](docs/content-policy.md).

```sh
npm run validate
npm run build
```

Routing, directory rows, discovered filters, relationship backlinks and search derive from the collections. No template or search registry edits are required. `related` contains immutable protocol IDs; `glossary` contains immutable term IDs; `rfcs` contains integer numbers present in the snapshot. Unknown references, duplicate IDs/slugs/anchors, malformed RFC identifiers and unsafe markup fail validation with the offending record/field. To change a published slug, preserve its previous destination in the legacy map and add an ordinary canonical-link compatibility page; do not silently change shared URLs.

Imported records must keep the archived wording and source update strings. Add corrections in `editorialNotes` with a source URL and date. Do not change archived body text without explicitly reconciling the evidence. New contributions do not inherit the original provider's copyright.

## Migration and fidelity

The one-time migration reads `../www.protocolbase.net` without modifying it. It uses DOM extraction, strict declared-encoding decoding, UTF-8 output, an HTML allowlist, link resolution and asset copies. **Do not run it as part of ordinary builds**: it regenerates historical records and will overwrite local edits to them.

```sh
npm run migrate -- /path/to/read-only/www.protocolbase.net
npm run validate
```

`migration/manifest.json` contains every source file/hash, article destination, ordered per-section text/structure digests, glossary row mapping, local-definition reconciliation, asset hashes, anchor/route maps and link classifications. See [migration review](docs/migration.md). Supporting files are in `public/supporting/`; normalized content is self-contained. Excluded tools/resources/sample catalogs are not recreated. Embedded examples remain. Missing and malformed references retain their descriptive meaning with an availability note. All inventory counts reconcile; there are no unresolved in-scope records.

## RFC snapshot

```sh
npm run refresh:rfcs
npm run validate
npm run build
```

This explicit command fetches only `https://www.rfc-editor.org/rfc-index.xml`, rejects DTDs/custom entities, invalid XML, duplicate numbers and missing required fields, and writes a temporary file before atomic replacement. A network or validation failure leaves the previous snapshot unchanged. Review the command's added/removed/changed counts and `git diff content/data/rfcs.json`, including retrieval time and source checksum. A new protocol referencing an absent RFC must wait for a snapshot refresh or explicitly sourced supplemental metadata and validation support; no identifier is invented.

Available authors, abstracts, dates, statuses, series and update/obsolescence relationships are retained. The site links to HTTPS official documents; it stores no RFC bodies. Status is dated to the visible snapshot. RFC browsing uses 100 entries per page, ascending and descending, with one canonical newest-order entry destination manifest shared by search and references.

## Verification

```sh
npx playwright install chromium
npm run test:self-contained
npm run test:extension
npm run build
npm run test:browser
SITE_BASE=/ npm run build
SITE_BASE=/ npm run test:browser
```

Unit/integration checks cover migration evidence, unsafe markup, decoding anomalies, table spans and whitespace, link resolution, local definitions, schema/relationship failures and safe RFC refresh. The temporary extension fixture verifies automatic routes, classifications, backlinks and production search; it is removed before final output. Browser checks use a plain static server and cover all sections at 360/768/1440px, axe WCAG AA checks, 200% article text zoom, reduced motion, keyboard menu/search/focus restoration, query state, full-text searches, exact RFC forms, empty results, failed bundle loading/retry, direct deep-link refresh and no-JavaScript reading. They close their browser/server on completion. Generated screenshots/reports are ignored under `.test-output/`.

`npm run build` validates content, builds Astro, generates Pagefind, and checks every generated internal URL/fragment and custom search destination. The source audit and rendered review are recorded in [verification](docs/verification.md).

## GitHub Pages and rollback

The workflow in `.github/workflows/pages.yml` builds and browser-tests both `/` and `/protocolhub/` with `npm ci`. Pull requests never deploy. A default-branch (`master`, as the remote currently records) push or manual run on that branch uploads the exact validated `/protocolhub/` artifact. Deployment waits for **both** validation jobs; only the deployment job has `pages: write` and `id-token: write`, with deployment concurrency. It does not rebuild after validation.

Hosting setup still required: in the GitHub repository, enable **Settings → Pages → Source: GitHub Actions**; allow the `github-pages` environment to deploy from `master`. Confirm the origin/base before publication. For a custom domain or root deployment, set `SITE_ORIGIN` and change the workflow's publish matrix selection/base to `/`; configure DNS/Pages separately. Commit/push or manually run the workflow when ready to publish; this implementation task does not publish the site.

For rollback, revert to a known-good content/code/lockfile commit and rerun this workflow. It rebuilds and validates before deployment. Alternatively redeploy a retained, already validated Pages artifact for the same origin/base; never combine files from different build revisions. Retain the workflow run and commit identity as the publication record.

Design adapts [unslop by Damir Sokolovsky](https://heydamir.design/unslop), CC BY 4.0. See [design record](docs/design.md).
