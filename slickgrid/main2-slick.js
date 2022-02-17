var dataView;
var grid;
var data = [];
var options = {
    enableCellNavigation: true,
    enableColumnReorder: false,
    showHeaderRow: true,
    headerRowHeight: 30,
    explicitInitialization: true,
    enableAutoSizeColumns: true,

};
var columns = [];
var columnFilters = {};

for (var i = 0; i < 10; i++) {
    columns.push({
        id: i,
        name: String.fromCharCode("A".charCodeAt(0) + i),
        field: i,
        width: 60
    });
}


function filter(item) {
    for (var columnId in columnFilters) {
        if (columnId !== undefined && columnFilters[columnId] !== "") {
            var c = grid.getColumns()[grid.getColumnIndex(columnId)];
            if (item[c.field] != columnFilters[columnId]) {
                return false;
            }
        }
    }
    return true;
}

$(function () {
    for (var i = 0; i < 100; i++) {
        var d = (data[i] = {});
        d["id"] = i;
        for (var j = 0; j < columns.length; j++) {
            d[j] = Math.round(Math.random() * 10);
        }
    }

    dataView = new Slick.Data.DataView();
    grid = new Slick.Grid("#myGrid2", dataView, columns, options);
    var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));



    dataView.onRowCountChanged.subscribe(function (e, args) {
        grid.updateRowCount();
        grid.render();
    });

    dataView.onRowsChanged.subscribe(function (e, args) {
        grid.invalidateRows(args.rows);
        grid.render();
    });


    $(grid.getHeaderRow()).on("change keyup", ":input", function (e) {
        var columnId = $(this).data("columnId");
        if (columnId != null) {
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

    grid.init();

    dataView.beginUpdate();
    dataView.setItems(data);
    dataView.setFilter(filter);
    dataView.endUpdate();

    // dataView.setPagingOptions({pageSize: 50});

    grid.autosizeColumns();
})