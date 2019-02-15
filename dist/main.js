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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.elements = arr;\n  }\n  \n  html(str) {\n    if (typeof str === \"string\") {\n      this.elements.forEach((el) => {\n        el.innerHTML = str;\n      });\n    } else {\n      return this.elements[0].innerHTML;\n    }\n  }\n  empty() {\n    this.html(\"\");\n  }\n\n  append(arg) {\n    if (arg instanceof DOMNodeCollection) {\n      this.elements.forEach(el => {\n        arg.elements.forEach(el2 => {\n          el.innerHTML += el2.outerHTML;\n        })\n      });\n    } else if((typeof arg) === 'string') {\n      this.elements.forEach(el => {\n        el.innerHTML += arg;\n      });\n    } else if(arg instanceof HTMLElement) {\n      this.elements.forEach(el =>{\n        el.innerHTML += arg.outerHTML;\n      });\n    }\n  }\n\n  attr(arg1,arg2) {\n    if (arg2) {\n      this.elements.forEach((el) => {\n        el.setAttribute(arg1,arg2);\n      });\n    } else {\n      return this.elements[0].getAttribute(arg1);\n    }\n  }\n\n  addClass(arg1) {\n    if (arg1) {\n      this.elements.forEach((el) => {\n        el.className = arg1;\n      });\n    } else {\n      return this.elements[0].className;\n    }\n  }\n\n  removeClass() {\n    this.addClass(\"\")\n  }\n\n  children() {\n    let res = [];\n    this.elements.forEach((el) => {\n      res = res.concat(el.children);\n    });\n\n    return new DOMNodeCollection(res);\n  }\n\n  parent() {\n    let res = [];\n    this.elements.forEach((el) => {\n      res = res.concat(el.parentNode);\n    });\n\n    return new DOMNodeCollection(res);\n  }\n\n  find(arg){\n    let res = []\n    this.elements.forEach(el => {\n      res.push(el.querySelectorAll(arg))\n    });  \n\n    return new DOMNodeCollection(arg);\n  }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg){\n \n  if (arg instanceof HTMLElement) {\n    let res = [];\n    res.push(arg);\n    return new DOMNodeCollection(res);\n  } else if ((typeof arg) === 'string') {\n    let res = new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));\n    return res;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });