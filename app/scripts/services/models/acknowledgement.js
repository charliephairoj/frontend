
angular.module('employeeApp.services')
.factory('Acknowledgement', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/acknowledgement/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
