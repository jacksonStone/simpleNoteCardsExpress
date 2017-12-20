const { click } = require('../globals');
const { grabFormData } = require('abstract/grabForm');
const { login, signup } = require('logic/login');

click('login', (event) => {
	event.preventDefault();
	const formData = grabFormData('#login');
	login(formData);
});

click('signup', (event) => {
	event.preventDefault();
	const formData = grabFormData('#signup');
	signup(formData);
});