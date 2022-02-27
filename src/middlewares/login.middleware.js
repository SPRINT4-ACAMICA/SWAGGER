import { sessionSchema } from "../schemas/login.schema.js";

const datosLogin = async (req, res, next) => {
  try {
    await sessionSchema.validateAsync(req.body);
    next();
  } catch (error) {
    console.error(error.details[0].message);
    res.status(404).json(error.details[0].message);
  }
};

export default datosLogin;
