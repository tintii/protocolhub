import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parseIndex, upstream, validateSnapshot } from "./rfc-lib.mjs";
export async function refresh({
  target = "content/data/rfcs.json",
  fetcher = fetch,
  source = upstream,
} = {}) {
  const response = await fetcher(source, {
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`RFC refresh HTTP ${response.status}`);
  const xml = await response.text();
  const snapshot = parseIndex(xml);
  validateSnapshot(snapshot);
  let previous;
  try {
    previous = JSON.parse(await fs.readFile(target, "utf8"));
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  const old = new Map((previous?.entries || []).map((r) => [r.number, r]));
  const next = new Map(snapshot.entries.map((r) => [r.number, r]));
  const diff = {
    added: [...next.keys()].filter((n) => !old.has(n)),
    removed: [...old.keys()].filter((n) => !next.has(n)),
    changed: [...next.keys()].filter(
      (n) =>
        old.has(n) &&
        JSON.stringify(old.get(n)) !== JSON.stringify(next.get(n)),
    ),
  };
  const temporary = path.join(path.dirname(target), `.rfcs-${process.pid}.tmp`);
  try {
    await fs.writeFile(temporary, JSON.stringify(snapshot, null, 2) + "\n", {
      flag: "wx",
    });
    await fs.rename(temporary, target);
  } finally {
    await fs.rm(temporary, { force: true });
  }
  console.log(
    `Validated ${snapshot.entries.length} RFCs; ${diff.added.length} added, ${diff.removed.length} removed, ${diff.changed.length} changed. Review git diff ${target}`,
  );
  return diff;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
)
  await refresh();
