const summaryItems = [
    {
        id:1,
        type:`Type`,
        rateUnit:`Rate*Unit`,
        disc:`(-) Discount`,
        adj:`(-) Adjustment`,
        tax:`Tax`,
        Amt:`Amount`,
    },
    {
        id:2,
        type:`Fees`,
        rateUnit:`$0.00`,
        disc:`$0.00`,
        adj:`$0.00`,
        tax:`$0.00`,
        Amt:`$0.00`,
    },
    {
        id:3,
        type:`Expenses`,
        rateUnit:`$8000`,
        disc:`$0.00`,
        adj:`$0.00`,
        tax:`$0.00`,
        Amt:`$8000.00`,
    },
    {
        id:4,
        type:`Invoice Total (USD)`,
        rateUnit:`$8000.00`,
        disc:`$0.00`,
        adj:`$0.00`,
        tax:`$0.00`,
        Amt:`$8000.00`,
    }
   
]

const summaryTable = ` <div>
<div id="adapt" class="row align-self-stretch">
<div id="list" class="col-12">
<div class="list-group list-group-flush">
${createSummaryTable()}
</div>
</div>
</div>
</div>`;

function createSummaryTable(){
let summaryArrayTable = summaryItems.map((item) => {
    return `
        <div id="tb-${item.id}" class="list-group-item">
        <div class="row row-cols-1 row-cols-md-6 small ${item.id == 1 || item.id == 4 ? "fw-bold" : ""} ">
            ${createSummaryItems(item)}
        </div>
    </div>`
});
return summaryArrayTable.join("");
}

function createSummaryItems(item){
    let summaryItemsArray =[];
    for (const [key,value] of Object.entries(item)){
        if(key != 'id'){
            summaryItemsArray.push(`<div class="col">${value}</div>`);
        }
    }
    return summaryItemsArray.join("");
}

$('#card-3').append(summaryTable);