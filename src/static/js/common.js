$(document).ready(function() {

    $(".menu-list__item").click(function() {

        var $this = $(this);
        var elem = $(this).find('.menu-list__dropdown');

        if (!$this.hasClass("is-active")) {
            $(".menu-list__dropdown").slideUp();
            $(".menu-list__item").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        elem.slideToggle();

    });

    $(".burger").click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });

    $('.custom-select select').selectric();

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.adv-slider', {
                slidesPerView: 4,
                spaceBetween: 38,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {

                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1840: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        } else if (screenWidth < 992 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });

    var lisenceSlider = new Swiper('.licence-slider', {
        slidesPerView: 5,
        spaceBetween: 120,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-nl',
            prevEl: '.swiper-button-prev-pl',
        },

        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });


});