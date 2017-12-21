const { api } = require('./apiRequest');

exports.getCards = () => {
	return api('cards/me');
}

exports.createCard = (content) => {
	return api('cards/create', content);
}