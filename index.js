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

let CardComponent = new Card();
renderDOM(document.getElementById('app'), CardComponent);
CardComponent.init();
