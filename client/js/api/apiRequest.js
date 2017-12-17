const { request } = require('abstract/request');

exports.api = (url, body) => {
	return request('/api/' + url, body);
};