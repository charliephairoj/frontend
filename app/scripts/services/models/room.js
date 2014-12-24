
angular.module('employeeApp.services')
.factory('Room', ['$resource', function($resource) {
    return $resource('/api/v1/room/:id', {id:'@id'});   
}]);
