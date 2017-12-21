const loginLogic = require('logic/login');
const { getUser } = require('logic/getUser');
const { testing } = require('../ui/globals');
const { home, landingPage } = require('site/pages');

describe('Authentication flow', () => {
	it('Login, Logout', async ()=> {
		await loginLogic.login({username:'user10', password:'somePassword'});
		const routes = testing.getTestRoutes();
		let mostRecentRoute = routes[routes.length - 1];
		equal(mostRecentRoute, home.getRouteAsString());
		await loginLogic.logout(); 
		mostRecentRoute = routes[routes.length - 1];
		equal(mostRecentRoute, landingPage.getRouteAsString());
	});
	it('Signup flow', async ()=> {
		const userName = 'user' + Math.random();
		await loginLogic.signup({username: userName, password:'somePassword'});
		const userInfo = await getUser();
		const routes = testing.getTestRoutes();
		let mostRecentRoute = routes[routes.length - 1];
		equal(mostRecentRoute, home.getRouteAsString());
		equal(userInfo.username, userName);
	});
});