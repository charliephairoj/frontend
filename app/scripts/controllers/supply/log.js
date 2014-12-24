
angular.module('employeeApp')
.controller('SupplyLogCtrl', ['$scope', '$http', function ($scope, $http) {
	var promise = $http.get('/api/v1/supply/log');
	promise.then(function (response) {
		$scope.logs = response.data;
	});
}]);
