import { mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const [parent, name] = process.argv.slice(2);
if (!parent || !name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || name.length > 64) {
  throw new Error("Usage: node create-plugin.mjs <output-parent-directory> <kebab-case-name>");
}
const root = resolve(parent, name);
await mkdir(resolve(parent), { recursive: true });
await mkdir(root); // Refuse existing output, including symlinks.
await mkdir(join(root, ".fcode-plugin"));
await mkdir(join(root, "skills", name), { recursive: true });
await writeFile(join(root, ".fcode-plugin", "plugin.json"), JSON.stringify({ name, version: "0.1.0", skills: [`./skills/${name}`] }, null, 2) + "\n");
await writeFile(join(root, "skills", name, "SKILL.md"), `---\nname: ${name}\ndescription: Replace with the requested capability and when to use it.\n---\n\n# ${name}\n\nReplace with the requested workflow and verification steps.\n`);
await writeFile(join(root, "marketplace.json"), JSON.stringify({ name: `${name}-local`, plugins: [{ name, source: "./", version: "0.1.0" }] }, null, 2) + "\n");
console.log(root);
