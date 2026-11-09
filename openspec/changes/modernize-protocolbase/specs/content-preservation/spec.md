## ADDED Requirements

### Requirement: Reconciled migration inventory
The migration SHALL inventory every protocol source file, glossary definition row, relevant supporting asset, and content reference. Each entry MUST record its source identity and a migrated, merged, intentionally excluded, or unresolved disposition. Every merge or exclusion MUST include a reason. Release validation MUST fail on unresolved in-scope entries or unexplained count discrepancies.

#### Scenario: Reconcile the initial archive
- **WHEN** migration is validated against the available source snapshot
- **THEN** all 108 discovered protocol HTML files and 241 apparent glossary term rows are accounted for
- **AND** any corrected inventory counts or duplicate records have explicit evidence and destinations

### Requirement: Preserve substantive material
Migration SHALL preserve original prose, technical metadata, substantive section order, tables and spans, packet fields, preformatted examples, relationships, local definitions, and reference labels. It SHALL decode content to UTF-8, preserve meaningful whitespace, and flag decoding anomalies. It SHALL remove obsolete page chrome and executable HTML without silently discarding content.

#### Scenario: Convert a complex article
- **WHEN** an article containing a header table, ASCII diagram, and uncommon summary fields is migrated
- **THEN** each structure and field is present in the new article
- **AND** normalized text and structure comparisons identify no unexplained losses

#### Scenario: Encounter a differing local definition
- **WHEN** a protocol-local glossary definition differs from the central glossary definition for the same term
- **THEN** both source meanings are retained with provenance rather than one silently replacing the other

### Requirement: Historical content is distinguishable from new work
Imported records SHALL carry original source identifiers, original update dates when present, and historical-content labeling. Corrections or later additions SHALL carry their own sources and dates and SHALL be distinguishable from the preserved text. New original records SHALL NOT inherit Colasoft authorship automatically.

#### Scenario: Add an editorial correction
- **WHEN** a maintainer adds a sourced correction to an archived technical statement
- **THEN** the original statement remains identifiable and the correction is separately labeled with provenance

### Requirement: Visible original attribution
The landing page SHALL credit Protocolbase and Colasoft Co., Ltd., link to the historical source, and identify the rebuild as independent. Every page SHALL retain a readable original-content footer notice including © 2006–2007 Colasoft Co., Ltd. and “All rights reserved.” Imported articles SHALL expose their source page and original update date when available. Repository source documentation SHALL retain copyright and provenance information separately from any new code license.

#### Scenario: Reader arrives from search
- **WHEN** a reader lands directly on an imported article
- **THEN** the original provider, copyright notice, historical provenance, and rebuild independence can be identified without visiting another section

### Requirement: Stable and honest links
The content pipeline SHALL map included legacy paths and anchors to stable destinations, preserve aliases when slugs change, and validate internal links and assets. It SHALL classify unavailable or excluded targets explicitly and SHALL NOT invent missing documents, RFC numbers, or internal routes.

#### Scenario: Archived link targets an included protocol
- **WHEN** the importer encounters an archived relative, absolute, or encoded link to a migrated protocol section
- **THEN** it rewrites the link to the canonical protocol route and matching section anchor

#### Scenario: Supporting material is unavailable
- **WHEN** an article references a missing asset or excluded page
- **THEN** the reference's descriptive meaning is retained with an explicit unavailable or external-source treatment
- **AND** no dead internal link is emitted

### Requirement: Content-only extension workflow
Protocol content SHALL use validated records separated from presentation, with unique immutable IDs and slugs, provenance, body content, aliases, multi-valued classification, and typed cross-references. Adding a valid record SHALL automatically generate its article, directory presence, relationship backlinks, and search entry without editing templates or hand-maintained registries. Contributor documentation SHALL include a working template and validation commands.

#### Scenario: Add a future protocol
- **WHEN** a contributor adds a valid protocol record with related IDs and RFC references and rebuilds
- **THEN** its article, applicable directory filters, related-record backlinks, and search result are generated automatically

#### Scenario: Invalid contribution
- **WHEN** a record duplicates an ID or slug, references an unknown protocol, or includes unsafe HTML
- **THEN** validation fails with the record and invalid field identified

### Requirement: Read-only source and self-contained output
The migration SHALL leave the original sibling archive unchanged and commit the normalized content, supporting assets, source hashes, and reconciliation evidence required for normal builds in this repository.

#### Scenario: Build on another machine
- **WHEN** a clean checkout has no sibling archive
- **THEN** content validation and the normal site build succeed using committed inputs
