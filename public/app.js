/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_guestNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/guestNav */ "./src/modules/guestNav.js");
/* harmony import */ var _modules_loggedInUserNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loggedInUserNav */ "./src/modules/loggedInUserNav.js");
/* harmony import */ var _modules_AdministratorNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AdministratorNav */ "./src/modules/AdministratorNav.js");



(0,_modules_guestNav__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/modules/AdministratorNav.js":
/*!*****************************************!*\
  !*** ./src/modules/AdministratorNav.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryNameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNameData */ "./src/modules/CategoryNameData.js");

var spotForNav = document.querySelector('header');
function createGuestNav() {
  var nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-md bg-body-tertiary w-100');
  var containerFluid = document.createElement('div');
  containerFluid.setAttribute('class', 'container-fluid d-flex justify-content-between');
  var navLogoLink = document.createElement('a');
  navLogoLink.setAttribute('class', 'navbar-brand');
  navLogoLink.setAttribute('href', '#');
  var navLogo = document.createElement('img');
  navLogo.setAttribute('src', '#');
  navLogo.setAttribute('alt', 'navImg');
  navLogoLink.appendChild(navLogo);
  containerFluid.appendChild(navLogoLink);
  nav.appendChild(containerFluid);
  spotForNav.appendChild(nav);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGuestNav);

/***/ }),

/***/ "./src/modules/CategoryNameData.js":
/*!*****************************************!*\
  !*** ./src/modules/CategoryNameData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var list = [{
  categoryName: 'furniture'
}, {
  categoryName: 'cars'
}, {
  categoryName: 'Pets'
}, {
  categoryName: 'Books'
}, {
  categoryName: 'Electronics'
}, {
  categoryName: 'Sports'
}, {
  categoryName: 'Food'
}, {
  categoryName: 'Beauty'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);

/***/ }),

/***/ "./src/modules/guestNav.js":
/*!*********************************!*\
  !*** ./src/modules/guestNav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryNameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNameData */ "./src/modules/CategoryNameData.js");

var spotForNav = document.querySelector('header');
function createGuestNav() {
  var nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-md bg-body-tertiary w-100');
  var containerFluid = document.createElement('div');
  containerFluid.setAttribute('class', 'container-fluid d-flex justify-content-between');
  var navLogoLink = document.createElement('a');
  navLogoLink.setAttribute('class', 'navbar-brand');
  navLogoLink.setAttribute('href', '#');
  var navLogo = document.createElement('img');
  navLogo.setAttribute('src', '#');
  navLogo.setAttribute('alt', 'navImg');
  var navbarToggler = document.createElement('button');
  navbarToggler.setAttribute('class', 'navbar-toggler');
  navbarToggler.setAttribute('type', 'button');
  navbarToggler.setAttribute('data-bs-toggle', 'collapse');
  navbarToggler.setAttribute('data-bs-target', '#navbarSupportedContent');
  navbarToggler.setAttribute('aria-controls', 'navbarSupportedContent');
  navbarToggler.setAttribute('aria-expanded', 'false');
  navbarToggler.setAttribute('aria-label', 'Toggle navigation');
  var navbarTogglerIcon = document.createElement('span');
  navbarTogglerIcon.setAttribute('class', 'navbar-toggler-icon');
  var navbarCollapse = document.createElement('div');
  navbarCollapse.setAttribute('class', 'collapse navbar-collapse');
  navbarCollapse.setAttribute('id', 'navbarSupportedContent');
  var navUl = document.createElement('ul');
  navUl.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100');

  // SEARCH
  var navSearchLi = document.createElement('li');
  navSearchLi.setAttribute('class', 'nav-item w-75');
  var navForm = document.createElement('form');
  navForm.setAttribute('class', 'd-flex');
  var navInput = document.createElement('input');
  navInput.setAttribute('class', 'form-control me-2');
  navInput.setAttribute('type', 'search');
  navInput.setAttribute('placeholder', 'Search');
  navInput.setAttribute('aria-label', 'Search');
  var navButton = document.createElement('button');
  navButton.setAttribute('class', 'btn btn-outline-white');
  navButton.setAttribute('type', 'submit');
  navButton.textContent = 'Search';
  navForm.appendChild(navInput);
  navForm.appendChild(navButton);
  navSearchLi.appendChild(navForm);

  // CATEGOIRY DROPDOWN
  var navDropdownLi = document.createElement('li');
  navDropdownLi.setAttribute('class', 'nav-item dropdown');
  var navDropdown = document.createElement('a');
  navDropdown.setAttribute('class', 'nav-link dropdown-toggle');
  navDropdown.setAttribute('href', '#');
  navDropdown.setAttribute('id', 'navbarDropdown');
  navDropdown.setAttribute('role', 'button');
  navDropdown.setAttribute('data-bs-toggle', 'dropdown');
  navDropdown.setAttribute('aria-haspopup', 'true');
  navDropdown.setAttribute('aria-expanded', 'false');
  navDropdown.textContent = 'Categories';
  var navDropdownMenu = document.createElement('ul');
  navDropdownMenu.setAttribute('class', 'dropdown-menu');
  navDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');
  for (var i = 0; i < _CategoryNameData__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    var navDropdownItemi = document.createElement('li');
    var navDropdownLinki = document.createElement('a');
    navDropdownLinki.setAttribute('class', 'dropdown-item');
    navDropdownLinki.setAttribute('href', '#');
    navDropdownLinki.textContent = "".concat(_CategoryNameData__WEBPACK_IMPORTED_MODULE_0__["default"][i].categoryName);
    navDropdownItemi.appendChild(navDropdownLinki);
    navDropdownMenu.appendChild(navDropdownItemi);
  }
  navDropdownLi.appendChild(navDropdown);
  navDropdownLi.appendChild(navDropdownMenu);

  // LOGIN
  var navLoginLi = document.createElement('li');
  navLoginLi.setAttribute('class', 'nav-item');
  var navLoginLink = document.createElement('a');
  navLoginLink.setAttribute('class', 'nav-link');
  navLoginLink.setAttribute('href', '#');
  navLoginLink.textContent = 'Login';
  navLoginLi.appendChild(navLoginLink);

  // REGISTRATION
  var navRegisterLi = document.createElement('li');
  navRegisterLi.setAttribute('class', 'nav-item');
  var navRegisterLink = document.createElement('a');
  navRegisterLink.setAttribute('class', 'nav-link');
  navRegisterLink.setAttribute('href', '#');
  navRegisterLink.textContent = 'Register';
  navRegisterLi.appendChild(navRegisterLink);
  navUl.appendChild(navDropdownLi);
  navUl.appendChild(navSearchLi);
  navUl.appendChild(navLoginLi);
  navUl.appendChild(navRegisterLi);
  navbarCollapse.appendChild(navUl);
  navbarToggler.appendChild(navbarTogglerIcon);
  navLogoLink.appendChild(navLogo);
  containerFluid.appendChild(navLogoLink);
  containerFluid.appendChild(navbarToggler);
  containerFluid.appendChild(navbarCollapse);
  nav.appendChild(containerFluid);
  spotForNav.appendChild(nav);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGuestNav);

/***/ }),

/***/ "./src/modules/loggedInUserNav.js":
/*!****************************************!*\
  !*** ./src/modules/loggedInUserNav.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryNameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryNameData */ "./src/modules/CategoryNameData.js");

var spotForNav = document.querySelector('header');
function createLoggedInUserNav() {
  var nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-md bg-body-tertiary w-100');
  var containerFluid = document.createElement('div');
  containerFluid.setAttribute('class', 'container-fluid d-flex justify-content-between');
  var navLogoLink = document.createElement('a');
  navLogoLink.setAttribute('class', 'navbar-brand');
  navLogoLink.setAttribute('href', '#');
  var navLogo = document.createElement('img');
  navLogo.setAttribute('src', '#');
  navLogo.setAttribute('alt', 'navImg');
  var navbarToggler = document.createElement('button');
  navbarToggler.setAttribute('class', 'navbar-toggler');
  navbarToggler.setAttribute('type', 'button');
  navbarToggler.setAttribute('data-bs-toggle', 'collapse');
  navbarToggler.setAttribute('data-bs-target', '#navbarSupportedContent');
  navbarToggler.setAttribute('aria-controls', 'navbarSupportedContent');
  navbarToggler.setAttribute('aria-expanded', 'false');
  navbarToggler.setAttribute('aria-label', 'Toggle navigation');
  var navbarTogglerIcon = document.createElement('span');
  navbarTogglerIcon.setAttribute('class', 'navbar-toggler-icon');
  var navbarCollapse = document.createElement('div');
  navbarCollapse.setAttribute('class', 'collapse navbar-collapse');
  navbarCollapse.setAttribute('id', 'navbarSupportedContent');
  var navUl = document.createElement('ul');
  navUl.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100');

  // SEARCH
  var navSearchLi = document.createElement('li');
  navSearchLi.setAttribute('class', 'nav-item w-75');
  var navForm = document.createElement('form');
  navForm.setAttribute('class', 'd-flex');
  var navInput = document.createElement('input');
  navInput.setAttribute('class', 'form-control me-2');
  navInput.setAttribute('type', 'search');
  navInput.setAttribute('placeholder', 'Search');
  navInput.setAttribute('aria-label', 'Search');
  var navButton = document.createElement('button');
  navButton.setAttribute('class', 'btn btn-outline-white');
  navButton.setAttribute('type', 'submit');
  navButton.textContent = 'Search';
  navForm.appendChild(navInput);
  navForm.appendChild(navButton);
  navSearchLi.appendChild(navForm);

  // CATEGOIRY DROPDOWN
  var navDropdownLi = document.createElement('li');
  navDropdownLi.setAttribute('class', 'nav-item dropdown');
  var navDropdown = document.createElement('a');
  navDropdown.setAttribute('class', 'nav-link dropdown-toggle');
  navDropdown.setAttribute('href', '#');
  navDropdown.setAttribute('id', 'navbarDropdown');
  navDropdown.setAttribute('role', 'button');
  navDropdown.setAttribute('data-bs-toggle', 'dropdown');
  navDropdown.setAttribute('aria-haspopup', 'true');
  navDropdown.setAttribute('aria-expanded', 'false');
  navDropdown.textContent = 'Categories';
  var navDropdownMenu = document.createElement('ul');
  navDropdownMenu.setAttribute('class', 'dropdown-menu');
  navDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');
  for (var i = 0; i < _CategoryNameData__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    var navDropdownItemi = document.createElement('li');
    var navDropdownLinki = document.createElement('a');
    navDropdownLinki.setAttribute('class', 'dropdown-item');
    navDropdownLinki.setAttribute('href', '#');
    navDropdownLinki.textContent = "".concat(_CategoryNameData__WEBPACK_IMPORTED_MODULE_0__["default"][i].categoryName);
    navDropdownItemi.appendChild(navDropdownLinki);
    navDropdownMenu.appendChild(navDropdownItemi);
  }
  navDropdownLi.appendChild(navDropdown);
  navDropdownLi.appendChild(navDropdownMenu);

  // LOGIN
  var navLoginLi = document.createElement('li');
  navLoginLi.setAttribute('class', 'nav-item');
  var navLoginLink = document.createElement('a');
  navLoginLink.setAttribute('class', 'nav-link');
  navLoginLink.setAttribute('href', '#');
  navLoginLink.textContent = 'Login';
  navLoginLi.appendChild(navLoginLink);

  // REGISTRATION
  var navRegisterLi = document.createElement('li');
  navRegisterLi.setAttribute('class', 'nav-item');
  var navRegisterLink = document.createElement('a');
  navRegisterLink.setAttribute('class', 'nav-link');
  navRegisterLink.setAttribute('href', '#');
  navRegisterLink.textContent = 'Register';
  navRegisterLi.appendChild(navRegisterLink);
  navUl.appendChild(navDropdownLi);
  navUl.appendChild(navSearchLi);
  navUl.appendChild(navLoginLi);
  navUl.appendChild(navRegisterLi);
  navbarCollapse.appendChild(navUl);
  navbarToggler.appendChild(navbarTogglerIcon);
  navLogoLink.appendChild(navLogo);
  containerFluid.appendChild(navLogoLink);
  containerFluid.appendChild(navbarToggler);
  containerFluid.appendChild(navbarCollapse);
  nav.appendChild(containerFluid);
  spotForNav.appendChild(nav);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLoggedInUserNav);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbase"] = self["webpackChunkbase"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;