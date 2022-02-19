import { Router } from "express";
const router = Router();
import pkg from "mercadopago";
const { configure, preferences } = pkg;

import dotenv from "dotenv";
dotenv.config();

import * as Pedido from "../../controllers/pedidos.controller.js";

const Orders = (res) => (err, result) => {
  if (err) {
    console.log("error", err);
    res.status(500).json({ error: err });
  } else {
    console.log(result);
    let elemento = result[result.length - 1];
    //let datos = elemento.producto[0];
    //info.push(datos);
    console.log(elemento);
  }
};

// Agrega credenciales
configure({
  access_token: process.env.MERCADOPAGO_TOKEN,
});

router.get("/orders", async function (req, res) {
  Pedido.Pedidos(Orders(res));
});

/**router.get("/orders", function (req, res) {
  try {
    const pedidos = await Pedido.find();
    if (pedidos) {
      console.log(pedidos[pedidos.length-1].pedidos);
    } else {
      console.log('No hay pedidos');
    }
  } catch (error) {
    console.log(error);
  }
});**/

router.post("/pago", function (req, res) {
  console.log("New request POST to /pago");
  // TODO: protect this route with a middleware

  // TODO: get user data from the database
  const user = {
    name: "Andrea",
    last_name: "Campanella",
    email: "andrea@campanella.com",
  };

  // TODO: get items from the database
  const amount = req.body.amount;
  let items = [
    {
      title: "iPhone 13 Max PRO",
      unit_price: 20000,
      quantity: 5,
    },
    {
      title: "iPad",
      unit_price: 12000,
      quantity: 5,
    },
  ];

  // Crea un objeto de preferencia
  let preference = {
    auto_return: "approved",
    back_urls: {
      success: `${process.env.URL_BACK}/success`, // TODO: define this
      failure: `${process.env.URL_BACK}/failure`, // TODO: define this
      pending: `${process.env.URL_BACK}/pending`, // TODO: define this
    },
    payer: {
      name: user.name,
      surname: user.last_name,
      email: user.email,
    },
    items: items,
  };

  // petición a mercado pago para preparar la compra
  preferences
    .create(preference)
    .then(function (response) {
      // Ok, haga el proceso de pago con este id:
      console.log(response);
      let id = response.body.id;
      res.json({ preference_id: id, url: response.body.sandbox_init_point });
    })
    .catch(function (error) {
      console.log(error);
    });
});

export default router;
