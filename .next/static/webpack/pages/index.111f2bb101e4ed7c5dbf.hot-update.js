"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Hero/Hero.tsx":
/*!***************************************!*\
  !*** ./components/Home/Hero/Hero.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListCreator_CreatorIconHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListCreator/CreatorIconHandle */ "./components/Home/ListCreator/CreatorIconHandle.tsx");
/* harmony import */ var _BidButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BidButton */ "./components/Home/Hero/BidButton.tsx");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Countdown */ "./components/Home/Hero/Countdown.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\alexa\\Desktop\\hashtune\\Hashtune-Marketplace-Client\\components\\Home\\Hero\\Hero.tsx",
    _this = undefined;








// TODO: REMOVE HARDCODED BACKGROUND IMAGE
var Hero = function Hero(props) {
  var artwork = props.artwork;
  var cover = artwork.image || "/";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: '/images/backgroundHome.jpg',
      width: 1176,
      height: 640
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "song-border",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: cover,
        width: 424,
        height: 424
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "song-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
          className: "song-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "title-handle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ListCreator_CreatorIconHandle__WEBPACK_IMPORTED_MODULE_2__.default, {
              image: artwork.creators[0].image,
              handle: artwork.creators[0].handle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
              children: artwork.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "play-button",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/ion_play-circle.png",
                width: 58.5,
                height: 58.5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
          className: "auction-info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                children: "Current bid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                children: artwork.currentHigh
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_4__.default, {
              liveAt: artwork.liveAt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_BidButton__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTExZjJiYjEwMWU0ZWQ3YzVkYmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUF3QjtBQUNqQyxNQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBcEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0UsS0FBUixJQUFpQixHQUE3QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUcsNEJBQWI7QUFBMkMsV0FBSyxFQUFJLElBQXBEO0FBQTBELFlBQU0sRUFBRztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRSxhQUFoQjtBQUFBLDhCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFHRCxLQUFiO0FBQW9CLGFBQUssRUFBSSxHQUE3QjtBQUFrQyxjQUFNLEVBQUc7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFLFdBQWhCO0FBQUEsZ0NBQ0k7QUFBUyxtQkFBUyxFQUFFLGFBQXBCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFLGNBQWhCO0FBQUEsb0NBQ0ksOERBQUMsbUVBQUQ7QUFBbUIsbUJBQUssRUFBRUQsT0FBTyxDQUFDRyxRQUFSLENBQWlCLENBQWpCLEVBQW9CRCxLQUE5QztBQUFxRCxvQkFBTSxFQUFFRixPQUFPLENBQUNHLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLHdCQUFLSixPQUFPLENBQUNLO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLSTtBQUFLLHFCQUFTLEVBQUUsYUFBaEI7QUFBQSxtQ0FDSTtBQUFBLHFDQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQUcsRUFBRSw2QkFBWjtBQUEwQyxxQkFBSyxFQUFFLElBQWpEO0FBQXVELHNCQUFNLEVBQUU7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVlJO0FBQVMsbUJBQVMsRUFBRSxjQUFwQjtBQUFBLGtDQUNJO0FBQUEsb0NBQ0k7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsMEJBQUtMLE9BQU8sQ0FBQ007QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJLDhEQUFDLCtDQUFEO0FBQVcsb0JBQU0sRUFBR04sT0FBTyxDQUFDTztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVFJLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBbENEOztLQUFNVDtBQW1DTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgQ3JlYXRvckljb25IYW5kbGUgZnJvbSBcIi4uL0xpc3RDcmVhdG9yL0NyZWF0b3JJY29uSGFuZGxlXCI7XHJcbmltcG9ydCBCaWRCdXR0b24gZnJvbSBcIi4vQmlkQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcIi4vQ291bnRkb3duXCI7XHJcbmltcG9ydCB7QXJ0d29ya1Byb3AgfSBmcm9tIFwiLi4vTGlzdEFydHdvcmsvTGlzdEFydHdvcmtcIjtcclxuXHJcbi8vIFRPRE86IFJFTU9WRSBIQVJEQ09ERUQgQkFDS0dST1VORCBJTUFHRVxyXG5jb25zdCBIZXJvID0gKHByb3BzOiBBcnR3b3JrUHJvcCkgPT4ge1xyXG4gICAgbGV0IGFydHdvcmsgPSBwcm9wcy5hcnR3b3JrO1xyXG4gICAgbGV0IGNvdmVyID0gYXJ0d29yay5pbWFnZSB8fCBcIi9cIjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz0geycvaW1hZ2VzL2JhY2tncm91bmRIb21lLmpwZyd9IHdpZHRoID0gezExNzZ9IGhlaWdodD0gezY0MH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJzb25nLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz0ge2NvdmVyfSB3aWR0aCA9IHs0MjR9IGhlaWdodD0gezQyNH0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwic29uZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSBcInNvbmctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInRpdGxlLWhhbmRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0b3JJY29uSGFuZGxlIGltYWdlPXthcnR3b3JrLmNyZWF0b3JzWzBdLmltYWdlfSBoYW5kbGU9e2FydHdvcmsuY3JlYXRvcnNbMF0uaGFuZGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2FydHdvcmsudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcInBsYXktYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9IFwiL2ltYWdlcy9pb25fcGxheS1jaXJjbGUucG5nXCIgd2lkdGg9ezU4LjV9IGhlaWdodD17NTguNX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9IFwiYXVjdGlvbi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3VycmVudCBiaWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0d29yay5jdXJyZW50SGlnaH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZG93biBsaXZlQXQ9IHthcnR3b3JrLmxpdmVBdH0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmlkQnV0dG9uLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVybyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQ3JlYXRvckljb25IYW5kbGUiLCJCaWRCdXR0b24iLCJDb3VudGRvd24iLCJIZXJvIiwicHJvcHMiLCJhcnR3b3JrIiwiY292ZXIiLCJpbWFnZSIsImNyZWF0b3JzIiwiaGFuZGxlIiwidGl0bGUiLCJjdXJyZW50SGlnaCIsImxpdmVBdCJdLCJzb3VyY2VSb290IjoiIn0=