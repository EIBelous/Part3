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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n\n\nfunction Session(props) {\n    const { title , room  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"sessin w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \" Room: \",\n                    room\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nconst indexPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                const { id , bio , first , last , favorite , twitterHandle , company , sessions  } = speaker;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card card-height p-4 mt-4 border border-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"contain-fit\",\n                                    src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                    width: \"300\",\n                                    alt: \"\".concat(first, \" \").concat(last)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"speaker-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between mb-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-truncate w-200\",\n                                            children: [\n                                                first,\n                                                \" \",\n                                                last\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                bio,\n                                                \" \",\n                                                company,\n                                                \" \",\n                                                twitterHandle,\n                                                \" \",\n                                                favorite\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sessionBox card h-250\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                                    tittle: sessions[0].title,\n                                    room: sessions[0].room.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 25\n                    }, this)\n                }, id, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 25\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexPage);\nvar _c;\n$RefreshReg$(_c, \"Session\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBcUM7QUFFckMsU0FBU0MsUUFBUUMsS0FBSyxFQUFDO0lBQ25CLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxLQUFJLEVBQUMsR0FBQ0Y7SUFDcEIscUJBRUksOERBQUNHO1FBQUtDLFdBQVU7O1lBQ1hIO1lBQU07MEJBQUMsOERBQUNJOztvQkFBTztvQkFBUUg7Ozs7Ozs7Ozs7Ozs7QUFHcEM7S0FSU0g7QUFTVCxNQUFNTyxZQUFZLElBQU07SUFJcEIscUJBR0ksOERBQUNDO1FBQUlILFdBQVU7a0JBQ1gsNEVBQUNHO1lBQUlILFdBQVU7c0JBQ1ZOLGtEQUFRLENBQUMsU0FBU1csT0FBTyxFQUFDO2dCQUN0QixNQUFNLEVBQUVDLEdBQUUsRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFHLEdBQUdSO2dCQUU5RSxxQkFDRyw4REFBQ0Y7b0JBQ0RILFdBQVU7OEJBQ1YsNEVBQUNHO3dCQUFJSCxXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQUlILFdBQVU7MENBQ2YsNEVBQUNjO29DQUNHZCxXQUFVO29DQUNWZSxLQUFLLG1CQUFzQixPQUFIVCxJQUFHO29DQUMzQlUsT0FBTTtvQ0FDTkMsS0FBSyxHQUFZUixPQUFURCxPQUFNLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7OzBDQUlyQiw4REFBQ047Z0NBQUlILFdBQVU7O2tEQUNYLDhEQUFDRzt3Q0FBSUgsV0FBVTtrREFDWCw0RUFBQ2tCOzRDQUFHbEIsV0FBVTs7Z0RBQ1RRO2dEQUFNO2dEQUFFQzs7Ozs7Ozs7Ozs7O2tEQUdqQiw4REFBQ047d0NBQUlILFdBQVU7a0RBQ1gsNEVBQUNtQjs7Z0RBQUdaO2dEQUFJO2dEQUFFSztnREFBUTtnREFBRUQ7Z0RBQWM7Z0RBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzVDLDhEQUFDUDtnQ0FBSUgsV0FBVTswQ0FDWCw0RUFBQ0w7b0NBQVF5QixRQUFRUCxRQUFRLENBQUMsRUFBRSxDQUFDaEIsS0FBSztvQ0FBRUMsTUFBTWUsUUFBUSxDQUFDLEVBQUUsQ0FBQ2YsSUFBSSxDQUFDdUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBdkI3RGY7Ozs7O1lBNkJsQjs7Ozs7Ozs7Ozs7QUFNaEI7QUFFQSwrREFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vU3BlYWtlckRhdGFcIlxyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbihwcm9wcyl7XHJcbiAgICBjb25zdCB7dGl0bGUsIHJvb219PXByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3NpbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+IFJvb206IHtyb29tfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgaW5kZXhQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbihzcGVha2VyKXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYmlvLCBmaXJzdCwgbGFzdCwgZmF2b3JpdGUsIHR3aXR0ZXJIYW5kbGUsIGNvbXBhbnksIHNlc3Npb25zLCB9ID0gc3BlYWtlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNCAgYm9yZGVyIGJvcmRlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlc3Npb24gdGl0dGxlPXtzZXNzaW9uc1swXS50aXRsZX0gcm9vbT17c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4UGFnZVxyXG4iXSwibmFtZXMiOlsiZGF0YSIsIlNlc3Npb24iLCJwcm9wcyIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJpbmRleFBhZ2UiLCJkaXYiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJiaW8iLCJmaXJzdCIsImxhc3QiLCJmYXZvcml0ZSIsInR3aXR0ZXJIYW5kbGUiLCJjb21wYW55Iiwic2Vzc2lvbnMiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsImgzIiwicCIsInRpdHRsZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});