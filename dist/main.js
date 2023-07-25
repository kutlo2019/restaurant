/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n\n    // create the content wrapper\n    const contentWrap = document.createElement('div');\n    contentWrap.classList.add('content-wrapper');\n\n    // create navigation then add logo and links\n    const nav = document.createElement('nav');\n\n    const logo = document.createElement('h1');\n    logo.classList.add('logo');\n    logo.innerText = 'Dine 101';\n\n    const navLinkWrap = document.createElement('div');\n    navLinkWrap.classList.add('nav-links');\n    const linkText = [\"What's On\", \"Menu\", \"Book a table\", \"Contact\"];\n    const navLinks = linkText.map(text => {\n        const link = document.createElement('div');\n        link.classList.add('link-itm');\n        link.innerText = text;\n        navLinkWrap.appendChild(link);\n    });\n\n    nav.appendChild(logo);\n    nav.appendChild(navLinkWrap);\n    contentWrap.appendChild(nav)\n\n    // create banner and add text\n    const bannerDiv = document.createElement('div');\n    bannerDiv.classList.add('banner');\n\n    const h2 = document.createElement('h2');\n    h2.innerText = \"Dine 101\";\n    bannerDiv.appendChild(h2);\n\n    const p = document.createElement('p');\n    p.innerText = \"Enjoy our delicous meals\";\n    bannerDiv.appendChild(p);\n\n    const button = document.createElement('button');\n    button.innerText = 'Book A Table';\n    bannerDiv.appendChild(button);\n\n    const locationDiv = document.createElement('div');\n    locationDiv.classList.add('location');\n    const itm1 = document.createElement('p');\n    itm1.innerText = 'Lephala Road';\n    locationDiv.appendChild(itm1);\n    const itm2 = document.createElement('p');\n    itm2.innerText = 'Plot 7512, Block 6.';\n    locationDiv.appendChild(itm2);\n    bannerDiv.appendChild(locationDiv);\n\n    contentWrap.appendChild(bannerDiv);\n\n    // create about section\n    const aboutDiv = document.createElement('div');\n    aboutDiv.classList.add('about');\n\n    const contentDiv = document.getElementById('content');\n    contentDiv.appendChild(contentWrap);\n\n    console.log('OOps Poops')\n};\n\n//# sourceURL=webpack://restaurant/./src/page-load.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;