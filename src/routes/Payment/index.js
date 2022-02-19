import { Router } from "express";
import mercadopago from "./mercadopago.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

//const paypal = require ('./paypal.js')

//Este endpoint es de prueba nada mas
router.get("/pruebapago", function (req, res) {
  console.log("New request POST to /pruebapago");

  let data = {
    success: true,
    message: `User ${req.body.name} registered correctly`,
    data: req.body,
  };

  res.json(data);
});

router.use("/mercadopago", mercadopago);
//router.use('/paypal', paypal);

export default router;
