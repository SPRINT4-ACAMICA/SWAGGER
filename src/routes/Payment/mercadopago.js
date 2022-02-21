import Pedido from "../../models/pedidos.model.js";
import Producto from "../../models/productos.model.js";

import { Router } from "express";
const router = Router();

import pkg from "mercadopago";
const { configure, preferences } = pkg;

import dotenv from "dotenv";
dotenv.config();

const Pedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    if (pedidos) {
      res.json(pedidos);
      const info = pedidos[pedidos.length - 1].pedidos;
      const nombres = info.nombres;
      console.log(nombres);
      /**const vector = await Producto.find({ nombre: { $in: nombres } });
      const prices = vector.map((price) => price.precio);

      let precios = [];
      for (let index = 0; index < n; index++) {
        let p = prices[index];
        precios.push(p);
      }
      console.log(precios);
      console.log(datos[datos.length - 1]);**/
    } else {
      res.status(400).json({ msg: "No hay pedidos para mostrar" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// Agrega credenciales
configure({
  access_token: process.env.MERCADOPAGO_TOKEN,
});

router.get("/orders", Pedidos);

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