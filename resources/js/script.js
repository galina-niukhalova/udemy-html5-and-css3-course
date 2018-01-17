$(document).ready(function () {

    /* -------------------------------*/
    /*  for sticky navigation */
    /*  waypoints plagin */
    /*  http://imakewebthings.com/waypoints/guides/getting-started/ */
    /* ------------------------------- */
    var waypoint = new Waypoint({
        element: $(".js--section-feautures"),
        handler: function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            }
            else {
                $('nav').removeClass('sticky');
            }
        }, offset: '60px'
    });


    /* ------------------------------- */
    /* Scroll on buttons */
    /* ------------------------------- */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-feautures').offset().top }, 1000);
    });


    /* ------------------------------- */
    /*  Scroll on nav menu  */
    /*  https://css-tricks.com/snippets/jquery/smooth-scrolling/   */
    /* ------------------------------- */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* ------------------------------- */
    /*  Animation on scroll  */
    /* ------------------------------- */

    var waypoint = new Waypoint({
        element: $(".js--wp-1"),
        handler: function () {
            $(".js--wp-1").addClass('animated fadeIn');
        }, offset: '50%'
    });

    var waypoint = new Waypoint({
        element: $(".js--wp-2"),
        handler: function () {
            $(".js--wp-2").addClass('animated fadeInUp');
        }, offset: '50%'
    });

    var waypoint = new Waypoint({
        element: $(".js--wp-3"),
        handler: function () {
            $(".js--wp-3").addClass('animated fadeIn');
        }, offset: '50%'
    });

    var waypoint = new Waypoint({
        element: $(".js--wp-4"),
        handler: function () {
            $(".js--wp-4").addClass('animated pulse');
        }, offset: '50%'
    });

    /* ------------------------------- */
    /*  Mobile navigation  */
    /* ------------------------------- */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        // open/close box
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round'); 
            icon.removeClass('ion-close-round');
        }
    });

});

