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

//resize event

window.onresize = resizeContent;

resizeContent();