import express from 'express'
const router = express.Router()
import{
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
} from '../controllers/productControllers.js'

import {protect, admin} from '../middleware/authMiddleware.js'

//fetching data from database

    router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

//!! put top route above id route     
router.get('/top',getTopProducts)
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

   
router.route('/:id/reviews').post(protect, createProductReview)


export default router