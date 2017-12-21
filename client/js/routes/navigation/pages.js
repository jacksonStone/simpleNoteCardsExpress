const { redirect } = require('abstract/redirect');
function setUpRoute(route) {
	route = '/site/' + route;
	const routeFunction = function() {
		redirect(route);
	}
	//is for testing
	routeFunction.getRouteAsString = function(){
		return route;
	}
	return routeFunction;
}

function landingPage(){
	redirect('/');
}
landingPage.getRouteAsString = function(){
	return '/';
}


//Pages
exports.landingPage = landingPage;
exports.home = setUpRoute('home');
