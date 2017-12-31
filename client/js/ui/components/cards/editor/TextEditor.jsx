const React = require('react');
let showingPopup = false;
const MakeImageOrText = require('./MakeImageOrText.jsx');
const { initEditor, getEditorData } = require('abstract/editor');
class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isText:true
    };
    this.changeEditorType = this.changeEditorType.bind(this);
  }
  componentDidMount(){
    initEditor(this.props.id);
  }
  changeEditorType() {
    this.setState((prev)=>{
      return {isText: !prev.isText}
    });
  }
  render() {
    return (
    	<div className="text-editor">
        <MakeImageOrText isText={this.state.isText} onClick={this.changeEditorType}/>
        <div id={this.props.id} />
      </div>

    );
  }
}

module.exports = TextEditor;