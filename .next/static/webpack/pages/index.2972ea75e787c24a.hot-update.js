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

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersList */ \"./src/components/SpeakersList.js\");\n/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersToolbar */ \"./src/components/SpeakersToolbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Speakers(param) {\n    let { data , theme , setTheme  } = param;\n    _s();\n    const [showSessions, setShowsessions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Pravda\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                theme: theme,\n                setTheme: setTheme,\n                showSessions: showSessions,\n                setShowsessions: setShowsessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: data,\n                showSessions: showSessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Speakers, \"AyV+N5B4gDH5rzdQTal5S5E0ziU=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBDO0FBQ007QUFDaEI7QUFFaEMsU0FBU0csU0FBUyxLQUF5QixFQUFFO1FBQTNCLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBekI7O0lBQ2QsTUFDQSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBQ04sK0NBQVFBLENBQUM7SUFDekMscUJBQ0k7OzBCQUNJLDhEQUFDRCx3REFBZUE7Z0JBQ2ZJLE9BQU9BO2dCQUFPQyxVQUFVQTtnQkFDeEJDLGNBQWNBO2dCQUNkQyxpQkFBaUJBOzs7Ozs7MEJBQ2xCLDhEQUFDUixxREFBWUE7Z0JBQUNJLE1BQU1BO2dCQUNwQkcsY0FBY0E7Ozs7Ozs7O0FBRzFCO0dBYlNKO0tBQUFBO0FBZVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanM/M2QxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlcnNMaXN0IGZyb20gJy4vU3BlYWtlcnNMaXN0JztcclxuaW1wb3J0IFNwZWFrZXJzVG9sbGJhciBmcm9tICcuL1NwZWFrZXJzVG9vbGJhcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzKHsgZGF0YSwgdGhlbWUsIHNldFRoZW1lIH0pIHtcclxuICAgIGNvbnN0IFxyXG4gICAgW3Nob3dTZXNzaW9ucywgc2V0U2hvd3Nlc3Npb25zXT11c2VTdGF0ZShcIlByYXZkYVwiKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3BlYWtlcnNUb2xsYmFyXHJcbiAgICAgICAgICAgICB0aGVtZT17dGhlbWV9IHNldFRoZW1lPXtzZXRUaGVtZX1cclxuICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgc2V0U2hvd3Nlc3Npb25zPXtzZXRTaG93c2Vzc2lvbnN9IC8+XHJcbiAgICAgICAgICAgIDxTcGVha2Vyc0xpc3QgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyJdLCJuYW1lcyI6WyJTcGVha2Vyc0xpc3QiLCJTcGVha2Vyc1RvbGxiYXIiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJzIiwiZGF0YSIsInRoZW1lIiwic2V0VGhlbWUiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93c2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers.js\n"));

/***/ })

});