const express = require('express');
const { addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders, getOrders } = require('../controller/orderController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/addorders', authMiddleware, addOrderItems)
router.get('/getorders', authMiddleware, getOrders)

router.get('/myorders', authMiddleware, getMyOrders);

router.get('/:id', authMiddleware, getOrderById);

router.put('/:id/pay', authMiddleware, updateOrderToPaid);

router.put('/:id/deliver', authMiddleware, isAdmin, updateOrderToDelivered);

module.exports = router;