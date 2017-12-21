const { Card } = require('../../database');

async function addCard(username, content) {
	return Card.createCard(username, content);
}

module.exports = {
	addCard
};