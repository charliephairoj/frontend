
/**
 * @ngdoc service
 * @name frontendApp.models/productSupply
 * @description
 * # models/productSupply
 * Service in the frontendApp.
 */
angular.module('employeeApp')
.factory('ProductSupply', ['$resource', function($resource) {
	return $resource('/api/v1/product/supply/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
	});   
}]);