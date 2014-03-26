app.factory('Cla', ['$resource', function($resource){
	return $resource( _constants.basePath + '/data/clas.json', {}, {
		'get': {method: 'GET', isArray: true}
	})
}]);