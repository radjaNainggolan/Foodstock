const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const router = express.Router();


router.get('/subcategories',subCategoryController.getSubCategories);
router.get('/subcategory/:id',subCategoryController.getSubCategoryByID);

module.exports = router;