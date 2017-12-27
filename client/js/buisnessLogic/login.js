const { login, logout, signup } = require('api/login');
const { fetchUser } = require('logic/getUser');
const code = require('api/responseCodes');
const pages = require('site/pages');

exports.login = async (username, password) => {
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await login(username, password);
	await fetchUser();
	if (code.ok(result)) {
		return pages.home();
	}
};

exports.signup = async (username, password) => {
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await signup(username, password);
	await fetchUser();
	if (code.ok(result)) {
		return pages.home();
	}
}

exports.logout = async () => {
	await logout();
	pages.landingPage();
}