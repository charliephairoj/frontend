
angular.module('employeeApp.services')
.factory('Estimate', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/estimate/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);