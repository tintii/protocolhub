## 1. Source inventory and project foundation

- [x] 1.1 Inventory all protocol files, glossary rows, relevant assets, and links from the read-only sibling archive; record source hashes and reconcile the initial 108-file/241-row counts.
- [x] 1.2 Create `CONTENT_SOURCES.md` with the original Protocolbase/Colasoft notice, historical source URL, source snapshot identity, and treatment of new contributions.
- [x] 1.3 Initialize Astro static output, TypeScript, npm scripts, a lockfile, and documented supported tool versions.
- [x] 1.4 Add centralized origin/base-path configuration and URL helpers for routes, assets, fragments, pagination, and search artifacts.

## 2. Validated and extensible content model

- [x] 2.1 Define protocol and glossary schemas with immutable IDs, unique slugs/anchors, aliases, provenance, historical dates, multi-valued classification, and optional cross-references.
- [x] 2.2 Define ordered summary-field storage and a Markdown/sanitized-HTML policy that preserves technical tables, preformatted examples, and uncommon fields.
- [x] 2.3 Implement duplicate-ID/slug checks, relationship validation, RFC identifier validation, and diagnostics naming the offending record and field.
- [x] 2.4 Add a contributor protocol template and derive routing, directory entries, filters, and relationship backlinks from the content collections.

## 3. Faithful archive migration

- [x] 3.1 Implement DOM-based extraction with explicit character decoding, UTF-8 output, decoding-anomaly reporting, and removal of unsafe scripts and obsolete chrome.
- [x] 3.2 Convert protocol summaries and narrative sections while retaining original dates, tables/spans, packet structures, examples, local definitions, and source references.
- [x] 3.3 Convert central glossary definitions with stable anchors; reconcile duplicates, spelling/case variants, and differing protocol-local definitions without silent overwrites.
- [x] 3.4 Build legacy path/anchor and asset maps, rewrite included internal targets, copy required supporting assets, and classify missing or excluded destinations.
- [x] 3.5 Produce and commit normalized content plus a migration manifest and per-section text/structure evidence; account for every source item and document intentional transformations.
- [x] 3.6 Add focused migration checks covering complex tables, preformatted whitespace, encoding anomalies, link rewriting, glossary collisions, and unsafe markup; fail validation on unexplained loss.

## 4. Official RFC catalog data

- [x] 4.1 Implement the explicit RFC index refresh command with safe XML parsing, required-field checks, unique-number validation, temporary output, checksum, and retrieval provenance.
- [x] 4.2 Capture and commit the first validated metadata snapshot, preserving available authors, abstracts, dates, status, series, and update/obsolescence relationships.
- [x] 4.3 Resolve imported RFC citations against the snapshot, document malformed historical references, and derive protocol backlinks and official HTTPS document URLs.
- [x] 4.4 Verify successful refresh produces a reviewable diff and malformed/network-failure cases leave the previous snapshot unchanged.

## 5. Unslop design system and shared shell

- [x] 5.1 Apply the design document's five-line direction and nine-pass sequence to tokens, self-hosted typography, spacing, neutral surfaces, teal accent, and minimal Lucide icons; retain unslop method credit in design documentation.
- [x] 5.2 Build the shared header, four-section navigation, mobile menu, skip link, breadcrumb, content containers, and readable original-credit footer.
- [x] 5.3 Build reusable summary, table, preformatted-example, source-note, and packet-diagram treatments with narrow-screen overflow handling and accessible captions.
- [x] 5.4 Build the landing packet-header preview from real preserved content, and verify labels/field geometry instead of inserting decorative or invented protocol data.

## 6. Reference pages

- [x] 6.1 Build the landing page with purpose, prominent search entry, browse action, section links, protocol preview, historical-source credit, and independence statement.
- [x] 6.2 Build the prerendered alphabetical protocol directory with layer/suite filters, counts, empty/reset states, and no-JavaScript browsing.
- [x] 6.3 Build protocol detail routes with full preserved sections, summary data, contents navigation, stable anchors, historical provenance, and related-record links.
- [x] 6.4 Build the glossary with numeric/alphabetical groups, term anchors, local term/alias filtering, and complete prerendered definitions.
- [x] 6.5 Build RFC browse pages with 100 entries per page, newest/oldest ordering, snapshot date, official links, relationships, and protocol backlinks; generate one canonical entry destination manifest for search.
- [x] 6.6 Add document titles, descriptions, canonical URLs, a useful 404 page, and any supported static compatibility pages with ordinary canonical destination links.

## 7. Shared static search

- [x] 7.1 Generate a Pagefind index after the site build, indexing protocol article content and custom glossary/RFC records while excluding duplicate chrome, directory bodies, and compatibility pages.
- [x] 7.2 Add aliases, type metadata, precise anchor destinations, normalized RFC number lookup, and exact-identifier priority; verify all custom destinations against generated output.
- [x] 7.3 Build the lazy-loaded accessible search dialog with type filters, excerpts, pagination, loading/empty/failure states, focus management, Escape, and optional Ctrl/Cmd+K access.
- [x] 7.4 Add shareable query/type URL state, RFC-page scoped search, debouncing, stale-response handling, safe snippet rendering, retry, and no-JavaScript browse guidance.
- [x] 7.5 Exercise production search for a protocol acronym/alias, body-only phrase, glossary term, RFC title/author, `793`/`RFC793`/`RFC 793`, no results, failed bundle loading, and keyboard focus restoration.

## 8. Fidelity, accessibility, and extension verification

- [x] 8.1 Complete the migration reconciliation and review rendered short/long articles, packet diagrams, summary fields, local glossary content, references, and original credit against the archive.
- [x] 8.2 Check landing, directory, article, glossary, RFC, and search layouts at 360px, 768px, and 1440px; verify 200% text zoom, contrast, landmarks, keyboard use, visible focus, and reduced motion.
- [x] 8.3 Add a temporary new-protocol fixture and verify automatic article routing, layer/suite discovery, backlinks, and search inclusion without template edits; keep the fixture out of published content.
- [x] 8.4 Run schema, migration, internal-link/fragment, search-destination, and browser checks against complete builds served at both `/` and `/protocolhub/`, including direct deep-link refreshes.
- [x] 8.5 Verify normal builds need no sibling archive or upstream content fetch and that no-JavaScript readers can browse all reference content.

## 9. GitHub Pages workflow and handoff

- [x] 9.1 Add pull-request CI for locked installation, content validation, static build, search generation, and completed-artifact checks without deployment.
- [x] 9.2 Add default-branch and manual GitHub Pages deployment jobs that publish the exact validated artifact with appropriate job permissions and deployment concurrency.
- [x] 9.3 Document local development, production search preview, adding protocols, migration evidence, RFC refresh, source/license separation, origin/base configuration, Pages setup, and rollback.
- [x] 9.4 Confirm all required validation passes and record the final artifact and any concrete hosting setup still required; keep public publication separate from this planning change.
