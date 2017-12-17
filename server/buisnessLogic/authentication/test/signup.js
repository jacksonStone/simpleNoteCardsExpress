const { signup } = require('../signup');
const { verify } = require('../login');
const assert = require('assert');
const { resetData } = require('../../../database/externalConnections/fakeData');
const userName = 'user11';
const plainTextPassword = 'somePassword';

describe('User signup', () => {
	beforeEach(resetData)
	after(resetData)
	it('Populates password hash correctly', async ()=> {
		const result = await signup(userName, plainTextPassword)
		assert.notEqual(result.password, plainTextPassword, 'Hashed password');
		assert.ok(result.salt, 'Has salt');
		const correctPasswordHash = await verify(result.username, plainTextPassword)
		assert.equal(correctPasswordHash, true, 'Provided correct creds')
	})
	it('Does not create duplicate user', async ()=> {
		const result = await signup('user10', plainTextPassword)
		assert.equal(result, undefined, 'did not create duplicate user')
	})
})