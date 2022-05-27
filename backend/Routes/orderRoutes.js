const express = require('express');
const createOrderController = require('../controllers/createOrderController');
const router = express.Router();


router.post('/createorder',createOrderController.createOrder);



module.exports = router;



