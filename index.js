import { 
    Component,
    renderDOM
} from './src/core.js';
import node from './src/node.js';
import Card from './Card.js';

const {
    div, h1, h2,
    combine,
    component
} = node;

import './index.less';

renderDOM(document.getElementById('app'), new Card());
