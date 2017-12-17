const authUtils = require('./utils');
const { User } = require('../../database');

function signup(username, plainTextPassword) {
	const salt = authUtils.getSalt();
	const password = authUtils.hashValues(plainTextPassword, salt);
	return User.createUser(username, salt, password);
}

module.exports = {
	signup
}