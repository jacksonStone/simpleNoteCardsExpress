const { api } = require('./apiRequest');

exports.getCards = (deck) => {
	return api('cards/me?deck=' + deck);
}

exports.createCard = (deckName, content) => {
	return api('cards/create', {deck: deckName, content});
}