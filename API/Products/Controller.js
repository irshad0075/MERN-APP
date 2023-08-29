const Product = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();
const createProduct = async (req, res) => {
    const {
        ProductName,
        description,
        price,
        category,
        brand,
        colors,
        thumbnail,
        imageArray,
        modelYear,
        discountPercentage,
        rating,
        stock,
    } = req.body;

    if (!ProductName || !description || !price || !category || !colors || !brand || !thumbnail || !imageArray || !modelYear || !discountPercentage || !rating || !stock) {
        return res.status(400).json({
            message: "Missing Required Field"
        });
    }

    try {
        await connect(process.env.MONGO_URI);
        const checkExistingProduct = await Product.exists({ ProductName });

        if (checkExistingProduct) {
            return res.status(400).json({
                message: "Product Already Exists"
            });
        }

        await Product.create({
            ProductName,
            description,
            price,
            category,
            colors,
            brand,
            thumbnail,
            imageArray,
            modelYear,
            discountPercentage,
            rating,
            stock
        });

        const allProducts = await Product.find();

        res.status(201).json({
            message: "Product created",
            products: allProducts
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI);
        const allProduct = await Product.find();
        res.json({
            products: allProduct
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getProductByName = async (req, res) => {
    const { ProductName } = req.query;
    try {
        await connect(process.env.MONGO_URI);
        const products = await Product.find({ ProductName });
        res.json({ products });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getProductById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const product = await Product.findById(_id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getProductByBrand = async (req, res) => {
    const { brand } = req.query;
    try {
        await connect(process.env.MONGO_URI);
        const products = await Product.find({ brand });
        res.json({ products });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getProductByCategory = async (req, res) => {
    const { category } = req.query;
    try {
        await connect(process.env.MONGO_URI);
        const products = await Product.find({ category });
        res.json({ products });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateProduct = async (req, res) => {
    const { _id, ...updateData } = req.body;
    const filter = { _id };

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ObjectId"
            });
        }

        await connect(process.env.MONGO_URI);

        const updatedProduct = await Product.findOneAndUpdate(filter, updateData, {
            new: true
        });

        if (!updatedProduct) {
            return res.status(404).json({
                message: 'Product not found',
            });
        }

        const products = await Product.find();

        res.json({
            message: "Product updated",
            products
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


const deleteProduct = async (req, res) => {

    const { _id } = req.body
    try {
        await connect(process.env.MONGO_URI)
        await Product.deleteOne({ _id })
        const products = await Product.find()
        res.status(200).json({
            message: "Deleted Successfully",
            products
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    createProduct,
    getProductByBrand,
    getAllProduct,
    getProductByName,
    getProductById,
    getProductByCategory,
    updateProduct,
    deleteProduct
};