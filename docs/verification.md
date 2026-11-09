# Verification record

Completed on 6 November 2026 for `modernize-protocolbase`. The supported Node 24 run used **Node 24.22.2**; locked installation used npm 11.10.1. Tests ran locally on macOS with Playwright Chromium and a plain static HTTP server. GitHub Actions is configured for Node 24 on Ubuntu; a hosted workflow/deployment has not been run in this session.

## Results

- `npm ci`: successful locked installation; audit reported zero vulnerabilities.
- `npm run check`: zero errors and zero warnings (two dependency deprecation hints for fast-xml-parser's validator export).
- `npm test`: **14/14 passed**, including content evidence, decoding failure, unsafe/obfuscated HTML, glossary collisions, list normalization, literal HTML examples, RFC parsing and atomic refresh failure handling.
- Complete builds at **`/` and `/protocolhub/`**: **311 HTML pages, 10,203 search destinations and 11,400 unique internal URLs** each. Every generated internal path/fragment, asset and custom search destination resolves. Rendered article sections match preserved text, ordered list text, table spans, preformatted whitespace and structural evidence.
- Browser suites passed at both bases. Home, directory, TCP, IPv6, short AARP, long SNMP, glossary and RFC pages were checked at 360px, 768px and 1440px. Axe WCAG A/AA checks passed on these pages and the open search dialog. All eight page types passed doubled computed text sizes at 360px without page-wide horizontal overflow; wide diagrams remain in scroll regions. Keyboard menu/open/close, focus restoration, reduced motion, direct deep-link reloads and no-JavaScript reading passed.
- Production search passed acronym/alias, body-only phrase, glossary term, RFC title/author, `793` / `RFC793` / `RFC 793` exact priority and entry links, type filters, pagination, query sharing, empty results, untrusted query text, failed bundle loading and retry. RFC-scoped search uses the same index.
- A temporary contribution produced its own article, new layer/suite filters, protocol/glossary/RFC backlinks and alias search result. Its 312-page/10,204-record artifact was discarded, and the fixture was removed before the final publication artifact.
- The isolated self-contained build passed with no sibling archive available and outbound HTTP/fetch explicitly blocked. It used the committed content snapshot and produced the complete searchable artifact.
- All **148 source archive file hashes** were rechecked unchanged. The inventory reconciles 108 articles, 241 central definitions, 1,428 protocol-local definitions, 15 supporting assets and 4,197 content references. See [migration reconciliation](migration.md).
- `openspec validate modernize-protocolbase --strict`: passed.

## Final local artifact

The complete artifact is `dist/`, configured for origin `https://tintii.github.io` and base `/protocolhub/`. It contains **10,772 files / 39,598,321 bytes**, including Pagefind's per-record fragments. Preview it with `npm run preview` and open the Local URL printed by Astro. A root-hosted build requires rebuilding with `SITE_BASE=/`.

Artifact tree SHA-256: `285cc87d0aeb28b48976bbd7ea6bc1f14896b6cbbab6ed78186b5e7e803b4da8`. This is the SHA-256 of JSON-encoded, relative-path-sorted `[path, file SHA-256]` pairs; sorting uses JavaScript `localeCompare`. A new build or different base produces its own artifact identity.

The normalized archive, official RFC snapshot, migration evidence and supporting assets were committed locally in **`ecebbb8`**. Application, workflow, documentation and task-status changes remain available in the workspace for review.

## Hosting setup

Public publication remains separate. Enable repository Settings → Pages → Source: **GitHub Actions**, permit the `github-pages` environment to deploy from `master`, and confirm origin/base. The workflow builds/tests both bases and deploys only the exact validated subpath artifact after both jobs pass. Push/run the workflow when publication is intended. No Site registration, remote push or public deployment was performed by this implementation.

See [README](../README.md) for development, contribution, refresh, Pages setup and rollback instructions, and [content sources](../CONTENT_SOURCES.md) for inherited copyright and separate contribution provenance.
