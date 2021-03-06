const { Router } = require('express');
const router = Router();
const {
    GetContracts,
    GetContractById,
    EditContract,
    EditStatusContract,
    DeleteContract,
    NewContract
} = require('../controllers/ContractController');

//OnlyRoutes

router.get('/', GetContracts);
router.get('/:id', GetContractById);
router.put('/edit/:id', EditContract);
router.put('/edit/status/:id', EditStatusContract);
router.put('/delete/:id', DeleteContract);
router.put('/delete', DeleteContract);
router.put('/new', NewContract)

module.exports = router;
