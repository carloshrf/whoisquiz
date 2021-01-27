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
Input.defaultProps = {
  value: ''
};
Input.PropTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXRCYXNlIiwic3R5bGVkIiwiaW5wdXQiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJjb250cmF0VGV4dCIsIm1haW5CZyIsImJvcmRlclJhZGl1cyIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwidmFsdWUiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVixvQkFJTTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUE1QjtBQUFBLENBSk4sRUFLTDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxXQUE1QjtBQUFBLENBTEssRUFNTTtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxNQUE1QjtBQUFBLENBTk4sRUFPRztBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssWUFBckI7QUFBQSxDQVBILENBQWY7S0FBTVIsUztBQVlTLFNBQVNTLEtBQVQsUUFBb0Q7QUFBQSxNQUFuQ0MsUUFBbUMsU0FBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFdBQXlCLFNBQXpCQSxXQUF5QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ2xFLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsU0FBRDtBQUNDLFlBQVEsRUFBRUYsUUFEWDtBQUVDLGVBQVcsRUFBRUM7QUFGZCxLQUdLQyxLQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERCxDQUREO0FBU0E7TUFWdUJILEs7QUFZeEJBLEtBQUssQ0FBQ0ksWUFBTixHQUFxQjtBQUNwQkMsT0FBSyxFQUFFO0FBRGEsQ0FBckI7QUFJQUwsS0FBSyxDQUFDTSxTQUFOLEdBQWtCO0FBQ2pCTCxVQUFRLEVBQUVLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQk4sYUFBVyxFQUFFSSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRCxVQUZiO0FBR2pCRSxNQUFJLEVBQUVKLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJELFVBSE47QUFJakJILE9BQUssRUFBRUMsaURBQVMsQ0FBQ0c7QUFKQSxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MzE3N2Q5OTljOWE0Njk0OTg5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IElucHV0QmFzZSA9IHN0eWxlZC5pbnB1dGBcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuXHRjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29udHJhdFRleHR9O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ307XHJcblx0Ym9yZGVyLXJhZGl1czogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJSYWRpdXN9O1xyXG5cdG91dGxpbmU6IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KHsgb25DaGFuZ2UsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxJbnB1dEJhc2UgXHJcblx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfSBcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IFxyXG5cdFx0XHRcdHsuLi5wcm9wc31cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuXHR2YWx1ZTogJycsXHJcbn1cclxuXHJcbklucHV0LlByb3BUeXBlcyA9IHtcclxuXHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHR2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==