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
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Who is?")), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_src_components_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "userName",
    placeholder: "Fill your name here",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Jogar ", name)))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUXVpekNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhvbWUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGUiLCJ1c2VSb3V0ZXIiLCJkYiIsImJnIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0tBQU1GLGE7QUFXRSxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUc3QixNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBRUEsU0FDRSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVDLHFDQUFFLENBQUNDLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUZGLEVBTUUsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1QLElBQUksR0FBRyxNQUFiO0FBQ0FFLFdBQUssQ0FBQ00sSUFBTixzQkFBeUJSLElBQXpCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxLQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDhEQUFEO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFXLEVBQUMscUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNKLENBQUQ7QUFBQSxhQUFPTCxPQUFPLENBQUNLLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVdFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFFWixJQUFJLENBQUNhLE1BQUwsS0FBZ0IsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNTYixJQURULENBWEYsQ0FERixDQU5GLENBRkYsRUE0QkUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhGLENBREYsQ0E1QkYsRUFtQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLENBSkYsRUF5Q0UsTUFBQyxvRUFBRDtBQUFjLGNBQVUsRUFBQyw4QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDRixDQURGO0FBNkNEOztHQWxEdUJGLEk7VUFHUksscUQ7OztNQUhRTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcxZmVjZjQyNDJiMWRmNmU5ZjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9JbnB1dCc7XHJcblxyXG5leHBvcnQgY29uc3QgUXVpekNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW46IGF1dG8gMTAlO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+V2hvIGlzIFF1aXo8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxRdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgIDxXaWRnZXQ+XHJcblxyXG4gICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxoMT5XaG8gaXM/PC9oMT5cclxuICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJ0NhcmwnO1xyXG4gICAgICAgICAgICAgIHJvdXRlLnB1c2goYC9xdWl6P25hbWU9JHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXRpbmcnKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsbCB5b3VyIG5hbWUgaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XHJcbiAgICAgICAgICAgICAgICBKb2dhciB7bmFtZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuXHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcblxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5Gb2xrcyBxdWl6emVzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxwPkRvIHlvdSBrbm93IHdobyBpcy4uLj88L3A+XHJcbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9RdWl6Q29udGFpbmVyPlxyXG4gICAgICA8R2l0SHViQ29ybmVyIHByb2plY3RVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vY2FybG9zaHJmXCIgLz5cclxuICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9