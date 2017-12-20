const { redirect } = require('abstract/redirect');

function setUpRoute(route) {
	route = '/site/' + route;
	return function() {
		redirect(route);
	}
}

function landingPage(){
	redirect('/');
}

exports.landingPage = landingPage;

//Pages
exports.home = setUpRoute('home');
