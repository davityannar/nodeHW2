const express = require('express');
const router = express.Router();

const { checkToken } = require('../middleware/auth');

const {
    getAllProducts,
    getProductById,
    getProductReviews,
    addNewProduct
} = require('../controllers/products');

router.get('/', /*checkToken,*/ getAllProducts);
router.get('/:id', checkToken, getProductById);
router.get('/:id/reviews', checkToken, getProductReviews);
router.post('/', checkToken, addNewProduct);

module.exports = router;