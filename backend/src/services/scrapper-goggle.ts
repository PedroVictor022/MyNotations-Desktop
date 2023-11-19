import puppeteer from "puppeteer";

export async function ScrapperService() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.google.com.br/?hl=pt-BR");

  await page.setViewport({ width: 1080, height: 1024 });

  await page.type(".SDkEP", "Buguer King");

  const cSearch = 'gNO89b'
  await page.waitForSelector(cSearch);
  await page.click(cSearch);

  console.log("OOKOKOK")

  return "ok";

}
