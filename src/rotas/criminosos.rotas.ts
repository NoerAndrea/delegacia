import { Router } from "express";
import { CriminososControle } from "../controles/criminosos.controles";


export class CriminososRoutes {
    public static execute(): Router {
        const router = Router();
        
        router.post("/", CriminososControle.create)
        router.get("/", CriminososControle.list);
        router.get("/:id", CriminososControle.get);
        router.put("/", CriminososControle.update);
        router.delete("/", CriminososControle.delete);

        return router;    
    }
}