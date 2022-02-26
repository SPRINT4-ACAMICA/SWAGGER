import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Router } from "express";
import passport from "passport";

import Usuario from "../../models/usuarios.model.js";

import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "facebook";

let data;

/**const InicioSesion = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    if (correo && contraseña) {
      const usuario = await Usuario.findOne({ correo: req.body.correo });
      const contraseña = bcrypt.compare(
        req.body.contraseña,
        usuario.contraseña
      );
      if (!usuario && !contraseña) {
        return res.status(401).send({ auth: false, token: null });
      } else {
        const token = jwt.sign({ id: usuario._id }, process.env.SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        res.status(200).json({ auth: true, token });
      }
    } else {
      res.status(400).json({ msg: "Faltan datos" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};**/

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
    //console.log(`Peticion get /${strategy_name}/callback `);
    data = req.user;
    console.log(data);

    //console.log(token);
    //const token = "hgjsd8fs6g7s7df67g6sdf43sdg2s3df5sg6s7df7";
    //const url_front = process.env.URL_FRONT + `/?token=${token}`;

    const url = process.env.URL_BACK;
    res.redirect(301, `${url}/api`);
  }
);

router.get("/token", function (req, res) {
  const usuario = await Usuario.findOne({ correo: data.email });
  if (!usuario) {
    const usuario = new Usuario({
      nombre: data.first_name,
      apellido: data.last_name,
      correo: data.email,
    });
    await usuario.save();
    res.status(201).json("Usuario creado con exito");
  }
  const token = jwt.sign({ id: usuario._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  res.status(200).json({ auth: true, token });
});

router.post("/logout", function (req, res) {
  req.logout();
  const urlFront = process.env.URL_FRONT;
  res.redirect(urlFront);
});

export default router;
