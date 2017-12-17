const { api } = require('./apiRequest');

exports.login = async (username, password) => {
	const result = await api('login', { username, password })
	console.log(result);
}