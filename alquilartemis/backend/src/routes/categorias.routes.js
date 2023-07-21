import { Router } from "express";
import { methodsHTTP as CategoiaCtrl } from "../controllers/controllers.js";

const router = Router();
router.get("/", CategoiaCtrl.getCategorias);

export default router;