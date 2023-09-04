"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(8529);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Cfran_%5CDesktop%5CFran%5CAssis%20Solutions%5CProyectos%5CPortfolio%5Cmy-portfolio%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!C:\\Users\\fran_\\Desktop\\Fran\\Assis Solutions\\Proyectos\\Portfolio\\my-portfolio\\src\\app\\favicon.ico?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,109], () => (__webpack_exec__(2232)));
module.exports = __webpack_exports__;

})();