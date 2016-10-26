import BaseCard from '../BaseCard/BaseCard.js';
import node from '../../node.js';

let {
    span,
    a,
    div,
    h3,
    li,
    ul,
    combine
} = node;
import './Card.less';

export default class Card extends BaseCard {
    constructor () {
        super();
    }

    //实例化后调用
    init () {
        this.fetch();
    }

    listData = ['css', 'javascript', 'c++', 'scheme'];

    renderBody () {
        if (this.state.isLoading) {
            return div('加载中...', {class: 'card-loading'});
        } else {
            return ul(
                    combine(this.listData.map((item)=>{
                        return li(item)
                    }))
                )
        }
    }

    /**
     * 异步请求模拟
     */
    fetch () {
        this.setState({
            isLoading: true
        });

        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        }, 2000);
    }
}