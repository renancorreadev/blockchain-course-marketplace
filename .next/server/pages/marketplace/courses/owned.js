"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 1350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OwnedCourses),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6669);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2975);
/* harmony import */ var _components_ui_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(492);
/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
/* harmony import */ var _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7817);
/* harmony import */ var _content_courses_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6786);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3009);












function OwnedCourses({
  courses
}) {
  var _ownedCourses$data;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    requireInstall
  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_9__/* .useWeb3 */ .$)();
  const {
    account
  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
  const {
    ownedCourses
  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useOwnedCourses */ .Ce)(courses, account.data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_marketplace__WEBPACK_IMPORTED_MODULE_5__/* .MarketHeader */ .Y, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
      className: "grid grid-cols-1",
      children: [ownedCourses.isEmpty && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-1/2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Message */ .v0, {
          type: "warning",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "You don't own any courses"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__.default, {
            href: "/marketplace",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              className: "font-normal hover:underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                children: "Purchase Course"
              })
            })
          })]
        })
      }), account.isEmpty && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-1/2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Message */ .v0, {
          type: "warning",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Please connect to Metamask"
          })
        })
      }), requireInstall && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-1/2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Message */ .v0, {
          type: "warning",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Please install Metamask"
          })
        })
      }), (_ownedCourses$data = ownedCourses.data) === null || _ownedCourses$data === void 0 ? void 0 : _ownedCourses$data.map(course => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_3__/* .OwnedCourseCard */ .fB, {
        course: course,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
          onClick: () => router.push(`/courses/${course.slug}`),
          children: "Watch the course"
        })
      }, course.id))]
    })]
  });
}
function getStaticProps() {
  const {
    data
  } = (0,_content_courses_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .getAllCourses */ .V)();
  return {
    props: {
      courses: data
    }
  };
}
OwnedCourses.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_4__/* .BaseLayout */ .I;

/***/ }),

/***/ 5962:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3983:
/***/ ((module) => {

module.exports = require("react-elastic-carousel");

/***/ }),

/***/ 6737:
/***/ ((module) => {

module.exports = require("react-simple-animate");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 4409:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,14,786,100,817], () => (__webpack_exec__(1350)));
module.exports = __webpack_exports__;

})();