import { Router } from "express";

import { core, orders } from "@paypal/checkout-server-sdk";

import dotenv from "dotenv";
dotenv.config();

const router = Router();

let environment = new core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_SECRET
);
let client = new core.PayPalHttpClient(environment);

router.post("/pago", async (req, res) => {
  let request = new orders.OrdersCreateRequest();
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
        },
      },
    ],
    application_context: {
      return_url: `${process.env.URL_BACK}/paypal/redirect`, //se define la url de regreso si se completó el pago -> 3.
      cancel_url: `${process.env.URL_BACK}/paypal/cancel`, //se define la url de regreso si se quiere cancelar -> 4.
    },
  });
  client
    .execute(request)
    .then((response) => {
      let { links } = response.result;
      let url = links.filter((link) => link.rel == "approve");
      res.status(response.statusCode).json(url.pop());
    })
    .catch((err) => {
      console.error(err);
      res.status(err.statusCode).json(err);
    });
});

//2.3.  Cuando el pago se completa, se obtiene el token para capturar el pago del comprador
router.get("/redirect", async (req, res) => {
  let { token } = req.query;
  request = new orders.OrdersCaptureRequest(token);
  request.requestBody({});
  client
    .execute(request)
    .then((response) => {
      console.log(response.result);
      //TO DO
      //Redireccionar al front para mostrar el estado de la transacion
      res.status(200).json(response.result);
    })
    .catch((err) => {
      console.error(err);
      res.status(err.statusCode).json(err);
    });
});

//2.4. Cuando se cancela, se redirige acá
router.get("/cancel", async (req, res) => {
  console.log(`Payment cancelled`);
  res.status(200).json(`Payment cancelled`);
});

// 3) Exportamos los endpoints del router

export default router;
