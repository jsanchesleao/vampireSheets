app.controller('SheetController', ['$scope', 'Cla', 'Arquetipo','Caminho', 'Disciplina', 'Antecedente',function($scope, Cla, Arquetipo, Caminho, Disciplina, Antecedente){

    $scope.nomeCaminho = $scope.sheet.caminho.info.nome;

    $scope.clas = Cla.get();
    $scope.arquetipos = Arquetipo.get();
    $scope.caminhos = Caminho.get();
    $scope.disciplinas = Disciplina.get();
    $scope.antecedentes = Antecedente.get();

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
    		level: 0
    	});
    };

    $scope.addAntecedente = function(){
        $scope.sheet.antecedentes.push({
            nome: '',
            level: 0
        });
    };

    $scope.removerAntecedente = function(index){
    	if( $scope.sheet.antecedentes[index].nome == '' ){
    		$scope.sheet.antecedentes.splice(index, 1);
    	}
    }

    $scope.addTrait = function(){
        $scope.sheet.outrasCaracteristicas.push('');
    };

    $scope.removeTrait = function(index){
        if( $scope.sheet.outrasCaracteristicas[index] == '' ){
            $scope.sheet.outrasCaracteristicas.splice(index, 1);
        }
    }

}]);