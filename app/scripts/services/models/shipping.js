
angular.module('employeeApp.services')
.factory('Shipping', ['$resource', function($resource) {
	return $resource('/api/v1/shipping/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
