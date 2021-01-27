webpackHotUpdate_N_E("pages/quiz",{

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuizPage; });
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













function QuizPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var route = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log(_db_json__WEBPACK_IMPORTED_MODULE_4__.questions);
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_4__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Pergunta 1 de ", "".concat(_db_json__WEBPACK_IMPORTED_MODULE_4__.questions.length))), __jsx("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQ1ic9gtjv8jKVAUXX0wn5vGBWePw4S5QdA&usqp=CAU",
    style: {
      width: '400px',
      height: '150px',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 47,
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
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Jogar ".concat(name))))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Folks quizzes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }));
}

_s(QuizPage, "XczHT2lJRKyOxX7votjCL35dmeg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = QuizPage;

var _c;

$RefreshReg$(_c, "QuizPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJRdWl6UGFnZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZSIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJkYiIsInF1ZXN0aW9ucyIsImJnIiwibGVuZ3RoIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNUQyxzREFBUSxDQUFDLEVBQUQsQ0FEQztBQUFBLE1BQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxPQURvQjs7QUFHakMsTUFBTUMsS0FBSyxHQUFHQyw2REFBUyxFQUF2QjtBQUVEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMscUNBQUUsQ0FBQ0MsU0FBZjtBQUNDLFNBQ0UsTUFBQyxzRUFBRDtBQUFnQixtQkFBZSxFQUFFRCxxQ0FBRSxDQUFDRSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBSUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDc0JGLHFDQUFFLENBQUNDLFNBQUgsQ0FBYUUsTUFEbkMsRUFERixDQUZGLEVBUUg7QUFDQyxPQUFHLEVBQUMscUdBREw7QUFFQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFLE9BREQ7QUFFTkMsWUFBTSxFQUFFLE9BRkY7QUFHTkMsZUFBUyxFQUFFO0FBSEwsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkcsRUFpQkUsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1kLElBQUksR0FBRyxNQUFiO0FBQ0FFLFdBQUssQ0FBQ2EsSUFBTixzQkFBeUJmLElBQXpCO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxLQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDhEQUFEO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFXLEVBQUMscUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxhQUFPWixPQUFPLENBQUNZLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUhaO0FBSUUsU0FBSyxFQUFFakIsSUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFZRSxNQUFDLCtEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFFQSxJQUFJLENBQUNTLE1BQUwsS0FBZ0IsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWVQsSUFEWixFQVpGLENBREYsQ0FqQkYsQ0FGRixFQXdDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEYsQ0FERixDQXhDRixFQStDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsQ0FKRixFQXFERSxNQUFDLG9FQUFEO0FBQWMsY0FBVSxFQUFDLDhCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRGLENBREY7QUF5REQ7O0dBL0R1QkYsUTtVQUdSSyxxRDs7O0tBSFFMLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVpei43OTA1MjllNTRkZGEwNzQ1ZTI2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXInO1xyXG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnO1xyXG5pbXBvcnQgUXVpekxvZ28gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekxvZ28nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSW5wdXQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBRdWl6Q29udGFpbmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpDb250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhkYi5xdWVzdGlvbnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5XaG8gaXMgUXVpejwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgPFF1aXpMb2dvIC8+XHJcbiAgICAgICAgPFdpZGdldD5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgUGVyZ3VudGEgMSBkZSB7YCR7ZGIucXVlc3Rpb25zLmxlbmd0aH1gfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdDxpbWcgXHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1F0UTFpYzlndGp2OGpLVkFVWFgwd241dkdCV2VQdzRTNVFkQSZ1c3FwPUNBVVwiXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc0MDBweCcsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogJ2NvdmVyJ1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJ0NhcmwnO1xyXG4gICAgICAgICAgICAgIHJvdXRlLnB1c2goYC9xdWl6P25hbWU9JHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXRpbmcnKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsbCB5b3VyIG5hbWUgaGVyZVwiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e25hbWUubGVuZ3RoID09PSAwfT5cclxuICAgICAgICAgICAgICAgIHtgSm9nYXIgJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG5cclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8aDE+Rm9sa3MgcXVpenplczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5EbyB5b3Uga25vdyB3aG8gaXMuLi4/PC9wPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxvc2hyZlwiIC8+XHJcbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9