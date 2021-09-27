self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/Navbar/Navbar.tsx":
/*!*********************************************!*\
  !*** ./components/Layout/Navbar/Navbar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.scss */ "./components/Layout/Navbar/Navbar.module.scss");
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuItem/MenuItem */ "./components/Layout/MenuItem/MenuItem.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "./components/Layout/Navbar/Tab.tsx");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\alexa\\Desktop\\hashtune\\Hashtune-Marketplace-Client\\components\\Layout\\Navbar\\Navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Navbar = function Navbar() {
  _s();

  var _useRouter = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      query = _useRouter.query;

  var isSongsTabSelected = !!query.tabOne;
  var isArtistsTabSelected = !!query.tabTwo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainSidebar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sidebar),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
          className: (_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbar),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/?songsTab=true",
            title: "Tab One",
            isSelected: isSongsTabSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/?artistsTab=true",
            title: "Tab Two",
            isSelected: isArtistsTabSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              className: "logo",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "Hashtune",
                href: "/",
                iconsrc: "/images/logo.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 31
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "Home",
                href: "/home",
                iconsrc: "/images/ion_home-outline.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "Explore",
                href: "/explore",
                iconsrc: "/images/ion_compass-outline.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "Blog",
                href: "/blog",
                iconsrc: "/images/ion_document-text-outline.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "About",
                href: "/about",
                iconsrc: "/images/ion_glasses.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 9
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__.default, {
                name: "Connect Wallet",
                href: "/connect-wallet",
                iconsrc: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Navbar, "wby5GzzI23pLfTlf5I7v7XLG1RQ=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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


/***/ }),

/***/ "./components/Layout/Navbar/Tab.tsx":
/*!******************************************!*\
  !*** ./components/Layout/Navbar/Tab.tsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk3MGY3NTkyYzc3Y2FiZTU2NzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUUxQixtQkFBa0JGLGtFQUFTLEVBQTNCO0FBQUEsTUFBUUcsS0FBUixjQUFRQSxLQUFSOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLENBQUMsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFuQztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLENBQUMsQ0FBQ0gsS0FBSyxDQUFDSSxNQUFyQztBQUVBLHNCQUNFO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUlULHdFQUFsQjtBQUFBLDZCQUNBO0FBQUssaUJBQVMsRUFBR0Esb0VBQWpCO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFHQSxtRUFBakI7QUFBQSxrQ0FDRSw4REFBQyw2Q0FBRDtBQUFLLGdCQUFJLEVBQUMsaUJBQVY7QUFBNEIsaUJBQUssRUFBQyxTQUFsQztBQUE0QyxzQkFBVSxFQUFFTTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBSyxnQkFBSSxFQUFDLG1CQUFWO0FBQThCLGlCQUFLLEVBQUMsU0FBcEM7QUFBOEMsc0JBQVUsRUFBRUU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFFLE1BQWY7QUFBQSxxQ0FBc0IsOERBQUMsdURBQUQ7QUFBVSxvQkFBSSxFQUFFLFVBQWhCO0FBQTJCLG9CQUFJLEVBQUcsR0FBbEM7QUFBc0MsdUJBQU8sRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHFDQUFJLDhEQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxNQUFoQjtBQUF1QixvQkFBSSxFQUFFLE9BQTdCO0FBQXFDLHVCQUFPLEVBQUU7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLHFDQUFJLDhEQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxTQUFoQjtBQUEwQixvQkFBSSxFQUFFLFVBQWhDO0FBQTJDLHVCQUFPLEVBQUU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFBLHFDQUFJLDhEQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxNQUFoQjtBQUF1QixvQkFBSSxFQUFFLE9BQTdCO0FBQXFDLHVCQUFPLEVBQUU7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFBLHFDQUFJLDhEQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxPQUFoQjtBQUF3QixvQkFBSSxFQUFFLFFBQTlCO0FBQXVDLHVCQUFPLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRTtBQUFBLHFDQUFJLDhEQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxnQkFBaEI7QUFBaUMsb0JBQUksRUFBRSxpQkFBdkM7QUFBeUQsdUJBQU8sRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQW9CRCxDQTFCTTs7R0FBTUo7VUFFT0Y7OztLQUZQRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXIvTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi4vTWVudUl0ZW0vTWVudUl0ZW0nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc1NvbmdzVGFiU2VsZWN0ZWQgPSAhIXF1ZXJ5LnRhYk9uZTtcclxuICBjb25zdCBpc0FydGlzdHNUYWJTZWxlY3RlZCA9ICEhcXVlcnkudGFiVHdvO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5tYWluU2lkZWJhcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5zaWRlYmFyfT5cclxuICAgIDxuYXYgY2xhc3NOYW1lPSB7c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgIDxUYWIgaHJlZj1cIi8/c29uZ3NUYWI9dHJ1ZVwiIHRpdGxlPVwiVGFiIE9uZVwiIGlzU2VsZWN0ZWQ9e2lzU29uZ3NUYWJTZWxlY3RlZH0gLz4gXHJcbiAgICAgIDxUYWIgaHJlZj1cIi8/YXJ0aXN0c1RhYj10cnVlXCIgdGl0bGU9XCJUYWIgVHdvXCIgaXNTZWxlY3RlZD17aXNBcnRpc3RzVGFiU2VsZWN0ZWR9IC8+IFxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0gXCJsb2dvXCI+PE1lbnVJdGVtIG5hbWU9IFwiSGFzaHR1bmVcIiBocmVmID0gJy8nIGljb25zcmM9IFwiL2ltYWdlcy9sb2dvLnBuZ1wiLz48L2xpPlxyXG4gICAgICAgIDxsaT48TWVudUl0ZW0gbmFtZT0gXCJIb21lXCIgaHJlZj0gJy9ob21lJyBpY29uc3JjPSAnL2ltYWdlcy9pb25faG9tZS1vdXRsaW5lLnBuZycvPjwvbGk+XHJcbiAgICAgICAgPGxpPjxNZW51SXRlbSBuYW1lPSBcIkV4cGxvcmVcIiBocmVmPSAnL2V4cGxvcmUnIGljb25zcmM9ICcvaW1hZ2VzL2lvbl9jb21wYXNzLW91dGxpbmUucG5nJy8+PC9saT5cclxuICAgICAgICA8bGk+PE1lbnVJdGVtIG5hbWU9IFwiQmxvZ1wiIGhyZWY9ICcvYmxvZycgaWNvbnNyYz0gJy9pbWFnZXMvaW9uX2RvY3VtZW50LXRleHQtb3V0bGluZS5wbmcnLz48L2xpPlxyXG4gICAgICAgIDxsaT48TWVudUl0ZW0gbmFtZT0gXCJBYm91dFwiIGhyZWY9ICcvYWJvdXQnIGljb25zcmM9ICcvaW1hZ2VzL2lvbl9nbGFzc2VzLnBuZycvPjwvbGk+XHJcbiAgICAgICAgPGxpPjxNZW51SXRlbSBuYW1lPSBcIkNvbm5lY3QgV2FsbGV0XCIgaHJlZj0gJy9jb25uZWN0LXdhbGxldCcgaWNvbnNyYz0nJy8+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNZW51SXRlbSIsInVzZVJvdXRlciIsIlRhYiIsIk5hdmJhciIsInF1ZXJ5IiwiaXNTb25nc1RhYlNlbGVjdGVkIiwidGFiT25lIiwiaXNBcnRpc3RzVGFiU2VsZWN0ZWQiLCJ0YWJUd28iLCJtYWluU2lkZWJhciIsInNpZGViYXIiLCJuYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9