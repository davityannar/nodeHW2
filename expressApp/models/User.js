class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const users = [
	{name: 'Nar', age: 21},
	{name: 'Narr', age: 25},
	{name: 'Das', age: 27},
	{name: 'Dass', age: 30},
	{name: 'MasDavha', age: 34},
];

module.exports.User = User;
module.exports.users = users;