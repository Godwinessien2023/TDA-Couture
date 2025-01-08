const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// Checkout and complete order
const checkoutOrder = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No order items');
    }

    // Create the order
    const order = new Order({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice
    });

    const createdOrder = await order.save();

    // Update product quantities
    for (const item of orderItems) {
        const product = await Product.findById(item.product);
        if (product) {
            product.quantity -= item.qty;
            await product.save();
        }
    }

    res.status(201).json(createdOrder);
});

// Export the module
module.exports = { checkoutOrder };