import { Router } from "express";
const router = Router();
import inicioSesionCorrecto from "../../middlewares/login.js";
import { InicioSesion } from "../../controllers/usuarios.controller.js";
import google from "./google";
import facebook from "./facebook";
import linkedin from "./linkedin";
import github from "./github";

router.post("/Login", inicioSesionCorrecto, InicioSesion);

router.get("/failed", (req, res) => res.send("Hay un error en el login"));

router.use("", google);

router.use("", facebook);

router.use("", linkedin);

router.use("", github);

export default router;
