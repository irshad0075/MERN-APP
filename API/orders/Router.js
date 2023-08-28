const express = require('express')
const router = express.Router()

const { demoMail, addOrders, getOrderByID, getAllOrders, updateOrder} = require('./Controller')

router.post('/send-demo-mail', demoMail)
router.post('/create-order', addOrders)
router.get('/all-orders', getAllOrders)
router.get('/Order-by-id', getOrderByID)
router.put('/update-order', updateOrder)

 
module.exports = router