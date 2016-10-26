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
	
	var _core = __webpack_require__(1);
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _Card = __webpack_require__(16);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var div = _node2.default.div;
	var h1 = _node2.default.h1;
	var h2 = _node2.default.h2;
	var combine = _node2.default.combine;
	var component = _node2.default.component;
	
	
	var CardComponent = new _Card2.default();
	(0, _core.renderDOM)(document.getElementById('app'), CardComponent);
	CardComponent.init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.renderDOM = exports.Component = undefined;
	
	var _component = __webpack_require__(2);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _utils = __webpack_require__(6);
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var div = _node2.default.div;
	
	
	function renderDOM(el) {
	    var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.hash)();
	
	    if (!el) throw Error('el is must for renderDOM method!');
	
	    var _id = (0, _utils.randomStr)();
	    component.$wrapId = _id;
	    el.innerHTML = div(component.innerHTML, { id: _id, name: 'component' });
	}
	
	exports.Component = _component2.default;
	exports.renderDOM = renderDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var div = _node2.default.div;
	
	var Component = function () {
	    function Component() {
	        _classCallCheck(this, Component);
	
	        this.$id = (0, _utils.randomStr)();
	        this.$wrapId = null;
	
	        //渲染相关数据
	        this.state = (0, _utils.hash)();
	    }
	
	    _createClass(Component, [{
	        key: 'render',
	        value: function render() {
	            return div();
	        }
	
	        /**
	         * 插入子组件
	         */
	
	    }, {
	        key: 'insert',
	        value: function insert(component) {
	            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                rest[_key - 1] = arguments[_key];
	            }
	
	            var _id = (0, _utils.randomStr)(),
	                tmpComponent = new component(rest);
	
	            tmpComponent.$wrapId = _id;
	
	            return div(tmpComponent.innerHTML, { id: _id });
	        }
	    }, {
	        key: 'getState',
	        value: function getState() {
	            return this.state;
	        }
	    }, {
	        key: 'setState',
	        value: function setState() {
	            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _utils.hash)();
	
	            this.state = _extends({}, this.state, obj);
	
	            /**
	             * 更新当前组件
	             */
	            document.getElementById(this.$wrapId).innerHTML = this.innerHTML;
	        }
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dom = __webpack_require__(4);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _browserEvent = __webpack_require__(5);
	
	var _browserEvent2 = _interopRequireDefault(_browserEvent);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @private
	 * event helper method
	 */
	var isFirstTimeRender = true; /**
	                               * @file node.js
	                               * 节点操作
	                               */
	
	
	function _eventHelper(id, eventType, cb) {
	    // if (isFirstTimeRender) {
	    //     /**
	    //      * 首次渲染事件绑定
	    //      */
	    //     document.body.onload = function (e) {
	    //         browserEvent(document.getElementById(id)).on(eventType, function (e) {
	    //             cb(e);
	    //         })
	    //         isFirstTimeRender = false;
	    //     }
	
	    // } else {
	    //     NodeEvent.once(window.currentComponentId, function(id){
	    //         browserEvent(document.getElementById(id)).on(eventType, function (e) {
	    //                 cb(e);
	    //             }) 
	    //     })
	    // }
	
	    (0, _browserEvent2.default)(document.body).once(eventType, function (e) {
	        /**
	         * 重新渲染id会发生变化，忽略之前的id值
	         * todo: 待优化
	         */
	        if (document.getElementById(id)) {
	            var currentEl = (0, _browserEvent2.default)(document.getElementById(id));
	            currentEl.once(eventType, function (e) {
	                cb(e);
	            });
	            currentEl.trigger(eventType, false);
	        }
	    });
	}
	
	/**
	 * DOM节点生成函数
	 */
	function openTag(tagName) {
	    return function () {
	        var id = (0, _utils.randomStr)();
	        var content = (arguments.length <= 0 ? undefined : arguments[0]) || '',
	            props = (arguments.length <= 1 ? undefined : arguments[1]) || (0, _utils.hash)(),
	            propStr = '';
	
	        if (props['id'] != undefined) {
	            id = props['id'];
	        }
	
	        if (tagName == 'a') {
	            props['href'] = props['href'] || 'javascript:void(0);';
	        }
	
	        (0, _utils.each)(props, function (prop, value) {
	            if (prop.substring(0, 2) == 'on') {
	                _eventHelper(id, prop.substring(2), value);
	            } else {
	                propStr += ' ' + prop + '="' + value + '"';
	            }
	        });
	
	        var idStr = ' id="' + id + '" ';
	        return '<' + (tagName + idStr + propStr) + '>' + content + '</' + tagName + '>';
	    };
	}
	
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
	
	var h = (0, _utils.hash)();
	
	/**
	 * composite
	 * @param 节点生成函数数组
	 */
	h.combine = function combine() {
	    for (var _len = arguments.length, nodeFn = Array(_len), _key = 0; _key < _len; _key++) {
	        nodeFn[_key] = arguments[_key];
	    }
	
	    return nodeFn.map(function (node) {
	        return Array.isArray(node) ? node.join('\n') : node;
	    }).join('\n');
	};
	
	var OPEN_TAGS = ['header', 'article', 'footer', 'section', 'div', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'form', 'button', 'label', 'a', 'span'];
	
	var CLOSE_TAGS = ['img', 'input'];
	
	OPEN_TAGS.forEach(function (tag) {
	    h[tag] = openTag(tag);
	});
	
	CLOSE_TAGS.forEach(function (tag) {
	    h[tag] = closeTag(tag);
	});
	
	exports.default = h;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dom = {
	    /*
	     * dom manipulation
	     */
	    val: function val(newVal) {
	        return newVal !== undefined ? this.element.value = newVal : this.element.value;
	    },
	    clone: function clone() {
	        var el = this.element;
	        return el.cloneNode(true);
	    },
	    append: function append(html) {
	        this.element.innerHTML = this.element.innerHTML + html;
	        return this;
	    },
	    prepend: function prepend(html) {
	        this.element.innerHTML = html + this.element.innerHTML;
	        return this;
	    },
	    after: function after(html) {
	        this.element.insertAdjacentHTML('afterend', html);
	        return this;
	    },
	    before: function before(html) {
	        this.element.insertAdjacentHTML('beforebegin', html);
	        return this;
	    },
	    remove: function remove() {
	        this.element.parentNode.removeChild(this.element);
	        return this;
	    },
	    /*search*/
	    first: function first() {
	        return this;
	    },
	    last: function last() {
	        var el = this.element;
	        var length = this.elements.length;
	        el = this.elements[length];
	        return this;
	    },
	    prev: function prev() {
	        return this.element.previousElementSibling;
	    },
	    next: function next() {
	        return this.element.nextElementSibling;
	    },
	    siblings: function siblings() {
	        var el = this.element;
	        [].filter.call(el.parentNode.children, function (child) {
	            return child !== el;
	        });
	    },
	    children: function children() {
	        var el = this.element;
	        return el.children;
	    },
	    /*
	     * class processor
	     */
	    addClass: function addClass(className) {
	        var el = this.element;
	        el.className = ' ' + el.className + ' ';
	        if (el.className.indexOf(' ' + className + ' ') !== -1) {
	            return false;
	        } else {
	            el.className += className;
	        }
	        return this;
	    },
	    removeClass: function removeClass(className) {
	        var el = this.element;
	        el.className = el.className.replace(className, '');
	
	        return this;
	    },
	    toggleClass: function toggleClass(className) {
	        var el = this.element;
	        el.className = ' ' + el.className + ' ';
	        if (el.className.indexOf(' ' + className + ' ') !== -1) {
	            this.removeClass(className);
	        } else {
	            el.className += className;
	        }
	        return this;
	    },
	    hasClass: function hasClass(className) {
	        var el = this.element;
	        el.className = ' ' + el.className + ' ';
	        if (el.className.indexOf(' ' + className + ' ') !== -1) {
	            return true;
	        } else {
	            return false;
	        }
	    },
	    /*
	     * attribute
	     */
	    attr: function attr(prop, value) {
	        if (value) {
	            this.element.setAttribute(prop, value);
	        } else if (prop) {
	            return this.element.getAttribute(prop);
	        }
	        return this;
	    },
	    removeAttr: function removeAttr(prop) {
	        this.element.removeAttribute(prop);
	        return this;
	    },
	    text: function text(_text) {
	        if (_text === undefined) {
	            return this.element.innerText;
	        }
	        this.element.innerText = _text;
	
	        return this;
	    },
	    html: function html(_html) {
	        if (_html === undefined) {
	            return this.element.innerHTML;
	        }
	        this.element.innerHTML = _html;
	
	        return this;
	    },
	    replaceWith: function replaceWith(html) {
	        var el = this.element;
	        if (html) {
	            el.outerHTML = html;
	        }
	    }
	};
	
	exports.default = dom;

/***/ },
/* 5 */
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
	            var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            var el = this.element;
	            var event = document.createEvent('HTMLEvents');
	            event.initEvent(type, bool, true);
	            el.dispatchEvent(event);
	        }
	    };
	    return event;
	};

/***/ },
/* 6 */
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
	exports.randomStr = randomStr;
	exports.hash = hash;
	exports.each = each;
	
	var _component = __webpack_require__(2);
	
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
	 * 随机字符串
	 */
	function randomStr() {
	    return Math.random() + String(Number(new Date()));
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
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(1);
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	__webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var span = _node2.default.span;
	var a = _node2.default.a;
	var div = _node2.default.div;
	var h3 = _node2.default.h3;
	var combine = _node2.default.combine;
	
	var BaseCard = function (_Component) {
	    _inherits(BaseCard, _Component);
	
	    function BaseCard() {
	        _classCallCheck(this, BaseCard);
	
	        var _this = _possibleConstructorReturn(this, (BaseCard.__proto__ || Object.getPrototypeOf(BaseCard)).call(this));
	
	        _this.show = function () {
	            _this.setState({
	                isShow: true,
	                iconText: 'hide'
	            });
	        };
	
	        _this.hide = function () {
	            _this.setState({
	                isShow: false,
	                iconText: 'show'
	            });
	        };
	
	        _this.toggle = function () {
	            console.log('state', _this.state);
	            if (_this.state.isShow) {
	                _this.hide();
	            } else {
	                _this.show();
	            }
	        };
	
	        _this.state = {
	            title: 'card title',
	            iconText: 'hide',
	            isShow: true
	        };
	        return _this;
	    }
	
	    /**
	     * 主体内容区域显示隐藏
	     */
	
	
	    _createClass(BaseCard, [{
	        key: 'renderHeader',
	        value: function renderHeader() {
	            return div(combine(div(h3(this.state.title), { class: 'card-title' }), div(a(this.state.iconText), {
	                class: 'card-extral-icon',
	                onclick: this.toggle
	            })), { class: 'card-header' });
	        }
	    }, {
	        key: 'renderBody',
	        value: function renderBody() {
	            return div();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var cardBodyClass = 'card-body';
	            if (this.state.isShow) {
	                cardBodyClass += ' show';
	            } else {
	                cardBodyClass += ' hide';
	            }
	
	            return div(combine(this.renderHeader(), div(this.renderBody(), { class: cardBodyClass })), { class: 'widget-card-component' });
	        }
	    }]);
	
	    return BaseCard;
	}(_core.Component);
	
	exports.default = BaseCard;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./BaseCard.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./BaseCard.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".widget-card-component {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  width: 350px;\n}\n.widget-card-component .card-header {\n  position: relative;\n  border-bottom: 1px solid #ddd;\n}\n.widget-card-component .card-header .card-title {\n  height: 40px;\n  line-height: 40px;\n  padding: 0 15px;\n}\n.widget-card-component .card-header .card-title h3 {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.widget-card-component .card-header .card-extral-icon {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n.widget-card-component .card-header .card-extral-icon a {\n  color: #2db7f5;\n}\n.widget-card-component .card-header .card-extral-icon a:hover {\n  color: #57c5f7;\n}\n.widget-card-component .card-body {\n  transition: height 2s;\n  overflow: hidden;\n}\n.widget-card-component .card-body li {\n  list-style: none;\n  padding: 5px 15px;\n}\n.widget-card-component .show {\n  height: auto;\n}\n.widget-card-component .hide {\n  height: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "h1,\nh2,\nh3,\nh4,\nh5,\nhtml,\nbody,\ndiv,\nspan,\nimg,\nli,\nul {\n  margin: 0;\n  padding: 0;\n}\ninput,\nselect,\nform,\ntextarea {\n  outline: none;\n}\na {\n  text-decoration: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _BaseCard2 = __webpack_require__(9);
	
	var _BaseCard3 = _interopRequireDefault(_BaseCard2);
	
	var _node = __webpack_require__(3);
	
	var _node2 = _interopRequireDefault(_node);
	
	__webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var span = _node2.default.span;
	var a = _node2.default.a;
	var div = _node2.default.div;
	var h3 = _node2.default.h3;
	var li = _node2.default.li;
	var ul = _node2.default.ul;
	var combine = _node2.default.combine;
	
	var Card = function (_BaseCard) {
	    _inherits(Card, _BaseCard);
	
	    function Card() {
	        _classCallCheck(this, Card);
	
	        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));
	
	        _this.listData = ['css', 'javascript', 'c++', 'scheme'];
	        return _this;
	    }
	
	    //实例化后调用
	
	
	    _createClass(Card, [{
	        key: 'init',
	        value: function init() {
	            this.fetch();
	        }
	    }, {
	        key: 'renderBody',
	        value: function renderBody() {
	            if (this.state.isLoading) {
	                return div('加载中...', { class: 'card-loading' });
	            } else {
	                return ul(combine(this.listData.map(function (item) {
	                    return li(item);
	                })));
	            }
	        }
	
	        /**
	         * 异步请求模拟
	         */
	
	    }, {
	        key: 'fetch',
	        value: function fetch() {
	            var _this2 = this;
	
	            this.setState({
	                isLoading: true
	            });
	
	            setTimeout(function () {
	                _this2.setState({
	                    isLoading: false
	                });
	            }, 2000);
	        }
	    }]);
	
	    return Card;
	}(_BaseCard3.default);
	
	exports.default = Card;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./Card.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./Card.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".widget-card-component .card-loading {\n  font-size: 12px;\n  font-color: #ddd;\n  text-align: center;\n  padding: 20px 0;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map