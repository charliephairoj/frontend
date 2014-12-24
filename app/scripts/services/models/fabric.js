
angular.module('employeeApp.services')
.factory('Fabric', ['$resource', function($resource) {
	return $resource('/api/v1/fabric/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
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
