const authUtils = require('./utils');
const cookieUtils = require('./cookie');
const { User } = require('../../database');

async function verify(username, plainTextPassword) {
	const user = await User.getUser(username);
	if (!user) return false;
	const hashResult = authUtils.hashValues(plainTextPassword, user.salt);
	return hashResult === user.password;
}

function getLoginCookie(username) {
	return cookieUtils.createUserCookie(username);
}

function getUsername(cookies) {
	if (!cookies) return;
	return cookieUtils.validateUserCookie(cookies)
}

function getUserFromCookies(cookies) {
	const username = getUsername(cookies);
	return User.getUser(username)
}

function getLogoutCookie() {
	return cookieUtils.createUserLoggedOutCookie();
}

module.exports = {
	verify,
	getLogoutCookie,
	getLoginCookie,
	getUsername,
	getUserFromCookies
}