const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

// Add item to cart
const addItemToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
        // If cart exists for the user
        const itemIndex = cart.cartItems.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            // If product exists in the cart, update the quantity
            cart.cartItems[itemIndex].quantity += quantity;
        } else {
            // If product does not exist in the cart, add it
            cart.cartItems.push({
                product: productId,
                name: product.name,
                quantity,
                price: product.price,
                image: product.image
            });
        }
    } else {
        // If no cart exists, create a new cart
        const newCart = new Cart({
            user: req.user._id,
            cartItems: [{
                product: productId,
                name: product.name,
                quantity,
                price: product.price,
                image: product.image
            }]
        });

        await newCart.save();
        return res.status(201).json(newCart);
    }

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
});

// Remove item from cart
const removeItemFromCart = asyncHandler(async (req, res) => {
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    const itemIndex = cart.cartItems.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
        cart.cartItems.splice(itemIndex, 1);
        const updatedCart = await cart.save();
        res.status(200).json(updatedCart);
    } else {
        res.status(404);
        throw new Error('Product not found in cart');
    }
});

// Get user cart
const getUserCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate('cartItems.product', 'name price image');

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    res.status(200).json(cart);
});

module.exports = { addItemToCart, removeItemFromCart, getUserCart };