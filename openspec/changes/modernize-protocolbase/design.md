## Context

`protocolhub` currently contains a README and OpenSpec scaffolding, with no application or existing specifications. The read-only sibling `../www.protocolbase.net` contains the original site: 108 protocol `.htm` files, `protocols.htm`, `glossary.htm` (241 apparent definition rows), `rfc.htm`, a landing page, images, and excluded sample/tools/resource sections. These are discovery counts, not a substitute for a reconciled migration manifest.

The archive identifies its provider as Colasoft Co., Ltd. and displays “© 2006 - 2007 … All rights reserved.” Protocol pages include summaries, detailed descriptions, header tables, examples, relationship trees, local glossary definitions, references, and original update dates. Some links were rewritten by the archival process; some point to missing local files or obsolete PHP endpoints. The RFC page is a form posting to an external RFC Editor service, not a saved RFC collection. Documents declare GB2312 and require deliberate decoding before UTF-8 conversion.

The user wants four primary sections on GitHub Pages, preservation of original content, original credit, search, extensibility, and an entirely new design generated through unslop. This change prepares the plan; it does not implement the website or publish it.

## Goals / Non-Goals

**Goals:**

- Preserve the available reference material and make preservation measurable.
- Make navigation, long-form reading, and search work on phones and with a keyboard.
- Keep Protocolbase's identity and clearly identify the original provider and historical text.
- Add protocols by authoring content, without editing page templates or search registries.
- Build a self-contained static site with reproducible content and search artifacts.

**Non-Goals:**

- Rebuild the packet sample catalog, tools, resources, comment forms, or old request mail workflows.
- Silently correct or claim to bring every historical technical statement up to date.
- Add accounts, analytics, a CMS, a backend, or full RFC document mirroring.
- Require the sibling archive or live upstream data during ordinary builds.
- Add a fifth primary navigation section for search or credits; credits live in the landing page and shared footer.

## Decisions

### 1. Astro static output, TypeScript, and a small interactive layer

Use Astro to prerender the site, content schemas to validate records, semantic HTML/CSS for presentation, and small TypeScript modules for search, filters, and mobile navigation. Start with npm and a committed lockfile; select and pin supported tool versions when implementing. Avoid a client-side routing dependency: every article has a real HTML destination. Astro documents both [static GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/) and [validated content collections](https://docs.astro.build/en/guides/content-collections/).

Alternatives considered: a React SPA would add routing and hydration work to a mainly textual reference; hand-maintained HTML would make content extension and validation harder; a runtime CMS would introduce hosting outside GitHub Pages. Astro gives a useful separation between content and reusable presentation without those requirements.

### 2. Four sections with ordinary document URLs

| Destination | Purpose |
| --- | --- |
| `/` | Explain the reference, prominent search, browse action, a real protocol preview, section links, original-source credit |
| `/protocols/` | Alphabetical directory with layer and suite filters; retain the archive's layer groupings as historical metadata |
| `/protocols/<slug>/` | Full protocol article with summary, contents navigation, original sections, references, and related entries |
| `/glossary/` | Alphabetical definitions, number group, letter jump links, local filtering, stable per-term anchors |
| `/rfcs/` | Searchable RFC metadata catalog, paginated static browsing, number lookup, and official document links |

RFC browse pagination is nested within `/rfcs/`; it is not another primary section. Global search opens an accessible dialog from the shared header and landing search form. Store its query and type filter in the current page's URL (`?q=...&type=...`) so it is shareable without a dedicated search route. Article navigation, glossary anchors, and RFC browsing remain usable without JavaScript.

Alternative: exactly four HTML documents would force all protocol articles into one enormous page. Four sections plus detail routes preserve the requested scope while keeping links and reading practical.

### 3. Unslop direction: a networking field guide

The source audit finds an older hand-built site rather than an AI-generated interface: table-based page layout, 65–75% text sizing, extremely small attribution, inconsistent spacing, uppercase article navigation, and dense forms. There is no existing implementation here to polish. The user explicitly requests a fresh design; retain content and product identity, not the legacy visual structure. The following is the proposed direction for implementation, not a claim that a screen has already been rendered or reviewed.

- **Product:** Protocolbase helps networking students and practitioners look up protocols, terminology, and their RFC references.
- **Character:** Precise, studious, approachable.
- **World:** Engineering reference manuals and packet inspection worksheets.
- **Moments:** A carefully typeset packet-header excerpt in the landing hero, and the original protocol diagrams rendered legibly within articles.
- **Signature:** A small bit-offset ruler attached to packet diagrams, reused in the landing preview; it is never decorative page chrome.

Use a light graphite reference surface (`#fafafa` background, white reading surface, `#f4f4f5` raised controls), ink text (`#171717`, `#525252`, `#737373` roles), and one restrained deep-teal accent (`#0f766e`). Verify every actual text/surface combination for contrast. Use IBM Plex Sans for interface and prose and IBM Plex Mono for protocol identifiers, bit fields, and RFC numbers, self-hosted with license notices and system fallbacks. Type weights are 400 and 500, with 600 reserved for rare emphasis. Protocol acronyms and proper technical names retain their original casing; sentence-case UI rules never turn TCP into “Tcp”.

Apply unslop's nine passes in order:

1. **Spacing:** 4px scale, 16px mobile and 32px desktop edges, 24px within groups, 48–80px between major sections, consistent 44px minimum primary touch controls.
2. **Color:** One neutral ramp and one accent; semantic highlighting must carry meaning. No gradient headings, glowing borders, or decorative washes.
3. **Icons:** Use a small subset of Lucide at 18px/1.5 stroke for search, menu, close, and external destinations; text labels do most of the work.
4. **Copy:** “Network protocols, explained” as a proposed landing headline; “Search”, “Browse protocols”, and “Open RFC” as direct actions. Preserve historical article prose and technical punctuation; these UI copy rules apply to newly written interface text.
5. **Type:** 16–18px reading text at roughly 1.6 line-height and a 68–76ch measure; 14px metadata; 32–36px page titles; 56px desktop/36px mobile landing headline. Tabular numerals for RFC identifiers and bit offsets.
6. **Layout:** An asymmetric landing hero places the introduction and search beside a real packet-header preview. Directories use aligned rows, not repeated promotional cards. Articles use a readable central column and desktop contents rail, collapsed into native disclosure on mobile.
7. **Details:** 8px input/button radii, quiet rules, visible focus rings, real table captions, consistent breadcrumbs, and monospace metadata. Original-source credit is readable body-scale text, not an almost invisible footer.
8. **Visuals:** Build the packet preview from preserved structure in HTML/SVG so labels stay selectable and correct. Use the source IPv6 header as the initial candidate; verify field geometry against the source. The reference content itself supplies the visual moment. No raster asset is required by this proposal. If a generated scene is explored later, it must support this direction and cannot replace the meaningful protocol preview.
9. **Motion:** Static diagrams, 120–180ms color/opacity feedback, no looping animation, and respect `prefers-reduced-motion`.

Target WCAG 2.2 AA behavior: semantic landmarks, skip link, logical headings, visible focus, accessible names, 4.5:1 normal text contrast, keyboard use, and 200% zoom. Wide technical tables and ASCII diagrams may scroll inside labeled containers, never widen the entire page. Validate 360px, 768px, and 1440px viewports.

This direction adapts the unslop method by [Damir Sokolovsky](https://heydamir.design/unslop), [@heydamir](https://x.com/heydamir), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Retain this credit in design documentation and any copied/adapted skill material. It is distinct from the original Protocolbase content credit.

### 4. Editable content with explicit provenance

Use Markdown protocol records with frontmatter; allow a sanitized HTML subset for complex historical tables and diagrams that cannot be faithfully expressed in Markdown. Use structured glossary records and a normalized RFC JSON snapshot. Do not make article authors maintain arbitrary UI components.

| Record | Required core | Optional/derived data |
| --- | --- | --- |
| Protocol | immutable ID, unique slug, name, expanded name when present, origin, body, source/provenance | aliases, suites, layers, structured summary fields, original update string, RFC numbers, related IDs, glossary IDs, separate editorial notes |
| Glossary term | immutable ID, term, definition, origin, provenance | aliases, stable anchor, related protocol IDs |
| RFC | number, title, official URL, snapshot provenance | authors, publication date, abstract, status, series, updates/obsoletes relationships; availability follows upstream |
| Migration entry | source path/hash, destination ID/URL, extraction status | asset map, anchor map, deduplication decision, missing-link classification, reviewed exception |

Keep the complete original summary field set as ordered key/value data instead of dropping uncommon fields such as EtherType, MIBs, working groups, or historical “Latest Version”. Multiple layers and suites are supported. Preserve original classification and dates as source claims; editorial corrections belong in separately labeled notes with their own sources and dates. Do not infer that historical update timestamps have a known timezone.

For new protocols, the author supplies original or cited provenance rather than inheriting Colasoft credit automatically. Build-derived lists and relationship backlinks use IDs. Slug changes require aliases in the migration/route map. A new record automatically participates in routing, browsing, and search. Schema and relationship checks reject duplicate IDs/slugs, unknown references, malformed RFC identifiers, and unsafe HTML.

Alternative: copying entire legacy pages into an iframe would preserve rendering but also preserve inaccessible navigation, obsolete forms, and duplicated chrome. Aggressive summarization would lose the content the user explicitly wants retained.

### 5. Auditable, one-time migration

Read the sibling archive without modifying it. Decode the declared encoding, flag replacement characters and anomalies, parse the DOM, and extract content rather than stripping tags with regular expressions. Normalize whitespace and entities only where meaning is unchanged. Preserve preformatted spaces, field widths, list order, table spans, link labels, and examples. Remove scripts, event handlers, legacy style/layout attributes, duplicated navigation/footer, and retired forms through an explicit allowlist.

Produce a committed manifest covering every source article, glossary row, relevant asset, and reference. Classify each as migrated, merged with recorded provenance, intentionally excluded with reason, or unresolved. No in-scope item may silently disappear. Keep protocol-local glossary definitions when they differ from the central glossary; only merge exact duplicates. Resolve case variants such as Telnet/TELNET through explicit decisions instead of automatic lowercase merging.

Preserve substantive narrative sections and their order. Remove empty section wrappers only when the manifest records them as empty. Keep examples embedded in articles; linked sample files can be copied as supporting assets when present without recreating a samples section. If an asset or destination is absent, retain descriptive text and label its unavailability. Map included archive paths and anchors to canonical internal routes; leave identifiable external references as external links. Do not fabricate RFC numbers for malformed links such as `rfc.txt`.

Validation compares normalized per-section text, heading presence, tables/cells/spans, preformatted blocks, images, and reference targets against source extraction. Every mismatch requires a documented reconciliation. Read representative short and long articles, a complex packet diagram, and glossary definitions in rendered output. Commit the normalized content and audit evidence so builds never depend on `../www.protocolbase.net`.

### 6. Attribution belongs in the reading experience

Landing credit: “Based on Protocolbase, originally provided by Colasoft Co., Ltd.” Link the source name to `http://www.protocolbase.net/` as the historical source, without asserting current availability or affiliation. The shared footer retains “Original Protocolbase content © 2006–2007 Colasoft Co., Ltd. All rights reserved.” Article provenance identifies the original page and original update date when present, and explains that it is historical material preserved by an independent rebuild. Landing prose also makes that independence clear.

Keep `CONTENT_SOURCES.md` with source identity, migration snapshot hashes, copyright notices, and later contribution sources. Do not apply a new code license to inherited content or imply attribution alone changes its terms. Missing reuse information is documented as unknown, not invented. New contributions receive their own source labeling.

### 7. One static search service for all reference types

Use Pagefind after the static build. Index protocol article bodies with section anchors; exclude shared navigation, footer, migration reports, redirect stubs, and repeated directory text. Add each glossary term and RFC metadata record as a custom record so results have precise destinations rather than repeatedly pointing to a giant page. Pagefind's [Node API supports adding custom records alongside a built HTML directory](https://pagefind.app/docs/node-api/).

Each result includes title, type, excerpt, and destination. Glossary URLs include the stable term fragment. RFC URLs point to the record's static browse page and `#rfc-<number>`; that entry links to the official RFC. Type filters are All, Protocols, Glossary, and RFCs. The RFC page uses the same search index constrained to RFC records. Numeric lookup normalizes `793`, `RFC793`, and `RFC 793`; exact identifier/name matches are ranked ahead of incidental prose matches through an explicit lookup merge if necessary. Alias terms are indexed. Do not promise typo tolerance in this version.

Lazy-load search code and index on intent. Debounce typing, ignore stale asynchronous responses, paginate results, and escape/sanitize snippets. URL query values are treated as text. Dialog interactions include explicit open and close controls, Escape, managed focus, focus return, and an optional Ctrl/Cmd+K shortcut that does not intercept typing. Announce loading/result counts/empty/failure states. Empty queries show guidance rather than an arbitrary complete corpus; failure offers retry and browse links. With scripting disabled, show a clear search limitation and links to the static directories.

Alternative: a hosted search API creates a service dependency; a single eager JSON full-text index becomes wasteful as the RFC catalog grows. Pagefind provides static, incrementally loaded search artifacts; test the production build because search indexing happens after page generation.

### 8. RFC metadata is a dated, refreshable snapshot

Retrieve the official [RFC XML index](https://www.rfc-editor.org/rfc-index.xml) with an explicit maintenance command. Normalize all published RFC entries and present fields available from the source, including update/obsolescence relationships and series identifiers. Store the upstream URL, fetched timestamp, and checksum with the snapshot. Do not claim a snapshot's statuses are live. RFC bodies remain at authoritative HTTPS destinations; the [RFC Editor search](https://www.rfc-editor.org/search/) is an escape hatch for the live catalog.

Refresh downloads to a temporary file, validates unique numbers and required fields, produces a reviewable diff, and only replaces the snapshot after success. Disable XML external entity resolution. Network or parse failures leave the prior snapshot intact. Ordinary builds are offline with respect to content data. A newly referenced RFC must exist in the snapshot or a validated supplemental entry carrying official provenance; otherwise fail with a useful instruction to refresh/add metadata.

Generate static browse pages of 100 entries sorted by RFC number, with stable page/anchor destinations computed from the same manifest used by search. Number/title/author/abstract search stays local; provide newest/oldest browse order and links between pages. Do not recreate the obsolete FTP or file-format controls. Global search covers RFC metadata, not the full RFC text. Derive protocol backlinks from validated RFC references.

Alternative: index only RFCs cited by the old archive would lose the original page's broad RFC lookup purpose. Mirroring full text would expand scope and payload without helping the requested modernization.

### 9. Base-path-safe publication and verification

Configure origin and base path explicitly. Default to the repository project path `/protocolhub/` once repository metadata confirms it; support `/` without rewriting content. Central URL helpers cover navigation, assets, canonical links, search bundle imports, custom search records, pagination, and fragments. Do not use a SPA fallback or promise server redirects from GitHub Pages.

Keep a legacy route map for migration and link rewriting. Where static compatibility pages are emitted for `.htm` paths, give them a canonical link and a normal destination link; exclude them from search. Do not promise PHP endpoint compatibility or redirects from the old domain without control of its hosting. Provide a useful static 404 page.

CI installs locked dependencies, validates schemas/migration/link maps, builds pages, generates the search index, and checks the completed artifact before publication. Pull requests build without deploying. GitHub Actions publishes the same validated output from the default branch and via manual dispatch, with build and deployment jobs separated. Test root and subpath output with a static server and real browser deep links, refreshes, and search. No secrets or runtime API keys are needed by the frontend.

## Risks / Trade-offs

- **Historical inaccuracies and classifications** → Label source dates clearly, preserve the original wording, and separate sourced editorial notes from archival prose.
- **Lossy import from malformed HTML or mixed encodings** → Require manifest reconciliation, structural/text comparisons, and rendered review before marking migration complete.
- **Original copyright notice and incomplete provenance** → Retain notices and source records, document what is unknown, and keep inherited content outside any new code-license claim.
- **Large RFC catalog and stale metadata** → Store a dated snapshot, paginate static browsing, load search progressively, and provide an explicit refresh process plus official links.
- **Broken archived links** → Rewrite known internal destinations, classify missing targets, and preserve their meaning without generating dead internal links.
- **Search available only with JavaScript** → Keep all content, directories, anchors, and RFC pagination prerendered; disclose the limitation when scripting is off or loading fails.
- **Project-path deployment errors** → Exercise the complete artifact under both `/` and `/protocolhub/`, including search chunks and direct article loads.

## Migration Plan

1. Inventory the source, commit migration expectations, and establish schemas and source notices.
2. Implement and audit the importer; commit normalized content and required supporting assets.
3. Capture a validated official RFC metadata snapshot and build its refresh workflow.
4. Implement the unslop direction, shared shell, four sections, and protocol templates.
5. Build the search index and accessible search interface, then reconcile links and source attribution.
6. Validate fidelity, accessibility, extension by adding a temporary protocol fixture, and production output under both base paths.
7. Prepare the GitHub Pages workflow and deployment documentation. Public publication is a separate implementation action; this proposal changes no hosting.

Rollback uses the prior validated Pages artifact or rebuilds the prior repository commit. The original sibling archive is unchanged, so content conversion can be audited or repeated. Failed refreshes never replace the last valid RFC snapshot.

## Open Questions

- Final origin/custom domain is unspecified. Use configurable repository-path hosting initially; no custom domain is required.
- Some source links and reuse/provenance details may be unrecoverable. Record concrete findings during the inventory; do not silently fill gaps.
- Exact dependency versions and RFC snapshot counts are selected during implementation and recorded in the lockfile and snapshot metadata.

None of these prevents implementing the proposed defaults.
