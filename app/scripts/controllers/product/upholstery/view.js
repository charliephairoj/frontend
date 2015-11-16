
angular.module('employeeApp')
.controller('ProductUpholsteryViewCtrl', ['$scope', 'Upholstery', 'Notification', '$filter', '$location',
function ($scope, Upholstery, Notification, $filter, $location) {
	
	var fetching = false;
	
    Notification.display('Loading Upholstery...', false);
    
    $scope.resources = Upholstery.query({limit: 20}, function () {
        Notification.hide();
    });
    
    $scope.$watch('query', function (q) {
		if (q) {
			Upholstery.query({q: q, limit: 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.resources.indexOfById(resources[i]) == -1) {
						$scope.resources.push(resources[i]);
					}
				}
			});
		}
	});
    
	$scope.loadNext = function () {
		if (!fetching) {
			var note = Notification.display('Loading more upholstery...', 6000);
			
			var params = {
				offset: $scope.resources.length,
				limit: 10
			};
			
			if ($scope.query) {
				params.q = $scope.query;
			}
			
			Upholstery.query(params, function (resources) {
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.resources.push(resources[i]);
				}
			});
		}
	};
   
}]);
