/*
 * All shipped orders view
 */
angular.module('employeeApp')
.controller('OrderShippingViewCtrl', ['$scope', 'Shipping', '$filter', 'Notification',
function ($scope, Shipping, $filter, Notification) {
	
	/*
	 * Vars and flags
	 */
	var fetching = true;
	
	Notification.display('Loading shipping manifests...', false);
	
	/*
	 * Get an array of shipping manifests from the server
	 */
	$scope.shippingList = Shipping.query(function (resources) {
		fetching = false;
		Notification.hide();
	});
	
	/*
	 * Search the server 
	 * 
	 * The controller will send a GET request to the server
	 * with the query string whenever the "$scope.query" changes
	 * and when it is not undefined
	 */
	$scope.$watch('query', function (q) {
		if (q) {
			Shipping.query({limit: 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.shippingList.indexOfById(resources[i].id) == -1) {
						$scope.shippingList.push(resources[i]);
					}
				}
			});
		}
	});
	
	/*
	 * Load more shipping manifests
	 * 
	 * The function will request more manifests based on the current number 
	 * and the offset. The number of new manifests is limited to 20, which can be 
	 * changed via the parameters. This is intended to be used in conjuction with 
	 * the "on-scroll-end" directive
	 */
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more shipping manifests...', false);
			Shipping.query({
				offset: $scope.shippingList.length,
				limit: 20
			}, function (resources) {
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.shippingList.push(resources[i]);
				}
			});
		}
	};
}]);
