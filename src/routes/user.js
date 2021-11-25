const { Router } = require('express');
const router = Router();
const {NewUser,
    GetUsers,
    LoginUser,
    deactivateUser,
    editUser,
    getUserById,
    getUserByEmail,
} = require('../controllers/UserController');

// Only Routes
router.put('/newUser', NewUser);
router.get('/login', LoginUser);
router.get('/:id', getUserById);
router.get('/auth/:email', getUserByEmail)
router.put('/edit/:id', editUser);
router.put('/delete/:id', deactivateUser);
router.get('/', GetUsers);

module.exports = router;