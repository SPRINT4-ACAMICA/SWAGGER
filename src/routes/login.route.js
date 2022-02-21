import inicioSesionCorrecto from "../../middlewares/login.js";
import { InicioSesion } from "../../controllers/usuarios.controller";

router.post('/Login', inicioSesionCorrecto, InicioSesion)