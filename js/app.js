var app = angular.module('vampire', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: '/views/load.html',
        controller: 'LoadFileController'
    }).
    when('/sheet', {
        templateUrl: '/views/sheet.html',
        controller: 'SheetController'
    }).
    otherwise({
        redirectTo: '/'
    })

}]);