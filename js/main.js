$(function () {
    $('.wheel_icon a').on('click', function (e) {
        e.preventDefault();
        var hash = $(this.hash).offset().top;
        $('html,body').animate({ scrollTop: hash }, 3000)
    });

    $('.beer_slider').slick({
        arrows: false,
    });
})