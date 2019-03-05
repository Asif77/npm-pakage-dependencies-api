const routes = require('express').Router();
const cache = require('../utils/cache');

const npmdependenciesController = require('../controllers/npm-dependencies');
routes.get(
	'/npm-dependencies/:pakage_name/:version_or_tag',
	cache.cacheMiddleware(1), //one hour cache duration
	npmdependenciesController.get_npm_dependencies
);

module.exports = routes;
