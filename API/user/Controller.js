const User = require('./Model')
require('dotenv').config()
const mongoose = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


const login = async (req, res) => {

    const { password, email } = req.body;

    try {
        await mongoose.connect(process.env.MONGO_URI)
        const existingUser = await User.findOne({ email: email })

        if (!existingUser) {
            res.status(404).json({
                message: "User not found"
            })
        }
        else {
            const decryptPassword = await compare(password, existingUser.password)
            if (email == existingUser.email && decryptPassword) {
                const token = sign(
                    {
                        id: existingUser._id,
                        username: existingUser.username,
                        email: existingUser.email,
                        profile : existingUser.profile,
                        role : existingUser.role
                    } ,
                    process.env.JWT_SECRET
                )
                res.json({
                    message: "Successfully Loggined",
                    token: token
                })
            }
            else {
                res.json({
                    message: "invalid Credentials"
                })
            }
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const signup = async (req, res) => {

    const { username, password, email } = req.body;
    console.log({ username, password, email })
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected")
        const existingUser = await User.exists({ email: email })
        if (existingUser) {
            res.status(208).json({
                message: "User Already Exists"
            })
        }

        else {
            await User.create({ username, email, password: await hash(password, 12) })
            console.log("User Created")
            res.status(201).json({
                message: "Signup Successfully"
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getAllUsers = async (req, res) => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        const Users = await User.find()
        res.json(
            {
                Users: Users
            })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getUserByEmail = async (req, res) => {

    const { email } = req.query
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const Users = await User.findOne({ email: email })
        res.json(
            {
                Users: Users
            }
        )
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getUserByID = async (req, res) => {
    const { _id } = req.query;
    const cleanedId = _id.trim(); 

    try {
        await mongoose.connect(process.env.MONGO_URI);
        const Users = await User.findOne({ _id: cleanedId }); 
        res.json({ Users });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const deleteUser = async (req, res) => {

    const { _id } = req.body
    try {
        await mongoose.connect(process.env.MONGO_URI)
        await User.deleteOne({ _id })
        const user = await User.find()
        res.status(200).json({
            message: "User Deleted",
            user
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const updateUser = async (req, res) => {
    const { _id, email, username, password } = req.body

    const filter = { _id };
    const update = { email ,username, password };

    try {
        await mongoose.connect(process.env.MONGO_URI)
        await User.findOneAndUpdate(filter, update, {
            new: true
        });
        const user = await User.find()
        res.json({
            message: "User Updated",
            user
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { login , signup , getAllUsers , getUserByEmail , getUserByID , deleteUser , updateUser}