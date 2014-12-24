
angular.module('employeeApp')
.factory('Attendance', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/attendance/:id', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);