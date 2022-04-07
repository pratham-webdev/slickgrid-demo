
const navItems = [
    {
        id:1,
        name:'Home',
        href:"#"
    },
    {
        id:2,
        name:'Auto Height',
        href:"fixes.html"
    },
    // {
    //     id:3,
    //     name:'Pagination',
    //     href:"index.html"
    // },
    // {
    //     id:4,
    //     name:'Fixed Width',
    //     href:"cont-scroll.html"
    // },
    // {
    //     id:5,
    //     name:'Wrapping',
    //     href:"peek.html"
    // },
    {
        id:6,
        name:'Documents',
        href:"#"
    },
    {
        id:7,
        name:'Reports',
        href:"#"
    },
    {
        id:8,
        name:'CSM',
        href:"#"
    },
    {
        id:9,
        name:'TAP',
        href:"#"
    },
    {
        id:10,
        name:'Admin',
        href:"#"
    },
    {
        id:11,
        name:'Training',
        href:"#"
    },
    {
        id:12,
        name:'Enhanced',
        href:"enhanced.html"
    }
]

const navbarTemplate = `<nav class="navbar navbar-expand-lg navbar-light bg-white border sub-nav">
<div class="container-fluid">
<a class="nav-icon px-2" data-bs-toggle="collapse" href="#left-nav-panel" aria-expanded="true"><i class="bi bi-chevron-double-left fs-4"></i></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      ${createNavItems()}
    </div>
  </div>
</div>
</nav>`;

function activeLocation(id,href){
    let path;
    if(window.location.pathname.includes('/slickgrid-demo')){
        path = window.location.pathname.replace('/slickgrid-demo','');
    }
    else{
        path = window.location.pathname;
    }
    return "/"+href === path || (id===3 && (path==="/" || path==="/index.html")) ? 'active' : "";
}

function navItemTemplate(el){
        return `<a id="navitem-${el.id}" class="nav-link ${activeLocation(el.id,el.href)}" href=${el.href}>${el.name}</a>`;
}

function createNavItems(){
let tempArr = navItems.map(navItemTemplate);
return tempArr.join("");
}

$('#navbar-container').append(navbarTemplate);