webpackHotUpdate_N_E("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quiz; });
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
var _jsxFileName = "C:\\projetos\\whoisquiz\\pages\\quiz.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Quiz() {
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
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Pergunta 1 de ", "".concat(_db_json__WEBPACK_IMPORTED_MODULE_4__.questions.length))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
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
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Jogar ".concat(name))))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
}

_s(Quiz, "XczHT2lJRKyOxX7votjCL35dmeg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Quiz;

var _c;

$RefreshReg$(_c, "Quiz");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJRdWl6IiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInJvdXRlIiwidXNlUm91dGVyIiwiZGIiLCJiZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLEVBQUQsQ0FESDtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFHN0IsTUFBTUMsS0FBSyxHQUFHQyw2REFBUyxFQUF2QjtBQUVBLFNBQ0UsTUFBQyxzRUFBRDtBQUFnQixtQkFBZSxFQUFFQyxxQ0FBRSxDQUFDQyxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBSUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDc0JELHFDQUFFLENBQUNFLFNBQUgsQ0FBYUMsTUFEbkMsRUFERixDQUZGLEVBUUUsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1ULElBQUksR0FBRyxNQUFiO0FBQ0FFLFdBQUssQ0FBQ1EsSUFBTixzQkFBeUJWLElBQXpCO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxLQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDhEQUFEO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFXLEVBQUMscUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNKLENBQUQ7QUFBQSxhQUFPUCxPQUFPLENBQUNPLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUhaO0FBSUUsU0FBSyxFQUFFZCxJQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVlFLE1BQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFRLEVBQUVBLElBQUksQ0FBQ08sTUFBTCxLQUFnQixDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNZUCxJQURaLEVBWkYsQ0FERixDQVJGLENBRkYsRUErQkUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhGLENBREYsQ0EvQkYsRUFzQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdENGLENBSkYsRUE0Q0UsTUFBQyxvRUFBRDtBQUFjLGNBQVUsRUFBQyw4QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRixDQURGO0FBZ0REOztHQXJEdUJGLEk7VUFHUksscUQ7OztLQUhRTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouNGQ1NzAzNzgyYmNjMGIyNWRjOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgUXVpekNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+V2hvIGlzIFF1aXo8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxRdWl6Q29udGFpbmVyPlxyXG4gICAgICAgIDxRdWl6TG9nbyAvPlxyXG4gICAgICAgIDxXaWRnZXQ+XHJcblxyXG4gICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIFBlcmd1bnRhIDEgZGUge2Ake2RiLnF1ZXN0aW9ucy5sZW5ndGh9YH1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJ0NhcmwnO1xyXG4gICAgICAgICAgICAgIHJvdXRlLnB1c2goYC9xdWl6P25hbWU9JHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXRpbmcnKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsbCB5b3VyIG5hbWUgaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfT5cclxuICAgICAgICAgICAgICAgIHtgSm9nYXIgJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG5cclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8aDE+Rm9sa3MgcXVpenplczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5EbyB5b3Uga25vdyB3aG8gaXMuLi4/PC9wPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxvc2hyZlwiIC8+XHJcbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9