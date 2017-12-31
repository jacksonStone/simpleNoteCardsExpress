const React = require('react');
class ImageEditor extends React.Component {
  render() {
    return (
    	<div className="image-editor">
        <div id={this.props.id} />
      </div>

    );
  }
}

module.exports = ImageEditor;