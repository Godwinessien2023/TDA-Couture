const express = require('express');
const router = express.Router();
const { createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controller/productController');
const {isAdmin, authMiddleware,} = require('../middlewares/authMiddleware');

router.post('/', createProduct);
router.put('/update/:id',  authMiddleware, isAdmin, updateProduct);
router.get('/getproduct/:id',  getProduct);
router.get('/getallproducts',  getAllProducts);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);


module.exports = router;