
angular.module('employeeApp')
.controller('ProductModelViewCtrl', ['$scope', 'Model', 'Notification', function ($scope, Model, Notification) {
	
	var fetching = false;
    $scope.modelList = Model.query(function () {

    });
    
    $scope.$watch('query', function (q) {
		if (q) {
			Model.query({q: q, limit: 10}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.modelList.indexOfById(resources[i]) == -1) {
						$scope.modelList.push(resources[i]);
					}		
				}
			});
		}
	});
    
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more models...', false);
			Model.query({
				limit: 50,
				offset: $scope.modelList.length
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					$scope.modelList.push(resources[i]);
				}
			});
		}
	};
    
}]);
