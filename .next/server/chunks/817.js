"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 7817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/hooks/web3/index.js
var web3 = __webpack_require__(6669);
// EXTERNAL MODULE: ./components/ui/common/index.js + 10 modules
var common = __webpack_require__(2975);
// EXTERNAL MODULE: ./components/hooks/useEthPrice.js
var useEthPrice = __webpack_require__(5100);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/ui/web3/ethRates/index.js






function EthRates() {
  const {
    eth
  } = (0,useEthPrice/* useEthPrice */.B)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col xs:flex-row text-center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-6 border drop-shadow rounded-md mr-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: eth.data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            layout: "fixed",
            height: "30",
            width: "30",
            src: "/small-eth.webp",
            style: {
              Position: 'relative',
              marginLeft: '50px'
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-xl font-bold",
            style: {
              color: 'white'
            },
            children: ["= ", eth.data, "$"]
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full flex justify-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {
            size: "md"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-lg ",
        style: {
          color: 'white'
        },
        children: "Current BNB Price"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-6 border drop-shadow rounded-md",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: eth.data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-xl font-bold",
            style: {
              color: 'white'
            },
            children: eth.perItem
          }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            layout: "fixed",
            height: "30",
            width: "30",
            src: "/small-eth.webp"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-xl font-bold",
            style: {
              color: 'white'
            },
            children: ["= ", useEthPrice/* COURSE_PRICE */.x, "$"]
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full flex justify-center",
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {
            size: "md"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-lg text-white-500",
        style: {
          color: 'white'
        },
        children: "Price por curso"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./components/providers/index.js
var providers = __webpack_require__(3009);
;// CONCATENATED MODULE: ./components/ui/web3/walletbar/index.js





function WalletBar() {
  const {
    requireInstall
  } = (0,providers/* useWeb3 */.$)();
  const {
    account,
    network
  } = (0,web3/* useWalletInfo */.vL)();
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "text-white bg-green-600 rounded-lg",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: "text-base xs:text-xl break-words",
        children: ["Hello, ", account.data]
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "subtitle mb-5 text-sm xs:text-base",
        children: "I hope you are having a great day!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sm:flex sm:justify-center lg:justify-start",
          children: /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
            className: "mr-2 text-sm xs:text-lg p-2",
            variant: "white",
            children: "Learn how to purchase"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [network.hasInitialResponse && !network.isSupported && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "bg-red-400 p-4 rounded-lg",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "Connected to wrong network"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: ["Connect to: ", ` `, /*#__PURE__*/jsx_runtime_.jsx("strong", {
                className: "text-2xl",
                children: network.target
              })]
            })]
          }), requireInstall && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg-yellow-500 p-4 rounded-lg",
            children: "Cannot connect to network. Please install Metamask."
          }), network.data && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Currently on "
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "text-2xl",
              children: network.data
            })]
          })]
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/web3/index.js


;// CONCATENATED MODULE: ./components/ui/marketplace/header/index.js






const LINKS = [{
  href: "/marketplace",
  value: "Buy"
}, {
  href: "/marketplace/courses/owned",
  value: "My Courses"
}, {
  href: "/marketplace/courses/managed",
  value: "Manage Courses",
  requireAdmin: true
}];
function Header() {
  const {
    account
  } = (0,web3/* useAccount */.mA)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(WalletBar, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(EthRates, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row-reverse p-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/jsx_runtime_.jsx(common/* Breadcrumbs */.Oo, {
        isAdmin: account.isAdmin,
        items: LINKS
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/marketplace/index.js


/***/ })

};
;