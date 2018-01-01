const { getDecks, createDeck } = require('api/decks');
const { decks } = require('site/pages');

exports.getDecks = async () => {
	return JSON.parse(await getDecks());
};

exports.createDeck = (name) => {
	return createDeck(name);
};

exports.navigatgeToDeckListPage = () => {
	return decks();
}