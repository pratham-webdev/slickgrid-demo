var dataView;
var detailView; //row detail variable
var checkboxSelector; //checkbox variable
var grid;
var data = [];
var dataHolder = []; // cloning untouched dataset for opening detail view
var adjustmentsOn = false; //turn on/off adjustments
var checkbox = false; //for checking checbox added to grid
var columnFilters = {};
var sortcol = "title";
var sortdir = 1;
var selectedRowIds = [];

var fakeNames = ['John Doe', 'Jane Doe', 'Chuck Norris', 'Bumblebee', 'Jackie Chan', 'Elvis Presley', 'Bob Marley', 'Mohammed Ali', 'Bruce Lee', 'Rocky Balboa'];

var Categories = ["E101 Copying", "E106 Online Research", "E110 Out-of-town travel", "E112 Court Fees", "E120 Private investigators", "E124 Other"]

var Dates = ["01/01/2009", "01/02/2009", "01/03/2009", "01/04/2009", "01/05/2009", "01/06/2009", "01/07/2009"]

var columns = [{
    id: "sel",
    name: "Item",
    field: "id",
    behavior: "select",
    cssClass: "cell-selection",
    sortable: true,

    maxWidth: 40,
    resizable: false,
    selectable: false
  },
  {
    id: "flag",
    name: "Flag",
    field: "flag",
    behavior: "select",
    cssClass: "cell-selection",
    maxWidth: 40,
    resizable: false,
    selectable: false,
    formatter: Slick.Formatters.Flag
  },
  {
    id: "review",
    name: "Reviewed",
    field: "flag",
    behavior: "select",
    cssClass: "cell-selection",
    maxWidth: 40,
    resizable: false,
    selectable: false,
    formatter: Slick.Formatters.Reviewed
  },
  {
    id: "date",
    name: "Date",
    field: "date",
    width: 40
  },
  {
    id: "TK",
    name: "Timekeeper",
    field: "timekeeper",
    // maxWidth: 80,
    cssClass: "cell-title",
    sortable: true,
    formatter: Slick.Formatters.Timekeeper
  },
  {
    id: "type",
    name: "Type",
    field: "type",
    minWidth: 20,
    width: 40,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "category",
    name: "Category",
    field: "category",
    minwidth: 120,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "rate",
    name: "Rate",
    field: "rate",
    minWidth: 40,
    width: 40,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "units",
    name: "Quantity",
    field: "units",
    minWidth: 40,
    width: 40,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "disc",
    name: "Discount",
    field: "disc",
    minWidth: 40,
    width: 40,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "adj",
    name: "Adjustment",
    field: "adj",
    minWidth: 40,
    width: 40,
    cssClass: "cell-title",
    sortable: true
  },
  {
    id: "amt",
    name: "Amount",
    field: "amt",
    minWidth: 40,
    width: 40,
    cssClass: "cell-title",
    sortable: true,
    formatter: Slick.Formatters.Amount
  },
];

// for(var i = 0; i < 5; i++){

// columns.push({id: "extra" + i, name: "Extra " + i, field: "extra" + i, minWidth: 60});

// }
let windowWidth = window.innerWidth;

var options = {
  editable: false,
  enableAddRow: false,
  enableCellNavigation: true,
  enableColumnReorder: true,
  explicitInitialization: true,
  headerRowHeight: 30,
  showHeaderRow: true,
  enableAutoSizeColumns: true,
  autosizeColsMode: testFunc(),
  //   autoHeight: true,
  alwaysAllowHorizontalScroll: true,
  viewportClass: "#myGrid"
};

function testFunc() {
  return windowWidth > 1280 ? Slick.GridAutosizeColsMode.FitColsToViewport : Slick.GridAutosizeColsMode.IgnoreViewport
}

function DataItem(i) {
  let temp = Math.ceil(Math.random() * 100) + 200;
  this.id = i;
  this.flag = 1;
  // this.percentComplete = Math.round(Math.random() * 100);
  // this.effortDriven = (i % 5 == 0);
  this.timekeeper = 1;
  this.date = Dates[(Math.round(Math.random() * 6))];
  this.type = "Expense";
  this.category = Categories[(Math.round(Math.random() * 5))];
  this.rate = `$ ${temp}.00`;
  this.units = Math.ceil(Math.random() * 4);
  this.disc = "$ 0.00";
  this.adj = "$ -100.00";
  this.amt = `$ ${(temp * this.units) -100}`;
  // this.finish = "01/05/2009";
  // this.title = "Task " + i;
  // this.duration = "5 days";
}

//Auxillary functions
// function setAlwaysRenderRowClick(val){
//   var detailColumn = grid.getColumns()[0];
//   detailColumn.alwaysRenderColumn = val;
// }

// function setLoadOnce(val){
//   var options = detailView.getOptions();
//   options.loadOnce = val;
//   detailView.setOptions(options);
// }

// function setRowClick(val) {
//   var options = detailView.getOptions();
// options.useRowClick = val;
//   detailView.setOptions(options);
// }

// function setMaxRows(amount) {
//   var value = $("#maxRowInput").val();
//   var maxRows = parseInt(value);
//   var options = detailView.getOptions();

//   if(!isNaN(maxRows)) {
//     options.maxRows = maxRows;
//   }
//   detailView.setOptions(options);
// }

// function setPanelRows(amount) {
//   var value = $("#panelRowInput").val();
//   var panelRows = parseInt(value);
//   var options = detailView.getOptions();

//   if(!isNaN(panelRows)) {
//     options.panelRows = panelRows;
//   }
//   detailView.setOptions(options);
// }

//End of Auxillary functions

function hookAssigneeOnClick(itemId) {
  $("#who-is-assignee_" + itemId).off("click").on("click", function () {
    alert("Assignee is " + $("#assignee_" + itemId).val());
  });
}

function destroyAssigneeOnClick(itemId) {
  $("#who-is-assignee_" + itemId).off("click");
}

function loadingTemplate() {
  return '<div class="preload">Loading...</div>';
}

//row detail template
function loadView(itemDetail) {
  return `<div id="row-detail-view">
  <div class="mb-2">
      <span class="fw-bold">Description:</span><span class="ms-1">This is going to be a very long description about the expense of the invoice line item that is placed here to explain the details of this invoice line item to simulate a long description</span>
  </div>
  ${adjustmentsLoad()}
</div>`
}

function adjustmentsLoad() {
  if (adjustmentsOn) {
    return `<div class="mb-3">
    <span class="fw-bold">Adjustment:</span><span class="ms-1 text-primary"><i class="bi bi-markdown-fill fs-5 text-primary ms-1"></i></span><span class="ms-2">Manual</span>
</div>
<div class="mb-3">
    <div class="mb-2">
        <span class="fw-bold">Quantity</span>
    </div>
    <div class="d-flex align-items-center justify-content-between">
        <div class="w-50">
            <div class="mb-2">
                <span>2/1/2022 - Quantity adjusted to 2.00 hours - <a href="#">John Doe</a></span>
            </div>
            <div class="mb-2">
                <span>Reason for adjustment:</span><span class="text-primary ms-1">Excessive time on task</span>
            </div>
        </div>
        <div class="w-50">
            <div class="mb-2">
                <span>Comments to Vendor:</span><span class="text-primary ms-1">New Amount</span>
            </div>
            <div class="mb-2">
                <span>Reason for adjustment:</span><span class="text-primary ms-1">New Amount</span>
            </div>
        </div>
    </div>
</div>
<div class="mb-3">
    <button class="btn btn-sm btn-primary">Revert</button>
</div>`
  } else {
    return '';
  }
}

function filter(item) {
  for (var columnId in columnFilters) {
    if (columnId !== undefined && columnFilters[columnId] !== "") {
      var column = grid.getColumns()[grid.getColumnIndex(columnId)];

      // IMPORTANT with Row Detail View plugin
      // if the row is a padding row, we just get the value we're filtering on from it's parent
      item = detailView.getFilterItem(item);

      if (item[column.field] !== undefined) {
        var filterResult = typeof item[column.field].indexOf === 'function' ?
          (item[column.field].indexOf(columnFilters[columnId] && columnFilters[columnId]) === -1) :
          (item[column.field] != columnFilters[columnId]);

        if (filterResult) {
          return false;
        }
      }
    }
  }
  return true;
}

// fill the template with a delay to simulate a server call
function simulateServerCall(item) {
  var itemDetail = item;
  notifyTemplate(itemDetail)

  // setTimeout(function () {
  //   // let's add some property to our item for a better simulation
  //   itemDetail.assignee = fakeNames[randomNumber(0, 9)];
  //   itemDetail.reporter = fakeNames[randomNumber(0, 9)];

  //   // if(itemDetail.num % 5 == 0) {
  //   //   notifyNonTemplatedView(itemDetail)
  //   // } else {
   

  // }, 10);
}

// notify the onAsyncResponse with the "args.item" (required property)
// the plugin will then use itemDetail to populate the detail panel with "postTemplate"
function notifyTemplate(itemDetail) {
  detailView.onAsyncResponse.notify({
    "item": itemDetail
  }, undefined, this);
}

// notify the onAsyncResponse with the "args.item" (required property)
// the plugin will then use itemDetail to populate the detail panel with "postTemplate"
//don't need this for IG demo
function notifyNonTemplatedView(itemDetail) {
  var rowIdx = grid.getData().getIdxById(itemDetail.id);
  var temp =
    "<div class=\"tab\">" +
    "<button class=\"tablinks\" onclick=\"openCity(event, 'London'," + rowIdx + ")\">London</button>" +
    "<button class=\"tablinks\" onclick=\"openCity(event, 'Paris'," + rowIdx + ")\">Paris</button>" +
    "<button class=\"tablinks\" onclick=\"openCity(event, 'Tokyo'," + rowIdx + ")\">Tokyo</button>" +
    "</div>" +

    "<div id=\"London\" class=\"tabcontent\">" +
    "<h3>London</h3>" +
    "<p>London is the capital city of England.</p>" +
    "<button onclick=\"detailView.resizeDetailView(data[" + rowIdx + "])\">Resize detail view</button>" +
    "</div>" +

    "<div id=\"Paris\" class=\"tabcontent\">" +
    "<h3>Paris</h3>" +
    "<p>Paris is the capital of France.</p> " +
    "</div>" +

    "<div id=\"Tokyo\" class=\"tabcontent\">" +
    "<div>" +
    "<h4>Direct view inserting without template</h4>" +
    "<span>This is not using the template</span><br/>" +
    "<button onclick=\"detailView.resizeDetailView(data[" + rowIdx + "])\">Resize detail view</button>" +
    "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" +
    "This is to make the loaded area longer" +
    "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" +
    "Done Yay" +
    "</div>" +
    "</div>";

  detailView.onAsyncResponse.notify({
    "item": itemDetail,
    // detailView Ignores any template and use what's passed through instead
    "detailView": temp,
  }, undefined, this);
}

/** Callback to open a city from row detail "Task 5" */
function openCity(evt, cityName, rowIdx) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  /* You can save the detail view here OR on the filter keyup
   the reason we save the detail view is to keep the entire content of the view
   before doing certain action like filtering/sorting/reorderingColumn/...
  */
  // detailView.saveDetailView(data[rowIdx]);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function comparer(a, b) {
  var x = a[sortcol],
    y = b[sortcol];
  return (x == y ? 0 : (x > y ? 1 : -1));
}

function createData() {
  for (var i = 0; i < 50; i++) {
    data[i] = new DataItem(i);
    dataHolder[i] = data[i];
  }
  return data, dataHolder;
}

function buildGrid() {
  // prepare the data
  data = [];
  dataHolder = [];
  createData();
  dataView = new Slick.Data.DataView();

  // create the row detail plugin
  detailView = new Slick.Plugins.RowDetailView({
    cssClass: "detailView-toggle",
    preTemplate: loadingTemplate,
    postTemplate: loadView,
    process: simulateServerCall,
    useRowClick: false,
    // how many grid rows do we want to use for the detail panel
    // also note that the detail view adds an extra 1 row for padding purposes
    // example, if you choosed 6 panelRows, the display will in fact use 5 rows
    panelRows: adjustmentsOn ? 8 : 1
  });

  var checkboxSelector = new Slick.CheckboxSelectColumn({
    cssClass: "slick-cell-checkboxsel"
  });

  // push the plugin as the first column
  if(checkbox == false){
    columns.unshift(detailView.getColumnDefinition());
    columns.unshift(checkboxSelector.getColumnDefinition());
  }

  grid = new Slick.Grid("#myGrid", dataView, columns, options);

  //setting plugin's column dropdown to maxwidth
  grid.getColumns()[0].maxWidth = 20;
  grid.getColumns()[1].maxWidth = 20;


  // register the rowdetail plugin
  grid.setSelectionModel(new Slick.RowSelectionModel({
    selectActiveRow: false
  }));
  grid.registerPlugin(detailView);
  grid.registerPlugin(checkboxSelector);


  //only allowing single cell click instead of complete row
  // detailView.setOptions({
  //   loadOnce: detailView.loadOnce,
  //   useRowClick: false
  // })

  detailView.onBeforeRowDetailToggle.subscribe(function (e, args) {
    // console.log('before toggling row detail', args.item);

  });

  detailView.onAfterRowDetailToggle.subscribe(function (e, args) {
    // console.log('after toggling row detail', args.item);

    if (args.item._collapsed) {
      // destroyAssigneeOnClick(args.item.id);
      //   let closeRow = dataView.getPagingInfo().pageSize;
      // dataView.setPagingOptions({pageSize : (closeRow-9)});
    } else {
      //   let openRow = dataView.getPagingInfo().pageSize;
      // dataView.setPagingOptions({pageSize : (openRow+9)});
    }
  });

  //collecting ids for selected grids
  grid.onSelectedRowsChanged.subscribe(function (e) {
    var selRows = grid.getSelectedRows();
    // add all newly selected rows to the selection
    for (var i = 0, l = selRows.length; i < l; i++) {
      var item = dataView.getItem(selRows[i]);
      if (item) {
        var rowId = item.id;
        if (selectedRowIds.indexOf(rowId) < 0) {
          selectedRowIds.push(rowId);
        }
      }
    }

    //check if a previously selected row has been deselected
    for (var i = 0, l = selectedRowIds.length; i < l; i++) {
      var row = dataView.getRowById(selectedRowIds[i]); // see if the selected row is available on the current page
      if (row && selRows.indexOf(row) < 0) {
        selectedRowIds.splice(i, 1); //remove row from array
      }
    }
  });

  // detailView.onAsyncEndUpdate.subscribe(function (e, args) {
  //   console.log('finished updating the post async template', args);
  //   hookAssigneeOnClick(args.item.id);
  // });

  //   var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

  // wire up model events to drive the grid
  dataView.onRowCountChanged.subscribe(function (e, args) {
    grid.updateRowCount();
    grid.render();
  });

  dataView.onRowsChanged.subscribe(function (e, args) {
    grid.invalidateRows(args.rows);
    grid.render();
  });

  // the following subscribers can be useful to Save/Re-Render a View
  // when it goes out of viewport or back to viewport range
  detailView.onRowOutOfViewportRange.subscribe(function (e, args) {
    destroyAssigneeOnClick(args.item.id);
  });

  detailView.onRowBackToViewportRange.subscribe(function (e, args) {
    hookAssigneeOnClick(args.item.id);
  });

  grid.onSort.subscribe(function (e, args) {
    sortdir = args.sortAsc ? 1 : -1;
    sortcol = args.sortCol.field;

    // using native sort with comparer
    // preferred method but can be very slow in IE with huge datasets
    dataView.sort(comparer, args.sortAsc);
  });

  $(grid.getHeaderRow()).on("change keyup", ":input", function (e) {
    var columnId = $(this).data("columnId");
    if (columnId != null) {
      /* we can save the detail view content before filtering (this will save on every keyup)
        OR you can save in other area of your code (like in the "openCity()" function)
        the reason we save the detail view is to keep the entire content of the view
        before doing certain action like filtering/sorting/reorderingColumn/...
        it's up to you to decide where and if you need to save the detail view
      */
      var expandedRows = detailView.getExpandedRows();
      expandedRows.forEach(function (row) {
        detailView.saveDetailView(row);
      });

      // keep filter in global variable & filter dataset by calling a refresh
      columnFilters[columnId] = $.trim($(this).val());
      dataView.refresh();
    }
  });

  grid.onHeaderRowCellRendered.subscribe(function (e, args) {
    $(args.node).empty();
    $("<input type='text'>")
      .data("columnId", args.column.id)
      .val(columnFilters[args.column.id])
      .appendTo(args.node);
  });

  resizer = new Slick.Plugins.Resizer({
      container: '#card-4', // DOM element selector, can be an ID or a class name

      // optionally define some padding and dimensions
      // rightPadding: 5,    // defaults to 0
      // bottomPadding: 10,  // defaults to 20
      // minHeight: 1000,     // defaults to 180
      // minWidth: 250,      // defaults to 300

      // you can also add some max values (none by default)
      // maxHeight: 1000
      // maxWidth: 2000
    },
    // the 2nd argument is an object and is optional
    // you could pass fixed dimensions, you can pass both height/width or a single dimension (passing both would obviously disable the auto-resize completely)
    // for example if we pass only the height (as shown below), it will use a fixed height but will auto-resize only the width
    // { height: 300 }
  );

  // initialize the model after all the events have been hooked up
  // grid.registerPlugin(resizer);
  grid.init();
  dataView.beginUpdate();
  dataView.setItems(data);
  dataView.setFilter(filter);
  dataView.endUpdate();
  //   dataView.setPagingOptions({
  //     pageSize: 50
  //   });
  dataHolder.forEach(el => {
    detailView.expandDetailView(el);
  });
  setTimeout(()=>{
    grid.resizeCanvas()
  grid.autosizeColumns()
  }, 500);

}

buildGrid();