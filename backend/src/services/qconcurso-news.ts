import puppeteer from "puppeteer";

// SCRAPPER QCONCURSO NOTICIAS
export async function ScrapperService() {
  const allNewsExtracted = <string[]>[];
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://folha.qconcursos.com/?_ga=2.177380960.475592624.1689076663-979099895.1673273693"
  );

  await page.setViewport({ width: 1080, height: 1024 });

  const newsElement = await page.$$(".c-PJLV .c-PJLV-igoYWAn-css");

  // map for elements
  for (const psEl of newsElement) {
    const t1 = await page.evaluate(
      (el) => el.querySelector("div > div:nth-child(1) > ul > li:nth-child(1) > a > h2").textContent,
      psEl
    );

  const t2 = await page.evaluate(
      (el) => el.querySelector("div > div:nth-child(1) > ul > li:nth-child(2) > a > h2").textContent,
      psEl
    );

    const t3 = await page.evaluate(
      (el) => el.querySelector("div > div:nth-child(1) > ul > li:nth-child(3) > a > h2").textContent,
      psEl
    );

    const t4 = await page.evaluate(
      (el) => el.querySelector("div > div:nth-child(1) > ul > li:nth-child(4) > a > h2").textContent,
      psEl
    );

    return [t1, t2, t3, t4]

    console.log(t1, t2, t3, t4);
  }


  return "ok";
}