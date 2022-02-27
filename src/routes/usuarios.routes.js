import { Router } from 'express';
import * as Usuarios from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', Usuarios.usuarios);

router.post('/Registro', Usuarios.crearUsuario);

router.post('/Login', Usuarios.inicioSesion );

router.delete('/Eliminar/:id', Usuarios.eliminarUsuarios);

export default router;