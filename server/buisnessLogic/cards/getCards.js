const { Card } = require('../../database');

async function getCards(username) {
	return Card.getCards(username);
}

module.exports = {
	getCards
};