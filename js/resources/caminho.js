app.factory('Caminho', ['$resource', function($resource){
	return $resource( _constants.basePath + '/data/caminhos.json', {}, {
		'get': {method: 'GET', isArray: true}
	})
}]);