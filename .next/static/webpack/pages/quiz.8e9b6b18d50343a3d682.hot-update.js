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
  var question = _db_json__WEBPACK_IMPORTED_MODULE_4__.questions[0];
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_4__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Who is Quiz")), __jsx(_src_components_QuizContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 38,
      columnNumber: 6
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, question.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, question.description), __jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    disabled: name.length === 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Jogar ".concat(name)))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
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
  }, "Do you know who is...?"))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/carloshrf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJRdWl6UGFnZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZSIsInVzZVJvdXRlciIsInF1ZXN0aW9uIiwiZGIiLCJxdWVzdGlvbnMiLCJiZyIsImxlbmd0aCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLENBQUMsRUFBRCxDQURDO0FBQUEsTUFDMUJDLElBRDBCO0FBQUEsTUFDcEJDLE9BRG9COztBQUdqQyxNQUFNQyxLQUFLLEdBQUdDLDZEQUFTLEVBQXZCO0FBRUQsTUFBTUMsUUFBUSxHQUFHQyxxQ0FBRSxDQUFDQyxTQUFILENBQWEsQ0FBYixDQUFqQjtBQUVDLFNBQ0UsTUFBQyxzRUFBRDtBQUFnQixtQkFBZSxFQUFFRCxxQ0FBRSxDQUFDRSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLEVBSUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDhEQUFELENBQVEsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDc0JGLHFDQUFFLENBQUNDLFNBQUgsQ0FBYUUsTUFEbkMsRUFERixDQUZGLEVBUUg7QUFDQyxPQUFHLEVBQUMscUdBREw7QUFFQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFLE9BREQ7QUFFTkMsWUFBTSxFQUFFLE9BRkY7QUFHTkMsZUFBUyxFQUFFO0FBSEwsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkcsRUFpQkUsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVAsUUFBUSxDQUFDUSxLQURYLENBREksRUFLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VSLFFBQVEsQ0FBQ1MsV0FEWCxDQUxJLEVBU0osTUFBQywrREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBRWIsSUFBSSxDQUFDUSxNQUFMLEtBQWdCLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1dSLElBRFgsRUFUSSxDQWpCRixDQUZGLEVBbUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFIRixDQURGLENBbkNGLEVBMENFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFDRixDQUpGLEVBZ0RFLE1BQUMsb0VBQUQ7QUFBYyxjQUFVLEVBQUMsOEJBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREYsQ0FERjtBQW9ERDs7R0EzRHVCRixRO1VBR1JLLHFEOzs7S0FIUUwsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWl6LjhlOWI2YjE4ZDUwMzQzYTNkNjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnLi4vZGIuanNvbic7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcic7XHJcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCc7XHJcbmltcG9ydCBRdWl6TG9nbyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nbyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IFF1aXpDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6UGFnZSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHF1ZXN0aW9uID0gZGIucXVlc3Rpb25zWzBdO1xyXG5cdFxyXG4gIHJldHVybiAoXHJcbiAgICA8UXVpekJhY2tncm91bmQgYmFja2dyb3VuZEltYWdlPXtkYi5iZ30+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5XaG8gaXMgUXVpejwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFF1aXpDb250YWluZXI+XHJcbiAgICAgICAgPFF1aXpMb2dvIC8+XHJcbiAgICAgICAgPFdpZGdldD5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgUGVyZ3VudGEgMSBkZSB7YCR7ZGIucXVlc3Rpb25zLmxlbmd0aH1gfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9XaWRnZXQuSGVhZGVyPlxyXG5cclxuXHRcdFx0XHRcdDxpbWcgXHJcblx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1F0UTFpYzlndGp2OGpLVkFVWFgwd241dkdCV2VQdzRTNVFkQSZ1c3FwPUNBVVwiXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICc0MDBweCcsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogJ2NvdmVyJ1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdFx0XHR7cXVlc3Rpb24udGl0bGV9XHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHR7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XHJcblx0XHRcdFx0XHRcdFx0e2BKb2dhciAke25hbWV9YH1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L1dpZGdldC5Db250ZW50PlxyXG5cclxuICAgICAgICA8L1dpZGdldD5cclxuXHJcbiAgICAgICAgPFdpZGdldD5cclxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPGgxPkZvbGtzIHF1aXp6ZXM8L2gxPlxyXG5cclxuICAgICAgICAgICAgPHA+RG8geW91IGtub3cgd2hvIGlzLi4uPzwvcD5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L1F1aXpDb250YWluZXI+XHJcbiAgICAgIDxHaXRIdWJDb3JuZXIgcHJvamVjdFVybD1cImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsb3NocmZcIiAvPlxyXG4gICAgPC9RdWl6QmFja2dyb3VuZD5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==