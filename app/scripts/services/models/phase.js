
/**
 * @ngdoc service
 * @name frontendApp.models/phase
 * @description
 * # models/phase
 * Factory in the frontendApp.
 */
angular.module('employeeApp')
.factory('Phase', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/phase/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
