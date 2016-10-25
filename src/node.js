/**
 * @file node.js
 * 节点操作
 */

import { hash, each,
    isObject,
    isComponent
} from './utils.js';

/**
 * DOM节点生成函数
 */
function openTag (tagName) {
    return function (...params) {
        /**
         * 可传入Component实例对象
         */
        if (isComponent(params[0])) {
            return params[0].innerHTML;
        } else {
            let content = params[0] || '', 
                props = params[1] || hash(),
                propStr = '';

            each(props, (prop, value)=>{
                propStr += ` ${prop}="${value}"`;
            });
            return `<${tagName + propStr}>${content}</${tagName}>`
        }
    }
}

function closeTag (tagName) {
    return function (props=hash()) {
        let propStr = '';
        each(props, (prop, value)=>{
            propStr += ` ${prop}="${value}"`;
        });  

        return `<${tagName + propStr}/>`;
    }
}

/**
 * composite
 * @param { Array } nodeFn 节点生成函数数组
 */
function combine (...nodeFn) {
    let _html = '';
    nodeFn.forEach(function(nodeStr){
        /**
         * 可传入Component实例对象
         */
        if (isComponent(nodeStr)) {
            _html += nodeStr.innerHTML;
        } else {
            _html += nodeStr;
        }
    })

    return _html;
}

/**
 * Component wrap method
 */
function component (obj) {
    return new obj; 
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
    'a'
];

const CLOSE_TAGS = [
    'img',
    'input'
];

const h = hash();

OPEN_TAGS.forEach(function(tag){
    h[tag] = openTag(tag)
})

CLOSE_TAGS.forEach(function(tag){
    h[tag] = closeTag(tag)
})

h['combine'] = combine;
h['component'] = component;



export default h


