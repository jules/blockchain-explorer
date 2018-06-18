webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_web3__ = __webpack_require__("./scripts/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockCard__ = __webpack_require__("./components/BlockCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);

var _jsxFileName = "/Users/julesdesmit/Desktop/workspace/explorer/pages/index.js";

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
        found: false,
        search: '',
        errorMessage: ''
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
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(event) {
          var message, _message, block, _message2;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  event.preventDefault();

                  if (!(_this.state.search.length == 66)) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.prev = 2;
                  _context2.next = 5;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getTransaction(_this.state.search);

                case 5:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/transaction/".concat(_this.state.search), {}, {
                    txhash: _this.state.search
                  });
                  _context2.next = 12;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](2);
                  message = _context2.t0.message;

                  _this.setState({
                    errorMessage: message
                  });

                case 12:
                  _context2.next = 38;
                  break;

                case 14:
                  if (!(_this.state.search.length == 42)) {
                    _context2.next = 27;
                    break;
                  }

                  _context2.prev = 15;
                  _context2.next = 18;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBalance();

                case 18:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/address/".concat(_this.state.search), {}, {
                    address: _this.state.search
                  });
                  _context2.next = 25;
                  break;

                case 21:
                  _context2.prev = 21;
                  _context2.t1 = _context2["catch"](15);
                  _message = _context2.t1.message;

                  _this.setState({
                    errorMessage: _message
                  });

                case 25:
                  _context2.next = 38;
                  break;

                case 27:
                  _context2.prev = 27;
                  block = parseInt(_this.state.search);
                  _context2.next = 31;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlock(block);

                case 31:
                  __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/blocknumber/".concat(_this.state.search), {}, {
                    bnumber: block
                  });
                  _context2.next = 38;
                  break;

                case 34:
                  _context2.prev = 34;
                  _context2.t2 = _context2["catch"](27);
                  _message2 = _context2.t2.message;

                  _this.setState({
                    errorMessage: _message2
                  });

                case 38:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 8], [15, 21], [27, 34]]);
        }));

        return function value(_x) {
          return _value2.apply(this, arguments);
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
    key: "onClick",
    value: function onClick() {
      __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute("/");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Header = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Table */].Body;

      if (this.state.blockNumber == 0) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        });
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Container */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Form */], {
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Form */].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Input */], {
          fluid: true,
          icon: "search",
          placeholder: "Enter address, tx hash or block number...",
          value: this.state.search,
          onChange: function onChange(event) {
            return _this3.setState({
              search: event.target.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["f" /* Message */], {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
          fluid: true,
          disabled: !this.state.found,
          onClick: this.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, this.state.blocksFound, " new blocks found since you last loaded this page"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["g" /* Table */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, "Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "Block #"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, "Block hash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "Tx count"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, "Miner"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 9,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        })))));
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

  return ExplorerIndex;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ExplorerIndex;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExplorerIndex, "ExplorerIndex", "/Users/julesdesmit/Desktop/workspace/explorer/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/julesdesmit/Desktop/workspace/explorer/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.212e6bcf2b1ae21904b9.hot-update.js.map