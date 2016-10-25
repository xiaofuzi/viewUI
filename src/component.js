import { div } from './node.js';
import event from './event.js';

export default class Component {
    constructor () {
        this.$el = null;
        this.$container = null;
        this.isReady = false;                   //是否已挂载成功
    }

    // set isReady (bool) {
    //     this.isReady = bool;
    // }

    get innerHTML () {
        return this.render();
    }

    renderDOM (containerEl) {
        if (!containerEl) throw Error('containerEl is must for renderDOM method!');
        let _html = this.render();
        if (_html) {
            containerEl.insertAdjacentHTML('beforeend' ,_html);
        }
        this.isReady = true;
    }

    render () {
        return div();
    }

    ready () {

    }
    /**
     * 事件相关
     */
    on () {

    }
}