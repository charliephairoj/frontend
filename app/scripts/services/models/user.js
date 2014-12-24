
angular.module('employeeApp.services')
.factory('User', ['$resource', function($resource) {
	return $resource('/api/v1/user/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
}]);
