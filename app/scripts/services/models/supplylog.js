
angular.module('employeeApp')
.factory('SupplyLog', ['$resource', function($resource) {
	return $resource('/api/v1/log/:id/', {id:'@id'}, {
		
	});   
}]);