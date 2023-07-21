import { Router } from "express";
import { methodsHTTP as empleadosCtrl } from "../controllers/controllers.js";

const router = Router();
router.get("/", empleadosCtrl.getEmpleados);

export default router;