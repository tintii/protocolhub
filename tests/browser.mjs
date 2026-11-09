import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { serve } from "./serve.mjs";
import { base } from "../src/lib/urls.mjs";
const host = await serve(base),
  browser = await chromium.launch();
await fs.mkdir(".test-output", { recursive: true });
const failures = [];
try {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on("pageerror", (error) => failures.push(error.message));
  const paths = [
    "",
    "protocols/",
    "protocols/tcp/#description",
    "protocols/ipv6/",
    "protocols/aarp/",
    "protocols/snmp/",
    "glossary/#term-tcp-ip",
    "rfcs/",
  ];
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of paths) {
      const response = await page.goto(host.origin + base + route);
      assert.equal(response.status(), 200, route);
      await page.waitForLoadState("networkidle");
      assert.equal(await page.locator("main h1").count(), 1, route + " h1");
      assert.ok(
        await page
          .locator("footer")
          .textContent()
          .then((t) => t.includes("All rights reserved.")),
        route + " credit",
      );
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        `${width}px: overflow ${route}`,
      );
      if (width === 360) {
        const a11y = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        if (a11y.violations.length)
          failures.push(
            ...a11y.violations.map(
              (v) =>
                `${route}: ${v.id} ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`,
            ),
          );
      }
      if (
        process.env.CAPTURE_SCREENSHOTS === "1" &&
        ((width === 1440 && route === "") ||
          (width === 360 && route === "") ||
          (width === 768 && route === "protocols/ipv6/"))
      )
        await page.screenshot({
          path: `.test-output/${base === "/" ? "root" : "subpath"}-${width}.png`,
          fullPage: true,
        });
    }
    console.log(`Layouts checked at ${width}px (${base})`);
  }
  await page.goto(host.origin + base + "protocols/tcp/#examples");
  await page.reload();
  assert.ok(await page.locator("#examples").isVisible());
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page
      .locator("a")
      .first()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
    "0s",
  );
  await page.goto(host.origin + base + "protocols/");
  await page.locator('select[name="layer"]').selectOption("Transport Layer");
  assert.ok((await page.locator("#directory>li:visible").count()) < 108);
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll("#directory>li")].filter((e) => !e.hidden)
        .length === 108,
  );
  assert.equal(await page.locator("#directory>li:visible").count(), 108);
  await page.goto(host.origin + base + "glossary/");
  await page.locator("#term-filter").fill("TCP/IP");
  assert.ok((await page.locator(".definition:visible").count()) >= 1);
  await page.locator("#term-filter").fill("zzzznone");
  assert.ok(await page.locator("#glossary-empty").isVisible());
  await page.getByRole("button", { name: "Clear filter" }).click();
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll(".definition")].filter((e) => !e.hidden)
        .length === 241,
  );
  assert.equal(await page.locator(".definition:visible").count(), 241);
  await page.goto(host.origin + base);
  const trigger = page.locator(".header-search");
  await trigger.click();
  await page.locator("#search-query").waitFor({ state: "visible" });
  async function search(q, type = "all", expected) {
    await page.locator("#search-type").selectOption(type);
    await page.locator("#search-query").fill(q);
    await page.locator("#search-form").evaluate((f) => f.requestSubmit());
    await page.waitForFunction(
      (q) => {
        const s = document.querySelector("#search-status").textContent;
        return (
          s.includes("could not load") ||
          (/results? for|No results/.test(s) && s.includes("“" + q + "”"))
        );
      },
      q,
      { timeout: 60000 },
    );
    const status = await page.locator("#search-status").textContent();
    assert.ok(!status.includes("could not load"), status);
    if (expected)
      assert.ok(
        (await page.locator("#search-results").textContent())
          .toLowerCase()
          .includes(expected.toLowerCase()),
        q + " missing " + expected,
      );
    return status;
  }
  await search("TCP", "protocol", "TCP");
  assert.ok(
    (await page.locator("#search-results li").first().textContent()).startsWith(
      "ProtocolTCP",
    ),
  );
  await search("Transmission Control Protocol", "protocol", "TCP");
  await search("guaranteed delivery", "protocol", "TCP");
  await search("802.1Q", "glossary", "802.1Q");
  for (const q of ["793", "RFC793", "RFC 793"]) {
    await search(q, "rfc", "RFC 793");
    assert.ok(
      (await page.locator("#search-results li").first().textContent()).includes(
        "RFC 793 — Transmission Control Protocol",
      ),
    );
    const href = await page
      .locator("#search-results a")
      .first()
      .getAttribute("href");
    const destination = await context.newPage();
    await destination.goto(new URL(href, host.origin).href);
    assert.ok(await destination.locator("#rfc-793").isVisible());
    await destination.close();
  }
  await search(
    "Transmission Control Protocol",
    "rfc",
    "Transmission Control Protocol",
  );
  await search("Postel", "rfc", "Postel");
  assert.ok(await page.locator("#search-next").isVisible());
  await page.locator("#search-next").click();
  assert.ok(
    (await page.locator("#search-page").textContent()).startsWith("Page 2"),
  );

  await search("qvjkxwbfz", "all");
  assert.equal(await page.locator("#search-results li").count(), 0);
  await search('<img src=x onerror="alert(1)">', "all");
  assert.equal(await page.locator("#search-results img").count(), 0);
  await search("TCP", "protocol", "TCP");
  assert.ok(new URL(page.url()).searchParams.get("q") === "TCP");
  const shared = page.url();
  await page.locator("#search-close").click();
  await trigger.focus();
  await trigger.press("Enter");
  await page.keyboard.press("Escape");
  assert.ok(
    await trigger.evaluate((e) => e === document.activeElement),
    "focus restored",
  );
  await page.goto(shared);
  await page.waitForFunction(() =>
    document.querySelector("#search-status").textContent.match(/results? for/),
  );
  assert.equal(await page.locator("#search-query").inputValue(), "TCP");
  assert.equal(await page.locator("#search-type").inputValue(), "protocol");
  await page.keyboard.press("Escape");
  await page.goto(host.origin + base + "rfcs/");
  await page.locator("#rfc-query").fill("793");
  await page.locator("[data-search-form] button").click();
  await page.waitForFunction(() =>
    document.querySelector("#search-status").textContent.match(/results? for/),
  );
  assert.equal(await page.locator("#search-type").inputValue(), "rfc");
  await page.keyboard.press("Escape");
  // Bundle failure in a fresh page; retry after removing the fault.
  const failure = await context.newPage();
  await failure.route("**/pagefind/**", (route) => route.abort());
  await failure.goto(host.origin + base);
  await failure.locator(".header-search").click();
  await failure.locator("#search-query").fill("TCP");
  await failure.locator("#search-form").evaluate((f) => f.requestSubmit());
  await failure.locator("#search-retry").waitFor({ state: "visible" });
  assert.ok(
    (await failure.locator("#search-status").textContent()).includes(
      "could not load",
    ),
  );
  await failure.unroute("**/pagefind/**");
  await failure.locator("#search-retry").click();
  await failure.waitForFunction(() =>
    document.querySelector("#search-status").textContent.match(/results? for/),
  );
  await failure.close();
  // Text zoom, keyboard menu, and search dialog accessibility.
  await page.setViewportSize({ width: 360, height: 1000 });
  await page.goto(host.origin + base + "protocols/tcp/");
  for (const route of paths) {
    await page.goto(host.origin + base + route);
    await page.evaluate(() => {
      const sizes = [...document.querySelectorAll("body *")].map((e) => [
        e,
        parseFloat(getComputedStyle(e).fontSize),
      ]);
      for (const [e, size] of sizes) e.style.fontSize = `${size * 2}px`;
    });
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      `200% text zoom overflow: ${route}`,
    );
  }
  await page.goto(host.origin + base);
  await page.locator(".mobile-menu summary").focus();
  await page.keyboard.press("Enter");
  assert.ok(await page.locator(".mobile-menu[open] nav").isVisible());
  await page.locator(".header-search").click();
  const searchAudit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  failures.push(...searchAudit.violations.map((v) => "Search: " + v.id));
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  const reader = await nojs.newPage();
  await reader.goto(host.origin + base + "protocols/");
  assert.equal(await reader.locator("#directory a").count(), 108);
  assert.ok(await reader.locator("noscript").isVisible());
  await reader.goto(host.origin + base + "glossary/");
  assert.equal(await reader.locator(".definition").count(), 241);
  await reader.goto(host.origin + base + "rfcs/oldest/1/");
  assert.equal(await reader.locator(".rfc-list>li").count(), 100);
  await reader.goto(host.origin + base + "protocols/tcp/");
  assert.ok(
    (await reader.locator("article").textContent()).includes(
      "guaranteed delivery",
    ),
  );
  await nojs.close();
  assert.deepEqual(failures, []);
  console.log(
    `Browser checks passed: layouts, accessibility, search, failure/retry, focus, deep refresh and no-JavaScript (${base})`,
  );
} finally {
  await browser.close();
  await host.close();
}
