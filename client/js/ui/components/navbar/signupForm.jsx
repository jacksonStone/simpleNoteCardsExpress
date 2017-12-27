const { signup } = require('logic/login');
const React = require('react');
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showPopup: false};
    this.submitData = this.submitData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submitData(event) {
  	signup(this.state.username, this.state.password);
  	event.preventDefault();
  }
 	handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
  	return (
  		<div className="login-form">
  			<form onSubmit={this.submitData}>
					<input name="username" type="text" onChange={this.handleChange}/>
					<input name="password" type="password" onChange={this.handleChange}/>
					<input type="submit" value="Signup" />
				</form>
  		</div>	
		);
  }
}

module.exports = SignupForm;