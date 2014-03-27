app.controller('LoadFileController', ['$scope', 'sheetFactory', '$rootScope', '$location', function($scope, sheetFactory, $rootScope, $location){

    $scope.message = 'Load File';

    $rootScope.sheet = sheetFactory.create();

    $scope.loadFile = function(){
    	if( $scope.file ){
            console.log($scope.file);
    		$rootScope.sheet = $scope.file;
    	}
        $location.path('/sheet');
    }

}]);