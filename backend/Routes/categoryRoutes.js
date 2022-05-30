const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();


router.get('/categories',categoryController.getCategories);
router.get('/category/:id',categoryController.getCategoryByID);


module.exports = router;