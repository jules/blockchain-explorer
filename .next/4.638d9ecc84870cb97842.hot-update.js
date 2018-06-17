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
    }), _temp));
  }

  _createClass(BlockCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var blockinfo, txcount, hash, timestamp, miner, time;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlock(this.props.currentBlock);

              case 2:
                blockinfo = _context.sent;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlockTransactionCount(this.props.currentBlock);

              case 5:
                txcount = _context.sent;
                hash = blockinfo.hash;
                timestamp = blockinfo.timestamp;
                miner = blockinfo.miner;
                time = Object(__WEBPACK_IMPORTED_MODULE_4__scripts_timeconverter__["a" /* default */])(timestamp);
                this.setState({
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

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
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
            lineNumber: 27
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, this.state.timestamp), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, currentBlock), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, this.state.hash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, this.state.txcount), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
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

/***/ })

})
//# sourceMappingURL=4.638d9ecc84870cb97842.hot-update.js.map