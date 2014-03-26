app.controller('SheetController', ['$scope', function($scope){

    $scope.downloadSheet = function(){
        var name = prompt("Enter file name: ");
        var blob = new Blob([JSON.stringify( $scope.sheet )], {type: "application/json;charset=utf-8"});
        saveAs(blob,  name + ".json");
    };

}]);