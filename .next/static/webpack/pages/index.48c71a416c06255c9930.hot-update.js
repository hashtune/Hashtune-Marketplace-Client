"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout/layout */ "./components/Layout/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Hero/Hero */ "./components/Home/Hero/Hero.tsx");
/* harmony import */ var _components_Home_ListContainer_MusicList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/ListContainer/MusicList */ "./components/Home/ListContainer/MusicList.tsx");
/* harmony import */ var _components_Home_ListContainer_CreatorList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/ListContainer/CreatorList */ "./components/Home/ListContainer/CreatorList.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\alexa\\Desktop\\hashtune\\Hashtune-Marketplace-Client\\pages\\index.tsx";






var __N_SSG = true;
function Home(_ref) {
  var allArtworks = _ref.allArtworks,
      allCreators = _ref.allCreators;
  console.log("ARTWORKSs:" + allArtworks);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    home: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Home_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__.default, {
      artwork: allArtworks[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Home_ListContainer_MusicList__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: 'Trending Auctions',
      viewAll: 'Auctions',
      artworks: allArtworks
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Home_ListContainer_MusicList__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: 'Trending Music',
      viewAll: 'Music',
      artworks: allArtworks
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Home_ListContainer_CreatorList__WEBPACK_IMPORTED_MODULE_4__.default, {
      creators: allTrendyCreators
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDhjNzFhNDE2YzA2MjU1Yzk5MzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUE2Q2UsU0FBU0ssSUFBVCxPQVNaO0FBQUEsTUFUNEJDLFdBUzVCLFFBVDRCQSxXQVM1QjtBQUFBLE1BVHNEQyxXQVN0RCxRQVR5Q0EsV0FTekM7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBZUgsV0FBM0I7QUFFQSxzQkFDRSw4REFBQyw4REFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUdBLDhEQUFDLCtEQUFEO0FBQU0sYUFBTyxFQUFJQSxXQUFXLENBQUMsQ0FBRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEEsZUFJQSw4REFBQyw2RUFBRDtBQUFXLFdBQUssRUFBRSxtQkFBbEI7QUFBdUMsYUFBTyxFQUFFLFVBQWhEO0FBQTRELGNBQVEsRUFBRUE7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBLGVBS0EsOERBQUMsNkVBQUQ7QUFBVyxXQUFLLEVBQUUsZ0JBQWxCO0FBQW9DLGFBQU8sRUFBRSxPQUE3QztBQUFzRCxjQUFRLEVBQUVBO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQSxlQU1BLDhEQUFDLCtFQUFEO0FBQWEsY0FBUSxFQUFFSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDtLQXRCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvbGF5b3V0J1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2Fwb2xsby1jbGllbnQnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvJ1xyXG5pbXBvcnQgTXVzaWNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MaXN0Q29udGFpbmVyL011c2ljTGlzdCdcclxuaW1wb3J0IENyZWF0b3JMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MaXN0Q29udGFpbmVyL0NyZWF0b3JMaXN0J1xyXG5pbXBvcnQge0FydHdvcmt9IGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTGlzdEFydHdvcmsvTGlzdEFydHdvcmtcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogIEdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XHJcbiAgY29uc3Qge2RhdGF9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgICBxdWVyeSBFeGFtcGxlUXVlcnkge1xyXG4gICAgICAgICAgbGlzdEFydHdvcmtze1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBzYWxlVHlwZVxyXG4gICAgICAgICAgICByZXNlcnZlUHJpY2VcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgY3JlYXRvciB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICBmdWxsTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhdGVzdEF1Y3Rpb24ge1xyXG4gICAgICAgICAgICAgIGJpZHMge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpc3RDcmVhdG9ycyB7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lXHJcbiAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBiaW9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYWxsQXJ0d29ya3M6IGRhdGEubGlzdEFydHdvcmtzLnNsaWNlKDAsIDgpLFxyXG4gICAgICAgIGFsbENyZWF0b3JzOiBkYXRhLmxpc3RDcmVhdG9ycy5zbGljZSgwLDE2KSxcclxuICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoe2FsbEFydHdvcmtzLCBhbGxDcmVhdG9yczogYWxsQ3JlYXRvcnN9OiB7XHJcbiAgYWxsQXJ0d29ya3M6IEFydHdvcmtbXSxcclxuICBhbGxDcmVhdG9yczoge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaGFuZGxlOiBzdHJpbmcsXHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgYmlvOnN0cmluZ1xyXG4gIH1bXVxyXG59KSB7XHJcbiAgY29uc29sZS5sb2coXCJBUlRXT1JLU3M6XCIgKyBhbGxBcnR3b3JrcylcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBob21lPlxyXG4gICAgey8qIFRPRE86IGdldCBwcmljZSwgY292ZXIgaW1nLCBmcm9tIHByb3BzLiBDYWxjdWxhdGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsXHJcbiAgICBhZGQgc3RyaW5nIHRvIGNyZWF0b3JzLiovfVxyXG4gICAgPEhlcm8gYXJ0d29yayA9IHthbGxBcnR3b3Jrc1swXX0vPlxyXG4gICAgPE11c2ljTGlzdCB0aXRsZT17J1RyZW5kaW5nIEF1Y3Rpb25zJ30gdmlld0FsbD17J0F1Y3Rpb25zJ30gYXJ0d29ya3M9e2FsbEFydHdvcmtzfS8+XHJcbiAgICA8TXVzaWNMaXN0IHRpdGxlPXsnVHJlbmRpbmcgTXVzaWMnfSB2aWV3QWxsPXsnTXVzaWMnfSBhcnR3b3Jrcz17YWxsQXJ0d29ya3N9Lz5cclxuICAgIDxDcmVhdG9yTGlzdCBjcmVhdG9ycz17YWxsVHJlbmR5Q3JlYXRvcnN9Lz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJIZXJvIiwiTXVzaWNMaXN0IiwiQ3JlYXRvckxpc3QiLCJIb21lIiwiYWxsQXJ0d29ya3MiLCJhbGxDcmVhdG9ycyIsImNvbnNvbGUiLCJsb2ciLCJhbGxUcmVuZHlDcmVhdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=