const React = require('react');
const TextEditor = require('./TextEditor.jsx');

class FullCardEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="full-text-editor">
        <TextEditor id="question" key="question"/>
        <TextEditor id="answer" key="answer"/>
      </div>
    );
  }
}

module.exports = FullCardEditor;