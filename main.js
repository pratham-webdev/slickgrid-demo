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
  window.innerWidth >1280 ? grid.setOptions({autosizeColsMode:Slick.GridAutosizeColsMode.FitColsToViewport}) : grid.setOptions({autosizeColsMode:Slick.GridAutosizeColsMode.IgnoreViewport});
};

function resizeGrid() {
  let gridwidth = $('myGrid').width();
  $('#myGrid').css('width', gridwidth);
  grid.resizeCanvas();
  grid.autosizeColumns();
}

function turnAdjusments(){
  adjustmentsOn ? adjustmentsOn = false : adjustmentsOn = true;
  checkbox = true;
  buildGrid();
}

//resize event

window.onresize = resizeContent;

$('#main-container').on('scroll',()=>{
  if ($('#main-container').scrollTop() >= 800) {
    $('#plus-minus').addClass('show d-flex flex-column');
  }
  else{
    $('#plus-minus').removeClass('show d-flex flex-column');
  }
});

resizeContent();