import { Request, Response, Router } from "express";
import { prisma } from "../utils/client-prisma";
import Matters from "../controllers/matter.controller";
export const router = Router();

const matterController = new Matters();

router.get("/matter", matterController.GetAllMatter);
router.post("/new-matter", matterController.NewMatter);