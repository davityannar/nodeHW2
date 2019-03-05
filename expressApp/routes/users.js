const express = require('express');
const router = express.Router();
const { checkToken } = require('../middleware/auth');

const { getUsers } = require('../controllers/users');

router.get('/', checkToken, getUsers);

module.exports = router;