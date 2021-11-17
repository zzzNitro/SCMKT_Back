const { Router } = require('express');
const router = Router();
const { preCharge } = require('../controllers/PreChargeController');

//OnlyRoutes
//comment
router.get('/', preCharge);

module.exports = router;