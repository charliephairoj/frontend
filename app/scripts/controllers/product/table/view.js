
angular.module('employeeApp')
.controller('ProductTableViewCtrl', ['$scope', 'Table', 'Notification', function ($scope, Table, Notification) {
	var fetching = true;
	Notification.display('Loading Tables...');
    
	$scope.tableList = Table.query(function () {
		fetching = false;
		Notification.hide();
	});
    
	$scope.$watch('query', function (q) {
		if (q) {
			Table.query({q: q, limit: 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.tableList.indexOfById(resources[i]) == -1) {
						$scope.tableList.push(resources[i]);
					}
				}
			});
		}
	});
    
	$scope.loadNext = function () {
		if (!fetching) {
			Table.query({
				offset: $scope.tableList.length,
				limit: 50
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					$scope.tableList.push(resources[i]);
				}
			});
		}
	};
}]);
