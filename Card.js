import BaseCard from './src/components/BaseCard/BaseCard.js';
import node from './src/node.js';

let {
    span,
    a,
    div,
    h3,
    li,
    ul,
    combine
} = node;

export default class Card extends BaseCard {
    constructor () {
        super();
    }

    listData = ['css', 'javascript', 'c++', 'scheme'];

    renderBody () {
        return ul(
                    combine(this.listData.map((item)=>{
                        return li(item)
                    }))
                )
    }
}