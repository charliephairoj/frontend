
/**
 * @ngdoc service
 * @name frontendApp.RoomItem
 * @description
 * # RoomItem
 * Factory in the frontendApp.
 */
angular.module('employeeApp.services')
.factory('RoomItem', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/room-item/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);
