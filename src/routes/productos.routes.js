import { Router } from 'express';
import { Administrador } from '../middlewares/administrador.middleware.js';
import * as Productos from '../controllers/productos.controller.js';

const router = Router();

router.get('/', Productos.Productos);

router.post('/nuevos', Administrador, Productos.CrearProducto);

router.put('/:id', Administrador, Productos.ActualizarProductos);

router.delete('/Eliminar/:id', Administrador, Productos.EliminarProductos);

export default router;
