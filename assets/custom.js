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