//import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
//import config from '../config.js';
import Usuario from '../models/usuarios.model.js';

export const usuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) { res.status(404).json(error); }  
};

export const crearUsuario = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        if (correo && contraseña) {
            const usuario = await Usuario.findOne({ correo });
            if (usuario) {
                res.status(400).json("El Correo ya existe en la base de datos");
            } else {
                usuario = new Usuario({
                    correo,
                    contraseña: bcrypt.hashSync(contraseña, 10),
                });
                await usuario.save();
                res.status(201).json("Usuario creado con exito");
            } 
        } else { res.status(400).json("Faltan datos"); }
    } catch (error) { res.status(404).json(error); } 
};

/**export const inicioSesion = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        if (correo && contraseña) {
            const usuario = await Usuario.findOne({ correo: req.body.correo });
            const contraseña = bcrypt.compare(req.body.contraseña, usuario.contraseña);
            if (!usuario && !contraseña) {
                return res.status(401).send({ auth: false, token: null });
            } else {
                const token = jwt.sign({ id: usuario._id }, config.secret, {
                    expiresIn: 60 * 60 * 24,
                });
                res.status(200).json({ auth: true, token });
            }
        }
        else { res.status(400).json({msg: 'Faltan datos'}); }
    } catch (error) { res.status(404).json(error); }  
};**/

export const eliminarUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        if(id) {
            await Usuario.findByIdAndDelete(id);
            res.status(200).json({msg: "El Usuario fue eliminado con exito"});
        } else { res.status(400).json({msg: 'Faltan datos'}); } 
    } catch (error) { res.status(404).json(error); } 
};
