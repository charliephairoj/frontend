
angular.module('employeeApp.services')
.factory('Foam', ['eaResource', function(eaResource) {
    return eaResource('foam/:id', {id:'@id'});   
}]);
