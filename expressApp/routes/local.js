const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/', (req, res, next) => {
	passport.authenticate('localStrategy', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.json({status: 'Укажите правильный логин и пароль!'})
		}
		req.login(user, err => {
				if (err) {
					return next(err);
				}
				return res.json({status: 'Все ок, Добро пожаловать'});
				//return res.redirect('/api/products');
			});
	})(req, res, next);
});
router.get('/secret', (req, res) => {
	if (req.isAuthenticated()) {
		//res.send('Вы прошли авторизацию и оказались на закрытой странице');
		res.redirect('/api/products');
	} else {
		res
			.status(403)
			.send('Доступ запрещен');
	}
});

module.exports = router;