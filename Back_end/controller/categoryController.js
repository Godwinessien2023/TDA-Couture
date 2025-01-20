const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

// Create a new category
const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400);
        throw new Error('Please provide a category name');
    }

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
        res.status(400);
        throw new Error('Category already exists');
    }

    const category = new Category({ name });
    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
});

// Get a category by ID
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }
    res.json(category);
});

// Get all categories
const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// Update a category by ID
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        res.status(400);
        throw new Error('Please provide a category name');
    }

    const category = await Category.findById(id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }

    category.name = name;
    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory);
});

// Delete a category by ID
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }

    if (category) {
        await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'Category removed' });
    }
});

// Export the module
module.exports = { createCategory, getCategory, getAllCategories, updateCategory, deleteCategory };