import { 
    Component,
    renderDOM
} from './src/core.js';
import node from './src/node.js';
import Card from './src/components/Card/Card.js';

const {
    div, h1, h2,
    combine,
    component
} = node;

import './index.less';

function renderCard (index) {
    let CardComponent = new Card();
    renderDOM(document.getElementById('app'), CardComponent);
    CardComponent.init();

    CardComponent.setState({title: 'card number ' + index + ': '})
    if (index%2 == 1) {
        CardComponent.hide();
    }
}

for (let i = 0; i < 10; i++) {
    renderCard(i);
}
