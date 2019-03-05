const serverCalls = require('../utils/servercalls');

exports.get_npm_dependencies = async (req, res) => {
	const pakage_name = req.params.pakage_name;
	const version_or_tag = req.params.version_or_tag;

	const dependencies = await serverCalls.getNPMDependencies(pakage_name, version_or_tag);

	dependencies.data
		? res.send(serverCalls.buildResponseData(pakage_name, version_or_tag, dependencies.data))
		: res.status(404).send(`couldn't find pakage ${pakage_name}@${version_or_tag}`);
};
