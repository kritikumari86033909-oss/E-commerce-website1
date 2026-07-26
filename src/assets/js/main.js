// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// trending



import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

new Swiper(".reviewSwiper", {

    modules: [Autoplay, Pagination],

    slidesPerView: 1,

    loop: true,

    speed: 500,

    grabCursor: true,

    autoplay: {

        delay: 1200,

        disableOnInteraction: false,

        pauseOnMouseEnter: true,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

});


