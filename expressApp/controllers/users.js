const { users } = require('../models/User.js');

const getUsers = (req, res) => {
	res.send(users);
};

module.exports = {
	getUsers
};