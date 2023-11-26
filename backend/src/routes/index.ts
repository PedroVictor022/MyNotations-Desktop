import { Request, Response, Router } from "express";
import { prisma } from "../utils/client-prisma";
import Matters from "../controllers/matter.controller";
import News from "../controllers/news.controller";
export const router = Router();

const matterController = new Matters();
const newsController = new News();

router.get("/matter", matterController.GetAllMatter);
router.post("/new-matter", matterController.NewMatter);
router.get("/news", newsController.getNews);