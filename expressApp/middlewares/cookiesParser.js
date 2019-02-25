const cookiesParser = (req, res, next) => {
	if (req.parsedCookies) {
		return next()
	}
	const cookies = req.headers.cookie;
	console.log('cookies', decodeURIComponent(cookies));
	req.parsedCookies = decodeURIComponent(cookies);

	//res.send(req.parsedCookies);
	if (!cookies) {
		return next()
	}

	next()
};

module.exports = cookiesParser;