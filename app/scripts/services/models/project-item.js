
angular.module('employeeApp')
.factory('ProjectItem', ['eaResource', function(eaResource) {
    return eaResource('project/item/:id', {id:'@id'});   
}]);
