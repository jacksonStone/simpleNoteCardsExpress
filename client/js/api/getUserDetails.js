const { apiCached } = require('./apiRequest');

exports.getUserDetails = () => {
	return apiCached('user/me');
}