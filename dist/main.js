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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px;\n  }\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  text-align: center;\n}\n:root {\n  --sidePaddings: 1rem;\n  --middleGap: 3rem;\n  --fontSize: 1rem;\n  --fontSizeSemiHighlight: 1.5rem;\n  --fontSizeHighlight: 2rem;\n  --fontSizeSemiHighlightMobile: 1.1rem;\n  --fontSizeHighlightMobile: 1.5rem;\n  --containerRadius: 1rem;\n  --topSectionsWidth: clamp(230px, 14vw, 20rem);\n  --topSectionsHeight: clamp(420px, 32vh, 50rem);\n  --topSectionsWidthMobile: 34vw;\n  --topSectionsHeightMobile: 40vh;\n  --topSectionsHeightMobileMax: 65vh;\n\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nbutton {\n  background: inherit;\n}\nsvg {\n  fill: rgb(110, 35, 223);\n}\n\n/* Works on Firefox */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: inherit;\n}\n/* Works on Chrome, Edge, and Safari */\n*::-webkit-scrollbar {\n  width: 12px;\n}\n*::-webkit-scrollbar-corner {\n  background: inherit;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: inherit;\n  border-radius: 20px;\n  border: 3px solid inherit;\n}\n\n/* PC */\n@media screen and (min-width: 700px) {\n  svg {\n    width: 2rem;\n    height: 2rem;\n  }\n  .highlight {\n    justify-content: space-between;\n    gap: 0.1rem;\n  }\n  .highlight,\n  .currentWeather {\n    width: var(--topSectionsWidth);\n    height: var(--topSectionsHeight);\n    gap: 1rem;\n  }\n  .alerts {\n    max-width: calc(var(--topSectionsWidth) * 2);\n    max-height: 20vh;\n    overflow: scroll;\n  }\n  .current {\n    justify-content: center;\n    gap: 0.8rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlight);\n  }\n  .feelsLike {\n    font-size: 0.9rem;\n  }\n  .current {\n    font-size: 1.3rem;\n  }\n  .searchArea {\n    width: 54vw;\n  }\n  .dayContainer {\n    width: 20rem;\n    height: 10rem;\n    justify-content: space-between;\n  }\n}\n\n/* mobile */\n@media screen and (min-width: 300px) and (max-width: 800px) {\n  svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .highlight {\n    justify-content: space-evenly;\n  }\n  .currentWeather,\n  .highlight {\n    min-width: var(--topSectionsWidthMobile);\n    min-height: clamp(300px, var(--topSectionsHeightMobile), 100rem);\n    max-width: var(--topSectionsWidthMobile);\n    max-height: var(--topSectionsHeightMobileMax);\n  }\n  .alerts {\n    min-width: calc(var(--topSectionsWidthMobile) * 1.8);\n    max-height: 10vh;\n    overflow: scroll;\n  }\n  .current {\n    justify-content: center;\n    gap: 1rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlightMobile);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlightMobile);\n  }\n  .feelsLike {\n    font-size: 1rem;\n  }\n  .current {\n    font-size: 0.9rem;\n    font-weight: bold;\n  }\n  .dayContainer {\n    min-height: 20vh;\n    min-width: 50vw;\n    justify-content: center;\n  }\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alerts {\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n  align-self: center;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem;\n}\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  gap: 0.7rem;\n}\n.currentWeather {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.feelsLike {\n  font-style: italic;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-weight: 500;\n  font-style: medium;\n  padding: 0.5rem;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, clamp(250px, 450px, 50vw));\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 0.5rem;\n  gap: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n  justify-content: flex-end;\n}\n\n/*Current weather/search area */\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n  width: 95%;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.15rem;\n}\n\n/* wind adjusts */\n.windData,\n.rainData,\n.snowData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n.forecastItemContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;;IAEE,eAAe;EACjB;AACF;AACA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;EAC/B,yBAAyB;EACzB,qCAAqC;EACrC,iCAAiC;EACjC,uBAAuB;EACvB,6CAA6C;EAC7C,8CAA8C;EAC9C,8BAA8B;EAC9B,+BAA+B;EAC/B,kCAAkC;;EAElC;gEAC8D;AAChE;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;;AAEA,qBAAqB;AACrB;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA,sCAAsC;AACtC;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA,OAAO;AACP;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,8BAA8B;IAC9B,WAAW;EACb;EACA;;IAEE,8BAA8B;IAC9B,gCAAgC;IAChC,SAAS;EACX;EACA;IACE,4CAA4C;IAC5C,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,WAAW;EACb;EACA,UAAU;EACV;;IAEE,uCAAuC;EACzC;EACA;;IAEE,mCAAmC;EACrC;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,YAAY;IACZ,aAAa;IACb,8BAA8B;EAChC;AACF;;AAEA,WAAW;AACX;EACE;IACE,aAAa;IACb,cAAc;EAChB;EACA;IACE,6BAA6B;EAC/B;EACA;;IAEE,wCAAwC;IACxC,gEAAgE;IAChE,wCAAwC;IACxC,6CAA6C;EAC/C;EACA;IACE,oDAAoD;IACpD,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,uBAAuB;IACvB,SAAS;EACX;EACA,UAAU;EACV;;IAEE,6CAA6C;EAC/C;EACA;;IAEE,yCAAyC;EAC3C;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,uBAAuB;EACzB;AACF;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,eAAe;EACf,qCAAqC;EACrC,kBAAkB;AACpB;AACA,uBAAuB;AACvB;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,kEAAkE;EAClE,qCAAqC;EACrC,eAAe;EACf,SAAS;AACX;AACA,SAAS;AACT,0BAA0B;AAC1B;;;EAGE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA,oBAAoB;AACpB;;;;EAIE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;;;EAGE,aAAa;EACb,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B,kDAAkD;AAClD;;;;EAIE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,qCAAqC;AACvC;AACA;EACE,UAAU;EACV,eAAe;EACf,cAAc;EACd,qBAAqB;EACrB,UAAU;AACZ;AACA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;AACA,gCAAgC;AAChC;;EAEE,oBAAoB;AACtB;;AAEA,iBAAiB;AACjB;;;EAGE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,oBAAoB;AACtB;AACA,kCAAkC;AAClC;;EAEE,qCAAqC;EACrC,aAAa;AACf;;AAEA,qBAAqB;AACrB;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;AACb","sourcesContent":["@media screen and (max-width: 767px) {\n  input,\n  #search {\n    font-size: 16px;\n  }\n}\nhtml {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  text-align: center;\n}\n:root {\n  --sidePaddings: 1rem;\n  --middleGap: 3rem;\n  --fontSize: 1rem;\n  --fontSizeSemiHighlight: 1.5rem;\n  --fontSizeHighlight: 2rem;\n  --fontSizeSemiHighlightMobile: 1.1rem;\n  --fontSizeHighlightMobile: 1.5rem;\n  --containerRadius: 1rem;\n  --topSectionsWidth: clamp(230px, 14vw, 20rem);\n  --topSectionsHeight: clamp(420px, 32vh, 50rem);\n  --topSectionsWidthMobile: 34vw;\n  --topSectionsHeightMobile: 40vh;\n  --topSectionsHeightMobileMax: 65vh;\n\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nbutton {\n  background: inherit;\n}\nsvg {\n  fill: rgb(110, 35, 223);\n}\n\n/* Works on Firefox */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: inherit;\n}\n/* Works on Chrome, Edge, and Safari */\n*::-webkit-scrollbar {\n  width: 12px;\n}\n*::-webkit-scrollbar-corner {\n  background: inherit;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: inherit;\n  border-radius: 20px;\n  border: 3px solid inherit;\n}\n\n/* PC */\n@media screen and (min-width: 700px) {\n  svg {\n    width: 2rem;\n    height: 2rem;\n  }\n  .highlight {\n    justify-content: space-between;\n    gap: 0.1rem;\n  }\n  .highlight,\n  .currentWeather {\n    width: var(--topSectionsWidth);\n    height: var(--topSectionsHeight);\n    gap: 1rem;\n  }\n  .alerts {\n    max-width: calc(var(--topSectionsWidth) * 2);\n    max-height: 20vh;\n    overflow: scroll;\n  }\n  .current {\n    justify-content: center;\n    gap: 0.8rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlight);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlight);\n  }\n  .feelsLike {\n    font-size: 0.9rem;\n  }\n  .current {\n    font-size: 1.3rem;\n  }\n  .searchArea {\n    width: 54vw;\n  }\n  .dayContainer {\n    width: 20rem;\n    height: 10rem;\n    justify-content: space-between;\n  }\n}\n\n/* mobile */\n@media screen and (min-width: 300px) and (max-width: 800px) {\n  svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .highlight {\n    justify-content: space-evenly;\n  }\n  .currentWeather,\n  .highlight {\n    min-width: var(--topSectionsWidthMobile);\n    min-height: clamp(300px, var(--topSectionsHeightMobile), 100rem);\n    max-width: var(--topSectionsWidthMobile);\n    max-height: var(--topSectionsHeightMobileMax);\n  }\n  .alerts {\n    min-width: calc(var(--topSectionsWidthMobile) * 1.8);\n    max-height: 10vh;\n    overflow: scroll;\n  }\n  .current {\n    justify-content: center;\n    gap: 1rem;\n  }\n  /* fonts */\n  .weatherCont,\n  .tempContainer {\n    font-size: var(--fontSizeSemiHighlightMobile);\n  }\n  .name,\n  .date {\n    font-size: var(--fontSizeHighlightMobile);\n  }\n  .feelsLike {\n    font-size: 1rem;\n  }\n  .current {\n    font-size: 0.9rem;\n    font-weight: bold;\n  }\n  .dayContainer {\n    min-height: 20vh;\n    min-width: 50vw;\n    justify-content: center;\n  }\n}\n.dayContainer {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.alerts {\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n  align-self: center;\n}\n/*Spaces weather infos*/\n.current {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem;\n}\n.highlight {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  gap: 0.7rem;\n}\n.currentWeather {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.weatherCont,\n.tempContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.feelsLike {\n  font-style: italic;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  font-weight: 500;\n  font-style: medium;\n  padding: 0.5rem;\n}\n.daily {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, clamp(250px, 450px, 50vw));\n  grid-template-rows: repeat(auto, 1fr);\n  padding: 0.5rem;\n  gap: 1rem;\n}\n/*  SVG */\n/* targets forecast SVGs */\n.dayDate ~ div > svg > svg,\n.maxTempSvg > svg,\n.minTempSvg > svg {\n  min-width: 1.7rem;\n  max-width: 1.7rem;\n  height: 100%;\n}\n\n/* Right side divs */\n.currentWeather > *,\n.weatherSummary > *,\n.dayContainer > *,\n.searchContainer > * {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.rain1hCont,\n.snow1hCont,\n.currentSvg {\n  display: none;\n  justify-content: flex-end;\n}\n\n/*Current weather/search area */\n/* centers itself despite of other flex settings */\n.feelsLike,\n.date,\n.name,\n.time {\n  align-self: center;\n}\n.searchContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 8vh;\n}\n.searchArea {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: var(--containerRadius);\n}\n#search {\n  all: unset;\n  padding: 0.4rem;\n  height: 1.3rem;\n  border-radius: 0.5rem;\n  width: 95%;\n}\n/*daily forecast */\n.dayDate {\n  align-self: center;\n}\n/* trick to appear centralized */\n.minTempSvg,\n.maxTempSvg {\n  margin-left: 0.15rem;\n}\n\n/* wind adjusts */\n.windData,\n.rainData,\n.snowData {\n  display: flex;\n  flex-direction: column;\n}\n.windSpeed {\n  align-self: flex-end;\n}\n/* containers opacity background */\nmain > section > section,\n.dayContainer {\n  border-radius: var(--containerRadius);\n  padding: 1rem;\n}\n\n/* high specificity */\n.dayContainer > * {\n  align-items: flex-start;\n}\n.forecastItemContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 0.5rem;\n}\n"],"sourceRoot":""}]);
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
      const sunriseTime = `${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunrise).slice(0, 5)}`;

      const sunsetTime = `${(0,_getHour__WEBPACK_IMPORTED_MODULE_3__["default"])(recData.current.sunset).slice(0, 5)}`;
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
      temp.textContent = `${tempRound} ??C`;
      feelsLike.textContent = `Feels like ${feelRound} ??C`;
      humidity.textContent = `${recData.current.humidity}%`;
      uv.textContent = `UV ${(0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(recData.current.uvi, 0)}`;
      sunrise.textContent = `${sunriseTime}`;
      sunset.textContent = `${sunsetTime}`;
      // console.log(sunriseTime, '+', sunsetTime);
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
        dayMin.textContent = `${dayMinValue} ??C`;
        const minTempSvg = document.createElement('svg');
        minTempSvg.setAttribute('class', 'minTempSvg');

        const tempContainer2 = document.createElement('div');
        tempContainer2.setAttribute('class', 'forecastItemContainer');
        const dayMax = document.createElement('div');
        const dayMaxValue = (0,_getFixedNumber__WEBPACK_IMPORTED_MODULE_9__["default"])(day[1], 0);
        dayMax.textContent = `${dayMaxValue} ??C`;
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
  // console.log(date.toTimeString());
  return date.toTimeString();
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
/* harmony import */ var _img_pexels_eberhard_grossgasteiger_1743392_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/pexels-eberhard-grossgasteiger-1743392.jpg */ "./src/img/pexels-eberhard-grossgasteiger-1743392.jpg");
/* harmony import */ var _getNowTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getNowTime */ "./src/getNowTime.js");
/* harmony import */ var _getNight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getNight */ "./src/getNight.js");
/* harmony import */ var _setUIcolors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setUIcolors */ "./src/setUIcolors.js");

















const setBackground = (body, timeNow, currentWeather, hasAlerts) => {
  console.log((0,_getNowTime__WEBPACK_IMPORTED_MODULE_13__["default"])(timeNow).getHours(), currentWeather);

  // checks if congerted timezone to hours is night
  const night = (0,_getNight__WEBPACK_IMPORTED_MODULE_14__["default"])((0,_getNowTime__WEBPACK_IMPORTED_MODULE_13__["default"])(timeNow).getHours());

  // same for all possibilities
  body.style.backgroundSize = 'cover';

  // body.style.backgroundImage
  switch (currentWeather) {
    case 'Clear':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_drift_shutterbug_2085998_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#fdfbfb', '#e54624', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_912364_1k_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      }
      break;
    case 'Rain':
    case 'Drizzle':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_rahul_pandit_2816625_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#fdfbfb', '#BEF264', '#040404ab', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_brazil_topno_9604806_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
      }
      break;
    case 'Thunderstorm':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_anton_kudryashov_9861432_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#fdfbfb', '#BEF264', '#040404ab', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_tsvetoslav_hristov_2499846_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
      }
      break;
    case 'Clouds':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_brett_sayles_3910141_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_158163_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Fog':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_531360_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#FDE047', '#10B981', '#2c2b2b3b', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_aleksandra_blinova_8659252_jpg__WEBPACK_IMPORTED_MODULE_10__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f7f4f4', '#67E8F9', '#08080880', hasAlerts);
      }
      break;
    case 'Snow':
      if (night) {
        body.style.backgroundImage = `url(${_img_pexels_martin_mariani_3801463_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#FDE68A', '#672dcb', '#ffffff25', hasAlerts);
      } else {
        body.style.backgroundImage = `url(${_img_pexels_pixabay_259659_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      }
      break;
    case 'Mist':
      body.style.backgroundImage = `url(${_img_pexels_eberhard_grossgasteiger_1743392_jpg__WEBPACK_IMPORTED_MODULE_12__})`;
      (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f7f4f4', '#FDE047', '#0808084a', hasAlerts);
      break;
    default:
      body.style.backgroundImage = `url(${_img_pexels_brazil_topno_9604806_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
      (0,_setUIcolors__WEBPACK_IMPORTED_MODULE_15__["default"])('#f8f8f8', '#67e8f9', '#04040456', hasAlerts);
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
    case 'Drizzle':
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
module.exports = __webpack_require__.p + "ff2f6bf1cc54f4ebf30f.jpg";

/***/ }),

/***/ "./src/img/pexels-brazil-topno-9604806.jpg":
/*!*************************************************!*\
  !*** ./src/img/pexels-brazil-topno-9604806.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be078092d7581dec5c2c.jpg";

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
module.exports = __webpack_require__.p + "1eb09e4940c86c78f51b.jpg";

/***/ }),

/***/ "./src/img/pexels-eberhard-grossgasteiger-1743392.jpg":
/*!************************************************************!*\
  !*** ./src/img/pexels-eberhard-grossgasteiger-1743392.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "995eb0d70f556a44bf4a.jpg";

/***/ }),

/***/ "./src/img/pexels-martin-mariani-3801463.jpg":
/*!***************************************************!*\
  !*** ./src/img/pexels-martin-mariani-3801463.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84cce36b0b0cae1cc5e4.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-158163_clouds.jpg":
/*!**************************************************!*\
  !*** ./src/img/pexels-pixabay-158163_clouds.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b1bb5a8af0692fc5031b.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-259659.jpg":
/*!*******************************************!*\
  !*** ./src/img/pexels-pixabay-259659.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d78073850497a2192cc1.jpg";

/***/ }),

/***/ "./src/img/pexels-pixabay-531360.jpg":
/*!*******************************************!*\
  !*** ./src/img/pexels-pixabay-531360.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85e7805b6e0d58fa341f.jpg";

/***/ }),

/***/ "./src/img/pexels-rahul-pandit-2816625_rainy.jpg":
/*!*******************************************************!*\
  !*** ./src/img/pexels-rahul-pandit-2816625_rainy.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fadf123202182a280da7.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEs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dGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9iaW5vY3VsYXJzLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9jbG91ZC1wZXJjZW50LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy9nYXVnZS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvbWFnbmlmeS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvc25vd2ZsYWtlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLWRvd24uc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3RoZXJtb21ldGVyLWNoZXZyb24tdXAuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3RoZXJtb21ldGVyLWhpZ2guc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dhdGVyLW91dGxpbmUuc3ZnIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW1nL2ljb25zL3dlYXRoZXItY2xvdWR5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLWxpZ2h0bmluZy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1uaWdodC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1wb3VyaW5nLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXJhaW55LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXNub3d5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltZy9pY29ucy93ZWF0aGVyLXN1bm55LW9mZi5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2VhdGhlci13aW5keS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWcvaWNvbnMvd2hpdGUtYmFsYW5jZS1zdW5ueS5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jYXBpdGFsaXplRmlyc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb252ZXJ0VG9LbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldERhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXREb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEZpeGVkTnVtYmVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0R2VvQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0SG91ci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldE5lYXREYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0TmlnaHQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXROb3dUaW1lLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9nZXRXZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0V2luZERpci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3Byb2Nlc3NEYWlseURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zZXRCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2V0VUljb2xvcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zZXRXZWF0aGVySWNvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZlcmlmeUFsZXJ0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3ZlcmlmeVJhaW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy92ZXJpZnlTbm93LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgaW5wdXQsXFxuICAjc2VhcmNoIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbn1cXG5odG1sIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuOnJvb3Qge1xcbiAgLS1zaWRlUGFkZGluZ3M6IDFyZW07XFxuICAtLW1pZGRsZUdhcDogM3JlbTtcXG4gIC0tZm9udFNpemU6IDFyZW07XFxuICAtLWZvbnRTaXplU2VtaUhpZ2hsaWdodDogMS41cmVtO1xcbiAgLS1mb250U2l6ZUhpZ2hsaWdodDogMnJlbTtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0TW9iaWxlOiAxLjFyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0TW9iaWxlOiAxLjVyZW07XFxuICAtLWNvbnRhaW5lclJhZGl1czogMXJlbTtcXG4gIC0tdG9wU2VjdGlvbnNXaWR0aDogY2xhbXAoMjMwcHgsIDE0dncsIDIwcmVtKTtcXG4gIC0tdG9wU2VjdGlvbnNIZWlnaHQ6IGNsYW1wKDQyMHB4LCAzMnZoLCA1MHJlbSk7XFxuICAtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGU6IDM0dnc7XFxuICAtLXRvcFNlY3Rpb25zSGVpZ2h0TW9iaWxlOiA0MHZoO1xcbiAgLS10b3BTZWN0aW9uc0hlaWdodE1vYmlsZU1heDogNjV2aDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5zdmcge1xcbiAgZmlsbDogcmdiKDExMCwgMzUsIDIyMyk7XFxufVxcblxcbi8qIFdvcmtzIG9uIEZpcmVmb3ggKi9cXG4qIHtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogaW5oZXJpdDtcXG59XFxuLyogV29ya3Mgb24gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEycHg7XFxufVxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGluaGVyaXQ7XFxufVxcblxcbi8qIFBDICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICB9XFxuICAuaGlnaGxpZ2h0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDAuMXJlbTtcXG4gIH1cXG4gIC5oaWdobGlnaHQsXFxuICAuY3VycmVudFdlYXRoZXIge1xcbiAgICB3aWR0aDogdmFyKC0tdG9wU2VjdGlvbnNXaWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdG9wU2VjdGlvbnNIZWlnaHQpO1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxuICAuYWxlcnRzIHtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLXRvcFNlY3Rpb25zV2lkdGgpICogMik7XFxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICB9XFxuICAuY3VycmVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gIH1cXG4gIC8qIGZvbnRzICovXFxuICAud2VhdGhlckNvbnQsXFxuICAudGVtcENvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0KTtcXG4gIH1cXG4gIC5uYW1lLFxcbiAgLmRhdGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0KTtcXG4gIH1cXG4gIC5mZWVsc0xpa2Uge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxuICAuc2VhcmNoQXJlYSB7XFxuICAgIHdpZHRoOiA1NHZ3O1xcbiAgfVxcbiAgLmRheUNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbn1cXG5cXG4vKiBtb2JpbGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBzdmcge1xcbiAgICB3aWR0aDogMS4xcmVtO1xcbiAgICBoZWlnaHQ6IDEuMXJlbTtcXG4gIH1cXG4gIC5oaWdobGlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIC5jdXJyZW50V2VhdGhlcixcXG4gIC5oaWdobGlnaHQge1xcbiAgICBtaW4td2lkdGg6IHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpO1xcbiAgICBtaW4taGVpZ2h0OiBjbGFtcCgzMDBweCwgdmFyKC0tdG9wU2VjdGlvbnNIZWlnaHRNb2JpbGUpLCAxMDByZW0pO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS10b3BTZWN0aW9uc0hlaWdodE1vYmlsZU1heCk7XFxuICB9XFxuICAuYWxlcnRzIHtcXG4gICAgbWluLXdpZHRoOiBjYWxjKHZhcigtLXRvcFNlY3Rpb25zV2lkdGhNb2JpbGUpICogMS44KTtcXG4gICAgbWF4LWhlaWdodDogMTB2aDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG4gIC8qIGZvbnRzICovXFxuICAud2VhdGhlckNvbnQsXFxuICAudGVtcENvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0TW9iaWxlKTtcXG4gIH1cXG4gIC5uYW1lLFxcbiAgLmRhdGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRTaXplSGlnaGxpZ2h0TW9iaWxlKTtcXG4gIH1cXG4gIC5mZWVsc0xpa2Uge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuY3VycmVudCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC5kYXlDb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xcbiAgICBtaW4td2lkdGg6IDUwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmFsZXJ0cyB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKlNwYWNlcyB3ZWF0aGVyIGluZm9zKi9cXG4uY3VycmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuLmhpZ2hsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuN3JlbTtcXG59XFxuLmN1cnJlbnRXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ud2VhdGhlckNvbnQsXFxuLnRlbXBDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mZWVsc0xpa2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbWVkaXVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uZGFpbHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgyNTBweCwgNDUwcHgsIDUwdncpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDFmcik7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbi8qICBTVkcgKi9cXG4vKiB0YXJnZXRzIGZvcmVjYXN0IFNWR3MgKi9cXG4uZGF5RGF0ZSB+IGRpdiA+IHN2ZyA+IHN2ZyxcXG4ubWF4VGVtcFN2ZyA+IHN2ZyxcXG4ubWluVGVtcFN2ZyA+IHN2ZyB7XFxuICBtaW4td2lkdGg6IDEuN3JlbTtcXG4gIG1heC13aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBSaWdodCBzaWRlIGRpdnMgKi9cXG4uY3VycmVudFdlYXRoZXIgPiAqLFxcbi53ZWF0aGVyU3VtbWFyeSA+ICosXFxuLmRheUNvbnRhaW5lciA+ICosXFxuLnNlYXJjaENvbnRhaW5lciA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnJhaW4xaENvbnQsXFxuLnNub3cxaENvbnQsXFxuLmN1cnJlbnRTdmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qQ3VycmVudCB3ZWF0aGVyL3NlYXJjaCBhcmVhICovXFxuLyogY2VudGVycyBpdHNlbGYgZGVzcGl0ZSBvZiBvdGhlciBmbGV4IHNldHRpbmdzICovXFxuLmZlZWxzTGlrZSxcXG4uZGF0ZSxcXG4ubmFtZSxcXG4udGltZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zZWFyY2hDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOHZoO1xcbn1cXG4uc2VhcmNoQXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG59XFxuI3NlYXJjaCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogOTUlO1xcbn1cXG4vKmRhaWx5IGZvcmVjYXN0ICovXFxuLmRheURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4vKiB0cmljayB0byBhcHBlYXIgY2VudHJhbGl6ZWQgKi9cXG4ubWluVGVtcFN2ZyxcXG4ubWF4VGVtcFN2ZyB7XFxuICBtYXJnaW4tbGVmdDogMC4xNXJlbTtcXG59XFxuXFxuLyogd2luZCBhZGp1c3RzICovXFxuLndpbmREYXRhLFxcbi5yYWluRGF0YSxcXG4uc25vd0RhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi53aW5kU3BlZWQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi8qIGNvbnRhaW5lcnMgb3BhY2l0eSBiYWNrZ3JvdW5kICovXFxubWFpbiA+IHNlY3Rpb24gPiBzZWN0aW9uLFxcbi5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGFpbmVyUmFkaXVzKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi8qIGhpZ2ggc3BlY2lmaWNpdHkgKi9cXG4uZGF5Q29udGFpbmVyID4gKiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmZvcmVjYXN0SXRlbUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLDZDQUE2QztFQUM3Qyw4Q0FBOEM7RUFDOUMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQ0FBa0M7O0VBRWxDO2dFQUM4RDtBQUNoRTtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjtBQUNBLHNDQUFzQztBQUN0QztFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUEsT0FBTztBQUNQO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsV0FBVztFQUNiO0VBQ0E7O0lBRUUsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxTQUFTO0VBQ1g7RUFDQTtJQUNFLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiO0VBQ0EsVUFBVTtFQUNWOztJQUVFLHVDQUF1QztFQUN6QztFQUNBOztJQUVFLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQSxXQUFXO0FBQ1g7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSx3Q0FBd0M7SUFDeEMsZ0VBQWdFO0lBQ2hFLHdDQUF3QztJQUN4Qyw2Q0FBNkM7RUFDL0M7RUFDQTtJQUNFLG9EQUFvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsU0FBUztFQUNYO0VBQ0EsVUFBVTtFQUNWOztJQUVFLDZDQUE2QztFQUMvQztFQUNBOztJQUVFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7QUFDQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrRUFBa0U7RUFDbEUscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCO0FBQzFCOzs7RUFHRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7QUFDcEI7Ozs7RUFJRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQSwrQkFBK0I7QUFDL0Isa0RBQWtEO0FBQ2xEOzs7O0VBSUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxnQ0FBZ0M7QUFDaEM7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBLGlCQUFpQjtBQUNqQjs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0Esa0NBQWtDO0FBQ2xDOztFQUVFLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICBpbnB1dCxcXG4gICNzZWFyY2gge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcbmh0bWwge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46cm9vdCB7XFxuICAtLXNpZGVQYWRkaW5nczogMXJlbTtcXG4gIC0tbWlkZGxlR2FwOiAzcmVtO1xcbiAgLS1mb250U2l6ZTogMXJlbTtcXG4gIC0tZm9udFNpemVTZW1pSGlnaGxpZ2h0OiAxLjVyZW07XFxuICAtLWZvbnRTaXplSGlnaGxpZ2h0OiAycmVtO1xcbiAgLS1mb250U2l6ZVNlbWlIaWdobGlnaHRNb2JpbGU6IDEuMXJlbTtcXG4gIC0tZm9udFNpemVIaWdobGlnaHRNb2JpbGU6IDEuNXJlbTtcXG4gIC0tY29udGFpbmVyUmFkaXVzOiAxcmVtO1xcbiAgLS10b3BTZWN0aW9uc1dpZHRoOiBjbGFtcCgyMzBweCwgMTR2dywgMjByZW0pO1xcbiAgLS10b3BTZWN0aW9uc0hlaWdodDogY2xhbXAoNDIwcHgsIDMydmgsIDUwcmVtKTtcXG4gIC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZTogMzR2dztcXG4gIC0tdG9wU2VjdGlvbnNIZWlnaHRNb2JpbGU6IDQwdmg7XFxuICAtLXRvcFNlY3Rpb25zSGVpZ2h0TW9iaWxlTWF4OiA2NXZoO1xcblxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcbnN2ZyB7XFxuICBmaWxsOiByZ2IoMTEwLCAzNSwgMjIzKTtcXG59XFxuXFxuLyogV29ya3Mgb24gRmlyZWZveCAqL1xcbioge1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4vKiBXb3JrcyBvbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgKi9cXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG59XFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgaW5oZXJpdDtcXG59XFxuXFxuLyogUEMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgc3ZnIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gIH1cXG4gIC5oaWdobGlnaHQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMC4xcmVtO1xcbiAgfVxcbiAgLmhpZ2hsaWdodCxcXG4gIC5jdXJyZW50V2VhdGhlciB7XFxuICAgIHdpZHRoOiB2YXIoLS10b3BTZWN0aW9uc1dpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10b3BTZWN0aW9uc0hlaWdodCk7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG4gIC5hbGVydHMge1xcbiAgICBtYXgtd2lkdGg6IGNhbGModmFyKC0tdG9wU2VjdGlvbnNXaWR0aCkgKiAyKTtcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgfVxcbiAgLyogZm9udHMgKi9cXG4gIC53ZWF0aGVyQ29udCxcXG4gIC50ZW1wQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHQpO1xcbiAgfVxcbiAgLm5hbWUsXFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdobGlnaHQpO1xcbiAgfVxcbiAgLmZlZWxzTGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbiAgLmN1cnJlbnQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG4gIC5zZWFyY2hBcmVhIHtcXG4gICAgd2lkdGg6IDU0dnc7XFxuICB9XFxuICAuZGF5Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxufVxcblxcbi8qIG1vYmlsZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiAxLjFyZW07XFxuICAgIGhlaWdodDogMS4xcmVtO1xcbiAgfVxcbiAgLmhpZ2hsaWdodCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgLmN1cnJlbnRXZWF0aGVyLFxcbiAgLmhpZ2hsaWdodCB7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZSk7XFxuICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDMwMHB4LCB2YXIoLS10b3BTZWN0aW9uc0hlaWdodE1vYmlsZSksIDEwMHJlbSk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZSk7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXRvcFNlY3Rpb25zSGVpZ2h0TW9iaWxlTWF4KTtcXG4gIH1cXG4gIC5hbGVydHMge1xcbiAgICBtaW4td2lkdGg6IGNhbGModmFyKC0tdG9wU2VjdGlvbnNXaWR0aE1vYmlsZSkgKiAxLjgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxMHZoO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbiAgLmN1cnJlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcbiAgLyogZm9udHMgKi9cXG4gIC53ZWF0aGVyQ29udCxcXG4gIC50ZW1wQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250U2l6ZVNlbWlIaWdobGlnaHRNb2JpbGUpO1xcbiAgfVxcbiAgLm5hbWUsXFxuICAuZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udFNpemVIaWdobGlnaHRNb2JpbGUpO1xcbiAgfVxcbiAgLmZlZWxzTGlrZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5jdXJyZW50IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmRheUNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwdmg7XFxuICAgIG1pbi13aWR0aDogNTB2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uYWxlcnRzIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbnRhaW5lclJhZGl1cyk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi8qU3BhY2VzIHdlYXRoZXIgaW5mb3MqL1xcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG4uaGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC43cmVtO1xcbn1cXG4uY3VycmVudFdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi53ZWF0aGVyQ29udCxcXG4udGVtcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBtZWRpdW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5kYWlseSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNsYW1wKDI1MHB4LCA0NTBweCwgNTB2dykpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0bywgMWZyKTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuLyogIFNWRyAqL1xcbi8qIHRhcmdldHMgZm9yZWNhc3QgU1ZHcyAqL1xcbi5kYXlEYXRlIH4gZGl2ID4gc3ZnID4gc3ZnLFxcbi5tYXhUZW1wU3ZnID4gc3ZnLFxcbi5taW5UZW1wU3ZnID4gc3ZnIHtcXG4gIG1pbi13aWR0aDogMS43cmVtO1xcbiAgbWF4LXdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFJpZ2h0IHNpZGUgZGl2cyAqL1xcbi5jdXJyZW50V2VhdGhlciA+ICosXFxuLndlYXRoZXJTdW1tYXJ5ID4gKixcXG4uZGF5Q29udGFpbmVyID4gKixcXG4uc2VhcmNoQ29udGFpbmVyID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ucmFpbjFoQ29udCxcXG4uc25vdzFoQ29udCxcXG4uY3VycmVudFN2ZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLypDdXJyZW50IHdlYXRoZXIvc2VhcmNoIGFyZWEgKi9cXG4vKiBjZW50ZXJzIGl0c2VsZiBkZXNwaXRlIG9mIG90aGVyIGZsZXggc2V0dGluZ3MgKi9cXG4uZmVlbHNMaWtlLFxcbi5kYXRlLFxcbi5uYW1lLFxcbi50aW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4dmg7XFxufVxcbi5zZWFyY2hBcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbn1cXG4jc2VhcmNoIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHdpZHRoOiA5NSU7XFxufVxcbi8qZGFpbHkgZm9yZWNhc3QgKi9cXG4uZGF5RGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi8qIHRyaWNrIHRvIGFwcGVhciBjZW50cmFsaXplZCAqL1xcbi5taW5UZW1wU3ZnLFxcbi5tYXhUZW1wU3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjE1cmVtO1xcbn1cXG5cXG4vKiB3aW5kIGFkanVzdHMgKi9cXG4ud2luZERhdGEsXFxuLnJhaW5EYXRhLFxcbi5zbm93RGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLndpbmRTcGVlZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLyogY29udGFpbmVycyBvcGFjaXR5IGJhY2tncm91bmQgKi9cXG5tYWluID4gc2VjdGlvbiA+IHNlY3Rpb24sXFxuLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb250YWluZXJSYWRpdXMpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLyogaGlnaCBzcGVjaWZpY2l0eSAqL1xcbi5kYXlDb250YWluZXIgPiAqIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZm9yZWNhc3RJdGVtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTExLDZIMTNWMTNIMTFWNk05LDIwQTEsMSAwIDAsMSA4LDIxSDVBMSwxIDAgMCwxIDQsMjBWMTVMNiw2SDEwVjEzQTEsMSAwIDAsMSA5LDE0VjIwTTEwLDVIN1YzSDEwVjVNMTUsMjBWMTRBMSwxIDAgMCwxIDE0LDEzVjZIMThMMjAsMTVWMjBBMSwxIDAgMCwxIDE5LDIxSDE2QTEsMSAwIDAsMSAxNSwyME0xNCw1VjNIMTdWNUgxNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTkuMzUgMTAuMDNDMTguNjcgNi41OSAxNS42NCA0IDEyIDRDOS4xMSA0IDYuNiA1LjY0IDUuMzUgOC4wM0MyLjM0IDguMzYgMCAxMC45IDAgMTRDMCAxNy4zMSAyLjY5IDIwIDYgMjBIMTlDMjEuNzYgMjAgMjQgMTcuNzYgMjQgMTVDMjQgMTIuMzYgMjEuOTUgMTAuMjIgMTkuMzUgMTAuMDNNOS40NSA5LjAzQzEwLjIzIDkuMDMgMTAuODcgOS42NyAxMC44NyAxMC40NVMxMC4yMyAxMS44NyA5LjQ1IDExLjg3IDguMDMgMTEuMjMgOC4wMyAxMC40NSA4LjY3IDkuMDMgOS40NSA5LjAzTTE0LjU1IDE2Ljk3QzEzLjc3IDE2Ljk3IDEzLjEzIDE2LjMzIDEzLjEzIDE1LjU1UzEzLjc3IDE0LjEzIDE0LjU1IDE0LjEzIDE1Ljk3IDE0Ljc3IDE1Ljk3IDE1LjU1IDE1LjMzIDE2Ljk3IDE0LjU1IDE2Ljk3TTkuMiAxN0w4IDE1LjhMMTQuOCA5TDE2IDEwLjJMOS4yIDE3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMiw0QTgsOCAwIDAsMSAyMCwxMkMyMCwxNC40IDE5LDE2LjUgMTcuMywxOEMxNS45LDE2LjcgMTQsMTYgMTIsMTZDMTAsMTYgOC4yLDE2LjcgNi43LDE4QzUsMTYuNSA0LDE0LjQgNCwxMkE4LDggMCAwLDEgMTIsNE0xNCw1Ljg5QzEzLjYyLDUuOSAxMy4yNiw2LjE1IDEzLjEsNi41NEwxMS44MSw5Ljc3TDExLjcxLDEwQzExLDEwLjEzIDEwLjQxLDEwLjYgMTAuMTQsMTEuMjZDOS43MywxMi4yOSAxMC4yMywxMy40NSAxMS4yNiwxMy44NkMxMi4yOSwxNC4yNyAxMy40NSwxMy43NyAxMy44NiwxMi43NEMxNC4xMiwxMi4wOCAxNCwxMS4zMiAxMy41NywxMC43NkwxMy42NywxMC41TDE0Ljk2LDcuMjlMMTQuOTcsNy4yNkMxNS4xNyw2Ljc1IDE0LjkyLDYuMTcgMTQuNDEsNS45NkMxNC4yOCw1LjkxIDE0LjE1LDUuODkgMTQsNS44OU0xMCw2QTEsMSAwIDAsMCA5LDdBMSwxIDAgMCwwIDEwLDhBMSwxIDAgMCwwIDExLDdBMSwxIDAgMCwwIDEwLDZNNyw5QTEsMSAwIDAsMCA2LDEwQTEsMSAwIDAsMCA3LDExQTEsMSAwIDAsMCA4LDEwQTEsMSAwIDAsMCA3LDlNMTcsOUExLDEgMCAwLDAgMTYsMTBBMSwxIDAgMCwwIDE3LDExQTEsMSAwIDAsMCAxOCwxMEExLDEgMCAwLDAgMTcsOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNOS41LDNBNi41LDYuNSAwIDAsMSAxNiw5LjVDMTYsMTEuMTEgMTUuNDEsMTIuNTkgMTQuNDQsMTMuNzNMMTQuNzEsMTRIMTUuNUwyMC41LDE5TDE5LDIwLjVMMTQsMTUuNVYxNC43MUwxMy43MywxNC40NEMxMi41OSwxNS40MSAxMS4xMSwxNiA5LjUsMTZBNi41LDYuNSAwIDAsMSAzLDkuNUE2LjUsNi41IDAgMCwxIDkuNSwzTTkuNSw1QzcsNSA1LDcgNSw5LjVDNSwxMiA3LDE0IDkuNSwxNEMxMiwxNCAxNCwxMiAxNCw5LjVDMTQsNyAxMiw1IDkuNSw1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0yMC43OSwxMy45NUwxOC40NiwxNC41N0wxNi40NiwxMy40NFYxMC41NkwxOC40Niw5LjQzTDIwLjc5LDEwLjA1TDIxLjMxLDguMTJMMTkuNTQsNy42NUwyMCw1Ljg4TDE4LjA3LDUuMzZMMTcuNDUsNy42OUwxNS40NSw4LjgyTDEzLDcuMzhWNS4xMkwxNC43MSwzLjQxTDEzLjI5LDJMMTIsMy4yOUwxMC43MSwyTDkuMjksMy40MUwxMSw1LjEyVjcuMzhMOC41LDguODJMNi41LDcuNjlMNS45Miw1LjM2TDQsNS44OEw0LjQ3LDcuNjVMMi43LDguMTJMMy4yMiwxMC4wNUw1LjU1LDkuNDNMNy41NSwxMC41NlYxMy40NUw1LjU1LDE0LjU4TDMuMjIsMTMuOTZMMi43LDE1Ljg5TDQuNDcsMTYuMzZMNCwxOC4xMkw1LjkzLDE4LjY0TDYuNTUsMTYuMzFMOC41NSwxNS4xOEwxMSwxNi42MlYxOC44OEw5LjI5LDIwLjU5TDEwLjcxLDIyTDEyLDIwLjcxTDEzLjI5LDIyTDE0LjcsMjAuNTlMMTMsMTguODhWMTYuNjJMMTUuNSwxNS4xN0wxNy41LDE2LjNMMTguMTIsMTguNjNMMjAsMTguMTJMMTkuNTMsMTYuMzVMMjEuMywxNS44OEwyMC43OSwxMy45NU05LjUsMTAuNTZMMTIsOS4xMUwxNC41LDEwLjU2VjEzLjQ0TDEyLDE0Ljg5TDkuNSwxMy40NFYxMC41NlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTcuNDEgMTIuMTdMMTQuMjQgOUwxMi44MyAxMC40MUwxNy40MSAxNUwyMiAxMC40MUwyMC41OCA5TTEwIDEzVjVDMTAgMy4zNCA4LjY2IDIgNyAyUzQgMy4zNCA0IDVWMTNDMS43OSAxNC42NiAxLjM0IDE3Ljc5IDMgMjBTNy43OSAyMi42NiAxMCAyMSAxMi42NiAxNi4yMSAxMSAxNEMxMC43MiAxMy42MiAxMC4zOCAxMy4yOCAxMCAxM003IDRDNy41NSA0IDggNC40NSA4IDVWOEg2VjVDNiA0LjQ1IDYuNDUgNCA3IDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE3LjQxIDExLjgzTDIwLjU4IDE1TDIyIDEzLjU5TDE3LjQxIDlMMTIuODIgMTMuNTlMMTQuMjQgMTVMMTcuNDEgMTEuODNNMTAgMTNWNUMxMCAzLjM0IDguNjYgMiA3IDJTNCAzLjM0IDQgNVYxM0MxLjc5IDE0LjY2IDEuMzQgMTcuNzkgMyAyMFM3Ljc5IDIyLjY2IDEwIDIxIDEyLjY2IDE2LjIxIDExIDE0QzEwLjcyIDEzLjYyIDEwLjM4IDEzLjI4IDEwIDEzTTcgNEM3LjU1IDQgOCA0LjQ1IDggNVY4SDZWNUM2IDQuNDUgNi40NSA0IDcgNFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTUgMTNWNUEzIDMgMCAwIDAgOSA1VjEzQTUgNSAwIDEgMCAxNSAxM00xMiA0QTEgMSAwIDAgMSAxMyA1SDExQTEgMSAwIDAgMSAxMiA0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiwzLjc3TDExLjI1LDQuNjFDMTEuMjUsNC42MSA5Ljk3LDYuMDYgOC42OCw3Ljk0QzcuMzksOS44MiA2LDEyLjA3IDYsMTQuMjNBNiw2IDAgMCwwIDEyLDIwLjIzQTYsNiAwIDAsMCAxOCwxNC4yM0MxOCwxMi4wNyAxNi42MSw5LjgyIDE1LjMyLDcuOTRDMTQuMDMsNi4wNiAxMi43NSw0LjYxIDEyLjc1LDQuNjFMMTIsMy43N00xMiw2LjlDMTIuNDQsNy40MiAxMi44NCw3Ljg1IDEzLjY4LDkuMDdDMTQuODksMTAuODMgMTYsMTMuMDcgMTYsMTQuMjNDMTYsMTYuNDUgMTQuMjIsMTguMjMgMTIsMTguMjNDOS43OCwxOC4yMyA4LDE2LjQ1IDgsMTQuMjNDOCwxMy4wNyA5LjExLDEwLjgzIDEwLjMyLDkuMDdDMTEuMTYsNy44NSAxMS41Niw3LjQyIDEyLDYuOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxOUE1LDUgMCAwLDEgMSwxNEE1LDUgMCAwLDEgNiw5QzcsNi42NSA5LjMsNSAxMiw1QzE1LjQzLDUgMTguMjQsNy42NiAxOC41LDExLjAzTDE5LDExQTQsNCAwIDAsMSAyMywxNUE0LDQgMCAwLDEgMTksMTlINk0xOSwxM0gxN1YxMkE1LDUgMCAwLDAgMTIsN0M5LjUsNyA3LjQ1LDguODIgNy4wNiwxMS4xOUM2LjczLDExLjA3IDYuMzcsMTEgNiwxMUEzLDMgMCAwLDAgMywxNEEzLDMgMCAwLDAgNiwxN0gxOUEyLDIgMCAwLDAgMjEsMTVBMiwyIDAgMCwwIDE5LDEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk02LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNEg3QTEsMSAwIDAsMSA4LDE1QTEsMSAwIDAsMSA3LDE2SDZNMTIsMTFIMTVMMTMsMTVIMTVMMTEuMjUsMjJMMTIsMTdIOS41TDEyLDExWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNy43NSw0LjA5TDE1LjIyLDYuMDNMMTYuMTMsOS4wOUwxMy41LDcuMjhMMTAuODcsOS4wOUwxMS43OCw2LjAzTDkuMjUsNC4wOUwxMi40NCw0TDEzLjUsMUwxNC41Niw0TDE3Ljc1LDQuMDlNMjEuMjUsMTFMMTkuNjEsMTIuMjVMMjAuMiwxNC4yM0wxOC41LDEzLjA2TDE2LjgsMTQuMjNMMTcuMzksMTIuMjVMMTUuNzUsMTFMMTcuODEsMTAuOTVMMTguNSw5TDE5LjE5LDEwLjk1TDIxLjI1LDExTTE4Ljk3LDE1Ljk1QzE5LjgsMTUuODcgMjAuNjksMTcuMDUgMjAuMTYsMTcuOEMxOS44NCwxOC4yNSAxOS41LDE4LjY3IDE5LjA4LDE5LjA3QzE1LjE3LDIzIDguODQsMjMgNC45NCwxOS4wN0MxLjAzLDE1LjE3IDEuMDMsOC44MyA0Ljk0LDQuOTNDNS4zNCw0LjUzIDUuNzYsNC4xNyA2LjIxLDMuODVDNi45NiwzLjMyIDguMTQsNC4yMSA4LjA2LDUuMDRDNy43OSw3LjkgOC43NSwxMC44NyAxMC45NSwxMy4wNkMxMy4xNCwxNS4yNiAxNi4xLDE2LjIyIDE4Ljk3LDE1Ljk1TTE3LjMzLDE3Ljk3QzE0LjUsMTcuODEgMTEuNywxNi42NCA5LjUzLDE0LjVDNy4zNiwxMi4zMSA2LjIsOS41IDYuMDQsNi42OEMzLjIzLDkuODIgMy4zNCwxNC42NCA2LjM1LDE3LjY2QzkuMzcsMjAuNjcgMTQuMTksMjAuNzggMTcuMzMsMTcuOTdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTksMTJDOS41MywxMi4xNCA5Ljg1LDEyLjY5IDkuNzEsMTMuMjJMOC40MSwxOC4wNUM4LjI3LDE4LjU5IDcuNzIsMTguOSA3LjE5LDE4Ljc2QzYuNjUsMTguNjIgNi4zNCwxOC4wNyA2LjUsMTcuNTRMNy43OCwxMi43MUM3LjkyLDEyLjE3IDguNDcsMTEuODYgOSwxMk0xMywxMkMxMy41MywxMi4xNCAxMy44NSwxMi42OSAxMy43MSwxMy4yMkwxMS42NCwyMC45NUMxMS41LDIxLjUgMTAuOTUsMjEuOCAxMC40MSwyMS42NkM5Ljg4LDIxLjUgOS41NiwyMC45NyA5LjcsMjAuNDNMMTEuNzgsMTIuNzFDMTEuOTIsMTIuMTcgMTIuNDcsMTEuODYgMTMsMTJNMTcsMTJDMTcuNTMsMTIuMTQgMTcuODUsMTIuNjkgMTcuNzEsMTMuMjJMMTYuNDEsMTguMDVDMTYuMjcsMTguNTkgMTUuNzIsMTguOSAxNS4xOSwxOC43NkMxNC42NSwxOC42MiAxNC4zNCwxOC4wNyAxNC41LDE3LjU0TDE1Ljc4LDEyLjcxQzE1LjkyLDEyLjE3IDE2LjQ3LDExLjg2IDE3LDEyTTE3LDEwVjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUMzLDEyLjExIDMuNiwxMy4wOCA0LjUsMTMuNlYxMy41OUM1LDEzLjg3IDUuMTQsMTQuNSA0Ljg3LDE0Ljk2QzQuNTksMTUuNDMgNCwxNS42IDMuNSwxNS4zMlYxNS4zM0MyLDE0LjQ3IDEsMTIuODUgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJDMjMsMTMuNSAyMi4yLDE0Ljc3IDIxLDE1LjQ2VjE1LjQ2QzIwLjUsMTUuNzMgMTkuOTEsMTUuNTcgMTkuNjMsMTUuMDlDMTkuMzYsMTQuNjEgMTkuNSwxNCAyMCwxMy43MlYxMy43M0MyMC42LDEzLjM5IDIxLDEyLjc0IDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxNC4wM0ExLDEgMCAwLDEgNywxNS4wM0M3LDE1LjU4IDYuNTUsMTYuMDMgNiwxNi4wM0MzLjI0LDE2LjAzIDEsMTMuNzkgMSwxMS4wM0MxLDguMjcgMy4yNCw2LjAzIDYsNi4wM0M3LDMuNjggOS4zLDIuMDMgMTIsMi4wM0MxNS40MywyLjAzIDE4LjI0LDQuNjkgMTguNSw4LjA2TDE5LDguMDNBNCw0IDAgMCwxIDIzLDEyLjAzQzIzLDE0LjIzIDIxLjIxLDE2LjAzIDE5LDE2LjAzSDE4QzE3LjQ1LDE2LjAzIDE3LDE1LjU4IDE3LDE1LjAzQzE3LDE0LjQ3IDE3LjQ1LDE0LjAzIDE4LDE0LjAzSDE5QTIsMiAwIDAsMCAyMSwxMi4wM0EyLDIgMCAwLDAgMTksMTAuMDNIMTdWOS4wM0MxNyw2LjI3IDE0Ljc2LDQuMDMgMTIsNC4wM0M5LjUsNC4wMyA3LjQ1LDUuODQgNy4wNiw4LjIxQzYuNzMsOC4wOSA2LjM3LDguMDMgNiw4LjAzQTMsMyAwIDAsMCAzLDExLjAzQTMsMyAwIDAsMCA2LDE0LjAzTTEyLDE0LjE1QzEyLjE4LDE0LjM5IDEyLjM3LDE0LjY2IDEyLjU2LDE0Ljk0QzEzLDE1LjU2IDE0LDE3LjAzIDE0LDE4QzE0LDE5LjExIDEzLjEsMjAgMTIsMjBBMiwyIDAgMCwxIDEwLDE4QzEwLDE3LjAzIDExLDE1LjU2IDExLjQ0LDE0Ljk0QzExLjYzLDE0LjY2IDExLjgyLDE0LjQgMTIsMTQuMTVNMTIsMTEuMDNMMTEuNSwxMS41OUMxMS41LDExLjU5IDEwLjY1LDEyLjU1IDkuNzksMTMuODFDOC45MywxNS4wNiA4LDE2LjU2IDgsMThBNCw0IDAgMCwwIDEyLDIyQTQsNCAwIDAsMCAxNiwxOEMxNiwxNi41NiAxNS4wNywxNS4wNiAxNC4yMSwxMy44MUMxMy4zNSwxMi41NSAxMi41LDExLjU5IDEyLjUsMTEuNTlcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNNiwxNEExLDEgMCAwLDEgNywxNUExLDEgMCAwLDEgNiwxNkE1LDUgMCAwLDEgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJBNCw0IDAgMCwxIDE5LDE2SDE4QTEsMSAwIDAsMSAxNywxNUExLDEgMCAwLDEgMTgsMTRIMTlBMiwyIDAgMCwwIDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1Y5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFBMywzIDAgMCwwIDYsMTRNNy44OCwxOC4wN0wxMC4wNywxNy41TDguNDYsMTUuODhDOC4wNywxNS41IDguMDcsMTQuODYgOC40NiwxNC40NkM4Ljg1LDE0LjA3IDkuNSwxNC4wNyA5Ljg4LDE0LjQ2TDExLjUsMTYuMDdMMTIuMDcsMTMuODhDMTIuMjEsMTMuMzQgMTIuNzYsMTMuMDMgMTMuMjksMTMuMTdDMTMuODMsMTMuMzEgMTQuMTQsMTMuODYgMTQsMTQuNEwxMy40MSwxNi41OUwxNS42LDE2QzE2LjE0LDE1Ljg2IDE2LjY5LDE2LjE3IDE2LjgzLDE2LjcxQzE2Ljk3LDE3LjI0IDE2LjY2LDE3Ljc5IDE2LjEyLDE3LjkzTDEzLjkzLDE4LjVMMTUuNTQsMjAuMTJDMTUuOTMsMjAuNSAxNS45MywyMS4xNSAxNS41NCwyMS41NEMxNS4xNSwyMS45MyAxNC41LDIxLjkzIDE0LjEyLDIxLjU0TDEyLjUsMTkuOTNMMTEuOTMsMjIuMTJDMTEuNzksMjIuNjYgMTEuMjQsMjIuOTcgMTAuNzEsMjIuODNDMTAuMTcsMjIuNjkgOS44NiwyMi4xNCAxMCwyMS42TDEwLjU5LDE5LjQxTDguNCwyMEM3Ljg2LDIwLjE0IDcuMzEsMTkuODMgNy4xNywxOS4yOUM3LjAzLDE4Ljc2IDcuMzQsMTguMjEgNy44OCwxOC4wN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMjIuMTEgMjEuNDZMMi4zOSAxLjczTDEuMTEgM0w0Ljk3IDYuODZMMy4zNCA3TDUuMTEgMTAuNzlDNS4yNSAxMCA1LjUgOS4yNCA1Ljk0IDguNUM2IDguMzYgNi4xMyA4LjI0IDYuMjIgOC4xMUw3LjY2IDkuNTVDNy4yNSAxMC4yNyA3IDExLjExIDcgMTJDNyAxNC43NiA5LjI0IDE3IDEyIDE3QzEyLjkgMTcgMTMuNzMgMTYuNzUgMTQuNDUgMTYuMzRMMjAuODQgMjIuNzNMMjIuMTEgMjEuNDZNMTIgMTVDMTAuMzQgMTUgOSAxMy42NiA5IDEyQzkgMTEuNjcgOS4wNyAxMS4zNiA5LjE3IDExLjA2TDEyLjk0IDE0LjgzQzEyLjY0IDE0LjkzIDEyLjMzIDE1IDEyIDE1TTE4LjA1IDguNUMxNy42MyA3Ljc4IDE3LjEgNy4xNSAxNi41IDYuNjRMMjAuNjUgN0wxOC44OCAxMC43OUMxOC43NCAxMCAxOC40NyA5LjIzIDE4LjA1IDguNU0xMiA3QzE0Ljc2IDcgMTcgOS4yNCAxNyAxMkMxNyAxMi41NCAxNi44OSAxMy4wNSAxNi43NCAxMy41NEwxNSAxMS43OEMxNC44NyAxMC4zIDEzLjcgOS4xMyAxMi4yMiA5TDEwLjQ3IDcuMjdDMTAuOTUgNy4xMSAxMS40NiA3IDEyIDdNMTIgNUMxMS4xNiA1IDEwLjM1IDUuMTUgOS42MSA1LjQyTDEyIDJMMTQuMzkgNS40MkMxMy42NSA1LjE1IDEyLjg0IDUgMTIgNU0xOC44NyAxMy4yMUwyMC42NCAxN0wyMC4yNCAxNy4wNEwxOC4yNSAxNS4wNUMxOC41NCAxNC40NSAxOC43NiAxMy44NCAxOC44NyAxMy4yMU0xMiAxOUMxMi44MiAxOSAxMy42MyAxOC44MyAxNC4zNyAxOC41NkwxMiAyMkw5LjU5IDE4LjU2QzEwLjMzIDE4LjgzIDExLjE0IDE5IDEyIDE5TTUuOTUgMTUuNUM2LjM3IDE2LjI0IDYuOTEgMTYuODYgNy41IDE3LjM3TDMuMzYgMTdMNS4xMiAxMy4yM0M1LjI2IDE0IDUuNTMgMTQuNzggNS45NSAxNS41WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xMiw3QTUsNSAwIDAsMSAxNywxMkE1LDUgMCAwLDEgMTIsMTdBNSw1IDAgMCwxIDcsMTJBNSw1IDAgMCwxIDEyLDdNMTIsOUEzLDMgMCAwLDAgOSwxMkEzLDMgMCAwLDAgMTIsMTVBMywzIDAgMCwwIDE1LDEyQTMsMyAwIDAsMCAxMiw5TTEyLDJMMTQuMzksNS40MkMxMy42NSw1LjE1IDEyLjg0LDUgMTIsNUMxMS4xNiw1IDEwLjM1LDUuMTUgOS42MSw1LjQyTDEyLDJNMy4zNCw3TDcuNSw2LjY1QzYuOSw3LjE2IDYuMzYsNy43OCA1Ljk0LDguNUM1LjUsOS4yNCA1LjI1LDEwIDUuMTEsMTAuNzlMMy4zNCw3TTMuMzYsMTdMNS4xMiwxMy4yM0M1LjI2LDE0IDUuNTMsMTQuNzggNS45NSwxNS41QzYuMzcsMTYuMjQgNi45MSwxNi44NiA3LjUsMTcuMzdMMy4zNiwxN00yMC42NSw3TDE4Ljg4LDEwLjc5QzE4Ljc0LDEwIDE4LjQ3LDkuMjMgMTguMDUsOC41QzE3LjYzLDcuNzggMTcuMSw3LjE1IDE2LjUsNi42NEwyMC42NSw3TTIwLjY0LDE3TDE2LjUsMTcuMzZDMTcuMDksMTYuODUgMTcuNjIsMTYuMjIgMTguMDQsMTUuNUMxOC40NiwxNC43NyAxOC43MywxNCAxOC44NywxMy4yMUwyMC42NCwxN00xMiwyMkw5LjU5LDE4LjU2QzEwLjMzLDE4LjgzIDExLjE0LDE5IDEyLDE5QzEyLjgyLDE5IDEzLjYzLDE4LjgzIDE0LjM3LDE4LjU2TDEyLDIyWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk00LDEwQTEsMSAwIDAsMSAzLDlBMSwxIDAgMCwxIDQsOEgxMkEyLDIgMCAwLDAgMTQsNkEyLDIgMCAwLDAgMTIsNEMxMS40NSw0IDEwLjk1LDQuMjIgMTAuNTksNC41OUMxMC4yLDUgOS41Niw1IDkuMTcsNC41OUM4Ljc4LDQuMiA4Ljc4LDMuNTYgOS4xNywzLjE3QzkuOSwyLjQ1IDEwLjksMiAxMiwyQTQsNCAwIDAsMSAxNiw2QTQsNCAwIDAsMSAxMiwxMEg0TTE5LDEyQTEsMSAwIDAsMCAyMCwxMUExLDEgMCAwLDAgMTksMTBDMTguNzIsMTAgMTguNDcsMTAuMTEgMTguMjksMTAuMjlDMTcuOSwxMC42OCAxNy4yNywxMC42OCAxNi44OCwxMC4yOUMxNi41LDkuOSAxNi41LDkuMjcgMTYuODgsOC44OEMxNy40Miw4LjM0IDE4LjE3LDggMTksOEEzLDMgMCAwLDEgMjIsMTFBMywzIDAgMCwxIDE5LDE0SDVBMSwxIDAgMCwxIDQsMTNBMSwxIDAgMCwxIDUsMTJIMTlNMTgsMThINEExLDEgMCAwLDEgMywxN0ExLDEgMCAwLDEgNCwxNkgxOEEzLDMgMCAwLDEgMjEsMTlBMywzIDAgMCwxIDE4LDIyQzE3LjE3LDIyIDE2LjQyLDIxLjY2IDE1Ljg4LDIxLjEyQzE1LjUsMjAuNzMgMTUuNSwyMC4xIDE1Ljg4LDE5LjcxQzE2LjI3LDE5LjMyIDE2LjksMTkuMzIgMTcuMjksMTkuNzFDMTcuNDcsMTkuODkgMTcuNzIsMjAgMTgsMjBBMSwxIDAgMCwwIDE5LDE5QTEsMSAwIDAsMCAxOCwxOFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMy41NSAxOS4wOUw0Ljk2IDIwLjVMNi43NiAxOC43MUw1LjM0IDE3LjI5TTEyIDZDOC42OSA2IDYgOC42OSA2IDEyUzguNjkgMTggMTIgMTggMTggMTUuMzEgMTggMTJDMTggOC42OCAxNS4zMSA2IDEyIDZNMjAgMTNIMjNWMTFIMjBNMTcuMjQgMTguNzFMMTkuMDQgMjAuNUwyMC40NSAxOS4wOUwxOC42NiAxNy4yOU0yMC40NSA1TDE5LjA0IDMuNkwxNy4yNCA1LjM5TDE4LjY2IDYuODFNMTMgMUgxMVY0SDEzTTYuNzYgNS4zOUw0Ljk2IDMuNkwzLjU1IDVMNS4zNCA2LjgxTDYuNzYgNS4zOU0xIDEzSDRWMTFIMU0xMyAyMEgxMVYyM0gxM1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc3QgY2FwaXRhbGl6ZUZpcnN0ID0gKHN0cikgPT4ge1xuICBjb25zdCBjYXBpdGFsaXplZCA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgcmV0dXJuIGNhcGl0YWxpemVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FwaXRhbGl6ZUZpcnN0O1xuIiwiY29uc3QgY29udmVydFRvS20gPSAobSkgPT4ge1xuICBjb25zdCBrbUggPSAobSAqIDMuNikudG9GaXhlZCgxKTtcbiAgcmV0dXJuIGttSDtcbn07XG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0VG9LbTtcbiIsImNvbnN0IGdldERhdGUgPSAobXMpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDAsIDExKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGU7XG4iLCJpbXBvcnQgZ2V0V2VhdGhlckFQSSBmcm9tICcuL2dldFdlYXRoZXJBUEknO1xuaW1wb3J0IGdldFN0eWxlIGZyb20gJy4vZ2V0U3R5bGUnO1xuaW1wb3J0IGdldERhdGUgZnJvbSAnLi9nZXREYXRlJztcbmltcG9ydCBnZXRIb3VyIGZyb20gJy4vZ2V0SG91cic7XG5pbXBvcnQgZ2V0V2luZERpciBmcm9tICcuL2dldFdpbmREaXInO1xuaW1wb3J0IHZlcmlmeVJhaW4gZnJvbSAnLi92ZXJpZnlSYWluJztcbmltcG9ydCB2ZXJpZnlTbm93IGZyb20gJy4vdmVyaWZ5U25vdyc7XG5pbXBvcnQgZ2V0Tm93VGltZSBmcm9tICcuL2dldE5vd1RpbWUnO1xuaW1wb3J0IGNvbnZlcnRUb0ttIGZyb20gJy4vY29udmVydFRvS20nO1xuaW1wb3J0IGdldEZpeGVkTnVtYmVyIGZyb20gJy4vZ2V0Rml4ZWROdW1iZXInO1xuaW1wb3J0IHByb2Nlc3NEYWlseURhdGEgZnJvbSAnLi9wcm9jZXNzRGFpbHlEYXRhJztcbmltcG9ydCBjYXBpdGFsaXplRmlyc3QgZnJvbSAnLi9jYXBpdGFsaXplRmlyc3QnO1xuaW1wb3J0IHZlcmlmeUFsZXJ0cyBmcm9tICcuL3ZlcmlmeUFsZXJ0cyc7XG5pbXBvcnQgc2V0V2VhdGhlckljb24gZnJvbSAnLi9zZXRXZWF0aGVySWNvbic7XG5cbmNvbnN0IGdldERvbSA9IChsYXQsIGxvbiwgbG9jLCBjb3VudHJ5KSA9PiB7XG4gIC8vIHF1ZXJpZXNcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgY29uc3QgdXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYnKTtcbiAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlJyk7XG4gIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5Jyk7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpO1xuICBjb25zdCB3aW5kRGVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmREZWcnKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRTcGVlZCcpO1xuICBjb25zdCBjbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWRzJyk7XG4gIGNvbnN0IHJhaW4xaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluMWgnKTtcbiAgY29uc3QgcmFpbjFoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluMWhDb250Jyk7XG4gIGNvbnN0IHNub3cxaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93MWgnKTtcbiAgY29uc3Qgc25vdzFoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93MWhDb250Jyk7XG4gIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5Jyk7XG4gIGNvbnN0IGFsZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydHMnKTtcblxuICAvLyB3cml0aW5nIHRvIERPTVxuICBjb25zdCB3cml0ZVdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckFQSShsYXQsIGxvbiwgY291bnRyeSk7XG4gICAgICBjb25zb2xlLmxvZygnT25lY2FsbCBBUEk6ICcsIHJlY0RhdGEpO1xuXG4gICAgICAvLyB1bml0IGNvbnZlcnNpb24gYmVmb3JlIHdyaXRpbmdcbiAgICAgIC8vIHNsaWNlcyBvdXQgc2Vjb25kcywga2VlcCBhbS9QTVxuICAgICAgY29uc3Qgc3VucmlzZVRpbWUgPSBgJHtnZXRIb3VyKHJlY0RhdGEuY3VycmVudC5zdW5yaXNlKS5zbGljZSgwLCA1KX1gO1xuXG4gICAgICBjb25zdCBzdW5zZXRUaW1lID0gYCR7Z2V0SG91cihyZWNEYXRhLmN1cnJlbnQuc3Vuc2V0KS5zbGljZSgwLCA1KX1gO1xuICAgICAgY29uc3Qgd2luZFNwZWVkS20gPSBjb252ZXJ0VG9LbShyZWNEYXRhLmN1cnJlbnQud2luZF9zcGVlZCk7XG5cbiAgICAgIC8vIHNob3dzIGN1cnJlbnQgaG91ciB3aXRob3V0IHNlY29uZHNcbiAgICAgIGNvbnN0IG5vd0hvdXIgPSBnZXROb3dUaW1lKHJlY0RhdGEudGltZXpvbmUpLnRvU3RyaW5nKCkuc2xpY2UoMTYsIDIxKTtcbiAgICAgIGNvbnN0IHRpbWVEYXRlID0gZ2V0RGF0ZSgpO1xuXG4gICAgICAvLyBtYWluIGluZm8gd3JpdGluZ1xuICAgICAgY29uc3Qgd2luZERpciA9IGdldFdpbmREaXIocmVjRGF0YS5jdXJyZW50LndpbmRfZGVnKTtcbiAgICAgIGNvbnN0IHRlbXBSb3VuZCA9IGdldEZpeGVkTnVtYmVyKHJlY0RhdGEuY3VycmVudC50ZW1wLCAxKTtcbiAgICAgIGNvbnN0IGZlZWxSb3VuZCA9IGdldEZpeGVkTnVtYmVyKHJlY0RhdGEuY3VycmVudC5mZWVsc19saWtlLCAxKTtcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBsb2M7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGltZURhdGU7XG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gbm93SG91cjtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wUm91bmR9IMK6Q2A7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2ZlZWxSb3VuZH0gwrpDYDtcbiAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7cmVjRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgdXYudGV4dENvbnRlbnQgPSBgVVYgJHtnZXRGaXhlZE51bWJlcihyZWNEYXRhLmN1cnJlbnQudXZpLCAwKX1gO1xuICAgICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGAke3N1bnJpc2VUaW1lfWA7XG4gICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBgJHtzdW5zZXRUaW1lfWA7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzdW5yaXNlVGltZSwgJysnLCBzdW5zZXRUaW1lKTtcbiAgICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgJHtyZWNEYXRhLmN1cnJlbnQudmlzaWJpbGl0eSAvIDEwMDB9IGttYDtcbiAgICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3QoXG4gICAgICAgIHJlY0RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICApO1xuICAgICAgd2luZERlZy50ZXh0Q29udGVudCA9IGAke3dpbmREaXJ9YDtcbiAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3dpbmRTcGVlZEttfSBrbS9oYDtcbiAgICAgIGNsb3Vkcy50ZXh0Q29udGVudCA9IGBDbG91ZHMgJHtyZWNEYXRhLmN1cnJlbnQuY2xvdWRzfSAlYDtcblxuICAgICAgLy8gY2hlY2sgaWYgcmFpbiBhbmQgc25vdyBkYXRhIGFyZSBwcmVzZW50IGFuZCBzaG93cyBpdFxuICAgICAgaWYgKHZlcmlmeVJhaW4ocmVjRGF0YS5jdXJyZW50KSkge1xuICAgICAgICByYWluMWgudGV4dENvbnRlbnQgPSBgJHtyZWNEYXRhLmN1cnJlbnQucmFpblsnMWgnXX0gbW1gO1xuICAgICAgICByYWluMWhDb250LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICByYWluMWhDb250LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICAgICAgICByYWluMWhDb250LnN0eWxlLmdhcCA9ICcwLjVyZW0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFpbjFoLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHJhaW4xaENvbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJpZnlTbm93KHJlY0RhdGEuY3VycmVudCkpIHtcbiAgICAgICAgc25vdzFoLnRleHRDb250ZW50ID0gYCR7cmVjRGF0YS5jdXJyZW50LnNub3dbJzFoJ119IG1tYDtcbiAgICAgICAgc25vdzFoQ29udC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgc25vdzFoQ29udC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcbiAgICAgICAgc25vdzFoQ29udC5zdHlsZS5nYXAgPSAnMC41cmVtJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNub3cxaC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBzbm93MWhDb250LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbGV0ZXMgcHJldmlvdXMgdmFsdWVzIGJlZm9yZSB3cml0aW5nIG5ldyBvbmVzXG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlDb250YWluZXInKTtcbiAgICAgIGlmIChwcmV2aW91c0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICBkYWlseS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gZm9yZWNhc3RcbiAgICAgIC8vIHByb2Nlc3MgZGFpbHkgZm9yZWNhc3QgaW50byBhIG5lYXQgQXJyYXlcbiAgICAgIGNvbnN0IGRhaWx5VGVtcHMgPSBwcm9jZXNzRGFpbHlEYXRhKHJlY0RhdGEuZGFpbHkpO1xuXG4gICAgICAvLyB3cml0ZSBlYWNoIGRheSBmb3JlY2FzdGVkIHRvIERPTVxuICAgICAgZm9yIChjb25zdCBkYXkgb2YgZGFpbHlUZW1wcykge1xuICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF5Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGRheU1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkYXlNaW5WYWx1ZSA9IGdldEZpeGVkTnVtYmVyKGRheVswXSwgMCk7XG4gICAgICAgIGRheU1pbi50ZXh0Q29udGVudCA9IGAke2RheU1pblZhbHVlfSDCukNgO1xuICAgICAgICBjb25zdCBtaW5UZW1wU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgICAgIG1pblRlbXBTdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtaW5UZW1wU3ZnJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcENvbnRhaW5lcjIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZGF5TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRheU1heFZhbHVlID0gZ2V0Rml4ZWROdW1iZXIoZGF5WzFdLCAwKTtcbiAgICAgICAgZGF5TWF4LnRleHRDb250ZW50ID0gYCR7ZGF5TWF4VmFsdWV9IMK6Q2A7XG4gICAgICAgIGNvbnN0IG1heFRlbXBTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWF4VGVtcFN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21heFRlbXBTdmcnKTtcblxuICAgICAgICBjb25zdCB1dlJhaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9yZWNhc3RJdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHV2aU1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB1dmlNYXhWYWx1ZSA9IGdldEZpeGVkTnVtYmVyKGRheVsyXSwgMCk7XG4gICAgICAgIHV2aU1heC50ZXh0Q29udGVudCA9IGBVViAke3V2aU1heFZhbHVlfWA7XG4gICAgICAgIGNvbnN0IHV2aWdTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgdXZpZ1N2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3V2U3ZnJyk7XG5cbiAgICAgICAgY29uc3QgcmFpblByb2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcmFpblByb2JWYWx1ZSA9IGAkeyhkYXlbM10gKiAxMDApLnRvRml4ZWQoMCl9JWA7XG4gICAgICAgIHJhaW5Qcm9iLnRleHRDb250ZW50ID0gcmFpblByb2JWYWx1ZTtcbiAgICAgICAgY29uc3QgcmFpblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgICAgICByYWluU3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFpblBlcmNlbnQnKTtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JlY2FzdEl0ZW1Db250YWluZXInKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2NWYWx1ZSA9IGRheVs0XTtcbiAgICAgICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3Qod2VhdGhlckRlc2NWYWx1ZSk7XG4gICAgICAgIC8vIGljb25cbiAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgbGV0IHdlYXRoZXJJY29uVmFsdWUgPSBkYXlbNl07XG4gICAgICAgIHdlYXRoZXJJY29uVmFsdWUgPSBjYXBpdGFsaXplRmlyc3Qod2VhdGhlckljb25WYWx1ZSk7XG4gICAgICAgIC8vIGdldHMgU1ZHIGZvciBmb3JlY2FzdGVkIGRhdGFcbiAgICAgICAgd2VhdGhlckljb24uaW5uZXJIVE1MID0gc2V0V2VhdGhlckljb24oXG4gICAgICAgICAgd2VhdGhlckljb25WYWx1ZSxcbiAgICAgICAgICByZWNEYXRhLnRpbWV6b25lLFxuICAgICAgICAgIC8vIHRydWUgYmVjYXVzZSBpdCdzIGEgZnV0dXJlIGRhdGVcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXlEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF5RGF0ZScpO1xuICAgICAgICBjb25zdCBkYXlEYXRlVmFsdWUgPSBkYXlbNV07XG4gICAgICAgIGRheURhdGUudGV4dENvbnRlbnQgPSBkYXlEYXRlVmFsdWU7XG5cbiAgICAgICAgLy8gYXBwZW5kc1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pblRlbXBTdmcpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheU1pbik7XG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWF4VGVtcFN2Zyk7XG4gICAgICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TWF4KTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHV2aWdTdmcpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQodXZpTWF4KTtcbiAgICAgICAgdXZSYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5TdmcpO1xuICAgICAgICB1dlJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmFpblByb2IpO1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgICAgICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzYyk7XG5cbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheURhdGUpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIyKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHV2UmFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgZGFpbHkuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsbHMgc3R5bGluZyh2YXJpYWJsZSBpY29ucylcblxuICAgICAgLy8gY2hlY2sgZm9yIGFsZXJ0cyBhbmQgY2xlYW5zIGFmdGVyd2FyZHNcbiAgICAgIGlmICh2ZXJpZnlBbGVydHMocmVjRGF0YSkpIHtcbiAgICAgICAgYWxlcnRzLnRleHRDb250ZW50ID0gcmVjRGF0YS5hbGVydHNbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIGdldFN0eWxlKHJlY0RhdGEuY3VycmVudC53ZWF0aGVyWzBdLm1haW4sIHJlY0RhdGEudGltZXpvbmUsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0U3R5bGUocmVjRGF0YS5jdXJyZW50LndlYXRoZXJbMF0ubWFpbiwgcmVjRGF0YS50aW1lem9uZSwgZmFsc2UpO1xuICAgICAgICBhbGVydHMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gJ09vb29wcywgdGhlcmUgc2VlbXMgdG8gYmUgYSBuZXR3b3JrIGVycm9yISc7XG4gICAgfVxuICB9O1xuICB3cml0ZVdlYXRoZXJEYXRhKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb207XG4iLCJpbXBvcnQgZ2V0RG9tIGZyb20gJy4vZ2V0RG9tJztcbmltcG9ydCBnZXRHZW9BUEkgZnJvbSAnLi9nZXRHZW9BUEknO1xuXG5jb25zdCBnZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28nKTtcblxuICAvLyBzdG9yZSBzZWFyY2hzXG4gIGxldCByZXN1bHRBcnJheSA9IFtdO1xuXG4gIC8vIHF1ZXJpZXMgY29vcmRpbmF0ZXMsIHN0b3JlcyB0aGVuLCBjYWxsIGZvciBnZXRET00gdG8gY2hhbmdlIHdoYXQncyBkaXNwbGF5ZWRcbiAgY29uc3QgcHJvY2Vzc0lucHQgPSBhc3luYyAodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gY2xlYW4gc3RvcmVkXG4gICAgICByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IGdldEdlb0FQSSh2YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZygnR2VvIGRhdGEgQVBJOiAnLCBnZW9EYXRhKTtcblxuICAgICAgLy8gZ2VuZXJhdGVzIGEgbmV3IGFycmF5IHdpdGggY29uY2F0IG5hbWUgYW5kIGNvb3Jkc1xuICAgICAgY29uc3QgZ2VvRGF0YTAgPSBbXTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5uYW1lfSwgJHtnZW9EYXRhWzBdLmNvdW50cnl9YCk7XG4gICAgICBnZW9EYXRhMC5wdXNoKGAke2dlb0RhdGFbMF0ubGF0fWApO1xuICAgICAgZ2VvRGF0YTAucHVzaChgJHtnZW9EYXRhWzBdLmxvbn1gKTtcbiAgICAgIGdlb0RhdGEwLnB1c2goYCR7Z2VvRGF0YVswXS5jb3VudHJ5fWApO1xuXG4gICAgICAvLyBzdG9yZSBmb3IgZnV0dXJlIHVzZVxuICAgICAgcmVzdWx0QXJyYXkucHVzaChnZW9EYXRhMCk7XG5cbiAgICAgIC8vIGNhbGxzIGZvciByZXdyaXRpbmcgdGhlIERPTSB3aXRoIG5ldyBjaXR5LCBwYXNzZXMgY291bnRyeSB0byBzZWxlY3QgbGFuZ3VhZ2VcbiAgICAgIGdldERvbShcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5sYXR9YCxcbiAgICAgICAgYCR7Z2VvRGF0YVswXS5sb259YCxcbiAgICAgICAgcmVzdWx0QXJyYXlbMF1bMF0sXG4gICAgICAgIGAke2dlb0RhdGFbMF0uY291bnRyeX1gXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZyhnZW9EYXRhMCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBzZWFyY2ggb24gZW50ZXJcbiAgY29uc3QgcHJvY2Vzc0tiZElucHV0ID0gKGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHByb2Nlc3NJbnB0KHNlYXJjaC52YWx1ZSk7XG4gICAgZWxzZSBzZWFyY2guZm9jdXMoKTtcbiAgfTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcm9jZXNzSW5wdChzZWFyY2gudmFsdWUpKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gcHJvY2Vzc0tiZElucHV0KGUua2V5KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRFdmVudExpc3RlbmVycztcbiIsImNvbnN0IGdldEZpeGVkTnVtYmVyID0gKG4sIHNwYWNlcykgPT4ge1xuICBjb25zdCBmaXhlZE4gPSBuLnRvRml4ZWQoc3BhY2VzKTtcbiAgcmV0dXJuIGZpeGVkTjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpeGVkTnVtYmVyO1xuIiwiY29uc3QgZ2V0R2VvQVBJID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGdlb1Jlc3F1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTImYXBwaWQ9ODMzYzI2MWQxOTkyNmQxM2NjNTc4ZDc5NTI4ZDlkNjRgLFxuICAgIHtcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH1cbiAgKTtcbiAgY29uc3QgcmVjZWl2ZWQgPSBhd2FpdCBnZW9SZXNxdWVzdC5qc29uKCk7XG4gIHJldHVybiByZWNlaXZlZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEdlb0FQSTtcbiIsImNvbnN0IGdldEhvdXIgPSAobXMpID0+IHtcbiAgLy8gdW5peCBlcG9jaCB0byBkYXRlXG4gIGNvbnN0IG5ld0Vwb2NoID0gbXMgKiAxMDAwO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3RXBvY2gpO1xuICAvLyBjb25zb2xlLmxvZyhkYXRlLnRvVGltZVN0cmluZygpKTtcbiAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRIb3VyO1xuIiwiY29uc3QgZ2V0TmVhdERhdGUgPSAoZGF0ZSkgPT4ge1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKTtcbiAgbmV3RGF0ZSA9IG5ld0RhdGUudG9TdHJpbmcoKS5zbGljZSg0LCAxMCk7XG4gIHJldHVybiBuZXdEYXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE5lYXREYXRlO1xuIiwiY29uc3QgZ2V0TmlnaHQgPSAodGltZU5vdykgPT4ge1xuICAvLyBuaWdodCBib29sZWFuIGNoZWNrXG4gIGNvbnN0IGNvbmRpdGlvbjEgPSB0aW1lTm93ID4gMTk7XG4gIGNvbnN0IGNvbmRpdGlvbjIgPSB0aW1lTm93IDwgNztcbiAgY29uc3QgbmlnaHQgPSBjb25kaXRpb24xIHx8IGNvbmRpdGlvbjI7XG4gIHJldHVybiBuaWdodDtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXROaWdodDtcbiIsIi8vIHN0cmlwcyBzZWNvbmRzIGZyb20gbG9jYWxlVGltZVxuY29uc3QgZ2V0Tm93VGltZSA9ICh0aW1lem9uZSkgPT4ge1xuICBjb25zdCBub3dIb3VyID0gbmV3IERhdGUoXG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lOiBgJHt0aW1lem9uZX1gIH0pXG4gICk7XG4gIHJldHVybiBub3dIb3VyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE5vd1RpbWU7XG4iLCJpbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltZy9pY29ucy9tYWduaWZ5LnN2Zyc7XG5pbXBvcnQgaHVtaWRpdHlJY29uIGZyb20gJy4vaW1nL2ljb25zL3dhdGVyLW91dGxpbmUuc3ZnJztcbmltcG9ydCB1dkljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2hpdGUtYmFsYW5jZS1zdW5ueS5zdmcnO1xuaW1wb3J0IGdhdWdlSWNvbiBmcm9tICcuL2ltZy9pY29ucy9nYXVnZS5zdmcnO1xuaW1wb3J0IHN1bnJpc2VJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnkuc3ZnJztcbmltcG9ydCBzdW5zZXRJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc3Vubnktb2ZmLnN2Zyc7XG5pbXBvcnQgdmlzaWJpbGl0eUljb24gZnJvbSAnLi9pbWcvaWNvbnMvYmlub2N1bGFycy5zdmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuL2ltZy9pY29ucy9jbG91ZC1wZXJjZW50LnN2Zyc7XG5pbXBvcnQgd2luZEljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci13aW5keS5zdmcnO1xuaW1wb3J0IHJhaW5JY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItcG91cmluZy5zdmcnO1xuaW1wb3J0IHNub3dJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItc25vd3kuc3ZnJztcbmltcG9ydCBtYXhUZW1wSWNvbiBmcm9tICcuL2ltZy9pY29ucy90aGVybW9tZXRlci1jaGV2cm9uLXVwLnN2Zyc7XG5pbXBvcnQgbWluVGVtcEljb24gZnJvbSAnLi9pbWcvaWNvbnMvdGhlcm1vbWV0ZXItY2hldnJvbi1kb3duLnN2Zyc7XG5pbXBvcnQgcmFpblBJY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItcmFpbnkuc3ZnJztcbmltcG9ydCB0aGVybW9JY29uIGZyb20gJy4vaW1nL2ljb25zL3RoZXJtb21ldGVyLWhpZ2guc3ZnJztcbmltcG9ydCBzZXRXZWF0aGVySWNvbiBmcm9tICcuL3NldFdlYXRoZXJJY29uJztcbmltcG9ydCBzZXRCYWNrZ3JvdW5kIGZyb20gJy4vc2V0QmFja2dyb3VuZCc7XG5cbmNvbnN0IGdldFN0eWxlID0gKGN1cnJlbnRXZWF0aGVyLCB0aW1lLCBoYXNBbGVydHMpID0+IHtcbiAgY29uc3QgZ29CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28nKTtcbiAgY29uc3QgaHVtaWRpdHlTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlTdmcnKTtcbiAgY29uc3Qgc3VucmlzZVN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlU3ZnJyk7XG4gIGNvbnN0IHN1bnNldFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXRTdmcnKTtcbiAgY29uc3QgdmlzaWJpbGl0eVN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5U3ZnJyk7XG4gIGNvbnN0IGNsb3VkU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkU3ZnJyk7XG4gIGNvbnN0IHdpbmRTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZFN2ZycpO1xuICBjb25zdCByYWluU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW5TdmcnKTtcbiAgY29uc3Qgc25vd1N2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93U3ZnJyk7XG4gIGNvbnN0IHdlYXRoZXJTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlclN2ZycpO1xuICBjb25zdCB1dlN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51dlN2ZycpO1xuICBjb25zdCBtaW5UZW1wU3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pblRlbXBTdmcnKTtcbiAgY29uc3QgbWF4VGVtcFN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhUZW1wU3ZnJyk7XG4gIGNvbnN0IHJhaW5QZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhaW5QZXJjZW50Jyk7XG4gIGNvbnN0IHRlbXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBJY29uJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgdGVtcEljb24uaW5uZXJIVE1MID0gdGhlcm1vSWNvbjtcbiAgZ29CdG4uaW5uZXJIVE1MID0gc2VhcmNoSWNvbjtcbiAgaHVtaWRpdHlTdmcuaW5uZXJIVE1MID0gaHVtaWRpdHlJY29uO1xuICBzdW5yaXNlU3ZnLmlubmVySFRNTCA9IHN1bnJpc2VJY29uO1xuICBzdW5zZXRTdmcuaW5uZXJIVE1MID0gc3Vuc2V0SWNvbjtcbiAgdmlzaWJpbGl0eVN2Zy5pbm5lckhUTUwgPSB2aXNpYmlsaXR5SWNvbjtcbiAgY2xvdWRTdmcuaW5uZXJIVE1MID0gY2xvdWRJY29uO1xuICB3aW5kU3ZnLmlubmVySFRNTCA9IHdpbmRJY29uO1xuICByYWluU3ZnLmlubmVySFRNTCA9IHJhaW5JY29uO1xuICBzbm93U3ZnLmlubmVySFRNTCA9IHNub3dJY29uO1xuXG4gIC8vIHNoYXJlZCBpY29ucyB3aXRoIGZvcmVjYXN0XG4gIHV2U3ZnLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IHV2SWNvbjtcbiAgfSk7XG4gIG1pblRlbXBTdmcuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuaW5uZXJIVE1MID0gbWluVGVtcEljb247XG4gIH0pO1xuICBtYXhUZW1wU3ZnLmZvckVhY2goKGUpID0+IHtcbiAgICBlLmlubmVySFRNTCA9IG1heFRlbXBJY29uO1xuICB9KTtcbiAgcmFpblBlcmNlbnQuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuaW5uZXJIVE1MID0gcmFpblBJY29uO1xuICB9KTtcblxuICAvLyBwcm9jZXNzIHdlYXRoZXIgZGVzY3JpcHRpb24gaWNvbiBwYXNzaW5nIHRocm91Z2ggdGhlIHJlY2VpdmVkIGFycmF5LCBjaGVja3MgbmlnaHRcbiAgd2VhdGhlclN2Zy5pbm5lckhUTUwgPSBzZXRXZWF0aGVySWNvbihjdXJyZW50V2VhdGhlciwgdGltZSwgZmFsc2UpO1xuXG4gIC8vIHNldHMgYm9keSBiYWNrZ3JvdW5kIGFjY29yZGluZyB0byB3ZWF0aGVyL2RheS9uaWdodCBjb25kaXRpb25cbiAgc2V0QmFja2dyb3VuZChib2R5LCB0aW1lLCBjdXJyZW50V2VhdGhlciwgaGFzQWxlcnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN0eWxlO1xuIiwiY29uc3QgZ2V0V2VhdGhlckFQSSA9IGFzeW5jIChsYXQsIGxvbiwgY291bnRyeSkgPT4ge1xuICBpZiAoY291bnRyeSA9PT0gJ0JSJykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JkFQUElEPTgzM2MyNjFkMTk5MjZkMTNjYzU3OGQ3OTUyOGQ5ZDY0JnVuaXRzPW1ldHJpYyZsYW5nPXB0X2JyYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCByZWNlaXZlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlY2VpdmVkRGF0YTtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mQVBQSUQ9ODMzYzI2MWQxOTkyNmQxM2NjNTc4ZDc5NTI4ZDlkNjQmdW5pdHM9bWV0cmljYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG4gICk7XG4gIC8vIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHBhcnNpbmcgdGhlIHJlc3BvbnNlIGJvZHkgdGV4dCBhcyBKU09OXG4gIGNvbnN0IHJlY2VpdmVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlY2VpdmVkRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXJBUEk7XG4iLCJjb25zdCBnZXRXaW5kRGlyID0gKGRlZykgPT4ge1xuICBsZXQgd2luZERpcjtcblxuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGRlZyA8IDQwIHx8IGRlZyA9PT0gMzYwOlxuICAgICAgd2luZERpciA9ICdOb3J0aCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSA0MCAmJiBkZWcgPCA5MDpcbiAgICAgIHdpbmREaXIgPSAnTm9ydGhlYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDkwICYmIGRlZyA8IDEzNTpcbiAgICAgIHdpbmREaXIgPSAnRWFzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA+PSAxMzUgJiYgZGVnIDwgMTgwOlxuICAgICAgd2luZERpciA9ICdTb3V0aGVhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMTgwICYmIGRlZyA8IDIyNTpcbiAgICAgIHdpbmREaXIgPSAnU291dGgnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMjI1ICYmIGRlZyA8IDI3MDpcbiAgICAgIHdpbmREaXIgPSAnU291dGh3ZXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnID49IDI3MCAmJiBkZWcgPCAzMTU6XG4gICAgICB3aW5kRGlyID0gJ1dlc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPj0gMzE1ICYmIGRlZyA8IDM2MDpcbiAgICAgIHdpbmREaXIgPSAnTm9ydGh3ZXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3aW5kRGlyID0gJ09vb3BzLi4uJztcbiAgfVxuICByZXR1cm4gd2luZERpcjtcbn07XG4vLyBKRVNUXG5tb2R1bGUuZXhwb3J0cyA9IGdldFdpbmREaXI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGdldFdpbmREaXI7XG4iLCJpbXBvcnQgZ2V0TmVhdERhdGUgZnJvbSAnLi9nZXROZWF0RGF0ZSc7XG5cbmNvbnN0IHByb2Nlc3NEYWlseURhdGEgPSAocmVjQXJyYXkpID0+IHtcbiAgLy8gcHVzaGVzIHRvIGEgbmV3IGFycmF5IG9ubHkgZGF0YSB0aGF0IHdlIHdhbnRcbiAgY29uc3QgZGFpbHlUZW1wcyA9IFtdO1xuICByZWNBcnJheS5mb3JFYWNoKChkYXkpID0+XG4gICAgZGFpbHlUZW1wcy5wdXNoKFtcbiAgICAgIGRheS50ZW1wLm1pbixcbiAgICAgIGRheS50ZW1wLm1heCxcbiAgICAgIGRheS51dmksXG4gICAgICBkYXkucG9wLFxuICAgICAgZGF5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBnZXROZWF0RGF0ZShkYXkuZHQpLFxuICAgICAgZGF5LndlYXRoZXJbMF0ubWFpblxuICAgIF0pXG4gICk7XG4gIHJldHVybiBkYWlseVRlbXBzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc0RhaWx5RGF0YTtcbiIsImltcG9ydCBjbGVhclNreURheSBmcm9tICcuL2ltZy9wZXhlbHMtYnJldHQtc2F5bGVzLTkxMjM2NF8xay5qcGcnO1xuaW1wb3J0IGNsZWFyU2t5TmlnaHQgZnJvbSAnLi9pbWcvcGV4ZWxzLWRyaWZ0LXNodXR0ZXJidWctMjA4NTk5OC5qcGcnO1xuaW1wb3J0IHJhaW5EYXkgZnJvbSAnLi9pbWcvcGV4ZWxzLWJyYXppbC10b3Buby05NjA0ODA2LmpwZyc7XG5pbXBvcnQgcmFpbk5pZ2h0IGZyb20gJy4vaW1nL3BleGVscy1yYWh1bC1wYW5kaXQtMjgxNjYyNV9yYWlueS5qcGcnO1xuaW1wb3J0IHRodW5kZXJOaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtYW50b24ta3Vkcnlhc2hvdi05ODYxNDMyLmpwZyc7XG5pbXBvcnQgdGh1bmRlckRheSBmcm9tICcuL2ltZy9wZXhlbHMtdHN2ZXRvc2xhdi1ocmlzdG92LTI0OTk4NDYuanBnJztcbmltcG9ydCBjbG91ZERheSBmcm9tICcuL2ltZy9wZXhlbHMtcGl4YWJheS0xNTgxNjNfY2xvdWRzLmpwZyc7XG5pbXBvcnQgY2xvdWROaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtYnJldHQtc2F5bGVzLTM5MTAxNDEuanBnJztcbmltcG9ydCBzbm93RGF5IGZyb20gJy4vaW1nL3BleGVscy1waXhhYmF5LTI1OTY1OS5qcGcnO1xuaW1wb3J0IHNub3dOaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtbWFydGluLW1hcmlhbmktMzgwMTQ2My5qcGcnO1xuaW1wb3J0IGZvZ0RheSBmcm9tICcuL2ltZy9wZXhlbHMtYWxla3NhbmRyYS1ibGlub3ZhLTg2NTkyNTIuanBnJztcbmltcG9ydCBmb2dOaWdodCBmcm9tICcuL2ltZy9wZXhlbHMtcGl4YWJheS01MzEzNjAuanBnJztcbmltcG9ydCBtaXN0RGF5IGZyb20gJy4vaW1nL3BleGVscy1lYmVyaGFyZC1ncm9zc2dhc3RlaWdlci0xNzQzMzkyLmpwZyc7XG5pbXBvcnQgZ2V0Tm93VGltZSBmcm9tICcuL2dldE5vd1RpbWUnO1xuaW1wb3J0IGdldE5pZ2h0IGZyb20gJy4vZ2V0TmlnaHQnO1xuaW1wb3J0IHNldFVJY29sb3JzIGZyb20gJy4vc2V0VUljb2xvcnMnO1xuXG5jb25zdCBzZXRCYWNrZ3JvdW5kID0gKGJvZHksIHRpbWVOb3csIGN1cnJlbnRXZWF0aGVyLCBoYXNBbGVydHMpID0+IHtcbiAgY29uc29sZS5sb2coZ2V0Tm93VGltZSh0aW1lTm93KS5nZXRIb3VycygpLCBjdXJyZW50V2VhdGhlcik7XG5cbiAgLy8gY2hlY2tzIGlmIGNvbmdlcnRlZCB0aW1lem9uZSB0byBob3VycyBpcyBuaWdodFxuICBjb25zdCBuaWdodCA9IGdldE5pZ2h0KGdldE5vd1RpbWUodGltZU5vdykuZ2V0SG91cnMoKSk7XG5cbiAgLy8gc2FtZSBmb3IgYWxsIHBvc3NpYmlsaXRpZXNcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgLy8gYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2VcbiAgc3dpdGNoIChjdXJyZW50V2VhdGhlcikge1xuICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhclNreU5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2ZkZmJmYicsICcjZTU0NjI0JywgJyNmZmZmZmYyNScsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbGVhclNreURheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmN2Y0ZjQnLCAnI0ZERTA0NycsICcjMDgwODA4NGEnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUmFpbic6XG4gICAgY2FzZSAnRHJpenpsZSc6XG4gICAgICBpZiAobmlnaHQpIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmFpbk5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2ZkZmJmYicsICcjQkVGMjY0JywgJyMwNDA0MDRhYicsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWluRGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y4ZjhmOCcsICcjNjdlOGY5JywgJyMwNDA0MDQ1NicsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxuICAgICAgaWYgKG5pZ2h0KSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RodW5kZXJOaWdodH0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmZGZiZmInLCAnI0JFRjI2NCcsICcjMDQwNDA0YWInLCBoYXNBbGVydHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGh1bmRlckRheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmOGY4ZjgnLCAnIzY3ZThmOScsICcjMDQwNDA0NTYnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ2xvdWRzJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZE5pZ2h0fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI0ZERTA0NycsICcjMTBCOTgxJywgJyMyYzJiMmIzYicsIGhhc0FsZXJ0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjbG91ZERheX0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNmN2Y0ZjQnLCAnIzY3RThGOScsICcjMDgwODA4ODAnLCBoYXNBbGVydHMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRm9nJzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtmb2dOaWdodH0pYDtcbiAgICAgICAgc2V0VUljb2xvcnMoJyNGREUwNDcnLCAnIzEwQjk4MScsICcjMmMyYjJiM2InLCBoYXNBbGVydHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Zm9nRGF5fSlgO1xuICAgICAgICBzZXRVSWNvbG9ycygnI2Y3ZjRmNCcsICcjNjdFOEY5JywgJyMwODA4MDg4MCcsIGhhc0FsZXJ0cyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTbm93JzpcbiAgICAgIGlmIChuaWdodCkge1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbm93TmlnaHR9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjRkRFNjhBJywgJyM2NzJkY2InLCAnI2ZmZmZmZjI1JywgaGFzQWxlcnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Nub3dEYXl9KWA7XG4gICAgICAgIHNldFVJY29sb3JzKCcjZjdmNGY0JywgJyNGREUwNDcnLCAnIzA4MDgwODRhJywgaGFzQWxlcnRzKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ01pc3QnOlxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWlzdERheX0pYDtcbiAgICAgIHNldFVJY29sb3JzKCcjZjdmNGY0JywgJyNGREUwNDcnLCAnIzA4MDgwODRhJywgaGFzQWxlcnRzKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyYWluRGF5fSlgO1xuICAgICAgc2V0VUljb2xvcnMoJyNmOGY4ZjgnLCAnIzY3ZThmOScsICcjMDQwNDA0NTYnLCBoYXNBbGVydHMpO1xuICB9XG5cbiAgLy8gZm9nXG59O1xuZXhwb3J0IGRlZmF1bHQgc2V0QmFja2dyb3VuZDtcbiIsImNvbnN0IHNldFVJY29sb3JzID0gKGZvbnRDb2xvciwgc3ZnQ29sb3IsIHNlY3Rpb25CYWNrZ3JvdW5kLCBoYXNBbGVydHMpID0+IHtcbiAgY29uc3Qgc3ZncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIC8vIGl0ZW1zIHRvIGhhdmUgYmcgYXBwbGllZCB0bzpcbiAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodCcpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50V2VhdGhlcicpO1xuICBjb25zdCBzZWFyY2hBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEFyZWEnKTtcbiAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheUNvbnRhaW5lcicpO1xuICBjb25zdCBhbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRzJyk7XG5cbiAgLy8gcHVzaCB0aGVtIGFsbCBpbnRvIGFuIGFycmF5XG4gIGNvbnN0IGJnQXJyYXkgPSBbXTtcbiAgYmdBcnJheS5wdXNoKGhpZ2hsaWdodCwgY3VycmVudFdlYXRoZXIsIHNlYXJjaEFyZWEpO1xuICBkYXlDb250YWluZXIuZm9yRWFjaCgoZSkgPT4gYmdBcnJheS5wdXNoKGUpKTtcblxuICBpZiAoaGFzQWxlcnRzKSB7XG4gICAgYWxlcnRzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgYWxlcnRzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNlY3Rpb25CYWNrZ3JvdW5kO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgLy8gYXBwbHkgc3R5bGVzXG4gIGJvZHkuc3R5bGUuY29sb3IgPSBmb250Q29sb3I7XG4gIHN2Z3MuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGUuc3R5bGUuZmlsbCA9IHN2Z0NvbG9yO1xuICB9KTtcbiAgYmdBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWN0aW9uQmFja2dyb3VuZDtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRVSWNvbG9ycztcbiIsImltcG9ydCBjbGVhckljb24gZnJvbSAnLi9pbWcvaWNvbnMvd2VhdGhlci1zdW5ueS5zdmcnO1xuaW1wb3J0IHJhaW5JY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItcG91cmluZy5zdmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLWNsb3VkeS5zdmcnO1xuaW1wb3J0IG1vb25JY29uIGZyb20gJy4vaW1nL2ljb25zL3dlYXRoZXItbmlnaHQuc3ZnJztcbmltcG9ydCBzbm93SWNvbiBmcm9tICcuL2ltZy9pY29ucy9zbm93Zmxha2Uuc3ZnJztcbmltcG9ydCB0aHVuZGVySWNvbiBmcm9tICcuL2ltZy9pY29ucy93ZWF0aGVyLWxpZ2h0bmluZy5zdmcnO1xuaW1wb3J0IGdldE5vd1RpbWUgZnJvbSAnLi9nZXROb3dUaW1lJztcbmltcG9ydCBnZXROaWdodCBmcm9tICcuL2dldE5pZ2h0JztcblxuY29uc3Qgc2V0V2VhdGhlckljb24gPSAod2VhdGhlciwgdGltZSwgZnV0dXJlKSA9PiB7XG4gIC8vIGNvbnZlcnQgdG8gaG91cnMgdG8gY2hlY2sgbmlnaHRcbiAgY29uc3QgdGltZU5vdyA9IGdldE5vd1RpbWUodGltZSkuZ2V0SG91cnMoKTtcblxuICAvLyBuaWdodCBjaGVja1xuICBnZXROaWdodCh0aW1lTm93KTtcblxuICBzd2l0Y2ggKHdlYXRoZXIpIHtcbiAgICBjYXNlICdDbGVhcic6XG4gICAgICAvLyBmdXR1cmUgaXMgdXNlZCB0byBzaG93IGljb25zIG9uIGZvcmVjYXN0XG4gICAgICBpZiAoIWdldE5pZ2h0IHx8IGZ1dHVyZSkgcmV0dXJuIGNsZWFySWNvbjtcbiAgICAgIHJldHVybiBtb29uSWNvbjtcbiAgICBjYXNlICdSYWluJzpcbiAgICBjYXNlICdEcml6emxlJzpcbiAgICAgIHJldHVybiByYWluSWNvbjtcbiAgICBjYXNlICdUaHVuZGVyc3Rvcm0nOlxuICAgICAgcmV0dXJuIHRodW5kZXJJY29uO1xuICAgIGNhc2UgJ0Nsb3Vkcyc6XG4gICAgICByZXR1cm4gY2xvdWRJY29uO1xuICAgIGNhc2UgJ1Nub3cnOlxuICAgICAgcmV0dXJuIHNub3dJY29uO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZygnRGlmZmVyZW50IHdlYXRoZXIgZGV0ZWN0ZWQnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0V2VhdGhlckljb247XG4iLCJjb25zdCB2ZXJpZnlBbGVydHMgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGhhc0FsZXJ0cyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosICdhbGVydHMnKTtcbiAgcmV0dXJuIGhhc0FsZXJ0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeUFsZXJ0cztcbiIsImNvbnN0IHZlcmlmeVJhaW4gPSAob2JqKSA9PiB7XG4gIC8vIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL25vLXByb3RvdHlwZS1idWlsdGluc1xuICBjb25zdCBoYXNSYWluID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgJ3JhaW4nKTtcbiAgcmV0dXJuIGhhc1JhaW47XG59O1xuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5UmFpbjtcbiIsImNvbnN0IHZlcmlmeVNub3cgPSAob2JqKSA9PiB7XG4gIC8vIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL25vLXByb3RvdHlwZS1idWlsdGluc1xuICBjb25zdCBoYXNTbm93ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgJ3Nub3cnKTtcbiAgcmV0dXJuIGhhc1Nub3c7XG59O1xuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5U25vdztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXREb20gZnJvbSAnLi9nZXREb20nO1xuaW1wb3J0IGdldEV2ZW50TGlzdGVuZXJzIGZyb20gJy4vZ2V0RXZlbnRMaXN0ZW5lcnMnO1xuXG4vLyBkZWZhdWx0IGNhbXBpbmFzXG5nZXREb20oLTIyLjkwNTU2LCAtNDcuMDYwODMsICdDYW1waW5hcywgQlInLCAnQlInKTtcbmdldEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=