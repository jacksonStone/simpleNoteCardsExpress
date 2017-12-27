const React = require('react');
let showingPopup = false;
const LoginForm = require('component/navbar/LoginForm.jsx');
class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showPopup: false};
    this.togglePopup = this.togglePopup.bind(this);
  }
  togglePopup() {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup
    }));
  }
  render() {
  	const loginForm = this.state.showPopup ? <LoginForm/> : null;
    return (
    	<div className="login-button-container">
    		<button className="login-button" onClick={this.togglePopup}>Login</button>
    		{loginForm}
    	</div>
    	
    );
  }
}

module.exports = LoginButton;