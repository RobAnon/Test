
$(document).ready(function() {

    /* fade in text on page change, load, and on scroll */
    fadeInText();
    fadeInLineBreak();
    fadeInOpacity();

    $(document).on('scroll', function() {
        fadeInText();
        fadeInLineBreak();
        fadeInOpacity();
    })

    // mutation observer watches body, calls fadeIn when component loads
    // fixes window.scrollTo thing in neg ent
    const target = document.body;
    const config = {attributes: true, childLlist: true, subtree: true};
    const observer = new MutationObserver(() => {
        fadeInText();
        fadeInLineBreak();
        fadeInOpacity();
    })
    observer.observe(target, config);


})


const fadeInText = function() {

    /* for each blind el */
    $('.blind-text').each(function() {
        var el = $(this); // assign el to var

        el.css('opacity', '1'); // make visible - stops flicker on load

        // wrap in container if not already wrapped
        if ( !el.parent().hasClass('blind-wrap') ) {
            el.wrap($('<div class="blind-wrap"></div>'));
        }

        // wrap el in container
        var elPosition = el.offset().top - el.height(); // get position of el
        var elDelay = el.data('delay'); // get delay of el

        var positionFromTop = $(document).scrollTop(); // get position scrolled to
        var windowHeight = $(window).height(); // get window height
        
        // if element is in view
        if (positionFromTop + windowHeight > elPosition) {
            setTimeout(() => {
                el.css('transform', 'translateY(0%)'); // transform after delay number of milliseconds
            }, elDelay);
        }
    })
}


const fadeInOpacity = function() {
    $('.fade-in').each(function() {
        var el = $(this);

        var elPosition = el.offset().top - el.height();
        var positionFromTop = $(document).scrollTop();
        var windowHeight = $(window).height();

        var elDelay = el.data('delay');

        if (positionFromTop + windowHeight > elPosition) {
            setTimeout(function() {
                el.css('transform', 'translateY(0%)');
                el.css('opacity', '1');
            }, elDelay);
        }
    })
}


const fadeInLineBreak = function() {

    $('.linebreak').each(function() {
        var el = $(this);

        if ( !el.parent().hasClass('linebreak-container') ) {
            el.wrap($('<div class="linebreak-container"></div>'));
        }

        var elPosition = el.offset().top - el.height();
        var positionFromTop = $(document).scrollTop();
        var windowHeight = $(window).height();

        if (positionFromTop + windowHeight > elPosition) {
            setTimeout(function() {
                el.css('width', '100%');
            }, 300)
        }

    })

}
