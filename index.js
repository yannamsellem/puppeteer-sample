const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.google.fr/");

  await page.waitForSelector("input[name=q]");
  await page.type("input[name=q]", "puppeteer");
  await page.keyboard.press("Enter");

  await page.waitForNavigation();

  const element = await page.waitForSelector(
    'a[href^="https://github.com/puppeteer"]'
  );
  await element.click();

  await page.waitForNavigation();

  console.log("New Url", page.url());

  await browser.close();
})();
