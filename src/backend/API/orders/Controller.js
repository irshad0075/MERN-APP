const { connect } = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const Mailgen = require('mailgen');
const Order = require('./model');

const demoMail = async (req, res) => {
    const { email, customerName } = req.body;

    if (!email || !customerName) {
        return res.status(403).json({
            message: 'Please provide all credentials'
        });
    }

    const config = {
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    };

    const transporter = nodemailer.createTransport(config);

    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'ArshiRovers',
            link: 'https://mailgen.js/'
        }
    });

    const mailGenEmail = {
        body: {
            name: customerName,
            intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
            table: {
                data: [
                    {
                        name: customerName,
                        email: email,
                        token: '6322596'
                    }
                ]
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };

    const response = {
        from: process.env.NODEMAILER_EMAIL,
        to: email,
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: mailGenerator.generate(mailGenEmail)
    };

    try {
        await transporter.sendMail(response);
        res.json({
            message: 'Check Your Email'
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//add orders
const addOrders = async (req, res) => {

    const { items, totalBill, customerName, customerEmail, customerContact, customerAddress, Status, Message } = req.body;

    if (!items || !totalBill || !customerName || !customerEmail || !customerContact || !customerAddress) {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("DB Connected")
      
            const order = await Order.create({ items, totalBill, customerName, customerEmail, customerContact, customerAddress, Status, Message })
            const orders = await Order.find()

            //EMAIL
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            //MAIL GEN SETUP
            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'Arshi Rovers',
                    link: 'https://mailgen.js/'
                }
            });


            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, 
                to: customerEmail, 
                subject: "Hello ✔", 
                text: "Hello world?",
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Welcome to Arshi Rovers site! We are very excited to have you.',
                    

                        table: [
                            {
                                // Optionally, add a title to each table.
                                title: 'Customer Details',
                                data: [
                                    {
                                        name: customerName,
                                        email: customerEmail,
                                        TrackingId: order._id,
                                        contact: customerContact,
                                        address: customerAddress,
                                    }
                                ]
                            },
                            {
                                // Optionally, add a title to each table.
                                title: 'Order Details',
                                data: [
                                    {
                                        item: items,
                                        description: 'Your First Item description',
                                        price: '$6.99',
                                        totalBill: totalBill
                                    }
                                ]
                            }
                        ],


                        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
                    }
                }), // html body
            });


            res.status(201).json({
                message: "Order Placed Successfully",
                TrackingId: order._id,
                orders

            })
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

///order by id


const getOrderByID = async (req, res) => {
    const { _id } = req.params;
    
    try {
        await connect(process.env.MONGO_URI);
        const order = await Order.findOne({ _id: _id }); // Change this line
        res.json({ order });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};




const getAllOrders = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const orders = await Order.find()
        res.json({ orders })

    }
    catch (error) {
        console.error("Error fetching all Orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

const updateOrder = async(req, res) => {

    const { _id, Status, Message } = req.body;

    const filter = { _id };
    const update = { Status, Message };

    try {
        await connect(process.env.MONGO_URL)
        await Order.findOneAndUpdate(filter, update, {
            new: true
        });

        const orders = await Order.find();
        res.json({
            message: "Order Updated Successfully",
            orders
        });
    }
    catch (error) {
        console.error("Error Updating Order:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = { demoMail, addOrders, getOrderByID, getAllOrders, updateOrder }