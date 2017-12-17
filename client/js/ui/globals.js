window.sn = {
	click: {},
};

exports.click = function(name, handler) {
	window.sn.click[name] = handler;
};