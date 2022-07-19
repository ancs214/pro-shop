import express from 'express'
//express async handler is a middleware that helps with error handling in our mongoose async function
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

//GET ALL PRODUCTS  -  /api/products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//GET PRODUCT BY ID  -  /api/products/:id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
