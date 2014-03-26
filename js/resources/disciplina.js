app.factory('Disciplina', ['$resource', function($resource){
	return $resource( _constants.basePath + '/data/disciplinas.json', {}, {
		'get': {method: 'GET', isArray: true}
	})
}]);