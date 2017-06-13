var app = angular.module('MyApp',['datatables']);
app.controller('homeCtrl',['$scope', '$http', 'DTOpionsBuilder', 'DTColumnBuilder',
    function ($scope, $http, DTOpionsBuilder, DTColumnBuilder) {
        $scope.dtColumns = [
            DTColumnBuilder.newColumn("BookID", "Book ID"),
            DTColumnBuilder.newColumn("Name", "Name"),
            DTColumnBuilder.newColumn("Author", "Author"),
            DTColumnBuilder.newColumn("Year", "Year"),
            DTColumnBuilder.newColumn("Genre", "Genre"),
            DTColumnBuilder.newColumn("Page", "Page"),
            DTColumnBuilder.newColumn("Price", "Price"),
            DTColumnBuilder.newColumn("Country", "Country"),
        ]

        $scope.dtOpions = DTOptionsBuilder.newOptions().withOption('ajax', {
            url: "/home/getdata",
            type: "POST"
        })
        .withPaginationType('full_numbers')
        .withDisplayLength(10);
    }])