/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(1);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _node = __webpack_require__(2);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var div = _node2.default.div;
	var h1 = _node2.default.h1;
	var h2 = _node2.default.h2;
	var combine = _node2.default.combine;
	var component = _node2.default.component;
	
	var Title = function (_Component) {
	    _inherits(Title, _Component);
	
	    function Title() {
	        _classCallCheck(this, Title);
	
	        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this));
	    }
	
	    _createClass(Title, [{
	        key: 'render',
	        value: function render() {
	            return div('the title of card!');
	        }
	    }]);
	
	    return Title;
	}(_component2.default);
	
	var Card = function (_Component2) {
	    _inherits(Card, _Component2);
	
	    function Card() {
	        _classCallCheck(this, Card);
	
	        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));
	    }
	
	    _createClass(Card, [{
	        key: 'render',
	        value: function render() {
	            return div(combine(h1('yangxiaofu'), h2('github.com'), new Title()));
	        }
	    }]);
	
	    return Card;
	}(_component2.default);
	
	var cardComponent = new Card();
	cardComponent.renderDOM(document.body);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _node = __webpack_require__(2);
	
	var _event = __webpack_require__(4);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	    function Component() {
	        _classCallCheck(this, Component);
	
	        this.$el = null;
	        this.$container = null;
	        this.isReady = false; //是否已挂载成功
	    }
	
	    // set isReady (bool) {
	    //     this.isReady = bool;
	    // }
	
	    _createClass(Component, [{
	        key: 'renderDOM',
	        value: function renderDOM(containerEl) {
	            if (!containerEl) throw Error('containerEl is must for renderDOM method!');
	            var _html = this.render();
	            if (_html) {
	                containerEl.insertAdjacentHTML('beforeend', _html);
	            }
	            this.isReady = true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return (0, _node.div)();
	        }
	    }, {
	        key: 'ready',
	        value: function ready() {}
	        /**
	         * 事件相关
	         */
	
	    }, {
	        key: 'on',
	        value: function on() {}
	    }, {
	        key: 'innerHTML',
	        get: function get() {
	            return this.render();
	        }
	    }]);
	
	    return Component;
	}();
	
	exports.default = Component;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	/**
	 * DOM节点生成函数
	 */
	function openTag(tagName) {
	    return function () {
	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }
	
	        /**
	         * 可传入Component实例对象
	         */
	        if ((0, _utils.isComponent)(params[0])) {
	            return params[0].innerHTML;
	        } else {
	            var content = params[0] || '',
	                props = params[1] || (0, _utils.hash)(),
	                propStr = '';
	
	            (0, _utils.each)(props, function (prop, value) {
	                propStr += ' ' + prop + '="' + value + '"';
	            });
	            return '<' + (tagName + propStr) + '>' + content + '</' + tagName + '>';
	        }
	    };
	} /**
	   * @file node.js
	   * 节点操作
	   */
	
	function closeTag(tagName) {
	    return function () {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _utils.hash)();
	
	        var propStr = '';
	        (0, _utils.each)(props, function (prop, value) {
	            propStr += ' ' + prop + '="' + value + '"';
	        });
	
	        return '<' + (tagName + propStr) + '/>';
	    };
	}
	
	/**
	 * composite
	 * @param { Array } nodeFn 节点生成函数数组
	 */
	function combine() {
	    var _html = '';
	
	    for (var _len2 = arguments.length, nodeFn = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        nodeFn[_key2] = arguments[_key2];
	    }
	
	    nodeFn.forEach(function (nodeStr) {
	        /**
	         * 可传入Component实例对象
	         */
	        if ((0, _utils.isComponent)(nodeStr)) {
	            _html += nodeStr.innerHTML;
	        } else {
	            _html += nodeStr;
	        }
	    });
	
	    return _html;
	}
	
	/**
	 * Component wrap method
	 */
	function component(obj) {
	    return new obj();
	}
	
	var OPEN_TAGS = ['header', 'article', 'footer', 'section', 'div', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'form', 'button', 'label', 'a'];
	
	var CLOSE_TAGS = ['img', 'input'];
	
	var h = (0, _utils.hash)();
	
	OPEN_TAGS.forEach(function (tag) {
	    h[tag] = openTag(tag);
	});
	
	CLOSE_TAGS.forEach(function (tag) {
	    h[tag] = closeTag(tag);
	});
	
	h['combine'] = combine;
	h['component'] = component;
	
	exports.default = h;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.type = type;
	exports.isObject = isObject;
	exports.isFunc = isFunc;
	exports.isArray = isArray;
	exports.isClass = isClass;
	exports.isComponent = isComponent;
	exports.hash = hash;
	exports.each = each;
	
	var _component = __webpack_require__(1);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @file utils.js
	 * 工具函数
	 */
	
	/*****************************************
	 * types
	 */
	function type(obj) {
	    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
	}
	
	function isObject(obj) {
	    if (type(obj) === 'object') {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function isFunc(fn) {
	    if (type(fn) === 'function') {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	function isArray(arr) {
	    return Array.isArray(arr);
	}
	
	/**
	 * is an instance of the class
	 * @param { Object } obj 
	 * @param { Class } className the name of custom class 
	 */
	function isClass(obj, className) {
	    if (!isObject(obj)) {
	        return false;
	    }
	
	    console.log('obj', obj);
	    if (obj instanceof className) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	/**
	 * 是否是 component 组件实例
	 */
	function isComponent(obj) {
	    return isClass(obj, _component2.default);
	}
	
	/**
	 * 生成空对象
	 */
	function hash() {
	    return Object.create(null);
	}
	
	/**
	 * 对象遍历
	 * @param { Object } obj 待遍历的对象
	 * @param { Function } cb 对象遍历回调函数
	 */
	function each(obj) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    Object.keys(obj).forEach(function (key) {
	        cb(key, obj[key]);
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($el) {
	    var event = {
	        element: $el,
	        eventHandler: {
	            events: {},
	            bindEvent: function bindEvent(event, callback, targetElement) {
	                //bind event listener to DOM element
	                //在冒泡阶段触发
	                targetElement.addEventListener(event, callback, false);
	
	                if (this.events[event]) {
	                    var counter = this.events[event].length;
	                    this.events[event].push({
	                        eventId: counter,
	                        event: callback,
	                        target: targetElement
	                    });
	                } else {
	                    this.events[event] = [];
	                    this.events[event].push({
	                        eventId: 0,
	                        event: callback,
	                        target: targetElement
	                    });
	                }
	            },
	            findEvent: function findEvent(event) {
	                if (this.events[event]) {
	                    return this.events[event][0];
	                } else {
	                    return false;
	                }
	            },
	
	            /*
	             * return all listen events
	             */
	            all: function all(event) {
	                if (this.events[event]) {
	                    return this.events[event];
	                } else {
	                    return false;
	                }
	            },
	            unbindEvent: function unbindEvent(event, targetElement) {
	                var foundEvent = this.findEvent(event);
	                if (foundEvent) {
	                    targetElement.removeEventListener(event, foundEvent.event, false);
	
	                    //update events array
	                    this.events = this.events[event].filter(function (e) {
	                        return e.counter !== event.counter;
	                    }, event);
	                }
	            },
	            remove: function remove(event, targetElement) {
	                var self = this;
	                var events = this.all(event);
	                if (events) {
	                    events.forEach(function (e) {
	                        self.unbindEvent(e, targetElement);
	                    });
	                    self.events[event] = [];
	                }
	            },
	
	            /*
	             * 检查该事件类型是否被绑定
	             */
	            isBinding: function isBinding(event) {
	                if (this.findEvent(event)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            }
	        },
	        on: function on(event, callback) {
	            this.eventHandler.bindEvent(event, callback, this.element);
	        },
	
	        /*
	         * bind once
	         */
	        once: function once(event, callback) {
	            this.eventHandler.remove(event);
	            this.on(event, callback);
	        },
	        off: function off(event) {
	            this.eventHandler.unbindEvent(event, this.element);
	        },
	        clear: function clear(event) {
	            this.eventHandler.remove(event, this.element);
	        },
	
	        //浏览器事件，默认冒泡
	        trigger: function trigger(type) {
	            var el = this.element;
	            var event = document.createEvent('HTMLEvents');
	            event.initEvent(type, true, true);
	            el.dispatchEvent(event);
	        }
	    };
	    return event;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map