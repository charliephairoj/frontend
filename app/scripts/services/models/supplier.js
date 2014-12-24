
angular.module('employeeApp.services')
.factory('Supplier', ['$resource',function($resource) {
	return $resource('/api/v1/supplier/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
