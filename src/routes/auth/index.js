import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../../config.js";
import google from "./google.js";
import facebook from "./facebook.js";
import linkedin from "./linkedin.js";
import github from "./github.js";
import Usuario from "../../models/usuarios.model.js";

//import  datosLogin from '../../middlewares/login.middleware.js';
//import  { inicioSesion } from '../../controllers/usuarios.controller.js';

const router = Router();

router.post("/sign-up", function (req, res) {
  console.log("New request POST to /sign-up");

  console.log(req.body);

  const usuario = await Usuario.findOne({ correo: req.body.correo });
  const contraseña = bcrypt.compare(req.body.contraseña, usuario.contraseña);
  if (!usuario && !contraseña) {
    const user = new Usuario({
      correo,
      contraseña: bcrypt.hashSync(contraseña, 10),
    });
    await user.save();
  } else {
    const token = jwt.sign({ id: usuario._id }, config.secret, {
      expiresIn: 60 * 60 * 24,
    });
    console.log(token);
    //res.status(200).json({ auth: true, token });
  }

  //const token = 'hfdasjfefee23423fewfrw24234';

  let data = {
    success: true,
    message: `User ${req.body.email} registered correctly`,
    token: token,
    data: req.body,
  };

  res.json(data);
});

router.get("/failed", (req, res) => res.send("Hay un error en el login"));

router.use("", google);
router.use("", facebook);
router.use("", linkedin);
router.use("", github);

export default router;
