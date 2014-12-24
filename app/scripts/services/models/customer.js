
angular.module('employeeApp.services')
.factory('Customer', ['$resource', function($resource) {
	return $resource('/api/v1/customer/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
