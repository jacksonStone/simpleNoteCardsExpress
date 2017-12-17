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

function getUser(authCookie) {
	if (!authCookie) return;
	return cookieUtils.validateUserCookie(authCookie)
}


module.exports = {
	verify,
	getLoginCookie,
	getUser
}