/**
 * Custom JS
 */


/**
 * Reduces the padding in the navigation on scroll
 */

window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav');

    if (window.pageYOffset > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
}, false);

/**
 This jQuery script is for a scroll-triggered opacity change of two elements with the IDs "banner-left" and "banner-right".

 When you scroll down the page, the opacity of these elements decreases based on the scroll distance from the top of the page. The further you scroll from the top, the more transparent these elements become. The change rate is set by the divisor in the calculation st/350. If the scroll top (st) is 350px, the opacity would be 0, making the elements entirely transparent.

 The if($('#banner-left').length && $('#banner-right').length) ensures that the code inside only runs if these two elements are present on the page.
 Lastly, (function($) { ... })(jQuery); is a way to avoid conflicts with other libraries that may use the $ shorthand. It guarantees that $ is jQuery within the function's scope.
 *
 */
(function($) {

    if($('#banner-left').length && $('#banner-right').length) {
        $(window).scroll(function(){
            var st = $(this).scrollTop();

            $("#banner-left, #banner-right").css({
                "opacity" : 1 - st/350
            });
        });
    }

})(jQuery);