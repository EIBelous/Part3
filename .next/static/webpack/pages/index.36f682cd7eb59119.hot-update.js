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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakersList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    function onFavoriteToggle(id) {\n        const speakerRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakerRecPrevious,\n            favorite: !speakerRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"w+z3VojThBM0LR3D7Gyh7Tsm890=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUErQjtBQUNPO0FBQ047QUFFaEMsU0FBU0csYUFBYSxLQUFjLEVBQUM7UUFBZixFQUFDQyxhQUFZLEVBQUMsR0FBZDs7SUFDbEIsTUFBTSxDQUFDQyxjQUFhQyxnQkFBZ0IsR0FBQ0osK0NBQVFBLENBQUNELDhDQUFJQTtJQUV0RCxTQUFTTSxpQkFBaUJDLEVBQUUsRUFBQztRQUN6QixNQUFNQyxxQkFBbUJKLGFBQWFLLElBQUksQ0FBQyxTQUFTQyxHQUFHLEVBQUM7WUFDcEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUN0QjtRQUNBLE1BQU1JLG9CQUFrQjtZQUNwQixHQUFHSCxrQkFBa0I7WUFDckJJLFVBQVUsQ0FBQ0osbUJBQW1CSSxRQUFRO1FBQ3hDO1FBQ0EsTUFBTUMsa0JBQWdCVCxhQUFhVSxHQUFHLENBQUMsU0FBU0osR0FBRyxFQUFDO1lBQ2xELE9BQU9BLElBQUlILEVBQUUsS0FBSUEsS0FBS0ksb0JBQW9CRCxHQUFHO1FBQy9DO1FBQ0FMLGdCQUFnQlE7SUFDdEI7SUFDSSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDVlosYUFBYVUsR0FBRyxDQUFDLFNBQVVHLE9BQU8sRUFBRTtnQkFDakMscUJBQ0EsOERBQUNsQixnREFBT0E7b0JBQ1JrQixTQUFTQTtvQkFDVGQsY0FBY0E7b0JBQ2RHLGtCQUFrQixJQUFJO3dCQUNsQkEsaUJBQWlCVyxRQUFRVixFQUFFO29CQUMvQjttQkFMY1UsUUFBUVYsRUFBRTs7Ozs7WUFRNUI7Ozs7Ozs7Ozs7O0FBSWhCO0dBakNTTDtLQUFBQTtBQW1DVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tICcuL1NwZWFrZXInXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zfSl7XHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLHNldFNwZWFrZXJzRGF0YV09dXNlU3RhdGUoZGF0YSlcclxuXHJcbmZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpe1xyXG4gICAgY29uc3Qgc3BlYWtlclJlY1ByZXZpb3VzPXNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWRcclxuICAgIH0pXHJcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZD17XHJcbiAgICAgICAgLi4uc3BlYWtlclJlY1ByZXZpb3VzLFxyXG4gICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlclJlY1ByZXZpb3VzLmZhdm9yaXRlXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldz1zcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uKHJlYyl7XHJcbiAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT1pZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpXHJcbn1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2VyUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});