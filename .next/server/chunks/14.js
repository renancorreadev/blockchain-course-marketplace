exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 6669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mA": () => (/* binding */ useAccount),
/* harmony export */   "Aj": () => (/* binding */ useAdmin),
/* harmony export */   "Ce": () => (/* binding */ useOwnedCourses),
/* harmony export */   "L2": () => (/* binding */ useOwnedCourse),
/* harmony export */   "J$": () => (/* binding */ useManagedCourses),
/* harmony export */   "vL": () => (/* binding */ useWalletInfo)
/* harmony export */ });
/* unused harmony export useNetwork */
/* harmony import */ var _components_providers_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1818);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3009);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const _isEmpty = data => {
  return data == null || data === "" || Array.isArray(data) && data.length === 0 || data.constructor === Object && Object.keys(data).length === 0;
};

const enhanceHook = swrRes => {
  const {
    data,
    error
  } = swrRes;
  const hasInitialResponse = !!(data || error);

  const isEmpty = hasInitialResponse && _isEmpty(data);

  return _objectSpread(_objectSpread({}, swrRes), {}, {
    isEmpty,
    hasInitialResponse
  });
};

const useNetwork = () => {
  const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)(hooks => hooks.useNetwork)());
  return {
    network: swrRes
  };
};
const useAccount = () => {
  const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)(hooks => hooks.useAccount)());
  return {
    account: swrRes
  };
};
const useAdmin = ({
  redirectTo
}) => {
  const {
    account
  } = useAccount();
  const {
    requireInstall
  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3 */ .$)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (requireInstall || account.hasInitialResponse && !account.isAdmin || account.isEmpty) {
      router.push(redirectTo);
    }
  }, [account]);
  return {
    account
  };
};
const useOwnedCourses = (...args) => {
  const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)(hooks => hooks.useOwnedCourses)(...args));
  return {
    ownedCourses: swrRes
  };
};
const useOwnedCourse = (...args) => {
  const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)(hooks => hooks.useOwnedCourse)(...args));
  return {
    ownedCourse: swrRes
  };
};
const useManagedCourses = (...args) => {
  const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)(hooks => hooks.useManagedCourses)(...args));
  return {
    managedCourses: swrRes
  };
};
const useWalletInfo = () => {
  const {
    account
  } = useAccount();
  const {
    network
  } = useNetwork();
  const isConnecting = !account.hasInitialResponse && !network.hasInitialResponse;
  return {
    account,
    network,
    isConnecting,
    hasConnectedWallet: !!(account.data && network.isSupported)
  };
};

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "$": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$6)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1818);



/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Web3Provider),
  "xn": () => (/* binding */ useHooks),
  "$6": () => (/* binding */ useWeb3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@metamask/detect-provider"
var detect_provider_ = __webpack_require__(5962);
var detect_provider_default = /*#__PURE__*/__webpack_require__.n(detect_provider_);
;// CONCATENATED MODULE: ./utils/loadContract.js
const NETWORK_ID = (/* unused pure expression or super */ null && ("97"));
const loadContract = async (name, web3) => {
  const res = await fetch(`./contracts/${name}.json`);
  const Artifact = await res.json();
  let contract = null;

  try {
    contract = new web3.eth.Contract(Artifact.abi, '0xFd85B304Fc8541c73dA802f46911eb2730572e7e');
    console.log('sucess! ');
  } catch {
    console.log(`Contract ${name} cannot be loaded`);
  }

  return contract;
}; // export const loadContract = async (name, provider) => {
//   const res = await fetch(`/contracts/${name}.json`)
//   const Artifact = await res.json()
//   const _contract = window.TruffleContract(Artifact)
//   _contract.setProvider(provider)
//   let deployedContract = null
//   try {
//     deployedContract = await _contract.deployed()
//   } catch {
//     console.log(`Contract ${name} cannot be loaded`)
//   }
//   return deployedContract
// }
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(4409);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./components/providers/web3/hooks/useAccount.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const adminAddresses = {
  '0xa075585816515fa3c6145fdd41bb53b18628df720548c9dd22709df630cacdc6': true,
  '0xfd36511c8035a501abab2a9414fc41361ac1e1212193c930db48a118289a2b2f': true
};
const handler = (web3, provider) => () => {
  var _ref;

  const _useSWR = external_swr_default()(() => web3 ? 'web3/accounts' : null, async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    if (!account) {
      throw new Error('Cannot retreive an account. Please refresh the browser.');
    }

    return account;
  }),
        {
    data,
    mutate
  } = _useSWR,
        rest = _objectWithoutProperties(_useSWR, ["data", "mutate"]);

  (0,external_react_.useEffect)(() => {
    const mutator = accounts => {
      var _accounts$;

      return mutate((_accounts$ = accounts[0]) !== null && _accounts$ !== void 0 ? _accounts$ : null);
    };

    provider === null || provider === void 0 ? void 0 : provider.on('accountsChanged', mutator);
    return () => {
      provider === null || provider === void 0 ? void 0 : provider.removeListener('accountsChanged', mutator);
    };
  }, [provider]);
  return _objectSpread({
    data,
    isAdmin: (_ref = data && adminAddresses[web3.utils.keccak256(data)]) !== null && _ref !== void 0 ? _ref : false,
    mutate
  }, rest);
};
;// CONCATENATED MODULE: ./components/providers/web3/hooks/useNetwork.js
function useNetwork_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useNetwork_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useNetwork_ownKeys(Object(source), true).forEach(function (key) { useNetwork_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useNetwork_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useNetwork_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useNetwork_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = useNetwork_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function useNetwork_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const NETWORKS = {
  1: 'Ethereum Main Network',
  3: 'Ropsten Test Network',
  4: 'Rinkeby Test Network',
  5: 'Goerli Test Network',
  42: 'Kovan Test Network',
  56: 'Binance Smart Chain',
  97: 'Binance Test Network',
  1337: 'Ganache'
};
const targetNetwork = NETWORKS["97"];
const useNetwork_handler = web3 => () => {
  const _useSWR = external_swr_default()(() => web3 ? 'web3/network' : null, async () => {
    const chainId = await web3.eth.getChainId();

    if (!chainId) {
      throw new Error('Cannot retreive network. Please refresh the browser.');
    }

    return NETWORKS[chainId];
  }),
        {
    data
  } = _useSWR,
        rest = useNetwork_objectWithoutProperties(_useSWR, ["data"]);

  return useNetwork_objectSpread({
    data,
    target: targetNetwork,
    isSupported: data === targetNetwork
  }, rest);
};
;// CONCATENATED MODULE: ./utils/hash.js
const createCourseHash = web3 => (courseId, account) => {
  const hexCourseId = web3.utils.utf8ToHex(courseId);
  const courseHash = web3.utils.soliditySha3({
    type: "bytes16",
    value: hexCourseId
  }, {
    type: "address",
    value: account
  });
  return courseHash;
};
// EXTERNAL MODULE: ./utils/normalize.js
var normalize = __webpack_require__(3223);
;// CONCATENATED MODULE: ./components/providers/web3/hooks/useOwnedCourses.js
function useOwnedCourses_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useOwnedCourses_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useOwnedCourses_ownKeys(Object(source), true).forEach(function (key) { useOwnedCourses_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useOwnedCourses_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useOwnedCourses_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useOwnedCourses_handler = (web3, contract) => (courses, account) => {
  var _swrRes$data$reduce, _swrRes$data;

  const swrRes = external_swr_default()(() => web3 && contract && account ? `web3/ownedCourses/${account}` : null, async () => {
    const ownedCourses = [];

    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];

      if (!course.id) {
        continue;
      }

      const courseHash = createCourseHash(web3)(course.id, account);
      const ownedCourse = await contract.methods.getCourseByHash(courseHash).call();

      if (ownedCourse.owner !== "0x0000000000000000000000000000000000000000") {
        const normalized = (0,normalize/* normalizeOwnedCourse */.h)(web3)(course, ownedCourse);
        ownedCourses.push(normalized);
      }
    }

    return ownedCourses;
  });
  return useOwnedCourses_objectSpread(useOwnedCourses_objectSpread({}, swrRes), {}, {
    lookup: (_swrRes$data$reduce = (_swrRes$data = swrRes.data) === null || _swrRes$data === void 0 ? void 0 : _swrRes$data.reduce((a, c) => {
      a[c.id] = c;
      return a;
    }, {})) !== null && _swrRes$data$reduce !== void 0 ? _swrRes$data$reduce : {}
  });
};
;// CONCATENATED MODULE: ./components/providers/web3/hooks/useOwnedCourse.js



const useOwnedCourse_handler = (web3, contract) => (course, account) => {
  const swrRes = external_swr_default()(() => web3 && contract && account ? `web3/ownedCourse/${account}` : null, async () => {
    const courseHash = createCourseHash(web3)(course.id, account);
    const ownedCourse = await contract.methods.getCourseByHash(courseHash).call();

    if (ownedCourse.owner === "0x0000000000000000000000000000000000000000") {
      return null;
    }

    return (0,normalize/* normalizeOwnedCourse */.h)(web3)(course, ownedCourse);
  });
  return swrRes;
};
;// CONCATENATED MODULE: ./components/providers/web3/hooks/useManagedCourses.js


const useManagedCourses_handler = (web3, contract) => account => {
  const swrRes = external_swr_default()(() => web3 && contract && account.data && account.isAdmin ? `web3/managedCourses/${account.data}` : null, async () => {
    const courses = [];
    const courseCount = await contract.methods.getCourseCount().call();

    for (let i = Number(courseCount) - 1; i >= 0; i--) {
      const courseHash = await contract.methods.getCourseHashAtIndex(i).call();
      const course = await contract.methods.getCourseByHash(courseHash).call();

      if (course) {
        const normalized = (0,normalize/* normalizeOwnedCourse */.h)(web3)({
          hash: courseHash
        }, course);
        courses.push(normalized);
      }
    }

    return courses;
  });
  return swrRes;
};
;// CONCATENATED MODULE: ./components/providers/web3/hooks/setupHooks.js





const setupHooks = ({
  web3,
  provider,
  contract
}) => {
  return {
    useAccount: handler(web3, provider),
    useNetwork: useNetwork_handler(web3),
    useOwnedCourses: useOwnedCourses_handler(web3, contract),
    useOwnedCourse: useOwnedCourse_handler(web3, contract),
    useManagedCourses: useManagedCourses_handler(web3, contract)
  };
};
;// CONCATENATED MODULE: ./components/providers/web3/index.js


function web3_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function web3_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { web3_ownKeys(Object(source), true).forEach(function (key) { web3_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { web3_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function web3_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} = __webpack_require__(9297);





const Web3Context = createContext(null);

const setListeners = provider => {
  provider.on('chainChanged', _ => window.location.reload());
};

const createWeb3State = ({
  web3,
  provider,
  contract,
  isLoading
}) => {
  return {
    web3,
    provider,
    contract,
    isLoading,
    hooks: setupHooks({
      web3,
      provider,
      contract
    })
  };
};

function Web3Provider({
  children
}) {
  const [web3Api, setWeb3Api] = useState(createWeb3State({
    web3: null,
    provider: null,
    contract: null,
    isLoading: true
  }));
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detect_provider_default()();

      if (provider) {
        const web3 = new (external_web3_default())(provider);
        const contract = await loadContract('CourseMarketplace', web3);
        setListeners(provider);
        setWeb3Api(createWeb3State({
          web3,
          provider,
          contract,
          isLoading: false
        }));
      } else {
        setWeb3Api(api => web3_objectSpread(web3_objectSpread({}, api), {}, {
          isLoading: false
        }));
        console.error('Please, install Metamask.');
      }
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const {
      web3,
      provider,
      isLoading
    } = web3Api;
    return web3_objectSpread(web3_objectSpread({}, web3Api), {}, {
      requireInstall: !isLoading && !web3,
      connect: provider ? async () => {
        try {
          await provider.request({
            method: 'eth_requestAccounts'
          });
        } catch {
          location.reload();
        }
      } : () => console.error('Cannot connect to Metamask, try to reload your browser please.')
    });
  }, [web3Api]);

  return /*#__PURE__*/jsx_runtime_.jsx(Web3Context.Provider, {
    value: _web3Api,
    children: children
  });
}
function useWeb3() {
  return useContext(Web3Context);
}
function useHooks(cb) {
  const {
    hooks
  } = useWeb3();
  return cb(hooks);
}

/***/ }),

/***/ 2975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O$": () => (/* reexport */ ActiveLink),
  "Oo": () => (/* reexport */ Breadcrumbs),
  "zx": () => (/* reexport */ Button),
  "$_": () => (/* reexport */ Footer),
  "VM": () => (/* reexport */ Hero),
  "aN": () => (/* reexport */ Loader),
  "v0": () => (/* reexport */ Message),
  "u_": () => (/* reexport */ Modal),
  "wp": () => (/* reexport */ Navbar)
});

// UNUSED EXPORTS: CarouselComponent

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/common/footer/index.js


function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-white-900 pt-1",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container mx-auto px-6",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-5 flex flex-col items-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "mb-6 text-white text-sm text-primary-2 font-bold",
            children: ["\xA9 ", new Date().getFullYear(), " Skyxcripto"]
          })
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./components/providers/index.js
var providers = __webpack_require__(3009);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/hooks/web3/index.js
var web3 = __webpack_require__(6669);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/ui/common/navbar/index.js








function Navbar() {
  const {
    connect,
    isLoading,
    requireInstall
  } = (0,providers/* useWeb3 */.$)();
  const {
    account
  } = (0,web3/* useAccount */.mA)();
  const {
    pathname
  } = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " relative pt-6 px-4 sm:px-6 lg:px-8",
      children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: " relative",
        "aria-label": "Global",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col xs:flex-row justify-between items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/logo.png",
              width: "120",
              height: "120"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "font-medium mr-8 text-white-500 hover:text-green-900",
                style: {
                  color: 'white'
                },
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(ActiveLink, {
              href: "/marketplace",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "font-medium mr-8  text-yellow-300 hover:text-green-900",
                style: {
                  color: 'white'
                },
                children: "Marketplace"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink, {
              href: "/wishlist",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "font-medium sm:mr-8 mr-1 text-white-500 hover:text-white-900",
                children: "Wishlist"
              })
            }), isLoading ? /*#__PURE__*/jsx_runtime_.jsx(Button, {
              disabled: true,
              onClick: connect,
              children: "Loading..."
            }) : account.data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button, {
              hoverable: false,
              className: "cursor-default",
              children: ["Hi there ", account.isAdmin && 'Admin']
            }) : requireInstall ? /*#__PURE__*/jsx_runtime_.jsx(Button, {
              onClick: () => window.open('https://metamask.io/download.html', '_blank'),
              children: "Install Metamask"
            }) : /*#__PURE__*/jsx_runtime_.jsx(Button, {
              onClick: connect,
              children: "Connect"
            })]
          })]
        })
      })
    }), account.data && !pathname.includes('/marketplace') && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-end pt-1 sm:px-6 lg:px-8",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-white bg-green-600 rounded-md p-2",
        children: account.data
      })
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(3983);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ui/common/CarouselComponent/index.js






const Item = (external_styled_components_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
const breakPoints = [{
  width: 1860,
  itemsToShow: 1
}, {
  width: 1860,
  itemsToShow: 2
}];
function CarouselComponent() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_elastic_carousel_default()), {
    breakPoints: breakPoints,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/banner.png",
        width: "1860",
        height: "383"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/banner.png",
        width: "1860",
        height: "383"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/common/hero/index.js



function Hero() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "lg:2/6 text-left my-28",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-6xl font-semibold text-white-900 leading-none justify-center ",
      style: {
        color: 'white'
      },
      children: "Cursos de Marketing e empreendedorismo"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-6 text-xl font-light  antialiased",
      style: {
        color: 'white'
      },
      children: "Veja todos nossos cursos e desenvolva novas habilidades para todas novas habilidades, agora pagamento em criptomoedas."
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-5 sm:mt-8 flex lg:justify-center ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "rounded-md ",
        style: {
          width: '1830px',
          height: '400px'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          className: "w-full flex items-center justify-center px- py-12 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10",
          children: "Get started"
        }), /*#__PURE__*/jsx_runtime_.jsx(CarouselComponent, {})]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/common/breadcrumbs/index.js





const BreadcrumbItem = ({
  item,
  index
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: `${index == 0 ? 'pr-4' : 'px-4'} font-medium text-white-500 hover:text-white-900`,
    children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink, {
      href: item.href,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: item.value
      })
    })
  });
};

function Breadcrumbs({
  items,
  isAdmin
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    "aria-label": "breadcrumb",
    children: /*#__PURE__*/jsx_runtime_.jsx("ol", {
      className: "flex leading-none text-green-600 divide-x divide-green-400",
      children: items.map((item, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [!item.requireAdmin && /*#__PURE__*/jsx_runtime_.jsx(BreadcrumbItem, {
          item: item,
          index: i
        }), item.requireAdmin && isAdmin && /*#__PURE__*/jsx_runtime_.jsx(BreadcrumbItem, {
          item: item,
          index: i
        })]
      }, item.href))
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/common/modal/index.js


function Modal({
  isOpen,
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${!isOpen && 'hidden'} fixed z-10 inset-0 overflow-y-auto"`,
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
        children: [isOpen && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "fixed inset-0 bg-white-500 bg-opacity-75 transition-opacity",
          "aria-hidden": "true"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "hidden sm:inline-block sm:align-middle sm:h-screen",
          "aria-hidden": "true",
          children: "\u200B"
        }), children]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/common/button/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const SIZE = {
  sm: 'p-2 text-base xs:px-4',
  md: 'p-3 text-base xs:px-8',
  lg: 'p-3 text-lg xs:px-8'
};
function Button(_ref) {
  let {
    children,
    className,
    size = 'md',
    hoverable = true,
    variant = 'purple'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "size", "hoverable", "variant"]);

  const sizeClass = SIZE[size];
  const variants = {
    white: `text-black bg-white`,
    green: `text-white bg-green-600 ${hoverable && 'hover:bg-green-700'}`,
    purple: `text-white bg-green-600 ${hoverable && 'hover:bg-green-700'}`,
    red: `text-white bg-red-600 ${hoverable && 'hover:bg-red-700'}`,
    lightPurple: `text-green-700 bg-green-100 ${hoverable && 'hover:bg-green-200'}`
  };
  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({}, rest), {}, {
    className: `${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-md font-medium ${className} ${variants[variant]}`,
    children: children
  }));
}
;// CONCATENATED MODULE: ./components/ui/common/link/index.js


function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { link_ownKeys(Object(source), true).forEach(function (key) { link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ActiveLink(_ref) {
  let {
    children,
    activeLinkClass
  } = _ref,
      props = link_objectWithoutProperties(_ref, ["children", "activeLinkClass"]);

  const {
    pathname
  } = (0,router_.useRouter)();
  let className = children.props.className || '';

  if (pathname === props.href) {
    className = `${className} ${activeLinkClass ? activeLinkClass : 'text-green-600'}`;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, link_objectSpread(link_objectSpread({}, props), {}, {
    children: /*#__PURE__*/external_react_default().cloneElement(children, {
      className
    })
  }));
}
;// CONCATENATED MODULE: ./components/ui/common/message/index.js



const TYPES = {
  success: "green",
  warning: "yellow",
  danger: "red"
};
const SIZES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
};
function Message({
  children,
  type = "success",
  size = "md"
}) {
  const {
    0: isDisplayed,
    1: setIsDisplayed
  } = (0,external_react_.useState)(true);

  if (!isDisplayed) {
    return null;
  }

  const messageType = TYPES[type];
  const messageSizeClass = SIZES[size];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `bg-${messageType}-100 rounded-xl mb-3`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-7xl mx-auto py-2 px-1",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between flex-wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-0 flex-1 flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `ml-3 ${messageSizeClass} font-medium text-${messageType}-900`,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "inline",
              children: children
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            onClick: () => setIsDisplayed(false),
            type: "button",
            className: "-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 sm:-mr-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sr-only",
              children: "Dismiss"
            }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: `h-6 w-6 text-${messageType}-900`,
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            })]
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/common/loader/index.js

const loader_SIZES = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12"
};
function Loader({
  size = "md"
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `sk-fading-circle ${loader_SIZES[size]}`,
    children: Array.from({
      length: 12
    }).map((_, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `sk-circle${i + 1} sk-circle`
    }, `dot-${i}`))
  });
}
;// CONCATENATED MODULE: ./components/ui/common/index.js











/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pg": () => (/* reexport */ Card),
  "Gt": () => (/* reexport */ CourseFilter),
  "FP": () => (/* reexport */ Hero),
  "cQ": () => (/* reexport */ List),
  "NX": () => (/* reexport */ Curriculum),
  "Zb": () => (/* reexport */ Keypoints),
  "p5": () => (/* reexport */ ManagedCourseCard),
  "fB": () => (/* reexport */ OwnedCourseCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/course/list/index.js

function List({
  courses,
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5",
    children: courses.map(course => children(course))
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-simple-animate"
var external_react_simple_animate_ = __webpack_require__(6737);
;// CONCATENATED MODULE: ./components/ui/course/card/index.js





function Card({
  course,
  disabled,
  Footer,
  state
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex h-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-1 h-full next-image-wrapper",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: `object-cover ${disabled && 'filter grayscale'}`,
          src: course.coverImage,
          layout: "responsive",
          width: "200",
          height: "230",
          alt: course.title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-8 pb-4 flex-2",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uppercase mr-2 tracking-wide text-sm text-green-500 font-semibold",
            children: course.type
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [state === 'activated' && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-xs text-black bg-green-200 p-1 px-3 rounded-full",
              children: "Activated"
            }), state === 'deactivated' && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-xs text-black bg-red-200 p-1 px-3 rounded-full",
              children: "Deactivated"
            }), state === 'purchased' && /*#__PURE__*/jsx_runtime_.jsx(external_react_simple_animate_.AnimateKeyframes, {
              play: true,
              duration: 2,
              keyframes: ['opacity: 0.2', 'opacity: 1'],
              iterationCount: "infinite",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-xs text-black bg-yellow-200 p-1 px-3 rounded-full",
                children: "Pending"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/courses/${course.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "h-12 block mt-1 text-sm sm:text-base leading-tight font-medium text-black hover:underline",
            children: course.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "mt-2 mb-4 text-sm sm:text-base text-white-500",
          children: [course.description.substring(0, 70), "..."]
        }), Footer && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-2",
          children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {})
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/course/card/Owned.js



const STATE_COLORS = {
  purchased: 'green',
  activated: 'green',
  deactivated: 'red'
};
function OwnedCourseCard({
  children,
  course
}) {
  const stateColor = STATE_COLORS[course.state];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-white border shadow overflow-hidden sm:rounded-lg mb-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block sm:flex",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-1",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "h-72 sm:h-full next-image-wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            className: "object-cover",
            src: course.coverImage,
            width: "45",
            height: "45",
            layout: "responsive"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-4",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "px-4 py-5 sm:px-6",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            className: "text-lg leading-6 font-medium text-white-900",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mr-2",
              children: course.title
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `text-xs text-${stateColor}-700 bg-${stateColor}-200 rounded-full p-2`,
              children: course.state
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "mt-1 max-w-2xl text-sm text-white-500",
            children: [course.price, " ETH"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "border-t border-white-200",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-white-50 px-4 py-5  sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-white-500",
                children: "Course ID"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2",
                children: course.ownedCourseId
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-white px-4 py-5 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-white-500",
                children: "Proof"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm break-words text-white-900 sm:mt-0 sm:col-span-2",
                children: course.proof
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "bg-white px-4 py-5 sm:px-6",
              children: children
            })]
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/course/card/Managed.js



const Item = ({
  title,
  value,
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${className} px-4 py-2 sm:px-6`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-sm font-medium text-white-500",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-1 text-sm text-white-900 sm:mt-0 sm:col-span-2",
      children: value
    })]
  });
};

function ManagedCourseCard({
  children,
  course,
  isSearched = false
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${isSearched ? 'border-green-600' : 'bg-white-200'} bg-white border shadow overflow-hidden sm:rounded-lg mb-3`,
    children: [Object.keys(course).map((key, i) => /*#__PURE__*/jsx_runtime_.jsx(Item, {
      className: `${i % 2 ? 'bg-white-50' : 'bg-white'}`,
      title: key[0].toUpperCase() + key.slice(1),
      value: course[key]
    }, key)), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-white px-4 py-5 sm:px-6",
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/course/hero/index.js



function Hero({
  title,
  description,
  image,
  hasOwner
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative bg-white overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "max-w-7xl mx-auto",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",
          children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
            fill: "currentColor",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /*#__PURE__*/jsx_runtime_.jsx("polygon", {
              points: "50,0 100,0 50,100 0,100"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "relative pt-6 px-4 sm:px-6 lg:px-8"
          }), /*#__PURE__*/jsx_runtime_.jsx("main", {
            className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "sm:text-center lg:text-left",
              children: [hasOwner && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-xl inline-block p-4 py-2 rounded-full font-bold bg-green-200 text-green-700",
                children: "You are owner of:"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                className: "text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "block xl:inline",
                  children: title.substring(0, title.length / 2)
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "block text-green-600 xl:inline",
                  children: title.substring(title.length / 2)
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "mt-3 text-base text-white-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",
                children: description
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "rounded-md shadow",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10",
                    children: "Get started"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "mt-3 sm:mt-0 sm:ml-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10",
                    children: "Watch"
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
          src: image,
          alt: title,
          layout: "fill"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/ui/common/index.js + 10 modules
var common = __webpack_require__(2975);
;// CONCATENATED MODULE: ./components/ui/course/curriculum/index.js





const lectures = ['How to init App', 'How to get a help', 'Introduction to Solidity', 'Programing in C++', 'How to write For Loops', 'Safe operator'];
function Curriculum({
  locked,
  courseState,
  isLoading
}) {
  const statusClass = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "max-w-5xl mx-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "shadow overflow-hidden border-b border-white-200 sm:rounded-lg",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: "min-w-full divide-y divide-white-200",
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                className: "bg-white-50",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider",
                    children: "Section 1"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider",
                    children: "Status"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    scope: "col",
                    className: "relative px-6 py-3",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "sr-only",
                      children: "Edit"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                className: "bg-white divide-y divide-white-200",
                children: lectures.map(lec => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "flex items-center",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "ml-4",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "text-sm font-medium text-white-900",
                          children: lec
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: locked ? `bg-red-100 text-red-800 ${statusClass}` : `bg-green-100 text-green-800 ${statusClass}`,
                      children: locked ? 'Locked' : 'Unlocked'
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                    children: isLoading ? /*#__PURE__*/jsx_runtime_.jsx(common/* Loader */.aN, {}) : locked ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [courseState === 'deactivated' && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/marketplace",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "text-green-600 hover:text-green-900",
                          children: "Get Access"
                        })
                      }), courseState === 'purchased' && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/faq",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "text-yellow-500 hover:text-yellow-900",
                          children: "Waiting for activation..."
                        })
                      })]
                    }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/watch",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "text-green-600 hover:text-green-900",
                        children: "Watch"
                      })
                    })
                  })]
                }, lec))
              })]
            })
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/course/keypoints/index.js


function Keypoints({
  points
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "py-12 bg-white",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-10",
          children: /*#__PURE__*/jsx_runtime_.jsx("dl", {
            className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",
            children: points.map((point, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("dt", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white",
                  children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: "h-6 w-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M13 10V3L4 14h7v7l9-11h-7z"
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  className: "ml-16 text-lg leading-6 font-medium text-white-900",
                  children: ["Keypoint ", i + 1]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-2 ml-16 text-base text-white-500",
                children: point
              })]
            }, point))
          })
        })
      })
    })
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/ui/course/filter/index.js




const OPTIONS = ['all', 'purchased', 'activated', 'deactivated'];
function CourseFilter({
  onSearchSubmit,
  onFilterSelect
}) {
  const {
    0: searchText,
    1: setSearchTest
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col md:flex-row items-center my-4",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex mr-2 relative rounded-md",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        onChange: ({
          target: {
            value
          }
        }) => setSearchTest(value),
        value: searchText,
        type: "text",
        name: "courseHash",
        id: "courseHash",
        className: "w-52 xs:w-96 focus:ring-green-500 shadow-md focus:border-green-500 block pl-7 p-4 sm:text-sm border-white-300 rounded-md",
        placeholder: "0x2341ab..."
      }), /*#__PURE__*/jsx_runtime_.jsx(common/* Button */.zx, {
        onClick: () => onSearchSubmit(searchText),
        children: "Search"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative text-white-700",
      children: [/*#__PURE__*/jsx_runtime_.jsx("select", {
        onChange: ({
          target: {
            value
          }
        }) => onFilterSelect(value),
        className: "w-72 h-10 pl-3 pr-6 text-base placeholder-white-600 border rounded-lg appearance-none focus:shadow-outline",
        placeholder: "Regular input",
        children: OPTIONS.map(option => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: option,
          children: option
        }, option))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          className: "w-4 h-4 fill-current",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd",
            fillRule: "evenodd"
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/course/index.js









/***/ }),

/***/ 1935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ BaseLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/providers/index.js
var providers = __webpack_require__(3009);
// EXTERNAL MODULE: ./components/ui/common/index.js + 10 modules
var common = __webpack_require__(2975);
;// CONCATENATED MODULE: ./components/ui/layout/base/index.js




function BaseLayout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(providers/* Web3Provider */.Q, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-7xl mx-auto px-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(common/* Navbar */.wp, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "fit",
        children: children
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(common/* Footer */.$_, {})]
  });
}
;// CONCATENATED MODULE: ./components/ui/layout/index.js


/***/ }),

/***/ 3223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ normalizeOwnedCourse)
/* harmony export */ });
/* unused harmony export COURSE_STATES */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COURSE_STATES = {
  0: "purchased",
  1: "activated",
  2: "deactivated"
};
const normalizeOwnedCourse = web3 => (course, ownedCourse) => {
  return _objectSpread(_objectSpread({}, course), {}, {
    ownedCourseId: ownedCourse.id,
    proof: ownedCourse.proof,
    owned: ownedCourse.owner,
    price: web3.utils.fromWei(ownedCourse.price),
    state: COURSE_STATES[ownedCourse.state]
  });
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;