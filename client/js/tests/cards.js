const { signup } = require('logic/login');
const { createCard, getCards } = require('logic/cards');

const username = Math.random();

describe('Card Creation', () => {
	before(async ()=> {
		//Log in to a new user
		await signup({username, password:'somePassword'});
	});
	it('Create cards and get', async () => {
		console.log(await createCard({foo: 'bar'}));
		console.log(await createCard({foo: 'bar2'}));
		const cards = await getCards();
		equal(cards.length, 2);
	});
});