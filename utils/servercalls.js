const axios = require('axios');

const NPMJS_SERVER = 'https://registry.npmjs.org';

const getNPMDependencies = async (pakage_name, version_or_tag) => {
	try {
		return await axios.get(`${NPMJS_SERVER}/${pakage_name}/${version_or_tag}`);
	} catch (error) {
		return error;
	}
};

const buildResponseData = (pakage_name, version_or_tag, data) => {
	return {
		[pakage_name]: {
			[version_or_tag]: pick(data, [ 'dependencies', 'devDependencies' ])
		}
	};
};

const pick = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object[key]) {
			obj[key] = object[key];
		}
		return obj;
	}, {});
};

module.exports = { getNPMDependencies, buildResponseData };
