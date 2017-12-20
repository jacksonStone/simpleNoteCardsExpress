const { login, logout, signup } = require('api/login');
const code = require('api/responseCodes');
const pages = require('site/pages');

exports.login = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await login(username, password);
	if (code.ok(result)) {
		pages.home();
	}
	console.log('From Login: ');
	console.error(result);

	//TODO::Handle bad input
};

exports.signup = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await signup(username, password);
	if (code.ok(result)) {
		pages.home();
	}
	console.log('From Signup: ');
	console.error(result);

	//TODO::Handle bad input
}

exports.logout = async () => {
	await logout();
	pages.landingPage();
}