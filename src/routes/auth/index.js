import { Router } from "express";
import google from "./google.js";
import facebook from "./facebook.js";
import linkedin from "./linkedin.js";
import github from "./github.js";
//import { Token } from "../../controllers/inicioSesion.controller.js";

//import  datosLogin from '../../middlewares/login.middleware.js';
//import  { inicioSesion } from '../../controllers/usuarios.controller.js';

const router = Router();

//router.post("/Login", datosLogin, inicioSesion);

/**router.post("/sign-up", async function (req, res) {
  console.log("New request POST to /sign-up");

  console.log(req.body);

  const code  = await Token(req.body.email, req.body.password)
  
  console.log(code);
  //res.status(200).json({ auth: true, token });

  //const token = 'hfdasjfefee23423fewfrw24234';

  let data = {
    success: true,
    message: `User ${req.body.email} registered correctly`,
    token: code,
    data: req.body,
  };

  res.json(data);
});**/

router.get("/failed", (req, res) => res.send("Hay un error en el login"));

router.use("", google);
router.use("", facebook);
router.use("", linkedin);
router.use("", github);

export default router;
