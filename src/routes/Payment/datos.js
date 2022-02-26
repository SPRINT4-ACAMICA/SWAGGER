import Pedido from "../../models/pedidos.model.js";
import Producto from "../../models/productos.model.js";

let names = [];
let quantities = [];
let prices = [];
let ordenes = [];

export const Pedidos = async (req, res) => {
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
      for (let index = 0; index < nombres.length; index++) {
        let a = nombres[index];
        names.push(a);
        let b = cantidades[index];
        quantities.push(b);
        let c = precios[index];
        prices.push(c);
        ordenes.push({
          title: names[index],
          unit_price: prices[index],
          quantity: quantities[index],
        });
      }
      //console.log(ordenes);
    } else {
      console.log("No hay pedidos para mostrar");
    }
  } catch (error) {
    console.log(error);
  }
};
