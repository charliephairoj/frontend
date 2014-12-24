
angular.module('employeeApp')
.controller('OrderAcknowledgementWeeklyCtrl', ['$scope', 'Acknowledgement', 
function ($scope, Acknowledgement) {
	$scope.startDate = new Date();
	$scope.endDate = new Date();
	$scope.endDate.setDate($scope.endDate.getDate() + 7);
	$scope.ackList = Acknowledgement.query({
		start_date: $scope.startDate.toISOString(),
		end_date: $scope.endDate.toISOString()
	});
}]);
