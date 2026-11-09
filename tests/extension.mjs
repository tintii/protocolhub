import fs from "node:fs/promises";
import { spawn } from "node:child_process";
import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { serve } from "./serve.mjs";
import { base } from "../src/lib/urls.mjs";
const file = "content/protocols/extension-fixture.md";
const route = "protocols/extension-fixture/";
await fs.mkdir(".test-output", { recursive: true });
async function build() {
  const chunks = [];
  const child = spawn("npm", ["run", "build"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (b) => chunks.push(b));
  child.stderr.on("data", (b) => chunks.push(b));
  const code = await new Promise((resolve, reject) => {
    child.on("error", reject);
    child.on("close", resolve);
  });
  await fs.writeFile(".test-output/extension-build.log", Buffer.concat(chunks));
  if (code !== 0)
    throw new Error(
      "Fixture build failed; see .test-output/extension-build.log",
    );
}
let host, browser;
try {
  await fs.writeFile(
    file,
    `---
id: protocol-extension-fixture
slug: extension-fixture
name: Extension fixture
expandedName: Temporary contributor validation
origin: contribution
provenance:
  source: https://example.org/extension-fixture
  provider: Protocolhub test fixture
aliases: [fixturebeacon]
layers: [Fixture layer]
suites: [Fixture suite]
summary:
  - label: Protocol
    html: Temporary contributor validation
rfcs: [793]
related: [protocol-tcp]
glossary: [term-tcp-ip]
sections:
  - id: description
    title: Description
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>
<p>Extension fixture beacon verifies content-only routing and search.</p>
</section>
`,
    { flag: "wx" },
  );
  await build();
  const html = await fs.readFile("dist/" + route + "index.html", "utf8");
  assert.ok(html.includes("Temporary contributor validation"));
  assert.ok(!html.includes("Historical Protocolbase article"));
  assert.ok(
    (await fs.readFile("dist/protocols/index.html", "utf8")).includes(
      "Fixture layer",
    ),
  );
  assert.ok(
    (await fs.readFile("dist/protocols/index.html", "utf8")).includes(
      "Fixture suite",
    ),
  );
  assert.ok(
    (await fs.readFile("dist/protocols/tcp/index.html", "utf8")).includes(
      "Extension fixture",
    ),
  );
  assert.ok(
    (await fs.readFile("dist/glossary/index.html", "utf8")).includes(
      base + route,
    ),
  );
  const destinations = JSON.parse(
    await fs.readFile("dist/rfc-destinations.json", "utf8"),
  );
  assert.ok(
    (
      await fs.readFile(
        "dist/" + destinations[793].split("#")[0] + "index.html",
        "utf8",
      )
    ).includes("Extension fixture"),
  );
  host = await serve(base);
  browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(host.origin + base + "?q=fixturebeacon&type=protocol");
  await page.waitForFunction(
    () =>
      document
        .querySelector("#search-status")
        .textContent.match(/results? for/),
    {},
    { timeout: 60000 },
  );
  assert.ok(
    (await page.locator("#search-results").textContent()).includes(
      "Extension fixture",
    ),
  );
  assert.equal(
    await page.locator("#search-results a").first().getAttribute("href"),
    base + route,
  );
  console.log(
    "Temporary contribution verified: route, layer/suite filters, protocol/glossary/RFC backlinks, alias search.",
  );
} finally {
  await browser?.close();
  await host?.close();
  await fs.rm(file, { force: true });
  await fs.rm("dist", { force: true, recursive: true });
  console.log(
    "Temporary fixture removed; normal build required before publication.",
  );
}
