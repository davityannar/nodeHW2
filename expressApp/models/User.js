class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const users = [
	{name: 'Dima', age: 30},
	{name: 'Vasia', age: 31},
	{name: 'Petia', age: 32},
	{name: 'Sasha', age: 33},
	{name: 'Masha', age: 34},
];

module.exports.User = User;
module.exports.users = users;