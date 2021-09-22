"use strict";
(() => {
var exports = {};
exports.id = "pages/api/artwork/[id]";
exports.ids = ["pages/api/artwork/[id]"];
exports.modules = {

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

/***/ "./pages/api/artwork/[id]/index.ts":
/*!*****************************************!*\
  !*** ./pages/api/artwork/[id]/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getAllArtworkIds": () => (/* binding */ getAllArtworkIds),
/* harmony export */   "getArtworkById": () => (/* binding */ getArtworkById)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../apollo-client */ "./apollo-client.js");



const getAllArtworksData = async () => {
  const {
    data
  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_1__.default.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
      query ExampleQuery {
        listArtworks {
          id
        }
      }
    `
  });
  return data.listArtworks.slice(0, 8);
};

const getStaticProps = async () => {
  const allArtworksData = await getAllArtworksData();
  return {
    props: {
      allArtworksData: allArtworksData,
      fallback: true
    }
  };
};
const getStaticPaths = async () => {
  const allArtworksData = await getAllArtworksData();
  const paths = getAllArtworkIds(allArtworksData);
  return {
    paths,
    fallback: true
  };
};
function getAllArtworkIds({
  allArtworksData
}) {
  const allArtworkIds = allArtworksData === null || allArtworksData === void 0 ? void 0 : allArtworksData.map(artwork => artwork.id);
  console.log(allArtworkIds);
  return allArtworkIds === null || allArtworkIds === void 0 ? void 0 : allArtworkIds.map(artworkId => {
    return {
      params: {
        id: artworkId
      }
    };
  });
}
async function getArtworkById(id) {
  const {
    data
  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_1__.default.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
      query ExampleQuery {
        listArtworks(id : ${id}) {
          id
        }
      }
    `
  });
} // USE LATER POTENTIALLY
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Get data from your database
//   res.status(200).json(getAllArtworkIds)
// }

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/artwork/[id]/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2FydHdvcmsvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQUosQ0FBaUI7QUFDNUJHLEVBQUFBLEdBQUcsRUFBRSwrQkFEdUI7QUFFNUJDLEVBQUFBLEtBQUssRUFBRSxJQUFJSCx5REFBSjtBQUZxQixDQUFqQixDQUFmO0FBS0EsaUVBQWVDLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFJQTs7QUFHQSxNQUFNSSxrQkFBa0IsR0FBRyxZQUFZO0FBQ3JDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXLE1BQU1MLHlEQUFBLENBQWE7QUFDbENNLElBQUFBLEtBQUssRUFBRUgsK0NBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQc0MsR0FBYixDQUF2QjtBQVNBLFNBQU9FLElBQUksQ0FBQ0UsWUFBTCxDQUFrQkMsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMEIsQ0FBMUIsQ0FBUDtBQUNELENBWEQ7O0FBWU8sTUFBTUMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLGVBQWUsR0FBRyxNQUFNTixrQkFBa0IsRUFBaEQ7QUFDQSxTQUFPO0FBQ0xPLElBQUFBLEtBQUssRUFBRTtBQUNMRCxNQUFBQSxlQUFlLEVBQUVBLGVBRFo7QUFFTEUsTUFBQUEsUUFBUSxFQUFFO0FBRkw7QUFERixHQUFQO0FBTUQsQ0FSTTtBQVNBLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNSCxlQUFlLEdBQUcsTUFBTU4sa0JBQWtCLEVBQWhEO0FBQ0EsUUFBTVUsS0FBSyxHQUFHQyxnQkFBZ0IsQ0FBQ0wsZUFBRCxDQUE5QjtBQUNBLFNBQU87QUFDTEksSUFBQUEsS0FESztBQUVMRixJQUFBQSxRQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FQTTtBQVFBLFNBQVNHLGdCQUFULENBQTBCO0FBQUVMLEVBQUFBO0FBQUYsQ0FBMUIsRUFJSjtBQUNELFFBQU1NLGFBQWEsR0FBR04sZUFBSCxhQUFHQSxlQUFILHVCQUFHQSxlQUFlLENBQUVPLEdBQWpCLENBQXFCQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsRUFBeEMsQ0FBdEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGFBQVo7QUFDQSxTQUFPQSxhQUFQLGFBQU9BLGFBQVAsdUJBQU9BLGFBQWEsQ0FBRUMsR0FBZixDQUFtQkssU0FBUyxJQUFJO0FBQ3JDLFdBQU87QUFDTEMsTUFBQUEsTUFBTSxFQUFFO0FBQ05KLFFBQUFBLEVBQUUsRUFBRUc7QUFERTtBQURILEtBQVA7QUFLRCxHQU5NLENBQVA7QUFPRDtBQUVNLGVBQWVFLGNBQWYsQ0FBOEJMLEVBQTlCLEVBQTBDO0FBQzdDLFFBQU07QUFBRWQsSUFBQUE7QUFBRixNQUFXLE1BQU1MLHlEQUFBLENBQWE7QUFDcENNLElBQUFBLEtBQUssRUFBRUgsK0NBQUk7QUFDZjtBQUNBLDRCQUE0QmdCLEVBQUc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFQd0MsR0FBYixDQUF2QjtBQVNILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25FQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhc2h0dW5lLWNsaWVudC8uL2Fwb2xsby1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vaGFzaHR1bmUtY2xpZW50Ly4vcGFnZXMvYXBpL2FydHdvcmsvW2lkXS9pbmRleC50cyIsIndlYnBhY2s6Ly9oYXNodHVuZS1jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWxcIixcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcmVzdWx0S2V5TmFtZUZyb21GaWVsZCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi8uLi8uLi9hcG9sbG8tY2xpZW50XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcblxyXG5jb25zdCBnZXRBbGxBcnR3b3Jrc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnkgRXhhbXBsZVF1ZXJ5IHtcclxuICAgICAgICBsaXN0QXJ0d29ya3Mge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGRhdGEubGlzdEFydHdvcmtzLnNsaWNlKDAsOCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYWxsQXJ0d29ya3NEYXRhID0gYXdhaXQgZ2V0QWxsQXJ0d29ya3NEYXRhKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFsbEFydHdvcmtzRGF0YTogYWxsQXJ0d29ya3NEYXRhLFxyXG4gICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYWxsQXJ0d29ya3NEYXRhID0gYXdhaXQgZ2V0QWxsQXJ0d29ya3NEYXRhKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxBcnR3b3JrSWRzKGFsbEFydHdvcmtzRGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQXJ0d29ya0lkcyh7IGFsbEFydHdvcmtzRGF0YSB9OiB7XHJcbiAgYWxsQXJ0d29ya3NEYXRhOiB7XHJcbiAgICBpZDogc3RyaW5nXHJcbiAgfVtdXHJcbn0pIHtcclxuICBjb25zdCBhbGxBcnR3b3JrSWRzID0gYWxsQXJ0d29ya3NEYXRhPy5tYXAoYXJ0d29yayA9PiBhcnR3b3JrLmlkKVxyXG4gIGNvbnNvbGUubG9nKGFsbEFydHdvcmtJZHMpXHJcbiAgcmV0dXJuIGFsbEFydHdvcmtJZHM/Lm1hcChhcnR3b3JrSWQgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IGFydHdvcmtJZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydHdvcmtCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IEV4YW1wbGVRdWVyeSB7XHJcbiAgICAgICAgbGlzdEFydHdvcmtzKGlkIDogJHtpZH0pIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIH0pO1xyXG59XHJcbi8vIFVTRSBMQVRFUiBQT1RFTlRJQUxMWVxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbi8vICAgLy8gR2V0IGRhdGEgZnJvbSB5b3VyIGRhdGFiYXNlXHJcbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oZ2V0QWxsQXJ0d29ya0lkcylcclxuLy8gfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsInVyaSIsImNhY2hlIiwiZ3FsIiwiZ2V0QWxsQXJ0d29ya3NEYXRhIiwiZGF0YSIsInF1ZXJ5IiwibGlzdEFydHdvcmtzIiwic2xpY2UiLCJnZXRTdGF0aWNQcm9wcyIsImFsbEFydHdvcmtzRGF0YSIsInByb3BzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZ2V0QWxsQXJ0d29ya0lkcyIsImFsbEFydHdvcmtJZHMiLCJtYXAiLCJhcnR3b3JrIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYXJ0d29ya0lkIiwicGFyYW1zIiwiZ2V0QXJ0d29ya0J5SWQiXSwic291cmNlUm9vdCI6IiJ9