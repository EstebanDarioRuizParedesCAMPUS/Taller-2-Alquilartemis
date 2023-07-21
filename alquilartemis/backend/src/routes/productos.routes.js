import { Router } from "express";
import { methodsHTTP as productosCtrl } from "../controllers/controllers.js";

const router = Router();
router.get("/", productosCtrl.getProductos);

export default router;