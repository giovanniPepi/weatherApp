/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\n  font-weight: 500;\n  font-style: medium;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');\n  font-weight: 600;\n  font-style: semibold;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');\n  font-weight: 700;\n  font-style: bold;\n}\nbody {\n  margin: 0;\n  height: 100vh;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  /* tries to adapt to screen sizes*/\n  --fontSize: calc(0.5rem + 0.2vw + 0.5vh);\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHightlight: 2.5rem;\n}\n/* body * {\n  border: 0.1px solid red;\n} */\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-size: var(--fontSize);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n  font-style: medium;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: var(--sidePaddings);\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 350px);\n  grid-template-rows: repeat(3, 1fr);\n  padding: 1rem;\n  gap: 3rem;\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 14rem;\n  height: 13rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg {\n  width: 1.7rem;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n}\n\n/*Current weather/search area */\n/* limits growth when alerts are present */\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.7rem;\n}\n.alerts {\n  max-width: 14vw;\n}\n.currentWeather {\n  width: 13vw;\n  min-width: 13rem;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n#search {\n  all: unset;\n  padding: 0.3rem;\n  height: 1.2rem;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--fontSizeHightlight);\n}\n.name {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.date {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.feelsLike {\n  font-style: italic;\n  font-size: 0.9rem;\n}\n/*Limit alerts font */\n.alerts {\n  font-size: 0.9rem;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.25rem;\n}\n\n/* wind adjusts */\n.windData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kCAAkC;EAClC,wCAAwC;EACxC,+BAA+B;EAC/B,4BAA4B;AAC9B;AACA;;GAEG;AACH;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,0BAA0B;EAC1B,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;AACA,uBAAuB;AACvB;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,8CAA8C;EAC9C,kCAAkC;EAClC,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,aAAa;AACf;AACA,SAAS;AACT,0BAA0B;AAC1B;;EAEE,aAAa;AACf;;AAEA,oBAAoB;AACpB;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;;;EAGE,aAAa;AACf;;AAEA,+BAA+B;AAC/B,0CAA0C;AAC1C;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,oCAAoC;AACtC;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;AACA,qBAAqB;AACrB;EACE,iBAAiB;AACnB;AACA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;AACA,gCAAgC;AAChC;;EAEE,oBAAoB;AACtB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,oBAAoB;AACtB","sourcesContent":["@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\n  font-weight: 500;\n  font-style: medium;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');\n  font-weight: 600;\n  font-style: semibold;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');\n  font-weight: 700;\n  font-style: bold;\n}\nbody {\n  margin: 0;\n  height: 100vh;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  /* tries to adapt to screen sizes*/\n  --fontSize: calc(0.5rem + 0.2vw + 0.5vh);\n  --fontSizeSemiHighlight: 1.2rem;\n  --fontSizeHightlight: 2.5rem;\n}\n/* body * {\n  border: 0.1px solid red;\n} */\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-size: var(--fontSize);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n  font-style: medium;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: var(--sidePaddings);\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 350px);\n  grid-template-rows: repeat(3, 1fr);\n  padding: 1rem;\n  gap: 3rem;\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 14rem;\n  height: 13rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg {\n  width: 1.7rem;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n}\n\n/*Current weather/search area */\n/* limits growth when alerts are present */\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.7rem;\n}\n.alerts {\n  max-width: 14vw;\n}\n.currentWeather {\n  width: 13vw;\n  min-width: 13rem;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n#search {\n  all: unset;\n  padding: 0.3rem;\n  height: 1.2rem;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--fontSizeHightlight);\n}\n.name {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.date {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.feelsLike {\n  font-style: italic;\n  font-size: 0.9rem;\n}\n/*Limit alerts font */\n.alerts {\n  font-size: 0.9rem;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.25rem;\n}\n\n/* wind adjusts */\n.windData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/img/icons/binoculars.svg":
/*!**************************************!*\
  !*** ./src/img/icons/binoculars.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M11,6H13V13H11V6M9,20A1,1 0 0,1 8,21H5A1,1 0 0,1 4,20V15L6,6H10V13A1,1 0 0,1 9,14V20M10,5H7V3H10V5M15,20V14A1,1 0 0,1 14,13V6H18L20,15V20A1,1 0 0,1 19,21H16A1,1 0 0,1 15,20M14,5V3H17V5H14Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/cloud-percent.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/cloud-percent.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.03M9.45 9.03C10.23 9.03 10.87 9.67 10.87 10.45S10.23 11.87 9.45 11.87 8.03 11.23 8.03 10.45 8.67 9.03 9.45 9.03M14.55 16.97C13.77 16.97 13.13 16.33 13.13 15.55S13.77 14.13 14.55 14.13 15.97 14.77 15.97 15.55 15.33 16.97 14.55 16.97M9.2 17L8 15.8L14.8 9L16 10.2L9.2 17Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/gauge.svg":
/*!*********************************!*\
  !*** ./src/img/icons/gauge.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/magnify.svg":
/*!***********************************!*\
  !*** ./src/img/icons/magnify.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/snowflake.svg":
/*!*************************************!*\
  !*** ./src/img/icons/snowflake.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/thermometer-chevron-down.svg":
/*!****************************************************!*\
  !*** ./src/img/icons/thermometer-chevron-down.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M17.41 12.17L14.24 9L12.83 10.41L17.41 15L22 10.41L20.58 9M10 13V5C10 3.34 8.66 2 7 2S4 3.34 4 5V13C1.79 14.66 1.34 17.79 3 20S7.79 22.66 10 21 12.66 16.21 11 14C10.72 13.62 10.38 13.28 10 13M7 4C7.55 4 8 4.45 8 5V8H6V5C6 4.45 6.45 4 7 4Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/thermometer-chevron-up.svg":
/*!**************************************************!*\
  !*** ./src/img/icons/thermometer-chevron-up.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M17.41 11.83L20.58 15L22 13.59L17.41 9L12.82 13.59L14.24 15L17.41 11.83M10 13V5C10 3.34 8.66 2 7 2S4 3.34 4 5V13C1.79 14.66 1.34 17.79 3 20S7.79 22.66 10 21 12.66 16.21 11 14C10.72 13.62 10.38 13.28 10 13M7 4C7.55 4 8 4.45 8 5V8H6V5C6 4.45 6.45 4 7 4Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/thermometer-high.svg":
/*!********************************************!*\
  !*** ./src/img/icons/thermometer-high.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5H11A1 1 0 0 1 12 4Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/water-outline.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/water-outline.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-cloudy.svg":
/*!******************************************!*\
  !*** ./src/img/icons/weather-cloudy.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-night.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/weather-night.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-pouring.svg":
/*!*******************************************!*\
  !*** ./src/img/icons/weather-pouring.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-rainy.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/weather-rainy.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-snowy.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/weather-snowy.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-sunny-off.svg":
/*!*********************************************!*\
  !*** ./src/img/icons/weather-sunny-off.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M22.11 21.46L2.39 1.73L1.11 3L4.97 6.86L3.34 7L5.11 10.79C5.25 10 5.5 9.24 5.94 8.5C6 8.36 6.13 8.24 6.22 8.11L7.66 9.55C7.25 10.27 7 11.11 7 12C7 14.76 9.24 17 12 17C12.9 17 13.73 16.75 14.45 16.34L20.84 22.73L22.11 21.46M12 15C10.34 15 9 13.66 9 12C9 11.67 9.07 11.36 9.17 11.06L12.94 14.83C12.64 14.93 12.33 15 12 15M18.05 8.5C17.63 7.78 17.1 7.15 16.5 6.64L20.65 7L18.88 10.79C18.74 10 18.47 9.23 18.05 8.5M12 7C14.76 7 17 9.24 17 12C17 12.54 16.89 13.05 16.74 13.54L15 11.78C14.87 10.3 13.7 9.13 12.22 9L10.47 7.27C10.95 7.11 11.46 7 12 7M12 5C11.16 5 10.35 5.15 9.61 5.42L12 2L14.39 5.42C13.65 5.15 12.84 5 12 5M18.87 13.21L20.64 17L20.24 17.04L18.25 15.05C18.54 14.45 18.76 13.84 18.87 13.21M12 19C12.82 19 13.63 18.83 14.37 18.56L12 22L9.59 18.56C10.33 18.83 11.14 19 12 19M5.95 15.5C6.37 16.24 6.91 16.86 7.5 17.37L3.36 17L5.12 13.23C5.26 14 5.53 14.78 5.95 15.5Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-sunny.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/weather-sunny.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/weather-windy.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/weather-windy.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z\"></path></svg>"

/***/ }),

/***/ "./src/img/icons/white-balance-sunny.svg":
/*!***********************************************!*\
  !*** ./src/img/icons/white-balance-sunny.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13\"></path></svg>"

/***/ }),

/***/ "./src/capitalizeFirst.js":
/*!********************************!*\
  !*** ./src/capitalizeFirst.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const capitalizeFirst = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capitalizeFirst);


/***/ }),

/***/ "./src/convertToKm.js":
/*!****************************!*\
  !*** ./src/convertToKm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertToKm = (m) => {
  const kmH = (m * 3.6).toFixed(1);
  return kmH;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertToKm);


/***/ }),

/***/ "./src/getDate.js":
/*!************************!*\
  !*** ./src/getDate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getDate = (ms) => {
  const date = new Date();
  return date.toDateString().slice(0, 11);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDate);


/***/ }),

/***/ "./src/getDom.js":
/*!***********************!*\
  !*** ./src/getDom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getWeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherAPI */ "./src/getWeatherAPI.js");
/* harmony import */ var _getStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStyle */ "./src/getStyle.js");
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDate */ "./src/getDate.js");
/* harmony import */ var _getHour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHour */ "./src/getHour.js");
/* harmony import */ var _getWindDir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindDir */ "./src/getWindDir.js");
/* harmony import */ var _getWindDir__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_getWindDir__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _verifyRain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verifyRain */ "./src/verifyRain.js");
/* harmony import */ var _verifySnow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifySnow */ "./src/verifySnow.js");
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");
/* harmony import */ var _convertToKm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./convertToKm */ "./src/convertToKm.js");
/* harmony import */ var _getFixedNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getFixedNumber */ "./src/getFixedNumber.js");
/* harmony import */ var _processDailyData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./processDailyData */ "./src/processDailyData.js");
/* harmony import */ var _capitalizeFirst__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capitalizeFirst */ "./src/capitalizeFirst.js");
/* harmony import */ var _verifyAlerts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verifyAlerts */ "./src/verifyAlerts.js");
/* harmony import */ var _setWeatherIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setWeatherIcon */ "./src/setWeatherIcon.js");















const getDom = (lat, lon, loc, country) => {
  // queries
  const name = document.querySelector('.name');
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const temp = document.querySelector('.temp');
  const feelsLike = document.querySelector('.feelsLike');
  const humidity = document.querySelector('.humidity');
  const uv = document.querySelector('.uv');
  const pressure = document.querySelector('.pressure');
  const sunrise = document.querySelector('.sunrise');
  const sunset = document.querySelector('.sunset');
  const visibility = document.querySelector('.visibility');
  const weather = document.querySelector('.weather');
  const windDeg = document.querySelector('.windDeg');
  const windSpeed = document.querySelector('.windSpeed');
  const clouds = document.querySelector('.clouds');
  const rain1h = document.querySelector('.rain1h');
  const rain1hCont = document.querySelector('.rain1hCont');
  const snow1h = document.querySelector('.snow1h');
  const snow1hCont = document.querySelector('.snow1hCont');
  const daily = document.querySelector('.daily');
  const alerts = document.querySelector('.alerts');

  // writing to DOM
  const writeWeatherData = async () => {
    try {
      const recData = await (0,_getWeatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(lat, lon, country);
      console.log('Onecall API: ', recData);

      // unit conversion before writing
      // slices out seconds, keep am/PM
      const sunriseTime = `${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunrise).slice(
        0,
        4
      )} ${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunrise).slice(7, 10)}`;

      const sunsetTime = `${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunset).slice(
        0,
        4
      )} ${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunset).slice(7, 10)}`;
      const windSpeedKm = (0,_convertToKm__WEBPACK_IMPORTED_MODULE_8__["default"])(recData.current.wind_speed);

      // shows current hour without seconds
      const nowHour = (0,_getNowTime__WEBPACK_IMPORTED_MODULE_7__["default"])(recData.timezone).toString().slice(16, 21);
      const timeDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_2__["default"])();

      // main info writing
      const windDir = _getWindDir__WEBPACK_IMPORTED_MODULE_4___default()(recData.current.wind_deg);
      const tempRound = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(recData.current.temp, 1);
      const feelRound = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(recData.current.feels_like, 1);
      name.textContent = loc;
      date.textContent = timeDate;
      time.textContent = nowHour;
      temp.textContent = `${tempRound} ºC`;
      feelsLike.textContent = `Feels like ${feelRound} ºC`;
      humidity.textContent = `Humidity: ${recData.current.humidity} %`;
      uv.textContent = `UV Index: ${(0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(recData.current.uvi, 0)}`;
      pressure.textContent = `Pressure: ${recData.current.pressure} hPa`;
      sunrise.textContent = `Sunrise: ${sunriseTime}`;
      sunset.textContent = `Sunset: ${sunsetTime}`;
      visibility.textContent = `Visibility: ${
        recData.current.visibility / 1000
      } km`;
      weather.textContent = (0,_capitalizeFirst__WEBPACK_IMPORTED_MODULE_11__["default"])(
        recData.current.weather[0].description
      );
      windDeg.textContent = `Direction: ${windDir}`;
      windSpeed.textContent = `Speed: ${windSpeedKm} km/h`;
      clouds.textContent = `Cloud coverage: ${recData.current.clouds} %`;

      // check if rain and snow data are present and shows it
      if ((0,_verifyRain__WEBPACK_IMPORTED_MODULE_5__["default"])(recData.current)) {
        rain1h.textContent = `Rain volume in the last hour: ${recData.current.rain['1h']} mm`;
        rain1hCont.style.display = 'flex';
      } else {
        rain1h.textContent = '';
        rain1hCont.style.display = 'none';
      }
      if ((0,_verifySnow__WEBPACK_IMPORTED_MODULE_6__["default"])(recData.current)) {
        snow1h.textContent = `Snow volume in the last hour: ${recData.current.snow['1h']} mm`;
        snow1hCont.style.display = 'flex';
      } else {
        snow1h.textContent = '';
        snow1hCont.style.display = 'none';
      }

      // check for alerts and cleans afterwards
      if ((0,_verifyAlerts__WEBPACK_IMPORTED_MODULE_12__["default"])(recData)) {
        alerts.textContent = recData.alerts[0].description;
      } else alerts.textContent = '';

      // deletes previous values before writing new ones
      const previousContainer = document.querySelector('.dayContainer');
      if (previousContainer !== null) {
        daily.innerHTML = '';
      }

      // forecast
      // process daily forecast into a neat Array
      const dailyTemps = (0,_processDailyData__WEBPACK_IMPORTED_MODULE_10__["default"])(recData.daily);

      // write each day forecasted to DOM
      for (const day of dailyTemps) {
        const dayContainer = document.createElement('div');
        dayContainer.setAttribute('class', 'dayContainer');

        const minContainer = document.createElement('div');
        const dayMin = document.createElement('div');
        const dayMinValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[0], 0);
        dayMin.textContent = `${dayMinValue} ºC`;
        const minTempSvg = document.createElement('svg');
        minTempSvg.setAttribute('class', 'minTempSvg');

        const maxContainer = document.createElement('div');
        const dayMax = document.createElement('div');
        const dayMaxValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[1], 0);
        dayMax.textContent = `${dayMaxValue} ºC`;
        const maxTempSvg = document.createElement('div');
        maxTempSvg.setAttribute('class', 'maxTempSvg');

        const uviContainer = document.createElement('div');
        const uviMax = document.createElement('div');
        const uviMaxValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[2], 0);
        uviMax.textContent = `UV ${uviMaxValue}`;
        const uvigSvg = document.createElement('svg');
        uvigSvg.setAttribute('class', 'uvSvg');

        const rainContainer = document.createElement('div');
        const rainProb = document.createElement('div');
        const rainProbValue = `${(day[3] * 100).toFixed(0)} %`;
        rainProb.textContent = rainProbValue;
        const rainSvg = document.createElement('svg');
        rainSvg.setAttribute('class', 'rainPercent');

        const weatherContainer = document.createElement('div');
        const weatherDesc = document.createElement('div');
        const weatherDescValue = day[4];
        weatherDesc.textContent = (0,_capitalizeFirst__WEBPACK_IMPORTED_MODULE_11__["default"])(weatherDescValue);
        // icon
        const weatherIcon = document.createElement('svg');
        let weatherIconValue = day[6];
        weatherIconValue = (0,_capitalizeFirst__WEBPACK_IMPORTED_MODULE_11__["default"])(weatherIconValue);
        // gets SVG for forecasted data
        weatherIcon.innerHTML = (0,_setWeatherIcon__WEBPACK_IMPORTED_MODULE_13__["default"])(
          weatherIconValue,
          recData.timezone,
          // true because it's a future date
          true
        );

        const dayDate = document.createElement('div');
        dayDate.setAttribute('class', 'dayDate');
        const dayDateValue = day[5];
        dayDate.textContent = dayDateValue;

        // appends
        minContainer.appendChild(minTempSvg);
        minContainer.appendChild(dayMin);
        maxContainer.appendChild(maxTempSvg);
        maxContainer.appendChild(dayMax);
        uviContainer.appendChild(uvigSvg);
        uviContainer.appendChild(uviMax);
        rainContainer.appendChild(rainSvg);
        rainContainer.appendChild(rainProb);
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherDesc);

        dayContainer.appendChild(dayDate);
        dayContainer.appendChild(weatherContainer);
        dayContainer.appendChild(minContainer);
        dayContainer.appendChild(maxContainer);
        dayContainer.appendChild(uviContainer);
        dayContainer.appendChild(rainContainer);

        daily.appendChild(dayContainer);
      }

      // calls styling(variable icons)
      (0,_getStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(recData.current.weather[0].main, recData.timezone);
    } catch (err) {
      console.log(err);
      name.textContent = 'Oooops, there seems to be a network error!';
    }
  };
  writeWeatherData();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDom);


/***/ }),

/***/ "./src/getEventListeners.js":
/*!**********************************!*\
  !*** ./src/getEventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDom */ "./src/getDom.js");
/* harmony import */ var _getGeoAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getGeoAPI */ "./src/getGeoAPI.js");



const getEventListeners = () => {
  const search = document.querySelector('#search');
  const searchBtn = document.querySelector('.go');

  // store searchs
  let resultArray = [];

  // queries coordinates, stores then, call for getDOM to change what's displayed
  const processInpt = async (value) => {
    try {
      // clean stored
      resultArray = [];
      const geoData = await (0,_getGeoAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
      console.log('Geo data API: ', geoData);

      // generates a new array with concat name and coords
      const geoData0 = [];
      geoData0.push(`${geoData[0].name}, ${geoData[0].country}`);
      geoData0.push(`${geoData[0].lat}`);
      geoData0.push(`${geoData[0].lon}`);
      geoData0.push(`${geoData[0].country}`);

      // store for future use
      resultArray.push(geoData0);

      // calls for rewriting the DOM with new city, passes country to select language
      (0,_getDom__WEBPACK_IMPORTED_MODULE_0__["default"])(
        `${geoData[0].lat}`,
        `${geoData[0].lon}`,
        resultArray[0][0],
        `${geoData[0].country}`
      );

      console.log(geoData0);
    } catch (err) {
      console.log(err);
    }
  };

  // search on enter
  const processKbdInput = (key) => {
    if (key === 'Enter') processInpt(search.value);
    else search.focus();
  };

  searchBtn.addEventListener('click', () => processInpt(search.value));
  window.addEventListener('keydown', (e) => processKbdInput(e.key));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEventListeners);


/***/ }),

/***/ "./src/getFixedNumber.js":
/*!*******************************!*\
  !*** ./src/getFixedNumber.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getFixedNumber = (n, spaces) => {
  const fixedN = n.toFixed(spaces);
  return fixedN;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFixedNumber);


/***/ }),

/***/ "./src/getGeoAPI.js":
/*!**************************!*\
  !*** ./src/getGeoAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getGeoAPI = async (location) => {
  const geoResquest = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=833c261d19926d13cc578d79528d9d64`,
    {
      mode: 'cors'
    }
  );
  const received = await geoResquest.json();
  return received;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGeoAPI);


/***/ }),

/***/ "./src/getHour.js":
/*!************************!*\
  !*** ./src/getHour.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getHour = (ms) => {
  // unix epoch to date
  const newEpoch = ms * 1000;
  const date = new Date(newEpoch);
  return date.toLocaleTimeString();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHour);


/***/ }),

/***/ "./src/getNeatDate.js":
/*!****************************!*\
  !*** ./src/getNeatDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getNeatDate = (date) => {
  let newDate = new Date(date * 1000);
  newDate = newDate.toString().slice(4, 10);
  return newDate;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNeatDate);


/***/ }),

/***/ "./src/getNowTime.js":
/*!***************************!*\
  !*** ./src/getNowTime.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// strips seconds from localeTime
const getNowTime = (timezone) => {
  const nowHour = new Date(
    new Date().toLocaleString('en-US', { timeZone: `${timezone}` })
  );
  return nowHour;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNowTime);


/***/ }),

/***/ "./src/getStyle.js":
/*!*************************!*\
  !*** ./src/getStyle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icons/magnify.svg */ "./src/img/icons/magnify.svg");
/* harmony import */ var _img_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_icons_water_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icons/water-outline.svg */ "./src/img/icons/water-outline.svg");
/* harmony import */ var _img_icons_water_outline_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icons_water_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_icons_white_balance_sunny_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icons/white-balance-sunny.svg */ "./src/img/icons/white-balance-sunny.svg");
/* harmony import */ var _img_icons_white_balance_sunny_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_icons_white_balance_sunny_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_icons_gauge_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/icons/gauge.svg */ "./src/img/icons/gauge.svg");
/* harmony import */ var _img_icons_gauge_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_icons_gauge_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/icons/weather-sunny.svg */ "./src/img/icons/weather-sunny.svg");
/* harmony import */ var _img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_icons_weather_sunny_off_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/icons/weather-sunny-off.svg */ "./src/img/icons/weather-sunny-off.svg");
/* harmony import */ var _img_icons_weather_sunny_off_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_sunny_off_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_icons_binoculars_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/icons/binoculars.svg */ "./src/img/icons/binoculars.svg");
/* harmony import */ var _img_icons_binoculars_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_icons_binoculars_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_icons_cloud_percent_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/icons/cloud-percent.svg */ "./src/img/icons/cloud-percent.svg");
/* harmony import */ var _img_icons_cloud_percent_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_icons_cloud_percent_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/icons/weather-windy.svg */ "./src/img/icons/weather-windy.svg");
/* harmony import */ var _img_icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/icons/weather-pouring.svg */ "./src/img/icons/weather-pouring.svg");
/* harmony import */ var _img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/icons/weather-snowy.svg */ "./src/img/icons/weather-snowy.svg");
/* harmony import */ var _img_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_icons_thermometer_chevron_up_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/icons/thermometer-chevron-up.svg */ "./src/img/icons/thermometer-chevron-up.svg");
/* harmony import */ var _img_icons_thermometer_chevron_up_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_icons_thermometer_chevron_up_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_icons_thermometer_chevron_down_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/icons/thermometer-chevron-down.svg */ "./src/img/icons/thermometer-chevron-down.svg");
/* harmony import */ var _img_icons_thermometer_chevron_down_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_icons_thermometer_chevron_down_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/icons/weather-rainy.svg */ "./src/img/icons/weather-rainy.svg");
/* harmony import */ var _img_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_icons_thermometer_high_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/icons/thermometer-high.svg */ "./src/img/icons/thermometer-high.svg");
/* harmony import */ var _img_icons_thermometer_high_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_icons_thermometer_high_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _setWeatherIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setWeatherIcon */ "./src/setWeatherIcon.js");

















const getStyle = (currentWeather, time) => {
  const goBtn = document.querySelector('.go');
  const humiditySvg = document.querySelector('.humiditySvg');
  const pressSvg = document.querySelector('.pressSvg');
  const sunriseSvg = document.querySelector('.sunriseSvg');
  const sunsetSvg = document.querySelector('.sunsetSvg');
  const visibilitySvg = document.querySelector('.visibilitySvg');
  const cloudSvg = document.querySelector('.cloudSvg');
  const windSvg = document.querySelector('.windSvg');
  const rainSvg = document.querySelector('.rainSvg');
  const snowSvg = document.querySelector('.snowSvg');
  const weatherSvg = document.querySelector('.weatherSvg');
  const uvSvg = document.querySelectorAll('.uvSvg');
  const minTempSvg = document.querySelectorAll('.minTempSvg');
  const maxTempSvg = document.querySelectorAll('.maxTempSvg');
  const rainPercent = document.querySelectorAll('.rainPercent');
  const tempIcon = document.querySelector('.tempIcon');

  tempIcon.innerHTML = (_img_icons_thermometer_high_svg__WEBPACK_IMPORTED_MODULE_14___default());
  goBtn.innerHTML = (_img_icons_magnify_svg__WEBPACK_IMPORTED_MODULE_0___default());
  humiditySvg.innerHTML = (_img_icons_water_outline_svg__WEBPACK_IMPORTED_MODULE_1___default());
  pressSvg.innerHTML = (_img_icons_gauge_svg__WEBPACK_IMPORTED_MODULE_3___default());
  sunriseSvg.innerHTML = (_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_4___default());
  sunsetSvg.innerHTML = (_img_icons_weather_sunny_off_svg__WEBPACK_IMPORTED_MODULE_5___default());
  visibilitySvg.innerHTML = (_img_icons_binoculars_svg__WEBPACK_IMPORTED_MODULE_6___default());
  cloudSvg.innerHTML = (_img_icons_cloud_percent_svg__WEBPACK_IMPORTED_MODULE_7___default());
  windSvg.innerHTML = (_img_icons_weather_windy_svg__WEBPACK_IMPORTED_MODULE_8___default());
  rainSvg.innerHTML = (_img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_9___default());
  snowSvg.innerHTML = (_img_icons_weather_snowy_svg__WEBPACK_IMPORTED_MODULE_10___default());

  // shared icons with forecast
  uvSvg.forEach((e) => {
    e.innerHTML = (_img_icons_white_balance_sunny_svg__WEBPACK_IMPORTED_MODULE_2___default());
  });
  minTempSvg.forEach((e) => {
    e.innerHTML = (_img_icons_thermometer_chevron_down_svg__WEBPACK_IMPORTED_MODULE_12___default());
  });
  maxTempSvg.forEach((e) => {
    e.innerHTML = (_img_icons_thermometer_chevron_up_svg__WEBPACK_IMPORTED_MODULE_11___default());
  });
  rainPercent.forEach((e) => {
    e.innerHTML = (_img_icons_weather_rainy_svg__WEBPACK_IMPORTED_MODULE_13___default());
  });

  // process weather description icon passing through the received array, checks night
  weatherSvg.innerHTML = (0,_setWeatherIcon__WEBPACK_IMPORTED_MODULE_15__["default"])(currentWeather, time, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStyle);


/***/ }),

/***/ "./src/getWeatherAPI.js":
/*!******************************!*\
  !*** ./src/getWeatherAPI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeatherAPI = async (lat, lon, country) => {
  if (country === 'BR') {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=833c261d19926d13cc578d79528d9d64&units=metric&lang=pt_br`,
      {
        mode: 'cors'
      }
    );
    const receivedData = await response.json();
    return receivedData;
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=833c261d19926d13cc578d79528d9d64&units=metric`,
    {
      mode: 'cors'
    }
  );
  // Returns a promise that resolves with the result of parsing the response body text as JSON
  const receivedData = await response.json();
  return receivedData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherAPI);


/***/ }),

/***/ "./src/getWindDir.js":
/*!***************************!*\
  !*** ./src/getWindDir.js ***!
  \***************************/
/***/ ((module) => {

const getWindDir = (deg) => {
  let windDir;

  switch (true) {
    case deg < 40 || deg === 360:
      windDir = 'North';
      break;
    case deg >= 40 && deg < 90:
      windDir = 'Northeast';
      break;
    case deg >= 90 && deg < 135:
      windDir = 'East';
      break;
    case deg >= 135 && deg < 180:
      windDir = 'Southeast';
      break;
    case deg >= 180 && deg < 225:
      windDir = 'South';
      break;
    case deg >= 225 && deg < 270:
      windDir = 'Southwest';
      break;
    case deg >= 270 && deg < 315:
      windDir = 'West';
      break;
    case deg >= 315 && deg < 360:
      windDir = 'Northwest';
      break;
    default:
      windDir = 'Ooops...';
  }
  return windDir;
};
// JEST
module.exports = getWindDir;

// export default getWindDir;


/***/ }),

/***/ "./src/processDailyData.js":
/*!*********************************!*\
  !*** ./src/processDailyData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNeatDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNeatDate */ "./src/getNeatDate.js");


const processDailyData = (recArray) => {
  // pushes to a new array only data that we want
  const dailyTemps = [];
  recArray.forEach((day) =>
    dailyTemps.push([
      day.temp.min,
      day.temp.max,
      day.uvi,
      day.pop,
      day.weather[0].description,
      (0,_getNeatDate__WEBPACK_IMPORTED_MODULE_0__["default"])(day.dt),
      day.weather[0].main
    ])
  );
  return dailyTemps;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processDailyData);


/***/ }),

/***/ "./src/setWeatherIcon.js":
/*!*******************************!*\
  !*** ./src/setWeatherIcon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icons/weather-sunny.svg */ "./src/img/icons/weather-sunny.svg");
/* harmony import */ var _img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icons/weather-pouring.svg */ "./src/img/icons/weather-pouring.svg");
/* harmony import */ var _img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icons/weather-cloudy.svg */ "./src/img/icons/weather-cloudy.svg");
/* harmony import */ var _img_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/icons/weather-night.svg */ "./src/img/icons/weather-night.svg");
/* harmony import */ var _img_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_icons_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/icons/snowflake.svg */ "./src/img/icons/snowflake.svg");
/* harmony import */ var _img_icons_snowflake_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_icons_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");







const setWeatherIcon = (weather, time, future) => {
  // convert to hours to check night
  const timeNow = (0,_getNowTime__WEBPACK_IMPORTED_MODULE_5__["default"])(time).getHours();

  // night boolean check
  const condition1 = timeNow > 19;
  const condition2 = timeNow < 7;
  const night = condition1 || condition2;

  switch (weather) {
    case 'Clear':
      // future is used to show icons on forecast
      if (!night || future) return (_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0___default());
      return (_img_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3___default());
    case 'Rain':
      return (_img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_1___default());
    case 'Clouds':
      return (_img_icons_weather_cloudy_svg__WEBPACK_IMPORTED_MODULE_2___default());
    case 'Snow':
      return (_img_icons_snowflake_svg__WEBPACK_IMPORTED_MODULE_4___default());
    default:
      console.log('Different weather detected');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWeatherIcon);


/***/ }),

/***/ "./src/verifyAlerts.js":
/*!*****************************!*\
  !*** ./src/verifyAlerts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const verifyAlerts = (obj) => {
  const hasAlerts = Object.prototype.hasOwnProperty.call(obj, 'alerts');
  return hasAlerts;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyAlerts);


/***/ }),

/***/ "./src/verifyRain.js":
/*!***************************!*\
  !*** ./src/verifyRain.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const verifyRain = (obj) => {
  // https://eslint.org/docs/rules/no-prototype-builtins
  const hasRain = Object.prototype.hasOwnProperty.call(obj, 'rain');
  return hasRain;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyRain);


/***/ }),

/***/ "./src/verifySnow.js":
/*!***************************!*\
  !*** ./src/verifySnow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const verifySnow = (obj) => {
  // https://eslint.org/docs/rules/no-prototype-builtins
  const hasSnow = Object.prototype.hasOwnProperty.call(obj, 'snow');
  return hasSnow;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifySnow);


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDom */ "./src/getDom.js");
/* harmony import */ var _getEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEventListeners */ "./src/getEventListeners.js");




// default campinas
(0,_getDom__WEBPACK_IMPORTED_MODULE_1__["default"])(-22.90556, -47.06083, 'Campinas, BR', 'BR');
(0,_getEventListeners__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1M7QUFDc0I7O0FBRXBEO0FBQ0EsbURBQU07QUFDTiw4REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL2Jpbm9jdWxhcnMuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL2Nsb3VkLXBlcmNlbnQuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL2dhdWdlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9tYWduaWZ5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9zbm93Zmxha2Uuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3RoZXJtb21ldGVyLWNoZXZyb24tZG93bi5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItY2hldnJvbi11cC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItaGlnaC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2F0ZXItb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1jbG91ZHkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItbmlnaHQuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItcG91cmluZy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1yYWlueS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1zbm93eS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS1vZmYuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItd2luZHkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3doaXRlLWJhbGFuY2Utc3Vubnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY2FwaXRhbGl6ZUZpcnN0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY29udmVydFRvS20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXREYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0RG9tLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0RXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRGaXhlZE51bWJlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEdlb0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEhvdXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXROZWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldE5vd1RpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRTdHlsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldFdlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRXaW5kRGlyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcHJvY2Vzc0RhaWx5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NldFdlYXRoZXJJY29uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmVyaWZ5QWxlcnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmVyaWZ5UmFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZlcmlmeVNub3cuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IHNlbWlib2xkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuOnJvb3Qge1xcbiAgLS1zaWRlUGFkZGluZ3M6IDEuNXJlbTtcXG4gIC0tbWlkZGxlR2FwOiA0cmVtO1xcbiAgLyogdHJpZXMgdG8gYWRhcHQgdG8gc2NyZWVuIHNpemVzKi9cXG4gIC0tZm9udFNpemU6IGNhbGMoMC41cmVtICsgMC4ydncgKyAwLjV2aCk7XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS4ycmVtO1xcbiAgLS1mb250U2l6ZUhpZ2h0bGlnaHQ6IDIuNXJlbTtcXG59XFxuLyogYm9keSAqIHtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgcmVkO1xcbn0gKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZmlsbDogcmdiKDExMCwgMzUsIDIyMyk7XFxufVxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemUpO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxufVxcbi8qU3BhY2VzIHdlYXRoZXIgaW5mb3MqL1xcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlUGFkZGluZ3MpO1xcbn1cXG4uZGFpbHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmRheUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG59XFxuLyogIFNWRyAqL1xcbi8qIHRhcmdldHMgZm9yZWNhc3QgU1ZHcyAqL1xcbi5kYXlEYXRlIH4gZGl2ID4gc3ZnID4gc3ZnLFxcbi5tYXhUZW1wU3ZnID4gc3ZnIHtcXG4gIHdpZHRoOiAxLjdyZW07XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgZGl2cyAqL1xcbi5jdXJyZW50V2VhdGhlciA+ICosXFxuLndlYXRoZXJTdW1tYXJ5ID4gKixcXG4uZGF5Q29udGFpbmVyID4gKixcXG4uc2VhcmNoQ29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ucmFpbjFoQ29udCxcXG4uc25vdzFoQ29udCxcXG4uY3VycmVudFN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKkN1cnJlbnQgd2VhdGhlci9zZWFyY2ggYXJlYSAqL1xcbi8qIGxpbWl0cyBncm93dGggd2hlbiBhbGVydHMgYXJlIHByZXNlbnQgKi9cXG4uaGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4uYWxlcnRzIHtcXG4gIG1heC13aWR0aDogMTR2dztcXG59XFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgbWluLXdpZHRoOiAxM3JlbTtcXG59XFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnNlYXJjaEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuI3NlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLndlYXRoZXJDb250LFxcbi50ZW1wQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpZ2h0bGlnaHQpO1xcbn1cXG4ubmFtZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG59XFxuLmRhdGUge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxufVxcbi5mZWVsc0xpa2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi8qTGltaXQgYWxlcnRzIGZvbnQgKi9cXG4uYWxlcnRzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4vKmRhaWx5IGZvcmVjYXN0ICovXFxuLmRheURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKiB0cmljayB0byBhcHBlYXIgY2VudHJhbGl6ZWQgKi9cXG4ubWluVGVtcFN2ZyxcXG4ubWF4VGVtcFN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLyogd2luZCBhZGp1c3RzICovXFxuLndpbmREYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2luZFNwZWVkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtGQUFrRjtFQUNsRixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0ZBQWtGO0VBQ2xGLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrRkFBa0Y7RUFDbEYsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0EsU0FBUztBQUNULDBCQUEwQjtBQUMxQjs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUEsb0JBQW9CO0FBQ3BCOzs7O0VBSUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiO0FBQ0E7OztFQUdFLGFBQWE7QUFDZjs7QUFFQSwrQkFBK0I7QUFDL0IsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLGdDQUFnQztBQUNoQzs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IHNlbWlib2xkO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuOnJvb3Qge1xcbiAgLS1zaWRlUGFkZGluZ3M6IDEuNXJlbTtcXG4gIC0tbWlkZGxlR2FwOiA0cmVtO1xcbiAgLyogdHJpZXMgdG8gYWRhcHQgdG8gc2NyZWVuIHNpemVzKi9cXG4gIC0tZm9udFNpemU6IGNhbGMoMC41cmVtICsgMC4ydncgKyAwLjV2aCk7XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS4ycmVtO1xcbiAgLS1mb250U2l6ZUhpZ2h0bGlnaHQ6IDIuNXJlbTtcXG59XFxuLyogYm9keSAqIHtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgcmVkO1xcbn0gKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZmlsbDogcmdiKDExMCwgMzUsIDIyMyk7XFxufVxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemUpO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxufVxcbi8qU3BhY2VzIHdlYXRoZXIgaW5mb3MqL1xcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlUGFkZGluZ3MpO1xcbn1cXG4uZGFpbHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogM3JlbTtcXG59XFxuLmRheUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG59XFxuLyogIFNWRyAqL1xcbi8qIHRhcmdldHMgZm9yZWNhc3QgU1ZHcyAqL1xcbi5kYXlEYXRlIH4gZGl2ID4gc3ZnID4gc3ZnLFxcbi5tYXhUZW1wU3ZnID4gc3ZnIHtcXG4gIHdpZHRoOiAxLjdyZW07XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgZGl2cyAqL1xcbi5jdXJyZW50V2VhdGhlciA+ICosXFxuLndlYXRoZXJTdW1tYXJ5ID4gKixcXG4uZGF5Q29udGFpbmVyID4gKixcXG4uc2VhcmNoQ29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ucmFpbjFoQ29udCxcXG4uc25vdzFoQ29udCxcXG4uY3VycmVudFN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKkN1cnJlbnQgd2VhdGhlci9zZWFyY2ggYXJlYSAqL1xcbi8qIGxpbWl0cyBncm93dGggd2hlbiBhbGVydHMgYXJlIHByZXNlbnQgKi9cXG4uaGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4uYWxlcnRzIHtcXG4gIG1heC13aWR0aDogMTR2dztcXG59XFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgbWluLXdpZHRoOiAxM3JlbTtcXG59XFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnNlYXJjaEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuI3NlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLndlYXRoZXJDb250LFxcbi50ZW1wQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpZ2h0bGlnaHQpO1xcbn1cXG4ubmFtZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG59XFxuLmRhdGUge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxufVxcbi5mZWVsc0xpa2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi8qTGltaXQgYWxlcnRzIGZvbnQgKi9cXG4uYWxlcnRzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4vKmRhaWx5IGZvcmVjYXN0ICovXFxuLmRheURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKiB0cmljayB0byBhcHBlYXIgY2VudHJhbGl6ZWQgKi9cXG4ubWluVGVtcFN2ZyxcXG4ubWF4VGVtcFN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxuXFxuLyogd2luZCBhZGp1c3RzICovXFxuLndpbmREYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2luZFNwZWVkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTEsNkgxM1YxM0gxMVY2TTksMjBBMSwxIDAgMCwxIDgsMjFINUExLDEgMCAwLDEgNCwyMFYxNUw2LDZIMTBWMTNBMSwxIDAgMCwxIDksMTRWMjBNMTAsNUg3VjNIMTBWNU0xNSwyMFYxNEExLDEgMCAwLDEgMTQsMTNWNkgxOEwyMCwxNVYyMEExLDEgMCAwLDEgMTksMjFIMTZBMSwxIDAgMCwxIDE1LDIwTTE0LDVWM0gxN1Y1SDE0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xOS4zNSAxMC4wM0MxOC42NyA2LjU5IDE1LjY0IDQgMTIgNEM5LjExIDQgNi42IDUuNjQgNS4zNSA4LjAzQzIuMzQgOC4zNiAwIDEwLjkgMCAxNEMwIDE3LjMxIDIuNjkgMjAgNiAyMEgxOUMyMS43NiAyMCAyNCAxNy43NiAyNCAxNUMyNCAxMi4zNiAyMS45NSAxMC4yMiAxOS4zNSAxMC4wM005LjQ1IDkuMDNDMTAuMjMgOS4wMyAxMC44NyA5LjY3IDEwLjg3IDEwLjQ1UzEwLjIzIDExLjg3IDkuNDUgMTEuODcgOC4wMyAxMS4yMyA4LjAzIDEwLjQ1IDguNjcgOS4wMyA5LjQ1IDkuMDNNMTQuNTUgMTYuOTdDMTMuNzcgMTYuOTcgMTMuMTMgMTYuMzMgMTMuMTMgMTUuNTVTMTMuNzcgMTQuMTMgMTQuNTUgMTQuMTMgMTUuOTcgMTQuNzcgMTUuOTcgMTUuNTUgMTUuMzMgMTYuOTcgMTQuNTUgMTYuOTdNOS4yIDE3TDggMTUuOEwxNC44IDlMMTYgMTAuMkw5LjIgMTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEyLDRBOCw4IDAgMCwxIDIwLDEyQzIwLDE0LjQgMTksMTYuNSAxNy4zLDE4QzE1LjksMTYuNyAxNCwxNiAxMiwxNkMxMCwxNiA4LjIsMTYuNyA2LjcsMThDNSwxNi41IDQsMTQuNCA0LDEyQTgsOCAwIDAsMSAxMiw0TTE0LDUuODlDMTMuNjIsNS45IDEzLjI2LDYuMTUgMTMuMSw2LjU0TDExLjgxLDkuNzdMMTEuNzEsMTBDMTEsMTAuMTMgMTAuNDEsMTAuNiAxMC4xNCwxMS4yNkM5LjczLDEyLjI5IDEwLjIzLDEzLjQ1IDExLjI2LDEzLjg2QzEyLjI5LDE0LjI3IDEzLjQ1LDEzLjc3IDEzLjg2LDEyLjc0QzE0LjEyLDEyLjA4IDE0LDExLjMyIDEzLjU3LDEwLjc2TDEzLjY3LDEwLjVMMTQuOTYsNy4yOUwxNC45Nyw3LjI2QzE1LjE3LDYuNzUgMTQuOTIsNi4xNyAxNC40MSw1Ljk2QzE0LjI4LDUuOTEgMTQuMTUsNS44OSAxNCw1Ljg5TTEwLDZBMSwxIDAgMCwwIDksN0ExLDEgMCAwLDAgMTAsOEExLDEgMCAwLDAgMTEsN0ExLDEgMCAwLDAgMTAsNk03LDlBMSwxIDAgMCwwIDYsMTBBMSwxIDAgMCwwIDcsMTFBMSwxIDAgMCwwIDgsMTBBMSwxIDAgMCwwIDcsOU0xNyw5QTEsMSAwIDAsMCAxNiwxMEExLDEgMCAwLDAgMTcsMTFBMSwxIDAgMCwwIDE4LDEwQTEsMSAwIDAsMCAxNyw5WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk05LjUsM0E2LjUsNi41IDAgMCwxIDE2LDkuNUMxNiwxMS4xMSAxNS40MSwxMi41OSAxNC40NCwxMy43M0wxNC43MSwxNEgxNS41TDIwLjUsMTlMMTksMjAuNUwxNCwxNS41VjE0LjcxTDEzLjczLDE0LjQ0QzEyLjU5LDE1LjQxIDExLjExLDE2IDkuNSwxNkE2LjUsNi41IDAgMCwxIDMsOS41QTYuNSw2LjUgMCAwLDEgOS41LDNNOS41LDVDNyw1IDUsNyA1LDkuNUM1LDEyIDcsMTQgOS41LDE0QzEyLDE0IDE0LDEyIDE0LDkuNUMxNCw3IDEyLDUgOS41LDVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTIwLjc5LDEzLjk1TDE4LjQ2LDE0LjU3TDE2LjQ2LDEzLjQ0VjEwLjU2TDE4LjQ2LDkuNDNMMjAuNzksMTAuMDVMMjEuMzEsOC4xMkwxOS41NCw3LjY1TDIwLDUuODhMMTguMDcsNS4zNkwxNy40NSw3LjY5TDE1LjQ1LDguODJMMTMsNy4zOFY1LjEyTDE0LjcxLDMuNDFMMTMuMjksMkwxMiwzLjI5TDEwLjcxLDJMOS4yOSwzLjQxTDExLDUuMTJWNy4zOEw4LjUsOC44Mkw2LjUsNy42OUw1LjkyLDUuMzZMNCw1Ljg4TDQuNDcsNy42NUwyLjcsOC4xMkwzLjIyLDEwLjA1TDUuNTUsOS40M0w3LjU1LDEwLjU2VjEzLjQ1TDUuNTUsMTQuNThMMy4yMiwxMy45NkwyLjcsMTUuODlMNC40NywxNi4zNkw0LDE4LjEyTDUuOTMsMTguNjRMNi41NSwxNi4zMUw4LjU1LDE1LjE4TDExLDE2LjYyVjE4Ljg4TDkuMjksMjAuNTlMMTAuNzEsMjJMMTIsMjAuNzFMMTMuMjksMjJMMTQuNywyMC41OUwxMywxOC44OFYxNi42MkwxNS41LDE1LjE3TDE3LjUsMTYuM0wxOC4xMiwxOC42M0wyMCwxOC4xMkwxOS41MywxNi4zNUwyMS4zLDE1Ljg4TDIwLjc5LDEzLjk1TTkuNSwxMC41NkwxMiw5LjExTDE0LjUsMTAuNTZWMTMuNDRMMTIsMTQuODlMOS41LDEzLjQ0VjEwLjU2WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNy40MSAxMi4xN0wxNC4yNCA5TDEyLjgzIDEwLjQxTDE3LjQxIDE1TDIyIDEwLjQxTDIwLjU4IDlNMTAgMTNWNUMxMCAzLjM0IDguNjYgMiA3IDJTNCAzLjM0IDQgNVYxM0MxLjc5IDE0LjY2IDEuMzQgMTcuNzkgMyAyMFM3Ljc5IDIyLjY2IDEwIDIxIDEyLjY2IDE2LjIxIDExIDE0QzEwLjcyIDEzLjYyIDEwLjM4IDEzLjI4IDEwIDEzTTcgNEM3LjU1IDQgOCA0LjQ1IDggNVY4SDZWNUM2IDQuNDUgNi40NSA0IDcgNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTcuNDEgMTEuODNMMjAuNTggMTVMMjIgMTMuNTlMMTcuNDEgOUwxMi44MiAxMy41OUwxNC4yNCAxNUwxNy40MSAxMS44M00xMCAxM1Y1QzEwIDMuMzQgOC42NiAyIDcgMlM0IDMuMzQgNCA1VjEzQzEuNzkgMTQuNjYgMS4zNCAxNy43OSAzIDIwUzcuNzkgMjIuNjYgMTAgMjEgMTIuNjYgMTYuMjEgMTEgMTRDMTAuNzIgMTMuNjIgMTAuMzggMTMuMjggMTAgMTNNNyA0QzcuNTUgNCA4IDQuNDUgOCA1VjhINlY1QzYgNC40NSA2LjQ1IDQgNyA0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNSAxM1Y1QTMgMyAwIDAgMCA5IDVWMTNBNSA1IDAgMSAwIDE1IDEzTTEyIDRBMSAxIDAgMCAxIDEzIDVIMTFBMSAxIDAgMCAxIDEyIDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTEyLDMuNzdMMTEuMjUsNC42MUMxMS4yNSw0LjYxIDkuOTcsNi4wNiA4LjY4LDcuOTRDNy4zOSw5LjgyIDYsMTIuMDcgNiwxNC4yM0E2LDYgMCAwLDAgMTIsMjAuMjNBNiw2IDAgMCwwIDE4LDE0LjIzQzE4LDEyLjA3IDE2LjYxLDkuODIgMTUuMzIsNy45NEMxNC4wMyw2LjA2IDEyLjc1LDQuNjEgMTIuNzUsNC42MUwxMiwzLjc3TTEyLDYuOUMxMi40NCw3LjQyIDEyLjg0LDcuODUgMTMuNjgsOS4wN0MxNC44OSwxMC44MyAxNiwxMy4wNyAxNiwxNC4yM0MxNiwxNi40NSAxNC4yMiwxOC4yMyAxMiwxOC4yM0M5Ljc4LDE4LjIzIDgsMTYuNDUgOCwxNC4yM0M4LDEzLjA3IDkuMTEsMTAuODMgMTAuMzIsOS4wN0MxMS4xNiw3Ljg1IDExLjU2LDcuNDIgMTIsNi45WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02LDE5QTUsNSAwIDAsMSAxLDE0QTUsNSAwIDAsMSA2LDlDNyw2LjY1IDkuMyw1IDEyLDVDMTUuNDMsNSAxOC4yNCw3LjY2IDE4LjUsMTEuMDNMMTksMTFBNCw0IDAgMCwxIDIzLDE1QTQsNCAwIDAsMSAxOSwxOUg2TTE5LDEzSDE3VjEyQTUsNSAwIDAsMCAxMiw3QzkuNSw3IDcuNDUsOC44MiA3LjA2LDExLjE5QzYuNzMsMTEuMDcgNi4zNywxMSA2LDExQTMsMyAwIDAsMCAzLDE0QTMsMyAwIDAsMCA2LDE3SDE5QTIsMiAwIDAsMCAyMSwxNUEyLDIgMCAwLDAgMTksMTNaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE3Ljc1LDQuMDlMMTUuMjIsNi4wM0wxNi4xMyw5LjA5TDEzLjUsNy4yOEwxMC44Nyw5LjA5TDExLjc4LDYuMDNMOS4yNSw0LjA5TDEyLjQ0LDRMMTMuNSwxTDE0LjU2LDRMMTcuNzUsNC4wOU0yMS4yNSwxMUwxOS42MSwxMi4yNUwyMC4yLDE0LjIzTDE4LjUsMTMuMDZMMTYuOCwxNC4yM0wxNy4zOSwxMi4yNUwxNS43NSwxMUwxNy44MSwxMC45NUwxOC41LDlMMTkuMTksMTAuOTVMMjEuMjUsMTFNMTguOTcsMTUuOTVDMTkuOCwxNS44NyAyMC42OSwxNy4wNSAyMC4xNiwxNy44QzE5Ljg0LDE4LjI1IDE5LjUsMTguNjcgMTkuMDgsMTkuMDdDMTUuMTcsMjMgOC44NCwyMyA0Ljk0LDE5LjA3QzEuMDMsMTUuMTcgMS4wMyw4LjgzIDQuOTQsNC45M0M1LjM0LDQuNTMgNS43Niw0LjE3IDYuMjEsMy44NUM2Ljk2LDMuMzIgOC4xNCw0LjIxIDguMDYsNS4wNEM3Ljc5LDcuOSA4Ljc1LDEwLjg3IDEwLjk1LDEzLjA2QzEzLjE0LDE1LjI2IDE2LjEsMTYuMjIgMTguOTcsMTUuOTVNMTcuMzMsMTcuOTdDMTQuNSwxNy44MSAxMS43LDE2LjY0IDkuNTMsMTQuNUM3LjM2LDEyLjMxIDYuMiw5LjUgNi4wNCw2LjY4QzMuMjMsOS44MiAzLjM0LDE0LjY0IDYuMzUsMTcuNjZDOS4zNywyMC42NyAxNC4xOSwyMC43OCAxNy4zMywxNy45N1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNOSwxMkM5LjUzLDEyLjE0IDkuODUsMTIuNjkgOS43MSwxMy4yMkw4LjQxLDE4LjA1QzguMjcsMTguNTkgNy43MiwxOC45IDcuMTksMTguNzZDNi42NSwxOC42MiA2LjM0LDE4LjA3IDYuNSwxNy41NEw3Ljc4LDEyLjcxQzcuOTIsMTIuMTcgOC40NywxMS44NiA5LDEyTTEzLDEyQzEzLjUzLDEyLjE0IDEzLjg1LDEyLjY5IDEzLjcxLDEzLjIyTDExLjY0LDIwLjk1QzExLjUsMjEuNSAxMC45NSwyMS44IDEwLjQxLDIxLjY2QzkuODgsMjEuNSA5LjU2LDIwLjk3IDkuNywyMC40M0wxMS43OCwxMi43MUMxMS45MiwxMi4xNyAxMi40NywxMS44NiAxMywxMk0xNywxMkMxNy41MywxMi4xNCAxNy44NSwxMi42OSAxNy43MSwxMy4yMkwxNi40MSwxOC4wNUMxNi4yNywxOC41OSAxNS43MiwxOC45IDE1LjE5LDE4Ljc2QzE0LjY1LDE4LjYyIDE0LjM0LDE4LjA3IDE0LjUsMTcuNTRMMTUuNzgsMTIuNzFDMTUuOTIsMTIuMTcgMTYuNDcsMTEuODYgMTcsMTJNMTcsMTBWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQzMsMTIuMTEgMy42LDEzLjA4IDQuNSwxMy42VjEzLjU5QzUsMTMuODcgNS4xNCwxNC41IDQuODcsMTQuOTZDNC41OSwxNS40MyA0LDE1LjYgMy41LDE1LjMyVjE1LjMzQzIsMTQuNDcgMSwxMi44NSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkMyMywxMy41IDIyLjIsMTQuNzcgMjEsMTUuNDZWMTUuNDZDMjAuNSwxNS43MyAxOS45MSwxNS41NyAxOS42MywxNS4wOUMxOS4zNiwxNC42MSAxOS41LDE0IDIwLDEzLjcyVjEzLjczQzIwLjYsMTMuMzkgMjEsMTIuNzQgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02LDE0LjAzQTEsMSAwIDAsMSA3LDE1LjAzQzcsMTUuNTggNi41NSwxNi4wMyA2LDE2LjAzQzMuMjQsMTYuMDMgMSwxMy43OSAxLDExLjAzQzEsOC4yNyAzLjI0LDYuMDMgNiw2LjAzQzcsMy42OCA5LjMsMi4wMyAxMiwyLjAzQzE1LjQzLDIuMDMgMTguMjQsNC42OSAxOC41LDguMDZMMTksOC4wM0E0LDQgMCAwLDEgMjMsMTIuMDNDMjMsMTQuMjMgMjEuMjEsMTYuMDMgMTksMTYuMDNIMThDMTcuNDUsMTYuMDMgMTcsMTUuNTggMTcsMTUuMDNDMTcsMTQuNDcgMTcuNDUsMTQuMDMgMTgsMTQuMDNIMTlBMiwyIDAgMCwwIDIxLDEyLjAzQTIsMiAwIDAsMCAxOSwxMC4wM0gxN1Y5LjAzQzE3LDYuMjcgMTQuNzYsNC4wMyAxMiw0LjAzQzkuNSw0LjAzIDcuNDUsNS44NCA3LjA2LDguMjFDNi43Myw4LjA5IDYuMzcsOC4wMyA2LDguMDNBMywzIDAgMCwwIDMsMTEuMDNBMywzIDAgMCwwIDYsMTQuMDNNMTIsMTQuMTVDMTIuMTgsMTQuMzkgMTIuMzcsMTQuNjYgMTIuNTYsMTQuOTRDMTMsMTUuNTYgMTQsMTcuMDMgMTQsMThDMTQsMTkuMTEgMTMuMSwyMCAxMiwyMEEyLDIgMCAwLDEgMTAsMThDMTAsMTcuMDMgMTEsMTUuNTYgMTEuNDQsMTQuOTRDMTEuNjMsMTQuNjYgMTEuODIsMTQuNCAxMiwxNC4xNU0xMiwxMS4wM0wxMS41LDExLjU5QzExLjUsMTEuNTkgMTAuNjUsMTIuNTUgOS43OSwxMy44MUM4LjkzLDE1LjA2IDgsMTYuNTYgOCwxOEE0LDQgMCAwLDAgMTIsMjJBNCw0IDAgMCwwIDE2LDE4QzE2LDE2LjU2IDE1LjA3LDE1LjA2IDE0LjIxLDEzLjgxQzEzLjM1LDEyLjU1IDEyLjUsMTEuNTkgMTIuNSwxMS41OVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02LDE0QTEsMSAwIDAsMSA3LDE1QTEsMSAwIDAsMSA2LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNE03Ljg4LDE4LjA3TDEwLjA3LDE3LjVMOC40NiwxNS44OEM4LjA3LDE1LjUgOC4wNywxNC44NiA4LjQ2LDE0LjQ2QzguODUsMTQuMDcgOS41LDE0LjA3IDkuODgsMTQuNDZMMTEuNSwxNi4wN0wxMi4wNywxMy44OEMxMi4yMSwxMy4zNCAxMi43NiwxMy4wMyAxMy4yOSwxMy4xN0MxMy44MywxMy4zMSAxNC4xNCwxMy44NiAxNCwxNC40TDEzLjQxLDE2LjU5TDE1LjYsMTZDMTYuMTQsMTUuODYgMTYuNjksMTYuMTcgMTYuODMsMTYuNzFDMTYuOTcsMTcuMjQgMTYuNjYsMTcuNzkgMTYuMTIsMTcuOTNMMTMuOTMsMTguNUwxNS41NCwyMC4xMkMxNS45MywyMC41IDE1LjkzLDIxLjE1IDE1LjU0LDIxLjU0QzE1LjE1LDIxLjkzIDE0LjUsMjEuOTMgMTQuMTIsMjEuNTRMMTIuNSwxOS45M0wxMS45MywyMi4xMkMxMS43OSwyMi42NiAxMS4yNCwyMi45NyAxMC43MSwyMi44M0MxMC4xNywyMi42OSA5Ljg2LDIyLjE0IDEwLDIxLjZMMTAuNTksMTkuNDFMOC40LDIwQzcuODYsMjAuMTQgNy4zMSwxOS44MyA3LjE3LDE5LjI5QzcuMDMsMTguNzYgNy4zNCwxOC4yMSA3Ljg4LDE4LjA3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0yMi4xMSAyMS40NkwyLjM5IDEuNzNMMS4xMSAzTDQuOTcgNi44NkwzLjM0IDdMNS4xMSAxMC43OUM1LjI1IDEwIDUuNSA5LjI0IDUuOTQgOC41QzYgOC4zNiA2LjEzIDguMjQgNi4yMiA4LjExTDcuNjYgOS41NUM3LjI1IDEwLjI3IDcgMTEuMTEgNyAxMkM3IDE0Ljc2IDkuMjQgMTcgMTIgMTdDMTIuOSAxNyAxMy43MyAxNi43NSAxNC40NSAxNi4zNEwyMC44NCAyMi43M0wyMi4xMSAyMS40Nk0xMiAxNUMxMC4zNCAxNSA5IDEzLjY2IDkgMTJDOSAxMS42NyA5LjA3IDExLjM2IDkuMTcgMTEuMDZMMTIuOTQgMTQuODNDMTIuNjQgMTQuOTMgMTIuMzMgMTUgMTIgMTVNMTguMDUgOC41QzE3LjYzIDcuNzggMTcuMSA3LjE1IDE2LjUgNi42NEwyMC42NSA3TDE4Ljg4IDEwLjc5QzE4Ljc0IDEwIDE4LjQ3IDkuMjMgMTguMDUgOC41TTEyIDdDMTQuNzYgNyAxNyA5LjI0IDE3IDEyQzE3IDEyLjU0IDE2Ljg5IDEzLjA1IDE2Ljc0IDEzLjU0TDE1IDExLjc4QzE0Ljg3IDEwLjMgMTMuNyA5LjEzIDEyLjIyIDlMMTAuNDcgNy4yN0MxMC45NSA3LjExIDExLjQ2IDcgMTIgN00xMiA1QzExLjE2IDUgMTAuMzUgNS4xNSA5LjYxIDUuNDJMMTIgMkwxNC4zOSA1LjQyQzEzLjY1IDUuMTUgMTIuODQgNSAxMiA1TTE4Ljg3IDEzLjIxTDIwLjY0IDE3TDIwLjI0IDE3LjA0TDE4LjI1IDE1LjA1QzE4LjU0IDE0LjQ1IDE4Ljc2IDEzLjg0IDE4Ljg3IDEzLjIxTTEyIDE5QzEyLjgyIDE5IDEzLjYzIDE4LjgzIDE0LjM3IDE4LjU2TDEyIDIyTDkuNTkgMTguNTZDMTAuMzMgMTguODMgMTEuMTQgMTkgMTIgMTlNNS45NSAxNS41QzYuMzcgMTYuMjQgNi45MSAxNi44NiA3LjUgMTcuMzdMMy4zNiAxN0w1LjEyIDEzLjIzQzUuMjYgMTQgNS41MyAxNC43OCA1Ljk1IDE1LjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlNMTIsMkwxNC4zOSw1LjQyQzEzLjY1LDUuMTUgMTIuODQsNSAxMiw1QzExLjE2LDUgMTAuMzUsNS4xNSA5LjYxLDUuNDJMMTIsMk0zLjM0LDdMNy41LDYuNjVDNi45LDcuMTYgNi4zNiw3Ljc4IDUuOTQsOC41QzUuNSw5LjI0IDUuMjUsMTAgNS4xMSwxMC43OUwzLjM0LDdNMy4zNiwxN0w1LjEyLDEzLjIzQzUuMjYsMTQgNS41MywxNC43OCA1Ljk1LDE1LjVDNi4zNywxNi4yNCA2LjkxLDE2Ljg2IDcuNSwxNy4zN0wzLjM2LDE3TTIwLjY1LDdMMTguODgsMTAuNzlDMTguNzQsMTAgMTguNDcsOS4yMyAxOC4wNSw4LjVDMTcuNjMsNy43OCAxNy4xLDcuMTUgMTYuNSw2LjY0TDIwLjY1LDdNMjAuNjQsMTdMMTYuNSwxNy4zNkMxNy4wOSwxNi44NSAxNy42MiwxNi4yMiAxOC4wNCwxNS41QzE4LjQ2LDE0Ljc3IDE4LjczLDE0IDE4Ljg3LDEzLjIxTDIwLjY0LDE3TTEyLDIyTDkuNTksMTguNTZDMTAuMzMsMTguODMgMTEuMTQsMTkgMTIsMTlDMTIuODIsMTkgMTMuNjMsMTguODMgMTQuMzcsMTguNTZMMTIsMjJaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTQsMTBBMSwxIDAgMCwxIDMsOUExLDEgMCAwLDEgNCw4SDEyQTIsMiAwIDAsMCAxNCw2QTIsMiAwIDAsMCAxMiw0QzExLjQ1LDQgMTAuOTUsNC4yMiAxMC41OSw0LjU5QzEwLjIsNSA5LjU2LDUgOS4xNyw0LjU5QzguNzgsNC4yIDguNzgsMy41NiA5LjE3LDMuMTdDOS45LDIuNDUgMTAuOSwyIDEyLDJBNCw0IDAgMCwxIDE2LDZBNCw0IDAgMCwxIDEyLDEwSDRNMTksMTJBMSwxIDAgMCwwIDIwLDExQTEsMSAwIDAsMCAxOSwxMEMxOC43MiwxMCAxOC40NywxMC4xMSAxOC4yOSwxMC4yOUMxNy45LDEwLjY4IDE3LjI3LDEwLjY4IDE2Ljg4LDEwLjI5QzE2LjUsOS45IDE2LjUsOS4yNyAxNi44OCw4Ljg4QzE3LjQyLDguMzQgMTguMTcsOCAxOSw4QTMsMyAwIDAsMSAyMiwxMUEzLDMgMCAwLDEgMTksMTRINUExLDEgMCAwLDEgNCwxM0ExLDEgMCAwLDEgNSwxMkgxOU0xOCwxOEg0QTEsMSAwIDAsMSAzLDE3QTEsMSAwIDAsMSA0LDE2SDE4QTMsMyAwIDAsMSAyMSwxOUEzLDMgMCAwLDEgMTgsMjJDMTcuMTcsMjIgMTYuNDIsMjEuNjYgMTUuODgsMjEuMTJDMTUuNSwyMC43MyAxNS41LDIwLjEgMTUuODgsMTkuNzFDMTYuMjcsMTkuMzIgMTYuOSwxOS4zMiAxNy4yOSwxOS43MUMxNy40NywxOS44OSAxNy43MiwyMCAxOCwyMEExLDEgMCAwLDAgMTksMTlBMSwxIDAgMCwwIDE4LDE4WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0zLjU1IDE5LjA5TDQuOTYgMjAuNUw2Ljc2IDE4LjcxTDUuMzQgMTcuMjlNMTIgNkM4LjY5IDYgNiA4LjY5IDYgMTJTOC42OSAxOCAxMiAxOCAxOCAxNS4zMSAxOCAxMkMxOCA4LjY4IDE1LjMxIDYgMTIgNk0yMCAxM0gyM1YxMUgyME0xNy4yNCAxOC43MUwxOS4wNCAyMC41TDIwLjQ1IDE5LjA5TDE4LjY2IDE3LjI5TTIwLjQ1IDVMMTkuMDQgMy42TDE3LjI0IDUuMzlMMTguNjYgNi44MU0xMyAxSDExVjRIMTNNNi43NiA1LjM5TDQuOTYgMy42TDMuNTUgNUw1LjM0IDYuODFMNi43NiA1LjM5TTEgMTNINFYxMUgxTTEzIDIwSDExVjIzSDEzXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zdCBjYXBpdGFsaXplRmlyc3QgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGNhcGl0YWxpemVkID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICByZXR1cm4gY2FwaXRhbGl6ZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplRmlyc3Q7XG4iLCJjb25zdCBjb252ZXJ0VG9LbSA9IChtKSA9PiB7XG4gIGNvbnN0IGttSCA9IChtICogMy42KS50b0ZpeGVkKDEpO1xuICByZXR1cm4ga21IO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRUb0ttO1xuIiwiY29uc3QgZ2V0RGF0ZSA9IChtcykgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoMCwgMTEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0ZTtcbiIsImltcG9ydCBnZXRXZWF0aGVyQVBJIGZyb20gJy4vZ2V0V2VhdGhlckFQSSc7XG5pbXBvcnQgZ2V0U3R5bGUgZnJvbSAnLi9nZXRTdHlsZSc7XG5pbXBvcnQgZ2V0RGF0ZSBmcm9tICcuL2dldERhdGUnO1xuaW1wb3J0IGdldEhvdXIgZnJvbSAnLi9nZXRIb3VyJztcbmltcG9ydCBnZXRXaW5kRGlyIGZyb20gJy4vZ2V0V2luZERpcic7XG5pbXBvcnQgdmVyaWZ5UmFpbiBmcm9tICcuL3ZlcmlmeVJhaW4nO1xuaW1wb3J0IHZlcmlmeVNub3cgZnJvbSAnLi92ZXJpZnlTbm93JztcbmltcG9ydCBnZXROb3dUaW1lIGZyb20gJy4vZ2V0Tm93VGltZSc7XG5pbXBvcnQgY29udmVydFRvS20gZnJvbSAnLi9jb252ZXJ0VG9LbSc7XG5pbXBvcnQgZ2V0Rml4ZWROdW1iZXIgZnJvbSAnLi9nZXRGaXhlZE51bWJlcic7XG5pbXBvcnQgcHJvY2Vzc0RhaWx5RGF0YSBmcm9tICcuL3Byb2Nlc3NEYWlseURhdGEnO1xuaW1wb3J0IGNhcGl0YWxpemVGaXJzdCBmcm9tICcuL2NhcGl0YWxpemVGaXJzdCc7XG5pbXBvcnQgdmVyaWZ5QWxlcnRzIGZyb20gJy4vdmVyaWZ5QWxlcnRzJztcbmltcG9ydCBzZXRXZWF0aGVySWNvbiBmcm9tICcuL3NldFdlYXRoZXJJY29uJztcblxuY29uc3QgZ2V0RG9tID0gKGxhdCwgbG9uLCBsb2MsIGNvdW50cnkpID0+IHtcbiAgLy8gcXVlcmllc1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZScpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICBjb25zdCB1diA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51dicpO1xuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpO1xuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKTtcbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnNldCcpO1xuICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJyk7XG4gIGNvbnN0IHdpbmREZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZERlZycpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFNwZWVkJyk7XG4gIGNvbnN0IGNsb3VkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG91ZHMnKTtcbiAgY29uc3QgcmFpbjFoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4xaCcpO1xuICBjb25zdCByYWluMWhDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4xaENvbnQnKTtcbiAgY29uc3Qgc25vdzFoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3cxaCcpO1xuICBjb25zdCBzbm93MWhDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3cxaENvbnQnKTtcbiAgY29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHknKTtcbiAgY29uc3QgYWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0cycpO1xuXG4gIC8vIHdyaXRpbmcgdG8gRE9NXG4gIGNvbnN0IHdyaXRlV2VhdGhlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY0RhdGEgPSBhd2FpdCBnZXRXZWF0aGVyQVBJKGxhdCwgbG9uLCBjb3VudHJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKCdPbmVjYWxsIEFQSTogJywgcmVjRGF0YSk7XG5cbiAgICAgIC8vIHVuaXQgY29udmVyc2lvbiBiZWZvcmUgd3JpdGluZ1xuICAgICAgLy8gc2xpY2VzIG91dCBzZWNvbmRzLCBrZWVwIGFtL1BNXG4gICAgICBjb25zdCBzdW5yaXNlVGltZSA9IGAke2dldEhvdXIocmVjRGF0YS5jdXJyZW50LnN1bnJpc2UpLnNsaWNlKFxuICAgICAgICAwLFxuICAgICAgICA0XG4gICAgICApfSAke2dldEhvdXIocmVjRGF0YS5jdXJyZW50LnN1bnJpc2UpLnNsaWNlKDcsIDEwKX1gO1xuXG4gICAgICBjb25zdCBzdW5zZXRUaW1lID0gYCR7Z2V0SG91cihyZWNEYXRhLmN1cnJlbnQuc3Vuc2V0KS5zbGljZShcbiAgICAgICAgMCxcbiAgICAgICAgNFxuICAgICAgKX0gJHtnZXRIb3VyKHJlY0RhdGEuY3VycmVudC5zdW5zZXQpLnNsaWNlKDcsIDEwKX1gO1xuICAgICAgY29uc3Qgd2luZFNwZWVkS20gPSBjb252ZXJ0VG9LbShyZWNEYXRhLmN1cnJlbnQud2luZF9zcGVlZCk7XG5cbiAgICAgIC8vIHNob3dzIGN1cnJlbnQgaG91ciB3aXRob3V0IHNlY29uZHNcbiAgICAgIGNvbnN0IG5vd0hvdXIgPSBnZXROb3dUaW1lKHJlY0RhdGEudGltZXpvbmUpLnRvU3RyaW5nKCkuc2xpY2UoMTYsIDIxKTtcbiAgICAgIGNvbnN0IHRpbWVEYXRlID0gZ2V0RGF0ZSgpO1xuXG4gICAgICAvLyBtYWluIGluZm8gd3JpdGluZ1xuICAgICAgY29uc3Qgd2luZERpciA9IGdldFdpbmREaXIocmVjRGF0YS5jdXJyZW50LndpbmRfZGVnKTtcbiAgICAgIGNvbnN0IHRlbXBSb3VuZCA9IGdldEZpeGVkTnVtYmVyKHJlY0RhdGEuY3VycmVudC50ZW1wLCAxKTtcbiAgICAgIGNvbnN0IGZlZWxSb3VuZCA9IGdldEZpeGVkTnVtYmVyKHJlY0RhdGEuY3VycmVudC5mZWVsc19saWtlLCAxKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBsb2M7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGltZURhdGU7XG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gbm93SG91cjtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wUm91bmR9IMK6Q2A7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2ZlZWxSb3VuZH0gwrpDYDtcbiAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3JlY0RhdGEuY3VycmVudC5odW1pZGl0eX0gJWA7XG4gICAgICB1di50ZXh0Q29udGVudCA9IGBVViBJbmRleDogJHtnZXRGaXhlZE51bWJlcihyZWNEYXRhLmN1cnJlbnQudXZpLCAwKX1gO1xuICAgICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7cmVjRGF0YS5jdXJyZW50LnByZXNzdXJlfSBoUGFgO1xuICAgICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGBTdW5yaXNlOiAke3N1bnJpc2VUaW1lfWA7XG4gICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBgU3Vuc2V0OiAke3N1bnNldFRpbWV9YDtcbiAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eTogJHtcbiAgICAgICAgcmVjRGF0YS5jdXJyZW50LnZpc2liaWxpdHkgLyAxMDAwXG4gICAgICB9IGttYDtcbiAgICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3QoXG4gICAgICAgIHJlY0RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICApO1xuICAgICAgd2luZERlZy50ZXh0Q29udGVudCA9IGBEaXJlY3Rpb246ICR7d2luZERpcn1gO1xuICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFNwZWVkOiAke3dpbmRTcGVlZEttfSBrbS9oYDtcbiAgICAgIGNsb3Vkcy50ZXh0Q29udGVudCA9IGBDbG91ZCBjb3ZlcmFnZTogJHtyZWNEYXRhLmN1cnJlbnQuY2xvdWRzfSAlYDtcblxuICAgICAgLy8gY2hlY2sgaWYgcmFpbiBhbmQgc25vdyBkYXRhIGFyZSBwcmVzZW50IGFuZCBzaG93cyBpdFxuICAgICAgaWYgKHZlcmlmeVJhaW4ocmVjRGF0YS5jdXJyZW50KSkge1xuICAgICAgICByYWluMWgudGV4dENvbnRlbnQgPSBgUmFpbiB2b2x1bWUgaW4gdGhlIGxhc3QgaG91cjogJHtyZWNEYXRhLmN1cnJlbnQucmFpblsnMWgnXX0gbW1gO1xuICAgICAgICByYWluMWhDb250LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYWluMWgudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcmFpbjFoQ29udC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKHZlcmlmeVNub3cocmVjRGF0YS5jdXJyZW50KSkge1xuICAgICAgICBzbm93MWgudGV4dENvbnRlbnQgPSBgU25vdyB2b2x1bWUgaW4gdGhlIGxhc3QgaG91cjogJHtyZWNEYXRhLmN1cnJlbnQuc25vd1snMWgnXX0gbW1gO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbm93MWgudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgc25vdzFoQ29udC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBmb3IgYWxlcnRzIGFuZCBjbGVhbnMgYWZ0ZXJ3YXJkc1xuICAgICAgaWYgKHZlcmlmeUFsZXJ0cyhyZWNEYXRhKSkge1xuICAgICAgICBhbGVydHMudGV4dENvbnRlbnQgPSByZWNEYXRhLmFsZXJ0c1swXS5kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSBhbGVydHMudGV4dENvbnRlbnQgPSAnJztcblxuICAgICAgLy8gZGVsZXRlcyBwcmV2aW91cyB2YWx1ZXMgYmVmb3JlIHdyaXRpbmcgbmV3IG9uZXNcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheUNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByZXZpb3VzQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGRhaWx5LmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JlY2FzdFxuICAgICAgLy8gcHJvY2VzcyBkYWlseSBmb3JlY2FzdCBpbnRvIGEgbmVhdCBBcnJheVxuICAgICAgY29uc3QgZGFpbHlUZW1wcyA9IHByb2Nlc3NEYWlseURhdGEocmVjRGF0YS5kYWlseSk7XG5cbiAgICAgIC8vIHdyaXRlIGVhY2ggZGF5IGZvcmVjYXN0ZWQgdG8gRE9NXG4gICAgICBmb3IgKGNvbnN0IGRheSBvZiBkYWlseVRlbXBzKSB7XG4gICAgICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXlDb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBtaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGF5TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRheU1pblZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzBdLCAwKTtcbiAgICAgICAgZGF5TWluLnRleHRDb250ZW50ID0gYCR7ZGF5TWluVmFsdWV9IMK6Q2A7XG4gICAgICAgIGNvbnN0IG1pblRlbXBTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgbWluVGVtcFN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pblRlbXBTdmcnKTtcblxuICAgICAgICBjb25zdCBtYXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGF5TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRheU1heFZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzFdLCAwKTtcbiAgICAgICAgZGF5TWF4LnRleHRDb250ZW50ID0gYCR7ZGF5TWF4VmFsdWV9IMK6Q2A7XG4gICAgICAgIGNvbnN0IG1heFRlbXBTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWF4VGVtcFN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21heFRlbXBTdmcnKTtcblxuICAgICAgICBjb25zdCB1dmlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdXZpTWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHV2aU1heFZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzJdLCAwKTtcbiAgICAgICAgdXZpTWF4LnRleHRDb250ZW50ID0gYFVWICR7dXZpTWF4VmFsdWV9YDtcbiAgICAgICAgY29uc3QgdXZpZ1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgICAgICB1dmlnU3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXZTdmcnKTtcblxuICAgICAgICBjb25zdCByYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJhaW5Qcm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJhaW5Qcm9iVmFsdWUgPSBgJHsoZGF5WzNdICogMTAwKS50b0ZpeGVkKDApfSAlYDtcbiAgICAgICAgcmFpblByb2IudGV4dENvbnRlbnQgPSByYWluUHJvYlZhbHVlO1xuICAgICAgICBjb25zdCByYWluU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgICAgIHJhaW5Tdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWluUGVyY2VudCcpO1xuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2NWYWx1ZSA9IGRheVs0XTtcbiAgICAgICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3Qod2VhdGhlckRlc2NWYWx1ZSk7XG4gICAgICAgIC8vIGljb25cbiAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgbGV0IHdlYXRoZXJJY29uVmFsdWUgPSBkYXlbNl07XG4gICAgICAgIHdlYXRoZXJJY29uVmFsdWUgPSBjYXBpdGFsaXplRmlyc3Qod2VhdGhlckljb25WYWx1ZSk7XG4gICAgICAgIC8vIGdldHMgU1ZHIGZvciBmb3JlY2FzdGVkIGRhdGFcbiAgICAgICAgd2VhdGhlckljb24uaW5uZXJIVE1MID0gc2V0V2VhdGhlckljb24oXG4gICAgICAgICAgd2VhdGhlckljb25WYWx1ZSxcbiAgICAgICAgICByZWNEYXRhLnRpbWV6b25lLFxuICAgICAgICAgIC8vIHRydWUgYmVjYXVzZSBpdCdzIGEgZnV0dXJlIGRhdGVcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF5RGF0ZScpO1xuICAgICAgICBjb25zdCBkYXlEYXRlVmFsdWUgPSBkYXlbNV07XG4gICAgICAgIGRheURhdGUudGV4dENvbnRlbnQgPSBkYXlEYXRlVmFsdWU7XG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICBtaW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWluVGVtcFN2Zyk7XG4gICAgICAgIG1pbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlNaW4pO1xuICAgICAgICBtYXhDb250YWluZXIuYXBwZW5kQ2hpbGQobWF4VGVtcFN2Zyk7XG4gICAgICAgIG1heENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlNYXgpO1xuICAgICAgICB1dmlDb250YWluZXIuYXBwZW5kQ2hpbGQodXZpZ1N2Zyk7XG4gICAgICAgIHV2aUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dmlNYXgpO1xuICAgICAgICByYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5TdmcpO1xuICAgICAgICByYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5Qcm9iKTtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2MpO1xuXG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlEYXRlKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobWluQ29udGFpbmVyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1heENvbnRhaW5lcik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dmlDb250YWluZXIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQocmFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgZGFpbHkuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsbHMgc3R5bGluZyh2YXJpYWJsZSBpY29ucylcbiAgICAgIGdldFN0eWxlKHJlY0RhdGEuY3VycmVudC53ZWF0aGVyWzBdLm1haW4sIHJlY0RhdGEudGltZXpvbmUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnT29vb3BzLCB0aGVyZSBzZWVtcyB0byBiZSBhIG5ldHdvcmsgZXJyb3IhJztcbiAgICB9XG4gIH07XG4gIHdyaXRlV2VhdGhlckRhdGEoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvbTtcbiIsImltcG9ydCBnZXREb20gZnJvbSAnLi9nZXREb20nO1xuaW1wb3J0IGdldEdlb0FQSSBmcm9tICcuL2dldEdlb0FQSSc7XG5cbmNvbnN0IGdldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbycpO1xuXG4gIC8vIHN0b3JlIHNlYXJjaHNcbiAgbGV0IHJlc3VsdEFycmF5ID0gW107XG5cbiAgLy8gcXVlcmllcyBjb29yZGluYXRlcywgc3RvcmVzIHRoZW4sIGNhbGwgZm9yIGdldERPTSB0byBjaGFuZ2Ugd2hhdCdzIGRpc3BsYXllZFxuICBjb25zdCBwcm9jZXNzSW5wdCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBjbGVhbiBzdG9yZWRcbiAgICAgIHJlc3VsdEFycmF5ID0gW107XG4gICAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgZ2V0R2VvQVBJKHZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdHZW8gZGF0YSBBUEk6ICcsIGdlb0RhdGEpO1xuXG4gICAgICAvLyBnZW5lcmF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBjb25jYXQgbmFtZSBhbmQgY29vcmRzXG4gICAgICBjb25zdCBnZW9EYXRhMCA9IFtdO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLm5hbWV9LCAke2dlb0RhdGFbMF0uY291bnRyeX1gKTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5sYXR9YCk7XG4gICAgICBnZW9EYXRhMC5wdXNoKGAke2dlb0RhdGFbMF0ubG9ufWApO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLmNvdW50cnl9YCk7XG5cbiAgICAgIC8vIHN0b3JlIGZvciBmdXR1cmUgdXNlXG4gICAgICByZXN1bHRBcnJheS5wdXNoKGdlb0RhdGEwKTtcblxuICAgICAgLy8gY2FsbHMgZm9yIHJld3JpdGluZyB0aGUgRE9NIHdpdGggbmV3IGNpdHksIHBhc3NlcyBjb3VudHJ5IHRvIHNlbGVjdCBsYW5ndWFnZVxuICAgICAgZ2V0RG9tKFxuICAgICAgICBgJHtnZW9EYXRhWzBdLmxhdH1gLFxuICAgICAgICBgJHtnZW9EYXRhWzBdLmxvbn1gLFxuICAgICAgICByZXN1bHRBcnJheVswXVswXSxcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5jb3VudHJ5fWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGdlb0RhdGEwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNlYXJjaCBvbiBlbnRlclxuICBjb25zdCBwcm9jZXNzS2JkSW5wdXQgPSAoa2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykgcHJvY2Vzc0lucHQoc2VhcmNoLnZhbHVlKTtcbiAgICBlbHNlIHNlYXJjaC5mb2N1cygpO1xuICB9O1xuXG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHByb2Nlc3NJbnB0KHNlYXJjaC52YWx1ZSkpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiBwcm9jZXNzS2JkSW5wdXQoZS5rZXkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgZ2V0Rml4ZWROdW1iZXIgPSAobiwgc3BhY2VzKSA9PiB7XG4gIGNvbnN0IGZpeGVkTiA9IG4udG9GaXhlZChzcGFjZXMpO1xuICByZXR1cm4gZml4ZWROO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rml4ZWROdW1iZXI7XG4iLCJjb25zdCBnZXRHZW9BUEkgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgZ2VvUmVzcXVlc3QgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MiZhcHBpZD04MzNjMjYxZDE5OTI2ZDEzY2M1NzhkNzk1MjhkOWQ2NGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApO1xuICBjb25zdCByZWNlaXZlZCA9IGF3YWl0IGdlb1Jlc3F1ZXN0Lmpzb24oKTtcbiAgcmV0dXJuIHJlY2VpdmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0R2VvQVBJO1xuIiwiY29uc3QgZ2V0SG91ciA9IChtcykgPT4ge1xuICAvLyB1bml4IGVwb2NoIHRvIGRhdGVcbiAgY29uc3QgbmV3RXBvY2ggPSBtcyAqIDEwMDA7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXdFcG9jaCk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0SG91cjtcbiIsImNvbnN0IGdldE5lYXREYXRlID0gKGRhdGUpID0+IHtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gIG5ld0RhdGUgPSBuZXdEYXRlLnRvU3RyaW5nKCkuc2xpY2UoNCwgMTApO1xuICByZXR1cm4gbmV3RGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXROZWF0RGF0ZTtcbiIsIi8vIHN0cmlwcyBzZWNvbmRzIGZyb20gbG9jYWxlVGltZVxuY29uc3QgZ2V0Tm93VGltZSA9ICh0aW1lem9uZSkgPT4ge1xuICBjb25zdCBub3dIb3VyID0gbmV3IERhdGUoXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lOiBgJHt0aW1lem9uZX1gIH0pXG4gICk7XG4gIHJldHVybiBub3dIb3VyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE5vd1RpbWU7XG4iLCJpbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltZy9pY29ucy9tYWduaWZ5LnN2Zyc7XG5pbXBvcnQgaHVtaWRpdHlJY29uIGZyb20gJy4vaW1nL2ljb25zL3dhdGVyLW91dGxpbmUuc3ZnJztcbmltcG9ydCB1dkljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2hpdGUtYmFsYW5jZS1zdW5ueS5zdmcnO1xuaW1wb3J0IGdhdWdlSWNvbiBmcm9tICcuL2ltZy9pY29ucy9nYXVnZS5zdmcnO1xuaW1wb3J0IHN1bnJpc2VJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnJztcbmltcG9ydCBzdW5zZXRJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnktb2ZmLnN2Zyc7XG5pbXBvcnQgdmlzaWJpbGl0eUljb24gZnJvbSAnLi9pbWcvaWNvbnMvYmlub2N1bGFycy5zdmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuL2ltZy9pY29ucy9jbG91ZC1wZXJjZW50LnN2Zyc7XG5pbXBvcnQgd2luZEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci13aW5keS5zdmcnO1xuaW1wb3J0IHJhaW5JY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItcG91cmluZy5zdmcnO1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc25vd3kuc3ZnJztcbmltcG9ydCBtYXhUZW1wSWNvbiBmcm9tICcuL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLXVwLnN2Zyc7XG5pbXBvcnQgbWluVGVtcEljb24gZnJvbSAnLi9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItY2hldnJvbi1kb3duLnN2Zyc7XG5pbXBvcnQgcmFpblBJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItcmFpbnkuc3ZnJztcbmltcG9ydCB0aGVybW9JY29uIGZyb20gJy4vaW1nL2ljb25zL3RoZXJtb21ldGVyLWhpZ2guc3ZnJztcbmltcG9ydCBzZXRXZWF0aGVySWNvbiBmcm9tICcuL3NldFdlYXRoZXJJY29uJztcblxuY29uc3QgZ2V0U3R5bGUgPSAoY3VycmVudFdlYXRoZXIsIHRpbWUpID0+IHtcbiAgY29uc3QgZ29CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28nKTtcbiAgY29uc3QgaHVtaWRpdHlTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlTdmcnKTtcbiAgY29uc3QgcHJlc3NTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3NTdmcnKTtcbiAgY29uc3Qgc3VucmlzZVN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlU3ZnJyk7XG4gIGNvbnN0IHN1bnNldFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXRTdmcnKTtcbiAgY29uc3QgdmlzaWJpbGl0eVN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5U3ZnJyk7XG4gIGNvbnN0IGNsb3VkU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkU3ZnJyk7XG4gIGNvbnN0IHdpbmRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFN2ZycpO1xuICBjb25zdCByYWluU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW5TdmcnKTtcbiAgY29uc3Qgc25vd1N2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93U3ZnJyk7XG4gIGNvbnN0IHdlYXRoZXJTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlclN2ZycpO1xuICBjb25zdCB1dlN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51dlN2ZycpO1xuICBjb25zdCBtaW5UZW1wU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pblRlbXBTdmcnKTtcbiAgY29uc3QgbWF4VGVtcFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhUZW1wU3ZnJyk7XG4gIGNvbnN0IHJhaW5QZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhaW5QZXJjZW50Jyk7XG4gIGNvbnN0IHRlbXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBJY29uJyk7XG5cbiAgdGVtcEljb24uaW5uZXJIVE1MID0gdGhlcm1vSWNvbjtcbiAgZ29CdG4uaW5uZXJIVE1MID0gc2VhcmNoSWNvbjtcbiAgaHVtaWRpdHlTdmcuaW5uZXJIVE1MID0gaHVtaWRpdHlJY29uO1xuICBwcmVzc1N2Zy5pbm5lckhUTUwgPSBnYXVnZUljb247XG4gIHN1bnJpc2VTdmcuaW5uZXJIVE1MID0gc3VucmlzZUljb247XG4gIHN1bnNldFN2Zy5pbm5lckhUTUwgPSBzdW5zZXRJY29uO1xuICB2aXNpYmlsaXR5U3ZnLmlubmVySFRNTCA9IHZpc2liaWxpdHlJY29uO1xuICBjbG91ZFN2Zy5pbm5lckhUTUwgPSBjbG91ZEljb247XG4gIHdpbmRTdmcuaW5uZXJIVE1MID0gd2luZEljb247XG4gIHJhaW5TdmcuaW5uZXJIVE1MID0gcmFpbkljb247XG4gIHNub3dTdmcuaW5uZXJIVE1MID0gc25vd0ljb247XG5cbiAgLy8gc2hhcmVkIGljb25zIHdpdGggZm9yZWNhc3RcbiAgdXZTdmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuaW5uZXJIVE1MID0gdXZJY29uO1xuICB9KTtcbiAgbWluVGVtcFN2Zy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSBtaW5UZW1wSWNvbjtcbiAgfSk7XG4gIG1heFRlbXBTdmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuaW5uZXJIVE1MID0gbWF4VGVtcEljb247XG4gIH0pO1xuICByYWluUGVyY2VudC5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSByYWluUEljb247XG4gIH0pO1xuXG4gIC8vIHByb2Nlc3Mgd2VhdGhlciBkZXNjcmlwdGlvbiBpY29uIHBhc3NpbmcgdGhyb3VnaCB0aGUgcmVjZWl2ZWQgYXJyYXksIGNoZWNrcyBuaWdodFxuICB3ZWF0aGVyU3ZnLmlubmVySFRNTCA9IHNldFdlYXRoZXJJY29uKGN1cnJlbnRXZWF0aGVyLCB0aW1lLCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTdHlsZTtcbiIsImNvbnN0IGdldFdlYXRoZXJBUEkgPSBhc3luYyAobGF0LCBsb24sIGNvdW50cnkpID0+IHtcbiAgaWYgKGNvdW50cnkgPT09ICdCUicpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZBUFBJRD04MzNjMjYxZDE5OTI2ZDEzY2M1NzhkNzk1MjhkOWQ2NCZ1bml0cz1tZXRyaWMmbGFuZz1wdF9icmAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVjZWl2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZWNlaXZlZERhdGE7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JkFQUElEPTgzM2MyNjFkMTk5MjZkMTNjYzU3OGQ3OTUyOGQ5ZDY0JnVuaXRzPW1ldHJpY2AsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApO1xuICAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiBwYXJzaW5nIHRoZSByZXNwb25zZSBib2R5IHRleHQgYXMgSlNPTlxuICBjb25zdCByZWNlaXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWNlaXZlZERhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyQVBJO1xuIiwiY29uc3QgZ2V0V2luZERpciA9IChkZWcpID0+IHtcbiAgbGV0IHdpbmREaXI7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBkZWcgPCA0MCB8fCBkZWcgPT09IDM2MDpcbiAgICAgIHdpbmREaXIgPSAnTm9ydGgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gNDAgJiYgZGVnIDwgOTA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRoZWFzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSA5MCAmJiBkZWcgPCAxMzU6XG4gICAgICB3aW5kRGlyID0gJ0Vhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMTM1ICYmIGRlZyA8IDE4MDpcbiAgICAgIHdpbmREaXIgPSAnU291dGhlYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDE4MCAmJiBkZWcgPCAyMjU6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRoJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDIyNSAmJiBkZWcgPCAyNzA6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSAyNzAgJiYgZGVnIDwgMzE1OlxuICAgICAgd2luZERpciA9ICdXZXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDMxNSAmJiBkZWcgPCAzNjA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2luZERpciA9ICdPb29wcy4uLic7XG4gIH1cbiAgcmV0dXJuIHdpbmREaXI7XG59O1xuLy8gSkVTVFxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kRGlyO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBnZXRXaW5kRGlyO1xuIiwiaW1wb3J0IGdldE5lYXREYXRlIGZyb20gJy4vZ2V0TmVhdERhdGUnO1xuXG5jb25zdCBwcm9jZXNzRGFpbHlEYXRhID0gKHJlY0FycmF5KSA9PiB7XG4gIC8vIHB1c2hlcyB0byBhIG5ldyBhcnJheSBvbmx5IGRhdGEgdGhhdCB3ZSB3YW50XG4gIGNvbnN0IGRhaWx5VGVtcHMgPSBbXTtcbiAgcmVjQXJyYXkuZm9yRWFjaCgoZGF5KSA9PlxuICAgIGRhaWx5VGVtcHMucHVzaChbXG4gICAgICBkYXkudGVtcC5taW4sXG4gICAgICBkYXkudGVtcC5tYXgsXG4gICAgICBkYXkudXZpLFxuICAgICAgZGF5LnBvcCxcbiAgICAgIGRheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgZ2V0TmVhdERhdGUoZGF5LmR0KSxcbiAgICAgIGRheS53ZWF0aGVyWzBdLm1haW5cbiAgICBdKVxuICApO1xuICByZXR1cm4gZGFpbHlUZW1wcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NEYWlseURhdGE7XG4iLCJpbXBvcnQgY2xlYXJJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnJztcbmltcG9ydCByYWluSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXBvdXJpbmcuc3ZnJztcbmltcG9ydCBjbG91ZEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1jbG91ZHkuc3ZnJztcbmltcG9ydCBtb29uSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLW5pZ2h0LnN2Zyc7XG5pbXBvcnQgc25vd0ljb24gZnJvbSAnLi9pbWcvaWNvbnMvc25vd2ZsYWtlLnN2Zyc7XG5pbXBvcnQgZ2V0Tm93VGltZSBmcm9tICcuL2dldE5vd1RpbWUnO1xuXG5jb25zdCBzZXRXZWF0aGVySWNvbiA9ICh3ZWF0aGVyLCB0aW1lLCBmdXR1cmUpID0+IHtcbiAgLy8gY29udmVydCB0byBob3VycyB0byBjaGVjayBuaWdodFxuICBjb25zdCB0aW1lTm93ID0gZ2V0Tm93VGltZSh0aW1lKS5nZXRIb3VycygpO1xuXG4gIC8vIG5pZ2h0IGJvb2xlYW4gY2hlY2tcbiAgY29uc3QgY29uZGl0aW9uMSA9IHRpbWVOb3cgPiAxOTtcbiAgY29uc3QgY29uZGl0aW9uMiA9IHRpbWVOb3cgPCA3O1xuICBjb25zdCBuaWdodCA9IGNvbmRpdGlvbjEgfHwgY29uZGl0aW9uMjtcblxuICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICBjYXNlICdDbGVhcic6XG4gICAgICAvLyBmdXR1cmUgaXMgdXNlZCB0byBzaG93IGljb25zIG9uIGZvcmVjYXN0XG4gICAgICBpZiAoIW5pZ2h0IHx8IGZ1dHVyZSkgcmV0dXJuIGNsZWFySWNvbjtcbiAgICAgIHJldHVybiBtb29uSWNvbjtcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIHJldHVybiByYWluSWNvbjtcbiAgICBjYXNlICdDbG91ZHMnOlxuICAgICAgcmV0dXJuIGNsb3VkSWNvbjtcbiAgICBjYXNlICdTbm93JzpcbiAgICAgIHJldHVybiBzbm93SWNvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coJ0RpZmZlcmVudCB3ZWF0aGVyIGRldGVjdGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFdlYXRoZXJJY29uO1xuIiwiY29uc3QgdmVyaWZ5QWxlcnRzID0gKG9iaikgPT4ge1xuICBjb25zdCBoYXNBbGVydHMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCAnYWxlcnRzJyk7XG4gIHJldHVybiBoYXNBbGVydHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlBbGVydHM7XG4iLCJjb25zdCB2ZXJpZnlSYWluID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzUmFpbiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdyYWluJyk7XG4gIHJldHVybiBoYXNSYWluO1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVJhaW47XG4iLCJjb25zdCB2ZXJpZnlTbm93ID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzU25vdyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdzbm93Jyk7XG4gIHJldHVybiBoYXNTbm93O1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVNub3c7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXREb20gZnJvbSAnLi9nZXREb20nO1xuaW1wb3J0IGdldEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vZ2V0RXZlbnRMaXN0ZW5lcnMnO1xuXG4vLyBkZWZhdWx0IGNhbXBpbmFzXG5nZXREb20oLTIyLjkwNTU2LCAtNDcuMDYwODMsICdDYW1waW5hcywgQlInLCAnQlInKTtcbmdldEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=