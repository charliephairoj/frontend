
angular.module('employeeApp.services')
.factory('SupplierContact', ['$resource', function(eaResource) {
	return eaResource('supplier_contact/:id', {id:'@id'});
}]);
