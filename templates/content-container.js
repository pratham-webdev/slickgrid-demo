const cardItems = [
    {
        id:1,
        name:"Header Information",
        items: [
            {
                label:"Invoice Number",
                field:"120415"
            },
            {
                label:"Vendor",
                field:"Walker & McFarland"
            },
            {
                label:"Invoice Date",
                field:"4/8/20"
            },
            {
                label:"Received Date",
                field:"120415"
            },
            {
                label:"Project",
                field:"DISP-000022-Potts v. Stark"
            },
            {
                label:"Posting Status",
                field:"Posted"
            },
            {
                label:"Warning",
                field:"None"
            },
            {
                label:"Billing Start Date",
                field:"1/1/20"
            },
            {
                label:"Billing End Date",
                field:"3/31/20"
            },
            {
                label:"Submitted Total",
                field:"8,000.00"
            },
            {
                label:"Submitted Currency",
                field:"USD"
            },
            {
                label:"Display Currency",
                field:"GBP"
            },
            {
                label:"Exchange Rate",
                field:"1.45 as of 9/17/21"
            },
            {
                label:"Line Item Warnings",
                field:"None"
            },
        ]
    },
    {
        id:2,
        name:"Tax Information",
        items: [
            {
                label:"Tax Type",
                field:"US"
            },
            {
                label:"Tax Rate",
                field:"0.00%"
            }
        ]
    },
    {
        id:3,
        name:"Invoice Summary",
        items: []
    },
    {
        id:4,
        name:"Line Items (100)",
        items: []
    },
    {
        id:5,
        name:"Access Information",
        items: [
            {
                label:"Created By",
                field:"Doe, Jane"
            },
            {
                label:"Modified By",
                field:"Doe, Jane"
            },
            {
                label:"Created On",
                field:"9/17/21 12:06PM"
            },
            {
                label:"Modified On",
                field:"9/17/21 12:07PM"
            }
        ]
    }
]


function contentContainerTemplate(){
    return `<div class="pb-2 px-3">
    ${createCards()}
  </div>`
}

function createCardContentItems(item){
    return `<div class="col card-body-items small d-flex mt-2">
    <span class="text-muted card-label">${item.label}</span>
    <span class="fw-bold ms-2">${item.field}</span>
  </div>`
}

function createCardItems(el){
return `<div class="card mb-3">
<div class="card-body">
  <a class="text-decoration-none card-collapse text-dark" data-bs-toggle="collapse" href="#card-${el.id}"
    aria-expanded="true">
    <div class="h6 fw-bold text-dark d-flex align-items-center">${el.name}<i class="bi bi-pencil-fill ms-2 text-muted"></i>
    </div>
  </a>
  <div id="card-${el.id}" class="collapse show border-top">
    <div class="row row row-cols-1 row-cols-sm-1 row-cols-md-2 pt-2">
    ${el.items.length != 0 ? el.items.map(createCardContentItems).join("") : ""}
    </div>
  </div>
</div>
</div>`
}

function createCards(){
    let cardArr = cardItems.map(createCardItems);
    return cardArr.join("")
}

$('#content-container').append(contentContainerTemplate());