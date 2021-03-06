const React = require('react');
const Logout = require('component/navbar/LogoutButton.jsx');
const Login = require('component/navbar/LoginButton.jsx');
const Decks = require('component/navbar/DecksButton.jsx');
const Signup = require('component/navbar/SignupButton.jsx');
const { getUser } = require('logic/getUser');
function Navbar() {
	const user = getUser();
	return (
		<div className="navbar"> 
			{
				user ? 
				(<div>
					<Logout/>
					<Decks/>
				 </div>) : 
				(<div className="login-signup">
					<Login/>
					<Signup/>
				</div>)
			}
		</div>
	);
}

module.exports = Navbar;