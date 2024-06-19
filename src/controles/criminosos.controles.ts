import { Request, Response } from "express";
import { conexaoPrisma } from "../database/prisma.connection";
import { count } from "console";

export class CriminososControle {
  public static async create(req: Request, res: Response) {
    try {
      const { cpf, nome, dataNascimento, endereco } = req.body;

      await conexaoPrisma.crimonosos.create({
        data: {
          cpf,
          nome,
          dataNascimento,
          endereco,
        },
      });

      return res
        .status(201)
        .json({ ok: true, message: "Criminoso cadastrado com sucesso!" });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name}`,
      });
    }
  }

  public static async list(req: Request, res: Response) {
    try {
      let { limite, pagina } = req.query;

      let limitePadrao = 5;
      let paginaPadrao = 1;

      if (limite) {
        limitePadrao = Number(limite);
      }

      if (pagina) {
        paginaPadrao = Number(pagina);
      }

      const criminosos = await conexaoPrisma.crimonosos.findMany({
        skip: limitePadrao * (paginaPadrao - 1),
        take: limitePadrao,
        orderBy: {
          criadoEm: "desc",
        },
        where: {
          deletado: false,
        },
      });

      const contador = await conexaoPrisma.crimonosos.count({
        where: {
          deletado: false,
        },
      });

      return res.status(200).json({
        ok: true,
        message: "Criminosos listados com sucesso",
        criminosos: criminosos,
        paginacao: {
          limite: limitePadrao,
          pagina: paginaPadrao,
          contador: contador,
          totalPaginas: Math.ceil(contador / limitePadrao),
        },
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro ${(err as Error).name}`,
      });
    }
  }

  public static async get(req: Request, res: Response) {
    console.log(req.params);

    try {
      const { cpf } = req.params;

      const criminosoEncontrado = await conexaoPrisma.crimonosos.findUnique({
        where: {
          cpf,
        },
      });
      console.log(criminosoEncontrado);
      

      if (!criminosoEncontrado) {
        return res.status(400).json({
          ok: false,
          message: "Criminoso não encontrado!",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Criminoso encontrado",
        criminoso: criminosoEncontrado,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro ${(err as Error).name}`,
      });
    }
  }

  public static update(req: Request, res: Response) {}

  public static delete(req: Request, res: Response) {}
}
