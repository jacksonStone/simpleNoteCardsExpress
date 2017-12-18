const { getUserDetails } = require('api/getUserDetails');

exports.getUser = () => {
	return getUserDetails();
};