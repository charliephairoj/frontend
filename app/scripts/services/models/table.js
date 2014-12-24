
angular.module('employeeApp.services')
.factory('Table', ['$resource', function($resource) {
    return $resource('api/v1/table/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
    });   
}]);

