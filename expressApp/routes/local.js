const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/', (req, res, next) => {
	passport.authenticate('localStrategy', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.json({status: 'Enter the correct username and password!'})
		}
		req.login(user, err => {
				if (err) {
					return next(err);
				}
				return res.json({status: 'Welcome'});
				//return res.redirect('/api/products');
			});
	})(req, res, next);
});
router.get('/secret', (req, res) => {
	if (req.isAuthenticated()) {
		//res.send('You are logged ');
		res.redirect('/api/products');
	} else {
		res
			.status(403)
			.send('Wrong Access');
	}
});

module.exports = router;