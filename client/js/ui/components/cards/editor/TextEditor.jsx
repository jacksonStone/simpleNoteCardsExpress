const React = require('react');
let showingPopup = false;
const MakeImageOrText = require('./MakeImageOrText.jsx');
const { initEditor, unrenderEditor } = require('abstract/editor');
class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isText:true
    };
    this.changeEditorType = this.changeEditorType.bind(this);
  }
  componentDidMount(){
    if(this.state.isText) {
      initEditor(this.props.id);
    }
  }
  changeEditorType() {
    this.setState((prev)=>{
      if(prev.isText) {
        unrenderEditor(this.props.id);
      } else {
        initEditor(this.props.id);
      }
      return {isText: !prev.isText}
    });
  }
  render() {
    const isText = this.state.isText;
    return (
    	<div className="text-editor">
        <MakeImageOrText isText={isText} onClick={this.changeEditorType}/>
        <div id={this.props.id} />
      </div>

    );
  }
}

module.exports = TextEditor;