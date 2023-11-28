import puppeteer from "puppeteer";

// SCRAPPER QCONCURSO NOTICIAS
export async function ScrapperService() {
  const news: any[] = [];
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(
    "https://folha.qconcursos.com/?_ga=2.177380960.475592624.1689076663-979099895.1673273693"
  );

  await page.setViewport({ width: 1080, height: 1024 });

  const PrincipalNews = await page.$$(".c-PJLV .c-PJLV-igoYWAn-css");

  // map for elements
  for (const newsEl of PrincipalNews) {
    const t1 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(1) > a > h2"
        )?.textContent,
      newsEl
    );
    const t2 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(2) > a > h2"
        )?.textContent,
      newsEl
    );
    const t3 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(3) > a > h2"
        )?.textContent,
      newsEl
    );
    const t4 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(4) > a > h2"
        )?.textContent,
      newsEl
    );

    news.push(t1)
    news.push(t2)
    news.push(t3)
    news.push(t4)

    return news
  }

  // const newsDistric = await page.$$("body > main > div:nth-child(2) > div > div:nth-child(9)");
  // for(const ndEl of newsDistric) {
  //   console.log(ndEl);
  //   const sd1 = await page.evaluate((el) => el?.querySelector(""))
  // }

  return news
}