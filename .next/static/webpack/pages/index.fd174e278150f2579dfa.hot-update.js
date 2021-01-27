webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\projetos\\whoisquiz\\src\\components\\Input\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n\twidth: 100%;\n\tpadding: 15px;\n\tfont-size: 14px;\n\tborder: 1px solid ", ";\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tborder-radius: ", ";\n\toutline: 0;\n\tmargin-bottom: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var InputBase = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contratText;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.mainBg;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius;
});
_c = InputBase;
function Input(_ref5) {
  var onChange = _ref5.onChange,
      placeholder = _ref5.placeholder,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["onChange", "placeholder"]);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(InputBase, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onChange: onChange,
    placeholder: placeholder
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  })));
}
_c2 = Input;
Input.PropTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
};

var _c, _c2;

$RefreshReg$(_c, "InputBase");
$RefreshReg$(_c2, "Input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXRCYXNlIiwic3R5bGVkIiwiaW5wdXQiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJjb250cmF0VGV4dCIsIm1haW5CZyIsImJvcmRlclJhZGl1cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInByb3BzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVixvQkFJTTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUE1QjtBQUFBLENBSk4sRUFLTDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxXQUE1QjtBQUFBLENBTEssRUFNTTtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxNQUE1QjtBQUFBLENBTk4sRUFPRztBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssWUFBckI7QUFBQSxDQVBILENBQWY7S0FBTVIsUztBQVlTLFNBQVNTLEtBQVQsUUFBb0Q7QUFBQSxNQUFuQ0MsUUFBbUMsU0FBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFdBQXlCLFNBQXpCQSxXQUF5QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ2xFLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsU0FBRDtBQUNDLFlBQVEsRUFBRUYsUUFEWDtBQUVDLGVBQVcsRUFBRUM7QUFGZCxLQUdLQyxLQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERCxDQUREO0FBU0E7TUFWdUJILEs7QUFZeEJBLEtBQUssQ0FBQ0ksU0FBTixHQUFrQjtBQUNqQkgsVUFBUSxFQUFFRyxpREFBUyxDQUFDQyxJQUFWLENBQWVDLFVBRFI7QUFFakJKLGFBQVcsRUFBRUUsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGYjtBQUdqQkUsTUFBSSxFQUFFSixpREFBUyxDQUFDRyxNQUFWLENBQWlCRCxVQUhOO0FBSWpCRyxPQUFLLEVBQUVMLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBSlAsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQxNzRlMjc4MTUwZjI1NzlkZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCBJbnB1dEJhc2UgPSBzdHlsZWQuaW5wdXRgXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcblx0Y29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnRyYXRUZXh0fTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG5cdGJvcmRlci1yYWRpdXM6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyUmFkaXVzfTtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCh7IG9uQ2hhbmdlLCBwbGFjZWhvbGRlciwgLi4ucHJvcHMgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SW5wdXRCYXNlIFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX0gXHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBcclxuXHRcdFx0XHR7Li4ucHJvcHN9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5JbnB1dC5Qcm9wVHlwZXMgPSB7XHJcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0cGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0dmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==