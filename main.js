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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px;\n  }\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  text-align: center;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  --fontSize: 1rem;\n  --fontSizeSemiHighlight: 1.5rem;\n  --fontSizeHighlight: 2rem;\n  --fontSizeSemiHighlightMobile: 1.2rem;\n  --fontSizeHighlightMobile: 1.8rem;\n  --containerRadius: 1rem;\n  --topSectionsWidth: 23vw;\n  --topSectionsHeight: 55vh;\n  --topSectionsWidthMobile: 34vw;\n  --topSectionsHeightMobile: 55vh;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n\n/* PC */\n@media screen and (min-width: 801px) {\n  .highlight {\n    justify-content: space-between;\n    gap: 0.1rem;\n  }\n  .highlight,\n  .currentWeather {\n    width: var(--topSectionsWidth);\n    height: var(--topSectionsHeight);\n    gap: 1rem;\n  }\n  .alerts {\n    max-width: calc(var(--topSectionsWidth) * 2);\n    max-height: 30vh;\n  }\n  .current {\n    justify-content: space-evenly;\n    gap: 0.8rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlight);\n  }\n  .feelsLike {\n    font-size: 0.9rem;\n  }\n  .current {\n    font-size: 1.3rem;\n  }\n  .searchArea {\n    width: 54vw;\n  }\n  .dayContainer {\n    width: 20rem;\n    height: 10rem;\n    justify-content: space-between;\n  }\n}\n\n/* mobile */\n@media screen and (min-width: 300px) and (max-width: 800px) {\n  .highlight {\n    justify-content: space-evenly;\n  }\n  .currentWeather,\n  .highlight {\n    min-width: var(--topSectionsWidthMobile);\n    min-height: var(--topSectionsHeightMobile);\n    max-width: var(--topSectionsWidthMobile);\n    max-height: var(--topSectionsHeightMobile);\n  }\n  .alerts {\n    min-width: calc(var(--topSectionsWidthMobile) * 1.8);\n    max-height: 30vh;\n  }\n  .current {\n    justify-content: center;\n    gap: 1rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlightMobile);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlightMobile);\n  }\n  .feelsLike {\n    font-size: 1rem;\n  }\n  .current {\n    font-size: 0.9rem;\n    font-weight: bold;\n  }\n  .dayContainer {\n    min-height: 20vh;\n    min-width: 50vw;\n    justify-content: center;\n  }\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alerts {\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n  align-self: center;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n}\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  gap: 0.7rem;\n}\n.currentWeather {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.feelsLike {\n  font-style: italic;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-weight: 500;\n  font-style: medium;\n  padding: 1rem;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, clamp(250px, 350px, 50vw));\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 1rem;\n  gap: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n  justify-content: flex-end;\n}\n\n/*Current weather/search area */\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n  width: 95%;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.15rem;\n}\n\n/* wind adjusts */\n.windData,\n.rainData,\n.snowData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1.2rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n.forecastItemContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;;IAEE,eAAe;EACjB;AACF;AACA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;EAC/B,yBAAyB;EACzB,qCAAqC;EACrC,iCAAiC;EACjC,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B;gEAC8D;AAChE;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA,OAAO;AACP;EACE;IACE,8BAA8B;IAC9B,WAAW;EACb;EACA;;IAEE,8BAA8B;IAC9B,gCAAgC;IAChC,SAAS;EACX;EACA;IACE,4CAA4C;IAC5C,gBAAgB;EAClB;EACA;IACE,6BAA6B;IAC7B,WAAW;EACb;EACA,UAAU;EACV;;IAEE,uCAAuC;EACzC;EACA;;IAEE,mCAAmC;EACrC;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,aAAa;IACb,8BAA8B;EAChC;AACF;;AAEA,WAAW;AACX;EACE;IACE,6BAA6B;EAC/B;EACA;;IAEE,wCAAwC;IACxC,0CAA0C;IAC1C,wCAAwC;IACxC,0CAA0C;EAC5C;EACA;IACE,oDAAoD;IACpD,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,SAAS;EACX;EACA,UAAU;EACV;;IAEE,6CAA6C;EAC/C;EACA;;IAEE,yCAAyC;EAC3C;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,uBAAuB;EACzB;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,eAAe;EACf,qCAAqC;EACrC,kBAAkB;AACpB;AACA,uBAAuB;AACvB;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,kEAAkE;EAClE,qCAAqC;EACrC,aAAa;EACb,SAAS;AACX;AACA,SAAS;AACT,0BAA0B;AAC1B;;;EAGE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA,oBAAoB;AACpB;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;;;EAGE,aAAa;EACb,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B,kDAAkD;AAClD;;;;EAIE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,UAAU;AACZ;AACA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;AACA,gCAAgC;AAChC;;EAEE,oBAAoB;AACtB;;AAEA,iBAAiB;AACjB;;;EAGE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,oBAAoB;AACtB;AACA,kCAAkC;AAClC;;EAEE,qCAAqC;EACrC,eAAe;AACjB;;AAEA,qBAAqB;AACrB;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;AACb","sourcesContent":["@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px;\n  }\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  text-align: center;\n}\n:root {\n  --sidePaddings: 1.5rem;\n  --middleGap: 4rem;\n  --fontSize: 1rem;\n  --fontSizeSemiHighlight: 1.5rem;\n  --fontSizeHighlight: 2rem;\n  --fontSizeSemiHighlightMobile: 1.2rem;\n  --fontSizeHighlightMobile: 1.8rem;\n  --containerRadius: 1rem;\n  --topSectionsWidth: 23vw;\n  --topSectionsHeight: 55vh;\n  --topSectionsWidthMobile: 34vw;\n  --topSectionsHeightMobile: 55vh;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nbutton {\n  background: inherit;\n}\nsvg {\n  width: 2rem;\n  height: 2rem;\n  fill: rgb(110, 35, 223);\n}\n\n/* PC */\n@media screen and (min-width: 801px) {\n  .highlight {\n    justify-content: space-between;\n    gap: 0.1rem;\n  }\n  .highlight,\n  .currentWeather {\n    width: var(--topSectionsWidth);\n    height: var(--topSectionsHeight);\n    gap: 1rem;\n  }\n  .alerts {\n    max-width: calc(var(--topSectionsWidth) * 2);\n    max-height: 30vh;\n  }\n  .current {\n    justify-content: space-evenly;\n    gap: 0.8rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlight);\n  }\n  .feelsLike {\n    font-size: 0.9rem;\n  }\n  .current {\n    font-size: 1.3rem;\n  }\n  .searchArea {\n    width: 54vw;\n  }\n  .dayContainer {\n    width: 20rem;\n    height: 10rem;\n    justify-content: space-between;\n  }\n}\n\n/* mobile */\n@media screen and (min-width: 300px) and (max-width: 800px) {\n  .highlight {\n    justify-content: space-evenly;\n  }\n  .currentWeather,\n  .highlight {\n    min-width: var(--topSectionsWidthMobile);\n    min-height: var(--topSectionsHeightMobile);\n    max-width: var(--topSectionsWidthMobile);\n    max-height: var(--topSectionsHeightMobile);\n  }\n  .alerts {\n    min-width: calc(var(--topSectionsWidthMobile) * 1.8);\n    max-height: 30vh;\n  }\n  .current {\n    justify-content: center;\n    gap: 1rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlightMobile);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlightMobile);\n  }\n  .feelsLike {\n    font-size: 1rem;\n  }\n  .current {\n    font-size: 0.9rem;\n    font-weight: bold;\n  }\n  .dayContainer {\n    min-height: 20vh;\n    min-width: 50vw;\n    justify-content: center;\n  }\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alerts {\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n  align-self: center;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n}\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  gap: 0.7rem;\n}\n.currentWeather {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.feelsLike {\n  font-style: italic;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-weight: 500;\n  font-style: medium;\n  padding: 1rem;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, clamp(250px, 350px, 50vw));\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 1rem;\n  gap: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n  justify-content: flex-end;\n}\n\n/*Current weather/search area */\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n  width: 95%;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.15rem;\n}\n\n/* wind adjusts */\n.windData,\n.rainData,\n.snowData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1.2rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n.forecastItemContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 0.5rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/img/icons/weather-lightning.svg":
/*!*********************************************!*\
  !*** ./src/img/icons/weather-lightning.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\"><path d=\"M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z\"></path></svg>"

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
      humidity.textContent = `${recData.current.humidity}%`;
      uv.textContent = `UV ${(0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(recData.current.uvi, 0)}`;
      sunrise.textContent = `${sunriseTime}`;
      sunset.textContent = `${sunsetTime}`;
      visibility.textContent = `${recData.current.visibility / 1000} km`;
      weather.textContent = (0,_capitalizeFirst__WEBPACK_IMPORTED_MODULE_11__["default"])(
        recData.current.weather[0].description
      );
      windDeg.textContent = `${windDir}`;
      windSpeed.textContent = `${windSpeedKm} km/h`;
      clouds.textContent = `Clouds ${recData.current.clouds} %`;

      // check if rain and snow data are present and shows it
      if ((0,_verifyRain__WEBPACK_IMPORTED_MODULE_5__["default"])(recData.current)) {
        rain1h.textContent = `${recData.current.rain['1h']} mm`;
        rain1hCont.style.display = 'flex';
        rain1hCont.style.alignItems = 'center';
        rain1hCont.style.justifyContent = 'space-between';
        rain1hCont.style.gap = '0.5rem';
      } else {
        rain1h.textContent = '';
        rain1hCont.style.display = 'none';
      }
      if ((0,_verifySnow__WEBPACK_IMPORTED_MODULE_6__["default"])(recData.current)) {
        snow1h.textContent = `${recData.current.snow['1h']} mm`;
        snow1hCont.style.display = 'flex';
        snow1hCont.style.alignItems = 'center';
        snow1hCont.style.justifyContent = 'space-between';
        snow1hCont.style.gap = '0.5rem';
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
        const rainProbValue = `${(day[3] * 100).toFixed(0)}%`;
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
        tempContainer.appendChild(maxTempSvg);
        tempContainer.appendChild(dayMax);
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
/* harmony import */ var _img_pexels_anton_kudryashov_9861432_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pexels-anton-kudryashov-9861432.jpg */ "./src/img/pexels-anton-kudryashov-9861432.jpg");
/* harmony import */ var _img_pexels_tsvetoslav_hristov_2499846_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pexels-tsvetoslav-hristov-2499846.jpg */ "./src/img/pexels-tsvetoslav-hristov-2499846.jpg");
/* harmony import */ var _img_pexels_pixabay_158163_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pexels-pixabay-158163_clouds.jpg */ "./src/img/pexels-pixabay-158163_clouds.jpg");
/* harmony import */ var _img_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pexels-brett-sayles-3910141.jpg */ "./src/img/pexels-brett-sayles-3910141.jpg");
/* harmony import */ var _img_pexels_pixabay_259659_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/pexels-pixabay-259659.jpg */ "./src/img/pexels-pixabay-259659.jpg");
/* harmony import */ var _img_pexels_martin_mariani_3801463_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/pexels-martin-mariani-3801463.jpg */ "./src/img/pexels-martin-mariani-3801463.jpg");
/* harmony import */ var _img_pexels_aleksandra_blinova_8659252_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/pexels-aleksandra-blinova-8659252.jpg */ "./src/img/pexels-aleksandra-blinova-8659252.jpg");
/* harmony import */ var _img_pexels_pixabay_531360_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/pexels-pixabay-531360.jpg */ "./src/img/pexels-pixabay-531360.jpg");
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");
/* harmony import */ var _getNight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getNight */ "./src/getNight.js");
/* harmony import */ var _setUIcolors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setUIcolors */ "./src/setUIcolors.js");
















const setBackground = (body, timeNow, currentWeather, hasAlerts) => {
  console.log((0,_getNowTime__WEBPACK_IMPORTED_MODULE_12__["default"])(timeNow).getHours(), currentWeather);

  // checks if congerted timezone to hours is night
  const night = (0,_getNight__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_getNowTime__WEBPACK_IMPORTED_MODULE_12__["default"])(timeNow).getHours());

  // same for all possibilities
  body.style.backgroundSize = 'cover';

  // body.style.backgroundImage
  switch (currentWeather) {
    case 'Clear':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_drift_shutterbug_2085998_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#FDE68A', '#672dcb', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_912364_1k_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      }
      break;
    case 'Rain':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_rahul_pandit_2816625_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#fdfbfb', '#BEF264', '#040404ab', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brazil_topno_9604806_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
      }
      break;
    case 'Thunderstorm':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_anton_kudryashov_9861432_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#fdfbfb', '#BEF264', '#040404ab', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_tsvetoslav_hristov_2499846_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
      }
      break;
    case 'Clouds':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_158163_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Fog':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_531360_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_aleksandra_blinova_8659252_jpg__WEBPACK_IMPORTED_MODULE_10__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Snow':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_martin_mariani_3801463_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#FDE68A', '#672dcb', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_259659_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_14__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
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
/* harmony import */ var _img_icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/icons/weather-lightning.svg */ "./src/img/icons/weather-lightning.svg");
/* harmony import */ var _img_icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");
/* harmony import */ var _getNight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getNight */ "./src/getNight.js");









const setWeatherIcon = (weather, time, future) => {
  // convert to hours to check night
  const timeNow = (0,_getNowTime__WEBPACK_IMPORTED_MODULE_6__["default"])(time).getHours();

  // night check
  (0,_getNight__WEBPACK_IMPORTED_MODULE_7__["default"])(timeNow);

  switch (weather) {
    case 'Clear':
      // future is used to show icons on forecast
      if (!_getNight__WEBPACK_IMPORTED_MODULE_7__["default"] || future) return (_img_icons_weather_sunny_svg__WEBPACK_IMPORTED_MODULE_0___default());
      return (_img_icons_weather_night_svg__WEBPACK_IMPORTED_MODULE_3___default());
    case 'Rain':
      return (_img_icons_weather_pouring_svg__WEBPACK_IMPORTED_MODULE_1___default());
    case 'Thunderstorm':
      return (_img_icons_weather_lightning_svg__WEBPACK_IMPORTED_MODULE_5___default());
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

/***/ "./src/img/pexels-anton-kudryashov-9861432.jpg":
/*!*****************************************************!*\
  !*** ./src/img/pexels-anton-kudryashov-9861432.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8763c4755126db3cd074.jpg";

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
module.exports = __webpack_require__.p + "d123008cbe91d468d66a.jpg";

/***/ }),

/***/ "./src/img/pexels-tsvetoslav-hristov-2499846.jpg":
/*!*******************************************************!*\
  !*** ./src/img/pexels-tsvetoslav-hristov-2499846.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3fb08cda3c7a7e95e3f.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLFVBQVUsWUFBWSxRQUFRLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxTQUFTLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxTQUFTLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcs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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUztBQUNzQjs7QUFFcEQ7QUFDQSxtREFBTTtBQUNOLDhEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvYmlub2N1bGFycy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvY2xvdWQtcGVyY2VudC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvZ2F1Z2Uuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL21hZ25pZnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3Nub3dmbGFrZS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItY2hldnJvbi1kb3duLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLXVwLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy90aGVybW9tZXRlci1oaWdoLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93YXRlci1vdXRsaW5lLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLWNsb3VkeS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1saWdodG5pbmcuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItbmlnaHQuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItcG91cmluZy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1yYWlueS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1zbm93eS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS1vZmYuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItd2luZHkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3doaXRlLWJhbGFuY2Utc3Vubnkuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY2FwaXRhbGl6ZUZpcnN0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY29udmVydFRvS20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXREYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0RG9tLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0RXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRGaXhlZE51bWJlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEdlb0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEhvdXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXROZWF0RGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldE5pZ2h0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0Tm93VGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldFN0eWxlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0V2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldFdpbmREaXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9wcm9jZXNzRGFpbHlEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2V0QmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NldFVJY29sb3JzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2V0V2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92ZXJpZnlBbGVydHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92ZXJpZnlSYWluLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdmVyaWZ5U25vdy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIGlucHV0LFxcbiAgI3NlYXJjaCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG59XFxuaHRtbCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbjpyb290IHtcXG4gIC0tc2lkZVBhZGRpbmdzOiAxLjVyZW07XFxuICAtLW1pZGRsZUdhcDogNHJlbTtcXG4gIC0tZm9udFNpemU6IDFyZW07XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS41cmVtO1xcbiAgLS1mb250U2l6ZUhpZ2hsaWdodDogMnJlbTtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0TW9iaWxlOiAxLjJyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0TW9iaWxlOiAxLjhyZW07XFxuICAtLWNvbnRhaW5lclJhZGl1czogMXJlbTtcXG4gIC0tdG9wU2VjdGlvbnNXaWR0aDogMjN2dztcXG4gIC0tdG9wU2VjdGlvbnNIZWlnaHQ6IDU1dmg7XFxuICAtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGU6IDM0dnc7XFxuICAtLXRvcFNlY3Rpb25zSGVpZ2h0TW9iaWxlOiA1NXZoO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcbnN2ZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZpbGw6IHJnYigxMTAsIDM1LCAyMjMpO1xcbn1cXG5cXG4vKiBQQyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XFxuICAuaGlnaGxpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDAuMXJlbTtcXG4gIH1cXG4gIC5oaWdobGlnaHQsXFxuICAuY3VycmVudFdlYXRoZXIge1xcbiAgICB3aWR0aDogdmFyKC0tdG9wU2VjdGlvbnNXaWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdG9wU2VjdGlvbnNIZWlnaHQpO1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxuICAuYWxlcnRzIHtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLXRvcFNlY3Rpb25zV2lkdGgpICogMik7XFxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XFxuICB9XFxuICAuY3VycmVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gIH1cXG4gIC8qIGZvbnRzICovXFxuICAud2VhdGhlckNvbnQsXFxuICAudGVtcENvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gIC5uYW1lLFxcbiAgLmRhdGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0KTtcXG4gIH1cXG4gIC5mZWVsc0xpa2Uge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxuICAuc2VhcmNoQXJlYSB7XFxuICAgIHdpZHRoOiA1NHZ3O1xcbiAgfVxcbiAgLmRheUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuaGlnaGxpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAuY3VycmVudFdlYXRoZXIsXFxuICAuaGlnaGxpZ2h0IHtcXG4gICAgbWluLXdpZHRoOiB2YXIoLS10b3BTZWN0aW9uc1dpZHRoTW9iaWxlKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tdG9wU2VjdGlvbnNIZWlnaHRNb2JpbGUpO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS10b3BTZWN0aW9uc0hlaWdodE1vYmlsZSk7XFxuICB9XFxuICAuYWxlcnRzIHtcXG4gICAgbWluLXdpZHRoOiBjYWxjKHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpICogMS44KTtcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG4gIC8qIGZvbnRzICovXFxuICAud2VhdGhlckNvbnQsXFxuICAudGVtcENvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0TW9iaWxlKTtcXG4gIH1cXG4gIC5uYW1lLFxcbiAgLmRhdGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0TW9iaWxlKTtcXG4gIH1cXG4gIC5mZWVsc0xpa2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuY3VycmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5kYXlDb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xcbiAgICBtaW4td2lkdGg6IDUwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmFsZXJ0cyB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKlNwYWNlcyB3ZWF0aGVyIGluZm9zKi9cXG4uY3VycmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmhpZ2hsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuN3JlbTtcXG59XFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ud2VhdGhlckNvbnQsXFxuLnRlbXBDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mZWVsc0xpa2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmRhaWx5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2xhbXAoMjUwcHgsIDM1MHB4LCA1MHZ3KSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCAxZnIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuLyogIFNWRyAqL1xcbi8qIHRhcmdldHMgZm9yZWNhc3QgU1ZHcyAqL1xcbi5kYXlEYXRlIH4gZGl2ID4gc3ZnID4gc3ZnLFxcbi5tYXhUZW1wU3ZnID4gc3ZnLFxcbi5taW5UZW1wU3ZnID4gc3ZnIHtcXG4gIG1pbi13aWR0aDogMS43cmVtO1xcbiAgbWF4LXdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgZGl2cyAqL1xcbi5jdXJyZW50V2VhdGhlciA+ICosXFxuLndlYXRoZXJTdW1tYXJ5ID4gKixcXG4uZGF5Q29udGFpbmVyID4gKixcXG4uc2VhcmNoQ29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ucmFpbjFoQ29udCxcXG4uc25vdzFoQ29udCxcXG4uY3VycmVudFN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLypDdXJyZW50IHdlYXRoZXIvc2VhcmNoIGFyZWEgKi9cXG4vKiBjZW50ZXJzIGl0c2VsZiBkZXNwaXRlIG9mIG90aGVyIGZsZXggc2V0dGluZ3MgKi9cXG4uZmVlbHNMaWtlLFxcbi5kYXRlLFxcbi5uYW1lLFxcbi50aW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogOHZoO1xcbn1cXG4uc2VhcmNoQXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lclJhZGl1cyk7XFxufVxcbiNzZWFyY2gge1xcbiAgYWxsOiB1bnNldDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuLypkYWlseSBmb3JlY2FzdCAqL1xcbi5kYXlEYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLyogdHJpY2sgdG8gYXBwZWFyIGNlbnRyYWxpemVkICovXFxuLm1pblRlbXBTdmcsXFxuLm1heFRlbXBTdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMTVyZW07XFxufVxcblxcbi8qIHdpbmQgYWRqdXN0cyAqL1xcbi53aW5kRGF0YSxcXG4ucmFpbkRhdGEsXFxuLnNub3dEYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ud2luZFNwZWVkIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4vKiBjb250YWluZXJzIG9wYWNpdHkgYmFja2dyb3VuZCAqL1xcbm1haW4gPiBzZWN0aW9uID4gc2VjdGlvbixcXG4uZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lclJhZGl1cyk7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxufVxcblxcbi8qIGhpZ2ggc3BlY2lmaWNpdHkgKi9cXG4uZGF5Q29udGFpbmVyID4gKiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmZvcmVjYXN0SXRlbUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7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LGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxnQ0FBZ0M7QUFDaEM7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBLGlCQUFpQjtBQUNqQjs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0Esa0NBQWtDO0FBQ2xDOztFQUVFLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgaW5wdXQsXFxuICAjc2VhcmNoIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuOnJvb3Qge1xcbiAgLS1zaWRlUGFkZGluZ3M6IDEuNXJlbTtcXG4gIC0tbWlkZGxlR2FwOiA0cmVtO1xcbiAgLS1mb250U2l6ZTogMXJlbTtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjVyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAycmVtO1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHRNb2JpbGU6IDEuMnJlbTtcXG4gIC0tZm9udFNpemVIaWdobGlnaHRNb2JpbGU6IDEuOHJlbTtcXG4gIC0tY29udGFpbmVyUmFkaXVzOiAxcmVtO1xcbiAgLS10b3BTZWN0aW9uc1dpZHRoOiAyM3Z3O1xcbiAgLS10b3BTZWN0aW9uc0hlaWdodDogNTV2aDtcXG4gIC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZTogMzR2dztcXG4gIC0tdG9wU2VjdGlvbnNIZWlnaHRNb2JpbGU6IDU1dmg7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZmlsbDogcmdiKDExMCwgMzUsIDIyMyk7XFxufVxcblxcbi8qIFBDICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcXG4gIC5oaWdobGlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC4xcmVtO1xcbiAgfVxcbiAgLmhpZ2hsaWdodCxcXG4gIC5jdXJyZW50V2VhdGhlciB7XFxuICAgIHdpZHRoOiB2YXIoLS10b3BTZWN0aW9uc1dpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10b3BTZWN0aW9uc0hlaWdodCk7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG4gIC5hbGVydHMge1xcbiAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tdG9wU2VjdGlvbnNXaWR0aCkgKiAyKTtcXG4gICAgbWF4LWhlaWdodDogMzB2aDtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgfVxcbiAgLyogZm9udHMgKi9cXG4gIC53ZWF0aGVyQ29udCxcXG4gIC50ZW1wQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgfVxcbiAgLm5hbWUsXFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdobGlnaHQpO1xcbiAgfVxcbiAgLmZlZWxzTGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbiAgLmN1cnJlbnQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG4gIC5zZWFyY2hBcmVhIHtcXG4gICAgd2lkdGg6IDU0dnc7XFxuICB9XFxuICAuZGF5Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxufVxcblxcbi8qIG1vYmlsZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5oaWdobGlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIC5jdXJyZW50V2VhdGhlcixcXG4gIC5oaWdobGlnaHQge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS10b3BTZWN0aW9uc0hlaWdodE1vYmlsZSk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZSk7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXRvcFNlY3Rpb25zSGVpZ2h0TW9iaWxlKTtcXG4gIH1cXG4gIC5hbGVydHMge1xcbiAgICBtaW4td2lkdGg6IGNhbGModmFyKC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZSkgKiAxLjgpO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xcbiAgfVxcbiAgLmN1cnJlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcbiAgLyogZm9udHMgKi9cXG4gIC53ZWF0aGVyQ29udCxcXG4gIC50ZW1wQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHRNb2JpbGUpO1xcbiAgfVxcbiAgLm5hbWUsXFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdobGlnaHRNb2JpbGUpO1xcbiAgfVxcbiAgLmZlZWxzTGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmRheUNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwdmg7XFxuICAgIG1pbi13aWR0aDogNTB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uYWxlcnRzIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lclJhZGl1cyk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi8qU3BhY2VzIHdlYXRoZXIgaW5mb3MqL1xcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uaGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4uY3VycmVudFdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi53ZWF0aGVyQ29udCxcXG4udGVtcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uZGFpbHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgyNTBweCwgMzUwcHgsIDUwdncpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDFmcik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4vKiAgU1ZHICovXFxuLyogdGFyZ2V0cyBmb3JlY2FzdCBTVkdzICovXFxuLmRheURhdGUgfiBkaXYgPiBzdmcgPiBzdmcsXFxuLm1heFRlbXBTdmcgPiBzdmcsXFxuLm1pblRlbXBTdmcgPiBzdmcge1xcbiAgbWluLXdpZHRoOiAxLjdyZW07XFxuICBtYXgtd2lkdGg6IDEuN3JlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogUmlnaHQgc2lkZSBkaXZzICovXFxuLmN1cnJlbnRXZWF0aGVyID4gKixcXG4ud2VhdGhlclN1bW1hcnkgPiAqLFxcbi5kYXlDb250YWluZXIgPiAqLFxcbi5zZWFyY2hDb250YWluZXIgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5yYWluMWhDb250LFxcbi5zbm93MWhDb250LFxcbi5jdXJyZW50U3ZnIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKkN1cnJlbnQgd2VhdGhlci9zZWFyY2ggYXJlYSAqL1xcbi8qIGNlbnRlcnMgaXRzZWxmIGRlc3BpdGUgb2Ygb3RoZXIgZmxleCBzZXR0aW5ncyAqL1xcbi5mZWVsc0xpa2UsXFxuLmRhdGUsXFxuLm5hbWUsXFxuLnRpbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uc2VhcmNoQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiA4dmg7XFxufVxcbi5zZWFyY2hBcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG59XFxuI3NlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogOTUlO1xcbn1cXG4vKmRhaWx5IGZvcmVjYXN0ICovXFxuLmRheURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKiB0cmljayB0byBhcHBlYXIgY2VudHJhbGl6ZWQgKi9cXG4ubWluVGVtcFN2ZyxcXG4ubWF4VGVtcFN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC4xNXJlbTtcXG59XFxuXFxuLyogd2luZCBhZGp1c3RzICovXFxuLndpbmREYXRhLFxcbi5yYWluRGF0YSxcXG4uc25vd0RhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53aW5kU3BlZWQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi8qIGNvbnRhaW5lcnMgb3BhY2l0eSBiYWNrZ3JvdW5kICovXFxubWFpbiA+IHNlY3Rpb24gPiBzZWN0aW9uLFxcbi5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG59XFxuXFxuLyogaGlnaCBzcGVjaWZpY2l0eSAqL1xcbi5kYXlDb250YWluZXIgPiAqIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZm9yZWNhc3RJdGVtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTExLDZIMTNWMTNIMTFWNk05LDIwQTEsMSAwIDAsMSA4LDIxSDVBMSwxIDAgMCwxIDQsMjBWMTVMNiw2SDEwVjEzQTEsMSAwIDAsMSA5LDE0VjIwTTEwLDVIN1YzSDEwVjVNMTUsMjBWMTRBMSwxIDAgMCwxIDE0LDEzVjZIMThMMjAsMTVWMjBBMSwxIDAgMCwxIDE5LDIxSDE2QTEsMSAwIDAsMSAxNSwyME0xNCw1VjNIMTdWNUgxNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDNDMTguNjcgNi41OSAxNS42NCA0IDEyIDRDOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wM0MyLjM0IDguMzYgMCAxMC45IDAgMTRDMCAxNy4zMSAyLjY5IDIwIDYgMjBIMTlDMjEuNzYgMjAgMjQgMTcuNzYgMjQgMTVDMjQgMTIuMzYgMjEuOTUgMTAuMjIgMTkuMzUgMTAuMDNNOS40NSA5LjAzQzEwLjIzIDkuMDMgMTAuODcgOS42NyAxMC44NyAxMC40NVMxMC4yMyAxMS44NyA5LjQ1IDExLjg3IDguMDMgMTEuMjMgOC4wMyAxMC40NSA4LjY3IDkuMDMgOS40NSA5LjAzTTE0LjU1IDE2Ljk3QzEzLjc3IDE2Ljk3IDEzLjEzIDE2LjMzIDEzLjEzIDE1LjU1UzEzLjc3IDE0LjEzIDE0LjU1IDE0LjEzIDE1Ljk3IDE0Ljc3IDE1Ljk3IDE1LjU1IDE1LjMzIDE2Ljk3IDE0LjU1IDE2Ljk3TTkuMiAxN0w4IDE1LjhMMTQuOCA5TDE2IDEwLjJMOS4yIDE3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMiw0QTgsOCAwIDAsMSAyMCwxMkMyMCwxNC40IDE5LDE2LjUgMTcuMywxOEMxNS45LDE2LjcgMTQsMTYgMTIsMTZDMTAsMTYgOC4yLDE2LjcgNi43LDE4QzUsMTYuNSA0LDE0LjQgNCwxMkE4LDggMCAwLDEgMTIsNE0xNCw1Ljg5QzEzLjYyLDUuOSAxMy4yNiw2LjE1IDEzLjEsNi41NEwxMS44MSw5Ljc3TDExLjcxLDEwQzExLDEwLjEzIDEwLjQxLDEwLjYgMTAuMTQsMTEuMjZDOS43MywxMi4yOSAxMC4yMywxMy40NSAxMS4yNiwxMy44NkMxMi4yOSwxNC4yNyAxMy40NSwxMy43NyAxMy44NiwxMi43NEMxNC4xMiwxMi4wOCAxNCwxMS4zMiAxMy41NywxMC43NkwxMy42NywxMC41TDE0Ljk2LDcuMjlMMTQuOTcsNy4yNkMxNS4xNyw2Ljc1IDE0LjkyLDYuMTcgMTQuNDEsNS45NkMxNC4yOCw1LjkxIDE0LjE1LDUuODkgMTQsNS44OU0xMCw2QTEsMSAwIDAsMCA5LDdBMSwxIDAgMCwwIDEwLDhBMSwxIDAgMCwwIDExLDdBMSwxIDAgMCwwIDEwLDZNNyw5QTEsMSAwIDAsMCA2LDEwQTEsMSAwIDAsMCA3LDExQTEsMSAwIDAsMCA4LDEwQTEsMSAwIDAsMCA3LDlNMTcsOUExLDEgMCAwLDAgMTYsMTBBMSwxIDAgMCwwIDE3LDExQTEsMSAwIDAsMCAxOCwxMEExLDEgMCAwLDAgMTcsOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNOS41LDNBNi41LDYuNSAwIDAsMSAxNiw5LjVDMTYsMTEuMTEgMTUuNDEsMTIuNTkgMTQuNDQsMTMuNzNMMTQuNzEsMTRIMTUuNUwyMC41LDE5TDE5LDIwLjVMMTQsMTUuNVYxNC43MUwxMy43MywxNC40NEMxMi41OSwxNS40MSAxMS4xMSwxNiA5LjUsMTZBNi41LDYuNSAwIDAsMSAzLDkuNUE2LjUsNi41IDAgMCwxIDkuNSwzTTkuNSw1QzcsNSA1LDcgNSw5LjVDNSwxMiA3LDE0IDkuNSwxNEMxMiwxNCAxNCwxMiAxNCw5LjVDMTQsNyAxMiw1IDkuNSw1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0yMC43OSwxMy45NUwxOC40NiwxNC41N0wxNi40NiwxMy40NFYxMC41NkwxOC40Niw5LjQzTDIwLjc5LDEwLjA1TDIxLjMxLDguMTJMMTkuNTQsNy42NUwyMCw1Ljg4TDE4LjA3LDUuMzZMMTcuNDUsNy42OUwxNS40NSw4LjgyTDEzLDcuMzhWNS4xMkwxNC43MSwzLjQxTDEzLjI5LDJMMTIsMy4yOUwxMC43MSwyTDkuMjksMy40MUwxMSw1LjEyVjcuMzhMOC41LDguODJMNi41LDcuNjlMNS45Miw1LjM2TDQsNS44OEw0LjQ3LDcuNjVMMi43LDguMTJMMy4yMiwxMC4wNUw1LjU1LDkuNDNMNy41NSwxMC41NlYxMy40NUw1LjU1LDE0LjU4TDMuMjIsMTMuOTZMMi43LDE1Ljg5TDQuNDcsMTYuMzZMNCwxOC4xMkw1LjkzLDE4LjY0TDYuNTUsMTYuMzFMOC41NSwxNS4xOEwxMSwxNi42MlYxOC44OEw5LjI5LDIwLjU5TDEwLjcxLDIyTDEyLDIwLjcxTDEzLjI5LDIyTDE0LjcsMjAuNTlMMTMsMTguODhWMTYuNjJMMTUuNSwxNS4xN0wxNy41LDE2LjNMMTguMTIsMTguNjNMMjAsMTguMTJMMTkuNTMsMTYuMzVMMjEuMywxNS44OEwyMC43OSwxMy45NU05LjUsMTAuNTZMMTIsOS4xMUwxNC41LDEwLjU2VjEzLjQ0TDEyLDE0Ljg5TDkuNSwxMy40NFYxMC41NlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTcuNDEgMTIuMTdMMTQuMjQgOUwxMi44MyAxMC40MUwxNy40MSAxNUwyMiAxMC40MUwyMC41OCA5TTEwIDEzVjVDMTAgMy4zNCA4LjY2IDIgNyAyUzQgMy4zNCA0IDVWMTNDMS43OSAxNC42NiAxLjM0IDE3Ljc5IDMgMjBTNy43OSAyMi42NiAxMCAyMSAxMi42NiAxNi4yMSAxMSAxNEMxMC43MiAxMy42MiAxMC4zOCAxMy4yOCAxMCAxM003IDRDNy41NSA0IDggNC40NSA4IDVWOEg2VjVDNiA0LjQ1IDYuNDUgNCA3IDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE3LjQxIDExLjgzTDIwLjU4IDE1TDIyIDEzLjU5TDE3LjQxIDlMMTIuODIgMTMuNTlMMTQuMjQgMTVMMTcuNDEgMTEuODNNMTAgMTNWNUMxMCAzLjM0IDguNjYgMiA3IDJTNCAzLjM0IDQgNVYxM0MxLjc5IDE0LjY2IDEuMzQgMTcuNzkgMyAyMFM3Ljc5IDIyLjY2IDEwIDIxIDEyLjY2IDE2LjIxIDExIDE0QzEwLjcyIDEzLjYyIDEwLjM4IDEzLjI4IDEwIDEzTTcgNEM3LjU1IDQgOCA0LjQ1IDggNVY4SDZWNUM2IDQuNDUgNi40NSA0IDcgNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTUgMTNWNUEzIDMgMCAwIDAgOSA1VjEzQTUgNSAwIDEgMCAxNSAxM00xMiA0QTEgMSAwIDAgMSAxMyA1SDExQTEgMSAwIDAgMSAxMiA0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiwzLjc3TDExLjI1LDQuNjFDMTEuMjUsNC42MSA5Ljk3LDYuMDYgOC42OCw3Ljk0QzcuMzksOS44MiA2LDEyLjA3IDYsMTQuMjNBNiw2IDAgMCwwIDEyLDIwLjIzQTYsNiAwIDAsMCAxOCwxNC4yM0MxOCwxMi4wNyAxNi42MSw5LjgyIDE1LjMyLDcuOTRDMTQuMDMsNi4wNiAxMi43NSw0LjYxIDEyLjc1LDQuNjFMMTIsMy43N00xMiw2LjlDMTIuNDQsNy40MiAxMi44NCw3Ljg1IDEzLjY4LDkuMDdDMTQuODksMTAuODMgMTYsMTMuMDcgMTYsMTQuMjNDMTYsMTYuNDUgMTQuMjIsMTguMjMgMTIsMTguMjNDOS43OCwxOC4yMyA4LDE2LjQ1IDgsMTQuMjNDOCwxMy4wNyA5LjExLDEwLjgzIDEwLjMyLDkuMDdDMTEuMTYsNy44NSAxMS41Niw3LjQyIDEyLDYuOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxOUE1LDUgMCAwLDEgMSwxNEE1LDUgMCAwLDEgNiw5QzcsNi42NSA5LjMsNSAxMiw1QzE1LjQzLDUgMTguMjQsNy42NiAxOC41LDExLjAzTDE5LDExQTQsNCAwIDAsMSAyMywxNUE0LDQgMCAwLDEgMTksMTlINk0xOSwxM0gxN1YxMkE1LDUgMCAwLDAgMTIsN0M5LjUsNyA3LjQ1LDguODIgNy4wNiwxMS4xOUM2LjczLDExLjA3IDYuMzcsMTEgNiwxMUEzLDMgMCAwLDAgMywxNEEzLDMgMCAwLDAgNiwxN0gxOUEyLDIgMCAwLDAgMjEsMTVBMiwyIDAgMCwwIDE5LDEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNEg3QTEsMSAwIDAsMSA4LDE1QTEsMSAwIDAsMSA3LDE2SDZNMTIsMTFIMTVMMTMsMTVIMTVMMTEuMjUsMjJMMTIsMTdIOS41TDEyLDExWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNy43NSw0LjA5TDE1LjIyLDYuMDNMMTYuMTMsOS4wOUwxMy41LDcuMjhMMTAuODcsOS4wOUwxMS43OCw2LjAzTDkuMjUsNC4wOUwxMi40NCw0TDEzLjUsMUwxNC41Niw0TDE3Ljc1LDQuMDlNMjEuMjUsMTFMMTkuNjEsMTIuMjVMMjAuMiwxNC4yM0wxOC41LDEzLjA2TDE2LjgsMTQuMjNMMTcuMzksMTIuMjVMMTUuNzUsMTFMMTcuODEsMTAuOTVMMTguNSw5TDE5LjE5LDEwLjk1TDIxLjI1LDExTTE4Ljk3LDE1Ljk1QzE5LjgsMTUuODcgMjAuNjksMTcuMDUgMjAuMTYsMTcuOEMxOS44NCwxOC4yNSAxOS41LDE4LjY3IDE5LjA4LDE5LjA3QzE1LjE3LDIzIDguODQsMjMgNC45NCwxOS4wN0MxLjAzLDE1LjE3IDEuMDMsOC44MyA0Ljk0LDQuOTNDNS4zNCw0LjUzIDUuNzYsNC4xNyA2LjIxLDMuODVDNi45NiwzLjMyIDguMTQsNC4yMSA4LjA2LDUuMDRDNy43OSw3LjkgOC43NSwxMC44NyAxMC45NSwxMy4wNkMxMy4xNCwxNS4yNiAxNi4xLDE2LjIyIDE4Ljk3LDE1Ljk1TTE3LjMzLDE3Ljk3QzE0LjUsMTcuODEgMTEuNywxNi42NCA5LjUzLDE0LjVDNy4zNiwxMi4zMSA2LjIsOS41IDYuMDQsNi42OEMzLjIzLDkuODIgMy4zNCwxNC42NCA2LjM1LDE3LjY2QzkuMzcsMjAuNjcgMTQuMTksMjAuNzggMTcuMzMsMTcuOTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTksMTJDOS41MywxMi4xNCA5Ljg1LDEyLjY5IDkuNzEsMTMuMjJMOC40MSwxOC4wNUM4LjI3LDE4LjU5IDcuNzIsMTguOSA3LjE5LDE4Ljc2QzYuNjUsMTguNjIgNi4zNCwxOC4wNyA2LjUsMTcuNTRMNy43OCwxMi43MUM3LjkyLDEyLjE3IDguNDcsMTEuODYgOSwxMk0xMywxMkMxMy41MywxMi4xNCAxMy44NSwxMi42OSAxMy43MSwxMy4yMkwxMS42NCwyMC45NUMxMS41LDIxLjUgMTAuOTUsMjEuOCAxMC40MSwyMS42NkM5Ljg4LDIxLjUgOS41NiwyMC45NyA5LjcsMjAuNDNMMTEuNzgsMTIuNzFDMTEuOTIsMTIuMTcgMTIuNDcsMTEuODYgMTMsMTJNMTcsMTJDMTcuNTMsMTIuMTQgMTcuODUsMTIuNjkgMTcuNzEsMTMuMjJMMTYuNDEsMTguMDVDMTYuMjcsMTguNTkgMTUuNzIsMTguOSAxNS4xOSwxOC43NkMxNC42NSwxOC42MiAxNC4zNCwxOC4wNyAxNC41LDE3LjU0TDE1Ljc4LDEyLjcxQzE1LjkyLDEyLjE3IDE2LjQ3LDExLjg2IDE3LDEyTTE3LDEwVjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUMzLDEyLjExIDMuNiwxMy4wOCA0LjUsMTMuNlYxMy41OUM1LDEzLjg3IDUuMTQsMTQuNSA0Ljg3LDE0Ljk2QzQuNTksMTUuNDMgNCwxNS42IDMuNSwxNS4zMlYxNS4zM0MyLDE0LjQ3IDEsMTIuODUgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJDMjMsMTMuNSAyMi4yLDE0Ljc3IDIxLDE1LjQ2VjE1LjQ2QzIwLjUsMTUuNzMgMTkuOTEsMTUuNTcgMTkuNjMsMTUuMDlDMTkuMzYsMTQuNjEgMTkuNSwxNCAyMCwxMy43MlYxMy43M0MyMC42LDEzLjM5IDIxLDEyLjc0IDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxNC4wM0ExLDEgMCAwLDEgNywxNS4wM0M3LDE1LjU4IDYuNTUsMTYuMDMgNiwxNi4wM0MzLjI0LDE2LjAzIDEsMTMuNzkgMSwxMS4wM0MxLDguMjcgMy4yNCw2LjAzIDYsNi4wM0M3LDMuNjggOS4zLDIuMDMgMTIsMi4wM0MxNS40MywyLjAzIDE4LjI0LDQuNjkgMTguNSw4LjA2TDE5LDguMDNBNCw0IDAgMCwxIDIzLDEyLjAzQzIzLDE0LjIzIDIxLjIxLDE2LjAzIDE5LDE2LjAzSDE4QzE3LjQ1LDE2LjAzIDE3LDE1LjU4IDE3LDE1LjAzQzE3LDE0LjQ3IDE3LjQ1LDE0LjAzIDE4LDE0LjAzSDE5QTIsMiAwIDAsMCAyMSwxMi4wM0EyLDIgMCAwLDAgMTksMTAuMDNIMTdWOS4wM0MxNyw2LjI3IDE0Ljc2LDQuMDMgMTIsNC4wM0M5LjUsNC4wMyA3LjQ1LDUuODQgNy4wNiw4LjIxQzYuNzMsOC4wOSA2LjM3LDguMDMgNiw4LjAzQTMsMyAwIDAsMCAzLDExLjAzQTMsMyAwIDAsMCA2LDE0LjAzTTEyLDE0LjE1QzEyLjE4LDE0LjM5IDEyLjM3LDE0LjY2IDEyLjU2LDE0Ljk0QzEzLDE1LjU2IDE0LDE3LjAzIDE0LDE4QzE0LDE5LjExIDEzLjEsMjAgMTIsMjBBMiwyIDAgMCwxIDEwLDE4QzEwLDE3LjAzIDExLDE1LjU2IDExLjQ0LDE0Ljk0QzExLjYzLDE0LjY2IDExLjgyLDE0LjQgMTIsMTQuMTVNMTIsMTEuMDNMMTEuNSwxMS41OUMxMS41LDExLjU5IDEwLjY1LDEyLjU1IDkuNzksMTMuODFDOC45MywxNS4wNiA4LDE2LjU2IDgsMThBNCw0IDAgMCwwIDEyLDIyQTQsNCAwIDAsMCAxNiwxOEMxNiwxNi41NiAxNS4wNywxNS4wNiAxNC4yMSwxMy44MUMxMy4zNSwxMi41NSAxMi41LDExLjU5IDEyLjUsMTEuNTlcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxNEExLDEgMCAwLDEgNywxNUExLDEgMCAwLDEgNiwxNkE1LDUgMCAwLDEgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJBNCw0IDAgMCwxIDE5LDE2SDE4QTEsMSAwIDAsMSAxNywxNUExLDEgMCAwLDEgMTgsMTRIMTlBMiwyIDAgMCwwIDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1Y5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFBMywzIDAgMCwwIDYsMTRNNy44OCwxOC4wN0wxMC4wNywxNy41TDguNDYsMTUuODhDOC4wNywxNS41IDguMDcsMTQuODYgOC40NiwxNC40NkM4Ljg1LDE0LjA3IDkuNSwxNC4wNyA5Ljg4LDE0LjQ2TDExLjUsMTYuMDdMMTIuMDcsMTMuODhDMTIuMjEsMTMuMzQgMTIuNzYsMTMuMDMgMTMuMjksMTMuMTdDMTMuODMsMTMuMzEgMTQuMTQsMTMuODYgMTQsMTQuNEwxMy40MSwxNi41OUwxNS42LDE2QzE2LjE0LDE1Ljg2IDE2LjY5LDE2LjE3IDE2LjgzLDE2LjcxQzE2Ljk3LDE3LjI0IDE2LjY2LDE3Ljc5IDE2LjEyLDE3LjkzTDEzLjkzLDE4LjVMMTUuNTQsMjAuMTJDMTUuOTMsMjAuNSAxNS45MywyMS4xNSAxNS41NCwyMS41NEMxNS4xNSwyMS45MyAxNC41LDIxLjkzIDE0LjEyLDIxLjU0TDEyLjUsMTkuOTNMMTEuOTMsMjIuMTJDMTEuNzksMjIuNjYgMTEuMjQsMjIuOTcgMTAuNzEsMjIuODNDMTAuMTcsMjIuNjkgOS44NiwyMi4xNCAxMCwyMS42TDEwLjU5LDE5LjQxTDguNCwyMEM3Ljg2LDIwLjE0IDcuMzEsMTkuODMgNy4xNywxOS4yOUM3LjAzLDE4Ljc2IDcuMzQsMTguMjEgNy44OCwxOC4wN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMjIuMTEgMjEuNDZMMi4zOSAxLjczTDEuMTEgM0w0Ljk3IDYuODZMMy4zNCA3TDUuMTEgMTAuNzlDNS4yNSAxMCA1LjUgOS4yNCA1Ljk0IDguNUM2IDguMzYgNi4xMyA4LjI0IDYuMjIgOC4xMUw3LjY2IDkuNTVDNy4yNSAxMC4yNyA3IDExLjExIDcgMTJDNyAxNC43NiA5LjI0IDE3IDEyIDE3QzEyLjkgMTcgMTMuNzMgMTYuNzUgMTQuNDUgMTYuMzRMMjAuODQgMjIuNzNMMjIuMTEgMjEuNDZNMTIgMTVDMTAuMzQgMTUgOSAxMy42NiA5IDEyQzkgMTEuNjcgOS4wNyAxMS4zNiA5LjE3IDExLjA2TDEyLjk0IDE0LjgzQzEyLjY0IDE0LjkzIDEyLjMzIDE1IDEyIDE1TTE4LjA1IDguNUMxNy42MyA3Ljc4IDE3LjEgNy4xNSAxNi41IDYuNjRMMjAuNjUgN0wxOC44OCAxMC43OUMxOC43NCAxMCAxOC40NyA5LjIzIDE4LjA1IDguNU0xMiA3QzE0Ljc2IDcgMTcgOS4yNCAxNyAxMkMxNyAxMi41NCAxNi44OSAxMy4wNSAxNi43NCAxMy41NEwxNSAxMS43OEMxNC44NyAxMC4zIDEzLjcgOS4xMyAxMi4yMiA5TDEwLjQ3IDcuMjdDMTAuOTUgNy4xMSAxMS40NiA3IDEyIDdNMTIgNUMxMS4xNiA1IDEwLjM1IDUuMTUgOS42MSA1LjQyTDEyIDJMMTQuMzkgNS40MkMxMy42NSA1LjE1IDEyLjg0IDUgMTIgNU0xOC44NyAxMy4yMUwyMC42NCAxN0wyMC4yNCAxNy4wNEwxOC4yNSAxNS4wNUMxOC41NCAxNC40NSAxOC43NiAxMy44NCAxOC44NyAxMy4yMU0xMiAxOUMxMi44MiAxOSAxMy42MyAxOC44MyAxNC4zNyAxOC41NkwxMiAyMkw5LjU5IDE4LjU2QzEwLjMzIDE4LjgzIDExLjE0IDE5IDEyIDE5TTUuOTUgMTUuNUM2LjM3IDE2LjI0IDYuOTEgMTYuODYgNy41IDE3LjM3TDMuMzYgMTdMNS4xMiAxMy4yM0M1LjI2IDE0IDUuNTMgMTQuNzggNS45NSAxNS41WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiw3QTUsNSAwIDAsMSAxNywxMkE1LDUgMCAwLDEgMTIsMTdBNSw1IDAgMCwxIDcsMTJBNSw1IDAgMCwxIDEyLDdNMTIsOUEzLDMgMCAwLDAgOSwxMkEzLDMgMCAwLDAgMTIsMTVBMywzIDAgMCwwIDE1LDEyQTMsMyAwIDAsMCAxMiw5TTEyLDJMMTQuMzksNS40MkMxMy42NSw1LjE1IDEyLjg0LDUgMTIsNUMxMS4xNiw1IDEwLjM1LDUuMTUgOS42MSw1LjQyTDEyLDJNMy4zNCw3TDcuNSw2LjY1QzYuOSw3LjE2IDYuMzYsNy43OCA1Ljk0LDguNUM1LjUsOS4yNCA1LjI1LDEwIDUuMTEsMTAuNzlMMy4zNCw3TTMuMzYsMTdMNS4xMiwxMy4yM0M1LjI2LDE0IDUuNTMsMTQuNzggNS45NSwxNS41QzYuMzcsMTYuMjQgNi45MSwxNi44NiA3LjUsMTcuMzdMMy4zNiwxN00yMC42NSw3TDE4Ljg4LDEwLjc5QzE4Ljc0LDEwIDE4LjQ3LDkuMjMgMTguMDUsOC41QzE3LjYzLDcuNzggMTcuMSw3LjE1IDE2LjUsNi42NEwyMC42NSw3TTIwLjY0LDE3TDE2LjUsMTcuMzZDMTcuMDksMTYuODUgMTcuNjIsMTYuMjIgMTguMDQsMTUuNUMxOC40NiwxNC43NyAxOC43MywxNCAxOC44NywxMy4yMUwyMC42NCwxN00xMiwyMkw5LjU5LDE4LjU2QzEwLjMzLDE4LjgzIDExLjE0LDE5IDEyLDE5QzEyLjgyLDE5IDEzLjYzLDE4LjgzIDE0LjM3LDE4LjU2TDEyLDIyWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk00LDEwQTEsMSAwIDAsMSAzLDlBMSwxIDAgMCwxIDQsOEgxMkEyLDIgMCAwLDAgMTQsNkEyLDIgMCAwLDAgMTIsNEMxMS40NSw0IDEwLjk1LDQuMjIgMTAuNTksNC41OUMxMC4yLDUgOS41Niw1IDkuMTcsNC41OUM4Ljc4LDQuMiA4Ljc4LDMuNTYgOS4xNywzLjE3QzkuOSwyLjQ1IDEwLjksMiAxMiwyQTQsNCAwIDAsMSAxNiw2QTQsNCAwIDAsMSAxMiwxMEg0TTE5LDEyQTEsMSAwIDAsMCAyMCwxMUExLDEgMCAwLDAgMTksMTBDMTguNzIsMTAgMTguNDcsMTAuMTEgMTguMjksMTAuMjlDMTcuOSwxMC42OCAxNy4yNywxMC42OCAxNi44OCwxMC4yOUMxNi41LDkuOSAxNi41LDkuMjcgMTYuODgsOC44OEMxNy40Miw4LjM0IDE4LjE3LDggMTksOEEzLDMgMCAwLDEgMjIsMTFBMywzIDAgMCwxIDE5LDE0SDVBMSwxIDAgMCwxIDQsMTNBMSwxIDAgMCwxIDUsMTJIMTlNMTgsMThINEExLDEgMCAwLDEgMywxN0ExLDEgMCAwLDEgNCwxNkgxOEEzLDMgMCAwLDEgMjEsMTlBMywzIDAgMCwxIDE4LDIyQzE3LjE3LDIyIDE2LjQyLDIxLjY2IDE1Ljg4LDIxLjEyQzE1LjUsMjAuNzMgMTUuNSwyMC4xIDE1Ljg4LDE5LjcxQzE2LjI3LDE5LjMyIDE2LjksMTkuMzIgMTcuMjksMTkuNzFDMTcuNDcsMTkuODkgMTcuNzIsMjAgMTgsMjBBMSwxIDAgMCwwIDE5LDE5QTEsMSAwIDAsMCAxOCwxOFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc3QgY2FwaXRhbGl6ZUZpcnN0ID0gKHN0cikgPT4ge1xuICBjb25zdCBjYXBpdGFsaXplZCA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgcmV0dXJuIGNhcGl0YWxpemVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FwaXRhbGl6ZUZpcnN0O1xuIiwiY29uc3QgY29udmVydFRvS20gPSAobSkgPT4ge1xuICBjb25zdCBrbUggPSAobSAqIDMuNikudG9GaXhlZCgxKTtcbiAgcmV0dXJuIGttSDtcbn07XG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0VG9LbTtcbiIsImNvbnN0IGdldERhdGUgPSAobXMpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsIDExKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGU7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckFQSSBmcm9tICcuL2dldFdlYXRoZXJBUEknO1xuaW1wb3J0IGdldFN0eWxlIGZyb20gJy4vZ2V0U3R5bGUnO1xuaW1wb3J0IGdldERhdGUgZnJvbSAnLi9nZXREYXRlJztcbmltcG9ydCBnZXRIb3VyIGZyb20gJy4vZ2V0SG91cic7XG5pbXBvcnQgZ2V0V2luZERpciBmcm9tICcuL2dldFdpbmREaXInO1xuaW1wb3J0IHZlcmlmeVJhaW4gZnJvbSAnLi92ZXJpZnlSYWluJztcbmltcG9ydCB2ZXJpZnlTbm93IGZyb20gJy4vdmVyaWZ5U25vdyc7XG5pbXBvcnQgZ2V0Tm93VGltZSBmcm9tICcuL2dldE5vd1RpbWUnO1xuaW1wb3J0IGNvbnZlcnRUb0ttIGZyb20gJy4vY29udmVydFRvS20nO1xuaW1wb3J0IGdldEZpeGVkTnVtYmVyIGZyb20gJy4vZ2V0Rml4ZWROdW1iZXInO1xuaW1wb3J0IHByb2Nlc3NEYWlseURhdGEgZnJvbSAnLi9wcm9jZXNzRGFpbHlEYXRhJztcbmltcG9ydCBjYXBpdGFsaXplRmlyc3QgZnJvbSAnLi9jYXBpdGFsaXplRmlyc3QnO1xuaW1wb3J0IHZlcmlmeUFsZXJ0cyBmcm9tICcuL3ZlcmlmeUFsZXJ0cyc7XG5pbXBvcnQgc2V0V2VhdGhlckljb24gZnJvbSAnLi9zZXRXZWF0aGVySWNvbic7XG5cbmNvbnN0IGdldERvbSA9IChsYXQsIGxvbiwgbG9jLCBjb3VudHJ5KSA9PiB7XG4gIC8vIHF1ZXJpZXNcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgY29uc3QgdXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYnKTtcbiAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlJyk7XG4gIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5Jyk7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpO1xuICBjb25zdCB3aW5kRGVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmREZWcnKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRTcGVlZCcpO1xuICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWRzJyk7XG4gIGNvbnN0IHJhaW4xaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluMWgnKTtcbiAgY29uc3QgcmFpbjFoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluMWhDb250Jyk7XG4gIGNvbnN0IHNub3cxaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93MWgnKTtcbiAgY29uc3Qgc25vdzFoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93MWhDb250Jyk7XG4gIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Jyk7XG4gIGNvbnN0IGFsZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydHMnKTtcblxuICAvLyB3cml0aW5nIHRvIERPTVxuICBjb25zdCB3cml0ZVdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckFQSShsYXQsIGxvbiwgY291bnRyeSk7XG4gICAgICBjb25zb2xlLmxvZygnT25lY2FsbCBBUEk6ICcsIHJlY0RhdGEpO1xuXG4gICAgICAvLyB1bml0IGNvbnZlcnNpb24gYmVmb3JlIHdyaXRpbmdcbiAgICAgIC8vIHNsaWNlcyBvdXQgc2Vjb25kcywga2VlcCBhbS9QTVxuICAgICAgY29uc3Qgc3VucmlzZVRpbWUgPSBgJHtnZXRIb3VyKHJlY0RhdGEuY3VycmVudC5zdW5yaXNlKS5zbGljZShcbiAgICAgICAgMCxcbiAgICAgICAgNFxuICAgICAgKX0gJHtnZXRIb3VyKHJlY0RhdGEuY3VycmVudC5zdW5yaXNlKS5zbGljZSg3LCAxMCl9YDtcblxuICAgICAgY29uc3Qgc3Vuc2V0VGltZSA9IGAke2dldEhvdXIocmVjRGF0YS5jdXJyZW50LnN1bnNldCkuc2xpY2UoXG4gICAgICAgIDAsXG4gICAgICAgIDRcbiAgICAgICl9ICR7Z2V0SG91cihyZWNEYXRhLmN1cnJlbnQuc3Vuc2V0KS5zbGljZSg3LCAxMCl9YDtcbiAgICAgIGNvbnN0IHdpbmRTcGVlZEttID0gY29udmVydFRvS20ocmVjRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpO1xuXG4gICAgICAvLyBzaG93cyBjdXJyZW50IGhvdXIgd2l0aG91dCBzZWNvbmRzXG4gICAgICBjb25zdCBub3dIb3VyID0gZ2V0Tm93VGltZShyZWNEYXRhLnRpbWV6b25lKS50b1N0cmluZygpLnNsaWNlKDE2LCAyMSk7XG4gICAgICBjb25zdCB0aW1lRGF0ZSA9IGdldERhdGUoKTtcblxuICAgICAgLy8gbWFpbiBpbmZvIHdyaXRpbmdcbiAgICAgIGNvbnN0IHdpbmREaXIgPSBnZXRXaW5kRGlyKHJlY0RhdGEuY3VycmVudC53aW5kX2RlZyk7XG4gICAgICBjb25zdCB0ZW1wUm91bmQgPSBnZXRGaXhlZE51bWJlcihyZWNEYXRhLmN1cnJlbnQudGVtcCwgMSk7XG4gICAgICBjb25zdCBmZWVsUm91bmQgPSBnZXRGaXhlZE51bWJlcihyZWNEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSwgMSk7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gbG9jO1xuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRpbWVEYXRlO1xuICAgICAgdGltZS50ZXh0Q29udGVudCA9IG5vd0hvdXI7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7dGVtcFJvdW5kfSDCukNgO1xuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtmZWVsUm91bmR9IMK6Q2A7XG4gICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3JlY0RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgIHV2LnRleHRDb250ZW50ID0gYFVWICR7Z2V0Rml4ZWROdW1iZXIocmVjRGF0YS5jdXJyZW50LnV2aSwgMCl9YDtcbiAgICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSBgJHtzdW5yaXNlVGltZX1gO1xuICAgICAgc3Vuc2V0LnRleHRDb250ZW50ID0gYCR7c3Vuc2V0VGltZX1gO1xuICAgICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGAke3JlY0RhdGEuY3VycmVudC52aXNpYmlsaXR5IC8gMTAwMH0ga21gO1xuICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdChcbiAgICAgICAgcmVjRGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgICB3aW5kRGVnLnRleHRDb250ZW50ID0gYCR7d2luZERpcn1gO1xuICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7d2luZFNwZWVkS219IGttL2hgO1xuICAgICAgY2xvdWRzLnRleHRDb250ZW50ID0gYENsb3VkcyAke3JlY0RhdGEuY3VycmVudC5jbG91ZHN9ICVgO1xuXG4gICAgICAvLyBjaGVjayBpZiByYWluIGFuZCBzbm93IGRhdGEgYXJlIHByZXNlbnQgYW5kIHNob3dzIGl0XG4gICAgICBpZiAodmVyaWZ5UmFpbihyZWNEYXRhLmN1cnJlbnQpKSB7XG4gICAgICAgIHJhaW4xaC50ZXh0Q29udGVudCA9IGAke3JlY0RhdGEuY3VycmVudC5yYWluWycxaCddfSBtbWA7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgcmFpbjFoQ29udC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuZ2FwID0gJzAuNXJlbSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYWluMWgudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcmFpbjFoQ29udC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKHZlcmlmeVNub3cocmVjRGF0YS5jdXJyZW50KSkge1xuICAgICAgICBzbm93MWgudGV4dENvbnRlbnQgPSBgJHtyZWNEYXRhLmN1cnJlbnQuc25vd1snMWgnXX0gbW1gO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHNub3cxaENvbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmdhcCA9ICcwLjVyZW0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc25vdzFoLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHNub3cxaENvbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgLy8gZGVsZXRlcyBwcmV2aW91cyB2YWx1ZXMgYmVmb3JlIHdyaXRpbmcgbmV3IG9uZXNcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheUNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByZXZpb3VzQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGRhaWx5LmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JlY2FzdFxuICAgICAgLy8gcHJvY2VzcyBkYWlseSBmb3JlY2FzdCBpbnRvIGEgbmVhdCBBcnJheVxuICAgICAgY29uc3QgZGFpbHlUZW1wcyA9IHByb2Nlc3NEYWlseURhdGEocmVjRGF0YS5kYWlseSk7XG5cbiAgICAgIC8vIHdyaXRlIGVhY2ggZGF5IGZvcmVjYXN0ZWQgdG8gRE9NXG4gICAgICBmb3IgKGNvbnN0IGRheSBvZiBkYWlseVRlbXBzKSB7XG4gICAgICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXlDb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZGF5TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRheU1pblZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzBdLCAwKTtcbiAgICAgICAgZGF5TWluLnRleHRDb250ZW50ID0gYCR7ZGF5TWluVmFsdWV9IMK6Q2A7XG4gICAgICAgIGNvbnN0IG1pblRlbXBTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgbWluVGVtcFN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21pblRlbXBTdmcnKTtcblxuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvcmVjYXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBkYXlNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGF5TWF4VmFsdWUgPSBnZXRGaXhlZE51bWJlcihkYXlbMV0sIDApO1xuICAgICAgICBkYXlNYXgudGV4dENvbnRlbnQgPSBgJHtkYXlNYXhWYWx1ZX0gwrpDYDtcbiAgICAgICAgY29uc3QgbWF4VGVtcFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYXhUZW1wU3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWF4VGVtcFN2ZycpO1xuXG4gICAgICAgIGNvbnN0IHV2UmFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgdXZpTWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHV2aU1heFZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzJdLCAwKTtcbiAgICAgICAgdXZpTWF4LnRleHRDb250ZW50ID0gYFVWICR7dXZpTWF4VmFsdWV9YDtcbiAgICAgICAgY29uc3QgdXZpZ1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgICAgICB1dmlnU3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndXZTdmcnKTtcblxuICAgICAgICBjb25zdCByYWluUHJvYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByYWluUHJvYlZhbHVlID0gYCR7KGRheVszXSAqIDEwMCkudG9GaXhlZCgwKX0lYDtcbiAgICAgICAgcmFpblByb2IudGV4dENvbnRlbnQgPSByYWluUHJvYlZhbHVlO1xuICAgICAgICBjb25zdCByYWluU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgICAgIHJhaW5Tdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWluUGVyY2VudCcpO1xuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZvcmVjYXN0SXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGVzY1ZhbHVlID0gZGF5WzRdO1xuICAgICAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdCh3ZWF0aGVyRGVzY1ZhbHVlKTtcbiAgICAgICAgLy8gaWNvblxuICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgICAgICBsZXQgd2VhdGhlckljb25WYWx1ZSA9IGRheVs2XTtcbiAgICAgICAgd2VhdGhlckljb25WYWx1ZSA9IGNhcGl0YWxpemVGaXJzdCh3ZWF0aGVySWNvblZhbHVlKTtcbiAgICAgICAgLy8gZ2V0cyBTVkcgZm9yIGZvcmVjYXN0ZWQgZGF0YVxuICAgICAgICB3ZWF0aGVySWNvbi5pbm5lckhUTUwgPSBzZXRXZWF0aGVySWNvbihcbiAgICAgICAgICB3ZWF0aGVySWNvblZhbHVlLFxuICAgICAgICAgIHJlY0RhdGEudGltZXpvbmUsXG4gICAgICAgICAgLy8gdHJ1ZSBiZWNhdXNlIGl0J3MgYSBmdXR1cmUgZGF0ZVxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBkYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXlEYXRlJyk7XG4gICAgICAgIGNvbnN0IGRheURhdGVWYWx1ZSA9IGRheVs1XTtcbiAgICAgICAgZGF5RGF0ZS50ZXh0Q29udGVudCA9IGRheURhdGVWYWx1ZTtcblxuICAgICAgICAvLyBhcHBlbmRzXG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWluVGVtcFN2Zyk7XG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TWluKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhUZW1wU3ZnKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlNYXgpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQodXZpZ1N2Zyk7XG4gICAgICAgIHV2UmFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dmlNYXgpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmFpblN2Zyk7XG4gICAgICAgIHV2UmFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWluUHJvYik7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjKTtcblxuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5RGF0ZSk7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcjIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodXZSYWluQ29udGFpbmVyKTtcblxuICAgICAgICBkYWlseS5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBjYWxscyBzdHlsaW5nKHZhcmlhYmxlIGljb25zKVxuXG4gICAgICAvLyBjaGVjayBmb3IgYWxlcnRzIGFuZCBjbGVhbnMgYWZ0ZXJ3YXJkc1xuICAgICAgaWYgKHZlcmlmeUFsZXJ0cyhyZWNEYXRhKSkge1xuICAgICAgICBhbGVydHMudGV4dENvbnRlbnQgPSByZWNEYXRhLmFsZXJ0c1swXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZ2V0U3R5bGUocmVjRGF0YS5jdXJyZW50LndlYXRoZXJbMF0ubWFpbiwgcmVjRGF0YS50aW1lem9uZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRTdHlsZShyZWNEYXRhLmN1cnJlbnQud2VhdGhlclswXS5tYWluLCByZWNEYXRhLnRpbWV6b25lLCBmYWxzZSk7XG4gICAgICAgIGFsZXJ0cy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnT29vb3BzLCB0aGVyZSBzZWVtcyB0byBiZSBhIG5ldHdvcmsgZXJyb3IhJztcbiAgICB9XG4gIH07XG4gIHdyaXRlV2VhdGhlckRhdGEoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvbTtcbiIsImltcG9ydCBnZXREb20gZnJvbSAnLi9nZXREb20nO1xuaW1wb3J0IGdldEdlb0FQSSBmcm9tICcuL2dldEdlb0FQSSc7XG5cbmNvbnN0IGdldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbycpO1xuXG4gIC8vIHN0b3JlIHNlYXJjaHNcbiAgbGV0IHJlc3VsdEFycmF5ID0gW107XG5cbiAgLy8gcXVlcmllcyBjb29yZGluYXRlcywgc3RvcmVzIHRoZW4sIGNhbGwgZm9yIGdldERPTSB0byBjaGFuZ2Ugd2hhdCdzIGRpc3BsYXllZFxuICBjb25zdCBwcm9jZXNzSW5wdCA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBjbGVhbiBzdG9yZWRcbiAgICAgIHJlc3VsdEFycmF5ID0gW107XG4gICAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgZ2V0R2VvQVBJKHZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdHZW8gZGF0YSBBUEk6ICcsIGdlb0RhdGEpO1xuXG4gICAgICAvLyBnZW5lcmF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBjb25jYXQgbmFtZSBhbmQgY29vcmRzXG4gICAgICBjb25zdCBnZW9EYXRhMCA9IFtdO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLm5hbWV9LCAke2dlb0RhdGFbMF0uY291bnRyeX1gKTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5sYXR9YCk7XG4gICAgICBnZW9EYXRhMC5wdXNoKGAke2dlb0RhdGFbMF0ubG9ufWApO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLmNvdW50cnl9YCk7XG5cbiAgICAgIC8vIHN0b3JlIGZvciBmdXR1cmUgdXNlXG4gICAgICByZXN1bHRBcnJheS5wdXNoKGdlb0RhdGEwKTtcblxuICAgICAgLy8gY2FsbHMgZm9yIHJld3JpdGluZyB0aGUgRE9NIHdpdGggbmV3IGNpdHksIHBhc3NlcyBjb3VudHJ5IHRvIHNlbGVjdCBsYW5ndWFnZVxuICAgICAgZ2V0RG9tKFxuICAgICAgICBgJHtnZW9EYXRhWzBdLmxhdH1gLFxuICAgICAgICBgJHtnZW9EYXRhWzBdLmxvbn1gLFxuICAgICAgICByZXN1bHRBcnJheVswXVswXSxcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5jb3VudHJ5fWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGdlb0RhdGEwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNlYXJjaCBvbiBlbnRlclxuICBjb25zdCBwcm9jZXNzS2JkSW5wdXQgPSAoa2V5KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykgcHJvY2Vzc0lucHQoc2VhcmNoLnZhbHVlKTtcbiAgICBlbHNlIHNlYXJjaC5mb2N1cygpO1xuICB9O1xuXG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHByb2Nlc3NJbnB0KHNlYXJjaC52YWx1ZSkpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiBwcm9jZXNzS2JkSW5wdXQoZS5rZXkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgZ2V0Rml4ZWROdW1iZXIgPSAobiwgc3BhY2VzKSA9PiB7XG4gIGNvbnN0IGZpeGVkTiA9IG4udG9GaXhlZChzcGFjZXMpO1xuICByZXR1cm4gZml4ZWROO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rml4ZWROdW1iZXI7XG4iLCJjb25zdCBnZXRHZW9BUEkgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgZ2VvUmVzcXVlc3QgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MiZhcHBpZD04MzNjMjYxZDE5OTI2ZDEzY2M1NzhkNzk1MjhkOWQ2NGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApO1xuICBjb25zdCByZWNlaXZlZCA9IGF3YWl0IGdlb1Jlc3F1ZXN0Lmpzb24oKTtcbiAgcmV0dXJuIHJlY2VpdmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0R2VvQVBJO1xuIiwiY29uc3QgZ2V0SG91ciA9IChtcykgPT4ge1xuICAvLyB1bml4IGVwb2NoIHRvIGRhdGVcbiAgY29uc3QgbmV3RXBvY2ggPSBtcyAqIDEwMDA7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXdFcG9jaCk7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0SG91cjtcbiIsImNvbnN0IGdldE5lYXREYXRlID0gKGRhdGUpID0+IHtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gIG5ld0RhdGUgPSBuZXdEYXRlLnRvU3RyaW5nKCkuc2xpY2UoNCwgMTApO1xuICByZXR1cm4gbmV3RGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXROZWF0RGF0ZTtcbiIsImNvbnN0IGdldE5pZ2h0ID0gKHRpbWVOb3cpID0+IHtcbiAgLy8gbmlnaHQgYm9vbGVhbiBjaGVja1xuICBjb25zdCBjb25kaXRpb24xID0gdGltZU5vdyA+IDE5O1xuICBjb25zdCBjb25kaXRpb24yID0gdGltZU5vdyA8IDc7XG4gIGNvbnN0IG5pZ2h0ID0gY29uZGl0aW9uMSB8fCBjb25kaXRpb24yO1xuICByZXR1cm4gbmlnaHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TmlnaHQ7XG4iLCIvLyBzdHJpcHMgc2Vjb25kcyBmcm9tIGxvY2FsZVRpbWVcbmNvbnN0IGdldE5vd1RpbWUgPSAodGltZXpvbmUpID0+IHtcbiAgY29uc3Qgbm93SG91ciA9IG5ldyBEYXRlKFxuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogYCR7dGltZXpvbmV9YCB9KVxuICApO1xuICByZXR1cm4gbm93SG91cjtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXROb3dUaW1lO1xuIiwiaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi9pbWcvaWNvbnMvbWFnbmlmeS5zdmcnO1xuaW1wb3J0IGh1bWlkaXR5SWNvbiBmcm9tICcuL2ltZy9pY29ucy93YXRlci1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgdXZJY29uIGZyb20gJy4vaW1nL2ljb25zL3doaXRlLWJhbGFuY2Utc3Vubnkuc3ZnJztcbmltcG9ydCBnYXVnZUljb24gZnJvbSAnLi9pbWcvaWNvbnMvZ2F1Z2Uuc3ZnJztcbmltcG9ydCBzdW5yaXNlSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXN1bm55LnN2Zyc7XG5pbXBvcnQgc3Vuc2V0SWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXN1bm55LW9mZi5zdmcnO1xuaW1wb3J0IHZpc2liaWxpdHlJY29uIGZyb20gJy4vaW1nL2ljb25zL2Jpbm9jdWxhcnMuc3ZnJztcbmltcG9ydCBjbG91ZEljb24gZnJvbSAnLi9pbWcvaWNvbnMvY2xvdWQtcGVyY2VudC5zdmcnO1xuaW1wb3J0IHdpbmRJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItd2luZHkuc3ZnJztcbmltcG9ydCByYWluSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXBvdXJpbmcuc3ZnJztcbmltcG9ydCBzbm93SWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXNub3d5LnN2Zyc7XG5pbXBvcnQgbWF4VGVtcEljb24gZnJvbSAnLi9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItY2hldnJvbi11cC5zdmcnO1xuaW1wb3J0IG1pblRlbXBJY29uIGZyb20gJy4vaW1nL2ljb25zL3RoZXJtb21ldGVyLWNoZXZyb24tZG93bi5zdmcnO1xuaW1wb3J0IHJhaW5QSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXJhaW55LnN2Zyc7XG5pbXBvcnQgdGhlcm1vSWNvbiBmcm9tICcuL2ltZy9pY29ucy90aGVybW9tZXRlci1oaWdoLnN2Zyc7XG5pbXBvcnQgc2V0V2VhdGhlckljb24gZnJvbSAnLi9zZXRXZWF0aGVySWNvbic7XG5pbXBvcnQgc2V0QmFja2dyb3VuZCBmcm9tICcuL3NldEJhY2tncm91bmQnO1xuXG5jb25zdCBnZXRTdHlsZSA9IChjdXJyZW50V2VhdGhlciwgdGltZSwgaGFzQWxlcnRzKSA9PiB7XG4gIGNvbnN0IGdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvJyk7XG4gIGNvbnN0IGh1bWlkaXR5U3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5U3ZnJyk7XG4gIGNvbnN0IHN1bnJpc2VTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZVN2ZycpO1xuICBjb25zdCBzdW5zZXRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0U3ZnJyk7XG4gIGNvbnN0IHZpc2liaWxpdHlTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJpbGl0eVN2ZycpO1xuICBjb25zdCBjbG91ZFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG91ZFN2ZycpO1xuICBjb25zdCB3aW5kU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRTdmcnKTtcbiAgY29uc3QgcmFpblN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluU3ZnJyk7XG4gIGNvbnN0IHNub3dTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd1N2ZycpO1xuICBjb25zdCB3ZWF0aGVyU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJTdmcnKTtcbiAgY29uc3QgdXZTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXZTdmcnKTtcbiAgY29uc3QgbWluVGVtcFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taW5UZW1wU3ZnJyk7XG4gIGNvbnN0IG1heFRlbXBTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4VGVtcFN2ZycpO1xuICBjb25zdCByYWluUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWluUGVyY2VudCcpO1xuICBjb25zdCB0ZW1wSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wSWNvbicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIHRlbXBJY29uLmlubmVySFRNTCA9IHRoZXJtb0ljb247XG4gIGdvQnRuLmlubmVySFRNTCA9IHNlYXJjaEljb247XG4gIGh1bWlkaXR5U3ZnLmlubmVySFRNTCA9IGh1bWlkaXR5SWNvbjtcbiAgc3VucmlzZVN2Zy5pbm5lckhUTUwgPSBzdW5yaXNlSWNvbjtcbiAgc3Vuc2V0U3ZnLmlubmVySFRNTCA9IHN1bnNldEljb247XG4gIHZpc2liaWxpdHlTdmcuaW5uZXJIVE1MID0gdmlzaWJpbGl0eUljb247XG4gIGNsb3VkU3ZnLmlubmVySFRNTCA9IGNsb3VkSWNvbjtcbiAgd2luZFN2Zy5pbm5lckhUTUwgPSB3aW5kSWNvbjtcbiAgcmFpblN2Zy5pbm5lckhUTUwgPSByYWluSWNvbjtcbiAgc25vd1N2Zy5pbm5lckhUTUwgPSBzbm93SWNvbjtcblxuICAvLyBzaGFyZWQgaWNvbnMgd2l0aCBmb3JlY2FzdFxuICB1dlN2Zy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSB1dkljb247XG4gIH0pO1xuICBtaW5UZW1wU3ZnLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1pblRlbXBJY29uO1xuICB9KTtcbiAgbWF4VGVtcFN2Zy5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbm5lckhUTUwgPSBtYXhUZW1wSWNvbjtcbiAgfSk7XG4gIHJhaW5QZXJjZW50LmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IHJhaW5QSWNvbjtcbiAgfSk7XG5cbiAgLy8gcHJvY2VzcyB3ZWF0aGVyIGRlc2NyaXB0aW9uIGljb24gcGFzc2luZyB0aHJvdWdoIHRoZSByZWNlaXZlZCBhcnJheSwgY2hlY2tzIG5pZ2h0XG4gIHdlYXRoZXJTdmcuaW5uZXJIVE1MID0gc2V0V2VhdGhlckljb24oY3VycmVudFdlYXRoZXIsIHRpbWUsIGZhbHNlKTtcblxuICAvLyBzZXRzIGJvZHkgYmFja2dyb3VuZCBhY2NvcmRpbmcgdG8gd2VhdGhlci9kYXkvbmlnaHQgY29uZGl0aW9uXG4gIHNldEJhY2tncm91bmQoYm9keSwgdGltZSwgY3VycmVudFdlYXRoZXIsIGhhc0FsZXJ0cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTdHlsZTtcbiIsImNvbnN0IGdldFdlYXRoZXJBUEkgPSBhc3luYyAobGF0LCBsb24sIGNvdW50cnkpID0+IHtcbiAgaWYgKGNvdW50cnkgPT09ICdCUicpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZBUFBJRD04MzNjMjYxZDE5OTI2ZDEzY2M1NzhkNzk1MjhkOWQ2NCZ1bml0cz1tZXRyaWMmbGFuZz1wdF9icmAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgcmVjZWl2ZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZWNlaXZlZERhdGE7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JkFQUElEPTgzM2MyNjFkMTk5MjZkMTNjYzU3OGQ3OTUyOGQ5ZDY0JnVuaXRzPW1ldHJpY2AsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApO1xuICAvLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiBwYXJzaW5nIHRoZSByZXNwb25zZSBib2R5IHRleHQgYXMgSlNPTlxuICBjb25zdCByZWNlaXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWNlaXZlZERhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyQVBJO1xuIiwiY29uc3QgZ2V0V2luZERpciA9IChkZWcpID0+IHtcbiAgbGV0IHdpbmREaXI7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBkZWcgPCA0MCB8fCBkZWcgPT09IDM2MDpcbiAgICAgIHdpbmREaXIgPSAnTm9ydGgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gNDAgJiYgZGVnIDwgOTA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRoZWFzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSA5MCAmJiBkZWcgPCAxMzU6XG4gICAgICB3aW5kRGlyID0gJ0Vhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMTM1ICYmIGRlZyA8IDE4MDpcbiAgICAgIHdpbmREaXIgPSAnU291dGhlYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDE4MCAmJiBkZWcgPCAyMjU6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRoJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDIyNSAmJiBkZWcgPCAyNzA6XG4gICAgICB3aW5kRGlyID0gJ1NvdXRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSAyNzAgJiYgZGVnIDwgMzE1OlxuICAgICAgd2luZERpciA9ICdXZXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDMxNSAmJiBkZWcgPCAzNjA6XG4gICAgICB3aW5kRGlyID0gJ05vcnRod2VzdCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd2luZERpciA9ICdPb29wcy4uLic7XG4gIH1cbiAgcmV0dXJuIHdpbmREaXI7XG59O1xuLy8gSkVTVFxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kRGlyO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBnZXRXaW5kRGlyO1xuIiwiaW1wb3J0IGdldE5lYXREYXRlIGZyb20gJy4vZ2V0TmVhdERhdGUnO1xuXG5jb25zdCBwcm9jZXNzRGFpbHlEYXRhID0gKHJlY0FycmF5KSA9PiB7XG4gIC8vIHB1c2hlcyB0byBhIG5ldyBhcnJheSBvbmx5IGRhdGEgdGhhdCB3ZSB3YW50XG4gIGNvbnN0IGRhaWx5VGVtcHMgPSBbXTtcbiAgcmVjQXJyYXkuZm9yRWFjaCgoZGF5KSA9PlxuICAgIGRhaWx5VGVtcHMucHVzaChbXG4gICAgICBkYXkudGVtcC5taW4sXG4gICAgICBkYXkudGVtcC5tYXgsXG4gICAgICBkYXkudXZpLFxuICAgICAgZGF5LnBvcCxcbiAgICAgIGRheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgZ2V0TmVhdERhdGUoZGF5LmR0KSxcbiAgICAgIGRheS53ZWF0aGVyWzBdLm1haW5cbiAgICBdKVxuICApO1xuICByZXR1cm4gZGFpbHlUZW1wcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NEYWlseURhdGE7XG4iLCJpbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLWJyZXR0LXNheWxlcy05MTIzNjRfMWsuanBnJztcbmltcG9ydCBjbGVhclNreU5pZ2h0IGZyb20gJy4vaW1nL3BleGVscy1kcmlmdC1zaHV0dGVyYnVnLTIwODU5OTguanBnJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4vaW1nL3BleGVscy1icmF6aWwtdG9wbm8tOTYwNDgwNi5qcGcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtcmFodWwtcGFuZGl0LTI4MTY2MjVfcmFpbnkuanBnJztcbmltcG9ydCB0aHVuZGVyTmlnaHQgZnJvbSAnLi9pbWcvcGV4ZWxzLWFudG9uLWt1ZHJ5YXNob3YtOTg2MTQzMi5qcGcnO1xuaW1wb3J0IHRodW5kZXJEYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLXRzdmV0b3NsYXYtaHJpc3Rvdi0yNDk5ODQ2LmpwZyc7XG5pbXBvcnQgY2xvdWREYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLXBpeGFiYXktMTU4MTYzX2Nsb3Vkcy5qcGcnO1xuaW1wb3J0IGNsb3VkTmlnaHQgZnJvbSAnLi9pbWcvcGV4ZWxzLWJyZXR0LXNheWxlcy0zOTEwMTQxLmpwZyc7XG5pbXBvcnQgc25vd0RheSBmcm9tICcuL2ltZy9wZXhlbHMtcGl4YWJheS0yNTk2NTkuanBnJztcbmltcG9ydCBzbm93TmlnaHQgZnJvbSAnLi9pbWcvcGV4ZWxzLW1hcnRpbi1tYXJpYW5pLTM4MDE0NjMuanBnJztcbmltcG9ydCBmb2dEYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLWFsZWtzYW5kcmEtYmxpbm92YS04NjU5MjUyLmpwZyc7XG5pbXBvcnQgZm9nTmlnaHQgZnJvbSAnLi9pbWcvcGV4ZWxzLXBpeGFiYXktNTMxMzYwLmpwZyc7XG5pbXBvcnQgZ2V0Tm93VGltZSBmcm9tICcuL2dldE5vd1RpbWUnO1xuaW1wb3J0IGdldE5pZ2h0IGZyb20gJy4vZ2V0TmlnaHQnO1xuaW1wb3J0IHNldFVJY29sb3JzIGZyb20gJy4vc2V0VUljb2xvcnMnO1xuXG5jb25zdCBzZXRCYWNrZ3JvdW5kID0gKGJvZHksIHRpbWVOb3csIGN1cnJlbnRXZWF0aGVyLCBoYXNBbGVydHMpID0+IHtcbiAgY29uc29sZS5sb2coZ2V0Tm93VGltZSh0aW1lTm93KS5nZXRIb3VycygpLCBjdXJyZW50V2VhdGhlcik7XG5cbiAgLy8gY2hlY2tzIGlmIGNvbmdlcnRlZCB0aW1lem9uZSB0byBob3VycyBpcyBuaWdodFxuICBjb25zdCBuaWdodCA9IGdldE5pZ2h0KGdldE5vd1RpbWUodGltZU5vdykuZ2V0SG91cnMoKSk7XG5cbiAgLy8gc2FtZSBmb3IgYWxsIHBvc3NpYmlsaXRpZXNcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgLy8gYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2VcbiAgc3dpdGNoIChjdXJyZW50V2VhdGhlcikge1xuICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhclNreU5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI0ZERTY4QScsICcjNjcyZGNiJywgJyNmZmZmZmYyNScsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhclNreURheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmN2Y0ZjQnLCAnI0ZERTA0NycsICcjMDgwODA4NGEnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUmFpbic6XG4gICAgICBpZiAobmlnaHQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpbk5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2ZkZmJmYicsICcjQkVGMjY0JywgJyMwNDA0MDRhYicsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWluRGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y4ZjhmOCcsICcjNjdlOGY5JywgJyMwNDA0MDQ1NicsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxuICAgICAgaWYgKG5pZ2h0KSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RodW5kZXJOaWdodH0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmZGZiZmInLCAnI0JFRjI2NCcsICcjMDQwNDA0YWInLCBoYXNBbGVydHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGh1bmRlckRheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmOGY4ZjgnLCAnIzY3ZThmOScsICcjMDQwNDA0NTYnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ2xvdWRzJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZE5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI0ZERTA0NycsICcjMTBCOTgxJywgJyMyYzJiMmIzYicsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZERheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmN2Y0ZjQnLCAnIzY3RThGOScsICcjMDgwODA4ODAnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRm9nJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtmb2dOaWdodH0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNGREUwNDcnLCAnIzEwQjk4MScsICcjMmMyYjJiM2InLCBoYXNBbGVydHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Zm9nRGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y3ZjRmNCcsICcjNjdFOEY5JywgJyMwODA4MDg4MCcsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTbm93JzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93TmlnaHR9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjRkRFNjhBJywgJyM2NzJkY2InLCAnI2ZmZmZmZjI1JywgaGFzQWxlcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Nub3dEYXl9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjZjdmNGY0JywgJyNGREUwNDcnLCAnIzA4MDgwODRhJywgaGFzQWxlcnRzKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgfVxuXG4gIC8vIGZvZ1xufTtcbmV4cG9ydCBkZWZhdWx0IHNldEJhY2tncm91bmQ7XG4iLCJjb25zdCBzZXRVSWNvbG9ycyA9IChmb250Q29sb3IsIHN2Z0NvbG9yLCBzZWN0aW9uQmFja2dyb3VuZCwgaGFzQWxlcnRzKSA9PiB7XG4gIGNvbnN0IHN2Z3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAvLyBpdGVtcyB0byBoYXZlIGJnIGFwcGxpZWQgdG86XG4gIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFdlYXRoZXInKTtcbiAgY29uc3Qgc2VhcmNoQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hBcmVhJyk7XG4gIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXlDb250YWluZXInKTtcbiAgY29uc3QgYWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0cycpO1xuXG4gIC8vIHB1c2ggdGhlbSBhbGwgaW50byBhbiBhcnJheVxuICBjb25zdCBiZ0FycmF5ID0gW107XG4gIGJnQXJyYXkucHVzaChoaWdobGlnaHQsIGN1cnJlbnRXZWF0aGVyLCBzZWFyY2hBcmVhKTtcbiAgZGF5Q29udGFpbmVyLmZvckVhY2goKGUpID0+IGJnQXJyYXkucHVzaChlKSk7XG5cbiAgaWYgKGhhc0FsZXJ0cykge1xuICAgIGFsZXJ0cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGFsZXJ0cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWN0aW9uQmFja2dyb3VuZDtcbiAgfSBlbHNlIHtcbiAgICBhbGVydHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIC8vIGFwcGx5IHN0eWxlc1xuICBib2R5LnN0eWxlLmNvbG9yID0gZm9udENvbG9yO1xuICBzdmdzLmZvckVhY2goKGUpID0+IHtcbiAgICBlLnN0eWxlLmZpbGwgPSBzdmdDb2xvcjtcbiAgfSk7XG4gIGJnQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VjdGlvbkJhY2tncm91bmQ7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0VUljb2xvcnM7XG4iLCJpbXBvcnQgY2xlYXJJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnJztcbmltcG9ydCByYWluSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLXBvdXJpbmcuc3ZnJztcbmltcG9ydCBjbG91ZEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1jbG91ZHkuc3ZnJztcbmltcG9ydCBtb29uSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLW5pZ2h0LnN2Zyc7XG5pbXBvcnQgc25vd0ljb24gZnJvbSAnLi9pbWcvaWNvbnMvc25vd2ZsYWtlLnN2Zyc7XG5pbXBvcnQgdGh1bmRlckljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1saWdodG5pbmcuc3ZnJztcbmltcG9ydCBnZXROb3dUaW1lIGZyb20gJy4vZ2V0Tm93VGltZSc7XG5pbXBvcnQgZ2V0TmlnaHQgZnJvbSAnLi9nZXROaWdodCc7XG5cbmNvbnN0IHNldFdlYXRoZXJJY29uID0gKHdlYXRoZXIsIHRpbWUsIGZ1dHVyZSkgPT4ge1xuICAvLyBjb252ZXJ0IHRvIGhvdXJzIHRvIGNoZWNrIG5pZ2h0XG4gIGNvbnN0IHRpbWVOb3cgPSBnZXROb3dUaW1lKHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgLy8gbmlnaHQgY2hlY2tcbiAgZ2V0TmlnaHQodGltZU5vdyk7XG5cbiAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgY2FzZSAnQ2xlYXInOlxuICAgICAgLy8gZnV0dXJlIGlzIHVzZWQgdG8gc2hvdyBpY29ucyBvbiBmb3JlY2FzdFxuICAgICAgaWYgKCFnZXROaWdodCB8fCBmdXR1cmUpIHJldHVybiBjbGVhckljb247XG4gICAgICByZXR1cm4gbW9vbkljb247XG4gICAgY2FzZSAnUmFpbic6XG4gICAgICByZXR1cm4gcmFpbkljb247XG4gICAgY2FzZSAnVGh1bmRlcnN0b3JtJzpcbiAgICAgIHJldHVybiB0aHVuZGVySWNvbjtcbiAgICBjYXNlICdDbG91ZHMnOlxuICAgICAgcmV0dXJuIGNsb3VkSWNvbjtcbiAgICBjYXNlICdTbm93JzpcbiAgICAgIHJldHVybiBzbm93SWNvbjtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coJ0RpZmZlcmVudCB3ZWF0aGVyIGRldGVjdGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFdlYXRoZXJJY29uO1xuIiwiY29uc3QgdmVyaWZ5QWxlcnRzID0gKG9iaikgPT4ge1xuICBjb25zdCBoYXNBbGVydHMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCAnYWxlcnRzJyk7XG4gIHJldHVybiBoYXNBbGVydHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlBbGVydHM7XG4iLCJjb25zdCB2ZXJpZnlSYWluID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzUmFpbiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdyYWluJyk7XG4gIHJldHVybiBoYXNSYWluO1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVJhaW47XG4iLCJjb25zdCB2ZXJpZnlTbm93ID0gKG9iaikgPT4ge1xuICAvLyBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9uby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgY29uc3QgaGFzU25vdyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdzbm93Jyk7XG4gIHJldHVybiBoYXNTbm93O1xufTtcbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVNub3c7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0RG9tIGZyb20gJy4vZ2V0RG9tJztcbmltcG9ydCBnZXRFdmVudExpc3RlbmVycyBmcm9tICcuL2dldEV2ZW50TGlzdGVuZXJzJztcblxuLy8gZGVmYXVsdCBjYW1waW5hc1xuZ2V0RG9tKC0yMi45MDU1NiwgLTQ3LjA2MDgzLCAnQ2FtcGluYXMsIEJSJywgJ0JSJyk7XG5nZXRFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9