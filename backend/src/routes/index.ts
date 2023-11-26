import { Request, Response, Router } from "express";
import { prisma } from "../utils/client-prisma";
import Matters from "../controllers/matter.controller";
import ScrapperNews from "../controllers/news.controller";
export const router = Router();

const matterController = new Matters();
const scrapperController = new ScrapperNews();

router.get("/matter", matterController.GetAllMatter);
router.post("/new-matter", matterController.NewMatter);
router.get("/news", scrapperController.GetscrapperNews);