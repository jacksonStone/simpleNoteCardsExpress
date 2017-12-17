const { login } = require('api/login');

exports.login = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const res = await login(username, password);
	console.log(res);
};