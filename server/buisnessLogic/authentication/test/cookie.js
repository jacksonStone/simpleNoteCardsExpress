'use strict'

const cookieUtils = require('../cookie')
const authUtils = require('../utils')
const assert = require('assert');
const userName = 'Yours truely';
const authCookieName = 'auth';


describe('Cookie verification works', () => {
	it('Happy path', ()=> {
		const someText = JSON.stringify({username:userName, created: Date.now()});
		const encryptedValue = authUtils.encrypt(someText);
		const someCookies = ('some=thing; auth=' + encryptedValue);
		const validatedCookie = cookieUtils.validateUserCookie(someCookies)
		assert.equal(validatedCookie,userName);
	})
	it('Expired', ()=> {
		const someText = JSON.stringify({username:userName, created: Date.now() - 1000*60*60*24*60});
		const encryptedValue = authUtils.encrypt(someText);
		const someCookies = ('some=thing; auth=' + encryptedValue);
		const validatedCookie = cookieUtils.validateUserCookie(someCookies)
		assert.equal(validatedCookie,false);
	})
	it('Verify cookie created', ()=> {
		const cookie = cookieUtils.createUserCookie(userName);
		const wholeCookieValue = cookie['Set-Cookie'];
		const cookieParts = wholeCookieValue.split(';');
		const cookieValue = cookieParts[0];
		assert.equal(cookieValue.indexOf(authCookieName), 0);
		const encryptedValue = cookieValue.substring(authCookieName.length + 1);
		const decryptedValue = authUtils.decrypt(encryptedValue);
		const value = JSON.parse(decryptedValue);
		assert.equal(value.username,userName);
		assert.ok(value.created);
	})
})