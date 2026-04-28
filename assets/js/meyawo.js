/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

$(document).ready(function () {

    // smooth scroll
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    // navbar affix — replaces the deprecated bootstrap.affix.js plugin.
    // Adds/removes .affix on the navbar after 20px of scroll so the existing
    // CSS rules (.custom-navbar.affix) can handle the visual state change.
    var $navbar = $('.custom-navbar');
    var AFFIX_OFFSET = 20;

    function updateNavbarAffix() {
        if ($(window).scrollTop() >= AFFIX_OFFSET) {
            $navbar.addClass('affix');
        } else {
            $navbar.removeClass('affix');
        }
    }

    $(window).on('scroll', updateNavbarAffix);
    updateNavbarAffix(); // run once on load in case page is already scrolled

    // navbar mobile toggle
    $('#nav-toggle').on('click', function () {
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).toggleClass('is-active').attr('aria-expanded', !expanded);
        $('ul.nav').toggleClass('show');
    });

});