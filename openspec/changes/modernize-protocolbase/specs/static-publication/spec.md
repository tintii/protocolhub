## ADDED Requirements

### Requirement: Self-contained static artifact
The build SHALL produce prerendered HTML, styles, scripts, local assets, and search indexes suitable for GitHub Pages. It SHALL require no runtime server, database, API key, PHP execution, or external search service. Locked dependencies and committed content inputs SHALL be sufficient to build from a clean checkout.

#### Scenario: Serve the build with a static server
- **WHEN** the complete build output is served by a static file server
- **THEN** all four sections, protocol details, glossary anchors, RFC browsing, and JavaScript-enabled search work without application endpoints

### Requirement: Configurable root and repository-path hosting
The site SHALL accept an explicit origin and base path and apply them consistently to navigation, article links, pagination, assets, canonical metadata, search bundles, search result URLs, and fragments. Every content route SHALL resolve directly and on refresh without a SPA fallback.

#### Scenario: Deploy below a repository path
- **WHEN** the site is built with base path `/protocolhub/`
- **THEN** deep links, assets, search chunks, and all internal search results resolve within that base path

#### Scenario: Deploy at the root
- **WHEN** the same source is built with base path `/`
- **THEN** the site works without retaining the repository prefix in internal destinations

### Requirement: Missing routes and compatibility treatment
The site SHALL provide a static 404 page with useful reference navigation. Any emitted legacy compatibility pages SHALL identify the canonical destination, include an ordinary link to it, and be excluded from search. The site SHALL NOT depend on server redirects or control of the original Protocolbase domain.

#### Scenario: Unknown URL
- **WHEN** a reader reaches a nonexistent route
- **THEN** a useful 404 page links to the reference sections and offers search where scripting is available

### Requirement: Validate the exact artifact before publication
CI SHALL validate content schemas, references, migration reconciliation, internal URLs and fragments, and search record destinations; build the static site; and generate search assets before any deployment. Pull requests SHALL run checks without publishing. The default-branch and manual deployment workflows SHALL publish the same artifact that passed validation.

#### Scenario: Broken content is proposed
- **WHEN** a change introduces a duplicate slug, missing internal destination, or unresolved migration discrepancy
- **THEN** CI fails with a useful diagnostic and deployment does not proceed

#### Scenario: Valid default-branch build
- **WHEN** all validation and build steps succeed for the deployment revision
- **THEN** the deployment job uses the resulting artifact, including its generated search assets

### Requirement: Document maintenance and rollback
Repository documentation SHALL describe local development, production search preview, adding protocols, content validation, RFC snapshot refresh, origin/base configuration, GitHub Pages setup, and rollback to a prior validated artifact or commit.

#### Scenario: Maintainer follows setup documentation
- **WHEN** a maintainer uses a clean checkout and follows the documented commands
- **THEN** they can build and preview the complete searchable site without the sibling archive
- **AND** identify the steps needed to deploy or restore a previous version
