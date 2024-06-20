import { Router } from "express";
import { CriminososControle } from "../controles/criminosos.controles";
import { CreateCriminosoMiddleware } from "../middlewares/criminoso/create-criminoso.middaleware";

export class CriminososRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      "/",
      CreateCriminosoMiddleware.validacao,
      CriminososControle.create
    );
    router.get("/", CriminososControle.list);
    router.get("/:cpf", CriminososControle.get);
    router.put("/:cpf", CriminososControle.update);
    router.delete("/:cpf", CriminososControle.delete);

    return router;
  }
}
