function onScrollMainContainer(e) {
    // print "false" if direction is down and "true" if up
    if (oldScroll > $(this).scrollTop()) {
        $('#navbar-container').slideDown(200);
        $('#main-container, #left-nav-panel').css('height', 'calc(100vh - 6.625rem)');
    } else {
        $('#navbar-container').slideUp(200);
        $('#main-container, #left-nav-panel').css('height', '100vh');

    }
    oldScroll = $(this).scrollTop();

    $(this).hasClass('show') ? $('#bottom-menu').slideUp(200) : $('#bottom-menu').slideDown(200);

}

//scroll event

let oldScroll;

document.getElementById('main-container').onscroll = onScrollMainContainer;