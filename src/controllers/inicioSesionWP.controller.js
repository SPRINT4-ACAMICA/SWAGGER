import usuarioIDP from "../models/usuarioIDP.model.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export async function tokenIDP(email, name, lastName) {
    const usuario = await usuarioIDP.findOne({ correo: email });
    if (!usuario) {
        const usuario = new usuarioIDP({
            correo: email,
            nombre: name,
            apellido: lastName,
        });
        await usuario.save();
    } else {
        const token = jwt.sign({ id: usuario._id }, config.secret, {
            expiresIn: 60 * 60 * 24,
        });
        return token;
    }
}
