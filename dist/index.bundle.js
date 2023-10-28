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

body {
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
  background-color: #8715e4;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;EACZ,SAAS;EACT,WAAW;AACb;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["html {\n  background-color: black;\n  color: white;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  padding-top: 80px;\n}\n\n#startMenu, #placers {\n  align-items: center;\n  background-color: #727272;\n  border: solid white 1px;\n  display: flex;\n  gap: 30px;\n  justify-content: space-evenly;\n  padding: 20px;\n}\n\n.gameboard {\n  max-width: 520px;\n  padding: 0;\n}\n\n.placer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.rotated {\n  flex-direction: row;\n}\n\n\n.square {\n  background-color: #000062;\n  border: solid white 1px;\n  cursor: crosshair;\n  display: inline-block;\n  height: 50px;\n  margin: 0;\n  width: 50px;\n}\n\n.enemy:hover {\n  background-color: lightseagreen;\n}\n\n.square.attacked {\n  background-color: #020025;\n}\n\n.square.ship {\n  background-color: #393939;\n}\n\n.attacked.ship {\n  background-color: #e41515;\n}\n\n.attacked.ship.sunk {\n  background-color: #8715e4;\n}"],"sourceRoot":""}]);
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
    if (!enemy.gameboard.squares[coord].attacked) {
      const ship = enemy.gameboard.recieveAttack(coord);
      if (ship && ship.isSunk()) {
        console.log(`${this.name} has sunk ${enemy.name}'s ${ship.id}`);
      }

      if (enemy.gameboard.allSunk()) {
        console.log(`Game Over! ${this.name} wins!`);
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




const init = () => {
  const menuPlayer = new _class_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('start');
  const menu = (0,_ui_loadMenu__WEBPACK_IMPORTED_MODULE_1__["default"])(menuPlayer);
  document.body.appendChild(menu[0]);
  document.body.appendChild(menu[1]);
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

  const boards = (0,_ui_loadBoards__WEBPACK_IMPORTED_MODULE_2__["default"])(p1, p2);
  document.body.innerHTML = '';
  document.body.appendChild(boards[0]);
  document.body.appendChild(boards[1]);
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
            if (ship.isSunk()) square.classList.add('sunk');
          }
          const coord = p.randomFire(e);
          document.getElementById(`${e.name}${coord}`)
              .classList.add('attacked');
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
  const ships = [['Carrier', 5], ['Battleship', 4],
    ['Cruiser', 3], ['Submarine', 3], ['Destroyer', 2]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNoRnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QywrQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29udHJvbC9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvbG9hZEJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2xvYWRNZW51LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4jc3RhcnRNZW51LCAjcGxhY2VycyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjcyNzI7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBsYWNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm90YXRlZCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cblxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjI7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5lbmVteTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG59XG5cbi5zcXVhcmUuYXR0YWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMDI1O1xufVxuXG4uc3F1YXJlLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4uYXR0YWNrZWQuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDE1MTU7XG59XG5cbi5hdHRhY2tlZC5zaGlwLnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODcxNWU0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbn1cXG5cXG4jc3RhcnRNZW51LCAjcGxhY2VycyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3MjtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBtYXgtd2lkdGg6IDUyMHB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnBsYWNlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlZCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjI7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5lbmVteTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbn1cXG5cXG4uc3F1YXJlLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjAwMjU7XFxufVxcblxcbi5zcXVhcmUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xcbn1cXG5cXG4uYXR0YWNrZWQuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxNTE1O1xcbn1cXG5cXG4uYXR0YWNrZWQuc2hpcC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzE1ZTQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuLyoqXG4gKiBAbW9kdWxlIEdhbWVib2FyZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAvKipcbiAgICogQ29sdW1ucywgbGV0dGVycyBBLUpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29scyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zcXVhcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7dGhpcy5jb2xzW2pdfSR7aSsxfWA7XG4gICAgICAgIHRoaXMuc3F1YXJlc1trZXldID0ge2hhc1NoaXA6IGZhbHNlfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjaWV2ZSBhdHRhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvb3JkXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICByZWNpZXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gdGhpcy5zcXVhcmVzW2Nvb3JkXTtcbiAgICBzcXVhcmUuYXR0YWNrZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNoaXAgPSBzcXVhcmUuaGFzU2hpcDtcbiAgICBpZiAoc2hpcCkge1xuICAgICAgY29uc3QgY29sID0gdGhpcy5jb2xzLmluZGV4T2YoY29vcmRbMF0pO1xuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY29vcmRbMV0pO1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBvbiB3aGljaCBzcXVhcmUgc2hpcCBpcyBoaXRcbiAgICAgIC8vIGlmIHNoaXAgaXMgcm90YXRlZFxuICAgICAgaWYgKHNoaXAucm90YXRlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzID0gYCR7dGhpcy5jb2xzW2ldfSR7cm93fWA7XG4gICAgICAgICAgaWYgKHRoaXMuc3F1YXJlc1tzXS5oYXNTaGlwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zcXVhcmVzW3NdLmhhc1NoaXAuaWQgPT09IHNoaXAuaWQpIHtcbiAgICAgICAgICAgICAgaWYgKHMgPT09IGNvb3JkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3RhcnQgZnJvbSAxIHNpbmNlIEEwIGV0YyBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHMgPSBgJHt0aGlzLmNvbHNbY29sXX0ke2l9YDtcbiAgICAgICAgICBpZiAodGhpcy5zcXVhcmVzW3NdLmhhc1NoaXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNxdWFyZXNbc10uaGFzU2hpcC5pZCA9PT0gc2hpcC5pZCkge1xuICAgICAgICAgICAgICBpZiAocyA9PT0gY29vcmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaGlwLmhpdChjb3VudCk7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFsbCBzaGlwcyBhcmUgc3Vua1xuICAgKiBAcmV0dXJuIHtib29sfVxuICAgKi9cbiAgYWxsU3VuaygpIHtcbiAgICBjb25zdCBzaGlwcyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGNvbnN0IGNvb3JkIGluIHRoaXMuc3F1YXJlcykge1xuICAgICAgaWYgKHRoaXMuc3F1YXJlc1tjb29yZF0uaGFzU2hpcCkge1xuICAgICAgICBzaGlwcy5hZGQodGhpcy5zcXVhcmVzW2Nvb3JkXS5oYXNTaGlwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNxdWFyZVxuICAgKiBAcGFyYW0ge1NoaXB9IHNoaXBcbiAgICogQHBhcmFtIHtib29sfSByb3RhdGVkXG4gICAqIEByZXR1cm4ge2Jvb2x9XG4gICAqL1xuICBwbGFjZVNoaXAoc3F1YXJlLCBzaGlwKSB7XG4gICAgaWYgKCFzcXVhcmUpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHMuaW5kZXhPZihzcXVhcmVbMF0pO1xuICAgIGxldCByb3c7XG4gICAgaWYgKHNxdWFyZVsyXSkgcm93ID0gcGFyc2VJbnQoc3F1YXJlWzFdK3NxdWFyZVsyXSk7XG4gICAgZWxzZSByb3cgPSBwYXJzZUludChzcXVhcmVbMV0pO1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGlmIChzaGlwLnJvdGF0ZWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wrc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gYCR7dGhpcy5jb2xzW2ldfSR7cm93fWA7XG4gICAgICAgIGNvb3Jkcy5wdXNoKHMpO1xuICAgICAgICAvLyB0aGlzLnNxdWFyZXNbc10uaGFzU2hpcCA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3crc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gYCR7dGhpcy5jb2xzW2NvbF19JHtpfWA7XG4gICAgICAgIGNvb3Jkcy5wdXNoKHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLnNxdWFyZXNbY29vcmRzW2ldXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3F1YXJlc1tjb29yZHNbaV1dLmhhc1NoaXApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zcXVhcmVzW2Nvb3Jkc1tpXV0uaGFzU2hpcCA9IHNoaXA7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsYWNlIFNoaXBzIHJhbmRvbWx5XG4gICAqIEByZXR1cm4ge2Jvb2x9XG4gICAqL1xuICByYW5kb21QbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gW1snQ2FycmllcicsIDVdLCBbJ0JhdHRsZXNoaXAnLCA0XSxcbiAgICAgIFsnQ3J1aXNlcicsIDNdLCBbJ1N1Ym1hcmluZScsIDNdLCBbJ0Rlc3Ryb3llcicsIDJdXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgY29uc3Qgcm90ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcHNbaV1bMF0sIHNoaXBzW2ldWzFdLCByb3QpO1xuICAgICAgaWYgKCF0aGlzLnBsYWNlU2hpcChgJHt0aGlzLmNvbHNbY29sXX0ke3Jvd31gLCBzaGlwKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21QbGFjZVNoaXBzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcbi8qKlxuICogQG1vZHVsZSBQbGF5ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7Ym9vbH0gW2FpPWZhbHNlXVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZSwgYWkgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5haSA9IGFpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb29yZFxuICAgKiBAcGFyYW0ge1BsYXllcn0gZW5lbXlcbiAgICogQHJldHVybiB7Ym9vbH1cbiAgICovXG4gIGZpcmUoY29vcmQsIGVuZW15KSB7XG4gICAgaWYgKCFlbmVteS5nYW1lYm9hcmQuc3F1YXJlc1tjb29yZF0uYXR0YWNrZWQpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBlbmVteS5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZCk7XG4gICAgICBpZiAoc2hpcCAmJiBzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gaGFzIHN1bmsgJHtlbmVteS5uYW1lfSdzICR7c2hpcC5pZH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZW15LmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEdhbWUgT3ZlciEgJHt0aGlzLm5hbWV9IHdpbnMhYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BsYXllcn0gZW5lbXlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgcmFuZG9tRmlyZShlbmVteSkge1xuICAgIGNvbnN0IGNvbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICBjb25zdCBjb29yZCA9IGAke2NvbHNbY29sXX0ke3Jvd31gO1xuICAgIGlmICghdGhpcy5maXJlKGNvb3JkLCBlbmVteSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbUZpcmUoZW5lbXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgU2hpcFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgU2hpcCBvZiBsZW5ndGggblxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtpbnR9IGxlbmd0aFxuICAgKiBAcGFyYW0ge2Jvb2x9IHJvdGF0ZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkLCBsZW5ndGgsIHJvdGF0ZWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5yb3RhdGVkID0gcm90YXRlZDtcbiAgICB0aGlzLmhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBoaXQgb24gaW5kZXggblxuICAgKiBAcGFyYW0ge2ludH0gblxuICAgKi9cbiAgaGl0KG4pIHtcbiAgICB0aGlzLmhpdHNbbl0gPSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2x9XG4gICAqL1xuICBpc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaGl0c1tpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9jbGFzcy9QbGF5ZXInO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4uL3VpL2xvYWRNZW51JztcbmltcG9ydCBsb2FkQm9hcmRzIGZyb20gJy4uL3VpL2xvYWRCb2FyZHMnO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBtZW51UGxheWVyID0gbmV3IFBsYXllcignc3RhcnQnKTtcbiAgY29uc3QgbWVudSA9IGxvYWRNZW51KG1lbnVQbGF5ZXIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVbMF0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVbMV0pO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwbGFjZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxhY2VyJyk7XG4gICAgaWYgKCFwbGFjZXJzLmxlbmd0aCkgc3RhcnQobWVudVsyXSk7XG4gICAgZWxzZSBzdGFydCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0YXJ0ID0gKHNxdWFyZXMgPSBudWxsKSA9PiB7XG4gIGNvbnN0IHAxID0gbmV3IFBsYXllcigncDEnKTtcbiAgY29uc3QgcDIgPSBuZXcgUGxheWVyKCdwMicsIHRydWUpO1xuXG4gIGlmIChzcXVhcmVzKSBwMS5nYW1lYm9hcmQuc3F1YXJlcyA9IHNxdWFyZXM7XG4gIGVsc2UgcDEuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlU2hpcHMoKTtcbiAgcDIuZ2FtZWJvYXJkLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICBjb25zdCBib2FyZHMgPSBsb2FkQm9hcmRzKHAxLCBwMik7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmRzWzBdKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib2FyZHNbMV0pO1xufTtcblxuZXhwb3J0IHtpbml0LCBzdGFydH07XG4iLCIvKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwXG4gKiBAcGFyYW0ge1BsYXllcn0gZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBkcmF3Qm9hcmQgPSAocCwgZSkgPT4ge1xuICBjb25zdCBwQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcEJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuICBjb25zdCBrZXlBcnIgPSBPYmplY3Qua2V5cyhwLmdhbWVib2FyZC5zcXVhcmVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoZSkgc3F1YXJlLmlkID0gYCR7cC5uYW1lfSR7a2V5QXJyW2ldfWA7XG4gICAgZWxzZSBzcXVhcmUuaWQgPSBrZXlBcnJbaV07XG4gICAgaWYgKHAuYWkpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdlbmVteScpO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZS5maXJlKGtleUFycltpXSwgcCkpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgICAgICBjb25zdCBzaGlwID0gcC5nYW1lYm9hcmQuc3F1YXJlc1trZXlBcnJbaV1dLmhhc1NoaXA7XG4gICAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY29vcmQgPSBwLnJhbmRvbUZpcmUoZSk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS5uYW1lfSR7Y29vcmR9YClcbiAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgaWYgKHAuZ2FtZWJvYXJkLnNxdWFyZXNba2V5QXJyW2ldXS5hdHRhY2tlZCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgfVxuICAgIGlmICghcC5haSAmJiBwLmdhbWVib2FyZC5zcXVhcmVzW2tleUFycltpXV0uaGFzU2hpcCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9XG4gICAgc3F1YXJlLmlubmVyVGV4dCA9IGtleUFycltpXTtcbiAgICBwQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuICByZXR1cm4gcEJvYXJkO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcDFcbiAqIEBwYXJhbSB7UGxheWVyfSBwMlxuICogQHJldHVybiB7Kn1cbiAqL1xuY29uc3QgbG9hZEJvYXJkcyA9IChwMSwgcDIgPSBudWxsKSA9PiB7XG4gIGNvbnN0IHAxQm9hcmQgPSBkcmF3Qm9hcmQocDEsIHAyKTtcbiAgaWYgKHAyKSB7XG4gICAgY29uc3QgcDJCb2FyZCA9IGRyYXdCb2FyZChwMiwgcDEpO1xuICAgIHJldHVybiBbcDFCb2FyZCwgcDJCb2FyZF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHAxQm9hcmQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCb2FyZHM7XG4iLCJpbXBvcnQgbG9hZEJvYXJkcyBmcm9tICcuL2xvYWRCb2FyZHMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vY2xhc3MvU2hpcCc7XG5cbmNvbnN0IGluaXREcmFnbkRyb3AgPSAoc3F1YXJlLCBwKSA9PiB7XG4gIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcXVhcmUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICAgIHNxdWFyZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3Qgc2hvdCA9IHAuZ2FtZWJvYXJkLnBsYWNlU2hpcChzcXVhcmVzW2ldLmlkLFxuICAgICAgICAgICAgICBuZXcgU2hpcChkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdKSk7XG4gICAgICAgICAgaWYgKHNob3QpIHNxdWFyZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBzcXVhcmUgaW4gcC5nYW1lYm9hcmQuc3F1YXJlcykge1xuICAgICAgICAgIGlmIChwLmdhbWVib2FyZC5zcXVhcmVzW3NxdWFyZV0uaGFzU2hpcCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3F1YXJlKS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcFBsYWNlcnMgPSAocCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFtbJ0NhcnJpZXInLCA1XSwgWydCYXR0bGVzaGlwJywgNF0sXG4gICAgWydDcnVpc2VyJywgM10sIFsnU3VibWFyaW5lJywgM10sIFsnRGVzdHJveWVyJywgMl1dO1xuICBjb25zdCBwbGFjZXJzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwbGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBsYWNlci5jbGFzc05hbWUgPSAncGxhY2VyJztcbiAgICBwbGFjZXIuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICBwbGFjZXIuc2V0QXR0cmlidXRlKCdkYXRhJywgYFske3NoaXBzW2ldWzBdfSwgJHtzaGlwc1tpXVsxXX0sIGZhbHNlXWApO1xuICAgIC8vIGFkZCBldmVudGxpc3RlbmVycyBmb3IgZHJhZ2dpbmcgJiBkcm9wcGluZ1xuICAgIGluaXREcmFnbkRyb3AocGxhY2VyLCBwKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMV07IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAgc3F1YXJlJztcbiAgICAgIHBsYWNlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBwbGFjZXJzLnB1c2gocGxhY2VyKTtcbiAgfVxuICByZXR1cm4gcGxhY2Vycztcbn07XG5cbi8vIG1vZHVsZVxuY29uc3QgbG9hZE1lbnUgPSAocCkgPT4ge1xuICBwLmdhbWVib2FyZC5pbml0KCk7XG4gIGNvbnN0IGJvYXJkID0gbG9hZEJvYXJkcyhwKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlkID0gJ3N0YXJ0TWVudSc7XG4gIHBEaXYuaWQgPSAncGxhY2Vycyc7XG4gIGRpdi5hcHBlbmRDaGlsZChib2FyZCk7XG4gIGNvbnN0IHNoaXBQbGFjZXJzID0gY3JlYXRlU2hpcFBsYWNlcnMocCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUGxhY2Vycy5sZW5ndGg7IGkrKykge1xuICAgIHNoaXBQbGFjZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2hpcFBsYWNlcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgaWYgKGRhdGFbMl0pIGRhdGFbMl0gPSBmYWxzZTtcbiAgICAgIGVsc2UgZGF0YVsyXSA9IHRydWU7XG4gICAgICBzaGlwUGxhY2Vyc1tpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBzaGlwUGxhY2Vyc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGVkJyk7XG4gICAgfSk7XG4gICAgcERpdi5hcHBlbmRDaGlsZChzaGlwUGxhY2Vyc1tpXSk7XG4gIH1cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5pZCA9ICdzdGFydEJ1dHRvbic7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnU3RhcnQnO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gW2RpdiwgcERpdiwgcC5nYW1lYm9hcmQuc3F1YXJlc107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgZ2FtZSBmcm9tICcuL2NvbnRyb2wvZ2FtZSc7XG5cbmdhbWUuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9