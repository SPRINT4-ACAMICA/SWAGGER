import { Router } from 'express';
import google from './google.js';
import facebook from './facebook.js';
import linkedin from './linkedin.js';
import github from './github.js';
import { Token } from '../../controllers/inicioSesion.controller.js';

const router = Router();

//router.post('/Login', datosLogin, inicioSesion);

router.post('/sign-up', async function (req, res) {
  console.log('New request POST to /sign-up');

  console.log(req.body);

  const token  = await Token(req.body.email, req.body.password)
  
  console.log(token);
  res.json({ auth: true, token });

  let data = {
    success: true,
    message: `User ${req.body.email} registered correctly`,
    token: token,
    data: req.body,
  };

  res.json(data);
});

router.get('/failed', (req, res) => res.send('Hay un error en el login'));

router.use('', google);
router.use('', facebook);
router.use('', linkedin);
router.use('', github);

export default router;
