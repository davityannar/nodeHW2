const _ = require('lodash');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const credential = require('../config/employees');
const users = credential.data.users;

router.post('/', function (req, res) {
    let employee = _.find(users, { username: req.query.username });
console.log('employee', employee);
    if (employee === undefined || employee.username !== req.query.username) {
        res.status(403).send({ success: false,  message: 'Wrong user name try it again.' });
    } else {
        let payload = { "email": employee.email };
        let token = jwt.sign(payload, 'secret', { expiresIn: 50000 });
        res.send(token);
    }
});

module.exports = router;