// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const {facebook, google} = require('./config');

// const credential = require('../config/employees');
// /*{
//     code: 200,
//     message: 'Ok',
//     data: {
//         user: [
//             {   id: '101062124387309',
//                 email: 'nodeJS@task.by',
//                 username: 'Dmitry',
//                 password: '12345',
//                 token: ''
//             }
//         ],
//     }
// };*/

// //local strategy
// /*passport.serializeUser((credential, done) => {
// 	console.log('Сериализация: ' + JSON.stringify(credential));
// 	done(null, credential.data.user[0].username);
// });
// passport.deserializeUser((name, done) => {
// 	console.log('Десериализация: ' + name);
// 	const user = (credential.data.user[0].username === name) ? credential.data.user[0] : false;
// 	done(null, user);
// });*/

// passport.use('localStrategy', new LocalStrategy({username: 'username', password: 'password'}, (username, password, done) => {
//     if (username === credential.data.user[0].username && password === credential.data.user[0].password) {
//         return done(null, credential);
//     } else {
//         return done(null, false);
//     }
// }));


// //facebook strategy
// function findUser(id) {
//     for (let i = 0; i < credential.data.user.length; i++) {
//         if (id === credential.data.user[i].id) {
//             return credential.data.user[i];
//         }
//     }
//     return null;
// }


// passport.use('facebookStrategy', new FacebookStrategy({
//         clientID: facebook.clientID,
//         clientSecret: facebook.clientSecret,
//         callbackURL: facebook.callbackURL,
//     },
//     function (token, refreshToken, profile, done) {
// 		const user = findUser(profile.id);
// 		console.log('profile', profile);
// 		if(user) {
// 		    console.log('user',user);
//             return done(null, user);
//         }else {
// 		    const newUser = {
// 		        id: profile.id,
//                 email: 'nodeJS@task.by',
//                 username: profile.displayName,
//                 password: '12345',
//                 token: token
//             };
// 		    credential.data.user.push(newUser);
// 		    console.log(credential.data.user);
// 		    return done(null, newUser);
//         }
//     }
// ));

// /*passport.serializeUser(function(user, done) {
//     console.log('user', user);
//     done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//     done(null, obj);
// });
// passport.use('googleStrategy', new GoogleStrategy({
//         clientID: google.clientID,
//         clientSecret: google.clientSecret,
//         callbackURL: google.callbackURL,
//         passReqToCallback: true
//     },
//     function (request, token, refreshToken, profile, done) {
// 		const user = findUser(profile.id);
// 		if(user) {
// 		    console.log('user',user);
//             return done(null, user);
//         }else {
// 		    const newUser = {
// 		        id: profile.id,
//                 email: 'nodeJS@task.by',
//                 username: profile.displayName,
//                 password: '12345',
//                 token: token
//             };
// 		    credential.data.user.push(newUser);
// 		    console.log(credential.data.user);
// 		    return done(null, newUser);
//         }
//     }
// ));*/