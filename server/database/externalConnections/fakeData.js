const _ = require('lodash');

//password: somePassword
let fakeData = {
		user:[{
			username:'user10', 
			password:'X0VIy9vshnkFZVZO8tLB4Uod5JDREmf1eIh9qIP6KR0=', 
			salt:'8b73210c-8004-45b0-88eb-768ced89fc57'
		}]
};

function getRecord(table, conditions){
	const tableData = fakeData[table];
	if (!tableData) return;
	if (!conditions) return Promise.resolve(tableData);
	return Promise.resolve(_.filter(tableData, dbEntry=> {
		let match = true;
		_.each(conditions, (conditionValue, conditionKey) => {
			if(dbEntry[conditionKey] !== conditionValue) { 
				match = false; 
				return false;
			}
		});
		return match;
	}));
}

function setRecord(table, values){
	const tableData = fakeData[table];
	if (!tableData) return;
	tableData.push(values);
	return Promise.resolve(values);
}

//For testing
function setFakeData(newFakeData) {
	fakeData = newFakeData;
}


module.exports = { getRecord, setRecord, setFakeData };