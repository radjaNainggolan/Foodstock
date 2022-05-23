const express = require('express');
const signUpAndLogInController = require('../controllers/signUpAndLogInController');
const router = express.Router();

router.post('/login', signUpAndLogInController.logIn);

router.post('/signup', signUpAndLogInController.signUp);


module.exports = router;