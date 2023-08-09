import './index.html';
import 'bootstrap/dist/css/bootstrap.css';
// import 'materialize-css/dist/css/materialize.css'
// import 'materialize-css/dist/js/materialize.min'
// import 'bootstrap-4-grid/css/grid.min.css'
import "bootstrap/dist/js/bootstrap";
import './index.scss';
import './js/main'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView:1
});

const swiper2 = new Swiper('.swiper2', {
    modules: [Navigation, Pagination],
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    centeredSlides:true,
    breakpoints:{
        350:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        767:{
            slidesPerView:2,
            spaceBetween: 30,
        }
    }
});




