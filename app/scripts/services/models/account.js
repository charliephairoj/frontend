
angular.module('employeeApp.services')
.factory('Account', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/account/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
