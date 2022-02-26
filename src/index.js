import express from "express";
import cors from "cors";
import passport from "passport";
//import expressJwt from "express-jwt";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import usuariosRoutes from "./routes/usuarios.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import ordenesRoutes from "./routes/pedidos.routes.js";
import public_routes from "./routes/public.js";
import payment_routes from "./routes/Payment/index.js";
import auth_routes from "./routes/auth/index.js";
import "./services/index.js";
import "./basededatos.js";
import * as options from "./utils/swagger.js";
import config from "./config.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

const swaggerSpecs = swaggerJSDoc(options.swaggerOptions);

app.use(payment_routes);
app.use(public_routes);
app.use(auth_routes);

app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

/**app.use(
  expressJwt({
    secret: config.secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/Login", "/Registro"],
  })
);**/

app.use("/usuarios", usuariosRoutes);

/**app.use((err, req, res, _next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json("Token invalido");
  } else {
    res.status(500).json("Internal server error");
  }
});**/

app.use("/productos", productosRoutes);
app.use("/pedidos", ordenesRoutes);

app.listen(config.port, () => {
  console.log(`Escuchando en el puerto ${config.port}`);
});

export default app;