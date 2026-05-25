#!/usr/bin/env node
/**
 * Quick screenshot tool used in the "fix -> deploy -> screenshot" loop.
 *
 *   node scripts/screenshot.mjs <url> <out.png> [selector|"full"]
 *
 * Examples:
 *   node scripts/screenshot.mjs http://localhost:8080/ /tmp/home.png
 *   node scripts/screenshot.mjs "http://localhost:8080/#contact" /tmp/contact.png "#contact"
 *   node scripts/screenshot.mjs http://localhost:8080/ /tmp/full.png full
 */
import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const [, , url, out, target = "viewport"] = process.argv;

if (!url || !out) {
  console.error(
    "Usage: node scripts/screenshot.mjs <url> <out.png> [selector|full|viewport]"
  );
  process.exit(1);
}

if (!fs.existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}. Set CHROME_PATH env var.`);
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ["--hide-scrollbars", "--no-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

  // Re-trigger hash scroll if any
  if (url.includes("#")) {
    const hash = url.split("#").pop();
    await page.evaluate((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, hash);
    await new Promise((r) => setTimeout(r, 800));
  }

  if (target === "full") {
    await page.screenshot({ path: out, fullPage: true });
  } else if (target === "viewport") {
    await page.screenshot({ path: out });
  } else {
    const el = await page.$(target);
    if (!el) {
      console.error(`Selector not found: ${target}`);
      process.exit(2);
    }
    await el.screenshot({ path: out });
  }
  console.log(`Saved ${out}`);
} finally {
  await browser.close();
}
