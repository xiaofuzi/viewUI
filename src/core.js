import Component from './component.js';
import { 
    isComponent,
    randomStr,
    hash
} from './utils.js';
import node from './node.js';

let { div } = node;

function renderDOM (el, component=hash()) {
    if (!el) throw Error('el is must for renderDOM method!');
    
    let _id = randomStr();
    component.$wrapId = _id;
    currentComponentId = _id;
    el.innerHTML = div(component.innerHTML, {id: _id, name: 'component'});
}

export {
    Component,
    renderDOM
}