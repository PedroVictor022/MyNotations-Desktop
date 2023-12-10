import puppeteer from "puppeteer";

type NewsProps = {
  id: number | string,
  content: string | null | any
}

// SCRAPPER QCONCURSO NOTICIAS
export async function ScrapperService() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(
    "https://folha.qconcursos.com/?_ga=2.177380960.475592624.1689076663-979099895.1673273693"
  );

  await page.setViewport({ width: 1080, height: 1024 });

  const PrincipalNews = await page.$$(".c-PJLV .c-PJLV-igoYWAn-css");
  const newsArray: NewsProps[] = [];
  let id = 1;
  // map for elements
  for (const newsEl of PrincipalNews) {
    const t1 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(1) > a > h2"
        )?.textContent,
      newsEl
    );
    newsArray.push({
      id: id++,
      content: t1
    })
    const t2 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(2) > a > h2"
        )?.textContent,
      newsEl
    );
    newsArray.push({
      id: id++,
      content: t2
    })
    const t3 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(3) > a > h2"
        )?.textContent,
      newsEl
    );
    newsArray.push({
      id: id++,
      content: t3
    })
    const t4 = await page.evaluate(
      (el) =>
        el?.querySelector(
          "div > div:nth-child(1) > ul > li:nth-child(4) > a > h2"
        )?.textContent,
      newsEl
    );
    newsArray.push({
      id: id++,
      content: t4
    })
    return newsArray;
  }
}
