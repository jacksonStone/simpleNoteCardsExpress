const { getUserDetails } = require('api/getUserDetails');
let userDetails;
exports.fetchUser = async () => {
	if(userDetails) return userDetails;
	const userDetailsUnformatted = await getUserDetails();
	console.log(userDetailsUnformatted);
	try {
		userDetails = JSON.parse(userDetailsUnformatted);
	} catch(e){
		return userDetailsUnformatted;	
	}
	return userDetails;
};
exports.getUser = () => {
	return userDetails;
};