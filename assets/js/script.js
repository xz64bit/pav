$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.header__menu').click(function() {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});





$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= 100 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
});