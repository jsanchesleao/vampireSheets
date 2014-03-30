app.controller('SheetController', ['$scope','sheetFactory', 'Cla', 'Arquetipo','Caminho', 'Disciplina', 'Antecedente',function($scope, sheetFactory, Cla, Arquetipo, Caminho, Disciplina, Antecedente){

    $scope.sheet = $scope.sheet || sheetFactory.create();
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
    };

    $scope.downloadSheet = function(){
        var name = prompt("Enter file name: ");
        if(!name) return;
        var blob = new Blob([JSON.stringify( $scope.sheet )], {type: "application/json;charset=utf-8"});
        saveAs(blob,  name + ".json");
    };

    $scope.downloadAllSheets = function(){
        var name = prompt("Enter document name: ");
        if(!name) return;
        var blob = new Blob([JSON.stringify( $scope.loadedSheets )], {type: "application/json;charset=utf-8"});
        saveAs(blob,  name + ".json");
    };

    $scope.addDisciplina = function(){
    	$scope.sheet.disciplinas.push({
    		nome: '',
    		level: 0
    	});
    };

    $scope.removerDisciplina = function(index){
        if( $scope.sheet.disciplinas[index].nome == '' ){
            $scope.sheet.disciplinas.splice(index, 1);
        }
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
    };

    $scope.addTrait = function(){
        $scope.sheet.outrasCaracteristicas.push('');
    };

    $scope.removeTrait = function(index){
        if( $scope.sheet.outrasCaracteristicas.length <= 5 ) return;
        if( $scope.sheet.outrasCaracteristicas[index] == '' ){
            $scope.sheet.outrasCaracteristicas.splice(index, 1);
        }
    };

    $scope.addArma = function(){
        $scope.sheet.armas.push({});
    };

    $scope.removeArma = function(index){
        if($scope.sheet.armas.length > 3){
            $scope.sheet.armas.splice(index, 1);
        }
        else{
            $scope.sheet.armas[index] = {};
        }
    };


    $scope.fileToLoad = {};
    $scope.loadedSheets = [];

    $scope.pushLoadedSheet = function(data){
        if( data.constructor === Array ){
            for( var i = 0; i < data.length; i++){
                $scope.loadedSheets.push(data[i]);
            }
        }
        else{
            $scope.loadedSheets.push(data);
        }
    };

    $scope.selectSheet = function(sheet){
        $scope.sheet = sheet;
        if( $scope.sheet.caminho && $scope.sheet.caminho.info ){
            $scope.nomeCaminho = $scope.sheet.caminho.info.nome;
        }
    };

    $scope.removeSheet = function(index){
        if(confirm("Excluir ficha?")){
            $scope.loadedSheets.splice(index, 1);
        }
    };

    $scope.newSheet = function(){
        var sheet = sheetFactory.create();
        $scope.loadedSheets.push(sheet);
        $scope.selectSheet(sheet);
    }

}]);