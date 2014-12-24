
angular.module('employeeApp')
.controller('OrderShippingTodayCtrl', ['$scope', 'Acknowledgement', function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.startDate.setHours(0, 0, 0);
    $scope.endDate = new Date();
    $scope.endDate.setHours(0, 0, 0);
    $scope.endDate.setDate($scope.endDate.getDate() + 1);
    $scope.ackList = Acknowledgement.query({
		start_date: $scope.startDate.toISOString(),
		end_date: $scope.endDate.toISOString()
	});
}]);
