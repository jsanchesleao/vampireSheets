app.controller('LoadFileController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $scope.message = 'Load File';

    $scope.loadFile = function(){
        $rootScope.sheet = $scope.file;
        $location.path('/sheet');
    }

}]);