
angular.module('employeeApp.services')
.factory('Label', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/label/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
