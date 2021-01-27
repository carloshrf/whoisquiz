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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Who is?")), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("input", {
    placeholder: "Fill your name here",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Jogar ", name)))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUXVpekNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhvbWUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGUiLCJ1c2VSb3V0ZXIiLCJkYiIsImJnIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0tBQU1GLGE7QUFXRSxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUc3QixNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBRUEsU0FDRSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVDLHFDQUFFLENBQUNDLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw4REFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUZGLEVBTUUsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1QLElBQUksR0FBRyxNQUFiO0FBQ0FFLFdBQUssQ0FBQ00sSUFBTixzQkFBeUJSLElBQXpCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxLQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLGVBQVcsRUFBQyxxQkFEZDtBQUVFLFlBQVEsRUFBRSxrQkFBQ0osQ0FBRDtBQUFBLGFBQU9MLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBVUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFRLEVBQUVaLElBQUksQ0FBQ2EsTUFBTCxLQUFnQixDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ1NiLElBRFQsQ0FWRixDQURGLENBTkYsQ0FGRixFQTJCRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEYsQ0FERixDQTNCRixFQWtDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsQ0FKRixFQXdDRSxNQUFDLG9FQUFEO0FBQWMsY0FBVSxFQUFDLDhCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGLENBREY7QUE0Q0Q7O0dBakR1QkYsSTtVQUdSSyxxRDs7O01BSFFMLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzk4ZGM0YTkzMTBiYjEwNWJkODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuXHJcbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbjogYXV0byAxMCU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5XaG8gaXMgUXVpejwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgPFF1aXpMb2dvIC8+XHJcbiAgICAgICAgPFdpZGdldD5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGgxPldobyBpcz88L2gxPlxyXG4gICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAnQ2FybCc7XHJcbiAgICAgICAgICAgICAgcm91dGUucHVzaChgL3F1aXo/bmFtZT0ke25hbWV9YCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Ym1pdGluZycpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbGwgeW91ciBuYW1lIGhlcmVcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17bmFtZS5sZW5ndGggPT09IDB9PlxyXG4gICAgICAgICAgICAgICAgSm9nYXIge25hbWV9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG5cclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8aDE+Rm9sa3MgcXVpenplczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5EbyB5b3Uga25vdyB3aG8gaXMuLi4/PC9wPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxvc2hyZlwiIC8+XHJcbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==