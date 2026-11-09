import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
const root = process.cwd(),
  isolated = await fs.mkdtemp(path.join(os.tmpdir(), "protocolhub-isolated-"));
await fs.mkdir(".test-output", { recursive: true });
try {
  for (const entry of [
    "src",
    "scripts",
    "content",
    "migration",
    "public",
    "astro.config.mjs",
    "tsconfig.json",
    "package.json",
    "package-lock.json",
  ])
    await fs.cp(path.join(root, entry), path.join(isolated, entry), {
      recursive: true,
    });
  await fs.symlink(
    path.join(root, "node_modules"),
    path.join(isolated, "node_modules"),
    "dir",
  );
  const output = [];
  const processBuild = spawn("npm", ["run", "build"], {
    cwd: isolated,
    env: {
      ...process.env,
      ASTRO_TELEMETRY_DISABLED: "1",
      NODE_OPTIONS: `--import=${path.join(isolated, "scripts/offline.mjs")}`,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  processBuild.stdout.on("data", (b) => output.push(b));
  processBuild.stderr.on("data", (b) => output.push(b));
  const code = await new Promise((resolve, reject) => {
    processBuild.on("error", reject);
    processBuild.on("close", resolve);
  });
  await fs.writeFile(
    path.join(root, ".test-output/self-contained.log"),
    Buffer.concat(output),
  );
  if (code !== 0)
    throw new Error(
      "Isolated offline build failed; see .test-output/self-contained.log",
    );
  console.log(
    "Isolated build passed without a sibling archive; outbound HTTP/fetch blocked.",
  );
} finally {
  await fs.rm(isolated, { recursive: true, force: true });
}
