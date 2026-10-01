---
name: plugin-creator
description: Create, edit, validate, and prepare FCode custom plugins containing skills, commands, or MCP configuration. Use when the user asks to create or package an FCode plugin.
---

# Create an FCode plugin

Determine the requested capability from the conversation. Ask only for information essential to that capability. Create a lowercase kebab-case plugin name and choose an output directory in the user's workspace.

For a new skill plugin, run the bundled scaffolder with Node:

`node <this-skill-directory>/scripts/create-plugin.mjs <output-parent-directory> <plugin-name>`

The scaffolder creates `.fcode-plugin/plugin.json`, one `skills/<name>/SKILL.md`, and a local marketplace declaration. It refuses to overwrite an existing directory. Replace the example skill description and instructions with the user's requested workflow; keep the frontmatter name aligned with its folder. Keep instructions concise, use workspace-relative resources, and do not add secrets or unsupported runtime components. Use scripts for deterministic repeated work and execute them before delivery.

For edits, inspect the existing plugin and preserve unrelated files. Additional commands belong in `commands/`; MCP configuration belongs in the plugin manifest or `.mcp.json`. Use the supported FCode structures already present in the workspace. Explicitly describe external programs, credentials, or network access needed by the plugin.

Validate JSON syntax, manifest name, each declared path, and skill frontmatter. Run the plugin's meaningful checks and verify the generated files. To import, open FCode Plugin Marketplace → Add → Add source and select the generated directory containing `marketplace.json`, then install its entry. If authorized tools expose the existing plugin installation service, use that service and verify the loaded skill. Never claim installation when only files were generated.
