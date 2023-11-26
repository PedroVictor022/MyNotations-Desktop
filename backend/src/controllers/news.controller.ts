import { Request, Response } from "express";
import { prisma } from "../utils/client-prisma";
import { ScrapperService } from "../services/scrapper-goggle";

class ScrapperNews {
  async GetscrapperNews(req: Request, res: Response) {
    const scrapper = await ScrapperService();
    console.log(scrapper)

    return res.send(scrapper);
  }
}

export default ScrapperNews;
