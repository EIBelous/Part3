"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakersList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    function onFavoriteToggle(id) {\n        const speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakersRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakersRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"w+z3VojThBM0LR3D7Gyh7Tsm890=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUErQjtBQUNPO0FBQ047QUFFaEMsU0FBU0csYUFBYSxLQUFjLEVBQUM7UUFBZixFQUFDQyxhQUFZLEVBQUMsR0FBZDs7SUFDbEIsTUFBTSxDQUFDQyxjQUFhQyxnQkFBZ0IsR0FBQ0osK0NBQVFBLENBQUNELDhDQUFJQTtJQUV0RCxTQUFTTSxpQkFBaUJDLEVBQUUsRUFBQztRQUN6QixNQUFNQyxzQkFBb0JKLGFBQWFLLElBQUksQ0FBQyxTQUFTQyxHQUFHLEVBQUM7WUFDckQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUN0QjtRQUNBLE1BQU1JLHFCQUFtQjtZQUNyQixHQUFHSCxtQkFBbUI7WUFDdEJJLFVBQVUsQ0FBQ0osb0JBQW9CSSxRQUFRO1FBQ3pDO1FBQ0EsTUFBTUMsa0JBQWdCVCxhQUFhVSxHQUFHLENBQUMsU0FBU0osR0FBRyxFQUFDO1lBQ2xELE9BQU9BLElBQUlILEVBQUUsS0FBSUEsS0FBS0kscUJBQXFCRCxHQUFHO1FBQ2hEO1FBQ0FMLGdCQUFnQlE7SUFDdEI7SUFDSSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDVlosYUFBYVUsR0FBRyxDQUFDLFNBQVVHLE9BQU8sRUFBRTtnQkFDakMscUJBQ0EsOERBQUNsQixnREFBT0E7b0JBQ1JrQixTQUFTQTtvQkFDVGQsY0FBY0E7b0JBQ2RHLGtCQUFrQixJQUFJO3dCQUNsQkEsaUJBQWlCVyxRQUFRVixFQUFFO29CQUMvQjttQkFMY1UsUUFBUVYsRUFBRTs7Ozs7WUFRNUI7Ozs7Ozs7Ozs7O0FBSWhCO0dBakNTTDtLQUFBQTtBQW1DVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zfSl7XHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLHNldFNwZWFrZXJzRGF0YV09dXNlU3RhdGUoZGF0YSlcclxuXHJcbmZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpe1xyXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cz1zcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbihyZWMpe1xyXG4gICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNVcGRhdGVkPXtcclxuICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXc9c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbihyZWMpe1xyXG4gICAgICAgIHJldHVybiByZWMuaWQgPT09aWQgPyBzcGVha2Vyc1JlY1VwZGF0ZWQgOiByZWNcclxuICAgICAgfSlcclxuICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldylcclxufVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3QiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJzTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJzRGF0YSIsInNldFNwZWFrZXJzRGF0YSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlcnNSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});