/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction convertToHtml(virtualNode) {\n  var $domElement = document.createElement(virtualNode.tagName);\n  if (typeof virtualNode === 'string' || typeof virtualNode === 'number') {\n    return document.createTextNode(\"\".concat(virtualNode));\n  }\n  virtualNode.props.children.forEach(function (virtualChild) {\n    $domElement.appendChild(convertToHtml(virtualChild));\n  });\n  return $domElement;\n}\nfunction render(initialVirtualTree, $domRoot) {\n  var $appHTML = convertToHtml(initialVirtualTree);\n  $domRoot.appendChild($appHTML);\n}\nfunction createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  var virtualElementProps = _objectSpread(_objectSpread({}, props), {}, {\n    children: children\n  });\n  if (typeof elementType === \"function\") {\n    return elementType(virtualElementProps);\n  }\n  return {\n    tagName: elementType,\n    props: virtualElementProps\n  };\n}\nvar React = {\n  createElement: createElement\n};\n\n//========================================\n\nfunction MeuComponente() {\n  return React.createElement(\"button\", null, \"Clique no componente\");\n}\n\n//========================================\n\nfunction App() {\n  return React.createElement(\"section\", {\n    className: \"App\",\n    tamanho: 'full'\n  }, React.createElement(\"h1\", {\n    className: 'classe-do-h1'\n  }, \"React com Reverse Engineering\"), React.createElement(\"p\", {\n    className: 'classe-do-p'\n  }, \"Esse é meu react simplificado\"), React.createElement(MeuComponente, null));\n}\nrender(React.createElement(App, {\n  className: 'appClass'\n}), document.getElementById('root'));\n\n//# sourceURL=webpack://framework_myreact/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;