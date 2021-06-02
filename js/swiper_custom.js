const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: 'coverflow',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: false,
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    // },
    speed: 1000,
});

const swiper2 = new Swiper(".swiper-container2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        769: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 2,
        }
    }
});

const swiper4 = new Swiper(".swiper-container4", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        769: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        }
    }
});

const swiper3 = new Swiper('.swiper-container3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

const swiper5 = new Swiper('.swiper-container5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    effect: "flip",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});