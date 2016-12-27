function scrollWindowNavigationFixedLarge() {
    var countScroll     = $(window).scrollTop(),
        navigationBlock = $('.header__top');

    if (countScroll > 440 ) {
        navigationBlock.addClass("fixed animated fadeInDown");
    }
    else {
        navigationBlock.removeClass("fixed animated fadeInDown");
    }
}

/* MAIN HEADER REMOVE ACTIVE CLASS AFTER SCROLL TOP*/
$(window).on("scroll", function() {
    if($("body").scrollTop() === 0 ) {
        $('.nav__btn').removeClass('active');
    }
});


$(window).on("load resize ready scroll", function(){
    if($(window).width() > '767') {
        scrollWindowNavigationFixedLarge();
    }
});

$(document).ready(function(){

    /* SMOOTH SCROLL */
    $(".nav__btn").on("click", function (e) {
        e.preventDefault();

        var id          = $(this).attr('href'),
            navHeight   = $(".header__top").outerHeight(),
            top         = $(id).offset().top - navHeight;

        $('body, html').animate({
                scrollTop: top
            }, 1000);
    });

    /* LOGO CLICK SCROLL TO TOP */
    $(".logotype").on("click", function(e) {
        $('body,html').animate(
            {
                scrollTop: 0
            }, 1000
        );
    });

    /* NAV LINK */
    $(".nav__btn").on("click", function (e) {
        e.preventDefault();

        $('.nav__btn').removeClass("active");
        $(this).addClass('active');
    });

    /* BTN MOBILE */
    $(".btn__mobile").on("click", function(e) {
        e.preventDefault();

        $(".nav__row").addClass("animated slideInLeft");
        $("body").addClass('open-menu');
    });
    $(".btn__mobile-close").on("click", function(e) {
        e.preventDefault();

        $(".nav__row").removeClass("animated slideInLeft");
        $("body").removeClass('open-menu');
    });


    /* ANIMATION - VIEW PORT CHECK PAGE */
    if($(window).width() > '767') {
        $('.idea__left-title').addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInLeft',
                classToRemove : 'hidden'
            }
        );
        $('.idea__right').addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInRight',
                classToRemove : 'hidden'
            }
        );
        $('.build__left').addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInLeft',
                classToRemove : 'hidden'
            }
        );
        $('.build__right').addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInRight',
                classToRemove : 'hidden'
            }
        );
        $('.lose__count-num-0').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-0').countTo(
                        {
                            speed: 60000
                        }
                    );
                }
            }
        );
        $('.lose__count-num-1').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-1').countTo(
                        {
                            speed: 50000
                        }
                    );
                }
            }
        );
        $('.lose__count-num-2').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-2').countTo(
                        {
                            speed: 40000
                        }
                    );
                }
            }
        );
        $('.lose__count-num-3').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-3').countTo(
                        {
                            speed: 30000
                        }
                    );
                }
            }
        );
        $('.lose__count-num-4').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-4').countTo(
                        {
                            speed: 20000
                        }
                    );
                }
            }
        );
        $('.lose__count-num-5').viewportChecker({
                callbackFunction: function(){
                    $('.lose__count-num-5').countTo(
                        {
                            speed: 10000
                        }
                    );
                }
            }
        );
        $('.are__row').addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                callbackFunction: function(){
                    $('.circle__title').countTo(
                        {
                            speed: 2500
                        }
                    );
                }
            }
        );
    }
});