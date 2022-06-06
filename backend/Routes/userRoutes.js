const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const verifyJWT =  require('../middleware/verifyJWT');

router.get('/user/:id', verifyJWT,userController.getUser);
router.get('/user/:id/order', userController.getLastOrderByUserID);
router.get('/user/:id/orders', userController.getRecentOdersByUserID);


module.exports = router;