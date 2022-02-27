import Joi from "joi";

export const sessionSchema = Joi.object({
  nombre: Joi.string().alphanum().min(3).max(30).required(),

  comtraseña: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});
