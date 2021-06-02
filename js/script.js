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
    if (w < 769) {
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
    if (w < 769) {
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

//////////////////////////////

$(window).resize(function () {
    adaptive_element_function();
});
function adaptive_element(w, h) {
    var element_menu = $('.responsive_tabs');
    var element_item = $('.tabs');
    if (w < 768) {
        if (!element_item.hasClass('done')) {
            element_item.addClass('done').appendTo(element_menu);
        }
    } else {
        if (element_item.hasClass('done')) {
            element_item.removeClass('done').prependTo($('.responsive_return_tabs'));
        }
    }
}
function adaptive_element_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_element(w, h);
}
adaptive_element_function();

//////////////////////////////////

$(window).resize(function () {
    adaptive_element_function2();
});
function adaptive_element2(w, h) {
    var element_menu = $('.modals_block_responsive');
    var element_item = $('.modals_block');
    if (w < 768) {
        if (!element_item.hasClass('done')) {
            element_item.addClass('done').appendTo(element_menu);
        }
    } else {
        if (element_item.hasClass('done')) {
            element_item.removeClass('done').prependTo($('.modals_block_return'));
        }
    }
}
function adaptive_element_function2() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_element2(w, h);
}
adaptive_element_function2();

//input_mask
$(function () {
    $("#phone").mask("+7(999) 999-9999");
});
$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});

//modal1
var modal1 = document.getElementById("modal1");
var modalBtn1 = document.getElementById("modal_btn1");
var modalBtn4 = document.getElementById("footerModalBbtn");
var modalClose1 = document.getElementById("modal_close1");

modalBtn1.onclick = function () {
    modal1.style.display = "block"
}
modalBtn4.onclick = function () {
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
var modalBtn3 = document.getElementById("footerModalBbtn2");
var modalClose2 = document.getElementById("modal_close2");

modalBtn2.onclick = function () {
    modal2.style.display = "block"
}
modalBtn3.onclick = function () {
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

