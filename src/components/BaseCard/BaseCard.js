import { 
    Component,
    renderDOM
} from '../../core.js';
import node from '../../node.js';

let {
    span,
    a,
    div,
    h3,
    combine
} = node;

import './BaseCard.less';

let cardId = 0;

export default class BaseCard extends Component {
    constructor () {
        super();
        this.state = {
            title: 'card title',
            iconText: 'hide',
            isShow: true
        }
        this.cardId = ++cardId;
    }

    /**
     * 主体内容区域显示隐藏
     */
    show = () => {
        this.setState({
            isShow: true,
            iconText: 'hide'
        })
    }

    hide = () => {
        this.setState({
            isShow: false,
            iconText: 'show'
        })
    }

    /**
     * alias api
     */
    collapse () {
        this.show();
    }

    expand () {
        this.hide();
    }

    toggle = () => {
        console.log('cardId: ', this.cardId);
        if (this.state.isShow) {
            this.hide();
        } else {
            this.show();
        }
    }

    renderHeader () {
        return div(
                    combine(
                        div(
                            h3(this.state.title),
                            {class: 'card-title'}
                        ),
                        div(a(this.state.iconText), {
                                class: 'card-extral-icon',
                                onclick: this.toggle
                            })
                        ),
                    {class: 'card-header'}
                )
    }

    renderBody () {
        return div()
    }

    render () {
        let cardBodyClass = 'card-body';
        if (this.state.isShow) {
            cardBodyClass += ' show';
        } else {
            cardBodyClass += ' hide';
        }

        return div(
                    combine(
                        this.renderHeader(),
                        div(
                            this.renderBody(),
                            {class: cardBodyClass}
                        )
                    ),
                    {class: 'widget-card-component'}
                )
    }
}