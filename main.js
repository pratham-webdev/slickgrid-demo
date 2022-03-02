
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
  // let gridwidth = $('#myGrid').width();
  // $('#myGrid').css('width', gridwidth);
  grid.resizeCanvas();
  grid.autosizeColumns();
}

function turnAdjusments(){
  adjustmentsOn ? (adjustmentsOn = false, $('#slick-button-8').text('Show Adjustments')) : (adjustmentsOn = true, $('#slick-button-8').text('Hide Adjustments'));
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

function fullScreenView(){
 if($('#left-panel-nav').hasClass('show') == false && $('#navbar-container').hasClass('show') == false){
  $('#navbar-container, #left-nav-panel').addClass('show');
  $('#main-container, #left-nav-panel').css('height', 'calc(100vh - 6.625rem)');
  $('#slick-button-9').text('Fullscreen');
  resizeGrid();
 }
 else{
  $('#navbar-container, #left-nav-panel').removeClass('show');
  $('#main-container, #left-nav-panel').css('height', '100vh');
  $('#slick-button-9').text('Windowed');
  resizeGrid();
 }
}

resizeContent();