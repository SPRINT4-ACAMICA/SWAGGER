import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import Usuario from "../../models/usuarios.model.js";
import config from "../../config.js";

import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "linkedin";

router.get(
  `/${strategy_name}/auth`,
  passport.authenticate(strategy_name, {
    session: true,
    scope: ["r_liteprofile", "r_emailaddress"],
  })
);

router.get(
  `/${strategy_name}/callback`,
  passport.authenticate(strategy_name, {
    session: false,
    failureRedirect: "/failed",
  }),
  function (req, res) {
    console.log(`Peticion get /${strategy_name}/callback `);
    const username = req.user.name;
    console.log(
      `Nombre de usuario: ${username.givenName} ${username.familyName}`
    );
    //const token = "hgjsd8fs6g7s7df67g6sdf43sdg2s3df5sg6s7df7";
    //const url_front = process.env.URL_FRONT + `/?token=${token}`;

    const url_front = process.env.URL_FRONT;
    res.redirect(301, url_front);
  }
);

export default router;
