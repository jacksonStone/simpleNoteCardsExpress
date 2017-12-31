const React = require('react');
const Navbar = require('component/navbar/Navbar.jsx');

module.exports = (content) => {
	return (
		<div>
			<Navbar/>
			<div className="content-body">
				{content}
			</div>
		</div>
	);
};