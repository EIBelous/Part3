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

/***/ "./src/components/SpeakerAdd.js":
/*!**************************************!*\
  !*** ./src/components/SpeakerAdd.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SpeakerAdd(param) {\n    let { eventYear , insertRecord  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: \"addSes\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            onClick: (e)=>{\n                e.preventDefault();\n                const firstLast = window.prompt(\"Enter first and last name\");\n                const firstLastArray = firstLast.split(\"\");\n                insertRecord({\n                    id: \"9999\",\n                    first: firstLastArray[0],\n                    last: firstLastArray[1],\n                    bio: \"Bio not entered yet\",\n                    sessions: [\n                        {\n                            id: \"8888\",\n                            title: \"New Session for \".concat(firsLastArray[0]),\n                            room: {\n                                name: \"Main ball Room\"\n                            },\n                            eventYear\n                        }\n                    ]\n                });\n            },\n            children: \"+\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakerAdd.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakerAdd.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n_c = SpeakerAdd;\nvar _c;\n$RefreshReg$(_c, \"SpeakerAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyQWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUEsU0FBU0EsV0FBVyxLQUF5QixFQUFDO1FBQTFCLEVBQUNDLFVBQVMsRUFBRUMsYUFBWSxFQUFDLEdBQXpCO0lBQ2hCLHFCQUNJLDhEQUFDQztRQUFFQyxNQUFLO1FBQUlDLFdBQVU7a0JBQ2xCLDRFQUFDQztZQUFFQyxTQUFTLENBQUNDLElBQUk7Z0JBQ2JBLEVBQUVDLGNBQWM7Z0JBQ2hCLE1BQU1DLFlBQVdDLE9BQU9DLE1BQU0sQ0FBQztnQkFDL0IsTUFBTUMsaUJBQWlCSCxVQUFVSSxLQUFLLENBQUM7Z0JBQ3ZDWixhQUFhO29CQUNUYSxJQUFJO29CQUNKQyxPQUFRSCxjQUFjLENBQUMsRUFBRTtvQkFDekJJLE1BQU1KLGNBQWMsQ0FBQyxFQUFFO29CQUFFSyxLQUFLO29CQUM5QkMsVUFBUzt3QkFDTDs0QkFDSUosSUFBRzs0QkFDSEssT0FBTSxtQkFBb0MsT0FBakJDLGFBQWEsQ0FBQyxFQUFFOzRCQUN6Q0MsTUFBSztnQ0FDREMsTUFBSzs0QkFDVDs0QkFDQXRCO3dCQUNKO3FCQUNIO2dCQUNMO1lBQ0o7c0JBQUc7Ozs7Ozs7Ozs7O0FBS2Y7S0EzQlNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJBZGQuanM/M2IyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTcGVha2VyQWRkKHtldmVudFllYXIsIGluc2VydFJlY29yZH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XHJcbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMYXN0PSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgZmlyc3QgYW5kIGxhc3QgbmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RMYXN0QXJyYXkgPSBmaXJzdExhc3Quc3BsaXQoJycpO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0UmVjb3JkKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCI5OTk5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgOiBmaXJzdExhc3RBcnJheVswXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0OiBmaXJzdExhc3RBcnJheVsxXSwgYmlvOiBcIkJpbyBub3QgZW50ZXJlZCB5ZXRcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOic4ODg4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOmBOZXcgU2Vzc2lvbiBmb3IgJHtmaXJzTGFzdEFycmF5WzBdfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOlwiTWFpbiBiYWxsIFJvb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50WWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNwZWFrZXJBZGQiLCJldmVudFllYXIiLCJpbnNlcnRSZWNvcmQiLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsImkiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3RMYXN0Iiwid2luZG93IiwicHJvbXB0IiwiZmlyc3RMYXN0QXJyYXkiLCJzcGxpdCIsImlkIiwiZmlyc3QiLCJsYXN0IiwiYmlvIiwic2Vzc2lvbnMiLCJ0aXRsZSIsImZpcnNMYXN0QXJyYXkiLCJyb29tIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerAdd.js\n"));

/***/ }),

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder/lib */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useRequestDelay */ \"./src/components/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _contexts_speakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/speakerFilterContext */ \"./src/components/contexts/speakerFilterContext.js\");\n/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerAdd */ \"./src/components/SpeakerAdd.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SpeakersList() {\n    _s();\n    const { data: speakersData , requestStatus , error , updateRecord , deleteRecord , insertRecord  } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);\n    const { searchQuery , eventYear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_speakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-danger\",\n        children: [\n            \"ERROR:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                children: [\n                    \"Downloading failed \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 24,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 23,\n        columnNumber: 13\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"media\",\n            rows: 20,\n            className: \"speakerslist-placeholder bg-red\",\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCES,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    eventYear: eventYear,\n                    insertRecord: insertRecord\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: speakersData.filter(function(speaker) {\n                        return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                    }).filter(function(speaker) {\n                        return speaker.sessions.find((session)=>{\n                            return session.eventYear === eventYear;\n                        });\n                    }).map(function(speaker) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            speaker: speaker,\n                            updateRecord: updateRecord,\n                            insertRecord: insertRecord,\n                            deleteRecord: deleteRecord\n                        }, speaker.id, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                            lineNumber: 55,\n                            columnNumber: 29\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\PluralSight\\\\React\\\\Part3\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"RD8xFKdVRxI6znYWzwsrsDo9Af8=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFDSjtBQUNzQjtBQUNvQjtBQUNuQztBQUM4QjtBQUMvQjtBQUNyQyxTQUFTUSxlQUFlOztJQUNwQixNQUFNLEVBQ0hILE1BQU1JLGFBQVksRUFDakJDLGNBQWEsRUFDYkMsTUFBSyxFQUNMQyxhQUFZLEVBQ1pDLGFBQVksRUFDWkMsYUFBWSxFQUNmLEdBQUdYLGtFQUFlQSxDQUFDLE1BQU1FLDhDQUFJQTtJQUU5QixNQUFNLEVBQUNVLFlBQVcsRUFBQ0MsVUFBUyxFQUFDLEdBQUdoQixpREFBVUEsQ0FBQ00sZ0ZBQW9CQTtJQUcvRCxJQUFJSSxrQkFBa0JOLDBFQUFzQixFQUN4QyxxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTs7WUFBYzswQkFDbkIsOERBQUNDOztvQkFBRTtvQkFBb0JUOzs7Ozs7Ozs7Ozs7O0lBSXpDLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDakIsNkRBQWdCQTtZQUNibUIsTUFBSztZQUNMQyxNQUFNO1lBQ05ILFdBQVU7WUFDVkksT0FBT2Isa0JBQWtCTix5RUFBcUI7OzhCQUU5Qyw4REFBQ0csbURBQVVBO29CQUFDUyxXQUFXQTtvQkFDdkJGLGNBQWNBOzs7Ozs7OEJBQ2QsOERBQUNJO29CQUFJQyxXQUFVOzhCQUNWVixhQUNBZ0IsTUFBTSxDQUFDLFNBQVNDLE9BQU8sRUFBQzt3QkFDckIsT0FDSUEsUUFBUUMsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsZ0JBQ3JDVyxRQUFRSSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDZDtvQkFHNUMsR0FDQ1UsTUFBTSxDQUFDLFNBQVNDLE9BQU8sRUFBQzt3QkFDckIsT0FBUUEsUUFBUUssUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsVUFBVzs0QkFDbEMsT0FBT0EsUUFBUWpCLFNBQVMsS0FBS0E7d0JBQ2pDO29CQUVSLEdBQ0NrQixHQUFHLENBQUMsU0FBVVIsT0FBTyxFQUFFO3dCQUNwQixxQkFDSSw4REFBQ3pCLGdEQUFPQTs0QkFDSnlCLFNBQVNBOzRCQUNaZCxjQUFnQkE7NEJBQ2hCRSxjQUFnQkE7NEJBQ2hCRCxjQUFnQkE7MkJBSkhhLFFBQVFTLEVBQUU7Ozs7O29CQU9oQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0EzRFMzQjs7UUFRREwsOERBQWVBOzs7S0FSZEs7QUE2RFQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJ1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tICdyZWFjdC1wbGFjZWhvbGRlci9saWInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7UkVRVUVTVF9TVEFUVVN9ICBmcm9tICcuL2hvb2tzL3VzZVJlcXVlc3REZWxheSc7XHJcbmltcG9ydCB7ZGF0YX0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCJcclxuaW1wb3J0IHtTcGVha2VyRmlsdGVyQ29udGV4dH0gZnJvbSAnLi9jb250ZXh0cy9zcGVha2VyRmlsdGVyQ29udGV4dCdcclxuaW1wb3J0IFNwZWFrZXJBZGQgZnJvbSAnLi9TcGVha2VyQWRkJ1xyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvciwgXHJcbiAgICAgICAgdXBkYXRlUmVjb3JkLFxyXG4gICAgICAgIGRlbGV0ZVJlY29yZCxcclxuICAgICAgICBpbnNlcnRSZWNvcmRcclxuICAgIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSlcclxuXHJcbiAgICBjb25zdCB7c2VhcmNoUXVlcnksZXZlbnRZZWFyfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG5cclxuXHJcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPlxyXG4gICAgICAgICAgICAgICAgRVJST1I6PGI+RG93bmxvYWRpbmcgZmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICByb3dzPXsyMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlciBiZy1yZWRcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJBZGQgZXZlbnRZZWFyPXtldmVudFllYXJ9IFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oc3BlYWtlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oc3BlYWtlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQgPSB7dXBkYXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJlY29yZCA9IHtpbnNlcnRSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUmVjb3JkID0ge2RlbGV0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdCJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU3BlYWtlciIsIlJlYWN0UGxhY2Vob2xkZXIiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJSRVFVRVNUX1NUQVRVUyIsImRhdGEiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJBZGQiLCJTcGVha2Vyc0xpc3QiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJzZWFyY2hRdWVyeSIsImV2ZW50WWVhciIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJyZWFkeSIsIlNVQ0NFUyIsImZpbHRlciIsInNwZWFrZXIiLCJmaXJzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsYXN0Iiwic2Vzc2lvbnMiLCJmaW5kIiwic2Vzc2lvbiIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});