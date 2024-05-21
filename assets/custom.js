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

/*jQuery(window).on('load', function() {
    setTimeout(function() {
        jQuery('#main-nav.main-nav-wrap').addClass('loaded');
    }, .01); // Wait for .1 seconds
});*/
