
angular.module('employeeApp')
.controller('SupplyLogCtrl', ['$scope', '$http', 'SupplyLog', 
function ($scope, $http, SupplyLog) {
	$scope.logs = SupplyLog.query();
}]);
