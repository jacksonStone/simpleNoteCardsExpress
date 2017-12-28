const _ = require('lodash');

//password: somePassword
let fakeData = {
		user:[{
			username:'user10', 
			email:'jackson@someemail.com',
			password:'X0VIy9vshnkFZVZO8tLB4Uod5JDREmf1eIh9qIP6KR0=', 
			salt:'8b73210c-8004-45b0-88eb-768ced89fc57'
		}],
		card:[
			{username: 'user10', deck:'myDeck', content:{body:'Blah'}},
			{username: 'user10', deck:'myDeck', content:{body:'Blah2'}}
		],
		deck:[{username:'user10',name:'myDeck'}]
};
const fakeDataBackup = _.cloneDeep(fakeData);

async function getRecord(table, conditions){
	const tableData = fakeData[table];
	if (!tableData) return;
	return _.map(
		_.filter(tableData, dbEntry=> {
			let match = true;
			_.each(conditions, (conditionValue, conditionKey) => {
				if(dbEntry[conditionKey] !== conditionValue) { 
					match = false; 
					return false;
				}
			});
			return match;
		}), v => {
			return _.cloneDeep(v)
		}
	);
}

async function setRecord(table, values){
	const tableData = fakeData[table];
	if (!tableData) return;
	tableData.push(values);
	return values;
}

//For testing
function setFakeData(newFakeData) {
	fakeData = newFakeData;
}

function resetData(){
	fakeData = fakeDataBackup;
}


module.exports = { getRecord, setRecord, setFakeData, resetData };