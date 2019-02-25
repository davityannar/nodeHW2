const express = require('express');
const app = express();

const {queryParser, cookiesParser} = require('./middlewares');


app.use('/', require('./routes/index.js'));
app.use(queryParser);
app.use(cookiesParser);
app.use((req, res, next) => {
	//res.send(req.parsedQuery);
	res.send(req.parsedCookies);
	next()
});

module.exports = app;

