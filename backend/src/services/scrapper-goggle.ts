import puppeteer from "puppeteer";

// SCRAPPER QCONCURSO NOTICIAS
export async function ScrapperService() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://folha.qconcursos.com/?_ga=2.177380960.475592624.1689076663-979099895.1673273693"
  );

  await page.setViewport({ width: 1080, height: 1024 });

  const newsElement = await page.$$(".c-PJLV .c-PJLV-igoYWAn-css");

  // map for elements
  for (const psEl of newsElement) {
    const moreTexts = await page.evaluate(
      (el) => el.querySelector("div > ul").textContent,
      psEl
    );

    const titlesNews = await page.evaluate(
      (el) => el.querySelector("div > a").textContent,
      psEl
    );

    console.log(titlesNews);
    console.log(moreTexts);
  }

  return "ok";
}
