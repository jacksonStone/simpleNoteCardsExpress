window.sn = {
	test: false,
	testRoutes : []
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
	},
	lastRoute(){
		const length = window.sn.testRoutes.length;
		if(length) {
			return window.sn.testRoutes[ length - 1 ];
		}
	}
};