"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/providers/alchemy/dist/wagmi-providers-alchemy.esm.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/providers/public/dist/wagmi-providers-public.esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.arbitrum\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_3__.alchemyProvider)({\n        apiKey: process.env.ALCHEMY_ID\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\beries-nextjs\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\beries-nextjs\\\\pages\\\\_app.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\beries-nextjs\\\\pages\\\\_app.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, pageProps), void 0, false, {\n        fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\beries-nextjs\\\\pages\\\\_app.js\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, this);\n}\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUI7QUFDc0I7QUFLWDtBQU1qQjtBQUMyQztBQUNGO0FBRXhELElBQTZCRyxHQU01QixHQU40QkEsc0RBQWUsQ0FDMUM7SUFBQ0QsZ0RBQWE7SUFBRUEsZ0RBQWE7SUFBRUEsaURBQWM7SUFBRUEsaURBQWM7Q0FBQyxFQUM5RDtJQUNFSSx3RUFBZSxDQUFDO1FBQUVNLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVU7S0FBRSxDQUFDO0lBQ25EUixzRUFBYyxFQUFFO0NBQ2pCLENBQ0YsRUFOT1MsTUFBTSxHQUFlYixHQU01QixDQU5PYSxNQUFNLEVBQUVDLFFBQVEsR0FBS2QsR0FNNUIsQ0FOZWMsUUFBUTtBQVF4QixJQUFNLFVBQVksR0FBS2pCLHlFQUFpQixDQUFDO0lBQ3ZDbUIsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkgsTUFBTSxFQUFOQSxNQUFNO0NBQ1AsQ0FBQyxDQUhNRSxVQUFVO0FBS2xCLElBQU1FLFdBQVcsR0FBR2hCLG1EQUFZLENBQUM7SUFDL0JpQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZELFFBQVEsRUFBUkEsUUFBUTtDQUNULENBQUM7QUFFYSxTQUFTSyxLQUFLLENBQUMsS0FHN0IsRUFBRTtRQUZEQyxTQUFvQixHQURRLEtBRzdCLENBRkNBLFNBQVMsRUFDVEMsU0FBb0IsR0FGUSxLQUc3QixDQURDQSxTQUFTO0lBRVQscUJBQ0UsOERBQUNuQiw4Q0FBVztRQUFDb0IsTUFBTSxFQUFFTCxXQUFXO2tCQUM5Qiw0RUFBQ25CLHNFQUFrQjtZQUFDZSxNQUFNLEVBQUVBLE1BQU07c0JBQ2xDLDRFQUFDTyxTQUFTLHFGQUFLQyxTQUFTOzs7O29CQUFJOzs7OztnQkFDUDs7Ozs7WUFDVCxDQUNkO0lBQ0YscUJBQU8sOERBQUNELFNBQVMscUZBQUtDLFNBQVM7Ozs7WUFBSSxDQUFDO0FBQ3RDLENBQUM7QUFadUJGLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xyXG5pbXBvcnQge1xyXG4gIGNoYWluLFxyXG4gIGNvbmZpZ3VyZUNoYWlucyxcclxuICBjcmVhdGVDbGllbnQsXHJcbiAgV2FnbWlDb25maWcsXHJcbn0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvYWxjaGVteSc7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XHJcblxyXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4ucG9seWdvbiwgY2hhaW4ub3B0aW1pc20sIGNoYWluLmFyYml0cnVtXSxcclxuICBbXHJcbiAgICBhbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfSUQgfSksXHJcbiAgICBwdWJsaWNQcm92aWRlcigpXHJcbiAgXVxyXG4pO1xyXG5cclxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XHJcbiAgYXBwTmFtZTogJ015IFJhaW5ib3dLaXQgQXBwJyxcclxuICBjaGFpbnNcclxufSk7XHJcblxyXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoe1xyXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxyXG4gIHBhZ2VQcm9wczogcGFnZVByb3BzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiYWxjaGVteVByb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUxDSEVNWV9JRCIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});