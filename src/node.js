/**
 * @file node.js
 * 节点操作
 */
import dom from './dom/dom.js';
import browserEvent from './browserEvent.js';
import { hash, each,
    isObject,
    isComponent,
    randomStr
} from './utils.js';
import NodeEvent from './event.js';

/**
 * 临时解决方案
 */
window.currentComponentId = null;

/**
 * @private
 * event helper method
 */
let isFirstTimeRender = true;

function _eventHelper (id, eventType, cb) {
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

    browserEvent(document.body).once(eventType, function (e) {
        /**
         * 重新渲染id会发生变化，忽略之前的id值
         * todo: 待优化
         */
        if (document.getElementById(id)) {
            let currentEl = browserEvent(document.getElementById(id));
            currentEl.once(eventType, function(e){
                cb(e);
            });
            currentEl.trigger(eventType, false);
        }
    })
}

/**
 * DOM节点生成函数
 */
function openTag (tagName) {
    return function (...params) {
        let id = randomStr();
        let content = params[0] || '', 
            props = params[1] || hash(),
            propStr = '';

        if (props['id'] != undefined) {
            id = props['id'];
        }

        if (tagName == 'a') {
            props['href'] = props['href'] || 'javascript:void(0);';
        }

        each(props, (prop, value)=>{
            if (prop.substring(0, 2) == 'on') {
                _eventHelper(id, prop.substring(2), value);
            } else {
                propStr += ` ${prop}="${value}"`;
            }
        });

        let idStr = ` id="${id}" `;
        return `<${tagName + idStr + propStr}>${content}</${tagName}>`;
    }
}

function closeTag (tagName) {
    return function (props=hash()) {
        let propStr = '';
        each(props, (prop, value)=>{
            propStr += ` ${prop}="${value}"`;
        });  

        return `<${tagName +  propStr}/>`;
    }
}

const h = hash();

/**
 * composite
 * @param 节点生成函数数组
 */
h.combine = function combine (...nodeFn) {
    return nodeFn.map(function(node){
        return Array.isArray(node) ? node.join('\n') : node;
    }).join('\n');
}

const OPEN_TAGS = [
    'header',
    'article',
    'footer',
    'section',
    'div',
    'ul',
    'li',
    'h1', 'h2', 'h3', 'h4', 'h5',
    'form',
    'button',
    'label',
    'a',
    'span'
];

const CLOSE_TAGS = [
    'img',
    'input'
];


OPEN_TAGS.forEach(function(tag){
    h[tag] = openTag(tag)
})

CLOSE_TAGS.forEach(function(tag){
    h[tag] = closeTag(tag)
})

export default h


