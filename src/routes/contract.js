const { Router } = require('express');
const router = Router();
const {GetContracts, GetContractById, EditContract, DeleteContract} = require('../controllers/ContractController');



//OnlyRoutes

router.get('/', GetContracts);
router.get('/:id', GetContractById);
router.put('/edit/:id', EditContract);
router.put('/delete/:id', DeleteContract);

module.exports = router;
