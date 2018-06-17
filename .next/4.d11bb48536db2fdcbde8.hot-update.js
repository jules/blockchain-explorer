webpackHotUpdate(4,{

/***/ "./scripts/timeconverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var timeConverter = function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  if (hour == 0) {
    hour = '00';
  } else if (hour < 10) {
    hour = '0' + hour;
  }

  if (min == 0) {
    min = '00';
  } else if (min < 10) {
    min = '0' + min;
  }

  if (sec == 0) {
    sec = '00';
  } else if (sec < 10) {
    sec = '0' + sec;
  }

  var time = hour + ':' + min + ':' + sec;
  return time;
};

var _default = timeConverter;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(timeConverter, "timeConverter", "/Users/julesdesmit/Desktop/workspace/explorer/scripts/timeconverter.js");
  reactHotLoader.register(_default, "default", "/Users/julesdesmit/Desktop/workspace/explorer/scripts/timeconverter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.d11bb48536db2fdcbde8.hot-update.js.map