const express = require('express');
const passport = require('passport');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');

const app = express();

require('./config/passport_google');
require('./config/passport_local');
require('./config/passport_facebook');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({store: new FileStore(), secret: 'superSecret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/products', require('./routes/products.js'));
app.use('/api/users', require('./routes/users.js'));
app.use('/auth', require('./routes/auth.js'));
app.use('/local', require('./routes/local.js'));
app.use('/facebook', require('./routes/auth_facebook.js'));
app.use('/google', require('./routes/auth_google.js'));


module.exports = app;