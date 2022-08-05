$(function () {
    $('.wheel_icon a').on('click', function (e) {
        e.preventDefault();
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 3000)
    });

    $('.product_slider').slick({
        arrows: false,
        autoplay: true,
    });

    $('.beer_slider').on('init afterChange', function () {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.beer_slider').slick({
        arrows: false,
        autoplay: true,
    });

    $(window).on('scroll', function () {
        var box = $(window).scrollTop();
        if (box > 300) {
            $('.event .box').fadeIn(300);
        } else {
            $('.event .box').fadeOut(1000);
        }
    })

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300);
        } else {
            $('.toTop').fadeOut(1000);
        }
    });

})