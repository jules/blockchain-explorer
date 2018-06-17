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

                  if (number < _this.state.blockNumber || _this.state.blockNumber == 0) {
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
      var Header = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Table */].Body;

      if (this.state.blockNumber == 0) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        });
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */], {
          fluid: true,
          disabled: !this.state.found,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, this.state.blocksFound, " blocks found since your last refresh"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["d" /* Table */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Block #"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Block hash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, "Tx count"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, "Miner"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
          currentBlock: this.state.initialNumber - 9,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
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
//# sourceMappingURL=4.4dd713df332b589f769f.hot-update.js.map