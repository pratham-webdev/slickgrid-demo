const createCloseLeftNavMobile =
 `<a class="nav-link px-2" data-bs-toggle="collapse" href="#left-nav-panel" aria-expanded="true"><i class="bi bi-chevron-double-left fs-4"></i></a>`;

function leftNavTemplate(arr) { 
    return `<nav class="bd-links pt-1 pb-3 px-lg-3 px-md-2 px-sm-2 px-2">
    <div id="logo-content" class="d-flex align-items-center justify-content-between pb-3">
    <a class="h5 text-white" href="#">TeamConnect</a>
    ${window.innerWidth <1100 ? createCloseLeftNavMobile : ''}
    </div>
    ${createNavList(arr)}</nav>`;}

function createNavListTemplate(el) {
    return `<div class="mb-2">
    <button class="btn d-flex align-items-center rounded w-100 ${el.parentClass}" data-bs-toggle="collapse" data-bs-target="#leftNav-${el.id}"
      aria-expanded=${el.aria}>${el.name}</button>
    <div id="leftNav-${el.id}" class="collapse ${el.childClass}">
    ${createNavListItems(el.items)}
    </div>
  </div>`;
}

function createNavListItems(items){
    let tempItemArr = items.map((item)=>{
        if(item === "General"){
        return `<a href="" class="d-block fw-normal pb-1 small rounded active">${item}</a>`;
        }
        else{
        return `<a href="" class="d-block fw-normal pb-1 small rounded">${item}</a>`;
        }
    });
    return tempItemArr.join("");
}

function createNavList(arr){
    let tempNavListArr = arr.map(createNavListTemplate);
    return tempNavListArr.join("");
}

export default leftNavTemplate;