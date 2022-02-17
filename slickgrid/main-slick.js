var dataView,
data = [],
grid,
    columns = [
  {id: "title", name: "Title", field: "title", minWidth: 100},
  {id: "duration", name: "Duration", field: "duration", minWidth: 100},
  {id: "%", name: "% Complete", field: "percentComplete", minWidth: 100},
  {id: "start", name: "Start", field: "start", minWidth: 100},
  {id: "finish", name: "Finish", field: "finish", minWidth: 100},
  {id: "effort-driven", name: "Effort Driven", field: "effortDriven", minWidth: 100},
  {id: "tstart", name: "Start", field: "tid", minWidth: 100},
  {id: "tfinish", name: "Finish", field: "ttitle", minWidth: 100},
  {id: "teffort-driven", name: "Effort Driven", field: "tduration", minWidth: 100}
],

 options = {
  enableCellNavigation: true,
  enableColumnReorder: false,
  enableAddRow: false,
  enableAutoSizeColumns: true,
  // autoHeight: true
};

$(function () {
  for (var i = 0; i < 500; i++) {
    data[i] = {
      id:"id"+i,
      title: "Task " + i,
      duration: "5 days",
      percentComplete: Math.round(Math.random() * 100),
      start: "01/01/2009",
      finish: "01/05/2009",
      effortDriven: (i % 5 == 0),
      tid:"id"+i,
      ttitle: "Task " + i,
      tduration: "5 days",
    };
  }
// grid = new Slick.Grid("#myGrid", data, columns, options);
dataView = new Slick.Data.DataView();
grid = new Slick.Grid("#myGrid", dataView, columns, options);
var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

// wire up model events to drive the grid
dataView.onRowCountChanged.subscribe(function (e, args) {
  grid.updateRowCount();
  grid.render();
});

dataView.onRowsChanged.subscribe(function (e, args) {
  grid.invalidateRows(args.rows);
  grid.render();
});

dataView.setItems(data);
dataView.setPagingOptions({pageSize: 50});

grid.autosizeColumns();

});


