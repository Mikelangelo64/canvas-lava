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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n\n\n//import vevet from './scripts/config/vevet';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_scripts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n// vevet.pageLoad.onLoaded(() => {\n//   init();\n// });\n\n//# sourceURL=webpack://canvas/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Ball/Ball.js":
/*!**********************************!*\
  !*** ./src/scripts/Ball/Ball.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ball {\n  constructor(effect) {\n    this.effect = effect;\n    this.radius = Math.random() * 50 + 20;\n    this.x = this.radius * 2 + Math.random() * (this.effect.width - this.radius * 4);\n    this.y = -this.radius;\n    this.speedX = Math.random() * 0.2 - 0.1;\n    this.speedY = Math.random() * 1.5 + 0.5;\n    this.gravity = Math.random() * 0.005;\n    this.vy = 0;\n  }\n  update() {\n    if (this.x < this.radius || this.x > this.effect.width - this.radius) {\n      this.speedX *= -1;\n    }\n    if (this.y > this.effect.height + this.radius) {\n      this.y = -this.radius;\n      this.vy = 0;\n      this.speedY = Math.random() * 1.5 + 0.5;\n    }\n    if (this.y > this.radius) {\n      this.vy += this.gravity;\n      this.speedY += this.vy;\n    }\n    this.x += this.speedX;\n    this.y += this.speedY;\n  }\n  draw(context) {\n    context.beginPath();\n    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    context.fill();\n  }\n  reset() {\n    this.x = this.radius * 2 + Math.random() * (this.effect.width - this.radius * 4);\n    this.y = -this.radius;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n//# sourceURL=webpack://canvas/./src/scripts/Ball/Ball.js?");

/***/ }),

/***/ "./src/scripts/Ball/MetaballsEffect.js":
/*!*********************************************!*\
  !*** ./src/scripts/Ball/MetaballsEffect.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/scripts/Ball/Ball.js\");\n\nclass MetaballsEffect {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n    this.metaballsArray = [];\n  }\n  init(numberOfBalls) {\n    for (let i = 0; i < numberOfBalls; i += 1) {\n      // console.log(this.width);\n      this.metaballsArray.push(new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this));\n    }\n  }\n  update() {\n    this.metaballsArray.forEach(metaball => metaball.update());\n  }\n  draw(context) {\n    this.metaballsArray.forEach(metaball => metaball.draw(context));\n  }\n  reset(newWidth, newHeight) {\n    this.width = newWidth;\n    this.height = newHeight;\n    this.metaballsArray.forEach(metaball => metaball.reset());\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaballsEffect);\n\n//# sourceURL=webpack://canvas/./src/scripts/Ball/MetaballsEffect.js?");

/***/ }),

/***/ "./src/scripts/Ball/animate.js":
/*!*************************************!*\
  !*** ./src/scripts/Ball/animate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = (effect, ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  effect.update();\n  effect.draw(ctx);\n  requestAnimationFrame(() => {\n    animate(effect, ctx, canvas);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://canvas/./src/scripts/Ball/animate.js?");

/***/ }),

/***/ "./src/scripts/createCanvas.js":
/*!*************************************!*\
  !*** ./src/scripts/createCanvas.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createCanvas = canvasDom => {\n  if (!canvasDom) {\n    return {\n      canvas: undefined,\n      ctx: undefined\n    };\n  }\n  const canvas = canvasDom;\n  const ctx = canvas.getContext('2d');\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  return {\n    canvas,\n    ctx\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCanvas);\n\n//# sourceURL=webpack://canvas/./src/scripts/createCanvas.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ball_MetaballsEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball/MetaballsEffect */ \"./src/scripts/Ball/MetaballsEffect.js\");\n/* harmony import */ var _Ball_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball/animate */ \"./src/scripts/Ball/animate.js\");\n/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCanvas */ \"./src/scripts/createCanvas.js\");\n// import vevet from './config/vevet';\n\n\n\nconst init = () => {\n  const canvasArray = document.querySelectorAll('.canvas');\n  if (canvasArray.length !== 0) {\n    canvasArray.forEach(canvasDom => {\n      const {\n        canvas,\n        ctx\n      } = (0,_createCanvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(canvasDom);\n      ctx.fillStyle = 'pink';\n      const effect = new _Ball_MetaballsEffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n      effect.init(20);\n      (0,_Ball_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(effect, ctx, canvas);\n      window.addEventListener('resize', () => {\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        ctx.fillStyle = 'pink';\n        effect.reset(canvas.width, canvas.height);\n      });\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://canvas/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://canvas/./src/styles/styles.scss?");

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