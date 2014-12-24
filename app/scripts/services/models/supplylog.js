
angular.module('employeeApp')
.factory('SupplyLog', ['$resource', function($resource) {
	return $resource('/api/v1/supply/:id/:action', {id:'@id'}, {
		
	});   
}]);