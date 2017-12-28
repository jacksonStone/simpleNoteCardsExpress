const { signup } = require('logic/login');
const { createCard, getCards } = require('logic/cards');
const { createDeck, getDecks } = require('logic/decks');

const username = 'USERNAME: ' + Math.random();
const deckName = 'DECK: ' + Math.random();

describe('Card Creation', () => {
	before(async ()=> {
		//Log in to a new user
		await signup(username, 'somePassword');
		await createDeck(deckName);
	});
	it('Create cards and get', async () => {
		await createCard(deckName, 'bar');
		await createCard(deckName, 'bar2');
		const cards = await getCards(deckName);
		equal(cards.length, 2);
	});
});