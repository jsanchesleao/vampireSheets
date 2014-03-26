app.controller('SheetController', ['$scope', function($scope){

    $scope.sheet = $scope.sheet || {};

    $scope.sheet.nome = "Jeff";

    $scope.downloadSheet = function(){
        var name = prompt("Enter file name: ");
        var blob = new Blob([JSON.stringify( $scope.sheet )], {type: "application/json;charset=utf-8"});
        saveAs(blob,  name + ".json");
    };

}]);