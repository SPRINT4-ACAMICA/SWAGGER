import { Router } from "express";
import google from "./google.js";
import facebook from "./facebook.js";
import linkedin from "./linkedin.js";
import github from "./github.js";

import  datosLogin from "../../middlewares/login.middleware.js";
import  { inicioSesion } from "../../controllers/usuarios.controller.js";

const router = Router();

router.post("/Login", datosLogin, inicioSesion);

router.get("/failed", (req, res) => res.send("Hay un error en el login"));

router.use("", google);
router.use("", facebook);
router.use("", linkedin);
router.use("", github);

export default router;