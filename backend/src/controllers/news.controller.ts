import { Request, Response } from "express";
import { prisma } from "../utils/client-prisma";
import { ScrapperService } from "../services/qconcurso-news";

class News {
  async getNews(req: Request, res: Response) {
      const scrapper = await ScrapperService();
    return res.send(scrapper);
  }
}

export default News