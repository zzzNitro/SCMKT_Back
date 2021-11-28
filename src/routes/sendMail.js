const { Router } = require('express');
const router = Router();
const { sendMail } = require('../controllers/UserController');

// Only Routes

router.post('/api/mail', sendMail);


module.exports = router;





