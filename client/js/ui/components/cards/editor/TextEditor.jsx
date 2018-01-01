const React = require('react');
const { initEditor, unrenderEditor, getEditorData, getFontSize } = require('abstract/editor');
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
    return getFontSize(id, currentNum);
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