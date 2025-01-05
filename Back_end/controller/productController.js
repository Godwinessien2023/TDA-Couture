const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify')



// Create A New Product
const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, quantity, image } = req.body;
    if (!name || !description || !price || !quantity || !image) {
        res.status(400);
        throw new Error('Please fill all fields');
    }
    const slug = slugify(name, { lower: true });
    const product = new Product({
        name,
        description,
        price,
        quantity,
        image,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


// Get a Product
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (err) {
        throw new Error('error getting product');
    }
});


// Get all Products
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // 1. Filtering
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // 2. Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // 3. Field limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        // 4. Pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 100;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const numProducts = await Product.countDocuments();
            if (skip >= numProducts) throw new Error('This page does not exist');
        }

        const products = await query;
        res.json(products);
    } catch (error) {
        throw new Error('Error fetching products');
    }
});


// Update a product
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity, image, category } = req.body;

    if (!name || !description || !price || !quantity || !image || !category) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    // // Validate the category
    // const categoryExists = await Category.findById(category);
    // if (!categoryExists) {
    //     res.status(400);
    //     throw new Error('Invalid category');
    // }

    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    product.image = image;
    product.category = category;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
});


// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product removed' });
});


// Export the module
module.exports = { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct };