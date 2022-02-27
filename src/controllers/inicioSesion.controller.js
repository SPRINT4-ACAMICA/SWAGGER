import Usuario from '../models/usuarios.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config.js';

export async function Token(email, password) {
    const usuario = await Usuario.findOne({ correo: email });
    if (!usuario) {
        const usuario = new Usuario({
            correo: email,
            contraseña: bcrypt.hashSync(password, 10),
        });
        await usuario.save();
    } else {
        const contraseña = bcrypt.compare(password, usuario.contraseña);
        if (contraseña) {
            const token = jwt.sign({ id: usuario._id }, config.secret, {
            expiresIn: 60 * 60 * 24,
            });
            return token;
        } else {
            console.log('Las contraseñas no coinciden');
        }
    }
}
