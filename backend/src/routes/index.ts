import { Request, Response, Router } from "express";
import { prisma } from "../utils/client-prisma";
import Matters from "../controllers/matter.controller";
import Emails from "../controllers/email.controller";
export const router = Router();

const matterController = new Matters();
const emailController = new Emails();

router.get("/matter", matterController.GetAllMatter);
router.post("/new-matter", matterController.NewMatter);
router.get("/emails", emailController.getEmails);