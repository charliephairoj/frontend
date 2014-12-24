
angular.module('employeeApp.services')
.factory('Model', ['$resource', function($resource) {
	return $resource('/api/v1/model/:id', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
