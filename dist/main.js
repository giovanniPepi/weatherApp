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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px !important;\n  }\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\n  font-weight: 500;\n  font-style: medium;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');\n  font-weight: 600;\n  font-style: semibold;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');\n  font-weight: 700;\n  font-style: bold;\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  /* tries to adapt to screen sizes*/\n  --fontSize: calc(0.5rem + 0.2vw + 0.8vh);\n  --fontSizeSemiHighlight: 1.4rem;\n  --fontSizeHightlight: 3rem;\n  --containerRadius: 1rem;\n}\n/* body * {\n  border: 0.1px solid red;\n} */\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-size: var(--fontSize);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n  font-style: medium;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: var(--sidePaddings);\n  gap: 1rem;\n  min-height: 33vh;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 350px);\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 1rem;\n  gap: 2rem;\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 20rem;\n  height: 13rem;\n  padding: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n}\n\n/*Current weather/search area */\n/* limits growth when alerts are present */\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  justify-content: flex-start;\n  gap: 0.7rem;\n  min-width: 30vw;\n}\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n\n.alerts {\n  max-width: 14vw;\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n}\n.currentWeather {\n  width: 21vw;\n  min-width: 21rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: space-between;\n  gap: 0.5rem;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n}\n.weatherCont,\n.tempContainer,\n.humidityCont,\n.uvCont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--fontSizeHightlight);\n}\n/* revert to original font size */\n.humidityCont,\n.uvCont {\n  font-size: inherit;\n}\n.name {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.date {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.feelsLike {\n  font-style: italic;\n  font-size: 0.9rem;\n}\n/*Limit alerts font */\n.alerts {\n  font-size: 0.9rem;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.19rem;\n}\n\n/* wind adjusts */\n.windData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1.2rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;;IAEE,0BAA0B;EAC5B;AACF;AACA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,kFAAkF;EAClF,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kCAAkC;EAClC,wCAAwC;EACxC,+BAA+B;EAC/B,0BAA0B;EAC1B,uBAAuB;AACzB;AACA;;GAEG;AACH;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,0BAA0B;EAC1B,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;AACpB;AACA,uBAAuB;AACvB;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;EAC5B,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,8CAA8C;EAC9C,qCAAqC;EACrC,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,0BAA0B;EAC1B,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;AACf;AACA,SAAS;AACT,0BAA0B;AAC1B;;;EAGE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA,oBAAoB;AACpB;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;;;EAGE,aAAa;AACf;;AAEA,+BAA+B;AAC/B,0CAA0C;AAC1C;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,WAAW;EACX,eAAe;AACjB;AACA,kDAAkD;AAClD;;;;EAIE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,qCAAqC;AACvC;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,qBAAqB;AACvB;AACA;;;;EAIE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,oCAAoC;AACtC;AACA,iCAAiC;AACjC;;EAEE,kBAAkB;AACpB;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,uCAAuC;AACzC;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;AACA,qBAAqB;AACrB;EACE,iBAAiB;AACnB;AACA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;AACA,gCAAgC;AAChC;;EAEE,oBAAoB;AACtB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,oBAAoB;AACtB;;AAEA,kCAAkC;AAClC;;EAEE,qCAAqC;EACrC,eAAe;AACjB;;AAEA,qBAAqB;AACrB;EACE,uBAAuB;AACzB","sourcesContent":["@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px !important;\n  }\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\n  font-weight: 500;\n  font-style: medium;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');\n  font-weight: 600;\n  font-style: semibold;\n}\n@font-face {\n  font-family: 'Raleway';\n  src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');\n  font-weight: 700;\n  font-style: bold;\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  /* tries to adapt to screen sizes*/\n  --fontSize: calc(0.5rem + 0.2vw + 0.8vh);\n  --fontSizeSemiHighlight: 1.4rem;\n  --fontSizeHightlight: 3rem;\n  --containerRadius: 1rem;\n}\n/* body * {\n  border: 0.1px solid red;\n} */\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-size: var(--fontSize);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n  font-style: medium;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: var(--sidePaddings);\n  gap: 1rem;\n  min-height: 33vh;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 350px);\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 1rem;\n  gap: 2rem;\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 20rem;\n  height: 13rem;\n  padding: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n}\n\n/*Current weather/search area */\n/* limits growth when alerts are present */\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  justify-content: flex-start;\n  gap: 0.7rem;\n  min-width: 30vw;\n}\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n\n.alerts {\n  max-width: 14vw;\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n}\n.currentWeather {\n  width: 21vw;\n  min-width: 21rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: space-between;\n  gap: 0.5rem;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n}\n.weatherCont,\n.tempContainer,\n.humidityCont,\n.uvCont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  font-size: var(--fontSizeHightlight);\n}\n/* revert to original font size */\n.humidityCont,\n.uvCont {\n  font-size: inherit;\n}\n.name {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 700;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.date {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: var(--fontSizeSemiHighlight);\n}\n.feelsLike {\n  font-style: italic;\n  font-size: 0.9rem;\n}\n/*Limit alerts font */\n.alerts {\n  font-size: 0.9rem;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.19rem;\n}\n\n/* wind adjusts */\n.windData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1.2rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n"],"sourceRoot":""}]);
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

        const tempContainer = document.createElement('div');
        tempContainer.setAttribute('class', 'forecastItemContainer');
        const dayMin = document.createElement('div');
        const dayMinValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[0], 0);
        dayMin.textContent = `${dayMinValue} ºC`;
        const minTempSvg = document.createElement('svg');
        minTempSvg.setAttribute('class', 'minTempSvg');

        const tempContainer2 = document.createElement('div');
        tempContainer2.setAttribute('class', 'forecastItemContainer');
        const dayMax = document.createElement('div');
        const dayMaxValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[1], 0);
        dayMax.textContent = `${dayMaxValue} ºC`;
        const maxTempSvg = document.createElement('div');
        maxTempSvg.setAttribute('class', 'maxTempSvg');

        const uvRainContainer = document.createElement('div');
        uvRainContainer.setAttribute('class', 'forecastItemContainer');
        const uviMax = document.createElement('div');
        const uviMaxValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[2], 0);
        uviMax.textContent = `UV ${uviMaxValue}`;
        const uvigSvg = document.createElement('svg');
        uvigSvg.setAttribute('class', 'uvSvg');

        const rainProb = document.createElement('div');
        const rainProbValue = `${(day[3] * 100).toFixed(0)} %`;
        rainProb.textContent = rainProbValue;
        const rainSvg = document.createElement('svg');
        rainSvg.setAttribute('class', 'rainPercent');

        const weatherContainer = document.createElement('div');
        weatherContainer.setAttribute('class', 'forecastItemContainer');
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
        tempContainer.appendChild(minTempSvg);
        tempContainer.appendChild(dayMin);
        tempContainer2.appendChild(maxTempSvg);
        tempContainer2.appendChild(dayMax);
        uvRainContainer.appendChild(uvigSvg);
        uvRainContainer.appendChild(uviMax);
        uvRainContainer.appendChild(rainSvg);
        uvRainContainer.appendChild(rainProb);
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherDesc);

        dayContainer.appendChild(dayDate);
        dayContainer.appendChild(weatherContainer);
        dayContainer.appendChild(tempContainer);
        dayContainer.appendChild(tempContainer2);
        dayContainer.appendChild(uvRainContainer);

        daily.appendChild(dayContainer);
      }

      // calls styling(variable icons)

      // check for alerts and cleans afterwards
      if ((0,_verifyAlerts__WEBPACK_IMPORTED_MODULE_12__["default"])(recData)) {
        alerts.textContent = recData.alerts[0].description;
        (0,_getStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(recData.current.weather[0].main, recData.timezone, true);
      } else {
        (0,_getStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(recData.current.weather[0].main, recData.timezone, false);
        alerts.textContent = '';
      }
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

/***/ "./src/getNight.js":
/*!*************************!*\
  !*** ./src/getNight.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getNight = (timeNow) => {
  // night boolean check
  const condition1 = timeNow > 19;
  const condition2 = timeNow < 7;
  const night = condition1 || condition2;
  return night;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNight);


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
/* harmony import */ var _setBackground__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setBackground */ "./src/setBackground.js");


















const getStyle = (currentWeather, time, hasAlerts) => {
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
  const body = document.querySelector('body');

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

  // sets body background according to weather/day/night condition
  (0,_setBackground__WEBPACK_IMPORTED_MODULE_16__["default"])(body, time, currentWeather, hasAlerts);
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

/***/ "./src/setBackground.js":
/*!******************************!*\
  !*** ./src/setBackground.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_pexels_brett_sayles_912364_1k_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pexels-brett-sayles-912364_1k.jpg */ "./src/img/pexels-brett-sayles-912364_1k.jpg");
/* harmony import */ var _img_pexels_drift_shutterbug_2085998_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pexels-drift-shutterbug-2085998.jpg */ "./src/img/pexels-drift-shutterbug-2085998.jpg");
/* harmony import */ var _img_pexels_brazil_topno_9604806_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pexels-brazil-topno-9604806.jpg */ "./src/img/pexels-brazil-topno-9604806.jpg");
/* harmony import */ var _img_pexels_rahul_pandit_2816625_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pexels-rahul-pandit-2816625_rainy.jpg */ "./src/img/pexels-rahul-pandit-2816625_rainy.jpg");
/* harmony import */ var _img_pexels_pixabay_158163_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pexels-pixabay-158163_clouds.jpg */ "./src/img/pexels-pixabay-158163_clouds.jpg");
/* harmony import */ var _img_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pexels-brett-sayles-3910141.jpg */ "./src/img/pexels-brett-sayles-3910141.jpg");
/* harmony import */ var _img_pexels_pixabay_259659_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pexels-pixabay-259659.jpg */ "./src/img/pexels-pixabay-259659.jpg");
/* harmony import */ var _img_pexels_martin_mariani_3801463_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pexels-martin-mariani-3801463.jpg */ "./src/img/pexels-martin-mariani-3801463.jpg");
/* harmony import */ var _img_pexels_aleksandra_blinova_8659252_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/pexels-aleksandra-blinova-8659252.jpg */ "./src/img/pexels-aleksandra-blinova-8659252.jpg");
/* harmony import */ var _img_pexels_pixabay_531360_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/pexels-pixabay-531360.jpg */ "./src/img/pexels-pixabay-531360.jpg");
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");
/* harmony import */ var _getNight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNight */ "./src/getNight.js");
/* harmony import */ var _setUIcolors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setUIcolors */ "./src/setUIcolors.js");














const setBackground = (body, timeNow, currentWeather, hasAlerts) => {
  console.log((0,_getNowTime__WEBPACK_IMPORTED_MODULE_10__["default"])(timeNow).getHours(), currentWeather);

  // checks if congerted timezone to hours is night
  const night = (0,_getNight__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_getNowTime__WEBPACK_IMPORTED_MODULE_10__["default"])(timeNow).getHours());

  // same for all possibilities
  body.style.backgroundSize = 'cover';

  // body.style.backgroundImage
  switch (currentWeather) {
    case 'Clear':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_drift_shutterbug_2085998_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#FDE68A', '#672dcb', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_912364_1k_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      }
      break;
    case 'Rain':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_rahul_pandit_2816625_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#fdfbfb', '#BEF264', '#040404ab', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brazil_topno_9604806_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
      }
      break;
    case 'Clouds':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_158163_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Fog':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_531360_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_aleksandra_blinova_8659252_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Snow':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_martin_mariani_3801463_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#FDE68A', '#672dcb', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_259659_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_12__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      }
      break;
    default:
      body.style.backgroundImage = 'none';
  }

  // fog
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setBackground);


/***/ }),

/***/ "./src/setUIcolors.js":
/*!****************************!*\
  !*** ./src/setUIcolors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setUIcolors = (fontColor, svgColor, sectionBackground, hasAlerts) => {
  const svgs = document.querySelectorAll('svg');
  const body = document.querySelector('body');

  // items to have bg applied to:
  const highlight = document.querySelector('.highlight');
  const currentWeather = document.querySelector('.currentWeather');
  const searchArea = document.querySelector('.searchArea');
  const dayContainer = document.querySelectorAll('.dayContainer');
  const alerts = document.querySelector('.alerts');

  // push them all into an array
  const bgArray = [];
  bgArray.push(highlight, currentWeather, searchArea);
  dayContainer.forEach((e) => bgArray.push(e));

  if (hasAlerts) {
    alerts.style.display = 'flex';
    alerts.style.backgroundColor = sectionBackground;
  } else {
    alerts.style.display = 'none';
  }

  // apply styles
  body.style.color = fontColor;
  svgs.forEach((e) => {
    e.style.fill = svgColor;
  });
  bgArray.forEach((e) => {
    e.style.backgroundColor = sectionBackground;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUIcolors);


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
/* harmony import */ var _getNight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNight */ "./src/getNight.js");








const setWeatherIcon = (weather, time, future) => {
  // convert to hours to check night
  const timeNow = (0,_getNowTime__WEBPACK_IMPORTED_MODULE_5__["default"])(time).getHours();

  // night check
  (0,_getNight__WEBPACK_IMPORTED_MODULE_6__["default"])(timeNow);

  switch (weather) {
    case 'Clear':
      // future is used to show icons on forecast
      if (!_getNight__WEBPACK_IMPORTED_MODULE_6__["default"] || future) return (_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0___default());
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


/***/ }),

/***/ "./src/img/pexels-aleksandra-blinova-8659252.jpg":
/*!*******************************************************!*\
  !*** ./src/img/pexels-aleksandra-blinova-8659252.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9234fc584c038eeb86ac.jpg";

/***/ }),

/***/ "./src/img/pexels-brazil-topno-9604806.jpg":
/*!*************************************************!*\
  !*** ./src/img/pexels-brazil-topno-9604806.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c5453dd03d2630cf8a7.jpg";

/***/ }),

/***/ "./src/img/pexels-brett-sayles-3910141.jpg":
/*!*************************************************!*\
  !*** ./src/img/pexels-brett-sayles-3910141.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b1d9d70d02d8f7ea588c.jpg";

/***/ }),

/***/ "./src/img/pexels-brett-sayles-912364_1k.jpg":
/*!***************************************************!*\
  !*** ./src/img/pexels-brett-sayles-912364_1k.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2976851cf620adf98ef.jpg";

/***/ }),

/***/ "./src/img/pexels-drift-shutterbug-2085998.jpg":
/*!*****************************************************!*\
  !*** ./src/img/pexels-drift-shutterbug-2085998.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1942838579e5b2bd5f6f.jpg";

/***/ }),

/***/ "./src/img/pexels-martin-mariani-3801463.jpg":
/*!***************************************************!*\
  !*** ./src/img/pexels-martin-mariani-3801463.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "61a7048f0dcf9d1af64b.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-158163_clouds.jpg":
/*!**************************************************!*\
  !*** ./src/img/pexels-pixabay-158163_clouds.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b5b2890214cfbc448e9c.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-259659.jpg":
/*!*******************************************!*\
  !*** ./src/img/pexels-pixabay-259659.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "67fb0238b99d25d68a16.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-531360.jpg":
/*!*******************************************!*\
  !*** ./src/img/pexels-pixabay-531360.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3ce6f8f0422a0509fda.jpg";

/***/ }),

/***/ "./src/img/pexels-rahul-pandit-2816625_rainy.jpg":
/*!*******************************************************!*\
  !*** ./src/img/pexels-rahul-pandit-2816625_rainy.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1e1f2c7299ee0605ee06.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTO0FBQ3NCOztBQUVwRDtBQUNBLG1EQUFNO0FBQ04sOERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9iaW5vY3VsYXJzLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9jbG91ZC1wZXJjZW50LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9nYXVnZS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvbWFnbmlmeS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvc25vd2ZsYWtlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLWRvd24uc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3RoZXJtb21ldGVyLWNoZXZyb24tdXAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3RoZXJtb21ldGVyLWhpZ2guc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dhdGVyLW91dGxpbmUuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItY2xvdWR5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLW5pZ2h0LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXBvdXJpbmcuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItcmFpbnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItc25vd3kuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItc3Vubnktb2ZmLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXN1bm55LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXdpbmR5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93aGl0ZS1iYWxhbmNlLXN1bm55LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NhcGl0YWxpemVGaXJzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbnZlcnRUb0ttLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0RGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldERvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0Rml4ZWROdW1iZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRHZW9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRIb3VyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0TmVhdERhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXROaWdodC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldE5vd1RpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRTdHlsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldFdlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRXaW5kRGlyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcHJvY2Vzc0RhaWx5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NldEJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zZXRVSWNvbG9ycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NldFdlYXRoZXJJY29uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmVyaWZ5QWxlcnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmVyaWZ5UmFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZlcmlmeVNub3cuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICBpbnB1dCxcXG4gICNzZWFyY2gge1xcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA2MDAmZGlzcGxheT1zd2FwJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogc2VtaWJvbGQ7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gIHNyYzogdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcbjpyb290IHtcXG4gIC0tc2lkZVBhZGRpbmdzOiAxLjVyZW07XFxuICAtLW1pZGRsZUdhcDogNHJlbTtcXG4gIC8qIHRyaWVzIHRvIGFkYXB0IHRvIHNjcmVlbiBzaXplcyovXFxuICAtLWZvbnRTaXplOiBjYWxjKDAuNXJlbSArIDAuMnZ3ICsgMC44dmgpO1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHQ6IDEuNHJlbTtcXG4gIC0tZm9udFNpemVIaWdodGxpZ2h0OiAzcmVtO1xcbiAgLS1jb250YWluZXJSYWRpdXM6IDFyZW07XFxufVxcbi8qIGJvZHkgKiB7XFxuICBib3JkZXI6IDAuMXB4IHNvbGlkIHJlZDtcXG59ICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcbnN2ZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZpbGw6IHJnYigxMTAsIDM1LCAyMjMpO1xcbn1cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplKTtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xcbn1cXG4vKlNwYWNlcyB3ZWF0aGVyIGluZm9zKi9cXG4uY3VycmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2lkZVBhZGRpbmdzKTtcXG4gIGdhcDogMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDMzdmg7XFxufVxcbi5kYWlseSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDM1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDFmcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAxM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi8qICBTVkcgKi9cXG4vKiB0YXJnZXRzIGZvcmVjYXN0IFNWR3MgKi9cXG4uZGF5RGF0ZSB+IGRpdiA+IHN2ZyA+IHN2ZyxcXG4ubWF4VGVtcFN2ZyA+IHN2ZyxcXG4ubWluVGVtcFN2ZyA+IHN2ZyB7XFxuICBtaW4td2lkdGg6IDEuN3JlbTtcXG4gIG1heC13aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBSaWdodCBzaWRlIGRpdnMgKi9cXG4uY3VycmVudFdlYXRoZXIgPiAqLFxcbi53ZWF0aGVyU3VtbWFyeSA+ICosXFxuLmRheUNvbnRhaW5lciA+ICosXFxuLnNlYXJjaENvbnRhaW5lciA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnJhaW4xaENvbnQsXFxuLnNub3cxaENvbnQsXFxuLmN1cnJlbnRTdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypDdXJyZW50IHdlYXRoZXIvc2VhcmNoIGFyZWEgKi9cXG4vKiBsaW1pdHMgZ3Jvd3RoIHdoZW4gYWxlcnRzIGFyZSBwcmVzZW50ICovXFxuLmhpZ2hsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuN3JlbTtcXG4gIG1pbi13aWR0aDogMzB2dztcXG59XFxuLyogY2VudGVycyBpdHNlbGYgZGVzcGl0ZSBvZiBvdGhlciBmbGV4IHNldHRpbmdzICovXFxuLmZlZWxzTGlrZSxcXG4uZGF0ZSxcXG4ubmFtZSxcXG4udGltZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydHMge1xcbiAgbWF4LXdpZHRoOiAxNHZ3O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG59XFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gIHdpZHRoOiAyMXZ3O1xcbiAgbWluLXdpZHRoOiAyMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5zZWFyY2hDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDh2aDtcXG59XFxuLnNlYXJjaEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbn1cXG4jc2VhcmNoIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLndlYXRoZXJDb250LFxcbi50ZW1wQ29udGFpbmVyLFxcbi5odW1pZGl0eUNvbnQsXFxuLnV2Q29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdodGxpZ2h0KTtcXG59XFxuLyogcmV2ZXJ0IHRvIG9yaWdpbmFsIGZvbnQgc2l6ZSAqL1xcbi5odW1pZGl0eUNvbnQsXFxuLnV2Q29udCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbn1cXG4uZGF0ZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG59XFxuLmZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLypMaW1pdCBhbGVydHMgZm9udCAqL1xcbi5hbGVydHMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi8qZGFpbHkgZm9yZWNhc3QgKi9cXG4uZGF5RGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi8qIHRyaWNrIHRvIGFwcGVhciBjZW50cmFsaXplZCAqL1xcbi5taW5UZW1wU3ZnLFxcbi5tYXhUZW1wU3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjE5cmVtO1xcbn1cXG5cXG4vKiB3aW5kIGFkanVzdHMgKi9cXG4ud2luZERhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53aW5kU3BlZWQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi8qIGNvbnRhaW5lcnMgb3BhY2l0eSBiYWNrZ3JvdW5kICovXFxubWFpbiA+IHNlY3Rpb24gPiBzZWN0aW9uLFxcbi5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG59XFxuXFxuLyogaGlnaCBzcGVjaWZpY2l0eSAqL1xcbi5kYXlDb250YWluZXIgPiAqIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O0lBRUUsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrRkFBa0Y7RUFDbEYsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtGQUFrRjtFQUNsRixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0ZB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RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIGlucHV0LFxcbiAgI3NlYXJjaCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICBzcmM6IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG1lZGl1bTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDYwMCZkaXNwbGF5PXN3YXAnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBzZW1pYm9sZDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuOnJvb3Qge1xcbiAgLS1zaWRlUGFkZGluZ3M6IDEuNXJlbTtcXG4gIC0tbWlkZGxlR2FwOiA0cmVtO1xcbiAgLyogdHJpZXMgdG8gYWRhcHQgdG8gc2NyZWVuIHNpemVzKi9cXG4gIC0tZm9udFNpemU6IGNhbGMoMC41cmVtICsgMC4ydncgKyAwLjh2aCk7XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS40cmVtO1xcbiAgLS1mb250U2l6ZUhpZ2h0bGlnaHQ6IDNyZW07XFxuICAtLWNvbnRhaW5lclJhZGl1czogMXJlbTtcXG59XFxuLyogYm9keSAqIHtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgcmVkO1xcbn0gKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZmlsbDogcmdiKDExMCwgMzUsIDIyMyk7XFxufVxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemUpO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxufVxcbi8qU3BhY2VzIHdlYXRoZXIgaW5mb3MqL1xcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlUGFkZGluZ3MpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMzN2aDtcXG59XFxuLmRhaWx5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0bywgMWZyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDJyZW07XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDEzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLyogIFNWRyAqL1xcbi8qIHRhcmdldHMgZm9yZWNhc3QgU1ZHcyAqL1xcbi5kYXlEYXRlIH4gZGl2ID4gc3ZnID4gc3ZnLFxcbi5tYXhUZW1wU3ZnID4gc3ZnLFxcbi5taW5UZW1wU3ZnID4gc3ZnIHtcXG4gIG1pbi13aWR0aDogMS43cmVtO1xcbiAgbWF4LXdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgZGl2cyAqL1xcbi5jdXJyZW50V2VhdGhlciA+ICosXFxuLndlYXRoZXJTdW1tYXJ5ID4gKixcXG4uZGF5Q29udGFpbmVyID4gKixcXG4uc2VhcmNoQ29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ucmFpbjFoQ29udCxcXG4uc25vdzFoQ29udCxcXG4uY3VycmVudFN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKkN1cnJlbnQgd2VhdGhlci9zZWFyY2ggYXJlYSAqL1xcbi8qIGxpbWl0cyBncm93dGggd2hlbiBhbGVydHMgYXJlIHByZXNlbnQgKi9cXG4uaGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMC43cmVtO1xcbiAgbWluLXdpZHRoOiAzMHZ3O1xcbn1cXG4vKiBjZW50ZXJzIGl0c2VsZiBkZXNwaXRlIG9mIG90aGVyIGZsZXggc2V0dGluZ3MgKi9cXG4uZmVlbHNMaWtlLFxcbi5kYXRlLFxcbi5uYW1lLFxcbi50aW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFsZXJ0cyB7XFxuICBtYXgtd2lkdGg6IDE0dnc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbn1cXG4uY3VycmVudFdlYXRoZXIge1xcbiAgd2lkdGg6IDIxdnc7XFxuICBtaW4td2lkdGg6IDIxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogOHZoO1xcbn1cXG4uc2VhcmNoQXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lclJhZGl1cyk7XFxufVxcbiNzZWFyY2gge1xcbiAgYWxsOiB1bnNldDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4ud2VhdGhlckNvbnQsXFxuLnRlbXBDb250YWluZXIsXFxuLmh1bWlkaXR5Q29udCxcXG4udXZDb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZUhpZ2h0bGlnaHQpO1xcbn1cXG4vKiByZXZlcnQgdG8gb3JpZ2luYWwgZm9udCBzaXplICovXFxuLmh1bWlkaXR5Q29udCxcXG4udXZDb250IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLm5hbWUge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplU2VtaUhpZ2hsaWdodCk7XFxufVxcbi5kYXRlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbn1cXG4uZmVlbHNMaWtlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4vKkxpbWl0IGFsZXJ0cyBmb250ICovXFxuLmFsZXJ0cyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLypkYWlseSBmb3JlY2FzdCAqL1xcbi5kYXlEYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLyogdHJpY2sgdG8gYXBwZWFyIGNlbnRyYWxpemVkICovXFxuLm1pblRlbXBTdmcsXFxuLm1heFRlbXBTdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMTlyZW07XFxufVxcblxcbi8qIHdpbmQgYWRqdXN0cyAqL1xcbi53aW5kRGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndpbmRTcGVlZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLyogY29udGFpbmVycyBvcGFjaXR5IGJhY2tncm91bmQgKi9cXG5tYWluID4gc2VjdGlvbiA+IHNlY3Rpb24sXFxuLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbn1cXG5cXG4vKiBoaWdoIHNwZWNpZmljaXR5ICovXFxuLmRheUNvbnRhaW5lciA+ICoge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMSw2SDEzVjEzSDExVjZNOSwyMEExLDEgMCAwLDEgOCwyMUg1QTEsMSAwIDAsMSA0LDIwVjE1TDYsNkgxMFYxM0ExLDEgMCAwLDEgOSwxNFYyME0xMCw1SDdWM0gxMFY1TTE1LDIwVjE0QTEsMSAwIDAsMSAxNCwxM1Y2SDE4TDIwLDE1VjIwQTEsMSAwIDAsMSAxOSwyMUgxNkExLDEgMCAwLDEgMTUsMjBNMTQsNVYzSDE3VjVIMTRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE5LjM1IDEwLjAzQzE4LjY3IDYuNTkgMTUuNjQgNCAxMiA0QzkuMTEgNCA2LjYgNS42NCA1LjM1IDguMDNDMi4zNCA4LjM2IDAgMTAuOSAwIDE0QzAgMTcuMzEgMi42OSAyMCA2IDIwSDE5QzIxLjc2IDIwIDI0IDE3Ljc2IDI0IDE1QzI0IDEyLjM2IDIxLjk1IDEwLjIyIDE5LjM1IDEwLjAzTTkuNDUgOS4wM0MxMC4yMyA5LjAzIDEwLjg3IDkuNjcgMTAuODcgMTAuNDVTMTAuMjMgMTEuODcgOS40NSAxMS44NyA4LjAzIDExLjIzIDguMDMgMTAuNDUgOC42NyA5LjAzIDkuNDUgOS4wM00xNC41NSAxNi45N0MxMy43NyAxNi45NyAxMy4xMyAxNi4zMyAxMy4xMyAxNS41NVMxMy43NyAxNC4xMyAxNC41NSAxNC4xMyAxNS45NyAxNC43NyAxNS45NyAxNS41NSAxNS4zMyAxNi45NyAxNC41NSAxNi45N005LjIgMTdMOCAxNS44TDE0LjggOUwxNiAxMC4yTDkuMiAxN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNMTIsNEE4LDggMCAwLDEgMjAsMTJDMjAsMTQuNCAxOSwxNi41IDE3LjMsMThDMTUuOSwxNi43IDE0LDE2IDEyLDE2QzEwLDE2IDguMiwxNi43IDYuNywxOEM1LDE2LjUgNCwxNC40IDQsMTJBOCw4IDAgMCwxIDEyLDRNMTQsNS44OUMxMy42Miw1LjkgMTMuMjYsNi4xNSAxMy4xLDYuNTRMMTEuODEsOS43N0wxMS43MSwxMEMxMSwxMC4xMyAxMC40MSwxMC42IDEwLjE0LDExLjI2QzkuNzMsMTIuMjkgMTAuMjMsMTMuNDUgMTEuMjYsMTMuODZDMTIuMjksMTQuMjcgMTMuNDUsMTMuNzcgMTMuODYsMTIuNzRDMTQuMTIsMTIuMDggMTQsMTEuMzIgMTMuNTcsMTAuNzZMMTMuNjcsMTAuNUwxNC45Niw3LjI5TDE0Ljk3LDcuMjZDMTUuMTcsNi43NSAxNC45Miw2LjE3IDE0LjQxLDUuOTZDMTQuMjgsNS45MSAxNC4xNSw1Ljg5IDE0LDUuODlNMTAsNkExLDEgMCAwLDAgOSw3QTEsMSAwIDAsMCAxMCw4QTEsMSAwIDAsMCAxMSw3QTEsMSAwIDAsMCAxMCw2TTcsOUExLDEgMCAwLDAgNiwxMEExLDEgMCAwLDAgNywxMUExLDEgMCAwLDAgOCwxMEExLDEgMCAwLDAgNyw5TTE3LDlBMSwxIDAgMCwwIDE2LDEwQTEsMSAwIDAsMCAxNywxMUExLDEgMCAwLDAgMTgsMTBBMSwxIDAgMCwwIDE3LDlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTkuNSwzQTYuNSw2LjUgMCAwLDEgMTYsOS41QzE2LDExLjExIDE1LjQxLDEyLjU5IDE0LjQ0LDEzLjczTDE0LjcxLDE0SDE1LjVMMjAuNSwxOUwxOSwyMC41TDE0LDE1LjVWMTQuNzFMMTMuNzMsMTQuNDRDMTIuNTksMTUuNDEgMTEuMTEsMTYgOS41LDE2QTYuNSw2LjUgMCAwLDEgMyw5LjVBNi41LDYuNSAwIDAsMSA5LjUsM005LjUsNUM3LDUgNSw3IDUsOS41QzUsMTIgNywxNCA5LjUsMTRDMTIsMTQgMTQsMTIgMTQsOS41QzE0LDcgMTIsNSA5LjUsNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMjAuNzksMTMuOTVMMTguNDYsMTQuNTdMMTYuNDYsMTMuNDRWMTAuNTZMMTguNDYsOS40M0wyMC43OSwxMC4wNUwyMS4zMSw4LjEyTDE5LjU0LDcuNjVMMjAsNS44OEwxOC4wNyw1LjM2TDE3LjQ1LDcuNjlMMTUuNDUsOC44MkwxMyw3LjM4VjUuMTJMMTQuNzEsMy40MUwxMy4yOSwyTDEyLDMuMjlMMTAuNzEsMkw5LjI5LDMuNDFMMTEsNS4xMlY3LjM4TDguNSw4LjgyTDYuNSw3LjY5TDUuOTIsNS4zNkw0LDUuODhMNC40Nyw3LjY1TDIuNyw4LjEyTDMuMjIsMTAuMDVMNS41NSw5LjQzTDcuNTUsMTAuNTZWMTMuNDVMNS41NSwxNC41OEwzLjIyLDEzLjk2TDIuNywxNS44OUw0LjQ3LDE2LjM2TDQsMTguMTJMNS45MywxOC42NEw2LjU1LDE2LjMxTDguNTUsMTUuMThMMTEsMTYuNjJWMTguODhMOS4yOSwyMC41OUwxMC43MSwyMkwxMiwyMC43MUwxMy4yOSwyMkwxNC43LDIwLjU5TDEzLDE4Ljg4VjE2LjYyTDE1LjUsMTUuMTdMMTcuNSwxNi4zTDE4LjEyLDE4LjYzTDIwLDE4LjEyTDE5LjUzLDE2LjM1TDIxLjMsMTUuODhMMjAuNzksMTMuOTVNOS41LDEwLjU2TDEyLDkuMTFMMTQuNSwxMC41NlYxMy40NEwxMiwxNC44OUw5LjUsMTMuNDRWMTAuNTZaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE3LjQxIDEyLjE3TDE0LjI0IDlMMTIuODMgMTAuNDFMMTcuNDEgMTVMMjIgMTAuNDFMMjAuNTggOU0xMCAxM1Y1QzEwIDMuMzQgOC42NiAyIDcgMlM0IDMuMzQgNCA1VjEzQzEuNzkgMTQuNjYgMS4zNCAxNy43OSAzIDIwUzcuNzkgMjIuNjYgMTAgMjEgMTIuNjYgMTYuMjEgMTEgMTRDMTAuNzIgMTMuNjIgMTAuMzggMTMuMjggMTAgMTNNNyA0QzcuNTUgNCA4IDQuNDUgOCA1VjhINlY1QzYgNC40NSA2LjQ1IDQgNyA0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNy40MSAxMS44M0wyMC41OCAxNUwyMiAxMy41OUwxNy40MSA5TDEyLjgyIDEzLjU5TDE0LjI0IDE1TDE3LjQxIDExLjgzTTEwIDEzVjVDMTAgMy4zNCA4LjY2IDIgNyAyUzQgMy4zNCA0IDVWMTNDMS43OSAxNC42NiAxLjM0IDE3Ljc5IDMgMjBTNy43OSAyMi42NiAxMCAyMSAxMi42NiAxNi4yMSAxMSAxNEMxMC43MiAxMy42MiAxMC4zOCAxMy4yOCAxMCAxM003IDRDNy41NSA0IDggNC40NSA4IDVWOEg2VjVDNiA0LjQ1IDYuNDUgNCA3IDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE1IDEzVjVBMyAzIDAgMCAwIDkgNVYxM0E1IDUgMCAxIDAgMTUgMTNNMTIgNEExIDEgMCAwIDEgMTMgNUgxMUExIDEgMCAwIDEgMTIgNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTIsMy43N0wxMS4yNSw0LjYxQzExLjI1LDQuNjEgOS45Nyw2LjA2IDguNjgsNy45NEM3LjM5LDkuODIgNiwxMi4wNyA2LDE0LjIzQTYsNiAwIDAsMCAxMiwyMC4yM0E2LDYgMCAwLDAgMTgsMTQuMjNDMTgsMTIuMDcgMTYuNjEsOS44MiAxNS4zMiw3Ljk0QzE0LjAzLDYuMDYgMTIuNzUsNC42MSAxMi43NSw0LjYxTDEyLDMuNzdNMTIsNi45QzEyLjQ0LDcuNDIgMTIuODQsNy44NSAxMy42OCw5LjA3QzE0Ljg5LDEwLjgzIDE2LDEzLjA3IDE2LDE0LjIzQzE2LDE2LjQ1IDE0LjIyLDE4LjIzIDEyLDE4LjIzQzkuNzgsMTguMjMgOCwxNi40NSA4LDE0LjIzQzgsMTMuMDcgOS4xMSwxMC44MyAxMC4zMiw5LjA3QzExLjE2LDcuODUgMTEuNTYsNy40MiAxMiw2LjlaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTYsMTlBNSw1IDAgMCwxIDEsMTRBNSw1IDAgMCwxIDYsOUM3LDYuNjUgOS4zLDUgMTIsNUMxNS40Myw1IDE4LjI0LDcuNjYgMTguNSwxMS4wM0wxOSwxMUE0LDQgMCAwLDEgMjMsMTVBNCw0IDAgMCwxIDE5LDE5SDZNMTksMTNIMTdWMTJBNSw1IDAgMCwwIDEyLDdDOS41LDcgNy40NSw4LjgyIDcuMDYsMTEuMTlDNi43MywxMS4wNyA2LjM3LDExIDYsMTFBMywzIDAgMCwwIDMsMTRBMywzIDAgMCwwIDYsMTdIMTlBMiwyIDAgMCwwIDIxLDE1QTIsMiAwIDAsMCAxOSwxM1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTcuNzUsNC4wOUwxNS4yMiw2LjAzTDE2LjEzLDkuMDlMMTMuNSw3LjI4TDEwLjg3LDkuMDlMMTEuNzgsNi4wM0w5LjI1LDQuMDlMMTIuNDQsNEwxMy41LDFMMTQuNTYsNEwxNy43NSw0LjA5TTIxLjI1LDExTDE5LjYxLDEyLjI1TDIwLjIsMTQuMjNMMTguNSwxMy4wNkwxNi44LDE0LjIzTDE3LjM5LDEyLjI1TDE1Ljc1LDExTDE3LjgxLDEwLjk1TDE4LjUsOUwxOS4xOSwxMC45NUwyMS4yNSwxMU0xOC45NywxNS45NUMxOS44LDE1Ljg3IDIwLjY5LDE3LjA1IDIwLjE2LDE3LjhDMTkuODQsMTguMjUgMTkuNSwxOC42NyAxOS4wOCwxOS4wN0MxNS4xNywyMyA4Ljg0LDIzIDQuOTQsMTkuMDdDMS4wMywxNS4xNyAxLjAzLDguODMgNC45NCw0LjkzQzUuMzQsNC41MyA1Ljc2LDQuMTcgNi4yMSwzLjg1QzYuOTYsMy4zMiA4LjE0LDQuMjEgOC4wNiw1LjA0QzcuNzksNy45IDguNzUsMTAuODcgMTAuOTUsMTMuMDZDMTMuMTQsMTUuMjYgMTYuMSwxNi4yMiAxOC45NywxNS45NU0xNy4zMywxNy45N0MxNC41LDE3LjgxIDExLjcsMTYuNjQgOS41MywxNC41QzcuMzYsMTIuMzEgNi4yLDkuNSA2LjA0LDYuNjhDMy4yMyw5LjgyIDMuMzQsMTQuNjQgNi4zNSwxNy42NkM5LjM3LDIwLjY3IDE0LjE5LDIwLjc4IDE3LjMzLDE3Ljk3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk05LDEyQzkuNTMsMTIuMTQgOS44NSwxMi42OSA5LjcxLDEzLjIyTDguNDEsMTguMDVDOC4yNywxOC41OSA3LjcyLDE4LjkgNy4xOSwxOC43NkM2LjY1LDE4LjYyIDYuMzQsMTguMDcgNi41LDE3LjU0TDcuNzgsMTIuNzFDNy45MiwxMi4xNyA4LjQ3LDExLjg2IDksMTJNMTMsMTJDMTMuNTMsMTIuMTQgMTMuODUsMTIuNjkgMTMuNzEsMTMuMjJMMTEuNjQsMjAuOTVDMTEuNSwyMS41IDEwLjk1LDIxLjggMTAuNDEsMjEuNjZDOS44OCwyMS41IDkuNTYsMjAuOTcgOS43LDIwLjQzTDExLjc4LDEyLjcxQzExLjkyLDEyLjE3IDEyLjQ3LDExLjg2IDEzLDEyTTE3LDEyQzE3LjUzLDEyLjE0IDE3Ljg1LDEyLjY5IDE3LjcxLDEzLjIyTDE2LjQxLDE4LjA1QzE2LjI3LDE4LjU5IDE1LjcyLDE4LjkgMTUuMTksMTguNzZDMTQuNjUsMTguNjIgMTQuMzQsMTguMDcgMTQuNSwxNy41NEwxNS43OCwxMi43MUMxNS45MiwxMi4xNyAxNi40NywxMS44NiAxNywxMk0xNywxMFY5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFDMywxMi4xMSAzLjYsMTMuMDggNC41LDEzLjZWMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQzIDQsMTUuNiAzLjUsMTUuMzJWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQzIzLDEzLjUgMjIuMiwxNC43NyAyMSwxNS40NlYxNS40NkMyMC41LDE1LjczIDE5LjkxLDE1LjU3IDE5LjYzLDE1LjA5QzE5LjM2LDE0LjYxIDE5LjUsMTQgMjAsMTMuNzJWMTMuNzNDMjAuNiwxMy4zOSAyMSwxMi43NCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTYsMTQuMDNBMSwxIDAgMCwxIDcsMTUuMDNDNywxNS41OCA2LjU1LDE2LjAzIDYsMTYuMDNDMy4yNCwxNi4wMyAxLDEzLjc5IDEsMTEuMDNDMSw4LjI3IDMuMjQsNi4wMyA2LDYuMDNDNywzLjY4IDkuMywyLjAzIDEyLDIuMDNDMTUuNDMsMi4wMyAxOC4yNCw0LjY5IDE4LjUsOC4wNkwxOSw4LjAzQTQsNCAwIDAsMSAyMywxMi4wM0MyMywxNC4yMyAyMS4yMSwxNi4wMyAxOSwxNi4wM0gxOEMxNy40NSwxNi4wMyAxNywxNS41OCAxNywxNS4wM0MxNywxNC40NyAxNy40NSwxNC4wMyAxOCwxNC4wM0gxOUEyLDIgMCAwLDAgMjEsMTIuMDNBMiwyIDAgMCwwIDE5LDEwLjAzSDE3VjkuMDNDMTcsNi4yNyAxNC43Niw0LjAzIDEyLDQuMDNDOS41LDQuMDMgNy40NSw1Ljg0IDcuMDYsOC4yMUM2LjczLDguMDkgNi4zNyw4LjAzIDYsOC4wM0EzLDMgMCAwLDAgMywxMS4wM0EzLDMgMCAwLDAgNiwxNC4wM00xMiwxNC4xNUMxMi4xOCwxNC4zOSAxMi4zNywxNC42NiAxMi41NiwxNC45NEMxMywxNS41NiAxNCwxNy4wMyAxNCwxOEMxNCwxOS4xMSAxMy4xLDIwIDEyLDIwQTIsMiAwIDAsMSAxMCwxOEMxMCwxNy4wMyAxMSwxNS41NiAxMS40NCwxNC45NEMxMS42MywxNC42NiAxMS44MiwxNC40IDEyLDE0LjE1TTEyLDExLjAzTDExLjUsMTEuNTlDMTEuNSwxMS41OSAxMC42NSwxMi41NSA5Ljc5LDEzLjgxQzguOTMsMTUuMDYgOCwxNi41NiA4LDE4QTQsNCAwIDAsMCAxMiwyMkE0LDQgMCAwLDAgMTYsMThDMTYsMTYuNTYgMTUuMDcsMTUuMDYgMTQuMjEsMTMuODFDMTMuMzUsMTIuNTUgMTIuNSwxMS41OSAxMi41LDExLjU5XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTYsMTRBMSwxIDAgMCwxIDcsMTVBMSwxIDAgMCwxIDYsMTZBNSw1IDAgMCwxIDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQTQsNCAwIDAsMSAxOSwxNkgxOEExLDEgMCAwLDEgMTcsMTVBMSwxIDAgMCwxIDE4LDE0SDE5QTIsMiAwIDAsMCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdWOUE1LDUgMCAwLDAgMTIsNEM5LjUsNCA3LjQ1LDUuODIgNy4wNiw4LjE5QzYuNzMsOC4wNyA2LjM3LDggNiw4QTMsMyAwIDAsMCAzLDExQTMsMyAwIDAsMCA2LDE0TTcuODgsMTguMDdMMTAuMDcsMTcuNUw4LjQ2LDE1Ljg4QzguMDcsMTUuNSA4LjA3LDE0Ljg2IDguNDYsMTQuNDZDOC44NSwxNC4wNyA5LjUsMTQuMDcgOS44OCwxNC40NkwxMS41LDE2LjA3TDEyLjA3LDEzLjg4QzEyLjIxLDEzLjM0IDEyLjc2LDEzLjAzIDEzLjI5LDEzLjE3QzEzLjgzLDEzLjMxIDE0LjE0LDEzLjg2IDE0LDE0LjRMMTMuNDEsMTYuNTlMMTUuNiwxNkMxNi4xNCwxNS44NiAxNi42OSwxNi4xNyAxNi44MywxNi43MUMxNi45NywxNy4yNCAxNi42NiwxNy43OSAxNi4xMiwxNy45M0wxMy45MywxOC41TDE1LjU0LDIwLjEyQzE1LjkzLDIwLjUgMTUuOTMsMjEuMTUgMTUuNTQsMjEuNTRDMTUuMTUsMjEuOTMgMTQuNSwyMS45MyAxNC4xMiwyMS41NEwxMi41LDE5LjkzTDExLjkzLDIyLjEyQzExLjc5LDIyLjY2IDExLjI0LDIyLjk3IDEwLjcxLDIyLjgzQzEwLjE3LDIyLjY5IDkuODYsMjIuMTQgMTAsMjEuNkwxMC41OSwxOS40MUw4LjQsMjBDNy44NiwyMC4xNCA3LjMxLDE5LjgzIDcuMTcsMTkuMjlDNy4wMywxOC43NiA3LjM0LDE4LjIxIDcuODgsMTguMDdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTIyLjExIDIxLjQ2TDIuMzkgMS43M0wxLjExIDNMNC45NyA2Ljg2TDMuMzQgN0w1LjExIDEwLjc5QzUuMjUgMTAgNS41IDkuMjQgNS45NCA4LjVDNiA4LjM2IDYuMTMgOC4yNCA2LjIyIDguMTFMNy42NiA5LjU1QzcuMjUgMTAuMjcgNyAxMS4xMSA3IDEyQzcgMTQuNzYgOS4yNCAxNyAxMiAxN0MxMi45IDE3IDEzLjczIDE2Ljc1IDE0LjQ1IDE2LjM0TDIwLjg0IDIyLjczTDIyLjExIDIxLjQ2TTEyIDE1QzEwLjM0IDE1IDkgMTMuNjYgOSAxMkM5IDExLjY3IDkuMDcgMTEuMzYgOS4xNyAxMS4wNkwxMi45NCAxNC44M0MxMi42NCAxNC45MyAxMi4zMyAxNSAxMiAxNU0xOC4wNSA4LjVDMTcuNjMgNy43OCAxNy4xIDcuMTUgMTYuNSA2LjY0TDIwLjY1IDdMMTguODggMTAuNzlDMTguNzQgMTAgMTguNDcgOS4yMyAxOC4wNSA4LjVNMTIgN0MxNC43NiA3IDE3IDkuMjQgMTcgMTJDMTcgMTIuNTQgMTYuODkgMTMuMDUgMTYuNzQgMTMuNTRMMTUgMTEuNzhDMTQuODcgMTAuMyAxMy43IDkuMTMgMTIuMjIgOUwxMC40NyA3LjI3QzEwLjk1IDcuMTEgMTEuNDYgNyAxMiA3TTEyIDVDMTEuMTYgNSAxMC4zNSA1LjE1IDkuNjEgNS40MkwxMiAyTDE0LjM5IDUuNDJDMTMuNjUgNS4xNSAxMi44NCA1IDEyIDVNMTguODcgMTMuMjFMMjAuNjQgMTdMMjAuMjQgMTcuMDRMMTguMjUgMTUuMDVDMTguNTQgMTQuNDUgMTguNzYgMTMuODQgMTguODcgMTMuMjFNMTIgMTlDMTIuODIgMTkgMTMuNjMgMTguODMgMTQuMzcgMTguNTZMMTIgMjJMOS41OSAxOC41NkMxMC4zMyAxOC44MyAxMS4xNCAxOSAxMiAxOU01Ljk1IDE1LjVDNi4zNyAxNi4yNCA2LjkxIDE2Ljg2IDcuNSAxNy4zN0wzLjM2IDE3TDUuMTIgMTMuMjNDNS4yNiAxNCA1LjUzIDE0Ljc4IDUuOTUgMTUuNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTIsN0E1LDUgMCAwLDEgMTcsMTJBNSw1IDAgMCwxIDEyLDE3QTUsNSAwIDAsMSA3LDEyQTUsNSAwIDAsMSAxMiw3TTEyLDlBMywzIDAgMCwwIDksMTJBMywzIDAgMCwwIDEyLDE1QTMsMyAwIDAsMCAxNSwxMkEzLDMgMCAwLDAgMTIsOU0xMiwyTDE0LjM5LDUuNDJDMTMuNjUsNS4xNSAxMi44NCw1IDEyLDVDMTEuMTYsNSAxMC4zNSw1LjE1IDkuNjEsNS40MkwxMiwyTTMuMzQsN0w3LjUsNi42NUM2LjksNy4xNiA2LjM2LDcuNzggNS45NCw4LjVDNS41LDkuMjQgNS4yNSwxMCA1LjExLDEwLjc5TDMuMzQsN00zLjM2LDE3TDUuMTIsMTMuMjNDNS4yNiwxNCA1LjUzLDE0Ljc4IDUuOTUsMTUuNUM2LjM3LDE2LjI0IDYuOTEsMTYuODYgNy41LDE3LjM3TDMuMzYsMTdNMjAuNjUsN0wxOC44OCwxMC43OUMxOC43NCwxMCAxOC40Nyw5LjIzIDE4LjA1LDguNUMxNy42Myw3Ljc4IDE3LjEsNy4xNSAxNi41LDYuNjRMMjAuNjUsN00yMC42NCwxN0wxNi41LDE3LjM2QzE3LjA5LDE2Ljg1IDE3LjYyLDE2LjIyIDE4LjA0LDE1LjVDMTguNDYsMTQuNzcgMTguNzMsMTQgMTguODcsMTMuMjFMMjAuNjQsMTdNMTIsMjJMOS41OSwxOC41NkMxMC4zMywxOC44MyAxMS4xNCwxOSAxMiwxOUMxMi44MiwxOSAxMy42MywxOC44MyAxNC4zNywxOC41NkwxMiwyMlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNCwxMEExLDEgMCAwLDEgMyw5QTEsMSAwIDAsMSA0LDhIMTJBMiwyIDAgMCwwIDE0LDZBMiwyIDAgMCwwIDEyLDRDMTEuNDUsNCAxMC45NSw0LjIyIDEwLjU5LDQuNTlDMTAuMiw1IDkuNTYsNSA5LjE3LDQuNTlDOC43OCw0LjIgOC43OCwzLjU2IDkuMTcsMy4xN0M5LjksMi40NSAxMC45LDIgMTIsMkE0LDQgMCAwLDEgMTYsNkE0LDQgMCAwLDEgMTIsMTBINE0xOSwxMkExLDEgMCAwLDAgMjAsMTFBMSwxIDAgMCwwIDE5LDEwQzE4LjcyLDEwIDE4LjQ3LDEwLjExIDE4LjI5LDEwLjI5QzE3LjksMTAuNjggMTcuMjcsMTAuNjggMTYuODgsMTAuMjlDMTYuNSw5LjkgMTYuNSw5LjI3IDE2Ljg4LDguODhDMTcuNDIsOC4zNCAxOC4xNyw4IDE5LDhBMywzIDAgMCwxIDIyLDExQTMsMyAwIDAsMSAxOSwxNEg1QTEsMSAwIDAsMSA0LDEzQTEsMSAwIDAsMSA1LDEySDE5TTE4LDE4SDRBMSwxIDAgMCwxIDMsMTdBMSwxIDAgMCwxIDQsMTZIMThBMywzIDAgMCwxIDIxLDE5QTMsMyAwIDAsMSAxOCwyMkMxNy4xNywyMiAxNi40MiwyMS42NiAxNS44OCwyMS4xMkMxNS41LDIwLjczIDE1LjUsMjAuMSAxNS44OCwxOS43MUMxNi4yNywxOS4zMiAxNi45LDE5LjMyIDE3LjI5LDE5LjcxQzE3LjQ3LDE5Ljg5IDE3LjcyLDIwIDE4LDIwQTEsMSAwIDAsMCAxOSwxOUExLDEgMCAwLDAgMTgsMThaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTMuNTUgMTkuMDlMNC45NiAyMC41TDYuNzYgMTguNzFMNS4zNCAxNy4yOU0xMiA2QzguNjkgNiA2IDguNjkgNiAxMlM4LjY5IDE4IDEyIDE4IDE4IDE1LjMxIDE4IDEyQzE4IDguNjggMTUuMzEgNiAxMiA2TTIwIDEzSDIzVjExSDIwTTE3LjI0IDE4LjcxTDE5LjA0IDIwLjVMMjAuNDUgMTkuMDlMMTguNjYgMTcuMjlNMjAuNDUgNUwxOS4wNCAzLjZMMTcuMjQgNS4zOUwxOC42NiA2LjgxTTEzIDFIMTFWNEgxM002Ljc2IDUuMzlMNC45NiAzLjZMMy41NSA1TDUuMzQgNi44MUw2Ljc2IDUuMzlNMSAxM0g0VjExSDFNMTMgMjBIMTFWMjNIMTNcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImNvbnN0IGNhcGl0YWxpemVGaXJzdCA9IChzdHIpID0+IHtcbiAgY29uc3QgY2FwaXRhbGl6ZWQgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIHJldHVybiBjYXBpdGFsaXplZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcGl0YWxpemVGaXJzdDtcbiIsImNvbnN0IGNvbnZlcnRUb0ttID0gKG0pID0+IHtcbiAgY29uc3Qga21IID0gKG0gKiAzLjYpLnRvRml4ZWQoMSk7XG4gIHJldHVybiBrbUg7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29udmVydFRvS207XG4iLCJjb25zdCBnZXREYXRlID0gKG1zKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSgwLCAxMSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRlO1xuIiwiaW1wb3J0IGdldFdlYXRoZXJBUEkgZnJvbSAnLi9nZXRXZWF0aGVyQVBJJztcbmltcG9ydCBnZXRTdHlsZSBmcm9tICcuL2dldFN0eWxlJztcbmltcG9ydCBnZXREYXRlIGZyb20gJy4vZ2V0RGF0ZSc7XG5pbXBvcnQgZ2V0SG91ciBmcm9tICcuL2dldEhvdXInO1xuaW1wb3J0IGdldFdpbmREaXIgZnJvbSAnLi9nZXRXaW5kRGlyJztcbmltcG9ydCB2ZXJpZnlSYWluIGZyb20gJy4vdmVyaWZ5UmFpbic7XG5pbXBvcnQgdmVyaWZ5U25vdyBmcm9tICcuL3ZlcmlmeVNub3cnO1xuaW1wb3J0IGdldE5vd1RpbWUgZnJvbSAnLi9nZXROb3dUaW1lJztcbmltcG9ydCBjb252ZXJ0VG9LbSBmcm9tICcuL2NvbnZlcnRUb0ttJztcbmltcG9ydCBnZXRGaXhlZE51bWJlciBmcm9tICcuL2dldEZpeGVkTnVtYmVyJztcbmltcG9ydCBwcm9jZXNzRGFpbHlEYXRhIGZyb20gJy4vcHJvY2Vzc0RhaWx5RGF0YSc7XG5pbXBvcnQgY2FwaXRhbGl6ZUZpcnN0IGZyb20gJy4vY2FwaXRhbGl6ZUZpcnN0JztcbmltcG9ydCB2ZXJpZnlBbGVydHMgZnJvbSAnLi92ZXJpZnlBbGVydHMnO1xuaW1wb3J0IHNldFdlYXRoZXJJY29uIGZyb20gJy4vc2V0V2VhdGhlckljb24nO1xuXG5jb25zdCBnZXREb20gPSAobGF0LCBsb24sIGxvYywgY291bnRyeSkgPT4ge1xuICAvLyBxdWVyaWVzXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNMaWtlJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG4gIGNvbnN0IHV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnV2Jyk7XG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlJyk7XG4gIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZScpO1xuICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0Jyk7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJpbGl0eScpO1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgY29uc3Qgd2luZERlZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kRGVnJyk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kU3BlZWQnKTtcbiAgY29uc3QgY2xvdWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkcycpO1xuICBjb25zdCByYWluMWggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbjFoJyk7XG4gIGNvbnN0IHJhaW4xaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbjFoQ29udCcpO1xuICBjb25zdCBzbm93MWggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vdzFoJyk7XG4gIGNvbnN0IHNub3cxaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vdzFoQ29udCcpO1xuICBjb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseScpO1xuICBjb25zdCBhbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRzJyk7XG5cbiAgLy8gd3JpdGluZyB0byBET01cbiAgY29uc3Qgd3JpdGVXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJBUEkobGF0LCBsb24sIGNvdW50cnkpO1xuICAgICAgY29uc29sZS5sb2coJ09uZWNhbGwgQVBJOiAnLCByZWNEYXRhKTtcblxuICAgICAgLy8gdW5pdCBjb252ZXJzaW9uIGJlZm9yZSB3cml0aW5nXG4gICAgICAvLyBzbGljZXMgb3V0IHNlY29uZHMsIGtlZXAgYW0vUE1cbiAgICAgIGNvbnN0IHN1bnJpc2VUaW1lID0gYCR7Z2V0SG91cihyZWNEYXRhLmN1cnJlbnQuc3VucmlzZSkuc2xpY2UoXG4gICAgICAgIDAsXG4gICAgICAgIDRcbiAgICAgICl9ICR7Z2V0SG91cihyZWNEYXRhLmN1cnJlbnQuc3VucmlzZSkuc2xpY2UoNywgMTApfWA7XG5cbiAgICAgIGNvbnN0IHN1bnNldFRpbWUgPSBgJHtnZXRIb3VyKHJlY0RhdGEuY3VycmVudC5zdW5zZXQpLnNsaWNlKFxuICAgICAgICAwLFxuICAgICAgICA0XG4gICAgICApfSAke2dldEhvdXIocmVjRGF0YS5jdXJyZW50LnN1bnNldCkuc2xpY2UoNywgMTApfWA7XG4gICAgICBjb25zdCB3aW5kU3BlZWRLbSA9IGNvbnZlcnRUb0ttKHJlY0RhdGEuY3VycmVudC53aW5kX3NwZWVkKTtcblxuICAgICAgLy8gc2hvd3MgY3VycmVudCBob3VyIHdpdGhvdXQgc2Vjb25kc1xuICAgICAgY29uc3Qgbm93SG91ciA9IGdldE5vd1RpbWUocmVjRGF0YS50aW1lem9uZSkudG9TdHJpbmcoKS5zbGljZSgxNiwgMjEpO1xuICAgICAgY29uc3QgdGltZURhdGUgPSBnZXREYXRlKCk7XG5cbiAgICAgIC8vIG1haW4gaW5mbyB3cml0aW5nXG4gICAgICBjb25zdCB3aW5kRGlyID0gZ2V0V2luZERpcihyZWNEYXRhLmN1cnJlbnQud2luZF9kZWcpO1xuICAgICAgY29uc3QgdGVtcFJvdW5kID0gZ2V0Rml4ZWROdW1iZXIocmVjRGF0YS5jdXJyZW50LnRlbXAsIDEpO1xuICAgICAgY29uc3QgZmVlbFJvdW5kID0gZ2V0Rml4ZWROdW1iZXIocmVjRGF0YS5jdXJyZW50LmZlZWxzX2xpa2UsIDEpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGxvYztcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0aW1lRGF0ZTtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBub3dIb3VyO1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3RlbXBSb3VuZH0gwrpDYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7ZmVlbFJvdW5kfSDCukNgO1xuICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7cmVjRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgICAgIHV2LnRleHRDb250ZW50ID0gYFVWIEluZGV4OiAke2dldEZpeGVkTnVtYmVyKHJlY0RhdGEuY3VycmVudC51dmksIDApfWA7XG4gICAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtyZWNEYXRhLmN1cnJlbnQucHJlc3N1cmV9IGhQYWA7XG4gICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYFN1bnJpc2U6ICR7c3VucmlzZVRpbWV9YDtcbiAgICAgIHN1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7c3Vuc2V0VGltZX1gO1xuICAgICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGBWaXNpYmlsaXR5OiAke1xuICAgICAgICByZWNEYXRhLmN1cnJlbnQudmlzaWJpbGl0eSAvIDEwMDBcbiAgICAgIH0ga21gO1xuICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdChcbiAgICAgICAgcmVjRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgICB3aW5kRGVnLnRleHRDb250ZW50ID0gYERpcmVjdGlvbjogJHt3aW5kRGlyfWA7XG4gICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgU3BlZWQ6ICR7d2luZFNwZWVkS219IGttL2hgO1xuICAgICAgY2xvdWRzLnRleHRDb250ZW50ID0gYENsb3VkIGNvdmVyYWdlOiAke3JlY0RhdGEuY3VycmVudC5jbG91ZHN9ICVgO1xuXG4gICAgICAvLyBjaGVjayBpZiByYWluIGFuZCBzbm93IGRhdGEgYXJlIHByZXNlbnQgYW5kIHNob3dzIGl0XG4gICAgICBpZiAodmVyaWZ5UmFpbihyZWNEYXRhLmN1cnJlbnQpKSB7XG4gICAgICAgIHJhaW4xaC50ZXh0Q29udGVudCA9IGBSYWluIHZvbHVtZSBpbiB0aGUgbGFzdCBob3VyOiAke3JlY0RhdGEuY3VycmVudC5yYWluWycxaCddfSBtbWA7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhaW4xaC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICByYWluMWhDb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAodmVyaWZ5U25vdyhyZWNEYXRhLmN1cnJlbnQpKSB7XG4gICAgICAgIHNub3cxaC50ZXh0Q29udGVudCA9IGBTbm93IHZvbHVtZSBpbiB0aGUgbGFzdCBob3VyOiAke3JlY0RhdGEuY3VycmVudC5zbm93WycxaCddfSBtbWA7XG4gICAgICAgIHNub3cxaENvbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNub3cxaC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGV0ZXMgcHJldmlvdXMgdmFsdWVzIGJlZm9yZSB3cml0aW5nIG5ldyBvbmVzXG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlDb250YWluZXInKTtcbiAgICAgIGlmIChwcmV2aW91c0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICBkYWlseS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gZm9yZWNhc3RcbiAgICAgIC8vIHByb2Nlc3MgZGFpbHkgZm9yZWNhc3QgaW50byBhIG5lYXQgQXJyYXlcbiAgICAgIGNvbnN0IGRhaWx5VGVtcHMgPSBwcm9jZXNzRGFpbHlEYXRhKHJlY0RhdGEuZGFpbHkpO1xuXG4gICAgICAvLyB3cml0ZSBlYWNoIGRheSBmb3JlY2FzdGVkIHRvIERPTVxuICAgICAgZm9yIChjb25zdCBkYXkgb2YgZGFpbHlUZW1wcykge1xuICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF5Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGRheU1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkYXlNaW5WYWx1ZSA9IGdldEZpeGVkTnVtYmVyKGRheVswXSwgMCk7XG4gICAgICAgIGRheU1pbi50ZXh0Q29udGVudCA9IGAke2RheU1pblZhbHVlfSDCukNgO1xuICAgICAgICBjb25zdCBtaW5UZW1wU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgICAgIG1pblRlbXBTdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaW5UZW1wU3ZnJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcENvbnRhaW5lcjIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZGF5TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRheU1heFZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzFdLCAwKTtcbiAgICAgICAgZGF5TWF4LnRleHRDb250ZW50ID0gYCR7ZGF5TWF4VmFsdWV9IMK6Q2A7XG4gICAgICAgIGNvbnN0IG1heFRlbXBTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWF4VGVtcFN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21heFRlbXBTdmcnKTtcblxuICAgICAgICBjb25zdCB1dlJhaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHV2aU1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB1dmlNYXhWYWx1ZSA9IGdldEZpeGVkTnVtYmVyKGRheVsyXSwgMCk7XG4gICAgICAgIHV2aU1heC50ZXh0Q29udGVudCA9IGBVViAke3V2aU1heFZhbHVlfWA7XG4gICAgICAgIGNvbnN0IHV2aWdTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgdXZpZ1N2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3V2U3ZnJyk7XG5cbiAgICAgICAgY29uc3QgcmFpblByb2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcmFpblByb2JWYWx1ZSA9IGAkeyhkYXlbM10gKiAxMDApLnRvRml4ZWQoMCl9ICVgO1xuICAgICAgICByYWluUHJvYi50ZXh0Q29udGVudCA9IHJhaW5Qcm9iVmFsdWU7XG4gICAgICAgIGNvbnN0IHJhaW5TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgcmFpblN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhaW5QZXJjZW50Jyk7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjVmFsdWUgPSBkYXlbNF07XG4gICAgICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0KHdlYXRoZXJEZXNjVmFsdWUpO1xuICAgICAgICAvLyBpY29uXG4gICAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgICAgIGxldCB3ZWF0aGVySWNvblZhbHVlID0gZGF5WzZdO1xuICAgICAgICB3ZWF0aGVySWNvblZhbHVlID0gY2FwaXRhbGl6ZUZpcnN0KHdlYXRoZXJJY29uVmFsdWUpO1xuICAgICAgICAvLyBnZXRzIFNWRyBmb3IgZm9yZWNhc3RlZCBkYXRhXG4gICAgICAgIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IHNldFdlYXRoZXJJY29uKFxuICAgICAgICAgIHdlYXRoZXJJY29uVmFsdWUsXG4gICAgICAgICAgcmVjRGF0YS50aW1lem9uZSxcbiAgICAgICAgICAvLyB0cnVlIGJlY2F1c2UgaXQncyBhIGZ1dHVyZSBkYXRlXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5RGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RheURhdGUnKTtcbiAgICAgICAgY29uc3QgZGF5RGF0ZVZhbHVlID0gZGF5WzVdO1xuICAgICAgICBkYXlEYXRlLnRleHRDb250ZW50ID0gZGF5RGF0ZVZhbHVlO1xuXG4gICAgICAgIC8vIGFwcGVuZHNcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChtaW5UZW1wU3ZnKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlNaW4pO1xuICAgICAgICB0ZW1wQ29udGFpbmVyMi5hcHBlbmRDaGlsZChtYXhUZW1wU3ZnKTtcbiAgICAgICAgdGVtcENvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoZGF5TWF4KTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHV2aWdTdmcpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQodXZpTWF4KTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5TdmcpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmFpblByb2IpO1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzYyk7XG5cbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheURhdGUpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHV2UmFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgZGFpbHkuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsbHMgc3R5bGluZyh2YXJpYWJsZSBpY29ucylcblxuICAgICAgLy8gY2hlY2sgZm9yIGFsZXJ0cyBhbmQgY2xlYW5zIGFmdGVyd2FyZHNcbiAgICAgIGlmICh2ZXJpZnlBbGVydHMocmVjRGF0YSkpIHtcbiAgICAgICAgYWxlcnRzLnRleHRDb250ZW50ID0gcmVjRGF0YS5hbGVydHNbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIGdldFN0eWxlKHJlY0RhdGEuY3VycmVudC53ZWF0aGVyWzBdLm1haW4sIHJlY0RhdGEudGltZXpvbmUsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0U3R5bGUocmVjRGF0YS5jdXJyZW50LndlYXRoZXJbMF0ubWFpbiwgcmVjRGF0YS50aW1lem9uZSwgZmFsc2UpO1xuICAgICAgICBhbGVydHMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gJ09vb29wcywgdGhlcmUgc2VlbXMgdG8gYmUgYSBuZXR3b3JrIGVycm9yISc7XG4gICAgfVxuICB9O1xuICB3cml0ZVdlYXRoZXJEYXRhKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb207XG4iLCJpbXBvcnQgZ2V0RG9tIGZyb20gJy4vZ2V0RG9tJztcbmltcG9ydCBnZXRHZW9BUEkgZnJvbSAnLi9nZXRHZW9BUEknO1xuXG5jb25zdCBnZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28nKTtcblxuICAvLyBzdG9yZSBzZWFyY2hzXG4gIGxldCByZXN1bHRBcnJheSA9IFtdO1xuXG4gIC8vIHF1ZXJpZXMgY29vcmRpbmF0ZXMsIHN0b3JlcyB0aGVuLCBjYWxsIGZvciBnZXRET00gdG8gY2hhbmdlIHdoYXQncyBkaXNwbGF5ZWRcbiAgY29uc3QgcHJvY2Vzc0lucHQgPSBhc3luYyAodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gY2xlYW4gc3RvcmVkXG4gICAgICByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IGdldEdlb0FQSSh2YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZygnR2VvIGRhdGEgQVBJOiAnLCBnZW9EYXRhKTtcblxuICAgICAgLy8gZ2VuZXJhdGVzIGEgbmV3IGFycmF5IHdpdGggY29uY2F0IG5hbWUgYW5kIGNvb3Jkc1xuICAgICAgY29uc3QgZ2VvRGF0YTAgPSBbXTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5uYW1lfSwgJHtnZW9EYXRhWzBdLmNvdW50cnl9YCk7XG4gICAgICBnZW9EYXRhMC5wdXNoKGAke2dlb0RhdGFbMF0ubGF0fWApO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLmxvbn1gKTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5jb3VudHJ5fWApO1xuXG4gICAgICAvLyBzdG9yZSBmb3IgZnV0dXJlIHVzZVxuICAgICAgcmVzdWx0QXJyYXkucHVzaChnZW9EYXRhMCk7XG5cbiAgICAgIC8vIGNhbGxzIGZvciByZXdyaXRpbmcgdGhlIERPTSB3aXRoIG5ldyBjaXR5LCBwYXNzZXMgY291bnRyeSB0byBzZWxlY3QgbGFuZ3VhZ2VcbiAgICAgIGdldERvbShcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5sYXR9YCxcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5sb259YCxcbiAgICAgICAgcmVzdWx0QXJyYXlbMF1bMF0sXG4gICAgICAgIGAke2dlb0RhdGFbMF0uY291bnRyeX1gXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZyhnZW9EYXRhMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBzZWFyY2ggb24gZW50ZXJcbiAgY29uc3QgcHJvY2Vzc0tiZElucHV0ID0gKGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHByb2Nlc3NJbnB0KHNlYXJjaC52YWx1ZSk7XG4gICAgZWxzZSBzZWFyY2guZm9jdXMoKTtcbiAgfTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcm9jZXNzSW5wdChzZWFyY2gudmFsdWUpKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gcHJvY2Vzc0tiZElucHV0KGUua2V5KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRFdmVudExpc3RlbmVycztcbiIsImNvbnN0IGdldEZpeGVkTnVtYmVyID0gKG4sIHNwYWNlcykgPT4ge1xuICBjb25zdCBmaXhlZE4gPSBuLnRvRml4ZWQoc3BhY2VzKTtcbiAgcmV0dXJuIGZpeGVkTjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpeGVkTnVtYmVyO1xuIiwiY29uc3QgZ2V0R2VvQVBJID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGdlb1Jlc3F1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTImYXBwaWQ9ODMzYzI2MWQxOTkyNmQxM2NjNTc4ZDc5NTI4ZDlkNjRgLFxuICAgIHtcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH1cbiAgKTtcbiAgY29uc3QgcmVjZWl2ZWQgPSBhd2FpdCBnZW9SZXNxdWVzdC5qc29uKCk7XG4gIHJldHVybiByZWNlaXZlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEdlb0FQSTtcbiIsImNvbnN0IGdldEhvdXIgPSAobXMpID0+IHtcbiAgLy8gdW5peCBlcG9jaCB0byBkYXRlXG4gIGNvbnN0IG5ld0Vwb2NoID0gbXMgKiAxMDAwO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3RXBvY2gpO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEhvdXI7XG4iLCJjb25zdCBnZXROZWF0RGF0ZSA9IChkYXRlKSA9PiB7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBuZXdEYXRlID0gbmV3RGF0ZS50b1N0cmluZygpLnNsaWNlKDQsIDEwKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TmVhdERhdGU7XG4iLCJjb25zdCBnZXROaWdodCA9ICh0aW1lTm93KSA9PiB7XG4gIC8vIG5pZ2h0IGJvb2xlYW4gY2hlY2tcbiAgY29uc3QgY29uZGl0aW9uMSA9IHRpbWVOb3cgPiAxOTtcbiAgY29uc3QgY29uZGl0aW9uMiA9IHRpbWVOb3cgPCA3O1xuICBjb25zdCBuaWdodCA9IGNvbmRpdGlvbjEgfHwgY29uZGl0aW9uMjtcbiAgcmV0dXJuIG5pZ2h0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE5pZ2h0O1xuIiwiLy8gc3RyaXBzIHNlY29uZHMgZnJvbSBsb2NhbGVUaW1lXG5jb25zdCBnZXROb3dUaW1lID0gKHRpbWV6b25lKSA9PiB7XG4gIGNvbnN0IG5vd0hvdXIgPSBuZXcgRGF0ZShcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgdGltZVpvbmU6IGAke3RpbWV6b25lfWAgfSlcbiAgKTtcbiAgcmV0dXJuIG5vd0hvdXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0Tm93VGltZTtcbiIsImltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4vaW1nL2ljb25zL21hZ25pZnkuc3ZnJztcbmltcG9ydCBodW1pZGl0eUljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2F0ZXItb3V0bGluZS5zdmcnO1xuaW1wb3J0IHV2SWNvbiBmcm9tICcuL2ltZy9pY29ucy93aGl0ZS1iYWxhbmNlLXN1bm55LnN2Zyc7XG5pbXBvcnQgZ2F1Z2VJY29uIGZyb20gJy4vaW1nL2ljb25zL2dhdWdlLnN2Zyc7XG5pbXBvcnQgc3VucmlzZUljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS5zdmcnO1xuaW1wb3J0IHN1bnNldEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS1vZmYuc3ZnJztcbmltcG9ydCB2aXNpYmlsaXR5SWNvbiBmcm9tICcuL2ltZy9pY29ucy9iaW5vY3VsYXJzLnN2Zyc7XG5pbXBvcnQgY2xvdWRJY29uIGZyb20gJy4vaW1nL2ljb25zL2Nsb3VkLXBlcmNlbnQuc3ZnJztcbmltcG9ydCB3aW5kSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXdpbmR5LnN2Zyc7XG5pbXBvcnQgcmFpbkljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1wb3VyaW5nLnN2Zyc7XG5pbXBvcnQgc25vd0ljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1zbm93eS5zdmcnO1xuaW1wb3J0IG1heFRlbXBJY29uIGZyb20gJy4vaW1nL2ljb25zL3RoZXJtb21ldGVyLWNoZXZyb24tdXAuc3ZnJztcbmltcG9ydCBtaW5UZW1wSWNvbiBmcm9tICcuL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLWRvd24uc3ZnJztcbmltcG9ydCByYWluUEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1yYWlueS5zdmcnO1xuaW1wb3J0IHRoZXJtb0ljb24gZnJvbSAnLi9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItaGlnaC5zdmcnO1xuaW1wb3J0IHNldFdlYXRoZXJJY29uIGZyb20gJy4vc2V0V2VhdGhlckljb24nO1xuaW1wb3J0IHNldEJhY2tncm91bmQgZnJvbSAnLi9zZXRCYWNrZ3JvdW5kJztcblxuY29uc3QgZ2V0U3R5bGUgPSAoY3VycmVudFdlYXRoZXIsIHRpbWUsIGhhc0FsZXJ0cykgPT4ge1xuICBjb25zdCBnb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbycpO1xuICBjb25zdCBodW1pZGl0eVN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eVN2ZycpO1xuICBjb25zdCBwcmVzc1N2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc1N2ZycpO1xuICBjb25zdCBzdW5yaXNlU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2VTdmcnKTtcbiAgY29uc3Qgc3Vuc2V0U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnNldFN2ZycpO1xuICBjb25zdCB2aXNpYmlsaXR5U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHlTdmcnKTtcbiAgY29uc3QgY2xvdWRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWRTdmcnKTtcbiAgY29uc3Qgd2luZFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kU3ZnJyk7XG4gIGNvbnN0IHJhaW5TdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpblN2ZycpO1xuICBjb25zdCBzbm93U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dTdmcnKTtcbiAgY29uc3Qgd2VhdGhlclN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyU3ZnJyk7XG4gIGNvbnN0IHV2U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnV2U3ZnJyk7XG4gIGNvbnN0IG1pblRlbXBTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluVGVtcFN2ZycpO1xuICBjb25zdCBtYXhUZW1wU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heFRlbXBTdmcnKTtcbiAgY29uc3QgcmFpblBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFpblBlcmNlbnQnKTtcbiAgY29uc3QgdGVtcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcEljb24nKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICB0ZW1wSWNvbi5pbm5lckhUTUwgPSB0aGVybW9JY29uO1xuICBnb0J0bi5pbm5lckhUTUwgPSBzZWFyY2hJY29uO1xuICBodW1pZGl0eVN2Zy5pbm5lckhUTUwgPSBodW1pZGl0eUljb247XG4gIHByZXNzU3ZnLmlubmVySFRNTCA9IGdhdWdlSWNvbjtcbiAgc3VucmlzZVN2Zy5pbm5lckhUTUwgPSBzdW5yaXNlSWNvbjtcbiAgc3Vuc2V0U3ZnLmlubmVySFRNTCA9IHN1bnNldEljb247XG4gIHZpc2liaWxpdHlTdmcuaW5uZXJIVE1MID0gdmlzaWJpbGl0eUljb247XG4gIGNsb3VkU3ZnLmlubmVySFRNTCA9IGNsb3VkSWNvbjtcbiAgd2luZFN2Zy5pbm5lckhUTUwgPSB3aW5kSWNvbjtcbiAgcmFpblN2Zy5pbm5lckhUTUwgPSByYWluSWNvbjtcbiAgc25vd1N2Zy5pbm5lckhUTUwgPSBzbm93SWNvbjtcblxuICAvLyBzaGFyZWQgaWNvbnMgd2l0aCBmb3JlY2FzdFxuICB1dlN2Zy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSB1dkljb247XG4gIH0pO1xuICBtaW5UZW1wU3ZnLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1pblRlbXBJY29uO1xuICB9KTtcbiAgbWF4VGVtcFN2Zy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSBtYXhUZW1wSWNvbjtcbiAgfSk7XG4gIHJhaW5QZXJjZW50LmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IHJhaW5QSWNvbjtcbiAgfSk7XG5cbiAgLy8gcHJvY2VzcyB3ZWF0aGVyIGRlc2NyaXB0aW9uIGljb24gcGFzc2luZyB0aHJvdWdoIHRoZSByZWNlaXZlZCBhcnJheSwgY2hlY2tzIG5pZ2h0XG4gIHdlYXRoZXJTdmcuaW5uZXJIVE1MID0gc2V0V2VhdGhlckljb24oY3VycmVudFdlYXRoZXIsIHRpbWUsIGZhbHNlKTtcblxuICAvLyBzZXRzIGJvZHkgYmFja2dyb3VuZCBhY2NvcmRpbmcgdG8gd2VhdGhlci9kYXkvbmlnaHQgY29uZGl0aW9uXG4gIHNldEJhY2tncm91bmQoYm9keSwgdGltZSwgY3VycmVudFdlYXRoZXIsIGhhc0FsZXJ0cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTdHlsZTtcbiIsImNvbnN0IGdldFdlYXRoZXJBUEkgPSBhc3luYyAobGF0LCBsb24sIGNvdW50cnkpID0+IHtcbiAgaWYgKGNvdW50cnkgPT09ICdCUicpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZBUFBJRD04MzNjMjYxZDE5OTI2ZDEzY2M1NzhkNzk1MjhkOWQ2NCZ1bml0cz1tZXRyaWMmbGFuZz1wdF9icmAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVjZWl2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZWNlaXZlZERhdGE7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JkFQUElEPTgzM2MyNjFkMTk5MjZkMTNjYzU3OGQ3OTUyOGQ5ZDY0JnVuaXRzPW1ldHJpY2AsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApO1xuICAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiBwYXJzaW5nIHRoZSByZXNwb25zZSBib2R5IHRleHQgYXMgSlNPTlxuICBjb25zdCByZWNlaXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWNlaXZlZERhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyQVBJO1xuIiwiY29uc3QgZ2V0V2luZERpciA9IChkZWcpID0+IHtcbiAgbGV0IHdpbmREaXI7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBkZWcgPCA0MCB8fCBkZWcgPT09IDM2MDpcbiAgICAgIHdpbmREaXIgPSAnTm9ydGgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gNDAgJiYgZGVnIDwgOTA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRoZWFzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSA5MCAmJiBkZWcgPCAxMzU6XG4gICAgICB3aW5kRGlyID0gJ0Vhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMTM1ICYmIGRlZyA8IDE4MDpcbiAgICAgIHdpbmREaXIgPSAnU291dGhlYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDE4MCAmJiBkZWcgPCAyMjU6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRoJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDIyNSAmJiBkZWcgPCAyNzA6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSAyNzAgJiYgZGVnIDwgMzE1OlxuICAgICAgd2luZERpciA9ICdXZXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDMxNSAmJiBkZWcgPCAzNjA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2luZERpciA9ICdPb29wcy4uLic7XG4gIH1cbiAgcmV0dXJuIHdpbmREaXI7XG59O1xuLy8gSkVTVFxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kRGlyO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBnZXRXaW5kRGlyO1xuIiwiaW1wb3J0IGdldE5lYXREYXRlIGZyb20gJy4vZ2V0TmVhdERhdGUnO1xuXG5jb25zdCBwcm9jZXNzRGFpbHlEYXRhID0gKHJlY0FycmF5KSA9PiB7XG4gIC8vIHB1c2hlcyB0byBhIG5ldyBhcnJheSBvbmx5IGRhdGEgdGhhdCB3ZSB3YW50XG4gIGNvbnN0IGRhaWx5VGVtcHMgPSBbXTtcbiAgcmVjQXJyYXkuZm9yRWFjaCgoZGF5KSA9PlxuICAgIGRhaWx5VGVtcHMucHVzaChbXG4gICAgICBkYXkudGVtcC5taW4sXG4gICAgICBkYXkudGVtcC5tYXgsXG4gICAgICBkYXkudXZpLFxuICAgICAgZGF5LnBvcCxcbiAgICAgIGRheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgZ2V0TmVhdERhdGUoZGF5LmR0KSxcbiAgICAgIGRheS53ZWF0aGVyWzBdLm1haW5cbiAgICBdKVxuICApO1xuICByZXR1cm4gZGFpbHlUZW1wcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NEYWlseURhdGE7XG4iLCJpbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLWJyZXR0LXNheWxlcy05MTIzNjRfMWsuanBnJztcbmltcG9ydCBjbGVhclNreU5pZ2h0IGZyb20gJy4vaW1nL3BleGVscy1kcmlmdC1zaHV0dGVyYnVnLTIwODU5OTguanBnJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4vaW1nL3BleGVscy1icmF6aWwtdG9wbm8tOTYwNDgwNi5qcGcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtcmFodWwtcGFuZGl0LTI4MTY2MjVfcmFpbnkuanBnJztcbmltcG9ydCBjbG91ZERheSBmcm9tICcuL2ltZy9wZXhlbHMtcGl4YWJheS0xNTgxNjNfY2xvdWRzLmpwZyc7XG5pbXBvcnQgY2xvdWROaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtYnJldHQtc2F5bGVzLTM5MTAxNDEuanBnJztcbmltcG9ydCBzbm93RGF5IGZyb20gJy4vaW1nL3BleGVscy1waXhhYmF5LTI1OTY1OS5qcGcnO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtbWFydGluLW1hcmlhbmktMzgwMTQ2My5qcGcnO1xuaW1wb3J0IGZvZ0RheSBmcm9tICcuL2ltZy9wZXhlbHMtYWxla3NhbmRyYS1ibGlub3ZhLTg2NTkyNTIuanBnJztcbmltcG9ydCBmb2dOaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtcGl4YWJheS01MzEzNjAuanBnJztcbmltcG9ydCBnZXROb3dUaW1lIGZyb20gJy4vZ2V0Tm93VGltZSc7XG5pbXBvcnQgZ2V0TmlnaHQgZnJvbSAnLi9nZXROaWdodCc7XG5pbXBvcnQgc2V0VUljb2xvcnMgZnJvbSAnLi9zZXRVSWNvbG9ycyc7XG5cbmNvbnN0IHNldEJhY2tncm91bmQgPSAoYm9keSwgdGltZU5vdywgY3VycmVudFdlYXRoZXIsIGhhc0FsZXJ0cykgPT4ge1xuICBjb25zb2xlLmxvZyhnZXROb3dUaW1lKHRpbWVOb3cpLmdldEhvdXJzKCksIGN1cnJlbnRXZWF0aGVyKTtcblxuICAvLyBjaGVja3MgaWYgY29uZ2VydGVkIHRpbWV6b25lIHRvIGhvdXJzIGlzIG5pZ2h0XG4gIGNvbnN0IG5pZ2h0ID0gZ2V0TmlnaHQoZ2V0Tm93VGltZSh0aW1lTm93KS5nZXRIb3VycygpKTtcblxuICAvLyBzYW1lIGZvciBhbGwgcG9zc2liaWxpdGllc1xuICBib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICAvLyBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZVxuICBzd2l0Y2ggKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgY2FzZSAnQ2xlYXInOlxuICAgICAgaWYgKG5pZ2h0KSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NsZWFyU2t5TmlnaHR9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjRkRFNjhBJywgJyM2NzJkY2InLCAnI2ZmZmZmZjI1JywgaGFzQWxlcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NsZWFyU2t5RGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y3ZjRmNCcsICcjRkRFMDQ3JywgJyMwODA4MDg0YScsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWluTmlnaHR9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjZmRmYmZiJywgJyNCRUYyNjQnLCAnIzA0MDQwNGFiJywgaGFzQWxlcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW5EYXl9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjZjhmOGY4JywgJyM2N2U4ZjknLCAnIzA0MDQwNDU2JywgaGFzQWxlcnRzKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Nsb3Vkcyc6XG4gICAgICBpZiAobmlnaHQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWROaWdodH0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNGREUwNDcnLCAnIzEwQjk4MScsICcjMmMyYjJiM2InLCBoYXNBbGVydHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2xvdWREYXl9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjZjdmNGY0JywgJyM2N0U4RjknLCAnIzA4MDgwODgwJywgaGFzQWxlcnRzKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZvZyc6XG4gICAgICBpZiAobmlnaHQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Zm9nTmlnaHR9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjRkRFMDQ3JywgJyMxMEI5ODEnLCAnIzJjMmIyYjNiJywgaGFzQWxlcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ZvZ0RheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmN2Y0ZjQnLCAnIzY3RThGOScsICcjMDgwODA4ODAnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnU25vdyc6XG4gICAgICBpZiAobmlnaHQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c25vd05pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI0ZERTY4QScsICcjNjcyZGNiJywgJyNmZmZmZmYyNScsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93RGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y3ZjRmNCcsICcjRkRFMDQ3JywgJyMwODA4MDg0YScsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gIH1cblxuICAvLyBmb2dcbn07XG5leHBvcnQgZGVmYXVsdCBzZXRCYWNrZ3JvdW5kO1xuIiwiY29uc3Qgc2V0VUljb2xvcnMgPSAoZm9udENvbG9yLCBzdmdDb2xvciwgc2VjdGlvbkJhY2tncm91bmQsIGhhc0FsZXJ0cykgPT4ge1xuICBjb25zdCBzdmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3ZnJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgLy8gaXRlbXMgdG8gaGF2ZSBiZyBhcHBsaWVkIHRvOlxuICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0Jyk7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRXZWF0aGVyJyk7XG4gIGNvbnN0IHNlYXJjaEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQXJlYScpO1xuICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5Q29udGFpbmVyJyk7XG4gIGNvbnN0IGFsZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydHMnKTtcblxuICAvLyBwdXNoIHRoZW0gYWxsIGludG8gYW4gYXJyYXlcbiAgY29uc3QgYmdBcnJheSA9IFtdO1xuICBiZ0FycmF5LnB1c2goaGlnaGxpZ2h0LCBjdXJyZW50V2VhdGhlciwgc2VhcmNoQXJlYSk7XG4gIGRheUNvbnRhaW5lci5mb3JFYWNoKChlKSA9PiBiZ0FycmF5LnB1c2goZSkpO1xuXG4gIGlmIChoYXNBbGVydHMpIHtcbiAgICBhbGVydHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBhbGVydHMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VjdGlvbkJhY2tncm91bmQ7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICAvLyBhcHBseSBzdHlsZXNcbiAgYm9keS5zdHlsZS5jb2xvciA9IGZvbnRDb2xvcjtcbiAgc3Zncy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5zdHlsZS5maWxsID0gc3ZnQ29sb3I7XG4gIH0pO1xuICBiZ0FycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlY3Rpb25CYWNrZ3JvdW5kO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFVJY29sb3JzO1xuIiwiaW1wb3J0IGNsZWFySWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXN1bm55LnN2Zyc7XG5pbXBvcnQgcmFpbkljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1wb3VyaW5nLnN2Zyc7XG5pbXBvcnQgY2xvdWRJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItY2xvdWR5LnN2Zyc7XG5pbXBvcnQgbW9vbkljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1uaWdodC5zdmcnO1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vaW1nL2ljb25zL3Nub3dmbGFrZS5zdmcnO1xuaW1wb3J0IGdldE5vd1RpbWUgZnJvbSAnLi9nZXROb3dUaW1lJztcbmltcG9ydCBnZXROaWdodCBmcm9tICcuL2dldE5pZ2h0JztcblxuY29uc3Qgc2V0V2VhdGhlckljb24gPSAod2VhdGhlciwgdGltZSwgZnV0dXJlKSA9PiB7XG4gIC8vIGNvbnZlcnQgdG8gaG91cnMgdG8gY2hlY2sgbmlnaHRcbiAgY29uc3QgdGltZU5vdyA9IGdldE5vd1RpbWUodGltZSkuZ2V0SG91cnMoKTtcblxuICAvLyBuaWdodCBjaGVja1xuICBnZXROaWdodCh0aW1lTm93KTtcblxuICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICBjYXNlICdDbGVhcic6XG4gICAgICAvLyBmdXR1cmUgaXMgdXNlZCB0byBzaG93IGljb25zIG9uIGZvcmVjYXN0XG4gICAgICBpZiAoIWdldE5pZ2h0IHx8IGZ1dHVyZSkgcmV0dXJuIGNsZWFySWNvbjtcbiAgICAgIHJldHVybiBtb29uSWNvbjtcbiAgICBjYXNlICdSYWluJzpcbiAgICAgIHJldHVybiByYWluSWNvbjtcbiAgICBjYXNlICdDbG91ZHMnOlxuICAgICAgcmV0dXJuIGNsb3VkSWNvbjtcbiAgICBjYXNlICdTbm93JzpcbiAgICAgIHJldHVybiBzbm93SWNvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coJ0RpZmZlcmVudCB3ZWF0aGVyIGRldGVjdGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFdlYXRoZXJJY29uO1xuIiwiY29uc3QgdmVyaWZ5QWxlcnRzID0gKG9iaikgPT4ge1xuICBjb25zdCBoYXNBbGVydHMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCAnYWxlcnRzJyk7XG4gIHJldHVybiBoYXNBbGVydHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlBbGVydHM7XG4iLCJjb25zdCB2ZXJpZnlSYWluID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzUmFpbiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdyYWluJyk7XG4gIHJldHVybiBoYXNSYWluO1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVJhaW47XG4iLCJjb25zdCB2ZXJpZnlTbm93ID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzU25vdyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdzbm93Jyk7XG4gIHJldHVybiBoYXNTbm93O1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVNub3c7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0RG9tIGZyb20gJy4vZ2V0RG9tJztcbmltcG9ydCBnZXRFdmVudExpc3RlbmVycyBmcm9tICcuL2dldEV2ZW50TGlzdGVuZXJzJztcblxuLy8gZGVmYXVsdCBjYW1waW5hc1xuZ2V0RG9tKC0yMi45MDU1NiwgLTQ3LjA2MDgzLCAnQ2FtcGluYXMsIEJSJywgJ0JSJyk7XG5nZXRFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9