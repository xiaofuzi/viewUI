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

export default class BaseCard extends Component {
    constructor () {
        super();
        this.state = {
            title: 'card title',
            iconText: 'hide',
            isShow: true
        }
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

    toggle = () => {
        console.log('state', this.state)
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