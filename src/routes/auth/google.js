import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import Usuario from "../../models/usuarios.model.js";
import config from "../../config.js";

import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "google";

router.get(
  `/${strategy_name}/auth`,
  passport.authenticate(strategy_name, { session: false, scope: ["email"] })
);

router.get(
  `/${strategy_name}/callback`,
  passport.authenticate(strategy_name, {
    session: false,
    failureRedirect: "/failed",
  }),
  function (req, res) {
    console.log(`Peticion get /${strategy_name}/callback `);
    const username = req.user.displayName;
    const correo = req.user.email;
    (username == undefined) ? console.log(`usuario: ${correo}`) : console.log(`Nombre de usuario: ${username}`);
    const info = req.user._json;
    const email = info.email;
    if (email) {
      const user = await Usuario.findOne({ email: req.body.email });
      /**contraseña = bcrypt.compare(
        req.body.contraseña,
        usuario.contraseña
      ); **/
      if (!user) {
        //return res.status(401).send({ auth: false, token: null });
        console.log("Usuario no encontrado");
      } else {
        const token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 60 * 60 * 24,
        });
        //res.status(200).json({ auth: true, token });
        console.log(token);
      }
    }
    //const token = "hgjsd8fs6g7s7df67g6sdf43sdg2s3df5sg6s7df7";
    //const url_front = process.env.URL_FRONT + `/?token=${token}`;

    const url_front = process.env.URL_FRONT;
    res.redirect(301, url_front);
  }
);

export default router;
