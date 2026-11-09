## Why

Protocolbase contains a substantial networking reference whose early web presentation makes it difficult to browse, read on mobile, and search. Rebuild it as an accessible, fast GitHub Pages site that preserves the original knowledge and attribution while making future protocols straightforward to add.

## What Changes

- Build four primary sections: landing page, protocols, glossary, and RFCs. Protocol articles belong within the protocols section; search is a shared interface rather than another primary section.
- Preserve the available original protocol articles, definitions, tables, packet diagrams, examples, relationships, references, and historical update dates. Inventory all 108 protocol HTML files and the glossary's 241 apparent term rows, reconciling duplicates and extraction exceptions explicitly.
- Credit Protocolbase and Colasoft Co., Ltd. prominently, retain the original © 2006–2007 notice, link to the original source, and distinguish the independent rebuild and subsequent contributions from the historical material.
- Create a fresh visual direction using the unslop skill: a precise, approachable technical field guide with readable long-form content, a packet-header signature, and restrained color. The original layout and styling are not constraints.
- Add local full-text search across protocols, glossary definitions, and RFC metadata, with type filters, meaningful result excerpts, direct links, and keyboard-accessible controls.
- Replace the archived RFC form's obsolete server dependency with a searchable, dated snapshot of the official RFC metadata index and links to authoritative documents. Do not mirror RFC bodies.
- Organize content separately from presentation with validated records, stable identifiers, reusable article templates, and contributor documentation. Adding a protocol automatically updates routes, browsing, relationships, and search.
- Generate static output and a GitHub Actions deployment workflow that supports both repository subpaths and root hosting.

Packet sample browsing, tools, resources, accounts, comments, a CMS, and a wholesale technical rewrite of the archive are out of scope. Embedded article examples remain in scope; historical references to excluded sections receive explicit treatment instead of becoming broken internal links.

## Capabilities

### New Capabilities

- `reference-experience`: Four-section navigation, protocol browsing and reading, glossary, and the accessible unslop-derived presentation.
- `content-preservation`: Faithful migration, provenance and original credit, stable identifiers, link reconciliation, and extensible content authoring.
- `reference-search`: Shared static full-text search with filtering, precise destinations, and accessible interaction states.
- `rfc-catalog`: Searchable official RFC metadata snapshot, authoritative outbound links, protocol backlinks, and reproducible refreshes.
- `static-publication`: Reproducible builds, base-path-safe GitHub Pages output, automated validation, and deployment.

### Modified Capabilities

None. This repository has no existing capability specifications or website implementation.

## Impact

Creates the frontend, content collections, migration tooling, search index generation, validation, contributor documentation, and GitHub Actions configuration in `protocolhub`. The sibling `../www.protocolbase.net` archive is a read-only migration source; normal builds must work from this repository alone.

The proposed stack is Astro with TypeScript, semantic HTML and CSS, and Pagefind for static search. RFC metadata is refreshed explicitly from the RFC Editor and checked in for deterministic builds. No application server, runtime database, or hosted search service is required. Source copyright and provenance remain distinct from any license selected for newly written code.
