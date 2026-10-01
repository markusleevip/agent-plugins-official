# FCode Official Plugins

This repository is the official remote plugin directory for FCode, maintained by markusleevip. It is based on the [Anthropic Claude Code plugin directory](https://github.com/anthropics/claude-plugins-official). FCode maintains its own catalog identity and compatibility choices; individual plugins retain their original authorship.

## Use in FCode

Open Plugin Marketplace in FCode to browse this directory, view plugin components, and install plugins. The canonical marketplace identity is `fcode-plugins-official`. Custom plugin sources and plugin creation remain available in FCode.

The catalog is located at `.claude-plugin/marketplace.json`. Relative plugin sources are distributed in this repository; external sources are downloaded from their listed repositories at pinned commits. A catalog listing does not guarantee compatibility with every FCode runtime feature.

## Office plugins

The featured `documents`, `pdf`, `presentations`, and `spreadsheets` entries install individual document skills from [anthropics/skills](https://github.com/anthropics/skills), retaining that repository's resources and license materials. Their stable FCode identities are retained. If an existing installation includes bundled office resources, bundled entries take precedence. See the upstream skill license and requirements before use.

## FCode builtins

Upstream `browser-use` and `skill-creator` catalog entries are excluded because FCode ships its own implementations with those names. Remote entries must not override bundled runtime capabilities.

## Maintenance

Sync changes from the upstream directory, retaining this catalog's identity, office entries and exclusions. Review and validate source and SHA changes before publishing. Plugin renames require explicit installed-state migration.

## Licenses

Preserve the original repository LICENSE and individual plugin licenses. External plugins and office skills have their own license terms; inclusion in this directory does not change them.

The FCode-authored `plugin-creator` entry supplies the creation workflow and a local scaffolder for trimmed installations without a bundled creator.
