import { Router } from 'express';
import * as Productos from '../controllers/productos.controller.js';

const router = Router();

router.get('/', Productos.Productos);

router.post('/nuevos', Productos.CrearProducto);

router.put('/:id', Productos.ActualizarProductos);

router.delete('/Eliminar/:id', Productos.EliminarProductos);

export default router;
