import Usuario from '../models/usuarios.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config.js";

export async function Token(correo, contraseña) {
    const usuario = await Usuario.findOne({ correo });
    const contraseña = bcrypt.compare(contraseña, usuario.contraseña);
    if (!usuario && !contraseña) {
        const usuario = new Usuario({
            correo,
            contraseña: bcrypt.hashSync(contraseña, 10),
        });
        await usuario.save();
    } else {
        const token = jwt.sign({ id: usuario._id }, config.secret, {
            expiresIn: 60 * 60 * 24,
        });
        return token;
    }
}