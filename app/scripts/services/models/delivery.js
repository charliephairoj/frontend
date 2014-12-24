
angular.module('employeeApp')
.factory('Delivery', ['eaResource', function(eaResource) {
    return eaResource('delivery/:id', {id:'@id'});   
}]);
