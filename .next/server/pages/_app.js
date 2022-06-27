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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components */ "./src/components/index.ts");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/store */ "./src/store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\Arshia Dhiman\\Solidity-Staking-Project\\staking-frontend\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function getLibrary(provider) {
  return new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
    store: _src_store__WEBPACK_IMPORTED_MODULE_9__["store"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__["Web3ReactProvider"], {
      getLibrary: getLibrary,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {
        position: "bottom-right",
        theme: "dark"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp); // main entry point into app

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

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/staking/stakingSlice */ "./src/features/staking/stakingSlice.ts");



const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  staking: _features_staking_stakingSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_0___default.a)); // Infer the `RootState` and `AppDispatch` types from the store itself

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29ubmVjdC13YWxsZXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9hZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb29scy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hvdy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rha2luZy1wb29sL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGFraW5nLXBvb2wvc3Rha2UtbWVudS9kZXBvc2l0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGFraW5nLXBvb2wvc3Rha2UtbWVudS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rha2luZy1wb29sL3N0YWtlLW1lbnUvd2l0aGRyYXcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YWtpbmctcG9vbC90ZXh0LWl0ZW0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25uZWN0b3JzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zdGFraW5nL3N0YWtpbmdTbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUNvbnRyYWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlRWFnZXJDb25uZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJtIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJpIiwic3JjIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsImdldExpYnJhcnkiLCJwcm92aWRlciIsIldlYjNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidHlwZSIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIkNvbm5lY3RXYWxsZXQiLCJhY3RpdmUiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJ1c2VXZWIzUmVhY3QiLCJ0cmllZF90b19lYWdlcl9jb25uZWN0IiwidXNlRWFnZXJDb25uZWN0IiwiY29ubmVjdCIsImluamVjdGVkIiwidW5kZWZpbmVkIiwiZXJyIiwidG9hc3QiLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiZGlzY29ubmVjdCIsIkNvbnRhaW5lciIsIkZvb3RlciIsIkhlYWRlciIsImFkZFRva2VuIiwidG9rZW5BZGRyZXNzIiwiVE9LRU5fQUREUkVTUyIsInRva2VuU3ltYm9sIiwiVE9LRU5fU1lNQk9MIiwidG9rZW5EZWNpbWFscyIsIlRPS0VOX0RFQ0lNQUxTIiwidG9rZW5JbWFnZSIsIndhc0FkZGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWRkcmVzcyIsInN5bWJvbCIsImRlY2ltYWxzIiwiaW1hZ2UiLCJsb2ciLCJMYXlvdXQiLCJMb2FkZXIiLCJMb2dvIiwiTWFpbiIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwidXNlU3RhdGUiLCJ0b2tlbiIsInVzZUNvbnRyYWN0IiwiVG9rZW5BQkkiLCJhY2NvdW50IiwidXNlRWZmZWN0IiwiYmFsYW5jZU9mIiwidGhlbiIsInRvU3RyaW5nIiwiUG9vbHMiLCJwb29scyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJzdGFraW5nIiwibWFwIiwicG9vbCIsIlNob3ciLCJDYXJkIiwiU3Rha2luZ1Bvb2wiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwib25DbGljayIsIm5hbWUiLCJyZXdhcmRSYXRlIiwicm91bmQiLCJzZWNvbmRzVG9XZWVrcyIsImxvY2tQZXJpb2QiLCJ0b3RhbFN0YWtlZCIsIkRlcG9zaXQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzZXRMb2FkaW5nIiwiYWxsb3dhbmNlIiwic2V0QWxsb3dhbmNlIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwiU1RBS0lOR19BRERSRVNTIiwiU3Rha2luZ0FCSSIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJzdGFrZVRva2VucyIsImluZm8iLCJ0eCIsImFwcHJvdmUiLCJMQVJHRVNUX05VTSIsIndhaXQiLCJzdWNjZXNzIiwidXBkYXRlUG9vbHMiLCJzdGFrZSIsIm51bWJlclRvV2VpIiwia25vd25FcnJvcnMiLCJhbW91bnRBZnRlclN0YWtlIiwiQmlnTnVtYmVyIiwiZnJvbSIsInVzZXJfc3Rha2UiLCJhZGQiLCJlc3RpbWF0ZWRSZXdhcmQiLCJjYWxjdWxhdGVSZXdhcmQiLCJwYXJzZUJhbGFuY2UiLCJlIiwidGFyZ2V0IiwiU3Rha2VNZW51IiwiV2l0aGRyYXciLCJ1c2VEaXNwYXRjaCIsInJlZGVlbVRva2VucyIsInVuc3Rha2UiLCJnZXREYXlzTGVmdCIsIl9kZXBvc2l0X3RpbWUiLCJkZXBvc2l0X3RpbWUiLCJ0b051bWJlciIsInRpbWVfc3RhbXBfc2Vjb25kcyIsImZsb29yIiwibm93Iiwic2Vjb25kc19sb2NrZWQiLCJ0aW1lX2RvbmUiLCJzZWNvbmRzX2xlZnQiLCJkYXlzX2xlZnQiLCJtYXgiLCJnZXRVc2VyU2Vjb25kc0RvbmUiLCJ1c2VyX3Jld2FyZCIsInVzZXJfZGVwb3NpdF90aW1lIiwiVGV4dEl0ZW0iLCJ0aXRsZSIsInRleHQiLCJJbmplY3RlZENvbm5lY3RvciIsInN1cHBvcnRlZENoYWluSWRzIiwidXNlck11c3RXYWl0IiwiaW5pdGlhbFN0YXRlIiwic3Rha2luZ1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJyZWR1Y2VycyIsInNldFBvb2xzIiwiYWN0aW9uIiwicGF5bG9hZCIsImdldENvbnRyYWN0IiwiQUJJIiwiZ2V0UG9vbHMiLCJfcG9vbHMiLCJQcm9taXNlIiwicG9vbE5hbWUiLCJ1c2VyX2luZm8iLCJnZXRTdGFrZWhvbGRlckluZm8iLCJhY3Rpb25zIiwicmVkdWNlciIsInVzZVNlbGVjdG9yIiwid2l0aFNpZ25lciIsImxpYnJhcnkiLCJ1c2VNZW1vIiwiQ29udHJhY3QiLCJnZXRTaWduZXIiLCJjb25uZWN0VW5jaGVja2VkIiwidHJpZWQiLCJzZXRUcmllZCIsImlzQXV0aG9yaXplZCIsImNhdGNoIiwiY29tYmluZVJlZHVjZXJzIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJld2FyZEludGVydmFsIiwiSW5mdXJhUHJvdmlkZXIiLCJzaG9ydGVuSGV4IiwiaGV4IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiX3NlY29uZHMiLCJzZWNvbmRzIiwibW9udGhzIiwiZGVjaW1hbHNUb0Rpc3BsYXkiLCJjb21taWZ5IiwiTnVtYmVyIiwiZm9ybWF0VW5pdHMiLCJ0b0ZpeGVkIiwibnVtYmVyIiwibnVtIiwic3BsaXQiLCJmaWx0ZXIiLCJjIiwiam9pbiIsInBhcnNlRXRoZXIiLCJfYW1vdW50IiwibG9ja3BlcmlvZCIsInJld2FyZCIsIm11bCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNB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LGVBQWUsR0FBRyxDQUMzQm1GLE9BRDJCLEVBRTNCckgsVUFGMkIsRUFHM0JzSCxVQUgyQixLQUlmO0FBQ1osUUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQ2pCRyxHQURVLENBQ054SCxVQURNLEVBRVZ3SCxHQUZVLENBRU5GLFVBRk0sRUFHVkcsR0FIVSxDQUdOekIsY0FITSxFQUlWeUIsR0FKVSxDQUlOLEdBSk0sQ0FBZjs7QUFNQSxTQUFPRixNQUFQO0FBQ0gsQ0FaTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDUCxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgXCJAc3R5bGVzL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJAc3JjL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcik7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIHRoZW1lPVwiZGFya1wiIC8+XG4gICAgICAgICAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4vLyBtYWluIGVudHJ5IHBvaW50IGludG8gYXBwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIHtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICAgIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoe1xuICAgIGxhYmVsLFxuICAgIGlkLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHZhbHVlLFxuICAgIG9uQ2hhbmdlLFxuICAgIHR5cGUgPSBcInRleHRcIixcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj17aWR9PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWJsYWNrIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xuXG4vLyBleHBvcnQgdHlwZSBJQnV0dG9uID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4vLyAgICAgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuLy8gICAgIEhUTUxCdXR0b25FbGVtZW50XG4vLyA+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25cbiAgICBleHRlbmRzIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgICBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sXG4gICAgICAgIEhUTUxCdXR0b25FbGVtZW50XG4gICAgPiB7XG4gICAgbG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPElCdXR0b24+ID0gKHtcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxuICAgIGNoaWxkcmVuLFxuICAgIGRpc2FibGVkLFxuICAgIGxvYWRpbmcsXG4gICAgLi4ucmVzdFxufSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBgcm91bmRlZCBoLTkgYm9yZGVyIGJvcmRlci13aGl0ZSBib3JkZXItb3BhY2l0eS01ICR7XG4gICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICA/IFwiY3Vyc29yLW5vdC1hbGxvd2VkIGJnLWFjY2VudC1saWdodFwiXG4gICAgICAgICAgICA6IFwiYmctYWNjZW50IGhvdmVyOmJnLWFjY2VudC1kYXJrXCJcbiAgICB9ICR7Y2xhc3NOYW1lfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc30gZGlzYWJsZWQ9e2Rpc2FibGVkfSB7Li4ucmVzdH0+XG4gICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiBjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gXCJAc3JjL2Nvbm5lY3RvcnNcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QgfSBmcm9tIFwiQGhvb2tzL3VzZUVhZ2VyQ29ubmVjdFwiO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdFdhbGxldDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCB0cmllZF90b19lYWdlcl9jb25uZWN0ID0gdXNlRWFnZXJDb25uZWN0KCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICBpZiAoIXRyaWVkX3RvX2VhZ2VyX2Nvbm5lY3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLmRhdGE/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLmRhdGE/Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwXCJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmUgPyBkaXNjb25uZWN0IDogY29ubmVjdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aXZlID8gXCJEaXNjb25uZWN0XCIgOiBcIkNvbm5lY3RcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImV4cG9ydCBjb25zdCBDb250YWluZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTIgYmctbGV2ZWwtb25lIGJvcmRlci10IGJvcmRlci13aGl0ZSBib3JkZXItb3BhY2l0eS01IHctZnVsbFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbGlzdC1ub25lIFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXJzaGlhRGhpbWFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvZ2l0aHViLWljb24uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnaXRodWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hcnNoaWEtZGhpbWFuLTkzMjg5ODIwMi9cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29ucy9saW5rZWRpbi1pY29uLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGlua2VkaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb25uZWN0V2FsbGV0LCBMb2dvIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUT0tFTl9BRERSRVNTLCBUT0tFTl9ERUNJTUFMUywgVE9LRU5fU1lNQk9MIH0gZnJvbSBcIkBzcmMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICBjb25zdCBhZGRUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5BZGRyZXNzID0gVE9LRU5fQUREUkVTUztcbiAgICAgICAgY29uc3QgdG9rZW5TeW1ib2wgPSBUT0tFTl9TWU1CT0w7XG4gICAgICAgIGNvbnN0IHRva2VuRGVjaW1hbHMgPSBUT0tFTl9ERUNJTUFMUztcbiAgICAgICAgY29uc3QgdG9rZW5JbWFnZSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1FtVW9KR21rVjdvVjVQdjVEd3dHNG9rSmg5VFdZbkVxR0F6S0ZXWmZpNE5TV2VcIjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gd2FzQWRkZWQgaXMgYSBib29sZWFuLiBMaWtlIGFueSBSUEMgbWV0aG9kLCBhbiBlcnJvciBtYXkgYmUgdGhyb3duLlxuICAgICAgICAgICAgY29uc3Qgd2FzQWRkZWQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIndhbGxldF93YXRjaEFzc2V0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRVJDMjBcIiwgLy8gSW5pdGlhbGx5IG9ubHkgc3VwcG9ydHMgRVJDMjAsIGJ1dCBldmVudHVhbGx5IG1vcmUhXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRva2VuQWRkcmVzcywgLy8gVGhlIGFkZHJlc3MgdGhhdCB0aGUgdG9rZW4gaXMgYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRva2VuU3ltYm9sLCAvLyBBIHRpY2tlciBzeW1ib2wgb3Igc2hvcnRoYW5kLCB1cCB0byA1IGNoYXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IHRva2VuRGVjaW1hbHMsIC8vIFRoZSBudW1iZXIgb2YgZGVjaW1hbHMgaW4gdGhlIHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdG9rZW5JbWFnZSwgLy8gQSBzdHJpbmcgdXJsIG9mIHRoZSB0b2tlbiBsb2dvXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAod2FzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoYW5rcyBmb3IgeW91ciBpbnRlcmVzdCFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91ciBsb3NzIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGJnLWxldmVsLW9uZSBib3JkZXItYiBib3JkZXItd2hpdGUgYm9yZGVyLW9wYWNpdHktNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1heC13LTZ4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPkFSU0hUb2tlbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkVG9rZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBBUlNIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufTtcbiIsImV4cG9ydCB7IENvbm5lY3RXYWxsZXQgfSBmcm9tIFwiLi9jb25uZWN0LXdhbGxldFwiO1xuZXhwb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5leHBvcnQgeyBMb2dvIH0gZnJvbSBcIi4vbG9nb1wiO1xuZXhwb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5leHBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcbmV4cG9ydCB7IExheW91dCB9IGZyb20gXCIuL2xheW91dFwiO1xuZXhwb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4vbG9hZGVyXCI7XG5leHBvcnQgeyBQb29scyB9IGZyb20gXCIuL3Bvb2xzXCI7XG5leHBvcnQgeyBTdGFraW5nUG9vbCB9IGZyb20gXCIuL3N0YWtpbmctcG9vbFwiO1xuZXhwb3J0IHsgU2hvdyB9IGZyb20gXCIuL3Nob3dcIjtcbmV4cG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciwgRm9vdGVyLCBDb250YWluZXIgfSBmcm9tIFwiQGNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IExheW91dDogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBMb2FkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG9cIlxuICAgICAgICAgICAgd2lkdGg9XCIyM1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyM1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ1IDQ1XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgMSlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCI2XCIgc3Ryb2tlT3BhY2l0eT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiMS41c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCI2OzIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCIxLjVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjTW9kZT1cImxpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInN0cm9rZS13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIjEuNXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMjswXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCI2XCIgc3Ryb2tlT3BhY2l0eT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiNjsyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjTW9kZT1cImxpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMTswXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiM3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMjswXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNNb2RlPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIjBzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjEuNXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiNjsxOzI7Mzs0OzU7NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjTW9kZT1cImxpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgY29uc3QgTG9nbzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvaW1nL2Fyc2gtbG9nby5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiQVJTSCB0b2tlblwiXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgLz5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFNob3csIFBvb2xzIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCB9IGZyb20gXCJAaG9va3MvdXNlQ29udHJhY3RcIjtcbmltcG9ydCB7IFRPS0VOX0FERFJFU1MgfSBmcm9tIFwiQHNyYy9jb25zdGFudHNcIjtcbmltcG9ydCBUb2tlbkFCSSBmcm9tIFwiQGFiaS9Ub2tlbi5qc29uXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCIwXCIpO1xuICAgIGNvbnN0IHRva2VuID0gdXNlQ29udHJhY3QoVE9LRU5fQUREUkVTUywgVG9rZW5BQkksIHRydWUpO1xuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICAgICAgLmJhbGFuY2VPZihhY2NvdW50KVxuICAgICAgICAgICAgICAgIC50aGVuKChiYWxhbmNlOiBzdHJpbmcpID0+IHNldEJhbGFuY2UoYmFsYW5jZS50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICB9LCBbdG9rZW5dKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWluLWgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8U2hvdyAvPlxuICAgICAgICAgICAgPFBvb2xzIGJhbGFuY2U9e2JhbGFuY2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTdGFraW5nUG9vbCB9IGZyb20gXCJAY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3Rha2luZ1Byb3BzIH0gZnJvbSBcIkB0cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAaG9va3NcIjtcblxuZXhwb3J0IGNvbnN0IFBvb2xzOiBSZWFjdC5GQzxTdGFraW5nUHJvcHM+ID0gKHsgYmFsYW5jZSB9KSA9PiB7XG4gICAgY29uc3QgcG9vbHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnN0YWtpbmcucG9vbHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHctZnVsbCBtYXgtdy00eGwgbXgtYXV0byBtdC00XCI+XG4gICAgICAgICAgICAgICAgU3Rha2luZyBQb29sc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cG9vbHMubWFwKChwb29sLCBpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFraW5nUG9vbCBiYWxhbmNlPXtiYWxhbmNlfSBrZXk9e2lkfSBwb29sPXtwb29sfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBjb21wb25lbnRzL3N0YWtpbmctcG9vbC9jYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBTaG93OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIj5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LWNlbnRlciBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgU3Rha2UgeW91ciBBUlNIIFRva2VucyB0byByZWNpZXZlIHJld2FyZHMhIE9uY2UgdG9rZW5zIGFyZVxuICAgICAgICAgICAgICAgICAgICBzdGFrZWQgdGhleSBhcmUgbG9ja2VkIHVwIHRpbGwgdGhlIGxvY2t1cCBwZXJpb2QgaXNcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUuIERvbnQgaGF2ZSBBUlNIIFRva2Vucz97XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Rva2VuLWZhdWNldC52ZXJjZWwuYXBwLyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+Q2xpY2sgaGVyZTwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICB0byByZWNpZXZlIDEwLDAwMCBBUlNIIFRva2VucyBmcm9tIHRoZSBGYXVjZXQgZXZlcnkgaG91clxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENhcmQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHRleHQtbGVmdCBiZy1sZXZlbC1vbmUgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTUgdy1mdWxsIG1heC13LTR4bCBteC1hdXRvIHB5LTRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQnV0dG9uLCBMb2dvIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzZWNvbmRzVG9XZWVrcyB9IGZyb20gXCJAc3JjL3V0aWxzXCI7XG5pbXBvcnQgeyBQb29sUHJvcHMgfSBmcm9tIFwiQHRzL2ludGVyZmFjZXNcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCB7IFN0YWtlTWVudSB9IGZyb20gXCIuL3N0YWtlLW1lbnVcIjtcbmltcG9ydCB7IFRleHRJdGVtIH0gZnJvbSBcIi4vdGV4dC1pdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBTdGFraW5nUG9vbDogUmVhY3QuRkM8UG9vbFByb3BzPiA9ICh7IHBvb2wsIGJhbGFuY2UgfSkgPT4ge1xuICAgIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd01lbnUoIXNob3dNZW51KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbWQ6Z3JpZCBncmlkLWNvbHMtNyBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6cGItMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEl0ZW0gdGl0bGU9e1wiTmFtZVwifSB0ZXh0PXtwb29sLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEl0ZW0gdGl0bGU9e1wiUmV3YXJkXCJ9IHRleHQ9e3Bvb2wucmV3YXJkUmF0ZSArIFwiICVcIn0gLz5cblxuICAgICAgICAgICAgICAgIDxUZXh0SXRlbVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJMb2NrIFBlcmlvZFwifVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoc2Vjb25kc1RvV2Vla3MocG9vbC5sb2NrUGVyaW9kKSkudG9TdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiB3ZWVrc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRJdGVtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlRvdGFsIFN0YWtlZFwifVxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHBvb2wudG90YWxTdGFrZWQpIC8gMTAwMDAwMDAwMDAwMDAwMDAwMCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBBUlNIXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1kOnctMTYgdy1mdWxsIG15LTRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IG14LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD17c2hvd01lbnUgPyBcIk01IDE1bDctNyA3IDdcIiA6IFwiTTE5IDlsLTcgNy03LTdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvd01lbnUgJiYgPFN0YWtlTWVudSBwb29sPXtwb29sfSBiYWxhbmNlPXtiYWxhbmNlfSAvPn1cbiAgICAgICAgPC9DYXJkPlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3QgfSBmcm9tIFwiQGhvb2tzL3VzZUNvbnRyYWN0XCI7XG5pbXBvcnQge1xuICAgIFNUQUtJTkdfQUREUkVTUyxcbiAgICBUT0tFTl9BRERSRVNTLFxuICAgIExBUkdFU1RfTlVNLFxuICAgIGtub3duRXJyb3JzLFxufSBmcm9tIFwiQHNyYy9jb25zdGFudHNcIjtcbmltcG9ydCBTdGFraW5nQUJJIGZyb20gXCJAYWJpL1N0YWtpbmcuanNvblwiO1xuaW1wb3J0IFRva2VuQUJJIGZyb20gXCJAYWJpL1Rva2VuLmpzb25cIjtcbmltcG9ydCB7IHBhcnNlQmFsYW5jZSwgbnVtYmVyVG9XZWkgfSBmcm9tIFwiQHNyYy91dGlsc1wiO1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJAdHMvaW50ZXJmYWNlc1wiO1xuXG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSZXdhcmQgfSBmcm9tIFwiQHNyYy91dGlsc1wiO1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCJAaG9va3NcIjtcbmltcG9ydCB7IHVwZGF0ZVBvb2xzIH0gZnJvbSBcIkBzcmMvZmVhdHVyZXMvc3Rha2luZy9zdGFraW5nU2xpY2VcIjtcblxuZXhwb3J0IGNvbnN0IERlcG9zaXQ6IFJlYWN0LkZDPHtcbiAgICBwb29sOiBQb29sO1xufT4gPSAoeyBwb29sIH0pID0+IHtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCIwXCIpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYWxsb3dhbmNlLCBzZXRBbGxvd2FuY2VdID0gdXNlU3RhdGUoXCIwXCIpO1xuICAgIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc3Rha2luZyA9IHVzZUNvbnRyYWN0KFNUQUtJTkdfQUREUkVTUywgU3Rha2luZ0FCSSwgdHJ1ZSk7XG4gICAgY29uc3QgdG9rZW4gPSB1c2VDb250cmFjdChUT0tFTl9BRERSRVNTLCBUb2tlbkFCSSwgdHJ1ZSk7XG4gICAgY29uc3QgeyBhY2NvdW50LCBhY3RpdmUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IHN0YWtlVG9rZW5zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGFsbG93YW5jZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICB0b2FzdC5pbmZvKFwiQXdhaXRpbmcgc3VjY2Vzc2Z1bCB0cmFuc2FjdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IGF3YWl0IHRva2VuPy5hcHByb3ZlKFNUQUtJTkdfQUREUkVTUywgTEFSR0VTVF9OVU0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICAgICAgICAgICAgICBzZXRFbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlUG9vbHMoYWNjb3VudCB8fCBcIlwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdGFraW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmluZm8oXCJBd2FpdGluZyBzdWNjZXNzZnVsIHRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eCA9IGF3YWl0IHN0YWtpbmcuc3Rha2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJUb1dlaShhbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9vbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlUG9vbHMoYWNjb3VudCB8fCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRBbW91bnQoXCIwXCIpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBrbm93bkVycm9yc1tlcnIubWVzc2FnZV0gfHwgZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0b2tlblxuICAgICAgICAgICAgICAgIC5hbGxvd2FuY2UoYWNjb3VudCwgU1RBS0lOR19BRERSRVNTKVxuICAgICAgICAgICAgICAgIC50aGVuKChhbGxvd2FuY2U6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0QWxsb3dhbmNlKGFsbG93YW5jZS50b1N0cmluZygpKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwgW3Rva2VuLCBlbmFibGUsIGFjY291bnRdKTtcblxuICAgIGNvbnN0IGFtb3VudEFmdGVyU3Rha2UgPSBCaWdOdW1iZXIuZnJvbShwb29sLnVzZXJfc3Rha2UpLmFkZChcbiAgICAgICAgbnVtYmVyVG9XZWkoYW1vdW50KSxcbiAgICApO1xuXG4gICAgY29uc3QgZXN0aW1hdGVkUmV3YXJkID0gY2FsY3VsYXRlUmV3YXJkKFxuICAgICAgICBhbW91bnRBZnRlclN0YWtlLFxuICAgICAgICBwb29sLnJld2FyZFJhdGUsXG4gICAgICAgIHBvb2wubG9ja1BlcmlvZCxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIEFtb3VudCBBZnRlciBTdGFrZXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlQmFsYW5jZShhbW91bnRBZnRlclN0YWtlKX0gQVJTSFxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICBOZXcgRXN0aW1hdGVkIFJld2FyZHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlQmFsYW5jZShlc3RpbWF0ZWRSZXdhcmQpfSBBUlNIXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YWtlIEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUgfHwgXCIwXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFrZVRva2Vuc31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhY3RpdmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWxsb3dhbmNlICE9PSBcIjBcIiA/IFwiU3Rha2VcIiA6IFwiRW5hYmxlXCJ9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgSVN0YWtlTWVudSB9IGZyb20gXCJAdHMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgcGFyc2VCYWxhbmNlIH0gZnJvbSBcIkBzcmMvdXRpbHNcIjtcblxuaW1wb3J0IHsgRGVwb3NpdCB9IGZyb20gXCIuL2RlcG9zaXRcIjtcbmltcG9ydCB7IFdpdGhkcmF3IH0gZnJvbSBcIi4vd2l0aGRyYXdcIjtcblxuZXhwb3J0IGNvbnN0IFN0YWtlTWVudTogUmVhY3QuRkM8SVN0YWtlTWVudT4gPSAoeyBiYWxhbmNlLCBwb29sIH0pID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLXdoaXRlIGJvcmRlci1vcGFjaXR5LTUgcHktMlwiPlxuICAgICAgICAgICAgICAgIEF2YWlsYWJsZSA6IHtwYXJzZUJhbGFuY2UoYWN0aXZlID8gYmFsYW5jZSA6IDApfSBBUlNIXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTYgc3BhY2UteC02IHJvdW5kZWQtYi1sZ1wiPlxuICAgICAgICAgICAgICAgIDxEZXBvc2l0IHBvb2w9e3Bvb2x9IC8+XG4gICAgICAgICAgICAgICAgPFdpdGhkcmF3IHBvb2w9e3Bvb2x9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmltcG9ydCBTdGFraW5nQUJJIGZyb20gXCJAYWJpL1N0YWtpbmcuanNvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCB9IGZyb20gXCJAaG9va3MvdXNlQ29udHJhY3RcIjtcbmltcG9ydCB7IFNUQUtJTkdfQUREUkVTUywga25vd25FcnJvcnMgfSBmcm9tIFwiQHNyYy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhcnNlQmFsYW5jZSB9IGZyb20gXCJAc3JjL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJAdHMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVwZGF0ZVBvb2xzIH0gZnJvbSBcIkBzcmMvZmVhdHVyZXMvc3Rha2luZy9zdGFraW5nU2xpY2VcIjtcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcblxuZXhwb3J0IGNvbnN0IFdpdGhkcmF3OiBSZWFjdC5GQzx7XG4gICAgcG9vbDogUG9vbDtcbn0+ID0gKHsgcG9vbCB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHN0YWtpbmcgPSB1c2VDb250cmFjdChTVEFLSU5HX0FERFJFU1MsIFN0YWtpbmdBQkksIHRydWUpO1xuICAgIGNvbnN0IHsgYWN0aXZlLCBhY2NvdW50IH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCByZWRlZW1Ub2tlbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc3Rha2luZykge1xuICAgICAgICAgICAgICAgIHRvYXN0LmluZm8oXCJBd2FpdGluZyBzdWNjZXNzZnVsIHRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgc3Rha2luZz8udW5zdGFrZShwb29sLmlkKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC53YWl0KCk7XG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlUG9vbHMoYWNjb3VudCB8fCBcIlwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0ga25vd25FcnJvcnNbZXJyLm1lc3NhZ2VdIHx8IGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERheXNMZWZ0ID0gKF9kZXBvc2l0X3RpbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBkZXBvc2l0X3RpbWUgPSBCaWdOdW1iZXIuZnJvbShfZGVwb3NpdF90aW1lKS50b051bWJlcigpO1xuICAgICAgICBjb25zdCB0aW1lX3N0YW1wX3NlY29uZHMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc19sb2NrZWQgPSBCaWdOdW1iZXIuZnJvbShwb29sLmxvY2tQZXJpb2QpLnRvTnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHRpbWVfZG9uZSA9IHRpbWVfc3RhbXBfc2Vjb25kcyAtIGRlcG9zaXRfdGltZTtcbiAgICAgICAgY29uc3Qgc2Vjb25kc19sZWZ0ID0gc2Vjb25kc19sb2NrZWQgLSB0aW1lX2RvbmU7XG4gICAgICAgIGNvbnN0IGRheXNfbGVmdCA9IE1hdGguZmxvb3Ioc2Vjb25kc19sZWZ0IC8gODY0MDApO1xuXG4gICAgICAgIHJldHVybiBNYXRoLm1heChkYXlzX2xlZnQsIDApO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVc2VyU2Vjb25kc0RvbmUgPSAoX2RlcG9zaXRfdGltZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlcG9zaXRfdGltZSA9IEJpZ051bWJlci5mcm9tKF9kZXBvc2l0X3RpbWUpLnRvTnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RhbXBfc2Vjb25kcyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBjb25zdCB0aW1lX2RvbmUgPSB0aW1lX3N0YW1wX3NlY29uZHMgLSBkZXBvc2l0X3RpbWU7XG5cbiAgICAgICAgcmV0dXJuIHRpbWVfZG9uZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS0yIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIEFtb3VudCBTdGFrZWR7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZUJhbGFuY2UocG9vbC51c2VyX3N0YWtlKX0gQVJTSFxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIFJld2FyZHMgRWFybmVke1wiIFwifVxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VCYWxhbmNlKHBvb2wudXNlcl9yZXdhcmQpfSBBUlNIXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgRGF5cyBMZWZ0e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cG9vbC51c2VyX3N0YWtlID4gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0RGF5c0xlZnQocG9vbC51c2VyX2RlcG9zaXRfdGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwXCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBEYXlzXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWRlZW1Ub2tlbnN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMFwiXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICFhY3RpdmUgfHxcbiAgICAgICAgICAgICAgICAgICAgcG9vbC51c2VyX3N0YWtlID09IFwiMFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGdldFVzZXJTZWNvbmRzRG9uZShwb29sLnVzZXJfZGVwb3NpdF90aW1lKSA8XG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIuZnJvbShwb29sLmxvY2tQZXJpb2QpLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVkZWVtXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUZXh0SXRlbTogUmVhY3QuRkM8eyB0aXRsZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT4gPSAoe1xuICAgIHRpdGxlLFxuICAgIHRleHQsXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmlubGluZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtYmFzZSB0ZXh0LWdyYXktMzAwXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57dGV4dH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gICAgc3VwcG9ydGVkQ2hhaW5JZHM6IFs0XSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IFNUQUtJTkdfQUREUkVTUyA9IFwiMHhGYTkwOEFiMDUzMTExZmEwNTE4NjIyOWI5MDlFMGQ5MEFDODVDZDFmXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9BRERSRVNTID0gXCIweGU0YWE0NTdkMjk2Yjg5NjQ1MTYxN2Y2YzgzNDY4ZjM2OTFlMGFiYTRcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOX1NZTUJPTCA9IFwiQVJTSFwiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5fREVDSU1BTFMgPSAxODtcblxuZXhwb3J0IGNvbnN0IExBUkdFU1RfTlVNID1cbiAgICBcIjB4ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlwiO1xuXG4vLyBvbGRzdGFraW5nIDB4MUQzMjViNDczZWU2MDNBMDhFQkYyQzM3NWQyNzY0YmEwODRiMjVhOFxuLy8gb2xkIHN0YWtpbmcgMHgxNDUwMzQ2NjJiNkM4ODVCQkVFQTExMmRkMjU2OTBlYjc2ZTlDRDkzXG5cbmV4cG9ydCBjb25zdCB1c2VyTXVzdFdhaXQgPVxuICAgICdjYW5ub3QgZXN0aW1hdGUgZ2FzOyB0cmFuc2FjdGlvbiBtYXkgZmFpbCBvciBtYXkgcmVxdWlyZSBtYW51YWwgZ2FzIGxpbWl0IChlcnJvcj17XCJjb2RlXCI6LTMyNjAzLFwibWVzc2FnZVwiOlwiZXhlY3V0aW9uIHJldmVydGVkOiB1c2VyIG11c3Qgd2FpdCB0aWxsIGxvY2sgcGVyaW9kIGlzIGRvbmVcIixcImRhdGFcIjp7XCJvcmlnaW5hbEVycm9yXCI6e1wiY29kZVwiOjMsXCJkYXRhXCI6XCIweDA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjc3NTczNjU3MjIwNmQ3NTczNzQyMDc3NjE2OTc0MjA3NDY5NmM2YzIwNmM2ZjYzNmIyMDcwNjU3MjY5NmY2NDIwNjk3MzIwNjQ2ZjZlNjUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwibWVzc2FnZVwiOlwiZXhlY3V0aW9uIHJldmVydGVkOiB1c2VyIG11c3Qgd2FpdCB0aWxsIGxvY2sgcGVyaW9kIGlzIGRvbmVcIn19fSwgbWV0aG9kPVwiZXN0aW1hdGVHYXNcIiwgdHJhbnNhY3Rpb249e1wiZnJvbVwiOlwiMHhjQzJEN2IwNDRlRTBDNzQ2N0UzOTcwYmZBMjYxNTE2M2M4YTY1MDg0XCIsXCJ0b1wiOlwiMHgxRDMyNWI0NzNlZTYwM0EwOEVCRjJDMzc1ZDI3NjRiYTA4NGIyNWE4XCIsXCJkYXRhXCI6XCIweDJlMTdkZTc4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFwiYWNjZXNzTGlzdFwiOm51bGx9LCBjb2RlPVVOUFJFRElDVEFCTEVfR0FTX0xJTUlULCB2ZXJzaW9uPXByb3ZpZGVycy81LjUuMCknO1xuXG5leHBvcnQgY29uc3Qga25vd25FcnJvcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgW3VzZXJNdXN0V2FpdF06IFwidXNlciBtdXN0IHdhaXQgdGlsbCBsb2NrIHBlcmlvZCBpcyBkb25lXCIsXG59O1xuIiwiaW1wb3J0IHtcbiAgICBjcmVhdGVTbGljZSxcbiAgICBQYXlsb2FkQWN0aW9uLFxuICAgIFRodW5rRGlzcGF0Y2gsXG4gICAgQWN0aW9uLFxufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkBzcmMvc3RvcmVcIjtcbmltcG9ydCB7IFBvb2wgfSBmcm9tIFwiQHRzL2ludGVyZmFjZXNcIjtcblxuaW1wb3J0IHsgU1RBS0lOR19BRERSRVNTIH0gZnJvbSBcInNyYy9jb25zdGFudHNcIjtcbmltcG9ydCBBQkkgZnJvbSBcInNyYy9hYmkvU3Rha2luZy5qc29uXCI7XG5pbXBvcnQgeyBnZXRDb250cmFjdCB9IGZyb20gXCJzcmMvdXRpbHNcIjtcblxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIHNsaWNlIHN0YXRlXG5pbnRlcmZhY2UgU3Rha2luZ1N0YXRlIHtcbiAgICBwb29sczogUG9vbFtdO1xufVxuXG4vLyBEZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgdXNpbmcgdGhhdCB0eXBlXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YWtpbmdTdGF0ZSA9IHtcbiAgICBwb29sczogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgc3Rha2luZ1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwic3Rha2luZ1wiLFxuICAgIC8vIGBjcmVhdGVTbGljZWAgd2lsbCBpbmZlciB0aGUgc3RhdGUgdHlwZSBmcm9tIHRoZSBgaW5pdGlhbFN0YXRlYCBhcmd1bWVudFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRQb29sczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UG9vbFtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucG9vbHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbi8vIHdoYXRldmVyIGZ1bmN0aW9uIHRoZSB0aHVuayByZXR1cm5zIHNob3VsZCB1c2UgLnRoZW4gKGNhbid0IGF3YWl0KVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvb2xzID0gKGFjY291bnQ/OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPFJvb3RTdGF0ZSwgdm9pZCwgQWN0aW9uPik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBzdGFraW5nID0gZ2V0Q29udHJhY3QoU1RBS0lOR19BRERSRVNTLCBBQkkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgc3Rha2luZy5nZXRQb29scygpLnRoZW4oYXN5bmMgKF9wb29sczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvb2xzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgX3Bvb2xzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwb29sTmFtZSwgcmV3YXJkUmF0ZSwgbG9ja1BlcmlvZCwgdG90YWxTdGFrZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VyX2luZm8gPSBbXCIwLDAsMFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2luZm8gPSBhd2FpdCBzdGFraW5nLmdldFN0YWtlaG9sZGVySW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBvb2xOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZFJhdGU6IHJld2FyZFJhdGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrUGVyaW9kOiBsb2NrUGVyaW9kLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTdGFrZWQ6IHRvdGFsU3Rha2VkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfZGVwb3NpdF90aW1lOiB1c2VyX2luZm9bMF0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YWtlOiB1c2VyX2luZm9bMV0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Jld2FyZDogdXNlcl9pbmZvWzJdLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRQb29scyhwb29scykpO1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuLy8gc2V0UG9vbHMgaXMgYW4gYWN0aW9uXG5leHBvcnQgY29uc3QgeyBzZXRQb29scyB9ID0gc3Rha2luZ1NsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWtpbmdTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHR5cGUgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSBcIkBzcmMvc3RvcmVcIjtcblxuLy8gVXNlIHRocm91Z2hvdXQgeW91ciBhcHAgaW5zdGVhZCBvZiBwbGFpbiBgdXNlRGlzcGF0Y2hgIGFuZCBgdXNlU2VsZWN0b3JgXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKTogQXBwRGlzcGF0Y2ggPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udHJhY3QsIENvbnRyYWN0SW50ZXJmYWNlIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNvbnRyYWN0ID0gKFxuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBBQkk6IENvbnRyYWN0SW50ZXJmYWNlLFxuICAgIHdpdGhTaWduZXIgPSBmYWxzZSxcbik6IENvbnRyYWN0IHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCB7IGxpYnJhcnksIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIHJldHVybiB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgISFhZGRyZXNzICYmICEhQUJJICYmICEhbGlicmFyeVxuICAgICAgICAgICAgICAgID8gbmV3IENvbnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgQUJJLFxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhTaWduZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsaWJyYXJ5LmdldFNpZ25lcihhY2NvdW50KS5jb25uZWN0VW5jaGVja2VkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsaWJyYXJ5LFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBbYWRkcmVzcywgQUJJLCB3aXRoU2lnbmVyLCBsaWJyYXJ5LCBhY2NvdW50XSxcbiAgICApO1xufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5cbmltcG9ydCB7IGluamVjdGVkIH0gZnJvbSBcInNyYy9jb25uZWN0b3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFYWdlckNvbm5lY3QoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICAgIGNvbnN0IFt0cmllZCwgc2V0VHJpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5qZWN0ZWQuaXNBdXRob3JpemVkKCkudGhlbigoaXNBdXRob3JpemVkKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmllZCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VHJpZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFthY3RpdmF0ZV0pO1xuXG4gICAgLy8gaWYgdGhlIGNvbm5lY3Rpb24gd29ya2VkLCB3YWl0IHVudGlsIHdlIGdldCBjb25maXJtYXRpb24gb2YgdGhhdCB0byBmbGlwIHRoZSBmbGFnXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0cmllZCAmJiBhY3RpdmUpIHtcbiAgICAgICAgICAgIHNldFRyaWVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3RyaWVkLCBhY3RpdmVdKTtcblxuICAgIHJldHVybiB0cmllZDtcbn1cbiIsImltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHN0YWtpbmdTbGljZSBmcm9tIFwiLi9mZWF0dXJlcy9zdGFraW5nL3N0YWtpbmdTbGljZVwiO1xuaW1wb3J0IHsgQWN0aW9uLCBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgc3Rha2luZzogc3Rha2luZ1NsaWNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuXG4vLyBJbmZlciB0aGUgYFJvb3RTdGF0ZWAgYW5kIGBBcHBEaXNwYXRjaGAgdHlwZXMgZnJvbSB0aGUgc3RvcmUgaXRzZWxmXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG4vLyBJbmZlcnJlZCB0eXBlOiB7cG9zdHM6IFBvc3RzU3RhdGUsIGNvbW1lbnRzOiBDb21tZW50c1N0YXRlLCB1c2VyczogVXNlcnNTdGF0ZX1cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gVGh1bmtEaXNwYXRjaDxSb290U3RhdGUsIHZvaWQsIEFjdGlvbj47XG4iLCJpbXBvcnQgeyBDb250cmFjdCwgQ29udHJhY3RJbnRlcmZhY2UgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvY29udHJhY3RzXCI7XG5pbXBvcnQgeyBJbmZ1cmFQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcbmltcG9ydCB7IGNvbW1pZnksIGZvcm1hdFVuaXRzLCBwYXJzZUV0aGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIEJpZ051bWJlcmlzaCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcblxuY29uc3QgcmV3YXJkSW50ZXJ2YWwgPSAzMTUzNjAwMDtcbmNvbnN0IGxpYnJhcnkgPSBuZXcgSW5mdXJhUHJvdmlkZXIoXCJyaW5rZWJ5XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbkhleChoZXg6IHN0cmluZywgbGVuZ3RoID0gNCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2hleC5zdWJzdHJpbmcoMCwgbGVuZ3RoICsgMil94oCmJHtoZXguc3Vic3RyaW5nKFxuICAgICAgICBoZXgubGVuZ3RoIC0gbGVuZ3RoLFxuICAgICl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYWN0KGFkZHJlc3M6IHN0cmluZywgQUJJOiBDb250cmFjdEludGVyZmFjZSk6IENvbnRyYWN0IHtcbiAgICByZXR1cm4gbmV3IENvbnRyYWN0KGFkZHJlc3MsIEFCSSwgbGlicmFyeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRzVG9XZWVrcyhfc2Vjb25kczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBzZWNvbmRzID0gcGFyc2VJbnQoX3NlY29uZHMpO1xuICAgIGNvbnN0IG1vbnRocyA9IHNlY29uZHMgLyA2MDQ4MDA7XG4gICAgcmV0dXJuIG1vbnRocztcbn1cblxuZXhwb3J0IGNvbnN0IHBhcnNlQmFsYW5jZSA9IChcbiAgICBiYWxhbmNlOiBCaWdOdW1iZXJpc2gsXG4gICAgZGVjaW1hbHMgPSAxOCxcbiAgICBkZWNpbWFsc1RvRGlzcGxheSA9IDMsXG4pOiBzdHJpbmcgPT5cbiAgICBjb21taWZ5KE51bWJlcihmb3JtYXRVbml0cyhiYWxhbmNlLCBkZWNpbWFscykpLnRvRml4ZWQoZGVjaW1hbHNUb0Rpc3BsYXkpKTtcblxuZXhwb3J0IGNvbnN0IG51bWJlclRvV2VpID0gKG51bWJlcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBudW0gPSBudW1iZXJcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5maWx0ZXIoKGMpID0+IGMgIT09IFwiLFwiKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICByZXR1cm4gcGFyc2VFdGhlcihudW0pLnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlUmV3YXJkID0gKFxuICAgIF9hbW91bnQ6IEJpZ051bWJlcixcbiAgICByZXdhcmRSYXRlOiBCaWdOdW1iZXJpc2gsXG4gICAgbG9ja3BlcmlvZDogQmlnTnVtYmVyaXNoLFxuKTogQmlnTnVtYmVyID0+IHtcbiAgICBjb25zdCByZXdhcmQgPSBfYW1vdW50XG4gICAgICAgIC5tdWwocmV3YXJkUmF0ZSlcbiAgICAgICAgLm11bChsb2NrcGVyaW9kKVxuICAgICAgICAuZGl2KHJld2FyZEludGVydmFsKVxuICAgICAgICAuZGl2KDEwMCk7XG5cbiAgICByZXR1cm4gcmV3YXJkO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9jb250cmFjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=