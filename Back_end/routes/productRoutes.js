const express = require('express');
const router = express.Router();
const  { 
    createProduct
} = require('../controller/productController');

router.post('/create', createProduct);

// Export the module
module.exports = router;
