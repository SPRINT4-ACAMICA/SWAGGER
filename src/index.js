import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import "./basededatos.js";
import data from "./config.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import ordenesRoutes from "./routes/pedidos.routes.js";
import public_routes from "./routes/public.js";
import payment_routes from "./routes/Payment/index.js";
import auth_routes from "./routes/auth/index.js";
import "./services/index.js";
import * as options from "./utils/swagger.js";
import dotenv from "dotenv";
dotenv.config();

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);
const app = express();

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults["upgrade-insecure-requests"];
app.use(
  helmet({
    contentSecurityPolicy: { directives: cspDefaults },
  })
);

app.use(express.json());
app.use(cors());

app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.set("puerto", process.env.PORT);

app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);
app.use("/pedidos", ordenesRoutes);
app.use(payment_routes);
app.use(public_routes);
app.use(auth_routes);

app.listen(app.get("puerto"), () => {
  console.log("Escuchando en el puerto ", app.get("puerto"));
});

export default app;
