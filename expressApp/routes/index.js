const express = require('express');
const router = express.Router();

const {
	getAllProducts,
	getProductById,
	getProductReviews,
	addNewProduct
} = require('../controllers/products');

const {
	getUsers
} = require('../controllers/users');

router.get('/api/products', getAllProducts);
router.get('/api/products/:id', getProductById);
router.get('/api/products/:id/reviews', getProductReviews);
router.post('/api/products', addNewProduct);
router.get('/api/users', getUsers);

module.exports = router;