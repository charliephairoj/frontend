
angular.module('employeeApp')
.controller('ContactSupplierViewCtrl', ['$scope', 'Supplier', 'Notification', '$filter',
function ($scope, Supplier, Notification, $filter) {

	//System message
	Notification.display('Loading suppliers...', false);
	
	//Load initial suppliers
    $scope.suppliers = Supplier.query(function () {
		Notification.hide();
    });
    
    /*
     * Search Mechanism
     */
    $scope.$watch('query', function (q) {
		if (q) {
			Supplier.query({q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.suppliers.indexOfById(resources[i]) == -1) {
						$scope.suppliers.push(resources[i]);
					}
				}
			});
		}
	});
    
    $scope.loadNext = function () {
		Supplier.query({
			offset: $scope.suppliers.length,
			limit: 50
		}, function (resources) {
			for (var i = 0; i < resources.length; i++) {
				$scope.suppliers.push(resources[i]);
			}
		});
	};
	
}]);
