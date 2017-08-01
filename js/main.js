
new WOW().init();

$(function() {

    $('body').show();

        var newTime = new Date();
        newTime = new Date(2017, 10, 1);
        $('.abi-countdown').countdown({until: newTime});

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        nav:true,
        items: 1
    });

    $('.abi-amentors button').on('click', function () {
        $('.abi-amentors').slideUp('fast');
        $('.abi-hidden').slideDown('fast');
    });

    $('.abi-mentor-block').on('click', function () {
        $(this).siblings('.abi-mb-popup').trigger('click');
    });

    $('.abi-menu-button button').on('click', function () {
        $('.abi-menu').addClass('active');
        $('body').addClass('active');
        $('html, body').animate({scrollTop: $('body').offset().top}, 1);
    });

    $('.abi-menu > button').on('click', function () {
        $('.abi-menu').removeClass('active');
    });

    $('#header-fixed').stick_in_parent({parent: 'body'});


    $('.abi-menu ul a').on('click', function(){
        $('body').removeClass('active');
        $('.abi-menu').removeClass('active');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 120}, 800);
        return false;
    });


    $('#header-fixed ul a').on('click', function(){
        var targets = $(this).attr('href');
        $('html, body').animate({scrollTop: $(targets).offset().top - 120}, 800);
        return false;
    });

});