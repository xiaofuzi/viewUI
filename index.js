import Component from './src/component.js';
import node from './src/node.js';

const {
    div, h1, h2,
    combine,
    component
} = node;

class Title extends Component {
    constructor () {
        super();
    }

    render () {
        return div(
                'the title of card!'
            )
    }
}
class Card extends Component {
    constructor () {
        super();
    }

    render () {
        return div(
                combine(
                    h1('yangxiaofu'),
                    h2('github.com'),
                    new Title()
                    )
            );
    }
}

let cardComponent = new Card();
cardComponent.renderDOM(document.body);