/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _StaffItemPanel = __webpack_require__(2);\n\nvar _StaffItemPanel2 = _interopRequireDefault(_StaffItemPanel);\n\nvar _STAFF = __webpack_require__(4);\n\nvar _STAFF2 = _interopRequireDefault(_STAFF);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            staff: new _STAFF2.default(),\n            staffDetail: null\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'hello world!'\n                ),\n                _react2.default.createElement(_StaffItemPanel2.default, {\n                    items: this.state.staff.allStaff\n                })\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n_react2.default.render(_react2.default.createElement(App, null), document.getElementById(\"app\"));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlU3lzdGVtLmpzPzRlZjYiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJzdGFmZiIsIlNUQUZGIiwic3RhZmZEZXRhaWwiLCJhbGxTdGFmZiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ01BLEc7OztBQUVGLG1CQUFhO0FBQUE7O0FBQUE7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ0pDLG1CQUFNLElBQUlDLGVBQUosRUFERjtBQUVKQyx5QkFBWTtBQUZSLFNBQWI7QUFGZTtBQU1mOzs7O2lDQUVZO0FBQ04sbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUtJLDhDQUFDLHdCQUFEO0FBQ0ksMkJBQVMsS0FBS0gsS0FBTCxDQUFXQyxLQUFYLENBQWlCRztBQUQ5QjtBQUxKLGFBREo7QUFZSDs7OztFQXZCYUMsZ0JBQU1DLFM7O0FBMEJ4QkQsZ0JBQU1FLE1BQU4sQ0FBYyw4QkFBQyxHQUFELE9BQWQsRUFBc0JDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBdEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdGFmZkl0ZW1QYW5lbCBmcm9tICcuL1N0YWZmSXRlbVBhbmVsLmpzJztcbmltcG9ydCBTVEFGRiBmcm9tICcuL1NUQUZGLmpzJztcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXHQgICAgc3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICBzdGFmZjpuZXcgU1RBRkYsXG4gICAgICAgICAgIHN0YWZmRGV0YWlsOm51bGxcblx0XHR9O1xuXHR9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICBoZWxsbyB3b3JsZCFcbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTdGFmZkl0ZW1QYW5lbFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHt0aGlzLnN0YXRlLnN0YWZmLmFsbFN0YWZmfVxuICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICAgIH1cbn1cblxuUmVhY3QucmVuZGVyICg8QXBwIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWFuYWdlU3lzdGVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("module.exports = React;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiPzlkZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _StaffItem = __webpack_require__(3);\n\nvar _StaffItem2 = _interopRequireDefault(_StaffItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StaffItemPanel = function (_React$Component) {\n    _inherits(StaffItemPanel, _React$Component);\n\n    function StaffItemPanel() {\n        _classCallCheck(this, StaffItemPanel);\n\n        return _possibleConstructorReturn(this, (StaffItemPanel.__proto__ || Object.getPrototypeOf(StaffItemPanel)).apply(this, arguments));\n    }\n\n    _createClass(StaffItemPanel, [{\n        key: 'render',\n        value: function render() {\n            var items = [];\n\n            if (this.props.items.length == 0) {\n                items.push(_react2.default.createElement(\n                    'tr',\n                    { colSpan: '5', className: 'tempEmpty' },\n                    _react2.default.createElement(\n                        'th',\n                        null,\n                        '\\u6682\\u65E0\\u7528\\u6237'\n                    )\n                ));\n            } else {\n                this.props.items.forEach(function (item) {\n                    items.push(_react2.default.createElement(_StaffItem2.default, { key: item.key,\n                        item: item\n                        //removeStaffItem = {this.props.removeStaffItem}\n                        //detailStaffItem = {this.props.detailStaffItem}\n                    }));\n                });\n            }\n\n            return _react2.default.createElement(\n                'table',\n                { className: 'itemPanel' },\n                _react2.default.createElement(\n                    'thead',\n                    null,\n                    _react2.default.createElement(\n                        'th',\n                        { className: 'itemTd' },\n                        ' \\u59D3\\u540D'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        { className: 'itemTd' },\n                        ' \\u5E74\\u9F84'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        { className: 'itemTd' },\n                        ' \\u8EAB\\u4EFD'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        { className: 'itemTd' },\n                        ' \\u6027\\u522B'\n                    ),\n                    _react2.default.createElement(\n                        'th',\n                        { className: 'itemTd' },\n                        ' \\u64CD\\u4F5C'\n                    )\n                ),\n                _react2.default.createElement(\n                    'tbody',\n                    null,\n                    items\n                )\n            );\n        }\n    }]);\n\n    return StaffItemPanel;\n}(_react2.default.Component);\n\nexports.default = StaffItemPanel;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RhZmZJdGVtUGFuZWwuanM/YjM2NCJdLCJuYW1lcyI6WyJTdGFmZkl0ZW1QYW5lbCIsIml0ZW1zIiwicHJvcHMiLCJsZW5ndGgiLCJwdXNoIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGM7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ0wsZ0JBQUlDLFFBQVEsRUFBWjs7QUFFQSxnQkFBRyxLQUFLQyxLQUFMLENBQVdELEtBQVgsQ0FBaUJFLE1BQWpCLElBQTJCLENBQTlCLEVBQWlDO0FBQzdCRixzQkFBTUcsSUFBTixDQUFXO0FBQUE7QUFBQSxzQkFBSSxTQUFVLEdBQWQsRUFBa0IsV0FBWSxXQUE5QjtBQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFDLGlCQUFYO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtGLEtBQUwsQ0FBV0QsS0FBWCxDQUFpQkksT0FBakIsQ0FBeUIsZ0JBQVE7QUFDekJKLDBCQUFNRyxJQUFOLENBQVcsOEJBQUMsbUJBQUQsSUFBVyxLQUFPRSxLQUFLQyxHQUF2QjtBQUNYLDhCQUFRRDtBQUNSO0FBQ0E7QUFIVyxzQkFBWDtBQUtQLGlCQU5EO0FBT0g7O0FBRUQsbUJBQ0k7QUFBQTtBQUFBLGtCQUFPLFdBQVksV0FBbkI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQUksV0FBWSxRQUFoQjtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUksV0FBWSxRQUFoQjtBQUFBO0FBQUEscUJBRko7QUFHSTtBQUFBO0FBQUEsMEJBQUksV0FBWSxRQUFoQjtBQUFBO0FBQUEscUJBSEo7QUFJSTtBQUFBO0FBQUEsMEJBQUksV0FBWSxRQUFoQjtBQUFBO0FBQUEscUJBSko7QUFLSTtBQUFBO0FBQUEsMEJBQUksV0FBWSxRQUFoQjtBQUFBO0FBQUE7QUFMSixpQkFESjtBQVFJO0FBQUE7QUFBQTtBQUFRTDtBQUFSO0FBUkosYUFESjtBQVlIOzs7O0VBNUJ1Q08sZ0JBQU1DLFM7O2tCQUE3QlQsYyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdGFmZkl0ZW0gZnJvbSAnLi9TdGFmZkl0ZW0uanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZkl0ZW1QYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goPHRyIGNvbFNwYW4gPSAnNScgY2xhc3NOYW1lID0gXCJ0ZW1wRW1wdHlcIj48dGg+5pqC5peg55So5oi3PC90aD48L3RyPilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCg8U3RhZmZJdGVtIGtleSA9IHtpdGVtLmtleX0gXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX0gXG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlU3RhZmZJdGVtID0ge3RoaXMucHJvcHMucmVtb3ZlU3RhZmZJdGVtfVxuICAgICAgICAgICAgICAgICAgICAvL2RldGFpbFN0YWZmSXRlbSA9IHt0aGlzLnByb3BzLmRldGFpbFN0YWZmSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgLz4gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWUgPSAnaXRlbVBhbmVsJz4gXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lID0gJ2l0ZW1UZCc+IOWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWUgPSAnaXRlbVRkJz4g5bm06b6EPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZSA9ICdpdGVtVGQnPiDouqvku708L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lID0gJ2l0ZW1UZCc+IOaAp+WIqzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWUgPSAnaXRlbVRkJz4g5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT57aXRlbXN9PC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdGFmZkl0ZW1QYW5lbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StaffItem = function (_React$Component) {\n\t_inherits(StaffItem, _React$Component);\n\n\tfunction StaffItem() {\n\t\t_classCallCheck(this, StaffItem);\n\n\t\treturn _possibleConstructorReturn(this, (StaffItem.__proto__ || Object.getPrototypeOf(StaffItem)).apply(this, arguments));\n\t}\n\n\t_createClass(StaffItem, [{\n\t\tkey: 'render',\n\n\n\t\t// //delete\n\t\t// handlerDelete(evt){\n\t\t//     this.props.removeStaffItem(this.props.item.key);\n\t\t// }\n\n\t\t// //detail\n\t\t// handlerDetail(evt){\n\t\t//     this.props.detailStaffItem(this.props.item.key);\n\t\t// }\n\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'tr',\n\t\t\t\t{\n\t\t\t\t\tstyle: { 'cursor': 'pointer' }\n\t\t\t\t},\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\t{ className: 'itemTd' },\n\t\t\t\t\tthis.props.item.info.name\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\t{ className: 'itemTd' },\n\t\t\t\t\tthis.props.item.info.age\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\t{ className: 'itemTd' },\n\t\t\t\t\tthis.props.item.info.id\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'td',\n\t\t\t\t\t{ className: 'itemTd' },\n\t\t\t\t\tthis.props.item.info.sex\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement('td', { className: 'itemTd' })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn StaffItem;\n}(_react2.default.Component);\n\nexports.default = StaffItem;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RhZmZJdGVtLmpzPzJhODUiXSwibmFtZXMiOlsiU3RhZmZJdGVtIiwicHJvcHMiLCJpdGVtIiwiaW5mbyIsIm5hbWUiLCJhZ2UiLCJpZCIsInNleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OzJCQUVRO0FBQ1AsVUFDRztBQUFBO0FBQUE7QUFDRCxZQUFPLEVBQUMsVUFBVSxTQUFYO0FBRE47QUFHRDtBQUFBO0FBQUEsT0FBSSxXQUFVLFFBQWQ7QUFBd0IsVUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxJQUFoQixDQUFxQkM7QUFBN0MsS0FIQztBQUlEO0FBQUE7QUFBQSxPQUFJLFdBQVUsUUFBZDtBQUF3QixVQUFLSCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCRTtBQUE3QyxLQUpDO0FBS0Q7QUFBQTtBQUFBLE9BQUksV0FBVSxRQUFkO0FBQXdCLFVBQUtKLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsSUFBaEIsQ0FBcUJHO0FBQTdDLEtBTEM7QUFNRDtBQUFBO0FBQUEsT0FBSSxXQUFVLFFBQWQ7QUFBd0IsVUFBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxJQUFoQixDQUFxQkk7QUFBN0MsS0FOQztBQU9ELDBDQUFJLFdBQVUsUUFBZDtBQVBDLElBREg7QUFlQTs7OztFQTVCcUNDLGdCQUFNQyxTOztrQkFBeEJULFMiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFmZkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdFxuXHQvLyAvL2RlbGV0ZVxuXHQvLyBoYW5kbGVyRGVsZXRlKGV2dCl7XG5cdC8vICAgICB0aGlzLnByb3BzLnJlbW92ZVN0YWZmSXRlbSh0aGlzLnByb3BzLml0ZW0ua2V5KTtcblx0Ly8gfVxuXHRcblx0Ly8gLy9kZXRhaWxcblx0Ly8gaGFuZGxlckRldGFpbChldnQpe1xuXHQvLyAgICAgdGhpcy5wcm9wcy5kZXRhaWxTdGFmZkl0ZW0odGhpcy5wcm9wcy5pdGVtLmtleSk7XG5cdC8vIH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQgIDx0clxuXHRcdFx0XHRzdHlsZT17eydjdXJzb3InOiAncG9pbnRlcid9fVxuXHRcdFx0ICA+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2l0ZW1UZCc+e3RoaXMucHJvcHMuaXRlbS5pbmZvLm5hbWV9PC90ZD5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT0naXRlbVRkJz57dGhpcy5wcm9wcy5pdGVtLmluZm8uYWdlfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2l0ZW1UZCc+e3RoaXMucHJvcHMuaXRlbS5pbmZvLmlkfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2l0ZW1UZCc+e3RoaXMucHJvcHMuaXRlbS5pbmZvLnNleH08L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdpdGVtVGQnPlxuXHRcdFx0XHQgICAgey8qIDxhIGNsYXNzTmFtZT1cIml0ZW1CdG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZXJEZWxldGUuYmluZCh0aGlzKX0+5Yig6ZmkPC9hPlxuXHRcdFx0XHQgICAgPGEgY2xhc3NOYW1lPVwiaXRlbUJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlckRldGFpbC5iaW5kKHRoaXMpfT7or6bmg4U8L2E+XG5cdFx0XHRcdCAqL31cbiAgICAgICAgICAgICAgICA8L3RkPlxuXHRcdFx0ICA8L3RyPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RhZmZJdGVtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar staffItem = function staffItem(item) {\n    _classCallCheck(this, staffItem);\n\n    this.info = {};\n    this.info.name = item.name;\n    this.info.age = item.age || 0;\n    this.info.sex = item.sex;\n    this.info.id = item.id;\n    this.info.descrip = item.descrip || '';\n    this.key = ++staffItem.key;\n};\n\nstaffItem.key = 0;\n\nvar STAFF = function () {\n    function STAFF() {\n        _classCallCheck(this, STAFF);\n\n        this.staff = [];\n        this.allStaff = [];\n        this._initAllStaff();\n        //console.log(\"STAFF.js,constructor(),after this._initAllStaff():\")\n        //console.log(this.allStaff);\n    }\n\n    _createClass(STAFF, [{\n        key: '_initAllStaff',\n        value: function _initAllStaff() {\n            var num = STAFF.rawData.length;\n            for (var i = 0; i < num; i++) {\n                this.allStaff.push(new staffItem(STAFF.rawData[i]));\n            }\n        }\n    }]);\n\n    return STAFF;\n}();\n\nexports.default = STAFF;\n\n\nSTAFF.rawData = [{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' }, { descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' }, { descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' }, { descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' }, { descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' }];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU1RBRkYuanM/NjhiNCJdLCJuYW1lcyI6WyJzdGFmZkl0ZW0iLCJpdGVtIiwiaW5mbyIsIm5hbWUiLCJhZ2UiLCJzZXgiLCJpZCIsImRlc2NyaXAiLCJrZXkiLCJTVEFGRiIsInN0YWZmIiwiYWxsU3RhZmYiLCJfaW5pdEFsbFN0YWZmIiwibnVtIiwicmF3RGF0YSIsImxlbmd0aCIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFMsR0FDRixtQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS0EsSUFBTCxDQUFVQyxJQUFWLEdBQWlCRixLQUFLRSxJQUF0QjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsR0FBVixHQUFnQkgsS0FBS0csR0FBTCxJQUFZLENBQTVCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVRyxHQUFWLEdBQWdCSixLQUFLSSxHQUFyQjtBQUNBLFNBQUtILElBQUwsQ0FBVUksRUFBVixHQUFlTCxLQUFLSyxFQUFwQjtBQUNBLFNBQUtKLElBQUwsQ0FBVUssT0FBVixHQUFvQk4sS0FBS00sT0FBTCxJQUFnQixFQUFwQztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFFUixVQUFVUSxHQUF2QjtBQUNILEM7O0FBR0xSLFVBQVVRLEdBQVYsR0FBZ0IsQ0FBaEI7O0lBRXFCQyxLO0FBQ2pCLHFCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS0MsYUFBTDtBQUNBO0FBQ0E7QUFFSDs7Ozt3Q0FFZTtBQUNaLGdCQUFNQyxNQUFNSixNQUFNSyxPQUFOLENBQWNDLE1BQTFCO0FBQ0EsaUJBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWNBLElBQUVILEdBQWhCLEVBQW9CRyxHQUFwQixFQUF5QjtBQUNyQixxQkFBS0wsUUFBTCxDQUFjTSxJQUFkLENBQW1CLElBQUlqQixTQUFKLENBQWNTLE1BQU1LLE9BQU4sQ0FBY0UsQ0FBZCxDQUFkLENBQW5CO0FBQ0g7QUFDSjs7Ozs7O2tCQWZnQlAsSzs7O0FBcUJyQkEsTUFBTUssT0FBTixHQUNJLENBQUMsRUFBRVAsU0FBUSxhQUFWLEVBQXlCRixLQUFLLEdBQTlCLEVBQW1DRCxLQUFLLEVBQXhDLEVBQTRDRCxNQUFNLElBQWxELEVBQXdERyxJQUFJLElBQTVELEVBQUQsRUFDQyxFQUFFQyxTQUFRLGFBQVYsRUFBeUJGLEtBQUssR0FBOUIsRUFBbUNELEtBQUssRUFBeEMsRUFBNENELE1BQU0sSUFBbEQsRUFBd0RHLElBQUksSUFBNUQsRUFERCxFQUVGLEVBQUVDLFNBQVEsYUFBVixFQUF5QkYsS0FBSyxHQUE5QixFQUFtQ0QsS0FBSyxFQUF4QyxFQUE0Q0QsTUFBTSxLQUFsRCxFQUF5REcsSUFBSSxJQUE3RCxFQUZFLEVBR0YsRUFBRUMsU0FBUSxhQUFWLEVBQXlCRixLQUFLLEdBQTlCLEVBQW1DRCxLQUFLLEVBQXhDLEVBQTRDRCxNQUFNLEtBQWxELEVBQXlERyxJQUFJLElBQTdELEVBSEUsRUFJRixFQUFFQyxTQUFRLGFBQVYsRUFBeUJGLEtBQUssR0FBOUIsRUFBbUNELEtBQUssRUFBeEMsRUFBNENELE1BQU0sS0FBbEQsRUFBeURHLElBQUksSUFBN0QsRUFKRSxFQUtGLEVBQUVDLFNBQVEsYUFBVixFQUF5QkYsS0FBSyxHQUE5QixFQUFtQ0QsS0FBSyxFQUF4QyxFQUE0Q0QsTUFBTSxLQUFsRCxFQUF5REcsSUFBSSxJQUE3RCxFQUxFLEVBTUYsRUFBRUMsU0FBUSxhQUFWLEVBQXlCRixLQUFLLEdBQTlCLEVBQW1DRCxLQUFLLEVBQXhDLEVBQTRDRCxNQUFNLElBQWxELEVBQXdERyxJQUFJLElBQTVELEVBTkUsRUFPQyxFQUFFQyxTQUFRLGFBQVYsRUFBeUJGLEtBQUssR0FBOUIsRUFBbUNELEtBQUssRUFBeEMsRUFBNENELE1BQU0sSUFBbEQsRUFBd0RHLElBQUksSUFBNUQsRUFQRCxFQVFGLEVBQUVDLFNBQVEsYUFBVixFQUF5QkYsS0FBSyxHQUE5QixFQUFtQ0QsS0FBSyxFQUF4QyxFQUE0Q0QsTUFBTSxJQUFsRCxFQUF3REcsSUFBSSxJQUE1RCxFQVJFLEVBU0YsRUFBRUMsU0FBUSxhQUFWLEVBQXlCRixLQUFLLEdBQTlCLEVBQW1DRCxLQUFLLEVBQXhDLEVBQTRDRCxNQUFNLElBQWxELEVBQXdERyxJQUFJLElBQTVELEVBVEUsRUFVRixFQUFFQyxTQUFRLGFBQVYsRUFBeUJGLEtBQUssR0FBOUIsRUFBbUNELEtBQUssRUFBeEMsRUFBNENELE1BQU0sSUFBbEQsRUFBd0RHLElBQUksSUFBNUQsRUFWRSxDQURKIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBzdGFmZkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pbmZvID0ge307XG4gICAgICAgIHRoaXMuaW5mby5uYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICB0aGlzLmluZm8uYWdlID0gaXRlbS5hZ2UgfHwgMDtcbiAgICAgICAgdGhpcy5pbmZvLnNleCA9IGl0ZW0uc2V4O1xuICAgICAgICB0aGlzLmluZm8uaWQgPSBpdGVtLmlkO1xuICAgICAgICB0aGlzLmluZm8uZGVzY3JpcCA9IGl0ZW0uZGVzY3JpcCB8fCAnJztcbiAgICAgICAgdGhpcy5rZXkgPSArK3N0YWZmSXRlbS5rZXk7ICAgICAgICBcbiAgICB9XG59XG5cbnN0YWZmSXRlbS5rZXkgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVEFGRiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhZmYgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxTdGFmZiA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0QWxsU3RhZmYoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNUQUZGLmpzLGNvbnN0cnVjdG9yKCksYWZ0ZXIgdGhpcy5faW5pdEFsbFN0YWZmKCk6XCIpXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5hbGxTdGFmZik7XG4gICAgICAgIFxuICAgIH1cblxuICAgIF9pbml0QWxsU3RhZmYoKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IFNUQUZGLnJhd0RhdGEubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8bnVtO2krKykge1xuICAgICAgICAgICAgdGhpcy5hbGxTdGFmZi5wdXNoKG5ldyBzdGFmZkl0ZW0oU1RBRkYucmF3RGF0YVtpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG59XG5cblxuU1RBRkYucmF3RGF0YSA9IFxuICAgIFt7IGRlc2NyaXA6J+aIkeaYr+S4gOWMueadpeiHqui/nOaWueeahOeLvOOAgicsIHNleDogJ+eUtycsIGFnZTogMjAsIG5hbWU6ICflvKDkuIknLCBpZDogJ+S4u+S7uyd9LFxuICAgICB7IGRlc2NyaXA6J+aIkeaYr+S4gOWMueadpeiHqui/nOaWueeahOeLvOOAgicsIHNleDogJ+WlsycsIGFnZTogMjEsIG5hbWU6ICfotbXpnZknLCBpZDogJ+WtpueUnyd9LFxuXHQgeyBkZXNjcmlwOifmiJHmmK/kuIDljLnmnaXoh6rov5zmlrnnmoTni7zjgIInLCBzZXg6ICflpbMnLCBhZ2U6IDIyLCBuYW1lOiAn546L5LqM6bq7JywgaWQ6ICflrabnlJ8nfSxcblx0IHsgZGVzY3JpcDon5oiR5piv5LiA5Yy55p2l6Ieq6L+c5pa555qE54u844CCJywgc2V4OiAn5aWzJywgYWdlOiAyNCwgbmFtZTogJ+adjuaZk+WptycsIGlkOiAn5a6e5LmgJ30sXG5cdCB7IGRlc2NyaXA6J+aIkeaYr+S4gOWMueadpeiHqui/nOaWueeahOeLvOOAgicsIHNleDogJ+eUtycsIGFnZTogMjMsIG5hbWU6ICflvKDmmKXnlLAnLCBpZDogJ+WunuS5oCd9LFxuXHQgeyBkZXNjcmlwOifmiJHmmK/kuIDljLnmnaXoh6rov5zmlrnnmoTni7zjgIInLCBzZXg6ICfnlLcnLCBhZ2U6IDIyLCBuYW1lOiAn5YiY5bu65Zu9JywgaWQ6ICflrabnlJ8nfSxcblx0IHsgZGVzY3JpcDon5oiR5piv5LiA5Yy55p2l6Ieq6L+c5pa555qE54u844CCJywgc2V4OiAn55S3JywgYWdlOiAyNCwgbmFtZTogJ+W8oOWFqycsIGlkOiAn5Li75Lu7J30sXG4gICAgIHsgZGVzY3JpcDon5oiR5piv5LiA5Yy55p2l6Ieq6L+c5pa555qE54uX44CCJywgc2V4OiAn55S3JywgYWdlOiAzNSwgbmFtZTogJ+adjuWbmycsIGlkOiAn6ICB5biIJ30sXG5cdCB7IGRlc2NyaXA6J+aIkeaYr+S4gOWMueadpeiHqui/nOaWueeahOeMquOAgicsIHNleDogJ+eUtycsIGFnZTogNDIsIG5hbWU6ICfnjovkupQnLCBpZDogJ+WtpueUnyd9LFxuXHQgeyBkZXNjcmlwOifmiJHmmK/kuIDljLnmnaXoh6rov5zmlrnnmoTniZvjgIInLCBzZXg6ICfnlLcnLCBhZ2U6IDUwLCBuYW1lOiAn6LW15YWtJywgaWQ6ICflrp7kuaAnfSxcblx0IHsgZGVzY3JpcDon5oiR5piv5LiA5Yy55p2l6Ieq6L+c5pa555qE6ams44CCJywgc2V4OiAn55S3JywgYWdlOiA2MCwgbmFtZTogJ+WtmeS4gycsIGlkOiAn5a6e5LmgJ31dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TVEFGRi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);