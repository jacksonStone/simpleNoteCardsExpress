const { fetchUser, getUser } = require('logic/getUser');
const { $ } = require('abstract/$');
const React = require('react');
const Navbar = require('component/navbar/Navbar.jsx');
const ReactDom = require('react-dom');
fetchUser()
	.then((res)=> {
		console.log(res);
		ReactDom.render(<Navbar/>, $('#content'));
	})

// initEditor('question');
// initEditor('answer');