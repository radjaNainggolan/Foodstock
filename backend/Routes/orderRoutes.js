const express = require('express');
const createOrderController = require('../controllers/createOrderController');
const verifyJWT =  require('../middleware/verifyJWT');
const router = express.Router();


router.post('/createorder',verifyJWT,createOrderController.createOrder);



module.exports = router;



