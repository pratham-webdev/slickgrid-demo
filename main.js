function resizeContent() {
  if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
    $('#gn-items').empty();
    $('#gn-items').append(creategnItems);
  }
  $('#buttons-container').empty();
  $('#buttons-container').append(createButtons);
  $('#grid-buttons-bar').empty();
  $('#grid-buttons-bar').append(createGridButtonGroup);
  if (window.innerWidth < 1024) {
    $('#left-nav-panel').removeClass("show");
  } else {
    $('#left-nav-panel').addClass("show");
  }
};

function resizeGrid() {
  let gridwidth = $('myGrid').width();
  $('#myGrid').css('width', gridwidth);
  grid.resizeCanvas();
  grid.autosizeColumns();
}

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

//resize event

window.onresize = resizeContent;

//scroll event

let oldScroll;

document.getElementById('main-container').onscroll = onScrollMainContainer;

resizeContent();