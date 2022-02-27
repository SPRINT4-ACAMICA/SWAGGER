import { Router } from 'express';
import * as Usuarios from '../controllers/usuarios.controller.js';
import  datosLogin from "../middlewares/login.middleware.js";
//import { Administrador } from '../middlewares/administrador.middleware.js';
//import { Verificar } from '../middlewares/token.middleware.js';

const router = Router();

//router.get('/', Usuarios.usuarios);

router.post('/Registro', Usuarios.crearUsuario);

router.post('/Login', datosLogin, Usuarios.inicioSesion, );

router.delete('/Eliminar/:id', Usuarios.eliminarUsuarios);

export default router;