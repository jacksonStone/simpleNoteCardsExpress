const authUtils = require('./utils')
const experation = 1000*60*60*24*30;
const authCookieName = 'auth';

function decryptCookie(cookies, cookieName) {
	var cookie = grabCookieContent(cookies, cookieName);
	return authUtils.decrypt(cookie);
}

//Expects cookie to be JSON and already de
function checkCookieExperation(deCookieContent){
	if (!deCookieContent) return false;
	const body = JSON.parse(deCookieContent);

	if (!body.created) return false;
	//See if expired
	const born = body.created;
	const present = Date.now();
	if((present - born) < experation) {
		return body;
	} 
	return false;
}

function grabCookieContent(cookies, cookieName) {
	const splitCookies = cookies.split('; ');
	for(let i in splitCookies) {
		const cookie = splitCookies[i];
		const keyValuePair = getBeforeAndAfter(cookie, '=');
		const key = keyValuePair[0];
		const value = keyValuePair[1];
		if(key===cookieName) return value;
	}
}

function getBeforeAndAfter(str, target) {
	if(str.indexOf(target) === -1) return [str, ''];
	const post = str.substring(str.indexOf(target)+1);
	const pre = str.substring(0, str.indexOf(target));
	return [pre, post];
}

function validateUserCookie(cookies) {
	const decryptedCookie = decryptCookie(cookies, authCookieName);
	const youngCookie = checkCookieExperation(decryptedCookie);
	if(youngCookie) {
		return youngCookie.username;
	}
	return false;
}

function createUserCookie(username) {
	const now = Date.now();
	const nowAsUTC = new Date(now).toUTCString();
	var userCookie = {
		username: username,
		created: now
	};
	var encryptedCookied = authUtils.encrypt(JSON.stringify(userCookie));
	return {'Set-Cookie':authCookieName+'='+encryptedCookied+'; HttpOnly; Expires='+nowAsUTC};
}

module.exports = { validateUserCookie, createUserCookie }