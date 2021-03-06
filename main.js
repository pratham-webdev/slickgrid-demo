
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
  window.innerWidth > 1200 ? grid.setOptions({ autosizeColsMode: Slick.GridAutosizeColsMode.FitColsToViewport }) : grid.setOptions({ autosizeColsMode: Slick.GridAutosizeColsMode.IgnoreViewport });
};

function resizeGrid() {
  // let gridwidth = $('#myGrid').width();
  // $('#myGrid').css('width', gridwidth);
  grid.resizeCanvas();
  grid.autosizeColumns();
  $('.slick-viewport.slick-viewport-top.slick-viewport-left').floatingScrollbar(false)
}

function turnAdjusments() {
  adjustmentsOn ? (adjustmentsOn = false, $('#slick-button-8').text('Show Adjustments')) : (adjustmentsOn = true, $('#slick-button-8').text('Hide Adjustments'));
  checkbox = true;
  buildGrid();
}

//resize event

window.onresize = resizeContent;

$('#main-container').on('scroll', () => {
  if ($('#main-container').scrollTop() >= 800) {
    $('#plus-minus').addClass('show d-flex flex-column');
  }
  else {
    $('#plus-minus').removeClass('show d-flex flex-column');
  }
});

function fullScreenView() {
  if ($('#left-panel-nav').hasClass('show') == false && $('#navbar-container').hasClass('show') == false) {
    $('#navbar-container, #left-nav-panel').addClass('show');
    $('#main-container, #left-nav-panel').css('height', 'calc(100vh - 6.625rem)');
    $('#slick-button-9').text('Fullscreen');
    resizeGrid();
  }
  else {
    $('#navbar-container, #left-nav-panel').removeClass('show');
    $('#main-container, #left-nav-panel').css('height', '100vh');
    $('#slick-button-9').text('Windowed');
    resizeGrid();
  }
}

//max line items input settings
function setLineItems() {
  // let lineItemsLimit = $('#line-items-limit').val() == 0 ? 100 : $('#line-items-limit').val();
  let lineItemsAmt = $('#line-items-amt').val() == 0 ? 50 : $('#line-items-amt').val();
  checkbox = true;
  // maxLineItems = Number(lineItemsLimit);
  lineItemsNumber = Number(lineItemsAmt);
  // if (maxLineItems < lineItemsNumber) {
  //   $('#myGrid').css('height', '80vh');
  //   if($('#plus-minus').length == 0){
  //     $('body').append(slickGridPlusMinus);
  //   }
  //   buildGrid();
  // }
  // else {
    $('#myGrid').css('height', 'max-content');
    $('#plus-minus').remove();

    buildGrid();
  // }
}

function setMLColor(){
  let MLColor = String($('#ML-color-setting').val());
  if(MLColor == 'stripe-blue'){
    $('.text-machine-learning-stripe').attr('class', `text-machine-learning-stripe ${MLColor}`);
 $('.text-machine-learning').attr('class', `text-machine-learning-stripe ${MLColor}`);
  }
  else{
  $('.text-machine-learning').attr('class', `text-machine-learning ${MLColor}`);
  $('.text-machine-learning-stripe').attr('class', `text-machine-learning ${MLColor}`);
  }
}

function setMLHighlights(){
 $('.highlight').toggleClass('no-highlight');
}

//tooltip configuration
function adjustmentsTooltipHover(){
  $(".adjustment-icon").on('mouseover mouseout',function(event){
    if(event.type === 'mouseover'){   
    let topAdj = Math.round($(this).offset().top);
    let leftAdj = Math.round($(this).offset().left);
    $('#adjustments-tooltip').css('top',`${topAdj+20}px`);
    $('#adjustments-tooltip').css('left',`${leftAdj}px`);
    $('#adjustments-tooltip').show();
    }
    else{
      $('#adjustments-tooltip').hide();
    }
  })
}


function toggleFullAdjustments() {
  $('#slick-button-8,#slick-button-9').toggle();
}
toggleFullAdjustments();



// resizeContent();