const React = require('react');
const ContentEditor = require('./ContentEditor.jsx');

class FullCardEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="full-text-editor">
        <ContentEditor id="question" key="question"/>
        <ContentEditor id="answer" key="answer"/>
      </div>
    );
  }
}

module.exports = FullCardEditor;