webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/QuizContainer */ "./src/components/QuizContainer/index.js");
var _jsxFileName = "C:\\projetos\\whoisquiz\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_4__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Who is?")), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_src_components_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "userName",
    placeholder: "Fill your name here",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    value: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Jogar ".concat(name))))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
}

_s(Home, "XczHT2lJRKyOxX7votjCL35dmeg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./src/components/QuizContainer/index.js":
/*!***********************************************!*\
  !*** ./src/components/QuizContainer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  max-width: 350px;\n  padding-top: 45px;\n  margin: auto 10%;\n  @media screen and (max-width: 500px) {\n    margin: auto;\n    padding: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (QuizContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZSIsInVzZVJvdXRlciIsImRiIiwiYmciLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiUXVpekNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUc3QixNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBRUEsU0FDRSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVDLHFDQUFFLENBQUNDLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FGRixFQU1FLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ3JCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNUCxJQUFJLEdBQUcsTUFBYjtBQUNBRSxXQUFLLENBQUNNLElBQU4sc0JBQXlCUixJQUF6QjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsS0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw4REFBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSixDQUFEO0FBQUEsYUFBT0wsT0FBTyxDQUFDSyxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsS0FIWjtBQUlFLFNBQUssRUFBRVosSUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRSxNQUFDLCtEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFFQSxJQUFJLENBQUNhLE1BQUwsS0FBZ0IsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWWIsSUFEWixFQVpGLENBREYsQ0FORixDQUZGLEVBNkJFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFIRixDQURGLENBN0JGLEVBb0NFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixDQUpGLEVBMENFLE1BQUMsb0VBQUQ7QUFBYyxjQUFVLEVBQUMsOEJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0YsQ0FERjtBQThDRDs7R0FuRHVCRixJO1VBR1JLLHFEOzs7S0FIUUwsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z4QjtBQUVBLElBQU1nQixhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0FBV2VGLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzMDA4ZTlkYWY5Y2M3Y2UwYTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldobyBpcyBRdWl6PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICA8V2lkZ2V0PlxyXG5cclxuICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8aDE+V2hvIGlzPzwvaDE+XHJcbiAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICdDYXJsJztcclxuICAgICAgICAgICAgICByb3V0ZS5wdXNoKGAvcXVpej9uYW1lPSR7bmFtZX1gKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VibWl0aW5nJyk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbGwgeW91ciBuYW1lIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XHJcbiAgICAgICAgICAgICAgICB7YEpvZ2FyICR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG5cclxuICAgICAgICA8L1dpZGdldD5cclxuXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPGgxPkZvbGtzIHF1aXp6ZXM8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+RG8geW91IGtub3cgd2hvIGlzLi4uPzwvcD5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsb3NocmZcIiAvPlxyXG4gICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUXVpekNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW46IGF1dG8gMTAlO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXpDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==