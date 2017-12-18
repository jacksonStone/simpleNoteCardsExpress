window.sn = {
	click: {},
};

exports.click = (name, handler) => {
	window.sn.click[name] = handler;
};