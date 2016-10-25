/**
 * @file utils.js
 * 工具函数
 */

/*****************************************
 * types
 */
export function type (obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}

export function isObject (obj) {
    if (type(obj) === 'object') {
        return true;
    } else {
        return false;
    }
}

export function isFunc (fn) {
    if (type(fn) === 'function') {
        return true;
    } else {
        return false;
    }
}

export function isArray (arr) {
    return Array.isArray(arr);
}

/**
 * is an instance of the class
 * @param { Object } obj 
 * @param { Class } className the name of custom class 
 */
export function isClass (obj, className) {
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
import Component from './component.js';
export function isComponent (obj) {
    return isClass(obj, Component);
}


/**
 * 生成空对象
 */
export function hash () {
    return Object.create(null);
}

/**
 * 对象遍历
 * @param { Object } obj 待遍历的对象
 * @param { Function } cb 对象遍历回调函数
 */
export function each (obj, cb=()=>{}) {
    Object.keys(obj).forEach(function(key){
        cb(key, obj[key]);
    })
}

