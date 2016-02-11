

/**
 * @ngdoc service
 * @name frontendApp.models/payroll
 * @description
 * # models/payroll
 * Service in the frontendApp.
 */
angular.module('employeeApp.services')
.factory('Payroll', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/payroll/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);