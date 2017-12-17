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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const { click } = __webpack_require__(1);
const { grabFormData } = __webpack_require__(2);
const { login } = __webpack_require__(4);

click('login', async (event) => {
	event.preventDefault();
	const formData = grabFormData('#login');
	const payload = await login(formData);
	console.log(payload);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.sn = {
	click: {},
};

exports.click = function(name, handler) {
	window.sn.click[name] = handler;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const { $ } = __webpack_require__(3);
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
/* 3 */
/***/ (function(module, exports) {

exports.$ = function(){
	return document.querySelector.apply(document, arguments);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const { login } = __webpack_require__(5);

exports.login = async (payload) => {
	const username = payload.username;
	const password = payload.password;
	if (!username || !password) throw new Error('Invalid arguments');
	const res = await login(username, password);
	console.log(res);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const { api } = __webpack_require__(6);

exports.login = async (username, password) => {
	const result = await api('login', { username, password })
	console.log(result);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const { request } = __webpack_require__(7);

exports.api = (url, body) => {
	return request('/api/' + url, body);
};

/***/ }),
/* 7 */
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

/***/ })
/******/ ]);