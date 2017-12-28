const { getDecks, createDeck } = require('api/decks');

exports.getDecks = async () => {
	return JSON.parse(await getDecks());
};

exports.createDeck = (name) => {
	return createDeck(name);
};