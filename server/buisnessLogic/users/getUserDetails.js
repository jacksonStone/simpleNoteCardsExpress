const { User } = require('../../database');

async function getUserDetails(username){
	return User.getUser(username);
}

exports.getUserDetails = getUserDetails;