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
    icon:"person-fill",
    name:"User"
  },
]

function globalNavTemplate() { return`<nav class="navbar navbar-light bg-white border border-bottom-0 py-1 global-nav">
<div class="container-fluid">
  <a class="navbar-brand" href="#">TeamConnect Demo</a>
  <form class="d-flex w-25">
    <input class="form-control btn-sm me-2" type="search" placeholder="Search" aria-label="Search">
    <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
  </form>
  <div id="gn-items">
  ${creategnItems()}
  </div>
</div>
</nav>`;}

function creategnItemsSmall(el){
  return `<a href="#" class="nav-link d-inline-flex align-items-center p-2 me-2">
  <i class="bi bi-${el.icon} me-2"></i>
  ${el.name}
  </a>`
  }

function creategnItems(){
  if(window.innerWidth > 1100){
    let tempArr = gnItems.map(creategnItemsSmall);
    return tempArr.join("");
  }
  else{
    let tempdropArr = gnItems.map((el)=>{
      return `<li>${creategnItemsSmall(el)}</li>`
    })
    return `<div class="dropdown">
    <button class="btn btn-sm btn-outline-new dropdown-toggle" type="button" id="dropdown-gn-items" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-person-fill me-2"></i>John Doe
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdown-gn-items">
      ${tempdropArr.join("")}
    </ul>
  </div>`;
  }
}



$('#navbar-container').append(globalNavTemplate);