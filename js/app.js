var app = angular.module('vampire', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: _constants.basePath + '/views/load.html',
        controller: _constants.basePath + 'LoadFileController'
    }).
    when('/sheet', {
        templateUrl: _constants.basePath + '/views/sheet.html',
        controller: _constants.basePath + 'SheetController'
    }).
    otherwise({
        redirectTo: '/'
    })

}]);