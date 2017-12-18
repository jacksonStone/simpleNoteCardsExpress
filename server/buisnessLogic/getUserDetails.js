const { User } = require('../database');
const { getUserFromCookies } = require('./authentication/login');

async function getUserDetails(cookies){
	const user = await getUserFromCookies(cookies);
	if (!user) return;
	console.log(user);
	return User.trimUnsafeParameters(user);
}

exports.getUserDetails = getUserDetails;