const { test } = require("node:test");
const puppeteer = require("puppeteer");

test("Check if puppeteer can be started", async () => {
  const browser = await puppeteer.launch({ headless: "new"});
  await browser.newPage();
  await browser.close();
});

