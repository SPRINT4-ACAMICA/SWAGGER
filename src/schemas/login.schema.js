import Joi from "joi";

export const sessionSchema = Joi.object({
  correo: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  contraseña: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});
