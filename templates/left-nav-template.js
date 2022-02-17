function leftNavTemplate(arr) { 
    return `<nav class="bd-links pt-1 pb-3 px-lg-3 px-md-2 px-sm-2 px-2">${createNavList(arr)}</nav>`;}

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