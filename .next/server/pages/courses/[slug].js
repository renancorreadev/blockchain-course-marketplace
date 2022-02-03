"use strict";
(() => {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 8448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Course),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6669);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3009);
/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2975);
/* harmony import */ var _components_ui_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(492);
/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1935);
/* harmony import */ var _content_courses_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6786);









function Course({
  course
}) {
  var _ownedCourse$data;

  const {
    isLoading
  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
  const {
    account
  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mA)();
  const {
    ownedCourse
  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useOwnedCourse */ .L2)(course, account.data);
  const courseState = (_ownedCourse$data = ownedCourse.data) === null || _ownedCourse$data === void 0 ? void 0 : _ownedCourse$data.state; // const courseState = "deactivated"

  const isLocked = !courseState || courseState === "purchased" || courseState === "deactivated";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "py-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_4__/* .CourseHero */ .FP, {
        hasOwner: !!ownedCourse.data,
        title: course.title,
        description: course.description,
        image: course.coverImage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_4__/* .Keypoints */ .Zb, {
      points: course.wsl
    }), courseState && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "max-w-5xl mx-auto",
      children: [courseState === "purchased" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_3__/* .Message */ .v0, {
        type: "warning",
        children: ["Course is purchased and waiting for the activation. Process can take up to 24 hours.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "block font-normal",
          children: "In case of any questions, please contact info@eincode.com"
        })]
      }), courseState === "activated" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_3__/* .Message */ .v0, {
        type: "success",
        children: "Eincode wishes you happy watching of the course."
      }), courseState === "deactivated" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_common__WEBPACK_IMPORTED_MODULE_3__/* .Message */ .v0, {
        type: "danger",
        children: ["Course has been deactivated, due the incorrect purchase data. The functionality to watch the course has been temporaly disabled.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "block font-normal",
          children: "Please contact info@eincode.com"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_4__/* .Curriculum */ .NX, {
      isLoading: isLoading,
      locked: isLocked,
      courseState: courseState
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_common__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {})]
  });
}
function getStaticPaths() {
  const {
    data
  } = (0,_content_courses_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .getAllCourses */ .V)();
  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  };
}
function getStaticProps({
  params
}) {
  const {
    data
  } = (0,_content_courses_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .getAllCourses */ .V)();
  const course = data.filter(c => c.slug === params.slug)[0];
  return {
    props: {
      course
    }
  };
}
Course.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_5__/* .BaseLayout */ .I;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,14,786], () => (__webpack_exec__(8448)));
module.exports = __webpack_exports__;

})();