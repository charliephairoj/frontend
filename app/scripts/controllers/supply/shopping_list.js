
angular.module('employeeApp')
.controller('SupplyShoppingListCtrl', ['$scope', '$http', function ($scope, $http) {
	var promise = $http.get('/api/v1/supply/shopping_list');
	promise.then(function (response) {
		$scope.supplies = response.data;
	});
}]);
