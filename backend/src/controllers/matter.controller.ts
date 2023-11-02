import { Request, Response } from "express";
import { VerifyBodyParams } from "../utils/valid-params";
import { prisma } from "../utils/client-prisma";

class Matters {
  async NewMatter(req: Request, res: Response) {
    const { name, weight } = req.body;
    const verify = VerifyBodyParams(name, weight);

    if (!verify.valid) {
      return res.status(500).send("Content is not valid");
    }

    const isExists = await prisma.materias.findFirst({
      where: {
        name: name,
      },
    });

    if (isExists) {
      return res.status(500).send("Matéria já existente na base de dados.");
    }

    await prisma.materias.create({
      data: {
        name: name,
        weight: weight,
      },
    });

    return res.json(verify);
  }

  async GetAllMatter(req: Request, res: Response) {
    const getAll = await prisma.materias.findMany();
    return res.status(200).json(getAll);
  }
}
export default Matters;
