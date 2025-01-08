const express = require('express');
const { checkoutOrder } = require('../controller/checkoutController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/checkout', authMiddleware, checkoutOrder);

module.exports = router;