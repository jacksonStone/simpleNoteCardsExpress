const React = require('react');
const ContentEditor = require('./ContentEditor.jsx');
const { getDeckNameFromPage } = require('logic/decks');
const { getCards } = require('logic/cards');
const NewCard = require('logic/classes/newCard');

class FullCardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerIsText:true,
      answerTextContent:'',
      answerFontSize:1,
      answerImageContent:'',
      
      questionIsText:true,
      questionTextContent:'',
      questionFontSize:1,
      questionImageContent:'',
    };
    this.updateAnswerText = this.updateAnswerText.bind(this);
    this.updateAnswerImage = this.updateAnswerImage.bind(this);
    this.updateQuestionText = this.updateQuestionText.bind(this);
    this.updateQuestionImage = this.updateQuestionImage.bind(this);
    this.changeQuestionType = this.changeQuestionType.bind(this);
    this.changeAnswerType = this.changeAnswerType.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }
  updateAnswerText(content, fontSize) {
    this.setState({
      answerTextContent: content,
      answerFontSize: fontSize
    });
  }
  updateAnswerImage(content) {
    this.setState({
      answerImageContent: content
    });
  }
  updateQuestionText(content, fontSize) {
    this.setState({
      questionTextContent: content,
      questionFontSize: fontSize
    });
  }
  updateQuestionImage(content) {
    this.setState({
      answerImageContent: content
    });
  }
  changeAnswerType(){
    this.setState((prev)=>{
      return {answerIsText: !prev.answerIsText}
    });
  }
  changeQuestionType(){
    this.setState((prev)=>{
      return {questionIsText: !prev.questionIsText}
    });
  }
  async saveCard(){
    const state = this.state;
    const deckName = getDeckNameFromPage();
    const newCard = new NewCard(state, deckName);
    await newCard.save();
    console.log(await getCards(deckName));
  }
  render() {
    return (
    	<div className="full-text-editor">
        <ContentEditor id="question" 
          key="question" 
          onTextChange={this.updateQuestionText}
          onImageChange={this.updateQuestionImage}
          textContent={this.state.questionTextContent}
          imageContent={this.state.questionImageContent}
          isText={this.state.questionIsText}
          fontSize={this.state.questionFontSize}
          onChangeType={this.changeQuestionType}/>
        <ContentEditor id="answer" 
          key="answer"
          onTextChange={this.updateAnswerText}
          onImageChange={this.updateAnswerImage}
          textContent={this.state.answerTextContent}
          imageContent={this.state.answerImageContent}
          isText={this.state.answerIsText}
          fontSize={this.state.answerFontSize}
          onChangeType={this.changeAnswerType}/>
        <button onClick={this.saveCard}>Save</button>
      </div>
    );
  }
}

module.exports = FullCardEditor;