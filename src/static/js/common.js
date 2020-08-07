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













    $(".table-show").click(function() {
        var $this = $(this);
        // var elem = $(this).find('.mob-nav__dropdown');

        if (!$this.hasClass("is-active")) {
            $(".table-wrap").slideUp();
            $(".table-show").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        $this.next().slideToggle();

    });



    var filialSlider = new Swiper('.filials-slider', {
        slidesPerView: 4,
        spaceBetween: 38,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-n',
            prevEl: '.swiper-button-prev-p',
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

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.advantag-slider', {
                slidesPerView: 4,
                spaceBetween: 38,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {

                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1599: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        } else if (screenWidth < 992 && myAdvSlider != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });

    var catSlider = new Swiper('.cat-slider', {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-nc',
            prevEl: '.swiper-button-prev-pc',
        },

        breakpoints: {
            499: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 2,

            },
            991: {
                slidesPerView: 3,

            },
            1279: {
                slidesPerView: 4,

            },
            1599: {
                slidesPerView: 5,

            },
        }
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

    var catSlider = new Swiper('.map-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.custom-select select').selectric();
    var checkMap = document.querySelector('#map');
    if (checkMap) {
        ymaps.ready(init);

        function init() {
            var center = [55.59113656911934, 37.88662649999996];
            var center2 = [55.763240, 37.651825];
            var myMap = new ymaps.Map('map', {
                center: center,
                controls: [],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'

            });

            myMap.behaviors.disable('scrollZoom');

            var myPlacemark = new ymaps.Placemark(center, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                // iconImageHref: 'img/map-ic.png',
                // iconImageSize: [42, 42]
                // preset: 'twirl#violetIcon'
            });

            var myPlacemark2 = new ymaps.Placemark(center2, {
                // Свойства.
                // Содержимое иконки, балуна и хинта.
                balloonContent: 'улица Ивана Франко, 4к4',
                hintContent: 'улица Ивана Франко, 4к4'
            }, {
                // Опции.
                iconLayout: 'default#image',
                // iconImageHref: 'img/map-ic.png',
                // iconImageSize: [42, 42]
                // preset: 'twirl#violetIcon'
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark2);

        }
    }

    $('.tab-btn-list .tab-btn').click(function() {

        $('.tab-btn').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.tab-block__item').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.tab-btn-list .tab-btn:first').click();


});