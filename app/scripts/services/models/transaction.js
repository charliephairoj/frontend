
angular.module('employeeApp.services')
.factory('Transaction', ['eaResource', function(eaResource) {
	return eaResource('transaction/:id', {id:'@id'});   
}]);
