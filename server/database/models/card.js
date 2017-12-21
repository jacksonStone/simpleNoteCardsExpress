const db = require('../externalConnections/fakeData');
const tableName = 'card';

async function getCards(username) {
	const results = await db.getRecord(tableName, {username:username});
	return results || [];
}

async function createCard(username, content) {
	if(!username || !content) return;
	return db.setRecord(tableName, {username, content});
}

module.exports = {
	getCards,
	createCard
}