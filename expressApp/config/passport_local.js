const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const credential = require('../config/employees');

passport.serializeUser((credential, done) => {
	console.log('Сериализация: ' + JSON.stringify(credential));
	done(null, credential.data.users[0].username);
});
passport.deserializeUser((name, done) => {
	const user = (credential.data.users[0].username === name) ?
        credential.data.users[0]
        : false;
	done(null, user);
});

passport.use('localStrategy', new LocalStrategy(
    {
        username: 'username',
        password: 'password'
    },
    (username, password, done) => {
    if (username === credential.data.users[0].username && password === credential.data.users[0].password) {
        return done(null, credential);
    } else {
        return done(null, false);
    }
}));