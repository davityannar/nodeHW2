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
})/*, (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Вы прошли авторизацию и оказались на закрытой странице');
    } else {
        console.log(req.isAuthenticated());
        res
            .status(403)
            .send('Доступ запрещен');
    }
}*/);

module.exports = router;