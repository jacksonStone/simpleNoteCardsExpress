const React = require('react');
const { initEditor, unrenderEditor, getEditorData, doesContentOverflow } = require('abstract/editor');
const maxFontSize = 5;
class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.fontSize = 1;
  }
  componentDidMount(){
    initEditor(this.props.id, this.props.content);
    this.updateDataInterval = setInterval(
      () => this.updateDataIfChanged(),
      50
    );
  }
  getUpdatedFontSize(){
    const id = this.props.id;
    const currentNum = this.props.fontSize || 1;
    
    if(currentNum >= maxFontSize) return currentNum;

    if(doesContentOverflow(id)) {
      return currentNum + 1;
    }
    return currentNum;
  }
  updateDataIfChanged(){
    const id = this.props.id;
    const pastContent = this.pastContent || '';
    const editorData = getEditorData(id);
    const onChange = this.props.onChange;

    if(pastContent === editorData) {
      return;
    }

    this.pastContent = editorData;
    onChange(editorData, this.getUpdatedFontSize());
  }
  componentWillUnmount(){
    unrenderEditor(this.props.id);
    clearInterval(this.updateDataInterval);
  }
  render() {
    return (
    	<div className={"text-editor size-" + this.props.fontSize}>
        <textarea id={this.props.id} />
      </div>
    );
  }
}

module.exports = TextEditor;