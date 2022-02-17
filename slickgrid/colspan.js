var grid,
data = [],
 columns = [
    {id: "title", name: "Title", field: "title", maxWidth:100},
    {id: "duration", name: "Duration", field: "duration"},
    {id: "%", name: "% Complete", field: "percentComplete", selectable: false},
    {id: "start", name: "Start", field: "start"},
    {id: "finish", name: "Finish", field: "finish"},
    {id: "effort-driven", name: "Effort Driven", field: "effortDriven"},

  ],

 options = {
    enableCellNavigation: true,
  enableColumnReorder: false,
  enableAddRow: false,
  enableAutoSizeColumns: true,
  };

  $(function () {
    for (var i = 0; i < 500; i++) {
      if(i%2===1){
        data[i] = {
          id:i,
          title: "Task " + i,
          duration: "5 days",
          percentComplete: Math.round(Math.random() * 100),
          start: "01/01/2009",
          finish: "01/05/2009",
          effortDriven: (i % 5 == 0)
        };
      }
      else{
        data[i] ={
          id:i,
          title: `
          If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.`
        }
      }
      
    }


    data.getItemMetadata = function (row) {
      if (row % 2 === 1) {
        return {
          "columns": {
            "duration": {
              "colspan": 1
            }
          }
        };
      } else {
        return {
          "columns": {
            0: {
              "colspan": "*"
            }
          }
        };
      }
    };

    dataView = new Slick.Data.DataView();
grid = new Slick.Grid("#myGrid", data, columns, options);
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

    grid.setSelectionModel(new Slick.CellSelectionModel());
  });