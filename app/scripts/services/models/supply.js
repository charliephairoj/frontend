
angular.module('employeeApp')
.factory('Supply', ['$resource', function($resource) {
	return $resource('/api/v1/supply/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
		add: {
			method: 'POST',
			params: {action: 'add'}, 
		},
		subtract: {
			method: 'POST',
			params: {action: 'subtract'},
		}
	});   
}]);
