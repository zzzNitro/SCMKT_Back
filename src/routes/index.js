const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require('./user');
const contract = require('./contract');
const preCharge = require('./precharge')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/user', user);
router.use('/contract', contract);
router.use('/precharge', preCharge);

module.exports = router;