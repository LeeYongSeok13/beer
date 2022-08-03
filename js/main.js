$(function () {
    $('.wheel_icon a').on('click', function (e) {
        e.preventDefault();
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 3000)
    });

    $('.beer_slider').slick({
        arrows: false,
    });

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
    })
})