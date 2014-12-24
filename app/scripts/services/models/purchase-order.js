
angular.module('employeeApp')
.factory('PurchaseOrder', ['$resource', function($resource) {
	return $resource('/api/v1/purchase-order/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		}
	});   
}]);
