import { Request, Response } from "express";
import { prisma } from "../utils/client-prisma";
import { ScrapperService } from "../services/qconcurso-news";

class News {
  async getNews(req: Request, res: Response) {
      const scrapper = await ScrapperService();

      console.log(scrapper);

    return res.send("OK NEWS RETURNED");
  }
}

export default News