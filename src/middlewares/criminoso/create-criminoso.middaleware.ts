import { cpf as documento} from "cpf-cnpj-validator"; //npm install cpf-cnpj-validator
import { NextFunction, Request, Response } from "express";

export class CreateCriminosoMiddleware {
  public static validacao(req: Request, res: Response, next: NextFunction) {
    const { cpf, nome, dataNascimento, endereco } = req.body;

    console.log(!documento.isValid(cpf));
    
    if (!documento.isValid(cpf)) {
      return res.status(400).json({
        ok: false,
        message: "CPF inválido!",
      });
    }

    if (!nome || typeof nome !== "string") {
      return res.status(400).json({
        ok: false,
        message: "Nome é inválido!",
      });
    }

    if (!dataNascimento || dataNascimento > new Date()) {
      return res.status(400).json({
        ok: false,
        message: "Data de nascimento é inválida!",
      });
    }

    if (!endereco || typeof endereco !== "string") {
      return res.status(400).json({
        ok: false,
        message: "Preencha um endereço!",
      });
    }

    return next();
  }
}
