const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('googleStrategy', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
}));
router.get('/callback', passport.authenticate('googleStrategy', {
    successRedirect: '/api/products',
    failureRedirect: '/'
}));

module.exports = router;