const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { google } = require('./config');

const credential = require('../config/employees');

passport.serializeUser(function(user, done) {
    console.log('user', user);
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
passport.use('googleStrategy', new GoogleStrategy({
        clientID: google.clientID,
        clientSecret: google.clientSecret,
        callbackURL: google.callbackURL,
        passReqToCallback: true
    },
    function (request, token, refreshToken, profile, done) {
		const user = findUser(profile.id);
		if(user) {
		    console.log('user',user);
            return done(null, user);
        }else {
		    const newUser = {
		        id: profile.id,
                email: 'nodeJS@task.by',
                username: profile.displayName,
                password: '12345',
                token: token
            };
		    credential.data.users.push(newUser);
		    console.log(credential.data.users);
		    return done(null, newUser);
        }
    }
));