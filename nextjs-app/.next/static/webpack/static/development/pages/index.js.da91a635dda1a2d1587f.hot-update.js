webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Prices.js":
/*!**********************************!*\
  !*** ./src/components/Prices.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/mayur/Desktop/React/nextjs-app/src/components/Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Prices extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      currency: 'EUR'
    });
  }

  render() {
    let list = '';

    if (this.state.currency === 'USD') {
      list = __jsx("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Bitcoin rate for ", this.props.bpi.USD.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.bpi.USD.code), __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.bpi.USD.rate));
    } else if (this.state.currency === 'GBP') {
      list = __jsx("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Bitcoin rate for ", this.props.bpi.GBP.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.bpi.GBP.code), __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.bpi.GBP.rate));
    } else if (this.state.currency === 'EUR') {
      list = __jsx("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Bitcoin rate for ", this.props.bpi.EUR.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.bpi.EUR.code), __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.bpi.EUR.rate));
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("ul", {
      className: "list-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, list), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("select", {
      className: "form-control",
      onChange: e => this.setState({
        currency: e.target.value
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("option", {
      value: "USD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "USD"), __jsx("option", {
      value: "USD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "EUR"), __jsx("option", {
      value: "USD",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "GBP")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.da91a635dda1a2d1587f.hot-update.js.map