import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

const strategy_name = "facebook";

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
    const data = req.user;
    console.log(data);
    /**console.log(
      `Nombre de usuario: ${username.givenName} ${username.familyName}`
    );**/
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
