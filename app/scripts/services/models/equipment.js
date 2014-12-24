
angular.module('employeeApp.services')
.factory('Equipment', ['$resource', '$http', function($resource) {
	return $resource('/api/v1/equipment/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);