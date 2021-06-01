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




$(function () {
    $("#phone").mask("+7(999) 999-9999");
});
$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});

//modal1
var modal1 = document.getElementById("modal1");
var modalBtn1 = document.getElementById("modal_btn1");
var modalClose1 = document.getElementById("modal_close1");

modalBtn1.onclick = function () {
    modal1.style.display = "block"
}
modalClose1.onclick = function () {
    modal1.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none"
    }
}

//modal2
var modal2 = document.getElementById("modal2");
var modalBtn2 = document.getElementById("modal_btn2");
var modalClose2 = document.getElementById("modal_close2");

modalBtn2.onclick = function () {
    modal2.style.display = "block"
}
modalClose2.onclick = function () {
    modal2.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none"
    }
}

//tabs
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
document.querySelector('.tabs__nav-btn').click();

