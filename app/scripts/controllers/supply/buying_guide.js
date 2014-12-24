
angular.module('employeeApp')
.controller('SupplyBuyingGuideCtrl', ['$scope', 'Supply', '$http', function ($scope, Supply, $http) {
	
	var d;
	/*
	 * Prepare date for query
	 *
	 * We add a condition so that the request can be more easily tested
	 * with the correct date
	 */
	if ($scope.d) {
		d = $scope.d;
	} else {
		d = new Date();
		d.setDate(d.getDate() - 21);
	}
    
	$scope.supplies = Supply.query({
		'log__action':'SUBTRACT',
		'log__timestamp__gt': d.toISOString()
	});
	
}]);
