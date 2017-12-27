const { fetchUser, getUser } = require('logic/getUser');
const { $ } = require('abstract/$');
const React = require('react');
const Navbar = require('component/navbar/Navbar.jsx');
const ReactDom = require('react-dom');
fetchUser()
	.then(()=> {
		ReactDom.render([<Navbar/>,<div>Login</div>], $('#content'));
	})