import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "google";

router.get(
  `/${strategy_name}/auth`,
  passport.authenticate(strategy_name, { session: false, scope: ['profile', 'email'] })
);

router.get(
  `/${strategy_name}/callback`,
  passport.authenticate(strategy_name, {
    session: false,
    failureRedirect: "/failed",
  }),
  function (req, res) {
    console.log(`Peticion get /${strategy_name}/callback `);
    //const username = req.user.displayName;
    const data = req.user;
    //const correo = data.email;
    console.log(data);
    //(username == undefined) ? console.log(`usuario: ${correo}`) : console.log(`Nombre de usuario: ${username}`);
    //const token = "hgjsd8fs6g7s7df67g6sdf43sdg2s3df5sg6s7df7";
    //const url_front = process.env.URL_FRONT + `/?token=${token}`;

    const url = process.env.URL_BACK;
    res.redirect(301, `${url}/api`);
  }
);

router.post('/logout', function(req, res){
  req.logout();
  const urlFront = process.env.URL_FRONT;
  res.redirect(urlFront);
});

export default router;
