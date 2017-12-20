const { getUserDetails } = require('api/getUserDetails');
let userDetails;
exports.getUser = async () => {
	if(userDetails) return userDetails;
	userDetails = await getUserDetails();
	return userDetails;
};