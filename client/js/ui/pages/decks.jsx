const React = require('react');
const { render } = require('./pageRender.jsx');
const FullCardEditor = require('component/cards/editor/FullCardEditor.jsx');
const { getDecks } = require('logic/decks');

async function getPageContentAndRender(){
	const decks = await getDecks();
	const pageContent = (
		<div>
			{JSON.stringify(decks)}
		</div>
	)
	render(pageContent);
}

getPageContentAndRender();