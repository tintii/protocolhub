import { readFile, writeFile } from "node:fs/promises";
const file = "openspec/changes/modernize-protocolbase/tasks.md";
let text = await readFile(file, "utf8");
for (const id of process.argv.slice(2))
  text = text.replace(`- [ ] ${id} `, `- [x] ${id} `);
await writeFile(file, text);
