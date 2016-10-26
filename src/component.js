import node from './node.js';
import { 
    hash,
    isComponent, 
    randomStr 
} from './utils.js';
let { div } = node;

export default class Component {
    constructor () {
        this.$id = randomStr();
        this.$wrapId = null;

        //渲染相关数据
        this.state = hash();
    }

    get innerHTML () {
        return this.render();
    }

    render () {
        return div();
    }

    /**
     * 插入子组件
     */
    insert (component, ...rest) {
        let _id = randomStr(),
            tmpComponent = new component(rest);

        tmpComponent.$wrapId = _id;

        return div(tmpComponent.innerHTML, {id: _id});
    }

    getState () {
        return this.state;
    }

    setState (obj=hash()) {
        this.state = { 
            ...this.state,
            ...obj 
        }

        /**
         * 更新当前组件
         */
        document.getElementById(this.$wrapId).innerHTML = this.innerHTML;
    }
}