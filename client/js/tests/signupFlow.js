const loginLogic = require('logic/login');
const { fetchUser } = require('logic/getUser');
const { testing } = require('../ui/globals');
const { home, landingPage } = require('site/pages');

describe('Authentication flow', () => {
	it('Login, Logout', async ()=> {
		await loginLogic.login('user10', 'somePassword');
		equal(testing.lastRoute(), home.getRouteAsString());
		await loginLogic.logout(); 
		equal(testing.lastRoute(), landingPage.getRouteAsString());
	});
	it('Signup flow', async ()=> {
		const userName = 'user' + Math.random();
		await loginLogic.signup(userName, 'somePassword');
		const userInfo = await fetchUser();
		equal(testing.lastRoute(), home.getRouteAsString());
		equal(userInfo.username, userName);
	});
});