$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__down').toggleClass('active');
        $(body).toggleClass('lock');
    })
});

$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
});

$('.dropdown1').hover(function () {
    $('.dropdown-toggle', this).trigger('click');
});

$('.sing__in__button').click(function () {
    $('.sing__in__button, .search__header__form').toggleClass('show');
});

//Adaptive functions
$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu = $('.social_adaptive');
    var headerLang = $('.header__social');
    if (w < 768) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.header_up_social_lang'));
        }
    }
}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();

//////////////////

$(window).resize(function () {
    adaptive_function2();
});
function adaptive_header2(w, h) {
    var headerMenu2 = $('.lang_container');
    var headerLang2 = $('.lang_dropdown');
    if (w < 768) {
        if (!headerLang2.hasClass('done')) {
            headerLang2.addClass('done').appendTo(headerMenu2);
        }
    } else {
        if (headerLang2.hasClass('done')) {
            headerLang2.removeClass('done').prependTo($('.lang'));
        }
    }
}
function adaptive_function2() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header2(w, h);
}
adaptive_function2();

//////slider

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



