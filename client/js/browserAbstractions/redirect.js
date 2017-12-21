const { testing } = require('../ui/globals');

function redirect(href) {
	debugger;
	if(testing.isTesting()) {
		testing.addTestRoute(href);
		return;
	}
  window.location.href = href;
}

exports.redirect = redirect;