const express = require('express');
const { createCategory, getCategory, getAllCategories, updateCategory, deleteCategory } = require('../controller/categoryController');
const {isAdmin, authMiddleware,} = require('../middlewares/authMiddleware');


const router = express.Router();


router.post('/', createCategory);
router.put('/update/:id',  authMiddleware, isAdmin, updateCategory);
router.get('/getcategory/:id',  authMiddleware, isAdmin, getCategory);
router.get('/getallproducts', authMiddleware, isAdmin, getAllCategories);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;
