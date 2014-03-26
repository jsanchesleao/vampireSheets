app.controller('LoadFileController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){

    $scope.message = 'Load File';

    $rootScope.sheet = {
    	attrs: {
	    	forca : 1,
	    	destreza: 1, 
	    	vigor: 1,
	    	carisma: 1,
	    	manipulacao: 1,
	    	aparencia: 1,
	    	percepcao: 1,
	    	inteligencia: 1,
	    	raciocinio: 1
	    },
	    virt: {
	    	conscienciaConviccao: 1,
	    	autoControleInstinto: 1,
	    	coragem: 1
	    },
	    disciplinas: [],
	    caminho: {
	    	info:{
	    		conscienciaConviccao: 'Consciencia/Conviccao',
		    	autocontroleInstinto: 'Auto Controle/Instinto',
		    	nome: ""
	    	},
	    	level: 0
	    }
    };

    $scope.loadFile = function(){
        $rootScope.sheet = $scope.file;
        $location.path('/sheet');
    }

}]);