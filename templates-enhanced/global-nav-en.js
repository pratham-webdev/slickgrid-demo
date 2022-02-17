const gnItems = [
  {
    id:1,
    icon:"bookmark-fill",
    name:"Bookmarks"
  },
  {
    id:2,
    icon:"hourglass-split",
    name:"Recent"
  },{
    id:3,
    icon:"folder-fill",
    name:"All"
  },{
    id:4,
    icon:"tools",
    name:"Tools"
  },{
    id:5,
    icon:"question-lg",
    name:"Help"
  },{
    id:6,
    icon:"wrench-adjustable-circle",
    name:"Setup"
  },
  {
    id:7,
    icon:"door-closed-fill",
    name:"Logout"
  },
]

function globalNavTemplate() { return`<nav class="navbar navbar-light bg-white border border-bottom-0 py-1 global-nav">
<div class="container-fluid">
  <form class="d-flex w-25">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
  </form>
  <div id="gn-items" class="d-flex align-items-center">
  ${creategnItems()}
  </div>
</div>
</nav>`;}

function creategnItemsSmall(el){
  return `<a href="#" class="nav-link d-inline-flex align-items-center p-2 me-1">
  <i class="bi bi-${el.icon} ${el.id < 4 ? "" : "me-2"}"></i>
  ${el.id < 4 ? '' : el.name}
  </a>`
  }

function creategnItems(){
    let tempArr = gnItems.slice(0,3).map(creategnItemsSmall);
    let tempdropArr = gnItems.slice(4,gnItems.length).map((el)=>{
      return `<li>${creategnItemsSmall(el)}</li>`
    })
    let userTemp = `<div class="dropdown">
    <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-person-fill me-2"></i>John Doe
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
      ${tempdropArr.join("")}
    </ul>
  </div>`;
    tempArr.push(userTemp)
    return tempArr.join("");
}

$('#navbar-container').append(globalNavTemplate);