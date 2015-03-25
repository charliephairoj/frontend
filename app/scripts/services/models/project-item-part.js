
/**
 * @ngdoc service
 * @name frontendApp.models/projectItemPart
 * @description
 * # models/projectItemPart
 * Factory in the frontendApp.
 */
angular.module('employeeApp')
.factory('ProjectItemPart', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/project-part/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
