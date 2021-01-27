webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");


var _jsxFileName = "C:\\projetos\\whoisquiz\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  max-width: 350px;\n  padding-top: 45px;\n  margin: auto 10%;\n  @media screen and (max-width: 500px) {\n    margin: auto;\n    padding: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = QuizContainer;
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_9__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_5__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Who is?")), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var name = 'Carl';
      route.push("/quiz?name=".concat(name));
      console.log('Submiting');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_src_components_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "userName",
    placeholder: "Fill your name here",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Jogar ", name)))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }));
}

_s(Home, "XczHT2lJRKyOxX7votjCL35dmeg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "QuizContainer");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  border: 0;\n  width: 100%;\n  padding: 10px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1;\n  text-transform: uppercase;\n  outline: 0;\n  transition: .3s;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  &:disabled {\n    background-color: #979797;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contrastText;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius;
});
Button.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['submit', 'type', 'button']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJRdWl6Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZSIsInVzZVJvdXRlciIsImRiIiwiYmciLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiQnV0dG9uIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJib3JkZXJSYWRpdXMiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiY2hpbGRyZW4iLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQVdFLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBRzdCLE1BQU1DLEtBQUssR0FBR0MsNkRBQVMsRUFBdkI7QUFFQSxTQUNFLE1BQUMsc0VBQUQ7QUFBZ0IsbUJBQWUsRUFBRUMscUNBQUUsQ0FBQ0MsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFB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QyxVQURuQztBQUVqQkMsVUFBUSxFQUFFSCxpREFBUyxDQUFDSSxJQUFWLENBQWVGO0FBRlIsQ0FBbkI7QUFLZVgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTE2ZjFmYjhlZGVmYzBhMjZmYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgbWFyZ2luOiBhdXRvIDEwJTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldobyBpcyBRdWl6PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICA8V2lkZ2V0PlxyXG5cclxuICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8aDE+V2hvIGlzPzwvaDE+XHJcbiAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICdDYXJsJztcclxuICAgICAgICAgICAgICByb3V0ZS5wdXNoKGAvcXVpej9uYW1lPSR7bmFtZX1gKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VibWl0aW5nJyk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbGwgeW91ciBuYW1lIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XHJcbiAgICAgICAgICAgICAgICBKb2dhciB7bmFtZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuXHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcblxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5Gb2xrcyBxdWl6emVzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxwPkRvIHlvdSBrbm93IHdobyBpcy4uLj88L3A+XHJcbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vY2FybG9zaHJmXCIgLz5cclxuICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29udHJhc3RUZXh0fTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlclJhZGl1c307XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuYDtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VibWl0JywgJ3R5cGUnLCAnYnV0dG9uJ10pLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==