const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/',productController.getAllProducts);

router.get('/:id',productController.getProductByID);

router.get('/category/:id',productController.getProductsByCategory);

router.get('/subcategory/:id',productController.getProductsBySubCategory);



module.exports = router;