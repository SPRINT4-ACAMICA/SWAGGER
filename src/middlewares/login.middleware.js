import { sessionSchema } from "../schemas/login.schema.js";

const datosLogin = async (req, res, next) => {
  try {
    await sessionSchema.validateAsync(req.body);
    next();
  } catch (error) {
    console.error(error);
    res.status(404).json(error);
  }
};

export default datosLogin;
