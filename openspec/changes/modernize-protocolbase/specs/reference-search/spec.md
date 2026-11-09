## ADDED Requirements

### Requirement: Search all reference types locally
Search SHALL cover protocol titles, aliases, summary metadata and body text; glossary terms, aliases and definitions; and RFC numbers, titles, authors and available abstracts. Search SHALL run from static generated assets without a runtime backend or hosted search service. It SHALL exclude repeated navigation, footer text, redirect stubs, and migration reports.

#### Scenario: Find body text
- **WHEN** a reader searches for a phrase present in a protocol description but absent from its title
- **THEN** the matching protocol appears with a useful excerpt and a link to its article or section

#### Scenario: Search three content types
- **WHEN** a query matches a protocol, a glossary definition, and RFC metadata
- **THEN** all matching types are eligible to appear with distinguishable type labels

### Requirement: Precise identifiers and destinations
Search SHALL match stored aliases and prioritize exact protocol identifiers, glossary term names, and normalized RFC numbers over incidental body matches. Each result SHALL include a title, type, excerpt when available, and a valid base-path-aware destination. Glossary and RFC results SHALL target individual entry anchors.

#### Scenario: Normalize an RFC query
- **WHEN** a reader searches for `793`, `RFC793`, or `RFC 793`
- **THEN** the RFC 793 metadata entry is the highest-ranked RFC match and links to its entry

#### Scenario: Open a glossary match
- **WHEN** a reader follows a glossary search result
- **THEN** the destination exposes that term's full definition rather than only the top of the glossary

### Requirement: Shared filters and shareable query state
Search SHALL provide All, Protocols, Glossary, and RFCs type filters and paginated results. Query and selected type SHALL be represented in the current page URL. The RFC page SHALL reuse the search service constrained to RFC metadata. Empty queries SHALL show guidance rather than automatically dumping the corpus.

#### Scenario: Share a filtered query
- **WHEN** a reader opens a URL containing a search query and type filter
- **THEN** search restores that query and filter and shows matching results

#### Scenario: Rapid query changes
- **WHEN** a reader changes the query while an earlier request is pending
- **THEN** only the latest query's response is displayed

### Requirement: Accessible search interaction
The shared search dialog SHALL be operable by keyboard and touch, have an accessible name and explicit close control, manage focus while open, close on Escape, and restore focus to its trigger. It SHALL announce loading, result counts, no matches, and failures. Keyboard shortcuts SHALL NOT interfere with text entry.

#### Scenario: Complete a keyboard search
- **WHEN** a reader opens search, enters a query, selects a result, or closes the dialog using only the keyboard
- **THEN** all actions are reachable with visible focus and the dialog does not strand focus

### Requirement: Robust progressive search loading
The site SHALL load search dependencies on intent, safely render query strings and snippets, and provide useful loading, empty, failure, and no-JavaScript states. A failure SHALL offer retry and static browsing links while leaving content accessible.

#### Scenario: Search bundle fails to load
- **WHEN** the search bundle cannot be fetched
- **THEN** the reader receives a clear failure message, retry action, and links to browse reference sections
- **AND** no article or directory becomes inaccessible

#### Scenario: Untrusted query text
- **WHEN** a query contains HTML markup or script-like text
- **THEN** it is rendered as text and no executable content is inserted
