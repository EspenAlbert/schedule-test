document$.subscribe(function () {
    var tables = document.querySelectorAll("article table");
    tables.forEach(function (table) {
        // TableFilter requires a base_path; adjust as needed
        new TableFilter(table, {
            base_path: 'https://unpkg.com/tablefilter@0.7.3/dist/tablefilter/',
            alternate_rows: true,
            rows_counter: true,
            btn_reset: {
                text: 'Clear'
            },
            auto_filter: {
                delay: 300 //milliseconds
            },
            extensions: [{
                name: 'sort'
            }]
        }).init();
    });
});
