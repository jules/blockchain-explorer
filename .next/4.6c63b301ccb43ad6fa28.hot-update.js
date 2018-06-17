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
        blockNumber: 0
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
          var number;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_2__scripts_web3__["a" /* default */].eth.getBlockNumber();

                case 2:
                  number = _context.sent;

                  if (!(number != _this.state.blockNumber)) {
                    _context.next = 7;
                    break;
                  }

                  _this.setState({
                    blockNumber: number
                  });

                  _context.next = 9;
                  break;

                case 7:
                  if (!(number < _this.state.blockNumber)) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return");

                case 9:
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
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var Header = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Table */].Header,
          Row = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Table */].Row,
          HeaderCell = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Table */].HeaderCell,
          Body = __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Table */].Body;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Last block found ", this.state.seconds, "s ago"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["c" /* Table */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Block #"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Block hash"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Tx count"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Miner"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockCard__["a" /* default */], {
        currentBlock: this.state.blockNumber - 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })))));
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
//# sourceMappingURL=4.6c63b301ccb43ad6fa28.hot-update.js.map