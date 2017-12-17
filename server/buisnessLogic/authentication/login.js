const authUtils = require('./utils');
const { User } = require('../../database');

async function verify(username, plainTextPassword) {
	const user = await User.getUser(username);
	if (!user) return false;
	const hashResult = authUtils.hashValues(plainTextPassword, user.salt);
	return hashResult === user.password;
}


module.exports = {
	verify
}