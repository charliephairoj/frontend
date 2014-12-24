
angular.module('employeeApp.services')
.factory('Permission', ['$resource', function($resource) {
    return $resource('/api/v1/permission/:id', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
    });     
}]);
