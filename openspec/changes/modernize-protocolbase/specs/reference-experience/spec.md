## ADDED Requirements

### Requirement: Four primary sections
The site SHALL expose Home, Protocols, Glossary, and RFCs as its only primary navigation sections, preserve the Protocolbase name, and provide shared search access on every content page. Protocol detail routes and RFC browse pagination SHALL belong to their respective sections.

#### Scenario: Navigate from an article
- **WHEN** a reader opens a protocol article directly
- **THEN** all four primary sections, shared search, a breadcrumb to Protocols, and the current section state are available
- **AND** packet samples, tools, resources, accounts, and comments are not offered as site sections

### Requirement: Useful landing page
The landing page SHALL explain the networking reference, provide prominent search and a browse-protocols action, link to the glossary and RFC catalog, show a meaningful protocol-content preview, and visibly credit the original source. It SHALL NOT present historical additions as newly published content.

#### Scenario: First visit
- **WHEN** a reader opens the landing page
- **THEN** they can identify the reference's purpose, search it, browse protocols, and see that it is an independent rebuild of the original Protocolbase
- **AND** any displayed counts are derived from the migrated data

### Requirement: Protocol directory
The protocol directory SHALL list all published protocol records alphabetically and allow filtering by available layer and suite metadata. It SHALL preserve multi-valued historical classifications, expose a clear reset action, and support ordinary links to each article without JavaScript.

#### Scenario: Combine filters
- **WHEN** a reader selects a suite and a layer
- **THEN** the directory shows records matching both filters with a result count
- **AND** an empty result displays a clear message and reset action

#### Scenario: Browse without scripting
- **WHEN** JavaScript is disabled
- **THEN** every published protocol remains discoverable through static directory links

### Requirement: Complete protocol articles
Protocol articles SHALL display preserved summary metadata and substantive sections in their original order, retain examples and references, expose stable section anchors and a contents navigation, and link resolved related records. Historical update dates SHALL be labeled as source dates.

#### Scenario: Follow a section link
- **WHEN** a reader opens an article URL with a section fragment
- **THEN** the corresponding preserved section is present and reachable
- **AND** its tables, diagrams, examples, and prose remain accessible within the article

### Requirement: Glossary reading and filtering
The glossary SHALL present all migrated definitions in alphabetical groups with a numeric group, letter navigation, stable term anchors, and local term/alias filtering. Definitions SHALL remain available as prerendered content.

#### Scenario: Open a definition from a shared link
- **WHEN** a reader opens a glossary term's fragment URL
- **THEN** the named term and its full definition are visible without executing search

#### Scenario: Search an alias in the glossary
- **WHEN** a reader filters by a stored alias
- **THEN** the matching term and definition are shown
- **AND** clearing the filter restores the complete glossary

### Requirement: Distinctive and accessible presentation
The UI SHALL implement the documented unslop direction using a neutral reference surface, one restrained accent, consistent spacing, readable typography, and meaningful packet diagrams. It SHALL retain technical acronym casing and original content wording. It SHALL provide semantic landmarks, a skip link, accessible control names, visible focus, keyboard navigation, normal-text contrast of at least 4.5:1, and reduced-motion support.

#### Scenario: Read on a narrow display
- **WHEN** a reader uses a 360px-wide viewport or zooms text to 200%
- **THEN** navigation and prose remain usable without page-wide horizontal overflow
- **AND** wide technical tables or diagrams scroll within labeled containers without losing their content

#### Scenario: Use keyboard and reduced motion
- **WHEN** a reader operates the menu, links, filters, and article navigation using a keyboard with reduced motion enabled
- **THEN** focus is visible, controls are operable, and nonessential motion is disabled
