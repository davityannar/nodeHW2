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
		weight: 100,
		reviewers: ['Vasia', 'Petia', 'Masha']
  },
	{
		id: 1,
		name: 'product2',
		weight: 200,
		reviewers: ['Dasha', 'Ira', 'Masha']
  },
	{
		id: 2,
		name: 'product3',
		weight: 100,
		reviewers: ['Sasha', 'Petia', 'Dima']
  },
	{
		id: 3,
		name: 'product4',
		weight: 100,
		reviewers: ['Vitia', 'Dima', 'Ania']
  }
];

module.exports.Product = Product;
module.exports.products = products;
