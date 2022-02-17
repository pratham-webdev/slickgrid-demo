const bottomButtons = [
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

const bottomMenuTemplate = `<div id="bottom-menu" class="px-3 py-2">
<div class="d-flex align-items-center justify-content-between flex-wrap">
<div class="d-flex align-items-center">
    <a class="fs-5 bottom-menu-links  nav-link me-2" href="#"><i class="bi bi-arrow-left"></i></a>
    <h5 class="mb-0">Invoice - 120415</h5>
</div>
<div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
        <a class="bottom-menu-links  nav-link small me-1" href="#">< Previous</a> 
        <a class="bottom-menu-links  nav-link small me-2" href="#">Next > </a>
        </div>
    <div class="d-flex justify-content-end flex-1 align-items-center">
    ${createBottomMenuDrop()}
</div>
</div>
</div>
</div>
`;


function createBottomMenuDrop(){
    return `<div class="dropdown">
    <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
      More Actions
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
      ${bottomButtons.map((el)=>{
        return `<a class="nav-link small mb-2" href="#"> 
    <i class="bi bi-${el.icon} me-2"></i>
        ${el.name}
    </a>`
    }).join("")}
    </ul>
  </div>`
    
}

$('#bottom-menu').append(bottomMenuTemplate);