const db = require('../externalConnections/fakeData');
const tableName = 'user';
async function getUser(username) {
	const results = await db.getRecord(tableName, {username:username});
	if(results && results.length) return results[0];
}

module.exports = {
	getUser
}