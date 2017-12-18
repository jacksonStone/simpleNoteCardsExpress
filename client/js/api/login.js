const { api } = require('./apiRequest');

exports.login = async (username, password) => {
	const result = await api('login', { username, password })
	if (result) {
		window.location.href = '/site/home';
	}
}