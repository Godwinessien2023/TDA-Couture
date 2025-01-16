const express = require('express');
const { addItemToCart, removeItemFromCart, getUserCart } = require('../controller/cartController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addItemToCart)
router.get('/getcart', authMiddleware, getUserCart)
router.delete('/removeitem', authMiddleware, removeItemFromCart);

module.exports = router;