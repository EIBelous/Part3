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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"sesion w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: [\n                            bio,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , showSessions  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col=xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 82,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURlYnVnVmFsdWUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNlc3Npb24oeyB0aXRsZSwgcm9vbSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX0gPC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7IGlkLCBmaXJzdCwgbGFzdCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwIFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSh7ZmF2b3JpdGV9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgP1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoeyBmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTcGVha2VyRmF2b3JpdGVcclxuICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfS8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb30gPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT50d2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucyB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2w9eHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDpcclxuICAgICAgICAgICAgICAgIG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyIl0sIm5hbWVzIjpbInVzZURlYnVnVmFsdWUiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsImZhdm9yaXRlIiwiaSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});