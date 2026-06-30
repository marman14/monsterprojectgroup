#!/usr/bin/env node
/**
 * End-to-end contact form test from localhost (Apps Script requires a browser origin).
 */
import puppeteer from "puppeteer-core";

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const url = process.argv[2] || "http://localhost:8080/#contact";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900 },
  args: ["--no-sandbox"],
});

try {
  const page = await browser.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") console.log("browser error:", msg.text());
  });

  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  await page.waitForSelector("#contact form", { timeout: 10000 });

  const stamp = Date.now();
  await page.type('input[name="name"]', `Pipeline Test ${stamp}`);
  await page.type('input[name="email"]', "test@example.com");
  await page.type('input[name="phone"]', "(305) 555-0100");
  await page.type('input[name="location"]', "Miami, FL");
  await page.select('select[name="type"]', "new-construction");
  await page.select('select[name="budget"]', "250k-500k");
  await page.select('select[name="startDate"]', "within-3-months");
  await page.select('select[name="referral"]', "google");
  await page.type(
    'textarea[name="message"]',
    `Automated pipeline test at ${new Date().toISOString()}. Please ignore.`
  );

  const [response] = await Promise.all([
    page.waitForResponse(
      (res) =>
        res.url().includes("script.google.com/macros/") && res.request().method() === "POST",
      { timeout: 30000 }
    ),
    page.click('form button[type="submit"]'),
  ]);

  const body = await response.json().catch(() => ({}));
  console.log("Apps Script status:", response.status());
  console.log("Apps Script response:", JSON.stringify(body));

  await page.waitForFunction(
    () => document.body.innerText.includes("Thank you"),
    { timeout: 15000 }
  );

  console.log("UI success toast confirmed.");
  process.exit(body?.ok === true ? 0 : 1);
} catch (err) {
  console.error("Test failed:", err.message);
  process.exit(1);
} finally {
  await browser.close();
}
