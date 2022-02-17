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
        click: "detailView.collapseAll()"
    },
    
    {
        id: 7,
        name: "Clear All Filters",
        click: ""
    },
]

const gridButtonsBar = `<div id="grid-buttons-bar" class="d-flex align-items-center justify-content-between pb-2">
${createGridButtonGroup()}
</div>
<div class="p-2 border border-bottom-0 bg-white text-dark fw-bold">100 Line Items • 0 Selected • 0 Warnings • 0 Reviewed</div>`

function createGridButtonItems(el) {
   if(window.innerWidth > 1100){
        return `<button class="btn btn-sm ${el.id === 5 ? "btn-outline-primary" : "btn-outline-new"} me-2" onClick=${el.click}>${el.name}</button>`;
   }
   else{
    return `<a class="nav-link small mb-2" href="#" onClick=${el.click}>
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

function createGridButtonGroup(){
    if(window.innerWidth > 1100){
        return `<div class="d-flex align-items-center">
        ${createGridButtons("left")}
        </div>
            <div class="d-flex align-items-center">
                <div class="me-2"><input class="form-control btn-sm" type="search" placeholder="Search" aria-label="Search">
                </div>
                ${createGridButtons("right")}
            </div>`
    }
    else{
        let tempGridDrop = gridButtonItems.map((el)=>{
            return `<li>${createGridButtonItems(el)}</li>`
          })
          return `<div class="me-2"><input class="form-control btn-sm" type="search" placeholder="Search" aria-label="Search">
          </div>
          <div class="dropdown">
          <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
            More Actions
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
            ${tempGridDrop.join("")}
          </ul>
        </div>`
    }
}

const slickgridTemplate = `${gridButtonsBar}<div id="myGrid" style="width:100%;"></div>
<div id="pager" style="width:100%;height:20px;"></div>`

$('#card-4').append(slickgridTemplate);