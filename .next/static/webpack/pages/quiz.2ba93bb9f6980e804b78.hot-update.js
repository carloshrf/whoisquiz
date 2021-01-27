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
    src: question.image,
    style: {
      width: '100%',
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
  }, "Confirmar"))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcyJdLCJuYW1lcyI6WyJRdWl6UGFnZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZSIsInVzZVJvdXRlciIsInF1ZXN0aW9uIiwiZGIiLCJxdWVzdGlvbnMiLCJiZyIsImxlbmd0aCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsT0FEb0I7O0FBR2pDLE1BQU1DLEtBQUssR0FBR0MsNkRBQVMsRUFBdkI7QUFFRCxNQUFNQyxRQUFRLEdBQUdDLHFDQUFFLENBQUNDLFNBQUgsQ0FBYSxDQUFiLENBQWpCO0FBRUMsU0FDRSxNQUFDLHNFQUFEO0FBQWdCLG1CQUFlLEVBQUVELHFDQUFFLENBQUNFLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFJRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsOERBQUQsQ0FBUSxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUNzQkYscUNBQUUsQ0FBQ0MsU0FBSCxDQUFhRSxNQURuQyxFQURGLENBRkYsRUFRSDtBQUNDLE9BQUcsRUFBRUosUUFBUSxDQUFDSyxLQURmO0FBRUMsU0FBSyxFQUFFO0FBQ05DLFdBQUssRUFBRSxNQUREO0FBRU5DLFlBQU0sRUFBRSxPQUZGO0FBR05DLGVBQVMsRUFBRTtBQUhMLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJHLEVBaUJFLE1BQUMsOERBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VSLFFBQVEsQ0FBQ1MsS0FEWCxDQURJLEVBS0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFVCxRQUFRLENBQUNVLFdBRFgsQ0FMSSxFQVNKLE1BQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFRLEVBQUVkLElBQUksQ0FBQ1EsTUFBTCxLQUFnQixDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRJLENBakJGLENBRkYsRUFtQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhGLENBREYsQ0FuQ0YsRUEwQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUNGLENBSkYsRUFnREUsTUFBQyxvRUFBRDtBQUFjLGNBQVUsRUFBQyw4QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhERixDQURGO0FBb0REOztHQTNEdUJWLFE7VUFHUksscUQ7OztLQUhRTCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1aXouMmJhOTNiYjlmNjk4MGU4MDRiNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9XaWRnZXQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBHaXRIdWJDb3JuZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvR2l0SHViQ29ybmVyJztcclxuaW1wb3J0IFF1aXpCYWNrZ3JvdW5kIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kJztcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgUXVpekNvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6Q29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpQYWdlKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgcXVlc3Rpb24gPSBkYi5xdWVzdGlvbnNbMF07XHJcblx0XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWl6QmFja2dyb3VuZCBiYWNrZ3JvdW5kSW1hZ2U9e2RiLmJnfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPldobyBpcyBRdWl6PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICA8V2lkZ2V0PlxyXG5cclxuICAgICAgICAgIDxXaWRnZXQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICBQZXJndW50YSAxIGRlIHtgJHtkYi5xdWVzdGlvbnMubGVuZ3RofWB9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L1dpZGdldC5IZWFkZXI+XHJcbnsvKiBodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRdFExaWM5Z3RqdjhqS1ZBVVhYMHduNXZHQldlUHc0UzVRZEEmdXNxcD1DQVUgKi99XHJcblx0XHRcdFx0XHQ8aW1nIFxyXG5cdFx0XHRcdFx0XHRzcmM9e3F1ZXN0aW9uLmltYWdlfVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogJ2NvdmVyJ1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdFx0XHR7cXVlc3Rpb24udGl0bGV9XHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHR7cXVlc3Rpb24uZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtuYW1lLmxlbmd0aCA9PT0gMH0+XHJcblx0XHRcdFx0XHRcdFx0e2BDb25maXJtYXJgfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgIDwvV2lkZ2V0PlxyXG5cclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgPFdpZGdldC5Db250ZW50PlxyXG4gICAgICAgICAgICA8aDE+Rm9sa3MgcXVpenplczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8cD5EbyB5b3Uga25vdyB3aG8gaXMuLi4/PC9wPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxvc2hyZlwiIC8+XHJcbiAgICA8L1F1aXpCYWNrZ3JvdW5kPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9