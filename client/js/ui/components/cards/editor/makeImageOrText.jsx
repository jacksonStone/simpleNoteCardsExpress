const React = require('react');
let showingPopup = false;
class MakeImageOrText extends React.Component {
  render() {
    const isText = this.props.isText;
    const onClick = this.props.onClick;
    return (
    	<button className="make-image-or-text" onClick={onClick}>
        {isText ? 'Make image' : 'Make text'}
      </button>
    );
  }
}

module.exports = MakeImageOrText;