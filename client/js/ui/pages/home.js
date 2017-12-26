const { click } = require('../globals');
const { grabFormData } = require('abstract/grabForm');
const { logout } = require('logic/login');
const { $ } = require('abstract/$');
const { initEditor, getEditorData } = require('logic/editor');
const App = require('../components/cardCreator.jsx');
const ReactDom = require('react-dom');

click('logout', (event) => {
	event.preventDefault();
	logout();
});

ReactDom.render(App(), $('#react-test'));
initEditor('question');
initEditor('answer');