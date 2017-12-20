const { click } = require('../globals');
const { grabFormData } = require('abstract/grabForm');
const { logout } = require('logic/login');

click('logout', (event) => {
	event.preventDefault();
	logout();
});