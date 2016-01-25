
angular.module('employeeApp.services')
.factory('Shift', ['$resource', '$http', function($resource) {
	return $resource('/api/v1/shift/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);