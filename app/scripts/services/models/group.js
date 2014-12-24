
angular.module('employeeApp.services')
.factory('Group', ['$resource', function($resource) {
	return $resource('/api/v1/group/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
}]);
