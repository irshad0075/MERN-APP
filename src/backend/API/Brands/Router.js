const express = require('express')
const router = express.Router()
const {createBrand , getAllBrands ,getBrandByName, getBrandByID , updateBrand , deleteBrand } = require('./Controller')


router.post('/create-brand' , createBrand)
router.get('/get-all-brand' , getAllBrands)
router.get('/get-brand-by-id' , getBrandByID)
router.get('/get-brand-by-name' , getBrandByName)
router.put('/update-brand' , updateBrand)
router.delete('/delete-brand' , deleteBrand)


module.exports = router;