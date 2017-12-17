const db = require('../externalConnections/fakeData');
const tableName = 'user';
async function getUser(username) {
	const results = await db.getRecord(tableName, {username:username});
	if(results && results.length) return results[0];
}
async function createUser(username, salt, password) {
	const results = await db.getRecord(tableName, {username});
	if (results.length) return;
	return db.setRecord(tableName, {username, salt, password});
}

module.exports = {
	getUser,
	createUser
}