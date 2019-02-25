const { products, Product } = require('../models/Product');

const getAllProducts = (req, res) => {
	res.send(products);
};
const getProductById = (req, res) => {
	const searchResult = products.find(el => el.id === parseInt(req.params.id));
	res.send(searchResult);
};
const getProductReviews = (req, res) => {
	const searchResult = products.find(el => el.id === parseInt(req.params.id));
	res.send(searchResult.reviewers);
};
const addNewProduct = (req, res) => {
	products.push(new Product(3, 'product5', 400, ['New', 'Product', 'Added'] ));
	res.send(products);
};

module.exports = {
	getAllProducts,
	getProductById,
	getProductReviews,
	addNewProduct
};