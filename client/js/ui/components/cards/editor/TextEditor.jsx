const React = require('react');
const { initEditor, unrenderEditor } = require('abstract/editor');
class TextEditor extends React.Component {
  componentDidMount(){
    initEditor(this.props.id);
  }
  componentWillUnmount(){
    unrenderEditor(this.props.id);
  }
  render() {
    return (
    	<div className="text-editor">
        <div id={this.props.id} />
      </div>

    );
  }
}

module.exports = TextEditor;