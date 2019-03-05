// const URL = require('url');
// const queryParser = (req, res, next) => {
// 	if(req.parsedQuery) {
// 		return next();
// 	}
// 	const { url } = req;
// 	const query = URL.parse(url, true).query;
// 	req.parsedQuery = query;
// 	//console.log(req.parsedQuery);
// 	//res.send(req.parsedQuery);
// 	if(!query) {
// 		return next()
// 	}
// 	next();
// };
// module.exports = queryParser;