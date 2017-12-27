const React = require('react');
const { logout } = require('logic/login');

function component() {
	return (
		<button className="logout-button" onClick={logout}>logout</button>
	);
}

module.exports = component;