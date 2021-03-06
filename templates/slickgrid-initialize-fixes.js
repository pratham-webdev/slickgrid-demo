let isCollapsed = false;
const gridButtonItems = [{
        id: 1,
        name: "Mark Reviewed",
        click: ""
    },
    {
        id: 2,
        name: "Mark Unreviewed",
        click: ""
    },
    {
        id: 3,
        name: "Reject",
        click: ""
    },
    {
        id: 4,
        name: "Adjust",
        click: ""
    },
    {
        id: 5,
        name: "Resize Columns",
        click: "resizeGrid()"
    },
    {
        id: 6,
        name: "Collapse All",
        click: `collapseAllNow()`
    },

    {
        id: 7,
        name: "Clear All Filters",
        click: ""
    },
    {
        id: 8,
        name: "Show Adjustments",
        click: `turnAdjusments()`
    },
    {
        id: 9,
        name: "Fullscreen",
        click: `fullScreenView()`
    },
]

function collapseAllNow() {
    isCollapsed ? 
    (buildGrid(), $('#slick-button-6').text('Collapse All'), isCollapsed = false) :
    (detailView.collapseAll(), $('#slick-button-6').text('Expand All'), isCollapsed=true, checkbox=true);
    // dataView.setPagingOptions({pageSize:50});
}

const gridButtonsBar = `<div id="grid-buttons-bar" class="d-flex align-items-center justify-content-between pb-2">
${createGridButtonGroup()}
</div>
<div class="p-2 border border-bottom-0 bg-white d-flex align-items-center justify-content-between"><div class="text-dark fw-bold">100 Line Items • 0 Selected • 0 Warnings • 0 Reviewed </div>${lineItemsAdjuster()}</div>`;

function lineItemsAdjuster(){ 
    return `<div class="d-flex align-items-center justify-content-between">
    ${selectMLHighlight()}
    ${selectMLColor()}
<input type="number" class="form-control ms-2" id="line-items-amt" aria-describedby="emailHelp" placeholder="No. of Line Items">
<button id="set-line-items" class="btn btn-sm btn-outline-primary ms-2" onClick="setLineItems()">Submit</button>
</div>`
}

function selectMLHighlight(){ 
    return `<div class="form-check w-100" onChange="setMLHighlights()">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  Turn On ML Highlights
</label>
</div>`
}

function selectMLColor(){
    return `<select id="ML-color-setting" class="form-select ms-2" onChange="setMLColor()">
    <option value="default">ML Blue Theme</option>
    <option value="stripe-blue" selected>ML Blue Stripe</option>
    <option value="bordered">ML Blue Bordered Theme</option>
    <option value="black">ML Cards Theme</option>
    <option value="orange">ML Cards Adv. Theme</option>
  </select>`
}

function selectMaxLineItems(){
    return `<select id="line-items-limit" class="form-select ms-2"">
    <option value="100" selected>Select Max Line Items</option>
    <option value="25">25</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>`
}

function createGridButtonItems(el) {
    if (window.innerWidth > 1100) {
        return `<button id="slick-button-${el.id}" class="btn btn-sm ${el.id === 5 ? "btn-outline-primary" : "btn-outline-new"} me-2" onClick=${el.click}>${el.name}</button>`;
    } else {
        return `<a id="slick-button-${el.id}" class="nav-link small mb-2" href="#" onClick=${el.click}>
    ${el.name}
</a>`
    }
}

function createGridButtons(type) {
    if (type === "left") {
        return gridButtonItems.slice(0, 4).map(createGridButtonItems).join("");
    } else {
        return gridButtonItems.slice(4, gridButtonItems.length).map(createGridButtonItems).join("");
    }
}

function createGridButtonGroup() {
    if (window.innerWidth > 1100) {
        return `<div class="d-flex align-items-center">
    ${createGridButtons("left")}
    </div>
        <div class="d-flex align-items-center">
            <div class="me-2"><input class="form-control btn-sm" type="search" placeholder="Search" aria-label="Search">
            </div>
            ${createGridButtons("right")}
        </div>`
    } else {
        let tempGridDrop = gridButtonItems.map((el) => {
            return `<li>${createGridButtonItems(el)}</li>`
        })
        return `<div class="me-2"><input class="form-control btn-sm" type="search" placeholder="Search" aria-label="Search">
      </div>
      <div class="dropdown dropup">
      <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
        More Actions
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
        ${tempGridDrop.join("")}
      </ul>
    </div>`
    }
}

//add height
function plusGrid() {
    let plus = $('#myGrid').height();
    $('#myGrid').css('height', `${plus+100}px`);
    grid.resizeCanvas();
}
//remove height
function minusGrid() {
    let plus = $('#myGrid').height();
    $('#myGrid').css('height', `${plus-100}px`);
    grid.resizeCanvas();
}


const slickgridTemplate = `${gridButtonsBar}<div id="myGrid" style="width:100%;"></div>`;

const slickGridPlusMinus = `<div id="plus-minus" class="plus-minus position-fixed collapse" style="bottom:0; right:0;"><button class="btn btn-sm btn-primary m-2" onClick="plusGrid()">+</button><button class="btn btn-sm btn-primary m-2" onClick="minusGrid()">-</button></div>`

$('#card-4').append(slickgridTemplate);

// $('body').append(slickGridPlusMinus);