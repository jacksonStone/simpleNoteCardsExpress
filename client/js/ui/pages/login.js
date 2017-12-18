const { click } = require('../globals');
const { grabFormData } = require('abstract/grabForm');
const { login } = require('logic/login');

click('login', async (event) => {
	event.preventDefault();
	const formData = grabFormData('#login');
	const payload = await login(formData);
	console.log(payload);
});