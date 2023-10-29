/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  background-color: black;
  color: white;
}

p {
  font-size: 36px;
  text-align: center;
}

.gb-container {
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding-top: 80px;
}

#startMenu, #placers {
  align-items: center;
  background-color: #727272;
  border: solid white 1px;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  padding: 20px;
}

.gameboard {
  max-width: 520px;
  padding: 0;
}

.placer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rotated {
  flex-direction: row;
}


.square {
  background-color: #000062;
  border: solid white 1px;
  cursor: crosshair;
  display: inline-block;
  height: 50px;
  margin: 0;
  width: 50px;
}

.enemy:hover {
  background-color: lightseagreen;
}

.square.attacked {
  background-color: #020025;
}

.square.ship {
  background-color: #393939;
}

.attacked.ship {
  background-color: #e41515;
}

.attacked.ship.sunk {
  background-color: #590000;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;EACZ,SAAS;EACT,WAAW;AACb;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["html {\n  background-color: black;\n  color: white;\n}\n\np {\n  font-size: 36px;\n  text-align: center;\n}\n\n.gb-container {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  padding-top: 80px;\n}\n\n#startMenu, #placers {\n  align-items: center;\n  background-color: #727272;\n  border: solid white 1px;\n  display: flex;\n  gap: 30px;\n  justify-content: space-evenly;\n  padding: 20px;\n}\n\n.gameboard {\n  max-width: 520px;\n  padding: 0;\n}\n\n.placer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.rotated {\n  flex-direction: row;\n}\n\n\n.square {\n  background-color: #000062;\n  border: solid white 1px;\n  cursor: crosshair;\n  display: inline-block;\n  height: 50px;\n  margin: 0;\n  width: 50px;\n}\n\n.enemy:hover {\n  background-color: lightseagreen;\n}\n\n.square.attacked {\n  background-color: #020025;\n}\n\n.square.ship {\n  background-color: #393939;\n}\n\n.attacked.ship {\n  background-color: #e41515;\n}\n\n.attacked.ship.sunk {\n  background-color: #590000;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class/Gameboard.js":
/*!********************************!*\
  !*** ./src/class/Gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/class/Ship.js");

/**
 * @module Gameboard
 */
class Gameboard {
  /**
   * Columns, letters A-J
   */
  constructor() {
    this.cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  }

  /**
   * Init
   */
  init() {
    this.squares = {};
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const key = `${this.cols[j]}${i+1}`;
        this.squares[key] = {hasShip: false};
      }
    }
  }

  /**
   * Recieve attack
   * @param {string} coord
   * @return {*}
   */
  recieveAttack(coord) {
    const square = this.squares[coord];
    square.attacked = true;
    const ship = square.hasShip;
    if (ship) {
      const col = this.cols.indexOf(coord[0]);
      const row = parseInt(coord[1]);
      let count = 0;
      // calculate on which square ship is hit
      // if ship is rotated
      if (ship.rotated) {
        for (let i = 0; i < 10; i++) {
          const s = `${this.cols[i]}${row}`;
          if (this.squares[s].hasShip) {
            if (this.squares[s].hasShip.id === ship.id) {
              if (s === coord) {
                break;
              } else {
                count++;
              }
            }
          }
        }
      } else {
        // start from 1 since A0 etc doesn't exist
        for (let i = 1; i < 11; i++) {
          const s = `${this.cols[col]}${i}`;
          if (this.squares[s].hasShip) {
            if (this.squares[s].hasShip.id === ship.id) {
              if (s === coord) {
                break;
              } else {
                count++;
              }
            }
          }
        }
      }
      ship.hit(count);
      return ship;
    }
    return false;
  }

  /**
   * Check if all ships are sunk
   * @return {bool}
   */
  allSunk() {
    const ships = new Set();
    for (const coord in this.squares) {
      if (this.squares[coord].hasShip) {
        ships.add(this.squares[coord].hasShip);
      }
    }
    for (const ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  /**
   * @param {string} square
   * @param {Ship} ship
   * @param {bool} rotated
   * @return {bool}
   */
  placeShip(square, ship) {
    if (!square) return false;
    const col = this.cols.indexOf(square[0]);
    let row;
    if (square[2]) row = parseInt(square[1]+square[2]);
    else row = parseInt(square[1]);
    const coords = [];
    if (ship.rotated) {
      for (let i = col; i < col+ship.length; i++) {
        const s = `${this.cols[i]}${row}`;
        coords.push(s);
        // this.squares[s].hasShip = ship;
      }
    } else {
      for (let i = row; i < row+ship.length; i++) {
        const s = `${this.cols[col]}${i}`;
        coords.push(s);
      }
    }
    for (let i = 0; i < coords.length; i++) {
      if (!this.squares[coords[i]]) {
        return false;
      } else if (this.squares[coords[i]].hasShip) {
        return false;
      }
    }
    for (let i = 0; i < coords.length; i++) {
      this.squares[coords[i]].hasShip = ship;
    }
    return true;
  }

  /**
   * Place Ships randomly
   * @return {bool}
   */
  randomPlaceShips() {
    const ships = [['Carrier', 5], ['Battleship', 4],
      ['Cruiser', 3], ['Submarine', 3], ['Destroyer', 2]];
    this.init();
    for (let i = 0; i < ships.length; i++) {
      const col = Math.floor(Math.random() * 10);
      const row = Math.floor(Math.random() * 10) + 1;
      const rot = Math.floor(Math.random() * 2);
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](ships[i][0], ships[i][1], rot);
      if (!this.placeShip(`${this.cols[col]}${row}`, ship)) {
        return this.randomPlaceShips();
      }
    }
    return true;
  }

  /**
  * @param {*} id
  * @return {arr}
  */
  getSquaresWithShip(id) {
    const squares = [];
    for (const square in this.squares) {
      if (this.squares[square].hasShip &&
        this.squares[square].hasShip.id === id) {
        squares.push(square);
      }
    }
    return squares;
  }
}


/***/ }),

/***/ "./src/class/Player.js":
/*!*****************************!*\
  !*** ./src/class/Player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/class/Gameboard.js");


/**
 * @module Player
 */
class Player {
  /**
   * @param {string} name
   * @param {bool} [ai=false]
   */
  constructor(name, ai = false) {
    this.name = name;
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ai = ai;
  }

  /**
   * @param {string} coord
   * @param {Player} enemy
   * @return {bool}
   */
  fire(coord, enemy) {
    let output;
    if (this.ai) output = document.querySelector('#p2');
    else output = document.querySelector('#p1');
    if (!enemy.gameboard.squares[coord].attacked) {
      const ship = enemy.gameboard.recieveAttack(coord);
      if (ship) {
        if (ship.isSunk()) {
          output.innerText =
          (`${this.name} has sunken ${enemy.name}'s ${ship.id}`);
        } else {
          output.innerText = (`${this.name} has hit a ship on ${coord}`);
        }
      } else {
        output.innerText = (`${this.name} attacks ${coord}, it's a miss.`);
      }

      if (enemy.gameboard.allSunk()) {
        output.innerText = (`Game Over! ${this.name} wins!`);
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * @param {Player} enemy
   * @return {string}
   */
  randomFire(enemy) {
    const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const col = Math.floor(Math.random() * 10);
    const row = Math.floor(Math.random() * 10) + 1;
    const coord = `${cols[col]}${row}`;
    if (!this.fire(coord, enemy)) {
      return this.randomFire(enemy);
    } else {
      return coord;
    }
  }
}


/***/ }),

/***/ "./src/class/Ship.js":
/*!***************************!*\
  !*** ./src/class/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/**
 * @module Ship
 */
class Ship {
  /**
   * Creates Ship of length n
   * @param {string} id
   * @param {int} length
   * @param {bool} rotated
   */
  constructor(id, length, rotated) {
    this.id = id;
    this.length = length;
    this.rotated = rotated;
    this.hits = new Array(length);
  }

  /**
   * Add a hit on index n
   * @param {int} n
   */
  hit(n) {
    this.hits[n] = 1;
  }

  /**
   * @return {bool}
   */
  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (!this.hits[i]) return false;
    }
    return true;
  }
}


/***/ }),

/***/ "./src/control/game.js":
/*!*****************************!*\
  !*** ./src/control/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _class_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Player */ "./src/class/Player.js");
/* harmony import */ var _ui_loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/loadMenu */ "./src/ui/loadMenu.js");
/* harmony import */ var _ui_loadBoards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/loadBoards */ "./src/ui/loadBoards.js");




const div = document.createElement('div');
const p1 = document.createElement('p');
p1.id = 'p1';
const p2 = document.createElement('p');
p2.id = 'p2';
div.classList.add('gb-container');
document.body.appendChild(div);
document.body.appendChild(p1);
document.body.appendChild(p2);

const init = () => {
  div.innerHTML = '';
  const menuPlayer = new _class_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('start');
  const menu = (0,_ui_loadMenu__WEBPACK_IMPORTED_MODULE_1__["default"])(menuPlayer);
  div.appendChild(menu[0]);
  div.appendChild(menu[1]);
  const startBtn = document.getElementById('startButton');
  startBtn.addEventListener('click', () => {
    const placers = document.getElementsByClassName('placer');
    if (!placers.length) start(menu[2]);
    else start();
  });
};

const start = (squares = null) => {
  const p1 = new _class_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('p1');
  const p2 = new _class_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('p2', true);

  if (squares) p1.gameboard.squares = squares;
  else p1.gameboard.randomPlaceShips();
  p2.gameboard.randomPlaceShips();

  div.innerHTML = '';
  const boards = (0,_ui_loadBoards__WEBPACK_IMPORTED_MODULE_2__["default"])(p1, p2);
  div.appendChild(boards[0]);
  div.appendChild(boards[1]);
};




/***/ }),

/***/ "./src/ui/loadBoards.js":
/*!******************************!*\
  !*** ./src/ui/loadBoards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const paintSunkenShip = (ship, target) => {
  const squares = target.gameboard.getSquaresWithShip(ship.id);
  for (let i = 0; i < squares.length; i++) {
    document.getElementById(`${target.name}${squares[i]}`).
        classList.add('sunk');
  }
};
/**
 * @param {Player} p
 * @param {Player} e
 * @return {Object}
 */
const drawBoard = (p, e) => {
  const pBoard = document.createElement('div');
  pBoard.classList.add('gameboard');
  const keyArr = Object.keys(p.gameboard.squares);
  for (let i = 0; i < keyArr.length; i++) {
    const square = document.createElement('div');
    if (e) square.id = `${p.name}${keyArr[i]}`;
    else square.id = keyArr[i];
    if (p.ai) {
      square.classList.add('enemy');
      square.addEventListener('click', () => {
        if (e.fire(keyArr[i], p)) {
          square.classList.add('attacked');
          const ship = p.gameboard.squares[keyArr[i]].hasShip;
          if (ship) {
            square.classList.add('ship');
            if (ship.isSunk()) {
              paintSunkenShip(ship, p);
            }
          }
          const coord = p.randomFire(e);
          document.getElementById(`${e.name}${coord}`)
              .classList.add('attacked');
          const pShip = e.gameboard.squares[coord].hasShip;
          if (pShip && pShip.isSunk()) {
            paintSunkenShip(pShip, e);
          }
        }
      });
    }
    square.classList.add('square');
    if (p.gameboard.squares[keyArr[i]].attacked) {
      square.classList.add('attacked');
    }
    if (!p.ai && p.gameboard.squares[keyArr[i]].hasShip) {
      square.classList.add('ship');
    }
    square.innerText = keyArr[i];
    pBoard.appendChild(square);
  }
  return pBoard;
};

/**
 * @param {Player} p1
 * @param {Player} p2
 * @return {*}
 */
const loadBoards = (p1, p2 = null) => {
  const p1Board = drawBoard(p1, p2);
  if (p2) {
    const p2Board = drawBoard(p2, p1);
    return [p1Board, p2Board];
  } else {
    return p1Board;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBoards);


/***/ }),

/***/ "./src/ui/loadMenu.js":
/*!****************************!*\
  !*** ./src/ui/loadMenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadBoards */ "./src/ui/loadBoards.js");
/* harmony import */ var _class_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/Ship */ "./src/class/Ship.js");



const initDragnDrop = (square, p) => {
  square.addEventListener('dragstart', (e) => {
    let data = JSON.parse(square.getAttribute('data'));
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      squares[i].addEventListener('drop', (e) => {
        if (data) {
          const shot = p.gameboard.placeShip(squares[i].id,
              new _class_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](data[0], data[1], data[2]));
          if (shot) square.remove();
        }
        data = null;
        for (const square in p.gameboard.squares) {
          if (p.gameboard.squares[square].hasShip) {
            document.getElementById(square).classList.add('ship');
          }
        }
      });
    }
  });
};

const createShipPlacers = (p) => {
  const ships = [['"Carrier"', 5], ['"Battleship"', 4],
    ['"Cruiser"', 3], ['"Submarine"', 3], ['"Destroyer"', 2]];
  const placers = [];
  for (let i = 0; i < ships.length; i++) {
    const placer = document.createElement('div');

    placer.className = 'placer';
    placer.setAttribute('draggable', true);
    placer.setAttribute('data', `[${ships[i][0]}, ${ships[i][1]}, false]`);
    // add eventlisteners for dragging & dropping
    initDragnDrop(placer, p);

    for (let j = 0; j < ships[i][1]; j++) {
      const square = document.createElement('div');
      square.className = 'ship square';
      placer.appendChild(square);
    }
    placers.push(placer);
  }
  return placers;
};

// module
const loadMenu = (p) => {
  p.gameboard.init();
  const board = (0,_loadBoards__WEBPACK_IMPORTED_MODULE_0__["default"])(p);
  const div = document.createElement('div');
  const pDiv = document.createElement('div');
  div.id = 'startMenu';
  pDiv.id = 'placers';
  div.appendChild(board);
  const shipPlacers = createShipPlacers(p);

  for (let i = 0; i < shipPlacers.length; i++) {
    shipPlacers[i].addEventListener('click', () => {
      const data = JSON.parse(shipPlacers[i].getAttribute('data'));
      if (data[2]) data[2] = false;
      else data[2] = true;
      shipPlacers[i].setAttribute('data', JSON.stringify(data));
      shipPlacers[i].classList.toggle('rotated');
    });
    pDiv.appendChild(shipPlacers[i]);
  }
  const button = document.createElement('button');
  button.id = 'startButton';
  button.innerText = 'Start';
  div.appendChild(button);

  return [div, pDiv, p.gameboard.squares];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _control_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control/game */ "./src/control/game.js");



_control_game__WEBPACK_IMPORTED_MODULE_1__.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGdDQUFnQyw0QkFBNEIsaUJBQWlCLEdBQUcsT0FBTyxvQkFBb0IsdUJBQXVCLEdBQUcsbUJBQW1CLHdCQUF3QixrQkFBa0Isa0NBQWtDLHNCQUFzQixHQUFHLDBCQUEwQix3QkFBd0IsOEJBQThCLDRCQUE0QixrQkFBa0IsY0FBYyxrQ0FBa0Msa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixlQUFlLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsZUFBZSw4QkFBOEIsNEJBQTRCLHNCQUFzQiwwQkFBMEIsaUJBQWlCLGNBQWMsZ0JBQWdCLEdBQUcsa0JBQWtCLG9DQUFvQyxHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLHlCQUF5Qiw4QkFBOEIsR0FBRyxtQkFBbUI7QUFDanJEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDOUUxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5Qix1QkFBdUIsYUFBYSxFQUFFLElBQUk7QUFDMUMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyx1QkFBdUIsYUFBYSxFQUFFLElBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLHVCQUF1QixlQUFlLEVBQUUsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxNQUFNO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QyxxQkFBcUIsYUFBYSxFQUFFLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixxQkFBcUI7QUFDN0MscUJBQXFCLGVBQWUsRUFBRSxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCLDZCQUE2QixlQUFlLEVBQUUsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxHQUFHO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Lb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBUztBQUNsQztBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsYUFBYSxXQUFXLEtBQUssUUFBUTtBQUM5RCxVQUFVO0FBQ1YsaUNBQWlDLFdBQVcsb0JBQW9CLE1BQU07QUFDdEU7QUFDQSxRQUFRO0FBQ1IsK0JBQStCLFdBQVcsVUFBVSxNQUFNO0FBQzFEOztBQUVBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVSxFQUFFLElBQUk7QUFDckM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLEtBQUs7QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDcUM7QUFDQztBQUNJOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixxREFBTTtBQUMvQixlQUFlLHdEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFNO0FBQ3ZCLGlCQUFpQixxREFBTTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDBEQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQzFDckI7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEMsK0JBQStCLFlBQVksRUFBRSxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQSwwQkFBMEIsT0FBTyxFQUFFLFVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPLEVBQUUsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RVk7QUFDTDs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWSxJQUFJLFlBQVk7QUFDaEU7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNoRnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QywrQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbC9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvbG9hZEJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2xvYWRNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbiNzdGFydE1lbnUsICNwbGFjZXJzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3MjtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5nYW1lYm9hcmQge1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucGxhY2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3RhdGVkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2MjtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmVuZW15OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbn1cblxuLnNxdWFyZS5hdHRhY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjAwMjU7XG59XG5cbi5zcXVhcmUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XG59XG5cbi5hdHRhY2tlZC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTUxNTtcbn1cblxuLmF0dGFja2VkLnNoaXAuc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTAwMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2ItY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG59XFxuXFxuI3N0YXJ0TWVudSwgI3BsYWNlcnMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjcyNzI7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgbWF4LXdpZHRoOiA1MjBweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wbGFjZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDYyO1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZW5lbXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLnNxdWFyZS5hdHRhY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMDI1O1xcbn1cXG5cXG4uc3F1YXJlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXG59XFxuXFxuLmF0dGFja2VkLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTUxNTtcXG59XFxuXFxuLmF0dGFja2VkLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTkwMDAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbi8qKlxuICogQG1vZHVsZSBHYW1lYm9hcmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgLyoqXG4gICAqIENvbHVtbnMsIGxldHRlcnMgQS1KXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuc3F1YXJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RoaXMuY29sc1tqXX0ke2krMX1gO1xuICAgICAgICB0aGlzLnNxdWFyZXNba2V5XSA9IHtoYXNTaGlwOiBmYWxzZX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY2lldmUgYXR0YWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb29yZFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgcmVjaWV2ZUF0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tjb29yZF07XG4gICAgc3F1YXJlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICBjb25zdCBzaGlwID0gc3F1YXJlLmhhc1NoaXA7XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29scy5pbmRleE9mKGNvb3JkWzBdKTtcbiAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNvb3JkWzFdKTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAvLyBjYWxjdWxhdGUgb24gd2hpY2ggc3F1YXJlIHNoaXAgaXMgaGl0XG4gICAgICAvLyBpZiBzaGlwIGlzIHJvdGF0ZWRcbiAgICAgIGlmIChzaGlwLnJvdGF0ZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcyA9IGAke3RoaXMuY29sc1tpXX0ke3Jvd31gO1xuICAgICAgICAgIGlmICh0aGlzLnNxdWFyZXNbc10uaGFzU2hpcCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3F1YXJlc1tzXS5oYXNTaGlwLmlkID09PSBzaGlwLmlkKSB7XG4gICAgICAgICAgICAgIGlmIChzID09PSBjb29yZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0YXJ0IGZyb20gMSBzaW5jZSBBMCBldGMgZG9lc24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzID0gYCR7dGhpcy5jb2xzW2NvbF19JHtpfWA7XG4gICAgICAgICAgaWYgKHRoaXMuc3F1YXJlc1tzXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcXVhcmVzW3NdLmhhc1NoaXAuaWQgPT09IHNoaXAuaWQpIHtcbiAgICAgICAgICAgICAgaWYgKHMgPT09IGNvb3JkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2hpcC5oaXQoY291bnQpO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICogQHJldHVybiB7Ym9vbH1cbiAgICovXG4gIGFsbFN1bmsoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChjb25zdCBjb29yZCBpbiB0aGlzLnNxdWFyZXMpIHtcbiAgICAgIGlmICh0aGlzLnNxdWFyZXNbY29vcmRdLmhhc1NoaXApIHtcbiAgICAgICAgc2hpcHMuYWRkKHRoaXMuc3F1YXJlc1tjb29yZF0uaGFzU2hpcCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcXVhcmVcbiAgICogQHBhcmFtIHtTaGlwfSBzaGlwXG4gICAqIEBwYXJhbSB7Ym9vbH0gcm90YXRlZFxuICAgKiBAcmV0dXJuIHtib29sfVxuICAgKi9cbiAgcGxhY2VTaGlwKHNxdWFyZSwgc2hpcCkge1xuICAgIGlmICghc3F1YXJlKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgY29sID0gdGhpcy5jb2xzLmluZGV4T2Yoc3F1YXJlWzBdKTtcbiAgICBsZXQgcm93O1xuICAgIGlmIChzcXVhcmVbMl0pIHJvdyA9IHBhcnNlSW50KHNxdWFyZVsxXStzcXVhcmVbMl0pO1xuICAgIGVsc2Ugcm93ID0gcGFyc2VJbnQoc3F1YXJlWzFdKTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBpZiAoc2hpcC5yb3RhdGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgY29sK3NoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IGAke3RoaXMuY29sc1tpXX0ke3Jvd31gO1xuICAgICAgICBjb29yZHMucHVzaChzKTtcbiAgICAgICAgLy8gdGhpcy5zcXVhcmVzW3NdLmhhc1NoaXAgPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93K3NoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IGAke3RoaXMuY29sc1tjb2xdfSR7aX1gO1xuICAgICAgICBjb29yZHMucHVzaChzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zcXVhcmVzW2Nvb3Jkc1tpXV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNxdWFyZXNbY29vcmRzW2ldXS5oYXNTaGlwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc3F1YXJlc1tjb29yZHNbaV1dLmhhc1NoaXAgPSBzaGlwO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGFjZSBTaGlwcyByYW5kb21seVxuICAgKiBAcmV0dXJuIHtib29sfVxuICAgKi9cbiAgcmFuZG9tUGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IFtbJ0NhcnJpZXInLCA1XSwgWydCYXR0bGVzaGlwJywgNF0sXG4gICAgICBbJ0NydWlzZXInLCAzXSwgWydTdWJtYXJpbmUnLCAzXSwgWydEZXN0cm95ZXInLCAyXV07XG4gICAgdGhpcy5pbml0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIGNvbnN0IHJvdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBzW2ldWzBdLCBzaGlwc1tpXVsxXSwgcm90KTtcbiAgICAgIGlmICghdGhpcy5wbGFjZVNoaXAoYCR7dGhpcy5jb2xzW2NvbF19JHtyb3d9YCwgc2hpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tUGxhY2VTaGlwcygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSB7Kn0gaWRcbiAgKiBAcmV0dXJuIHthcnJ9XG4gICovXG4gIGdldFNxdWFyZXNXaXRoU2hpcChpZCkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBpbiB0aGlzLnNxdWFyZXMpIHtcbiAgICAgIGlmICh0aGlzLnNxdWFyZXNbc3F1YXJlXS5oYXNTaGlwICYmXG4gICAgICAgIHRoaXMuc3F1YXJlc1tzcXVhcmVdLmhhc1NoaXAuaWQgPT09IGlkKSB7XG4gICAgICAgIHNxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3F1YXJlcztcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCc7XG5cbi8qKlxuICogQG1vZHVsZSBQbGF5ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Ym9vbH0gW2FpPWZhbHNlXVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgYWkgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5haSA9IGFpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb29yZFxuICAgKiBAcGFyYW0ge1BsYXllcn0gZW5lbXlcbiAgICogQHJldHVybiB7Ym9vbH1cbiAgICovXG4gIGZpcmUoY29vcmQsIGVuZW15KSB7XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAodGhpcy5haSkgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AyJyk7XG4gICAgZWxzZSBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcDEnKTtcbiAgICBpZiAoIWVuZW15LmdhbWVib2FyZC5zcXVhcmVzW2Nvb3JkXS5hdHRhY2tlZCkge1xuICAgICAgY29uc3Qgc2hpcCA9IGVuZW15LmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgb3V0cHV0LmlubmVyVGV4dCA9XG4gICAgICAgICAgKGAke3RoaXMubmFtZX0gaGFzIHN1bmtlbiAke2VuZW15Lm5hbWV9J3MgJHtzaGlwLmlkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dC5pbm5lclRleHQgPSAoYCR7dGhpcy5uYW1lfSBoYXMgaGl0IGEgc2hpcCBvbiAke2Nvb3JkfWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQuaW5uZXJUZXh0ID0gKGAke3RoaXMubmFtZX0gYXR0YWNrcyAke2Nvb3JkfSwgaXQncyBhIG1pc3MuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmVteS5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIG91dHB1dC5pbm5lclRleHQgPSAoYEdhbWUgT3ZlciEgJHt0aGlzLm5hbWV9IHdpbnMhYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gZW5lbXlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgcmFuZG9tRmlyZShlbmVteSkge1xuICAgIGNvbnN0IGNvbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICBjb25zdCBjb29yZCA9IGAke2NvbHNbY29sXX0ke3Jvd31gO1xuICAgIGlmICghdGhpcy5maXJlKGNvb3JkLCBlbmVteSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbUZpcmUoZW5lbXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgU2hpcFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgU2hpcCBvZiBsZW5ndGggblxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtpbnR9IGxlbmd0aFxuICAgKiBAcGFyYW0ge2Jvb2x9IHJvdGF0ZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkLCBsZW5ndGgsIHJvdGF0ZWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5yb3RhdGVkID0gcm90YXRlZDtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBoaXQgb24gaW5kZXggblxuICAgKiBAcGFyYW0ge2ludH0gblxuICAgKi9cbiAgaGl0KG4pIHtcbiAgICB0aGlzLmhpdHNbbl0gPSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9XG4gICAqL1xuICBpc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaGl0c1tpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9jbGFzcy9QbGF5ZXInO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4uL3VpL2xvYWRNZW51JztcbmltcG9ydCBsb2FkQm9hcmRzIGZyb20gJy4uL3VpL2xvYWRCb2FyZHMnO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucDEuaWQgPSAncDEnO1xuY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wMi5pZCA9ICdwMic7XG5kaXYuY2xhc3NMaXN0LmFkZCgnZ2ItY29udGFpbmVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHAxKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocDIpO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBkaXYuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IG1lbnVQbGF5ZXIgPSBuZXcgUGxheWVyKCdzdGFydCcpO1xuICBjb25zdCBtZW51ID0gbG9hZE1lbnUobWVudVBsYXllcik7XG4gIGRpdi5hcHBlbmRDaGlsZChtZW51WzBdKTtcbiAgZGl2LmFwcGVuZENoaWxkKG1lbnVbMV0pO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwbGFjZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2VyJyk7XG4gICAgaWYgKCFwbGFjZXJzLmxlbmd0aCkgc3RhcnQobWVudVsyXSk7XG4gICAgZWxzZSBzdGFydCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0YXJ0ID0gKHNxdWFyZXMgPSBudWxsKSA9PiB7XG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcigncDEnKTtcbiAgY29uc3QgcDIgPSBuZXcgUGxheWVyKCdwMicsIHRydWUpO1xuXG4gIGlmIChzcXVhcmVzKSBwMS5nYW1lYm9hcmQuc3F1YXJlcyA9IHNxdWFyZXM7XG4gIGVsc2UgcDEuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlU2hpcHMoKTtcbiAgcDIuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICBkaXYuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGJvYXJkcyA9IGxvYWRCb2FyZHMocDEsIHAyKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJvYXJkc1swXSk7XG4gIGRpdi5hcHBlbmRDaGlsZChib2FyZHNbMV0pO1xufTtcblxuZXhwb3J0IHtpbml0LCBzdGFydH07XG4iLCJjb25zdCBwYWludFN1bmtlblNoaXAgPSAoc2hpcCwgdGFyZ2V0KSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSB0YXJnZXQuZ2FtZWJvYXJkLmdldFNxdWFyZXNXaXRoU2hpcChzaGlwLmlkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFyZ2V0Lm5hbWV9JHtzcXVhcmVzW2ldfWApLlxuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gIH1cbn07XG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwXG4gKiBAcGFyYW0ge1BsYXllcn0gZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBkcmF3Qm9hcmQgPSAocCwgZSkgPT4ge1xuICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcEJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuICBjb25zdCBrZXlBcnIgPSBPYmplY3Qua2V5cyhwLmdhbWVib2FyZC5zcXVhcmVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoZSkgc3F1YXJlLmlkID0gYCR7cC5uYW1lfSR7a2V5QXJyW2ldfWA7XG4gICAgZWxzZSBzcXVhcmUuaWQgPSBrZXlBcnJbaV07XG4gICAgaWYgKHAuYWkpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZS5maXJlKGtleUFycltpXSwgcCkpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgICAgICBjb25zdCBzaGlwID0gcC5nYW1lYm9hcmQuc3F1YXJlc1trZXlBcnJbaV1dLmhhc1NoaXA7XG4gICAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBwYWludFN1bmtlblNoaXAoc2hpcCwgcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGNvb3JkID0gcC5yYW5kb21GaXJlKGUpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2UubmFtZX0ke2Nvb3JkfWApXG4gICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgICAgICAgIGNvbnN0IHBTaGlwID0gZS5nYW1lYm9hcmQuc3F1YXJlc1tjb29yZF0uaGFzU2hpcDtcbiAgICAgICAgICBpZiAocFNoaXAgJiYgcFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHBhaW50U3Vua2VuU2hpcChwU2hpcCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGlmIChwLmdhbWVib2FyZC5zcXVhcmVzW2tleUFycltpXV0uYXR0YWNrZWQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgIH1cbiAgICBpZiAoIXAuYWkgJiYgcC5nYW1lYm9hcmQuc3F1YXJlc1trZXlBcnJbaV1dLmhhc1NoaXApIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfVxuICAgIHNxdWFyZS5pbm5lclRleHQgPSBrZXlBcnJbaV07XG4gICAgcEJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gIH1cbiAgcmV0dXJuIHBCb2FyZDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHAxXG4gKiBAcGFyYW0ge1BsYXllcn0gcDJcbiAqIEByZXR1cm4geyp9XG4gKi9cbmNvbnN0IGxvYWRCb2FyZHMgPSAocDEsIHAyID0gbnVsbCkgPT4ge1xuICBjb25zdCBwMUJvYXJkID0gZHJhd0JvYXJkKHAxLCBwMik7XG4gIGlmIChwMikge1xuICAgIGNvbnN0IHAyQm9hcmQgPSBkcmF3Qm9hcmQocDIsIHAxKTtcbiAgICByZXR1cm4gW3AxQm9hcmQsIHAyQm9hcmRdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwMUJvYXJkO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQm9hcmRzO1xuIiwiaW1wb3J0IGxvYWRCb2FyZHMgZnJvbSAnLi9sb2FkQm9hcmRzJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL2NsYXNzL1NoaXAnO1xuXG5jb25zdCBpbml0RHJhZ25Ecm9wID0gKHNxdWFyZSwgcCkgPT4ge1xuICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uoc3F1YXJlLmdldEF0dHJpYnV0ZSgnZGF0YScpKTtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3F1YXJlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzcXVhcmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgICBzcXVhcmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHNob3QgPSBwLmdhbWVib2FyZC5wbGFjZVNoaXAoc3F1YXJlc1tpXS5pZCxcbiAgICAgICAgICAgICAgbmV3IFNoaXAoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSkpO1xuICAgICAgICAgIGlmIChzaG90KSBzcXVhcmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3Qgc3F1YXJlIGluIHAuZ2FtZWJvYXJkLnNxdWFyZXMpIHtcbiAgICAgICAgICBpZiAocC5nYW1lYm9hcmQuc3F1YXJlc1tzcXVhcmVdLmhhc1NoaXApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNxdWFyZSkuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBQbGFjZXJzID0gKHApID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbWydcIkNhcnJpZXJcIicsIDVdLCBbJ1wiQmF0dGxlc2hpcFwiJywgNF0sXG4gICAgWydcIkNydWlzZXJcIicsIDNdLCBbJ1wiU3VibWFyaW5lXCInLCAzXSwgWydcIkRlc3Ryb3llclwiJywgMl1dO1xuICBjb25zdCBwbGFjZXJzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwbGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBsYWNlci5jbGFzc05hbWUgPSAncGxhY2VyJztcbiAgICBwbGFjZXIuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICBwbGFjZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgYFske3NoaXBzW2ldWzBdfSwgJHtzaGlwc1tpXVsxXX0sIGZhbHNlXWApO1xuICAgIC8vIGFkZCBldmVudGxpc3RlbmVycyBmb3IgZHJhZ2dpbmcgJiBkcm9wcGluZ1xuICAgIGluaXREcmFnbkRyb3AocGxhY2VyLCBwKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMV07IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAgc3F1YXJlJztcbiAgICAgIHBsYWNlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBwbGFjZXJzLnB1c2gocGxhY2VyKTtcbiAgfVxuICByZXR1cm4gcGxhY2Vycztcbn07XG5cbi8vIG1vZHVsZVxuY29uc3QgbG9hZE1lbnUgPSAocCkgPT4ge1xuICBwLmdhbWVib2FyZC5pbml0KCk7XG4gIGNvbnN0IGJvYXJkID0gbG9hZEJvYXJkcyhwKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ3N0YXJ0TWVudSc7XG4gIHBEaXYuaWQgPSAncGxhY2Vycyc7XG4gIGRpdi5hcHBlbmRDaGlsZChib2FyZCk7XG4gIGNvbnN0IHNoaXBQbGFjZXJzID0gY3JlYXRlU2hpcFBsYWNlcnMocCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUGxhY2Vycy5sZW5ndGg7IGkrKykge1xuICAgIHNoaXBQbGFjZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2hpcFBsYWNlcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgaWYgKGRhdGFbMl0pIGRhdGFbMl0gPSBmYWxzZTtcbiAgICAgIGVsc2UgZGF0YVsyXSA9IHRydWU7XG4gICAgICBzaGlwUGxhY2Vyc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBzaGlwUGxhY2Vyc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGVkJyk7XG4gICAgfSk7XG4gICAgcERpdi5hcHBlbmRDaGlsZChzaGlwUGxhY2Vyc1tpXSk7XG4gIH1cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5pZCA9ICdzdGFydEJ1dHRvbic7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnU3RhcnQnO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gW2RpdiwgcERpdiwgcC5nYW1lYm9hcmQuc3F1YXJlc107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgZ2FtZSBmcm9tICcuL2NvbnRyb2wvZ2FtZSc7XG5cbmdhbWUuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9