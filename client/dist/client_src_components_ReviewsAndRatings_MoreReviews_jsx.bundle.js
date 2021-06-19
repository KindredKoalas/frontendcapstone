/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontendcapstone"] = self["webpackChunkfrontendcapstone"] || []).push([["client_src_components_ReviewsAndRatings_MoreReviews_jsx"],{

/***/ "./client/src/components/ReviewsAndRatings/MoreReviews.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/ReviewsAndRatings/MoreReviews.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\nfont-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;\\nfont-weight: bold;\\nwidth: 150px;\\nheight: 55px;\\nbackground-color: white;\\nborder-width: thin;\\nmargin-right: 10px;\\ncursor: pointer;\\ntransition: 0.3s;\\n&:hover \", \" {\\n  background: #C50000;\\n  color: white;\\n  border: none;\\n}\\n\"])), Button);\n\nfunction MoreReviews(_ref) {\n  var reviewList = _ref.reviewList,\n      slicedReviewsFunction = _ref.slicedReviewsFunction,\n      slicedReviews = _ref.slicedReviews,\n      resetCountState = _ref.resetCountState,\n      resetCount = _ref.resetCount;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  function showMoreReviews() {\n    if (resetCountState === true) {\n      setCount(6);\n      var _count = 4;\n      var slicedarray = reviewList.slice(0, _count);\n      slicedReviewsFunction(slicedarray);\n      resetCount(false);\n    } else {\n      setCount(count + 2);\n\n      var _slicedarray = reviewList.slice(0, count);\n\n      slicedReviewsFunction(_slicedarray);\n    }\n  }\n\n  if (reviewList.length !== slicedReviews.length) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {\n      onClick: showMoreReviews\n    }, \"MORE REVIEWS\"); // eslint-disable-next-line no-else-return\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreReviews);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZGNhcHN0b25lLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL01vcmVSZXZpZXdzLmpzeD81ZTk5Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsIk1vcmVSZXZpZXdzIiwicmV2aWV3TGlzdCIsInNsaWNlZFJldmlld3NGdW5jdGlvbiIsInNsaWNlZFJldmlld3MiLCJyZXNldENvdW50U3RhdGUiLCJyZXNldENvdW50IiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50Iiwic2hvd01vcmVSZXZpZXdzIiwic2xpY2VkYXJyYXkiLCJzbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDZEQUFILDRhQVVGRCxNQVZFLENBQVo7O0FBaUJBLFNBQVNFLFdBQVQsT0FFRztBQUFBLE1BRERDLFVBQ0MsUUFEREEsVUFDQztBQUFBLE1BRFdDLHFCQUNYLFFBRFdBLHFCQUNYO0FBQUEsTUFEa0NDLGFBQ2xDLFFBRGtDQSxhQUNsQztBQUFBLE1BRGlEQyxlQUNqRCxRQURpREEsZUFDakQ7QUFBQSxNQURrRUMsVUFDbEUsUUFEa0VBLFVBQ2xFOztBQUNELGtCQUEwQkMsK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCLFFBQUlMLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QkksY0FBUSxDQUFDLENBQUQsQ0FBUjtBQUNBLFVBQUlELE1BQUssR0FBRyxDQUFaO0FBQ0EsVUFBTUcsV0FBVyxHQUFHVCxVQUFVLENBQUNVLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0JKLE1BQXBCLENBQXBCO0FBQ0FMLDJCQUFxQixDQUFDUSxXQUFELENBQXJCO0FBQ0FMLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FORCxNQU1PO0FBQ0xHLGNBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjs7QUFDQSxVQUFNRyxZQUFXLEdBQUdULFVBQVUsQ0FBQ1UsS0FBWCxDQUFpQixDQUFqQixFQUFvQkosS0FBcEIsQ0FBcEI7O0FBQ0FMLDJCQUFxQixDQUFDUSxZQUFELENBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJVCxVQUFVLENBQUNXLE1BQVgsS0FBc0JULGFBQWEsQ0FBQ1MsTUFBeEMsRUFBZ0Q7QUFDOUMsd0JBQ0UsaURBQUMsTUFBRDtBQUFRLGFBQU8sRUFBRUg7QUFBakIsc0JBREYsQ0FEOEMsQ0FJOUM7QUFDRCxHQUxELE1BS087QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELGlFQUFlVCxXQUFmIiwiZmlsZSI6Ii4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Jldmlld3NBbmRSYXRpbmdzL01vcmVSZXZpZXdzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWYsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmZvbnQtd2VpZ2h0OiBib2xkO1xud2lkdGg6IDE1MHB4O1xuaGVpZ2h0OiA1NXB4O1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5ib3JkZXItd2lkdGg6IHRoaW47XG5tYXJnaW4tcmlnaHQ6IDEwcHg7XG5jdXJzb3I6IHBvaW50ZXI7XG50cmFuc2l0aW9uOiAwLjNzO1xuJjpob3ZlciAke0J1dHRvbn0ge1xuICBiYWNrZ3JvdW5kOiAjQzUwMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmA7XG5cbmZ1bmN0aW9uIE1vcmVSZXZpZXdzKHtcbiAgcmV2aWV3TGlzdCwgc2xpY2VkUmV2aWV3c0Z1bmN0aW9uLCBzbGljZWRSZXZpZXdzLCByZXNldENvdW50U3RhdGUsIHJlc2V0Q291bnQsXG59KSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNCk7XG5cbiAgZnVuY3Rpb24gc2hvd01vcmVSZXZpZXdzKCkge1xuICAgIGlmIChyZXNldENvdW50U3RhdGUgPT09IHRydWUpIHtcbiAgICAgIHNldENvdW50KDYpO1xuICAgICAgbGV0IGNvdW50ID0gNDtcbiAgICAgIGNvbnN0IHNsaWNlZGFycmF5ID0gcmV2aWV3TGlzdC5zbGljZSgwLCBjb3VudCk7XG4gICAgICBzbGljZWRSZXZpZXdzRnVuY3Rpb24oc2xpY2VkYXJyYXkpO1xuICAgICAgcmVzZXRDb3VudChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENvdW50KGNvdW50ICsgMik7XG4gICAgICBjb25zdCBzbGljZWRhcnJheSA9IHJldmlld0xpc3Quc2xpY2UoMCwgY291bnQpO1xuICAgICAgc2xpY2VkUmV2aWV3c0Z1bmN0aW9uKHNsaWNlZGFycmF5KTtcbiAgICB9XG4gIH1cbiAgaWYgKHJldmlld0xpc3QubGVuZ3RoICE9PSBzbGljZWRSZXZpZXdzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb3JlUmV2aWV3c30+TU9SRSBSRVZJRVdTPC9CdXR0b24+XG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZWxzZS1yZXR1cm5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlUmV2aWV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/ReviewsAndRatings/MoreReviews.jsx\n");

/***/ })

}]);