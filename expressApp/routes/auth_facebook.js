const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('facebookStrategy', {scope: 'email'}));
router.get('/callback', passport.authenticate('facebookStrategy', {
    successRedirect: '/api/products',
    failureRedirect: '/'
}));

module.exports = router;