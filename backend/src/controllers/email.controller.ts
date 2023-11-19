import { Request, Response } from "express";
import { prisma } from "../utils/client-prisma";
import { ScrapperService } from "../services/scrapper-goggle";

class Emails {
  async getEmails(req: Request, res: Response) {
      const scrapper = await ScrapperService();

      console.log(scrapper);

    return res.send("OK EMAILS RETURNED");
  }
}

export default Emails