app.factory('Antecedente', ['$resource', function($resource){
	return $resource( _constants.basePath + '/data/antecedentes.json', {}, {
		'get': {method: 'GET', isArray: true}
	})
}]);