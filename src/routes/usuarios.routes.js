import { Router } from 'express';
import * as Usuarios from '../controllers/usuarios.controller.js';
import { Administrador } from '../middlewares/administrador.middleware.js';
import { Verificar } from '../middlewares/token.middleware.js';

const router = Router();

/**router.get('/', Verificar, Usuarios.Usuarios);

router.post('/Registro', Usuarios.CrearUsuario);

router.post('/Login', Usuarios.InicioSesion);**/

router.delete('/Eliminar/:id', Administrador, Usuarios.EliminarUsuarios);

export default router;