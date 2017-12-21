const { getUserDetails } = require('api/getUserDetails');
let userDetails;
exports.getUser = async () => {
	if(userDetails) return userDetails;
	userDetails = JSON.parse(await getUserDetails());
	return userDetails;
};