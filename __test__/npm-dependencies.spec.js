const dep = require('../utils/servercalls');
const axios = require('axios');

jest.mock('axios');

it('works with async/await', async () => {
	const resp = {
		async: {
			latest: {
				dependencies: {
					lodash: '^4.17.11'
				}
			}
		}
	};
	axios.get.mockResolvedValue(resp);
	const data = await dep.getNPMDependencies('async', 'latest');
	expect(data).toEqual({
		async: {
			latest: {
				dependencies: {
					lodash: '^4.17.11'
				}
			}
		}
	});
});
