const login = require('../login');
const assert = require('assert');
const userName = 'user10';
const password = 'somePassword';


describe('Login validates correctly', () => {
	it('correct password', async ()=> {
		const result = await login.verify(userName, password);
		assert.equal(result, true, 'Provided correct creds');
	})
})