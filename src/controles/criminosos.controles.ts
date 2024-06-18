import { Request, Response } from "express";
import { conexaoPrisma } from '../database/prisma.connection';

export class CriminososControle {
    public static async create (req: Request, res: Response) {
        try {
            const { cpf, nome, dataNascimento, endereco } = req.body;

            await conexaoPrisma.crimonosos.create({
                data: {
                    cpf,
                    nome,
                    dataNascimento,
                    endereco
                }
            })
            
            return res.status(201).json({ok: true, message: "Criminoso cadastrado com sucesso!"})

        } catch (err) {
            return res.status(500).json({
                ok: false, message: `Ocorreu um erro inesperado. Erro: ${ (err as Error).name}`
            })
            
        }
    }

    public static list(req: Request, res: Response) {

    }

    public static get(req: Request, res: Response) {

    }


    public static update(req: Request, res: Response) {
        
    }

    public static delete(req: Request, res: Response) {

    }

}