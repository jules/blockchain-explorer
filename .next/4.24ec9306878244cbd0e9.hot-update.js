webpackHotUpdate(4,{

/***/ "./components/BlockCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_web3__ = __webpack_require__("./scripts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_timeconverter__ = __webpack_require__("./scripts/timeconverter.js");

var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/components/BlockCard.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var BlockCard =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockCard, _Component);

  function BlockCard() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BlockCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BlockCard.__proto__ || Object.getPrototypeOf(BlockCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        txcount: 0,
        hash: '',
        timestamp: '',
        miner: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "tick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var blockinfo, txcount, hash, timestamp, miner, time;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlock(_this.props.currentBlock);

                case 2:
                  blockinfo = _context.sent;
                  _context.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlockTransactionCount(_this.props.currentBlock);

                case 5:
                  txcount = _context.sent;
                  hash = blockinfo.hash;
                  timestamp = blockinfo.timestamp;
                  miner = blockinfo.miner;
                  time = Object(__WEBPACK_IMPORTED_MODULE_4__scripts_timeconverter__["a" /* default */])(timestamp);

                  _this.setState({
                    txcount: txcount,
                    hash: hash,
                    timestamp: time,
                    miner: miner
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(BlockCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var Row = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Table */].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Table */].Cell;
      var currentBlock = this.props.currentBlock;

      if (currentBlock < 1) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, this.state.timestamp), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, currentBlock), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, this.state.hash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, this.state.txcount), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, this.state.miner));
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BlockCard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = BlockCard;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlockCard, "BlockCard", "/Users/julesdesmit/Desktop/workspace/explorer/components/BlockCard.js");
  reactHotLoader.register(_default, "default", "/Users/julesdesmit/Desktop/workspace/explorer/components/BlockCard.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
false,

/***/ "./node_modules/moment/locale/af.js":
false,

/***/ "./node_modules/moment/locale/ar-dz.js":
false,

/***/ "./node_modules/moment/locale/ar-kw.js":
false,

/***/ "./node_modules/moment/locale/ar-ly.js":
false,

/***/ "./node_modules/moment/locale/ar-ma.js":
false,

/***/ "./node_modules/moment/locale/ar-sa.js":
false,

/***/ "./node_modules/moment/locale/ar-tn.js":
false,

/***/ "./node_modules/moment/locale/ar.js":
false,

/***/ "./node_modules/moment/locale/az.js":
false,

/***/ "./node_modules/moment/locale/be.js":
false,

/***/ "./node_modules/moment/locale/bg.js":
false,

/***/ "./node_modules/moment/locale/bm.js":
false,

/***/ "./node_modules/moment/locale/bn.js":
false,

/***/ "./node_modules/moment/locale/bo.js":
false,

/***/ "./node_modules/moment/locale/br.js":
false,

/***/ "./node_modules/moment/locale/bs.js":
false,

/***/ "./node_modules/moment/locale/ca.js":
false,

/***/ "./node_modules/moment/locale/cs.js":
false,

/***/ "./node_modules/moment/locale/cv.js":
false,

/***/ "./node_modules/moment/locale/cy.js":
false,

/***/ "./node_modules/moment/locale/da.js":
false,

/***/ "./node_modules/moment/locale/de-at.js":
false,

/***/ "./node_modules/moment/locale/de-ch.js":
false,

/***/ "./node_modules/moment/locale/de.js":
false,

/***/ "./node_modules/moment/locale/dv.js":
false,

/***/ "./node_modules/moment/locale/el.js":
false,

/***/ "./node_modules/moment/locale/en-au.js":
false,

/***/ "./node_modules/moment/locale/en-ca.js":
false,

/***/ "./node_modules/moment/locale/en-gb.js":
false,

/***/ "./node_modules/moment/locale/en-ie.js":
false,

/***/ "./node_modules/moment/locale/en-il.js":
false,

/***/ "./node_modules/moment/locale/en-nz.js":
false,

/***/ "./node_modules/moment/locale/eo.js":
false,

/***/ "./node_modules/moment/locale/es-do.js":
false,

/***/ "./node_modules/moment/locale/es-us.js":
false,

/***/ "./node_modules/moment/locale/es.js":
false,

/***/ "./node_modules/moment/locale/et.js":
false,

/***/ "./node_modules/moment/locale/eu.js":
false,

/***/ "./node_modules/moment/locale/fa.js":
false,

/***/ "./node_modules/moment/locale/fi.js":
false,

/***/ "./node_modules/moment/locale/fo.js":
false,

/***/ "./node_modules/moment/locale/fr-ca.js":
false,

/***/ "./node_modules/moment/locale/fr-ch.js":
false,

/***/ "./node_modules/moment/locale/fr.js":
false,

/***/ "./node_modules/moment/locale/fy.js":
false,

/***/ "./node_modules/moment/locale/gd.js":
false,

/***/ "./node_modules/moment/locale/gl.js":
false,

/***/ "./node_modules/moment/locale/gom-latn.js":
false,

/***/ "./node_modules/moment/locale/gu.js":
false,

/***/ "./node_modules/moment/locale/he.js":
false,

/***/ "./node_modules/moment/locale/hi.js":
false,

/***/ "./node_modules/moment/locale/hr.js":
false,

/***/ "./node_modules/moment/locale/hu.js":
false,

/***/ "./node_modules/moment/locale/hy-am.js":
false,

/***/ "./node_modules/moment/locale/id.js":
false,

/***/ "./node_modules/moment/locale/is.js":
false,

/***/ "./node_modules/moment/locale/it.js":
false,

/***/ "./node_modules/moment/locale/ja.js":
false,

/***/ "./node_modules/moment/locale/jv.js":
false,

/***/ "./node_modules/moment/locale/ka.js":
false,

/***/ "./node_modules/moment/locale/kk.js":
false,

/***/ "./node_modules/moment/locale/km.js":
false,

/***/ "./node_modules/moment/locale/kn.js":
false,

/***/ "./node_modules/moment/locale/ko.js":
false,

/***/ "./node_modules/moment/locale/ky.js":
false,

/***/ "./node_modules/moment/locale/lb.js":
false,

/***/ "./node_modules/moment/locale/lo.js":
false,

/***/ "./node_modules/moment/locale/lt.js":
false,

/***/ "./node_modules/moment/locale/lv.js":
false,

/***/ "./node_modules/moment/locale/me.js":
false,

/***/ "./node_modules/moment/locale/mi.js":
false,

/***/ "./node_modules/moment/locale/mk.js":
false,

/***/ "./node_modules/moment/locale/ml.js":
false,

/***/ "./node_modules/moment/locale/mn.js":
false,

/***/ "./node_modules/moment/locale/mr.js":
false,

/***/ "./node_modules/moment/locale/ms-my.js":
false,

/***/ "./node_modules/moment/locale/ms.js":
false,

/***/ "./node_modules/moment/locale/mt.js":
false,

/***/ "./node_modules/moment/locale/my.js":
false,

/***/ "./node_modules/moment/locale/nb.js":
false,

/***/ "./node_modules/moment/locale/ne.js":
false,

/***/ "./node_modules/moment/locale/nl-be.js":
false,

/***/ "./node_modules/moment/locale/nl.js":
false,

/***/ "./node_modules/moment/locale/nn.js":
false,

/***/ "./node_modules/moment/locale/pa-in.js":
false,

/***/ "./node_modules/moment/locale/pl.js":
false,

/***/ "./node_modules/moment/locale/pt-br.js":
false,

/***/ "./node_modules/moment/locale/pt.js":
false,

/***/ "./node_modules/moment/locale/ro.js":
false,

/***/ "./node_modules/moment/locale/ru.js":
false,

/***/ "./node_modules/moment/locale/sd.js":
false,

/***/ "./node_modules/moment/locale/se.js":
false,

/***/ "./node_modules/moment/locale/si.js":
false,

/***/ "./node_modules/moment/locale/sk.js":
false,

/***/ "./node_modules/moment/locale/sl.js":
false,

/***/ "./node_modules/moment/locale/sq.js":
false,

/***/ "./node_modules/moment/locale/sr-cyrl.js":
false,

/***/ "./node_modules/moment/locale/sr.js":
false,

/***/ "./node_modules/moment/locale/ss.js":
false,

/***/ "./node_modules/moment/locale/sv.js":
false,

/***/ "./node_modules/moment/locale/sw.js":
false,

/***/ "./node_modules/moment/locale/ta.js":
false,

/***/ "./node_modules/moment/locale/te.js":
false,

/***/ "./node_modules/moment/locale/tet.js":
false,

/***/ "./node_modules/moment/locale/tg.js":
false,

/***/ "./node_modules/moment/locale/th.js":
false,

/***/ "./node_modules/moment/locale/tl-ph.js":
false,

/***/ "./node_modules/moment/locale/tlh.js":
false,

/***/ "./node_modules/moment/locale/tr.js":
false,

/***/ "./node_modules/moment/locale/tzl.js":
false,

/***/ "./node_modules/moment/locale/tzm-latn.js":
false,

/***/ "./node_modules/moment/locale/tzm.js":
false,

/***/ "./node_modules/moment/locale/ug-cn.js":
false,

/***/ "./node_modules/moment/locale/uk.js":
false,

/***/ "./node_modules/moment/locale/ur.js":
false,

/***/ "./node_modules/moment/locale/uz-latn.js":
false,

/***/ "./node_modules/moment/locale/uz.js":
false,

/***/ "./node_modules/moment/locale/vi.js":
false,

/***/ "./node_modules/moment/locale/x-pseudo.js":
false,

/***/ "./node_modules/moment/locale/yo.js":
false,

/***/ "./node_modules/moment/locale/zh-cn.js":
false,

/***/ "./node_modules/moment/locale/zh-hk.js":
false,

/***/ "./node_modules/moment/locale/zh-tw.js":
false,

/***/ "./node_modules/moment/moment.js":
false,

/***/ "./scripts/timeconverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

timeConverter = function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
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

  reactHotLoader.register(_default, "default", "/Users/julesdesmit/Desktop/workspace/explorer/scripts/timeconverter.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.24ec9306878244cbd0e9.hot-update.js.map