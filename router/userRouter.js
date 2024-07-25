const express = require('express');
const { registerUser, login, verify } = require('../controller/userController');
const router = express.Router();
const authController = require('../controller/userController');
const validation = require('../Middleware/validatetokens');

router.post('/register', registerUser);
router.post('/login', login);
router.post('/verify',validation, verify);


module.exports = router;
