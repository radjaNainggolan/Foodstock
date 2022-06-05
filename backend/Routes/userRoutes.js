const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/user/:id', userController.getUser);
router.get('/user/:id/order', userController.getLastOrderByUserID);
router.get('/user/:id/orders', userController.getRecentOdersByUserID);


module.exports = router;