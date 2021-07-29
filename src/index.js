import _ from 'lodash';
//import printMe from './print.js';
import './style.css';
import {
    MDCRipple
} from '@material/ripple';
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

import {
    MDCList
} from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
import {
    MDCDrawer
} from "@material/drawer";

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
    mainContentEl.querySelector('input, button').focus();
});



import {
    MDCDataTable
} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));


// Main code

var btn = document.getElementById('mdcFab');
fabBackground.style.display = "none"
btn.onclick = function() {

    if (fabBackground.style.display == "none") {
    fabContainer2.style.display = "block";
    fabContainer3.style.display = "block";
    fabBackground.style.display = "block";
    }
    else {
    fabContainer2.style.display = "none";
    fabContainer3.style.display = "none";
    fabBackground.style.display = "none";       
    }
}


var mdcBackground = document.getElementById('fabBackground');

window.onclick = function(event) {

    if (event.target == mdcBackground) {
        console.log("ss")
        fabContainer2.style.display = "none";
        fabContainer3.style.display = "none";
        fabBackground.style.display = "none";
    }
}

