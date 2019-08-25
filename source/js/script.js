'use strict';

var header = document.querySelector('.header');
header.classList.remove('header--no-js');

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

var titleList = document.querySelectorAll(".tab__button");

titleList.forEach(function (e, i) {
    e.addEventListener('click', function () {
        document.querySelector('.tab__body--' + e.dataset.number).classList.toggle('tab__body--opened');
        e.classList.toggle('tab__button--opened');
    });
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 500
})

//смягчение скролла
$('.header__button').click(function (e) {
    e.preventDefault;
    $('html, body').animate({
        scrollTop: $("#payment").offset().top - 50 + 'px'
    }, 1000);
});
