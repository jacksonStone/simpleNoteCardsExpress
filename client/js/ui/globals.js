window.sn = {
	click: {},
	test: false,
	testRoutes : []
};

exports.click = (name, handler) => {
	window.sn.click[name] = handler;
};

exports.makeTesting = () => {
	window.sn.test = true;
};

exports.testing = {
	isTesting() {
		return window.sn.test;
	},
	addTestRoute(route){
		return window.sn.testRoutes.push(route);
	},
	getTestRoutes(){
		return window.sn.testRoutes;
	}
};