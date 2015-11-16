function include(scriptUrl) {
    //var a = document.createElement('script');
    //a.src = scriptUrl;
    //a.type = 'text/javascript';
    //document.body.appendChild(a);
    document.write('<script src=' + scriptUrl + '></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* PointerEvents
 ========================================================*/
;
(function ($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $('#copyright-year').text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
})(jQuery);

/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById('google-map');
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                    styles: [{
                        'featureType': 'landscape.man_made',
                        'elementType': 'geometry',
                        'stylers': [{'color': '#f7f1df'}]
                    }, {
                        'featureType': 'landscape.natural',
                        'elementType': 'geometry',
                        'stylers': [{'color': '#d0e3b4'}]
                    }, {
                        'featureType': 'landscape.natural.terrain',
                        'elementType': 'geometry',
                        'stylers': [{'visibility': 'off'}]
                    }, {
                        'featureType': 'poi',
                        'elementType': 'labels',
                        'stylers': [{'visibility': 'off'}]
                    }, {
                        'featureType': 'poi.business',
                        'elementType': 'all',
                        'stylers': [{'visibility': 'off'}]
                    }, {
                        'featureType': 'poi.medical',
                        'elementType': 'geometry',
                        'stylers': [{'color': '#fbd3da'}]
                    }, {
                        'featureType': 'poi.park',
                        'elementType': 'geometry',
                        'stylers': [{'color': '#bde6ab'}]
                    }, {
                        'featureType': 'road',
                        'elementType': 'geometry.stroke',
                        'stylers': [{'visibility': 'off'}]
                    }, {
                        'featureType': 'road',
                        'elementType': 'labels',
                        'stylers': [{'visibility': 'off'}]
                    }, {
                        'featureType': 'road.highway',
                        'elementType': 'geometry.fill',
                        'stylers': [{'color': '#ffe15f'}]
                    }, {
                        'featureType': 'road.highway',
                        'elementType': 'geometry.stroke',
                        'stylers': [{'color': '#efd151'}]
                    }, {
                        'featureType': 'road.arterial',
                        'elementType': 'geometry.fill',
                        'stylers': [{'color': '#ffffff'}]
                    }, {
                        'featureType': 'road.local',
                        'elementType': 'geometry.fill',
                        'stylers': [{'color': 'black'}]
                    }, {
                        'featureType': 'transit.station.airport',
                        'elementType': 'geometry.fill',
                        'stylers': [{'color': '#cfb2db'}]
                    }, {'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'color': '#a2daf2'}]}]
                });
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/

(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Mailform
 =============================================*/

(function ($) {
    include('js/mailform/jquery.form.min.js');
    include('js/mailform/jquery.rd-mailform.min.js');
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name='+'viewport'+']'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0';
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
                document.addEventListener('gesturestart', gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($('>ul', this)[0]) {
                    $('>a', this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr('href');
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = '';
if (!result) {
    userScale = ',user-scalable=0'
}
document.write('<meta name='+'viewport'+' content='+'width=device-width,initial-scale=1.0' + userScale + '>');
/* Camera
 ========================================================*/
;
(function ($) {
    var o = $('#camera');
    if (o.length > 0) {
        if (!(isIE() && (isIE() > 9))) {
            include('js/jquery.mobile.customized.min.js');
        }

        include('js/camera.js');

        $(document).ready(function () {
            o.camera({
                autoAdvance: false,
                height: '32.342%',
                minHeight: '400px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        });
    }
})(jQuery);

/* InstaFeed
 =============================================*/
;
(function ($) {
    var o = $('#instafeed');
    if (o.length > 0) {
        include('js/instaFeed.min.js');
        $(document).ready(function () {
            var feed = new Instafeed({
                get: 'user',
                userId: 499522078,
                accessToken: '1524730928.44f1940.2c6f62bc7f0244b0ae1ac064fc8dceaf',
                limit: 6
            });
            feed.run();
        });

    }
})(jQuery);

/* Facebook
 =============================================*/
;
(function ($) {
    var o = $('.fb-page');

    $(window).load(function () {
        o.css({'display': 'block'})
            .find('span').css({
                'width': '100%',
                'display': 'block',
                'text-align': 'inherit'
            })
            .find('iframe').css({
                'display': 'inline-block',
                'position': 'static'
            });
    });

    $(window).on('load resize', function () {
        if (o.parent().width() < o.find('iframe').width()) {
            o.find('iframe').css({
                'transform': 'scale(' + (o.width() / o.find('iframe').width()) + ')',
                'transform-origin': '0% 0%'
            })
                .parent().css({
                    'height': (o.find('iframe').height() * (o.width() / o.find('iframe').width())) + 'px'
                });
        } else {
            o
                .find('span').css({
                    'height': o.find('iframe').height()
                })
                .find('iframe').css({
                    'transform': 'none'
                });
        }
    });
})(jQuery);

/* Parallax
 =============================================*/
;
(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);
