var app = angular.module("datamigration", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/home.html"
    })
    .when("/national", {
        templateUrl : "html/national.html"
    })
    .when("/international", {
        templateUrl : "html/international.html"
    });
});
