
angular.module('employeeApp.services')
.factory('Project', ['$resource', function($resource) {
    return $resource('/api/v1/project/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
