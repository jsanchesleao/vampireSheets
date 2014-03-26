app.factory('Arquetipo', ['$resource', function($resource){
	return $resource( _constants.basePath + '/data/arquetipos.json', {}, {
		'get': {method: 'GET', isArray: true}
	})
}]);