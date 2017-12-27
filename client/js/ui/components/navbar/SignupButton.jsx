const React = require('react');
let showingPopup = false;
const SignupForm = require('component/navbar/SignupForm.jsx');
class SignupButton extends React.Component {
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
  	const signupForm = this.state.showPopup ? <SignupForm/> : null;
    return (
    	<div className="signup-button-container">
    		<button className="signup-button" onClick={this.togglePopup}>Signup</button>
    		{signupForm}
    	</div>
    	
    );
  }
}

module.exports = SignupButton;