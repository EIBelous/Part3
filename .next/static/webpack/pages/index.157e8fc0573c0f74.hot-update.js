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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nconst indexPage = ()=>{\n    const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container spearers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col=xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-height p-4 mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"contain-fit\",\n                                src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                width: \"300\",\n                                alt: \"\".concat(first, \" \").concat(last)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                lineNumber: 13,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"Speaker-info\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-between mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-truncate w-200\",\n                                        children: [\n                                            first,\n                                            \" \",\n                                            last\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            bio,\n                                            \" \",\n                                            company,\n                                            \" \",\n                                            twitterHandle,\n                                            \" \",\n                                            favorite\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sessionBox card h-250\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"session w-100\",\n                                children: [\n                                    sessions[0].title,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            \" Room: \",\n                                            sessions[0].room.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 53\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBcUM7QUFHckMsTUFBTUMsWUFBWSxJQUFNO0lBRXBCLE1BQU0sRUFBRUMsR0FBRSxFQUFFQyxJQUFHLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFQyxTQUFRLEVBQUcsR0FBR1QsaURBQU87SUFDckYscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDQztnQ0FDR0QsV0FBVTtnQ0FDVkUsS0FBSyxtQkFBc0IsT0FBSFgsSUFBRztnQ0FDM0JZLE9BQU07Z0NBQ05DLEtBQUssR0FBWVYsT0FBVEQsT0FBTSxLQUFRLE9BQUxDOzs7Ozs7Ozs7OztzQ0FHekIsOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNLO3dDQUFHTCxXQUFVOzs0Q0FDVFA7NENBQU07NENBQUVDOzs7Ozs7Ozs7Ozs7OENBSWpCLDhEQUFDSzs4Q0FDRyw0RUFBQ087OzRDQUFHZDs0Q0FBSTs0Q0FBRUs7NENBQVE7NENBQUVEOzRDQUFjOzRDQUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUc1Qyw4REFBQ0k7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNPO2dDQUFLUCxXQUFVOztvQ0FDWEYsUUFBUSxDQUFDLEVBQUUsQ0FBQ1UsS0FBSztvQ0FBQztrREFBQyw4REFBQ0M7OzRDQUFPOzRDQUFRWCxRQUFRLENBQUMsRUFBRSxDQUFDWSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RjtBQUVBLCtEQUFlckIsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIlxyXG5cclxuXHJcbmNvbnN0IGluZGV4UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGlkLCBiaW8sIGZpcnN0LCBsYXN0LCBmYXZvcml0ZSwgdHdpdHRlckhhbmRsZSwgY29tcGFueSwgc2Vzc2lvbnMsIH0gPSBkYXRhWzBdXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFyZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sPXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nlc3Npb25zWzBdLnRpdGxlfSA8c3Ryb25nPiBSb29tOiB7c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFBhZ2VcclxuIl0sIm5hbWVzIjpbImRhdGEiLCJpbmRleFBhZ2UiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDMiLCJwIiwic3BhbiIsInRpdGxlIiwic3Ryb25nIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});