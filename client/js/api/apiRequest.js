const { request } = require('abstract/request');

const cache = {};

function api(url, body) {
	return request('/api/' + url, body);
};

async function apiCached(url) {
	if(cache[url]) return cache[url];
	const result = await api(url);
	cache[url] = result;
	return result;
}


exports.api = api;
exports.apiCached = apiCached;