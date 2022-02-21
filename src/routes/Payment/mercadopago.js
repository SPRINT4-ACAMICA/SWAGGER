import Pedido from "../../models/pedidos.model.js";
import Producto from "../../models/productos.model.js";

import { Router } from "express";
const router = Router();

import pkg from "mercadopago";
const { configure, preferences } = pkg;

import dotenv from "dotenv";
dotenv.config();

let names = [];
let quantities = [];
let prices = [];
let ordenes = [];

const Pedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    if (pedidos) {
      res.json(pedidos);
      const info = pedidos[pedidos.length - 1].pedidos;
      const nombres = info[info.length - 1].nombres;
      const cantidades = info[info.length - 1].cantidades;
      //console.log(nombres);
      const vector = await Producto.find({ nombre: { $in: nombres } });
      const precios = vector.map((price) => price.precio);
      //console.log(prices);
      //console.log(nombres);
      //console.log(cantidades);
      for (let index = 0; index < prices.length; index++) {
        let a = nombres[index];
        names.push(a);
        let b = cantidades[index];
        quantities.push(b);
        let c = precios[index];
        prices.push(c);
        ordenes[index].push({ title: names[index], unit_price: prices[index], quantity: quantities[index] })
      }
      console.log(ordenes);
    } else {
      console.log("No hay pedidos para mostrar");
    }
  } catch (error) {
    console.log(error);
  }
};

// Agrega credenciales
configure({
  access_token: process.env.MERCADOPAGO_TOKEN,
});

router.get("/orders", Pedidos);

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

  let items = [];

  for (let index = 0; index < prices.length; index++) {
    items[index].push({ title: names[index], unit_price: prices[index], quantity: quantities[index] })
  }
  console.log(items);

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