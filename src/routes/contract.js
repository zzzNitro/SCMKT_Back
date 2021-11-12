const { Router } = require('express');
const { GetContracts } = require('../controllers/ContractController');
const router = Router();
const {GetContracts, GetContractById, EditContract} = require('../controllers/ContractController');



//OnlyRoutes

router.get('/', GetContracts);
router.get('/:id', GetContractById);
router.put('/edit/:id', EditContract);


module.exports = router;
