module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlockCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_web3__ = __webpack_require__("./scripts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts_timeconverter__ = __webpack_require__("./scripts/timeconverter.js");

var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/components/BlockCard.js";

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
                if (false) {
                  _context.next = 19;
                  break;
                }

                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlock(this.props.currentBlock);

              case 3:
                blockinfo = _context.sent;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlockTransactionCount(this.props.currentBlock);

              case 6:
                txcount = _context.sent;
                hash = blockinfo.hash;
                timestamp = blockinfo.timestamp;
                miner = blockinfo.miner;
                time = Object(__WEBPACK_IMPORTED_MODULE_4__scripts_timeconverter__["a" /* default */])(timestamp);

                if (!(typeof txcount != 'integer')) {
                  _context.next = 16;
                  break;
                }

                this.setState({
                  txcount: txcount,
                  hash: hash,
                  timestamp: time,
                  miner: miner
                });
                return _context.abrupt("break", 19);

              case 16:
                return _context.abrupt("continue", 0);

              case 17:
                _context.next = 0;
                break;

              case 19:
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
      var Row = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Row,
          Cell = __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Table"].Cell;
      var currentBlock = this.props.currentBlock;

      if (currentBlock < 1) {
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
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, this.state.timestamp), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, currentBlock), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, this.state.hash), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, this.state.txcount), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, this.state.miner));
      }
    }
  }]);

  return BlockCard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BlockCard);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/components/Header.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
    style: {
      marginTop: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Eth block explorer")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "+"))));
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/components/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), props.children);
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_web3__ = __webpack_require__("./scripts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockCard__ = __webpack_require__("./components/BlockCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);

var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var ExplorerIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(ExplorerIndex, _Component);

  function ExplorerIndex(props) {
    var _this;

    _classCallCheck(this, ExplorerIndex);

    _this = _possibleConstructorReturn(this, (ExplorerIndex.__proto__ || Object.getPrototypeOf(ExplorerIndex)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        blockNumber: 0,
        initialNumber: 0,
        blocksFound: 0,
        found: false
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "tick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var number, difference;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlockNumber();

                case 2:
                  number = _context.sent;

                  if (number > _this.state.blockNumber) {
                    if (number != _this.state.blockNumber) {
                      if (_this.state.initialNumber == 0) {
                        _this.setState({
                          blockNumber: number,
                          initialNumber: number
                        });
                      } else {
                        _this.setState({
                          blockNumber: number
                        });
                      }

                      difference = _this.state.blockNumber - _this.state.initialNumber;

                      _this.setState({
                        blocksFound: difference
                      });

                      if (_this.state.blocksFound > 0) {
                        _this.setState({
                          found: true
                        });
                      }
                    }
                  }

                case 4:
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
    });

    _this.tick();

    return _this;
  }

  _createClass(ExplorerIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var Header = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Table"].Header,
          Row = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Table"].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Table"].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Table"].Body;

      if (this.state.blockNumber == 0) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        });
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__routes__["Link"], {
          route: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Button"], {
          fluid: true,
          disabled: !this.state.found,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, this.state.blocksFound, " blocks found since your last refresh"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, "Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, "Block #"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, "Block hash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, "Tx count"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, "Miner"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 9,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        })))));
      }
    }
  }]);

  return ExplorerIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ExplorerIndex);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/:address', '/address').add('/:transaction', '/transaction').add('/:blocknumber', '/blocknumber').add('/:blockhash', '/blockhash');
module.exports = routes;

/***/ }),

/***/ "./scripts/timeconverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (timeConverter);

/***/ }),

/***/ "./scripts/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);

var web3;
var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider('https://mainnet.infura.io/4ZoLLml9XXVHP5lACppc');
web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map