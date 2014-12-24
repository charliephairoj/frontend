
angular.module('employeeApp.services')
.factory('Contact', ['eaResource', function(eaResource) {
    return eaResource('contact/:id/', {id:'@id'});   
}]);
