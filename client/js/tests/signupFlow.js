const loginLogic = require('logic/login');
const { getUser } = require('logic/getUser');
const { testing } = require('../ui/globals');
const { home, landingPage } = require('site/pages');

describe('Authentication flow', () => {
	it('Login, Logout', async ()=> {
		await loginLogic.login({username:'user10', password:'somePassword'});
		equal(testing.lastRoute(), home.getRouteAsString());
		await loginLogic.logout(); 
		equal(testing.lastRoute(), landingPage.getRouteAsString());
	});
	it('Signup flow', async ()=> {
		const userName = 'user' + Math.random();
		await loginLogic.signup({username: userName, password:'somePassword'});
		const userInfo = await getUser();
		equal(testing.lastRoute(), home.getRouteAsString());
		equal(userInfo.username, userName);
	});
});