
angular.module('employeeApp.services')
.factory('Deal', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/deal/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
