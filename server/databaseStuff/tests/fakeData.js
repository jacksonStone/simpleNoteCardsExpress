const assert = require('assert');
const fakeData = require('../fakeData');
const _ = require('lodash');
const testData = {
	fakeTable:[
		{username:'user10'},
		{username:'user11', example: 'foo'},
		{username:'user11.5', example: 'foo'}
	],
	fakeTable2:[
		{username2:'user12'},
		{username2:'user13', example2: 'foo'}
	],
};

describe('Verify set record',() => {
	it('setRecord', async ()=> {
		const privateTestData = _.cloneDeep(testData);
		fakeData.setFakeData(privateTestData);
		const table = 'fakeTable2';
		const lengthBeforeInsert = privateTestData[table].length;
		
		await fakeData.setRecord(table, {username2:'user42'});

		const results = await Promise.all([
				fakeData.getRecord(table, {username2:'user42'}),
				fakeData.getRecord(table)
			]);
		const records = results[0];
		const allRecords = results[1];
		assert.equal(allRecords.length, lengthBeforeInsert + 1, 'Added a row');
		assert.equal(records.length, 1, 'was able to then fetch the row');
	})
});
describe('Verify get record', () => {
	before(() => {
    fakeData.setFakeData(_.cloneDeep(testData));
  });
	it('getRecord no condition', async ()=> {
		const table = 'fakeTable';
		const records = await fakeData.getRecord(table);

		assert.equal(records.length, testData[table].length);
		assert.equal(records[0].username, 'user10');
	})
	it('getRecord, condition', async ()=> {
		const records = await fakeData.getRecord('fakeTable', {username:'user11', example: 'foo'});
		assert.equal(records.length,1);
		assert.equal(records[0].username, 'user11')

		const records0 = await fakeData.getRecord('fakeTable', {example:'foo'});
		assert.equal(records0.length,2);
		assert.equal(records0[0].username, 'user11')
		assert.equal(records0[1].username, 'user11.5')
	})
});