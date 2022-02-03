"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Marketplace),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/ui/course/index.js + 8 modules
var ui_course = __webpack_require__(492);
// EXTERNAL MODULE: ./components/ui/layout/index.js + 1 modules
var layout = __webpack_require__(1935);
// EXTERNAL MODULE: ./content/courses/fetcher.js + 1 modules
var fetcher = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/hooks/web3/index.js
var hooks_web3 = __webpack_require__(6669);
// EXTERNAL MODULE: ./components/ui/common/index.js + 10 modules
var common = __webpack_require__(2975);
// EXTERNAL MODULE: ./components/hooks/useEthPrice.js
var useEthPrice = __webpack_require__(5100);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/ui/order/modal/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultOrder = {
  price: '',
  email: '',
  confirmationEmail: ''
};

const _createFormState = (isDisabled = false, message = '') => ({
  isDisabled,
  message
});

const createFormState = ({
  price,
  email,
  confirmationEmail
}, hasAgreedTOS, isNewPurchase) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, 'Price is not valid.');
  }

  if (isNewPurchase) {
    if (confirmationEmail.length === 0 || email.length === 0) {
      return _createFormState(true);
    } else if (email !== confirmationEmail) {
      return _createFormState(true, 'Email are not matching.');
    }
  }

  if (!hasAgreedTOS) {
    return _createFormState(true, 'You need to agree with terms of service in order to submit the form');
  }

  return _createFormState();
};

function OrderModal({
  course,
  onClose,
  onSubmit,
  isNewPurchase
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: order,
    1: setOrder
  } = (0,external_react_.useState)(defaultOrder);
  const {
    0: enablePrice,
    1: setEnablePrice
  } = (0,external_react_.useState)(false);
  const {
    0: hasAgreedTOS,
    1: setHasAgreedTOS
  } = (0,external_react_.useState)(false);
  const {
    eth
  } = (0,useEthPrice/* useEthPrice */.B)();
  (0,external_react_.useEffect)(() => {
    if (!!course) {
      setIsOpen(true);
      setOrder(_objectSpread(_objectSpread({}, defaultOrder), {}, {
        price: eth.perItem
      }));
    }
  }, [course]);

  const closeModal = () => {
    setIsOpen(false);
    setOrder(defaultOrder);
    setEnablePrice(false);
    setHasAgreedTOS(false);
    onClose();
  };

  const formState = createFormState(order, hasAgreedTOS, isNewPurchase);
  return /*#__PURE__*/jsx_runtime_.jsx(common/* Modal */.u_, {
    isOpen: isOpen,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sm:flex sm:items-start",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-3 sm:mt-0 sm:ml-4 sm:text-left",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "mb-7 text-lg font-bold leading-6 text-white-900",
              id: "modal-title",
              children: course.title
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-1 relative rounded-md",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mb-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "mb-2 font-bold",
                  children: "Price(BNB)"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "text-xs text-white-700 flex",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "flex items-center mr-2",
                    children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                      checked: enablePrice,
                      onChange: ({
                        target: {
                          checked
                        }
                      }) => {
                        setOrder(_objectSpread(_objectSpread({}, order), {}, {
                          price: checked ? order.price : eth.perItem
                        }));
                        setEnablePrice(checked);
                      },
                      type: "checkbox",
                      className: "form-checkbox"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Adjust Price - only when the price is not correct"
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                disabled: !enablePrice,
                value: order.price,
                onChange: ({
                  target: {
                    value
                  }
                }) => {
                  if (isNaN(value)) {
                    return;
                  }

                  setOrder(_objectSpread(_objectSpread({}, order), {}, {
                    price: value
                  }));
                },
                type: "text",
                name: "price",
                id: "price",
                className: "disabled:opacity-50 w-80 mb-1 focus:ring-green-500 shadow-md focus:border-green-500 block pl-7 p-4 sm:text-sm border-white-300 rounded-md"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-xs text-white-700",
                children: "Price will be verified at the time of the order. If the price will be lower, order can be declined (+- 2% slipage is allowed)"
              })]
            }), isNewPurchase && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mt-2 relative rounded-md",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "mb-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "mb-2 font-bold",
                    children: "Email"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  onChange: ({
                    target: {
                      value
                    }
                  }) => {
                    setOrder(_objectSpread(_objectSpread({}, order), {}, {
                      email: value.trim()
                    }));
                  },
                  type: "email",
                  name: "email",
                  id: "email",
                  className: "w-80 focus:ring-green-500 shadow-md focus:border-green-500 block pl-7 p-4 sm:text-sm border-white-300 rounded-md",
                  placeholder: "x@y.com"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-xs text-white-700 mt-1",
                  children: "It's important to fill a correct email, otherwise the order cannot be verified. We are not storing your email anywhere"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "my-2 relative rounded-md",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "mb-1",
                  children: /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "mb-2 font-bold",
                    children: "Repeat Email"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  onChange: ({
                    target: {
                      value
                    }
                  }) => {
                    setOrder(_objectSpread(_objectSpread({}, order), {}, {
                      confirmationEmail: value.trim()
                    }));
                  },
                  type: "email",
                  name: "confirmationEmail",
                  id: "confirmationEmail",
                  className: "w-80 focus:ring-green-500 shadow-md focus:border-green-500 block pl-7 p-4 sm:text-sm border-white-300 rounded-md",
                  placeholder: "x@y.com"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-xs text-white-700 flex mt-5",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                className: "flex items-center mr-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  checked: hasAgreedTOS,
                  onChange: ({
                    target: {
                      checked
                    }
                  }) => {
                    setHasAgreedTOS(checked);
                  },
                  type: "checkbox",
                  className: "form-checkbox"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "I accept Eincode 'terms of service' and I agree that my order can be rejected in the case data provided above are not correct"
              })]
            }), formState.message && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "p-4 my-3 text-yellow-700 bg-yellow-200 rounded-lg text-sm",
              children: formState.message
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "bg-white-50 px-4 py-3 sm:px-6 sm:flex",
        children: [/*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
          disabled: formState.isDisabled,
          onClick: () => {
            onSubmit(order, course);
          },
          children: "Submit"
        }), /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
          onClick: closeModal,
          variant: "red",
          children: "Cancel"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/order/index.js

// EXTERNAL MODULE: ./components/ui/marketplace/index.js + 4 modules
var marketplace = __webpack_require__(7817);
// EXTERNAL MODULE: ./components/providers/index.js
var providers = __webpack_require__(3009);
// EXTERNAL MODULE: ./utils/toast.js
var toast = __webpack_require__(3075);
;// CONCATENATED MODULE: ./pages/marketplace/index.js




function marketplace_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function marketplace_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { marketplace_ownKeys(Object(source), true).forEach(function (key) { marketplace_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { marketplace_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function marketplace_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Marketplace({
  courses
}) {
  const {
    web3,
    contract,
    requireInstall
  } = (0,providers/* useWeb3 */.$)();
  const {
    hasConnectedWallet,
    isConnecting,
    account
  } = (0,hooks_web3/* useWalletInfo */.vL)();
  const {
    ownedCourses
  } = (0,hooks_web3/* useOwnedCourses */.Ce)(courses, account.data);
  const {
    0: selectedCourse,
    1: setSelectedCourse
  } = (0,external_react_.useState)(null);
  const {
    0: busyCourseId,
    1: setBusyCourseId
  } = (0,external_react_.useState)(null);
  const {
    0: isNewPurchase,
    1: setIsNewPurchase
  } = (0,external_react_.useState)(true);

  const purchaseCourse = async (order, course) => {
    const hexCourseId = web3.utils.utf8ToHex(course.id);
    const orderHash = web3.utils.soliditySha3({
      type: "bytes16",
      value: hexCourseId
    }, {
      type: "address",
      value: account.data
    });
    const value = web3.utils.toWei(String(order.price));
    setBusyCourseId(course.id);

    if (isNewPurchase) {
      const emailHash = web3.utils.sha3(order.email);
      const proof = web3.utils.soliditySha3({
        type: "bytes32",
        value: emailHash
      }, {
        type: "bytes32",
        value: orderHash
      });
      (0,toast/* withToast */.f)(_purchaseCourse({
        hexCourseId,
        proof,
        value
      }, course));
    } else {
      (0,toast/* withToast */.f)(_repurchaseCourse({
        courseHash: orderHash,
        value
      }, course));
    }
  };

  const _purchaseCourse = async ({
    hexCourseId,
    proof,
    value
  }, course) => {
    try {
      const result = await contract.methods.purchaseCourse(hexCourseId, proof).send({
        from: account.data,
        value
      });
      ownedCourses.mutate([...ownedCourses.data, marketplace_objectSpread(marketplace_objectSpread({}, course), {}, {
        proof,
        state: "purchased",
        owner: account.data,
        price: value
      })]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setBusyCourseId(null);
    }
  };

  const _repurchaseCourse = async ({
    courseHash,
    value
  }, course) => {
    try {
      const result = await contract.methods.repurchaseCourse(courseHash).send({
        from: account.data,
        value
      });
      const index = ownedCourses.data.findIndex(c => c.id === course.id);

      if (index >= 0) {
        ownedCourses.data[index].state = "purchased";
        ownedCourses.mutate(ownedCourses.data);
      } else {
        ownedCourses.mutate();
      }

      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setBusyCourseId(null);
    }
  };

  const cleanupModal = () => {
    setSelectedCourse(null);
    setIsNewPurchase(true);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(marketplace/* MarketHeader */.Y, {}), /*#__PURE__*/jsx_runtime_.jsx(ui_course/* CourseList */.cQ, {
      courses: courses,
      children: course => {
        const owned = ownedCourses.lookup[course.id];
        return /*#__PURE__*/jsx_runtime_.jsx(ui_course/* CourseCard */.Pg, {
          course: course,
          state: owned === null || owned === void 0 ? void 0 : owned.state,
          disabled: !hasConnectedWallet,
          Footer: () => {
            if (requireInstall) {
              return /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
                size: "sm",
                disabled: true,
                variant: "lightPurple",
                children: "Install"
              });
            }

            if (isConnecting) {
              return /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
                size: "sm",
                disabled: true,
                variant: "lightPurple",
                children: /*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {
                  size: "sm"
                })
              });
            }

            if (!ownedCourses.hasInitialResponse) {
              return (
                /*#__PURE__*/
                // <div style={{height: "42px"}}></div>
                jsx_runtime_.jsx(common/* Button */.zx, {
                  variant: "white",
                  disabled: true,
                  size: "sm",
                  children: hasConnectedWallet ? "Loading State..." : "Connect"
                })
              );
            }

            const isBusy = busyCourseId === course.id;

            if (owned) {
              return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
                    onClick: () => alert("You are owner of this course."),
                    disabled: false,
                    size: "sm",
                    variant: "white",
                    children: "Yours \u2714"
                  }), owned.state === "deactivated" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "ml-1",
                    children: /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
                      size: "sm",
                      disabled: isBusy,
                      onClick: () => {
                        setIsNewPurchase(false);
                        setSelectedCourse(course);
                      },
                      variant: "purple",
                      children: isBusy ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {
                          size: "sm"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "ml-2",
                          children: "In Progress"
                        })]
                      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                        children: "Fund to Activate"
                      })
                    })
                  })]
                })
              });
            }

            return /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
              onClick: () => setSelectedCourse(course),
              size: "sm",
              disabled: !hasConnectedWallet || isBusy,
              variant: "lightPurple",
              children: isBusy ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [/*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {
                  size: "sm"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "ml-2",
                  children: "In Progress"
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Purchase"
              })
            });
          }
        }, course.id);
      }
    }), selectedCourse && /*#__PURE__*/jsx_runtime_.jsx(OrderModal, {
      course: selectedCourse,
      isNewPurchase: isNewPurchase,
      onSubmit: (formData, course) => {
        purchaseCourse(formData, course);
        cleanupModal();
      },
      onClose: cleanupModal
    })]
  });
}
function getStaticProps() {
  const {
    data
  } = (0,fetcher/* getAllCourses */.V)();
  return {
    props: {
      courses: data
    }
  };
}
Marketplace.Layout = layout/* BaseLayout */.I;

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

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,14,786,100,817,75], () => (__webpack_exec__(229)));
module.exports = __webpack_exports__;

})();