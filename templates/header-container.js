const buttonItems = [
    {
        id:1,
        icon:"pencil-fill",
        name:"Edit"
    },
    {
        id:2,
        icon:"front",
        name:"Create a copy"
    },
    {
        id:3,
        icon:"x-square-fill",
        name:"Void"
    },
    {
        id:4,
        icon:"share-fill",
        name:"Share"
    },
    {
        id:5,
        icon:"printer-fill",
        name:"Printable View"
    },
    {
        id:6,
        icon:"question-circle",
        name:"Help"
    },
    {
        id:7,
        icon:"bookmark-fill",
        name:"Add Bookmark"
    }
]


const headerTemplate = `<div class="py-2 px-3">
<div class="d-flex align-items-center flex-wrap py-2">
<h3 class="mb-0">Invoice - 120415</h3>
<div id="buttons-container" class="ms-3">
  ${createButtons()}
</div>
</div>
<div class="d-flex justify-content-between align-items-center pb-2">
<a class="nav-link small p-2" href="#">Go Back</a>
<div class="d-flex align-items-center mt-sm-1">
<a class="nav-link small p-2 me-1" href="#">< Previous Record</a>
<a class="nav-link small p-2" href="#">Next Record ></a>
</div>
</div>
</div>`

function createButtonItems(el){
if(window.innerWidth > 1100){
    if(el.id === 1){
        return `<button type="button" class="btn btn-sm btn-primary mt-2 me-2"> 
    <i class="bi bi-${el.icon} me-2"></i>
        ${el.name}
    </button>`
    }
    else{
        return `<button type="button" class="btn btn-sm btn-outline-new mt-2 me-2"> 
    <i class="bi bi-${el.icon} me-2"></i>
        ${el.name}
    </button>`
    }
}
else{
    return `<a class="nav-link small mb-2" href="#"> 
    <i class="bi bi-${el.icon} me-2"></i>
        ${el.name}
    </a>`
}
}

function createButtons(){
    if(window.innerWidth > 1100){
    let buttonArr = buttonItems.map(createButtonItems);
    return buttonArr.join("");
    }
    else{
        let tempButtonDrop = buttonItems.map((el)=>{
            return `<li>${createButtonItems(el)}</li>`
          })
          return `<div class="dropdown">
          <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
            More Actions
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
            ${tempButtonDrop.join("")}
          </ul>
        </div>`;
        }
    }

$('#header-container').append(headerTemplate);