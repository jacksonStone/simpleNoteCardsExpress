const React = require('react');
const MakeImageOrText = require('./MakeImageOrText.jsx');
const TextEditor = require('./TextEditor.jsx');
const ImageEditor = require('./ImageEditor.jsx');
class ContentEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isText = this.props.isText;
    return (
    	<div className="content-editor">
        <MakeImageOrText isText={this.props.isText} onClick={this.props.onChangeType}/>
        { isText ? 
          <TextEditor id={this.props.id} 
          onChange={this.props.onTextChange}
          fontSize={this.props.fontSize}
          content={this.props.textContent}/> 
          : 
          <ImageEditor id={this.props.id} onChange={this.props.onImageChange}/>
        }
      </div>

    );
  }
}

module.exports = ContentEditor;