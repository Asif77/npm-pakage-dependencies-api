const cache = require('memory-cache');

//configure cache middleware
//data is chached for one hour
//for demo purpose in-memory cache is ok..redis cache could be used here
exports.cacheMiddleware = (duration) => {
	return (req, res, next) => {
		let key = '__npm_dependencies__' + req.originalUrl || req.url;
		let cacheContent = cache.get(key);
		if (cacheContent) {
			res.send(JSON.parse(cacheContent));
			return;
		} else {
			res.sendResponse = res.send;
			res.send = (body) => {
				if (res.statusCode == 200) cache.put(key, body, duration * 1000 * 60 * 60);
				res.sendResponse(body);
			};
			next();
		}
	};
};
