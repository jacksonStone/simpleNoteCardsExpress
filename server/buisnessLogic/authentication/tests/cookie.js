'use strict'

const cookieUtils = require('../cookie')
const authUtils = require('../utils')
const assert = require('assert');

describe('Cookie verification works', () => {
	it('Happy path', ()=> {
		const userName = 'Yours truely'
		const someText = JSON.stringify({username:userName, created: Date.now()});
		const encryptedValue = authUtils.encrypt(someText);
		const someCookies = ('some=thing; auth=' + encryptedValue);
		const validatedCookie = cookieUtils.validateUserCookie(someCookies)
		assert.equal(validatedCookie,userName);
	})
	it('Expired', ()=> {
		const userName = 'Yoursa truely'
		const someText = JSON.stringify({username:userName, created: Date.now() - 1000*60*60*24*60});
		const encryptedValue = authUtils.encrypt(someText);
		const someCookies = ('some=thing; auth=' + encryptedValue);
		const validatedCookie = cookieUtils.validateUserCookie(someCookies)
		assert.equal(validatedCookie,false);
	})
})