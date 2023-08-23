const Category = require('./Model'); // Make sure to require your Category model
const { connect } = require('mongoose');
require('dotenv').config();

// Function to create a new category
const createCategory = async (req, res) => {
    const { CategoryName, CategoryImage, price, description } = req.body;

    if (!CategoryName || !CategoryImage || !price || !description) {
        return res.status(400).json({
            message: "Missing Required Field"
        });
    }

    try {
        await connect(process.env.MONGO_URI);
        const checkExistingCategory = await Category.exists({ CategoryName });

        if (checkExistingCategory) {
            return res.status(400).json({
                message: "Category Already Exists"
            });
        }

        await Category.create({ CategoryName, CategoryImage, price, description });

        const allCategories = await Category.find();

        res.status(201).json({
            message: "Category created",
            categories: allCategories
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Function to get all categories
const getAllCategories = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI);
        const allCategories = await Category.find();
        res.json({
            categories: allCategories
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getCategoryByName = async (req, res) => {
    const { CategoryName } = req.query;
    try {
        await connect(process.env.MONGO_URI);
        const category = await Category.findOne({ CategoryName });
        res.json({ category });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
// Function to get a category by ID
const getCategoryByID = async (req, res) => {
    const { _id } = req.query;
    try {
        await connect(process.env.MONGO_URI);
        const category = await Category.findOne({ _id });
        res.json({ category });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Function to update a category
const updateCategory = async (req, res) => {
    const { _id, ...updateData } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ObjectId"
            });
        }

        await connect(process.env.MONGO_URI);
        await Category.findByIdAndUpdate(_id, updateData, {
            new: true
        });

        const categories = await Category.find();

        res.json({
            message: "Category updated",
            categories
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Function to delete a category
const deleteCategory = async (req, res) => {
    const { _id } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ObjectId"
            });
        }

        await connect(process.env.MONGO_URI);
        await Category.deleteOne({ _id });

        const categories = await Category.find();

        res.status(200).json({
            message: "Category deleted",
            categories
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByName,
    getCategoryByID,
    updateCategory,
    deleteCategory
};
