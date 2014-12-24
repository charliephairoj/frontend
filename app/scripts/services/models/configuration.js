
angular.module('employeeApp.services')
.factory('Configuration', ['$resource', function($resource) {
	return $resource('/api/v1/configuration/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
