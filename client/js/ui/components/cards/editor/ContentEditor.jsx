const React = require('react');
const MakeImageOrText = require('./MakeImageOrText.jsx');
const TextEditor = require('./TextEditor.jsx');
class ContentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isText:true
    };
    this.changeEditorType = this.changeEditorType.bind(this);
  }
  changeEditorType() {
    this.setState((prev)=>{
      return {isText: !prev.isText}
    });
  }
  render() {
    const isText = this.state.isText;
    return (
    	<div className="content-editor">
        <MakeImageOrText isText={isText} onClick={this.changeEditorType}/>
        { isText ? 
          <TextEditor id={this.props.id}/> 
          : 
          null 
        }
      </div>

    );
  }
}

module.exports = ContentEditor;