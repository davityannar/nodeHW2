const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { facebook } = require('./config');

const credential = require('../config/employees');

function findUser(id) {
    for (let i = 0; i < credential.data.users.length; i++) {
        if (id === credential.data.users[i].id) {
            return credential.data.users[i];
        }
    }
    return null;
}

passport.use('facebookStrategy', new FacebookStrategy({
        clientID: facebook.clientID,
        clientSecret: facebook.clientSecret,
        callbackURL: facebook.callbackURL,
    },
    function (token, refreshToken, profile, done) {
        const user = findUser(profile.id);
        console.log('profile', profile);
        if(user) {
            console.log('user',user);
            return done(null, user);
        }else {
            const newUser = {
                id: profile.id,
                email: 'nodeJS@task.by',
                username: profile.displayName,
                password: 'narek',
                token: token
            };
            credential.data.users.push(newUser);
            console.log(credential.data.users);
            return done(null, newUser);
        }
    }
));