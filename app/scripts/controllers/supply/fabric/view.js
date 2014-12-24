
angular.module('employeeApp')
.controller('SupplyFabricViewCtrl', ['$scope', 'Fabric', 'Notification', function ($scope, Fabric, Notification) {

	var fetching = true;
	
	$scope.fabrics = Fabric.query(function () {
		fetching = false;
	});
    
    /*
     * Search the server
     * 
     * The controller will send a GET query to the server
     * with the query string as a paramter whenever the 
     * 'scope.query' changes. 
     * 
     * The results are then added to the '$scope.fabrics', if it 
     * is not already in the list, which is matched by the item id
     */
    $scope.$watch('query', function (q) {
		if (q) {
			Fabric.query({q: q, limit: 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
						$scope.fabrics.push(resources[i]);
					}
				}
			});
		}
	});

	/*
	* Load more fabrics
	* 
	* This function will load more fabrics based on the 
	* current number of fabrics in the list, which becomes the offset. 
	* 
	* Note: The fabrics are not checked for duplicaiton before being added
	* to the list
	*/
    $scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			Notification.display('Loading more fabrics...', false);
			Fabric.query({
				offset: $scope.fabrics.length,
				limit: 50
			}, function (resources) {
				fetching = false;
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
						$scope.fabrics.push(resources[i]);
					}
				}
			});
		}
	};
}]);
