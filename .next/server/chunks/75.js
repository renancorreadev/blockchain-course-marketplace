"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ withToast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);



const withToast = promise => {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.promise(promise, {
    pending: {
      render() {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-6 py-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "mb-2",
            children: "Your transaction is being processed."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Hang tight... Just few more moments."
          })]
        });
      },

      icon: false
    },
    success: {
      render({
        data
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "font-bold",
            children: ["Tx: ", data.transactionHash.slice(0, 20), "..."]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Has been succesfuly processed."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `https://ropsten.etherscan.io/tx/${data.transactionHash}`,
            target: "_blank",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
              className: "text-green-600 underline",
              children: "See Tx Details"
            })
          })]
        });
      },

      // other options
      icon: '🟢'
    },
    error: {
      render({
        data
      }) {
        var _data$message;

        // When the promise reject, data will contains the error
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: (_data$message = data.message) !== null && _data$message !== void 0 ? _data$message : 'Transaction has failed'
        });
      }

    }
  }, {
    closeButton: true
  });
};

/***/ })

};
;