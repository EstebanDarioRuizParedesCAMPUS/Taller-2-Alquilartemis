import { Router } from "express";
import { methodsHTTP as ConstructCtrl } from "../controllers/controllers.js";

const router = Router();
router.get("/", ConstructCtrl.getConstructoras);

export default router;