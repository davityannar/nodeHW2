class Product {
	constructor(id, name, weight, reviewers) {
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.reviewers = reviewers
	}
}

const products = [
	{
		id: 0,
		name: 'product1',
		weight: 110,
		reviewers: ['Nar', 'Narr', 'Narrr']
  },
	{
		id: 1,
		name: 'product2',
		weight: 100,
		reviewers: ['Dav', 'Davv', 'Davv']
  },
	{
		id: 2,
		name: 'product3',
		weight: 200,
		reviewers: ['Bar', 'Barr', 'Barrr']
  },
	{
		id: 3,
		name: 'product4',
		weight: 90,
		reviewers: ['Das', 'Dass', 'Dass']
  }
];

module.exports.Product = Product;
module.exports.products = products;
