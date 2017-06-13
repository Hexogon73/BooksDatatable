var app = angular.module('MyApp', ['datatables']);
app.controller('homeCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
    function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtColumns = [
            //here We will add .withOption('name','column_name') for send column name to the server 
            DTColumnBuilder.newColumn("BookID", "Book ID").withOption('name', 'BookID'),
            DTColumnBuilder.newColumn("Name", "Name").withOption('name', 'Name'),
            DTColumnBuilder.newColumn("Author", "Author").withOption('name', 'Author'),
            DTColumnBuilder.newColumn("Year", "Year").withOption('name', 'Year'),
            DTColumnBuilder.newColumn("Genre", "Genre").withOption('name', 'Genre'),
            DTColumnBuilder.newColumn("Page", "Page").withOption('name', 'Page'),
            DTColumnBuilder.newColumn("Price", "Price").withOption('name', 'Price'),
            DTColumnBuilder.newColumn("Country", "Country").withOption('name', 'Country')
        ]

        $scope.dtOpions = DTOptionsBuilder.newOptions().withOption('ajax', {
            dataSrc: "data",
            url: "/home/getdata",
            type: "POST"
        })
        .withOption('processing', true) //for show progress bar
        .withOption('serverSide', true) // for server side processing
        .withPaginationType('full_numbers') // for get full pagination options // first / last / prev / next and page numbers
        .withDisplayLength(10) // Page size
        .withOption('aaSorting', [0, 'asc']) // for default sorting column // here 0 means first column
    }])