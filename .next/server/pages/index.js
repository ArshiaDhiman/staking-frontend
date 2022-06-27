module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abi/Staking.json */ "./src/abi/Staking.json");
var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @abi/Staking.json */ "./src/abi/Staking.json", 1);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils */ "./src/utils.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks */ "./src/hooks/index.ts");
/* harmony import */ var _src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/features/staking/stakingSlice */ "./src/features/staking/stakingSlice.ts");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\pages\\index.tsx";









const Home = ({
  pools
}) => {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const dispatch = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (pools.length > 0 && !tried) {
      dispatch(Object(_src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_7__["setPools"])(pools));
      setTried(true);
    }

    if (account) {
      dispatch(Object(_src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_7__["updatePools"])(account));
    }
  }, [tried, pools, account]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Main"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
const getServerSideProps = async () => {
  const staking = Object(src_utils__WEBPACK_IMPORTED_MODULE_5__["getContract"])(src_constants__WEBPACK_IMPORTED_MODULE_3__["STAKING_ADDRESS"], _abi_Staking_json__WEBPACK_IMPORTED_MODULE_4__); // eslint-disable-next-line

  const _pools = await staking.getPools();

  const pools = _pools.map(({
    poolName,
    rewardRate,
    lockPeriod,
    totalStaked
  }, id) => ({
    name: poolName,
    rewardRate: rewardRate.toString(),
    lockPeriod: lockPeriod.toString(),
    totalStaked: totalStaked.toString(),
    id: id,
    user_deposit_time: "0",
    user_stake: "0",
    user_reward: "0"
  }));

  return {
    props: {
      pools
    } // will be passed to the page component as

  };
};

/***/ }),

/***/ "./src/abi/Staking.json":
/*!******************************!*\
  !*** ./src/abi/Staking.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"Stake\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"Unstake\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_poolName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_lockPeriod\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rewardRate\",\"type\":\"uint256\"}],\"name\":\"addPool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"addStakeholder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"calculateReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_staker\",\"type\":\"address\"}],\"name\":\"getAmountStaked\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getPoolTotalStaked\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPools\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"poolName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"rewardRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lockPeriod\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalStaked\",\"type\":\"uint256\"}],\"internalType\":\"struct Staking.StakingPoolView[]\",\"name\":\"pools\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_staker\",\"type\":\"address\"}],\"name\":\"getStakeholderInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"removeStakeholder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardInterval\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lockPeriod\",\"type\":\"uint256\"}],\"name\":\"setLockPeriod\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_poolName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_rewardRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lockPeriod\",\"type\":\"uint256\"}],\"name\":\"setPools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"stakingPools\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"poolName\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"rewardRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lockPeriod\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalStaked\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"unstake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./src/abi/Token.json":
/*!****************************!*\
  !*** ./src/abi/Token.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./src/components/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/index.tsx ***!
  \****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\Input\\index.tsx";

const Input = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  type = "text"
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mb-4 mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "block font-bold mb-2",
      htmlFor: id,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "rounded py-2 px-3 text-black w-full",
      id: id,
      type: type,
      placeholder: placeholder,
      value: value,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/button/index.tsx ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\button\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // export type IButton = React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
// >;

const Button = (_ref) => {
  let {
    className = "",
    children,
    disabled,
    loading
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "children", "disabled", "loading"]);

  const classes = `rounded h-9 border border-white border-opacity-5 ${disabled ? "cursor-not-allowed bg-accent-light" : "bg-accent hover:bg-accent-dark"} ${className}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: classes,
    disabled: disabled
  }, rest), {}, {
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Loader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }, undefined) : children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/connect-wallet/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/connect-wallet/index.tsx ***!
  \*************************************************/
/*! exports provided: ConnectWallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectWallet", function() { return ConnectWallet; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/connectors */ "./src/connectors.tsx");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useEagerConnect */ "./src/hooks/useEagerConnect.tsx");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\connect-wallet\\index.tsx";






const ConnectWallet = () => {
  const {
    active,
    activate,
    deactivate
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])();
  const tried_to_eager_connect = Object(_hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_6__["useEagerConnect"])();

  async function connect() {
    if (!tried_to_eager_connect) {
      return;
    }

    try {
      await activate(_src_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true); // eslint-disable-next-line
    } catch (err) {
      var _err$data;

      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err.message);
    }
  }

  function disconnect() {
    try {
      deactivate(); // eslint-disable-next-line
    } catch (err) {
      var _err$data2;

      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(((_err$data2 = err.data) === null || _err$data2 === void 0 ? void 0 : _err$data2.message) || err.message);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "w-40",
      loading: false,
      onClick: active ? disconnect : connect,
      children: active ? "Disconnect" : "Connect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/container/index.tsx":
/*!********************************************!*\
  !*** ./src/components/container/index.tsx ***!
  \********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\container\\index.tsx";
const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen flex flex-col",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./src/components/footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/footer/index.tsx ***!
  \*****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\footer\\index.tsx";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center p-2 bg-level-one border-t border-white border-opacity-5 w-full",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "flex justify-center list-none ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: "https://github.com/ArshiaDhiman",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            src: "/icons/github-icon.svg",
            alt: "github",
            width: "28",
            height: "29"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "mx-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: "https://www.linkedin.com/in/arshia-dhiman-932898202/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            className: "accent",
            src: "/icons/linkedin-icon.svg",
            alt: "linkedin",
            width: "28",
            height: "32"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/constants */ "./src/constants.ts");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\header\\index.tsx";



 // eslint-disable-next-line

const Header = () => {
  const {
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__["useWeb3React"])();

  const addToken = async () => {
    const tokenAddress = _src_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN_ADDRESS"];
    const tokenSymbol = _src_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN_SYMBOL"];
    const tokenDecimals = _src_constants__WEBPACK_IMPORTED_MODULE_3__["TOKEN_DECIMALS"];
    const tokenImage = "https://ipfs.io/ipfs/QmUoJGmkV7oV5Pv5DwwG4okJh9TWYnEqGAzKFWZfi4NSWe";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress,
            // The address that the token is at.
            symbol: tokenSymbol,
            // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals,
            // The number of decimals in the token
            image: tokenImage // A string url of the token logo

          }
        }
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-2 bg-level-one border-b border-white border-opacity-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between items-center max-w-6xl mx-auto px-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center space-x-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Logo"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-xl",
            children: "ARSHToken"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center space-x-8",
          children: [active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "hover:underline",
              onClick: addToken,
              children: "Add ARSH"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["ConnectWallet"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: ConnectWallet, Header, Logo, Main, Button, Footer, Container, Layout, Loader, Pools, StakingPool, Show, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connect_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect-wallet */ "./src/components/connect-wallet/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectWallet", function() { return _connect_wallet__WEBPACK_IMPORTED_MODULE_0__["ConnectWallet"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./src/components/logo/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _logo__WEBPACK_IMPORTED_MODULE_2__["Logo"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/components/main/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["Main"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./src/components/button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_5__["Footer"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container */ "./src/components/container/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_6__["Container"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ "./src/components/layout/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_7__["Layout"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader */ "./src/components/loader/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _loader__WEBPACK_IMPORTED_MODULE_8__["Loader"]; });

/* harmony import */ var _pools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pools */ "./src/components/pools/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pools", function() { return _pools__WEBPACK_IMPORTED_MODULE_9__["Pools"]; });

/* harmony import */ var _staking_pool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staking-pool */ "./src/components/staking-pool/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StakingPool", function() { return _staking_pool__WEBPACK_IMPORTED_MODULE_10__["StakingPool"]; });

/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show */ "./src/components/show/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return _show__WEBPACK_IMPORTED_MODULE_11__["Show"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Input */ "./src/components/Input/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_12__["Input"]; });















/***/ }),

/***/ "./src/components/layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/layout/index.tsx ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\layout\\index.tsx";


const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/loader/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/loader/index.tsx ***!
  \*****************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\loader\\index.tsx";

const Loader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: "mx-auto",
    width: "23",
    height: "23",
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "none",
      fillRule: "evenodd",
      transform: "translate(1 1)",
      strokeWidth: "2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        cx: "22",
        cy: "22",
        r: "6",
        strokeOpacity: "0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "r",
          begin: "1.5s",
          dur: "3s",
          values: "6;22",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "stroke-opacity",
          begin: "1.5s",
          dur: "3s",
          values: "1;0",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "stroke-width",
          begin: "1.5s",
          dur: "3s",
          values: "2;0",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        cx: "22",
        cy: "22",
        r: "6",
        strokeOpacity: "0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "r",
          begin: "3s",
          dur: "3s",
          values: "6;22",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "stroke-opacity",
          begin: "3s",
          dur: "3s",
          values: "1;0",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "stroke-width",
          begin: "3s",
          dur: "3s",
          values: "2;0",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        cx: "22",
        cy: "22",
        r: "8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
          attributeName: "r",
          begin: "0s",
          dur: "1.5s",
          values: "6;1;2;3;4;5;6",
          calcMode: "linear",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/logo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/logo/index.tsx ***!
  \***************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\logo\\index.tsx";


const Logo = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/img/arsh-logo.svg",
    alt: "ARSH token",
    width: "30",
    height: "30"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/main/index.tsx ***!
  \***************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useContract */ "./src/hooks/useContract.tsx");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/constants */ "./src/constants.ts");
/* harmony import */ var _abi_Token_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abi/Token.json */ "./src/abi/Token.json");
var _abi_Token_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @abi/Token.json */ "./src/abi/Token.json", 1);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\main\\index.tsx";






const Main = () => {
  const {
    0: balance,
    1: setBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0");
  const token = Object(_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__["useContract"])(_src_constants__WEBPACK_IMPORTED_MODULE_4__["TOKEN_ADDRESS"], _abi_Token_json__WEBPACK_IMPORTED_MODULE_5__, true);
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__["useWeb3React"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (token) {
      token.balanceOf(account).then(balance => setBalance(balance.toString()));
    }
  }, [token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "py-12 min-h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Show"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Pools"], {
      balance: balance
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/pools/index.tsx":
/*!****************************************!*\
  !*** ./src/components/pools/index.tsx ***!
  \****************************************/
/*! exports provided: Pools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pools", function() { return Pools; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks */ "./src/hooks/index.ts");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\pools\\index.tsx";



const Pools = ({
  balance
}) => {
  const pools = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useAppSelector"])(state => state.staking.pools);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "space-y-4 px-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-xl w-full max-w-4xl mx-auto mt-4",
      children: "Staking Pools"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), pools.map((pool, id) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["StakingPool"], {
      balance: balance,
      pool: pool
    }, id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/show/index.tsx":
/*!***************************************!*\
  !*** ./src/components/show/index.tsx ***!
  \***************************************/
/*! exports provided: Show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_staking_pool_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/staking-pool/card */ "./src/components/staking-pool/card/index.tsx");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\show\\index.tsx";


const Show = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "px-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_staking_pool_card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-gray-300 text-center p-4",
        children: ["Stake your ARSH Tokens to recieve rewards! Once tokens are staked they are locked up till the lockup period is complete. Dont have ARSH Tokens?", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://token-faucet.vercel.app/ ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "underline",
            children: "Click here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined), "to recieve 10,000 ARSH Tokens from the Faucet every hour"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/card/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/staking-pool/card/index.tsx ***!
  \****************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\card\\index.tsx";

const Card = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "border rounded-lg text-left bg-level-one border-white border-opacity-5 w-full max-w-4xl mx-auto py-4",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/staking-pool/index.tsx ***!
  \***********************************************/
/*! exports provided: StakingPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingPool", function() { return StakingPool; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils */ "./src/utils.ts");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./src/components/staking-pool/card/index.tsx");
/* harmony import */ var _stake_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stake-menu */ "./src/components/staking-pool/stake-menu/index.tsx");
/* harmony import */ var _text_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-item */ "./src/components/staking-pool/text-item/index.tsx");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\staking-pool\\index.tsx";






const StakingPool = ({
  pool,
  balance
}) => {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_card__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-4 md:grid grid-cols-7 items-center gap-4 md:pb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Logo"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-span-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_text_item__WEBPACK_IMPORTED_MODULE_6__["TextItem"], {
          title: "Name",
          text: pool.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_text_item__WEBPACK_IMPORTED_MODULE_6__["TextItem"], {
        title: "Reward",
        text: pool.rewardRate + " %"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_text_item__WEBPACK_IMPORTED_MODULE_6__["TextItem"], {
        title: "Lock Period",
        text: Math.round(Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["secondsToWeeks"])(pool.lockPeriod)).toString() + " weeks"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_text_item__WEBPACK_IMPORTED_MODULE_6__["TextItem"], {
        title: "Total Staked",
        text: parseInt(pool.totalStaked) / 1000000000000000000 + " ARSH"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "md:w-16 w-full my-4",
        onClick: onClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6 mx-auto",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: showMenu ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_stake_menu__WEBPACK_IMPORTED_MODULE_5__["StakeMenu"], {
      pool: pool,
      balance: balance
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/stake-menu/deposit/index.tsx":
/*!******************************************************************!*\
  !*** ./src/components/staking-pool/stake-menu/deposit/index.tsx ***!
  \******************************************************************/
/*! exports provided: Deposit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deposit", function() { return Deposit; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useContract */ "./src/hooks/useContract.tsx");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/constants */ "./src/constants.ts");
/* harmony import */ var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abi/Staking.json */ "./src/abi/Staking.json");
var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @abi/Staking.json */ "./src/abi/Staking.json", 1);
/* harmony import */ var _abi_Token_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abi/Token.json */ "./src/abi/Token.json");
var _abi_Token_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @abi/Token.json */ "./src/abi/Token.json", 1);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/utils */ "./src/utils.ts");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/bignumber */ "@ethersproject/bignumber");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hooks */ "./src/hooks/index.ts");
/* harmony import */ var _src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/features/staking/stakingSlice */ "./src/features/staking/stakingSlice.ts");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\staking-pool\\stake-menu\\deposit\\index.tsx";













const Deposit = ({
  pool
}) => {
  const {
    0: amount,
    1: setAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: allowance,
    1: setAllowance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0");
  const {
    0: enable,
    1: setEnable
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const staking = Object(_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__["useContract"])(_src_constants__WEBPACK_IMPORTED_MODULE_5__["STAKING_ADDRESS"], _abi_Staking_json__WEBPACK_IMPORTED_MODULE_6__, true);
  const token = Object(_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__["useContract"])(_src_constants__WEBPACK_IMPORTED_MODULE_5__["TOKEN_ADDRESS"], _abi_Token_json__WEBPACK_IMPORTED_MODULE_7__, true);
  const {
    account,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])();
  const dispatch = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useAppDispatch"])();

  const stakeTokens = async () => {
    setLoading(true);

    try {
      if (allowance === "0") {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Awaiting successful transaction");
        const tx = await (token === null || token === void 0 ? void 0 : token.approve(_src_constants__WEBPACK_IMPORTED_MODULE_5__["STAKING_ADDRESS"], _src_constants__WEBPACK_IMPORTED_MODULE_5__["LARGEST_NUM"]));
        await tx.wait();
        setEnable(true);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Success");
        dispatch(Object(_src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_12__["updatePools"])(account || ""));
      } else {
        if (staking) {
          react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Awaiting successful transaction");
          const tx = await staking.stake(Object(_src_utils__WEBPACK_IMPORTED_MODULE_8__["numberToWei"])(amount), pool.id);
          await tx.wait();
          react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Success");
          dispatch(Object(_src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_12__["updatePools"])(account || ""));
        }
      }

      setAmount("0"); // eslint-disable-next-line
    } catch (err) {
      console.log(err.message);
      const message = _src_constants__WEBPACK_IMPORTED_MODULE_5__["knownErrors"][err.message] || err.message;
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error(message);
    }

    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (token) {
      token.allowance(account, _src_constants__WEBPACK_IMPORTED_MODULE_5__["STAKING_ADDRESS"]).then(allowance => setAllowance(allowance.toString()));
    }
  }, [token, enable, account]);
  const amountAfterStake = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__["BigNumber"].from(pool.user_stake).add(Object(_src_utils__WEBPACK_IMPORTED_MODULE_8__["numberToWei"])(amount));
  const estimatedReward = Object(_src_utils__WEBPACK_IMPORTED_MODULE_8__["calculateReward"])(amountAfterStake, pool.rewardRate, pool.lockPeriod);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex-1 space-y-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-gray-300",
      children: ["Amount After Stake", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "text-white",
        children: [Object(_src_utils__WEBPACK_IMPORTED_MODULE_8__["parseBalance"])(amountAfterStake), " ARSH"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-gray-300",
      children: ["New Estimated Reward", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "text-white",
        children: [Object(_src_utils__WEBPACK_IMPORTED_MODULE_8__["parseBalance"])(estimatedReward), " ARSH"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        label: "Stake Amount",
        id: "amount",
        placeholder: "Amount",
        value: amount,
        type: "number",
        onChange: e => setAmount(e.target.value || "0")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: stakeTokens,
        className: "w-full",
        loading: loading,
        disabled: !active,
        children: allowance !== "0" ? "Stake" : "Enable"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/stake-menu/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/staking-pool/stake-menu/index.tsx ***!
  \**********************************************************/
/*! exports provided: StakeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeMenu", function() { return StakeMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils */ "./src/utils.ts");
/* harmony import */ var _deposit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deposit */ "./src/components/staking-pool/stake-menu/deposit/index.tsx");
/* harmony import */ var _withdraw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withdraw */ "./src/components/staking-pool/stake-menu/withdraw/index.tsx");

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\staking-pool\\stake-menu\\index.tsx";





const StakeMenu = ({
  balance,
  pool
}) => {
  const {
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center border border-white border-opacity-5 py-2",
      children: ["Available : ", Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["parseBalance"])(active ? balance : 0), " ARSH"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex p-6 space-x-6 rounded-b-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_deposit__WEBPACK_IMPORTED_MODULE_4__["Deposit"], {
        pool: pool
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_withdraw__WEBPACK_IMPORTED_MODULE_5__["Withdraw"], {
        pool: pool
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/stake-menu/withdraw/index.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/staking-pool/stake-menu/withdraw/index.tsx ***!
  \*******************************************************************/
/*! exports provided: Withdraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Withdraw", function() { return Withdraw; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abi/Staking.json */ "./src/abi/Staking.json");
var _abi_Staking_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @abi/Staking.json */ "./src/abi/Staking.json", 1);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hooks/useContract */ "./src/hooks/useContract.tsx");
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/constants */ "./src/constants.ts");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/utils */ "./src/utils.ts");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/features/staking/stakingSlice */ "./src/features/staking/stakingSlice.ts");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ethersproject/bignumber */ "@ethersproject/bignumber");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\staking-pool\\stake-menu\\withdraw\\index.tsx";











const Withdraw = ({
  pool
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const staking = Object(_hooks_useContract__WEBPACK_IMPORTED_MODULE_5__["useContract"])(_src_constants__WEBPACK_IMPORTED_MODULE_6__["STAKING_ADDRESS"], _abi_Staking_json__WEBPACK_IMPORTED_MODULE_3__, true);
  const {
    active,
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__["useWeb3React"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  const redeemTokens = async () => {
    setLoading(true);

    try {
      if (staking) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Awaiting successful transaction");
        const tx = await (staking === null || staking === void 0 ? void 0 : staking.unstake(pool.id));
        await tx.wait();
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Success");
        dispatch(Object(_src_features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_10__["updatePools"])(account || ""));
      } // eslint-disable-next-line

    } catch (err) {
      console.log(err.message);
      const message = _src_constants__WEBPACK_IMPORTED_MODULE_6__["knownErrors"][err.message] || err.message;
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error(message);
    }

    setLoading(false);
  };

  const getDaysLeft = _deposit_time => {
    const deposit_time = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__["BigNumber"].from(_deposit_time).toNumber();
    const time_stamp_seconds = Math.floor(Date.now() / 1000);
    const seconds_locked = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__["BigNumber"].from(pool.lockPeriod).toNumber();
    const time_done = time_stamp_seconds - deposit_time;
    const seconds_left = seconds_locked - time_done;
    const days_left = Math.floor(seconds_left / 86400);
    return Math.max(days_left, 0);
  };

  const getUserSecondsDone = _deposit_time => {
    const deposit_time = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__["BigNumber"].from(_deposit_time).toNumber();
    const time_stamp_seconds = Math.floor(Date.now() / 1000);
    const time_done = time_stamp_seconds - deposit_time;
    return time_done;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex-1 space-y-2 relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-gray-300",
      children: ["Amount Staked", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "text-white",
        children: [Object(_src_utils__WEBPACK_IMPORTED_MODULE_7__["parseBalance"])(pool.user_stake), " ARSH"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-gray-300",
      children: ["Rewards Earned", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "text-white",
        children: [Object(_src_utils__WEBPACK_IMPORTED_MODULE_7__["parseBalance"])(pool.user_reward), " ARSH"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-gray-300",
      children: ["Days Left", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "text-white",
        children: [pool.user_stake > "0" ? getDaysLeft(pool.user_deposit_time) : "0", " ", "Days"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: redeemTokens,
      className: "w-full absolute inset-x-0 bottom-0",
      loading: loading,
      disabled: !active || pool.user_stake == "0" || getUserSecondsDone(pool.user_deposit_time) < _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_11__["BigNumber"].from(pool.lockPeriod).toNumber(),
      children: "Redeem"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/components/staking-pool/text-item/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/staking-pool/text-item/index.tsx ***!
  \*********************************************************/
/*! exports provided: TextItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextItem", function() { return TextItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\src\\components\\staking-pool\\text-item\\index.tsx";

const TextItem = ({
  title,
  text
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex md:inline",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "flex-1 text-base text-gray-300",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "text-lg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/connectors.tsx":
/*!****************************!*\
  !*** ./src/connectors.tsx ***!
  \****************************/
/*! exports provided: injected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injected", function() { return injected; });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);

const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__["InjectedConnector"]({
  supportedChainIds: [4]
});

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: STAKING_ADDRESS, TOKEN_ADDRESS, TOKEN_SYMBOL, TOKEN_DECIMALS, LARGEST_NUM, userMustWait, knownErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAKING_ADDRESS", function() { return STAKING_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_ADDRESS", function() { return TOKEN_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_SYMBOL", function() { return TOKEN_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_DECIMALS", function() { return TOKEN_DECIMALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGEST_NUM", function() { return LARGEST_NUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userMustWait", function() { return userMustWait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knownErrors", function() { return knownErrors; });
const STAKING_ADDRESS = "0xFa908Ab053111fa05186229b909E0d90AC85Cd1f";
const TOKEN_ADDRESS = "0xe4aa457d296b896451617f6c83468f3691e0aba4";
const TOKEN_SYMBOL = "ARSH";
const TOKEN_DECIMALS = 18;
const LARGEST_NUM = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"; // oldstaking 0x1D325b473ee603A08EBF2C375d2764ba084b25a8
// old staking 0x145034662b6C885BBEEA112dd25690eb76e9CD93

const userMustWait = 'cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,"message":"execution reverted: user must wait till lock period is done","data":{"originalError":{"code":3,"data":"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002775736572206d75737420776169742074696c6c206c6f636b20706572696f6420697320646f6e6500000000000000000000000000000000000000000000000000","message":"execution reverted: user must wait till lock period is done"}}}, method="estimateGas", transaction={"from":"0xcC2D7b044eE0C7467E3970bfA2615163c8a65084","to":"0x1D325b473ee603A08EBF2C375d2764ba084b25a8","data":"0x2e17de780000000000000000000000000000000000000000000000000000000000000000","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.5.0)';
const knownErrors = {
  [userMustWait]: "user must wait till lock period is done"
};

/***/ }),

/***/ "./src/features/staking/stakingSlice.ts":
/*!**********************************************!*\
  !*** ./src/features/staking/stakingSlice.ts ***!
  \**********************************************/
/*! exports provided: stakingSlice, updatePools, setPools, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stakingSlice", function() { return stakingSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePools", function() { return updatePools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPools", function() { return setPools; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_abi_Staking_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/abi/Staking.json */ "./src/abi/Staking.json");
var src_abi_Staking_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/abi/Staking.json */ "./src/abi/Staking.json", 1);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils */ "./src/utils.ts");



 // Define a type for the slice state

// Define the initial state using that type
const initialState = {
  pools: []
};
const stakingSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "staking",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPools: (state, action) => {
      state.pools = action.payload;
    }
  }
}); // whatever function the thunk returns should use .then (can't await)

const updatePools = account => {
  return dispatch => {
    const staking = Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["getContract"])(src_constants__WEBPACK_IMPORTED_MODULE_1__["STAKING_ADDRESS"], src_abi_Staking_json__WEBPACK_IMPORTED_MODULE_2__); // eslint-disable-next-line

    staking.getPools().then(async _pools => {
      const pools = await Promise.all(_pools.map(async ({
        poolName,
        rewardRate,
        lockPeriod,
        totalStaked
      }, id) => {
        let user_info = ["0,0,0"];

        if (account) {
          user_info = await staking.getStakeholderInfo(id, account); // console.log(user_info);
        }

        return {
          name: poolName,
          rewardRate: rewardRate.toString(),
          lockPeriod: lockPeriod.toString(),
          totalStaked: totalStaked.toString(),
          id: id,
          user_deposit_time: user_info[0].toString(),
          user_stake: user_info[1].toString(),
          user_reward: user_info[2].toString()
        };
      }));
      dispatch(setPools(pools));
    });
  };
}; // setPools is an action

const {
  setPools
} = stakingSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (stakingSlice.reducer);

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useAppDispatch, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return useAppSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "./src/hooks/useContract.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useContract.tsx ***!
  \***********************************/
/*! exports provided: useContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContract", function() { return useContract; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/contracts */ "@ethersproject/contracts");
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);



const useContract = (address, ABI, withSigner = false) => {
  const {
    library,
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !!address && !!ABI && !!library ? new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_1__["Contract"](address, ABI, withSigner ? library.getSigner(account).connectUnchecked() : library) : undefined, [address, ABI, withSigner, library, account]);
};

/***/ }),

/***/ "./src/hooks/useEagerConnect.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useEagerConnect.tsx ***!
  \***************************************/
/*! exports provided: useEagerConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/connectors */ "./src/connectors.tsx");



function useEagerConnect() {
  const {
    activate,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    src_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(src_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]); // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: shortenHex, getContract, secondsToWeeks, parseBalance, numberToWei, calculateReward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenHex", function() { return shortenHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContract", function() { return getContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsToWeeks", function() { return secondsToWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBalance", function() { return parseBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToWei", function() { return numberToWei; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateReward", function() { return calculateReward; });
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/contracts */ "@ethersproject/contracts");
/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/units */ "@ethersproject/units");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__);



const rewardInterval = 31536000;
const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_1__["InfuraProvider"]("rinkeby");
function shortenHex(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(hex.length - length)}`;
}
function getContract(address, ABI) {
  return new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__["Contract"](address, ABI, library);
}
function secondsToWeeks(_seconds) {
  const seconds = parseInt(_seconds);
  const months = seconds / 604800;
  return months;
}
const parseBalance = (balance, decimals = 18, decimalsToDisplay = 3) => Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__["commify"])(Number(Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__["formatUnits"])(balance, decimals)).toFixed(decimalsToDisplay));
const numberToWei = number => {
  const num = number.split("").filter(c => c !== ",").join("");
  return Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_2__["parseEther"])(num).toString();
};
const calculateReward = (_amount, rewardRate, lockperiod) => {
  const reward = _amount.mul(rewardRate).mul(lockperiod).div(rewardInterval).div(100);

  return reward;
};

/***/ }),

/***/ "@ethersproject/bignumber":
/*!*******************************************!*\
  !*** external "@ethersproject/bignumber" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ "@ethersproject/contracts":
/*!*******************************************!*\
  !*** external "@ethersproject/contracts" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@ethersproject/units":
/*!***************************************!*\
  !*** external "@ethersproject/units" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3Qtd2FsbGV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9vbHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3cvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YWtpbmctcG9vbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rha2luZy1wb29sL3N0YWtlLW1lbnUvZGVwb3NpdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rha2luZy1wb29sL3N0YWtlLW1lbnUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YWtpbmctcG9vbC9zdGFrZS1tZW51L3dpdGhkcmF3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGFraW5nLXBvb2wvdGV4dC1pdGVtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29ubmVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc3Rha2luZy9zdGFraW5nU2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VDb250cmFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUVhZ2VyQ29ubmVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInBlcmNlbnRTaXplcyIsIm0iLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJzcmMiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiSG9tZSIsInBvb2xzIiwiYWNjb3VudCIsInVzZVdlYjNSZWFjdCIsInRyaWVkIiwic2V0VHJpZWQiLCJ1c2VTdGF0ZSIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJzZXRQb29scyIsInVwZGF0ZVBvb2xzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwic3Rha2luZyIsImdldENvbnRyYWN0IiwiU1RBS0lOR19BRERSRVNTIiwiQUJJIiwiX3Bvb2xzIiwiZ2V0UG9vbHMiLCJtYXAiLCJwb29sTmFtZSIsInJld2FyZFJhdGUiLCJsb2NrUGVyaW9kIiwidG90YWxTdGFrZWQiLCJuYW1lIiwidG9TdHJpbmciLCJ1c2VyX2RlcG9zaXRfdGltZSIsInVzZXJfc3Rha2UiLCJ1c2VyX3Jld2FyZCIsInByb3BzIiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInR5cGUiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJDb25uZWN0V2FsbGV0IiwiYWN0aXZlIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwidHJpZWRfdG9fZWFnZXJfY29ubmVjdCIsInVzZUVhZ2VyQ29ubmVjdCIsImNvbm5lY3QiLCJpbmplY3RlZCIsInVuZGVmaW5lZCIsImVyciIsInRvYXN0IiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJDb250YWluZXIiLCJGb290ZXIiLCJIZWFkZXIiLCJhZGRUb2tlbiIsInRva2VuQWRkcmVzcyIsIlRPS0VOX0FERFJFU1MiLCJ0b2tlblN5bWJvbCIsIlRPS0VOX1NZTUJPTCIsInRva2VuRGVjaW1hbHMiLCJUT0tFTl9ERUNJTUFMUyIsInRva2VuSW1hZ2UiLCJ3YXNBZGRlZCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImFkZHJlc3MiLCJzeW1ib2wiLCJkZWNpbWFscyIsImltYWdlIiwibG9nIiwiTGF5b3V0IiwiTG9hZGVyIiwiTG9nbyIsIk1haW4iLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInRva2VuIiwidXNlQ29udHJhY3QiLCJUb2tlbkFCSSIsImJhbGFuY2VPZiIsInRoZW4iLCJQb29scyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJwb29sIiwiU2hvdyIsIkNhcmQiLCJTdGFraW5nUG9vbCIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJvbkNsaWNrIiwicm91bmQiLCJzZWNvbmRzVG9XZWVrcyIsIkRlcG9zaXQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzZXRMb2FkaW5nIiwiYWxsb3dhbmNlIiwic2V0QWxsb3dhbmNlIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwiU3Rha2luZ0FCSSIsInN0YWtlVG9rZW5zIiwiaW5mbyIsInR4IiwiYXBwcm92ZSIsIkxBUkdFU1RfTlVNIiwid2FpdCIsInN1Y2Nlc3MiLCJzdGFrZSIsIm51bWJlclRvV2VpIiwia25vd25FcnJvcnMiLCJhbW91bnRBZnRlclN0YWtlIiwiQmlnTnVtYmVyIiwiZnJvbSIsImFkZCIsImVzdGltYXRlZFJld2FyZCIsImNhbGN1bGF0ZVJld2FyZCIsInBhcnNlQmFsYW5jZSIsImUiLCJ0YXJnZXQiLCJTdGFrZU1lbnUiLCJXaXRoZHJhdyIsInVzZURpc3BhdGNoIiwicmVkZWVtVG9rZW5zIiwidW5zdGFrZSIsImdldERheXNMZWZ0IiwiX2RlcG9zaXRfdGltZSIsImRlcG9zaXRfdGltZSIsInRvTnVtYmVyIiwidGltZV9zdGFtcF9zZWNvbmRzIiwiZmxvb3IiLCJub3ciLCJzZWNvbmRzX2xvY2tlZCIsInRpbWVfZG9uZSIsInNlY29uZHNfbGVmdCIsImRheXNfbGVmdCIsIm1heCIsImdldFVzZXJTZWNvbmRzRG9uZSIsIlRleHRJdGVtIiwidGl0bGUiLCJ0ZXh0IiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJzdXBwb3J0ZWRDaGFpbklkcyIsInVzZXJNdXN0V2FpdCIsImluaXRpYWxTdGF0ZSIsInN0YWtpbmdTbGljZSIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiUHJvbWlzZSIsInVzZXJfaW5mbyIsImdldFN0YWtlaG9sZGVySW5mbyIsImFjdGlvbnMiLCJyZWR1Y2VyIiwidXNlU2VsZWN0b3IiLCJ3aXRoU2lnbmVyIiwibGlicmFyeSIsInVzZU1lbW8iLCJDb250cmFjdCIsImdldFNpZ25lciIsImNvbm5lY3RVbmNoZWNrZWQiLCJpc0F1dGhvcml6ZWQiLCJjYXRjaCIsInJld2FyZEludGVydmFsIiwiSW5mdXJhUHJvdmlkZXIiLCJzaG9ydGVuSGV4IiwiaGV4Iiwic3Vic3RyaW5nIiwiX3NlY29uZHMiLCJzZWNvbmRzIiwibW9udGhzIiwiZGVjaW1hbHNUb0Rpc3BsYXkiLCJjb21taWZ5IiwiTnVtYmVyIiwiZm9ybWF0VW5pdHMiLCJ0b0ZpeGVkIiwibnVtYmVyIiwibnVtIiwic3BsaXQiLCJmaWx0ZXIiLCJjIiwiam9pbiIsInBhcnNlRXRoZXIiLCJfYW1vdW50IiwibG9ja3BlcmlvZCIsInJld2FyZCIsIm11bCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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SUFBNEI7QUFDbkQsUUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQ2JFLEtBRE8sQ0FDRCxFQURDLEVBRVBDLE1BRk8sQ0FFQ0MsQ0FBRCxJQUFPQSxDQUFDLEtBQUssR0FGYixFQUdQQyxJQUhPLENBR0YsRUFIRSxDQUFaO0FBSUEsU0FBT0MsdUVBQVUsQ0FBQ0wsR0FBRCxDQUFWLENBQWdCaEssUUFBaEIsRUFBUDtBQUNILENBTk07QUFRQSxNQUFNa0csZUFBZSxHQUFHLENBQzNCb0UsT0FEMkIsRUFFM0IxSyxVQUYyQixFQUczQjJLLFVBSDJCLEtBSWY7QUFDWixRQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FDakJHLEdBRFUsQ0FDTjdLLFVBRE0sRUFFVjZLLEdBRlUsQ0FFTkYsVUFGTSxFQUdWRyxHQUhVLENBR054QixjQUhNLEVBSVZ3QixHQUpVLENBSU4sR0FKTSxDQUFmOztBQU1BLFNBQU9GLE1BQVA7QUFDSCxDQVpNLEM7Ozs7Ozs7Ozs7O0FDdkNQLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcIkB0cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTVEFLSU5HX0FERFJFU1MgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IEFCSSBmcm9tIFwiQGFiaS9TdGFraW5nLmpzb25cIjtcbmltcG9ydCB7IGdldENvbnRyYWN0IH0gZnJvbSBcInNyYy91dGlsc1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQGhvb2tzXCI7XG5pbXBvcnQgeyBzZXRQb29scywgdXBkYXRlUG9vbHMgfSBmcm9tIFwiQHNyYy9mZWF0dXJlcy9zdGFraW5nL3N0YWtpbmdTbGljZVwiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkM8eyBwb29sczogUG9vbFtdIH0+ID0gKHsgcG9vbHMgfSkgPT4ge1xuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgW3RyaWVkLCBzZXRUcmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBvb2xzLmxlbmd0aCA+IDAgJiYgIXRyaWVkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRQb29scyhwb29scykpO1xuICAgICAgICAgICAgc2V0VHJpZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVBvb2xzKGFjY291bnQpKTtcbiAgICAgICAgfVxuICAgIH0sIFt0cmllZCwgcG9vbHMsIGFjY291bnRdKTtcblxuICAgIHJldHVybiA8TWFpbiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdGFraW5nID0gZ2V0Q29udHJhY3QoU1RBS0lOR19BRERSRVNTLCBBQkkpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IF9wb29scyA9IChhd2FpdCBzdGFraW5nLmdldFBvb2xzKCkpIGFzIGFueVtdO1xuXG4gICAgY29uc3QgcG9vbHMgPSBfcG9vbHMubWFwKFxuICAgICAgICAoeyBwb29sTmFtZSwgcmV3YXJkUmF0ZSwgbG9ja1BlcmlvZCwgdG90YWxTdGFrZWQgfSwgaWQpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBwb29sTmFtZSxcbiAgICAgICAgICAgIHJld2FyZFJhdGU6IHJld2FyZFJhdGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGxvY2tQZXJpb2Q6IGxvY2tQZXJpb2QudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvdGFsU3Rha2VkOiB0b3RhbFN0YWtlZC50b1N0cmluZygpLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdXNlcl9kZXBvc2l0X3RpbWU6IFwiMFwiLFxuICAgICAgICAgICAgdXNlcl9zdGFrZTogXCIwXCIsXG4gICAgICAgICAgICB1c2VyX3Jld2FyZDogXCIwXCIsXG4gICAgICAgIH0pLFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBwb29scyB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXNcbiAgICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElucHV0UHJvcHMge1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gICAgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5GQzxJbnB1dFByb3BzPiA9ICh7XG4gICAgbGFiZWwsXG4gICAgaWQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgdHlwZSA9IFwidGV4dFwiLFxufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPXtpZH0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcHktMiBweC0zIHRleHQtYmxhY2sgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5cbi8vIGV4cG9ydCB0eXBlIElCdXR0b24gPSBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbi8vICAgICBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sXG4vLyAgICAgSFRNTEJ1dHRvbkVsZW1lbnRcbi8vID47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblxuICAgIGV4dGVuZHMgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICAgIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PixcbiAgICAgICAgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICA+IHtcbiAgICBsb2FkaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8SUJ1dHRvbj4gPSAoe1xuICAgIGNsYXNzTmFtZSA9IFwiXCIsXG4gICAgY2hpbGRyZW4sXG4gICAgZGlzYWJsZWQsXG4gICAgbG9hZGluZyxcbiAgICAuLi5yZXN0XG59KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGByb3VuZGVkIGgtOSBib3JkZXIgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTUgJHtcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgID8gXCJjdXJzb3Itbm90LWFsbG93ZWQgYmctYWNjZW50LWxpZ2h0XCJcbiAgICAgICAgICAgIDogXCJiZy1hY2NlbnQgaG92ZXI6YmctYWNjZW50LWRhcmtcIlxuICAgIH0gJHtjbGFzc05hbWV9YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzfSBkaXNhYmxlZD17ZGlzYWJsZWR9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciAvPiA6IGNoaWxkcmVufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcIkBzcmMvY29ubmVjdG9yc1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCB9IGZyb20gXCJAaG9va3MvdXNlRWFnZXJDb25uZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDb25uZWN0V2FsbGV0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IHRyaWVkX3RvX2VhZ2VyX2Nvbm5lY3QgPSB1c2VFYWdlckNvbm5lY3QoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICghdHJpZWRfdG9fZWFnZXJfY29ubmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIuZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIuZGF0YT8ubWVzc2FnZSB8fCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDBcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2ZSA/IGRpc2Nvbm5lY3QgOiBjb25uZWN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3RpdmUgPyBcIkRpc2Nvbm5lY3RcIiA6IFwiQ29ubmVjdFwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj57Y2hpbGRyZW59PC9kaXY+O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMiBiZy1sZXZlbC1vbmUgYm9yZGVyLXQgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTUgdy1mdWxsXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBsaXN0LW5vbmUgXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcnNoaWFEaGltYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy9naXRodWItaWNvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Fyc2hpYS1kaGltYW4tOTMyODk4MjAyL1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb25zL2xpbmtlZGluLWljb24uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsaW5rZWRpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQsIExvZ28gfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRPS0VOX0FERFJFU1MsIFRPS0VOX0RFQ0lNQUxTLCBUT0tFTl9TWU1CT0wgfSBmcm9tIFwiQHNyYy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICAgIGNvbnN0IGFkZFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbkFkZHJlc3MgPSBUT0tFTl9BRERSRVNTO1xuICAgICAgICBjb25zdCB0b2tlblN5bWJvbCA9IFRPS0VOX1NZTUJPTDtcbiAgICAgICAgY29uc3QgdG9rZW5EZWNpbWFscyA9IFRPS0VOX0RFQ0lNQUxTO1xuICAgICAgICBjb25zdCB0b2tlbkltYWdlID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1Vb0pHbWtWN29WNVB2NUR3d0c0b2tKaDlUV1luRXFHQXpLRldaZmk0TlNXZVwiO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyB3YXNBZGRlZCBpcyBhIGJvb2xlYW4uIExpa2UgYW55IFJQQyBtZXRob2QsIGFuIGVycm9yIG1heSBiZSB0aHJvd24uXG4gICAgICAgICAgICBjb25zdCB3YXNBZGRlZCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwid2FsbGV0X3dhdGNoQXNzZXRcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJFUkMyMFwiLCAvLyBJbml0aWFsbHkgb25seSBzdXBwb3J0cyBFUkMyMCwgYnV0IGV2ZW50dWFsbHkgbW9yZSFcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdG9rZW5BZGRyZXNzLCAvLyBUaGUgYWRkcmVzcyB0aGF0IHRoZSB0b2tlbiBpcyBhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdG9rZW5TeW1ib2wsIC8vIEEgdGlja2VyIHN5bWJvbCBvciBzaG9ydGhhbmQsIHVwIHRvIDUgY2hhcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogdG9rZW5EZWNpbWFscywgLy8gVGhlIG51bWJlciBvZiBkZWNpbWFscyBpbiB0aGUgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB0b2tlbkltYWdlLCAvLyBBIHN0cmluZyB1cmwgb2YgdGhlIHRva2VuIGxvZ29cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh3YXNBZGRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhhbmtzIGZvciB5b3VyIGludGVyZXN0IVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3VyIGxvc3MhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYmctbGV2ZWwtb25lIGJvcmRlci1iIGJvcmRlci13aGl0ZSBib3JkZXItb3BhY2l0eS01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWF4LXctNnhsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+QVJTSFRva2VuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb2tlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIEFSU0hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25uZWN0V2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuIiwiZXhwb3J0IHsgQ29ubmVjdFdhbGxldCB9IGZyb20gXCIuL2Nvbm5lY3Qtd2FsbGV0XCI7XG5leHBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmV4cG9ydCB7IExvZ28gfSBmcm9tIFwiLi9sb2dvXCI7XG5leHBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xuZXhwb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5leHBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmV4cG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xuZXhwb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5leHBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9sb2FkZXJcIjtcbmV4cG9ydCB7IFBvb2xzIH0gZnJvbSBcIi4vcG9vbHNcIjtcbmV4cG9ydCB7IFN0YWtpbmdQb29sIH0gZnJvbSBcIi4vc3Rha2luZy1wb29sXCI7XG5leHBvcnQgeyBTaG93IH0gZnJvbSBcIi4vc2hvd1wiO1xuZXhwb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIsIENvbnRhaW5lciB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IExvYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXG4gICAgICAgICAgICB3aWR0aD1cIjIzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIzXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDUgNDVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxKVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjZcIiBzdHJva2VPcGFjaXR5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCIxLjVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIjY7MjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY01vZGU9XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIjEuNXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiMS41c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIyOzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY01vZGU9XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjZcIiBzdHJva2VPcGFjaXR5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCI2OzIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY01vZGU9XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIyOzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY01vZGU9XCJsaW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiMHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMS41c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCI2OzE7MjszOzQ7NTs2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBMb2dvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pbWcvYXJzaC1sb2dvLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJBUlNIIHRva2VuXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAvPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2hvdywgUG9vbHMgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0IH0gZnJvbSBcIkBob29rcy91c2VDb250cmFjdFwiO1xuaW1wb3J0IHsgVE9LRU5fQUREUkVTUyB9IGZyb20gXCJAc3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IFRva2VuQUJJIGZyb20gXCJAYWJpL1Rva2VuLmpzb25cIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5cbmV4cG9ydCBjb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VDb250cmFjdChUT0tFTl9BRERSRVNTLCBUb2tlbkFCSSwgdHJ1ZSk7XG4gICAgY29uc3QgeyBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgICAgICAuYmFsYW5jZU9mKGFjY291bnQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGJhbGFuY2U6IHN0cmluZykgPT4gc2V0QmFsYW5jZShiYWxhbmNlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgIH0sIFt0b2tlbl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMiBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxTaG93IC8+XG4gICAgICAgICAgICA8UG9vbHMgYmFsYW5jZT17YmFsYW5jZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFN0YWtpbmdQb29sIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTdGFraW5nUHJvcHMgfSBmcm9tIFwiQHRzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkBob29rc1wiO1xuXG5leHBvcnQgY29uc3QgUG9vbHM6IFJlYWN0LkZDPFN0YWtpbmdQcm9wcz4gPSAoeyBiYWxhbmNlIH0pID0+IHtcbiAgICBjb25zdCBwb29scyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3Rha2luZy5wb29scyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgdy1mdWxsIG1heC13LTR4bCBteC1hdXRvIG10LTRcIj5cbiAgICAgICAgICAgICAgICBTdGFraW5nIFBvb2xzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtwb29scy5tYXAoKHBvb2wsIGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgPFN0YWtpbmdQb29sIGJhbGFuY2U9e2JhbGFuY2V9IGtleT17aWR9IHBvb2w9e3Bvb2x9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQGNvbXBvbmVudHMvc3Rha2luZy1wb29sL2NhcmRcIjtcblxuZXhwb3J0IGNvbnN0IFNob3c6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtY2VudGVyIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICBTdGFrZSB5b3VyIEFSU0ggVG9rZW5zIHRvIHJlY2lldmUgcmV3YXJkcyEgT25jZSB0b2tlbnMgYXJlXG4gICAgICAgICAgICAgICAgICAgIHN0YWtlZCB0aGV5IGFyZSBsb2NrZWQgdXAgdGlsbCB0aGUgbG9ja3VwIHBlcmlvZCBpc1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZS4gRG9udCBoYXZlIEFSU0ggVG9rZW5zP3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdG9rZW4tZmF1Y2V0LnZlcmNlbC5hcHAvIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5DbGljayBoZXJlPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIHRvIHJlY2lldmUgMTAsMDAwIEFSU0ggVG9rZW5zIGZyb20gdGhlIEZhdWNldCBldmVyeSBob3VyXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ2FyZDogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IGJnLWxldmVsLW9uZSBib3JkZXItd2hpdGUgYm9yZGVyLW9wYWNpdHktNSB3LWZ1bGwgbWF4LXctNHhsIG14LWF1dG8gcHktNFwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIExvZ28gfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNlY29uZHNUb1dlZWtzIH0gZnJvbSBcIkBzcmMvdXRpbHNcIjtcbmltcG9ydCB7IFBvb2xQcm9wcyB9IGZyb20gXCJAdHMvaW50ZXJmYWNlc1wiO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHsgU3Rha2VNZW51IH0gZnJvbSBcIi4vc3Rha2UtbWVudVwiO1xuaW1wb3J0IHsgVGV4dEl0ZW0gfSBmcm9tIFwiLi90ZXh0LWl0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IFN0YWtpbmdQb29sOiBSZWFjdC5GQzxQb29sUHJvcHM+ID0gKHsgcG9vbCwgYmFsYW5jZSB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TWVudSghc2hvd01lbnUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtZDpncmlkIGdyaWQtY29scy03IGl0ZW1zLWNlbnRlciBnYXAtNCBtZDpwYi0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SXRlbSB0aXRsZT17XCJOYW1lXCJ9IHRleHQ9e3Bvb2wubmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxUZXh0SXRlbSB0aXRsZT17XCJSZXdhcmRcIn0gdGV4dD17cG9vbC5yZXdhcmRSYXRlICsgXCIgJVwifSAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRJdGVtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkxvY2sgUGVyaW9kXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzZWNvbmRzVG9XZWVrcyhwb29sLmxvY2tQZXJpb2QpKS50b1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIHdlZWtzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiVG90YWwgU3Rha2VkXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocG9vbC50b3RhbFN0YWtlZCkgLyAxMDAwMDAwMDAwMDAwMDAwMDAwICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFSU0hcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWQ6dy0xNiB3LWZ1bGwgbXktNFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPXtzaG93TWVudSA/IFwiTTUgMTVsNy03IDcgN1wiIDogXCJNMTkgOWwtNyA3LTctN1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93TWVudSAmJiA8U3Rha2VNZW51IHBvb2w9e3Bvb2x9IGJhbGFuY2U9e2JhbGFuY2V9IC8+fVxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCB9IGZyb20gXCJAaG9va3MvdXNlQ29udHJhY3RcIjtcbmltcG9ydCB7XG4gICAgU1RBS0lOR19BRERSRVNTLFxuICAgIFRPS0VOX0FERFJFU1MsXG4gICAgTEFSR0VTVF9OVU0sXG4gICAga25vd25FcnJvcnMsXG59IGZyb20gXCJAc3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IFN0YWtpbmdBQkkgZnJvbSBcIkBhYmkvU3Rha2luZy5qc29uXCI7XG5pbXBvcnQgVG9rZW5BQkkgZnJvbSBcIkBhYmkvVG9rZW4uanNvblwiO1xuaW1wb3J0IHsgcGFyc2VCYWxhbmNlLCBudW1iZXJUb1dlaSB9IGZyb20gXCJAc3JjL3V0aWxzXCI7XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcIkB0cy9pbnRlcmZhY2VzXCI7XG5cbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJld2FyZCB9IGZyb20gXCJAc3JjL3V0aWxzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkBob29rc1wiO1xuaW1wb3J0IHsgdXBkYXRlUG9vbHMgfSBmcm9tIFwiQHNyYy9mZWF0dXJlcy9zdGFraW5nL3N0YWtpbmdTbGljZVwiO1xuXG5leHBvcnQgY29uc3QgRGVwb3NpdDogUmVhY3QuRkM8e1xuICAgIHBvb2w6IFBvb2w7XG59PiA9ICh7IHBvb2wgfSkgPT4ge1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthbGxvd2FuY2UsIHNldEFsbG93YW5jZV0gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzdGFraW5nID0gdXNlQ29udHJhY3QoU1RBS0lOR19BRERSRVNTLCBTdGFraW5nQUJJLCB0cnVlKTtcbiAgICBjb25zdCB0b2tlbiA9IHVzZUNvbnRyYWN0KFRPS0VOX0FERFJFU1MsIFRva2VuQUJJLCB0cnVlKTtcbiAgICBjb25zdCB7IGFjY291bnQsIGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgY29uc3Qgc3Rha2VUb2tlbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dhbmNlID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgIHRvYXN0LmluZm8oXCJBd2FpdGluZyBzdWNjZXNzZnVsIHRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgdG9rZW4/LmFwcHJvdmUoU1RBS0lOR19BRERSRVNTLCBMQVJHRVNUX05VTSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICAgICAgICAgIHNldEVuYWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVQb29scyhhY2NvdW50IHx8IFwiXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YWtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuaW5mbyhcIkF3YWl0aW5nIHN1Y2Nlc3NmdWwgdHJhbnNhY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgc3Rha2luZy5zdGFrZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclRvV2VpKGFtb3VudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwb29sLmlkLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0eC53YWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJTdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVQb29scyhhY2NvdW50IHx8IFwiXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldEFtb3VudChcIjBcIik7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGtub3duRXJyb3JzW2Vyci5tZXNzYWdlXSB8fCBlcnIubWVzc2FnZTtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICAgICAgLmFsbG93YW5jZShhY2NvdW50LCBTVEFLSU5HX0FERFJFU1MpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGFsbG93YW5jZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRBbGxvd2FuY2UoYWxsb3dhbmNlLnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCBbdG9rZW4sIGVuYWJsZSwgYWNjb3VudF0pO1xuXG4gICAgY29uc3QgYW1vdW50QWZ0ZXJTdGFrZSA9IEJpZ051bWJlci5mcm9tKHBvb2wudXNlcl9zdGFrZSkuYWRkKFxuICAgICAgICBudW1iZXJUb1dlaShhbW91bnQpLFxuICAgICk7XG5cbiAgICBjb25zdCBlc3RpbWF0ZWRSZXdhcmQgPSBjYWxjdWxhdGVSZXdhcmQoXG4gICAgICAgIGFtb3VudEFmdGVyU3Rha2UsXG4gICAgICAgIHBvb2wucmV3YXJkUmF0ZSxcbiAgICAgICAgcG9vbC5sb2NrUGVyaW9kLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgQW1vdW50IEFmdGVyIFN0YWtle1wiIFwifVxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VCYWxhbmNlKGFtb3VudEFmdGVyU3Rha2UpfSBBUlNIXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIE5ldyBFc3RpbWF0ZWQgUmV3YXJke1wiIFwifVxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VCYWxhbmNlKGVzdGltYXRlZFJld2FyZCl9IEFSU0hcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3Rha2UgQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSB8fCBcIjBcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YWtlVG9rZW5zfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWFjdGl2ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthbGxvd2FuY2UgIT09IFwiMFwiID8gXCJTdGFrZVwiIDogXCJFbmFibGVcIn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBJU3Rha2VNZW51IH0gZnJvbSBcIkB0cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBwYXJzZUJhbGFuY2UgfSBmcm9tIFwiQHNyYy91dGlsc1wiO1xuXG5pbXBvcnQgeyBEZXBvc2l0IH0gZnJvbSBcIi4vZGVwb3NpdFwiO1xuaW1wb3J0IHsgV2l0aGRyYXcgfSBmcm9tIFwiLi93aXRoZHJhd1wiO1xuXG5leHBvcnQgY29uc3QgU3Rha2VNZW51OiBSZWFjdC5GQzxJU3Rha2VNZW51PiA9ICh7IGJhbGFuY2UsIHBvb2wgfSkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJvcmRlciBib3JkZXItd2hpdGUgYm9yZGVyLW9wYWNpdHktNSBweS0yXCI+XG4gICAgICAgICAgICAgICAgQXZhaWxhYmxlIDoge3BhcnNlQmFsYW5jZShhY3RpdmUgPyBiYWxhbmNlIDogMCl9IEFSU0hcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNiBzcGFjZS14LTYgcm91bmRlZC1iLWxnXCI+XG4gICAgICAgICAgICAgICAgPERlcG9zaXQgcG9vbD17cG9vbH0gLz5cbiAgICAgICAgICAgICAgICA8V2l0aGRyYXcgcG9vbD17cG9vbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IFN0YWtpbmdBQkkgZnJvbSBcIkBhYmkvU3Rha2luZy5qc29uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0IH0gZnJvbSBcIkBob29rcy91c2VDb250cmFjdFwiO1xuaW1wb3J0IHsgU1RBS0lOR19BRERSRVNTLCBrbm93bkVycm9ycyB9IGZyb20gXCJAc3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGFyc2VCYWxhbmNlIH0gZnJvbSBcIkBzcmMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcIkB0cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXBkYXRlUG9vbHMgfSBmcm9tIFwiQHNyYy9mZWF0dXJlcy9zdGFraW5nL3N0YWtpbmdTbGljZVwiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuXG5leHBvcnQgY29uc3QgV2l0aGRyYXc6IFJlYWN0LkZDPHtcbiAgICBwb29sOiBQb29sO1xufT4gPSAoeyBwb29sIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc3Rha2luZyA9IHVzZUNvbnRyYWN0KFNUQUtJTkdfQUREUkVTUywgU3Rha2luZ0FCSSwgdHJ1ZSk7XG4gICAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IHJlZGVlbVRva2VucyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzdGFraW5nKSB7XG4gICAgICAgICAgICAgICAgdG9hc3QuaW5mbyhcIkF3YWl0aW5nIHN1Y2Nlc3NmdWwgdHJhbnNhY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBhd2FpdCBzdGFraW5nPy51bnN0YWtlKHBvb2wuaWQpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVQb29scyhhY2NvdW50IHx8IFwiXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBrbm93bkVycm9yc1tlcnIubWVzc2FnZV0gfHwgZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGF5c0xlZnQgPSAoX2RlcG9zaXRfdGltZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlcG9zaXRfdGltZSA9IEJpZ051bWJlci5mcm9tKF9kZXBvc2l0X3RpbWUpLnRvTnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RhbXBfc2Vjb25kcyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBjb25zdCBzZWNvbmRzX2xvY2tlZCA9IEJpZ051bWJlci5mcm9tKHBvb2wubG9ja1BlcmlvZCkudG9OdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGltZV9kb25lID0gdGltZV9zdGFtcF9zZWNvbmRzIC0gZGVwb3NpdF90aW1lO1xuICAgICAgICBjb25zdCBzZWNvbmRzX2xlZnQgPSBzZWNvbmRzX2xvY2tlZCAtIHRpbWVfZG9uZTtcbiAgICAgICAgY29uc3QgZGF5c19sZWZ0ID0gTWF0aC5mbG9vcihzZWNvbmRzX2xlZnQgLyA4NjQwMCk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGRheXNfbGVmdCwgMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFVzZXJTZWNvbmRzRG9uZSA9IChfZGVwb3NpdF90aW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZGVwb3NpdF90aW1lID0gQmlnTnVtYmVyLmZyb20oX2RlcG9zaXRfdGltZSkudG9OdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGltZV9zdGFtcF9zZWNvbmRzID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGNvbnN0IHRpbWVfZG9uZSA9IHRpbWVfc3RhbXBfc2Vjb25kcyAtIGRlcG9zaXRfdGltZTtcblxuICAgICAgICByZXR1cm4gdGltZV9kb25lO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgQW1vdW50IFN0YWtlZHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlQmFsYW5jZShwb29sLnVzZXJfc3Rha2UpfSBBUlNIXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgUmV3YXJkcyBFYXJuZWR7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZUJhbGFuY2UocG9vbC51c2VyX3Jld2FyZCl9IEFSU0hcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICBEYXlzIExlZnR7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb29sLnVzZXJfc3Rha2UgPiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXREYXlzTGVmdChwb29sLnVzZXJfZGVwb3NpdF90aW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjBcIn17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIERheXNcbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZGVlbVRva2Vuc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wXCJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgIWFjdGl2ZSB8fFxuICAgICAgICAgICAgICAgICAgICBwb29sLnVzZXJfc3Rha2UgPT0gXCIwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VXNlclNlY29uZHNEb25lKHBvb2wudXNlcl9kZXBvc2l0X3RpbWUpIDxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlci5mcm9tKHBvb2wubG9ja1BlcmlvZCkudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZWRlZW1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRleHRJdGVtOiBSZWFjdC5GQzx7IHRpdGxlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PiA9ICh7XG4gICAgdGl0bGUsXG4gICAgdGV4dCxcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6aW5saW5lXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1iYXNlIHRleHQtZ3JheS0zMDBcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnt0ZXh0fTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcbiAgICBzdXBwb3J0ZWRDaGFpbklkczogWzRdLFxufSk7XG4iLCJleHBvcnQgY29uc3QgU1RBS0lOR19BRERSRVNTID0gXCIweEZhOTA4QWIwNTMxMTFmYTA1MTg2MjI5YjkwOUUwZDkwQUM4NUNkMWZcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOX0FERFJFU1MgPSBcIjB4ZTRhYTQ1N2QyOTZiODk2NDUxNjE3ZjZjODM0NjhmMzY5MWUwYWJhNFwiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5fU1lNQk9MID0gXCJBUlNIXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9ERUNJTUFMUyA9IDE4O1xuXG5leHBvcnQgY29uc3QgTEFSR0VTVF9OVU0gPVxuICAgIFwiMHhmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmXCI7XG5cbi8vIG9sZHN0YWtpbmcgMHgxRDMyNWI0NzNlZTYwM0EwOEVCRjJDMzc1ZDI3NjRiYTA4NGIyNWE4XG4vLyBvbGQgc3Rha2luZyAweDE0NTAzNDY2MmI2Qzg4NUJCRUVBMTEyZGQyNTY5MGViNzZlOUNEOTNcblxuZXhwb3J0IGNvbnN0IHVzZXJNdXN0V2FpdCA9XG4gICAgJ2Nhbm5vdCBlc3RpbWF0ZSBnYXM7IHRyYW5zYWN0aW9uIG1heSBmYWlsIG9yIG1heSByZXF1aXJlIG1hbnVhbCBnYXMgbGltaXQgKGVycm9yPXtcImNvZGVcIjotMzI2MDMsXCJtZXNzYWdlXCI6XCJleGVjdXRpb24gcmV2ZXJ0ZWQ6IHVzZXIgbXVzdCB3YWl0IHRpbGwgbG9jayBwZXJpb2QgaXMgZG9uZVwiLFwiZGF0YVwiOntcIm9yaWdpbmFsRXJyb3JcIjp7XCJjb2RlXCI6MyxcImRhdGFcIjpcIjB4MDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyNzc1NzM2NTcyMjA2ZDc1NzM3NDIwNzc2MTY5NzQyMDc0Njk2YzZjMjA2YzZmNjM2YjIwNzA2NTcyNjk2ZjY0MjA2OTczMjA2NDZmNmU2NTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJtZXNzYWdlXCI6XCJleGVjdXRpb24gcmV2ZXJ0ZWQ6IHVzZXIgbXVzdCB3YWl0IHRpbGwgbG9jayBwZXJpb2QgaXMgZG9uZVwifX19LCBtZXRob2Q9XCJlc3RpbWF0ZUdhc1wiLCB0cmFuc2FjdGlvbj17XCJmcm9tXCI6XCIweGNDMkQ3YjA0NGVFMEM3NDY3RTM5NzBiZkEyNjE1MTYzYzhhNjUwODRcIixcInRvXCI6XCIweDFEMzI1YjQ3M2VlNjAzQTA4RUJGMkMzNzVkMjc2NGJhMDg0YjI1YThcIixcImRhdGFcIjpcIjB4MmUxN2RlNzgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXCJhY2Nlc3NMaXN0XCI6bnVsbH0sIGNvZGU9VU5QUkVESUNUQUJMRV9HQVNfTElNSVQsIHZlcnNpb249cHJvdmlkZXJzLzUuNS4wKSc7XG5cbmV4cG9ydCBjb25zdCBrbm93bkVycm9yczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICBbdXNlck11c3RXYWl0XTogXCJ1c2VyIG11c3Qgd2FpdCB0aWxsIGxvY2sgcGVyaW9kIGlzIGRvbmVcIixcbn07XG4iLCJpbXBvcnQge1xuICAgIGNyZWF0ZVNsaWNlLFxuICAgIFBheWxvYWRBY3Rpb24sXG4gICAgVGh1bmtEaXNwYXRjaCxcbiAgICBBY3Rpb24sXG59IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQHNyYy9zdG9yZVwiO1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJAdHMvaW50ZXJmYWNlc1wiO1xuXG5pbXBvcnQgeyBTVEFLSU5HX0FERFJFU1MgfSBmcm9tIFwic3JjL2NvbnN0YW50c1wiO1xuaW1wb3J0IEFCSSBmcm9tIFwic3JjL2FiaS9TdGFraW5nLmpzb25cIjtcbmltcG9ydCB7IGdldENvbnRyYWN0IH0gZnJvbSBcInNyYy91dGlsc1wiO1xuXG4vLyBEZWZpbmUgYSB0eXBlIGZvciB0aGUgc2xpY2Ugc3RhdGVcbmludGVyZmFjZSBTdGFraW5nU3RhdGUge1xuICAgIHBvb2xzOiBQb29sW107XG59XG5cbi8vIERlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSB1c2luZyB0aGF0IHR5cGVcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3Rha2luZ1N0YXRlID0ge1xuICAgIHBvb2xzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBzdGFraW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJzdGFraW5nXCIsXG4gICAgLy8gYGNyZWF0ZVNsaWNlYCB3aWxsIGluZmVyIHRoZSBzdGF0ZSB0eXBlIGZyb20gdGhlIGBpbml0aWFsU3RhdGVgIGFyZ3VtZW50XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFBvb2xzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQb29sW10+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wb29scyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLy8gd2hhdGV2ZXIgZnVuY3Rpb24gdGhlIHRodW5rIHJldHVybnMgc2hvdWxkIHVzZSAudGhlbiAoY2FuJ3QgYXdhaXQpXG5leHBvcnQgY29uc3QgdXBkYXRlUG9vbHMgPSAoYWNjb3VudD86IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB2b2lkLCBBY3Rpb24+KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWtpbmcgPSBnZXRDb250cmFjdChTVEFLSU5HX0FERFJFU1MsIEFCSSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBzdGFraW5nLmdldFBvb2xzKCkudGhlbihhc3luYyAoX3Bvb2xzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9vbHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBfcG9vbHMubWFwKFxuICAgICAgICAgICAgICAgICAgICBhc3luYyAoXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHBvb2xOYW1lLCByZXdhcmRSYXRlLCBsb2NrUGVyaW9kLCB0b3RhbFN0YWtlZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJfaW5mbyA9IFtcIjAsMCwwXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaW5mbyA9IGF3YWl0IHN0YWtpbmcuZ2V0U3Rha2Vob2xkZXJJbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJfaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcG9vbE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkUmF0ZTogcmV3YXJkUmF0ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tQZXJpb2Q6IGxvY2tQZXJpb2QudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFN0YWtlZDogdG90YWxTdGFrZWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9kZXBvc2l0X3RpbWU6IHVzZXJfaW5mb1swXS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3Rha2U6IHVzZXJfaW5mb1sxXS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcmV3YXJkOiB1c2VyX2luZm9bMl0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFBvb2xzKHBvb2xzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuXG4vLyBzZXRQb29scyBpcyBhbiBhY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldFBvb2xzIH0gPSBzdGFraW5nU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgc3Rha2luZ1NsaWNlLnJlZHVjZXI7XG4iLCJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQHNyYy9zdG9yZVwiO1xuXG4vLyBVc2UgdGhyb3VnaG91dCB5b3VyIGFwcCBpbnN0ZWFkIG9mIHBsYWluIGB1c2VEaXNwYXRjaGAgYW5kIGB1c2VTZWxlY3RvcmBcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpOiBBcHBEaXNwYXRjaCA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250cmFjdCwgQ29udHJhY3RJbnRlcmZhY2UgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvY29udHJhY3RzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3QgPSAoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIEFCSTogQ29udHJhY3RJbnRlcmZhY2UsXG4gICAgd2l0aFNpZ25lciA9IGZhbHNlLFxuKTogQ29udHJhY3QgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IHsgbGlicmFyeSwgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gICAgcmV0dXJuIHVzZU1lbW8oXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICAhIWFkZHJlc3MgJiYgISFBQkkgJiYgISFsaWJyYXJ5XG4gICAgICAgICAgICAgICAgPyBuZXcgQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICBBQkksXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aFNpZ25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxpYnJhcnkuZ2V0U2lnbmVyKGFjY291bnQpLmNvbm5lY3RVbmNoZWNrZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxpYnJhcnksXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIFthZGRyZXNzLCBBQkksIHdpdGhTaWduZXIsIGxpYnJhcnksIGFjY291bnRdLFxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcblxuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tIFwic3JjL2Nvbm5lY3RvcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVhZ2VyQ29ubmVjdCgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGFjdGl2YXRlLCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG4gICAgY29uc3QgW3RyaWVkLCBzZXRUcmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbmplY3RlZC5pc0F1dGhvcml6ZWQoKS50aGVuKChpc0F1dGhvcml6ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShpbmplY3RlZCwgdW5kZWZpbmVkLCB0cnVlKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyaWVkKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUcmllZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW2FjdGl2YXRlXSk7XG5cbiAgICAvLyBpZiB0aGUgY29ubmVjdGlvbiB3b3JrZWQsIHdhaXQgdW50aWwgd2UgZ2V0IGNvbmZpcm1hdGlvbiBvZiB0aGF0IHRvIGZsaXAgdGhlIGZsYWdcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXRyaWVkICYmIGFjdGl2ZSkge1xuICAgICAgICAgICAgc2V0VHJpZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdHJpZWQsIGFjdGl2ZV0pO1xuXG4gICAgcmV0dXJuIHRyaWVkO1xufVxuIiwiaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0SW50ZXJmYWNlIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgSW5mdXJhUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBjb21taWZ5LCBmb3JtYXRVbml0cywgcGFyc2VFdGhlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC91bml0c1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBCaWdOdW1iZXJpc2ggfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5cbmNvbnN0IHJld2FyZEludGVydmFsID0gMzE1MzYwMDA7XG5jb25zdCBsaWJyYXJ5ID0gbmV3IEluZnVyYVByb3ZpZGVyKFwicmlua2VieVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW5IZXgoaGV4OiBzdHJpbmcsIGxlbmd0aCA9IDQpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtoZXguc3Vic3RyaW5nKDAsIGxlbmd0aCArIDIpfeKApiR7aGV4LnN1YnN0cmluZyhcbiAgICAgICAgaGV4Lmxlbmd0aCAtIGxlbmd0aCxcbiAgICApfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFjdChhZGRyZXNzOiBzdHJpbmcsIEFCSTogQ29udHJhY3RJbnRlcmZhY2UpOiBDb250cmFjdCB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBBQkksIGxpYnJhcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvV2Vla3MoX3NlY29uZHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlSW50KF9zZWNvbmRzKTtcbiAgICBjb25zdCBtb250aHMgPSBzZWNvbmRzIC8gNjA0ODAwO1xuICAgIHJldHVybiBtb250aHM7XG59XG5cbmV4cG9ydCBjb25zdCBwYXJzZUJhbGFuY2UgPSAoXG4gICAgYmFsYW5jZTogQmlnTnVtYmVyaXNoLFxuICAgIGRlY2ltYWxzID0gMTgsXG4gICAgZGVjaW1hbHNUb0Rpc3BsYXkgPSAzLFxuKTogc3RyaW5nID0+XG4gICAgY29tbWlmeShOdW1iZXIoZm9ybWF0VW5pdHMoYmFsYW5jZSwgZGVjaW1hbHMpKS50b0ZpeGVkKGRlY2ltYWxzVG9EaXNwbGF5KSk7XG5cbmV4cG9ydCBjb25zdCBudW1iZXJUb1dlaSA9IChudW1iZXI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgbnVtID0gbnVtYmVyXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAuZmlsdGVyKChjKSA9PiBjICE9PSBcIixcIilcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlRXRoZXIobnVtKS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVJld2FyZCA9IChcbiAgICBfYW1vdW50OiBCaWdOdW1iZXIsXG4gICAgcmV3YXJkUmF0ZTogQmlnTnVtYmVyaXNoLFxuICAgIGxvY2twZXJpb2Q6IEJpZ051bWJlcmlzaCxcbik6IEJpZ051bWJlciA9PiB7XG4gICAgY29uc3QgcmV3YXJkID0gX2Ftb3VudFxuICAgICAgICAubXVsKHJld2FyZFJhdGUpXG4gICAgICAgIC5tdWwobG9ja3BlcmlvZClcbiAgICAgICAgLmRpdihyZXdhcmRJbnRlcnZhbClcbiAgICAgICAgLmRpdigxMDApO1xuXG4gICAgcmV0dXJuIHJld2FyZDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGV0aGVyc3Byb2plY3QvY29udHJhY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC91bml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9