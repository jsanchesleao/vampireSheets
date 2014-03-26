app.controller('SheetController', ['$scope', 'Caminho', function($scope, Caminho){

    $scope.sheet = $scope.sheet || {
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

    $scope.nomeCaminho = $scope.sheet.caminho.info.nome;

    $scope.caminhos = Caminho.get();

    $scope.selecionarCaminho = function(){
    	for(var i = 0; i < $scope.caminhos.length; i++){
    		if( $scope.caminhos[i].nome == $scope.nomeCaminho ){
    			$scope.sheet.caminho.info = $scope.caminhos[i];
    		}
    	}
    }

    $scope.downloadSheet = function(){
        var name = prompt("Enter file name: ");
        var blob = new Blob([JSON.stringify( $scope.sheet )], {type: "application/json;charset=utf-8"});
        saveAs(blob,  name + ".json");
    };

    $scope.addDisciplina = function(){
    	$scope.sheet.disciplinas.push({
    		nome: '',
    		valor: 0
    	});
    };

    $scope.removerDisciplina = function(index){
    	if( $scope.sheet.disciplinas[index].nome == '' ){
    		$scope.sheet.disciplinas.splice(index, 1);
    	}
    }

}]);