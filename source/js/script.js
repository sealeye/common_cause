'use strict';

var header = document.querySelector('.header');
header.classList.remove('site-header--no-js');

const toggle = header.querySelector('.header__burger');
const nav = header.querySelector('.header__nav');
// const userInterface = header.querySelector('.site-header__user-interface');

const toggleMenu = () => {
    toggle.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--closed');
    // userInterface.classList.toggle('site-header__user-interface--closed');
}
toggleMenu();

toggle.onclick = toggleMenu;
