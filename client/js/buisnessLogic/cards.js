const { getCards, createCard } = require('api/cards');

exports.getCards = async () => {
	return JSON.parse(await getCards());
};

exports.createCard = (content) => {
	return createCard(content);
};