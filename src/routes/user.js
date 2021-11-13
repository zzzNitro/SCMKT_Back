const { Router } = require('express');
const router = Router();
const {NewUser,
    GetUsers,
    LoginUser,
    deactivateUser,
    editUser,
    getUserById
} = require('../controllers/UserController');

// Only Routes
router.post('/newUser', NewUser);
router.get('/login', LoginUser);
router.get('/:id', getUserById);
router.put('/edit/:id', editUser);
router.put('/delete/:id', deactivateUser);
router.get('/', GetUsers);

module.exports = router;