const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('wellcome npm-dependencies');
});

app.use('/api', require('./routes/npm-dependencies.js'));

app.get('*', (req, res) => {
	res.status(404).send('api endpoint not found..');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
	console.log(`endpoint is http://localhost:${port}/api/npm-dependencies/pakage_name/version_or_tag`);
});
