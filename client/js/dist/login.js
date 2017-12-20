/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.sn = {
	click: {},
};

exports.click = (name, handler) => {
	window.sn.click[name] = handler;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const { $ } = __webpack_require__(2);
exports.grabFormData = function(selector) {
	const formNode = $(selector);
	if (!formNode) {
		throw new Error('Bad form selector give');
	}
	const formData = new FormData($(selector));
	const entries = formData.entries();
	const data = {};
	for(let pair of entries) {
		data[pair[0]] = pair[1];
	}
	return data;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

exports.$ = function(){
	return document.querySelector.apply(document, arguments);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const { login, logout, signup } = __webpack_require__(4);
const code = __webpack_require__(11);
const pages = __webpack_require__(7);

exports.login = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await login(username, password);
	if (code.ok(result)) {
		pages.home();
	}
	console.log('From Login: ');
	console.error(result);

	//TODO::Handle bad input
};

exports.signup = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const result = await signup(username, password);
	if (code.ok(result)) {
		pages.home();
	}
	console.log('From Signup: ');
	console.error(result);

	//TODO::Handle bad input
}

exports.logout = async () => {
	await logout();
	pages.landingPage();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const { api } = __webpack_require__(5);

exports.login = (username, password) => {
	return api('login', { username, password })
}

exports.logout = () => {
	return api('logout');
}

exports.signup = (username, password) => { 
	return api('signup', { username, password })
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const { request } = __webpack_require__(6);

function api(url, body) {
	return request('/api/' + url, body);
};

exports.api = api;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

function request(url, body) {
  const method = body ? 'POST' : 'GET'
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    if(body) {
    	xhr.setRequestHeader('Content-Type', 'application/json')
    }
    xhr.send(body ? JSON.stringify(body) : undefined);
  })
}

exports.request = request;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const { redirect } = __webpack_require__(8);

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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function redirect(href) {
  window.location.href = href;
}

exports.redirect = redirect;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const { click } = __webpack_require__(0);
const { grabFormData } = __webpack_require__(1);
const { login, signup } = __webpack_require__(3);

click('login', (event) => {
	event.preventDefault();
	const formData = grabFormData('#login');
	login(formData);
});

click('signup', (event) => {
	event.preventDefault();
	const formData = grabFormData('#signup');
	signup(formData);
});

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

function ok(response) {
	return response === 'OK';
}

function badInput(response) {
	return response === 'Bad Request';
}

function unathorized(response) {
	return response === 'Unathorized';
}

exports.ok = ok;
exports.badInput = badInput;
exports.unathorized = unathorized;

/***/ })
/******/ ]);