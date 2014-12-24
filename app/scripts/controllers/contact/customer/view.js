
angular.module('employeeApp')
.controller('ContactCustomerViewCtrl', function ($scope, Customer, Notification, $location, $filter) {
	
	var fetching = false;
    //Display system notification
    Notification.display('Loading Customers...', false);
    
    //Poll the server for customers
    $scope.customers = Customer.query(function () {
        Notification.hide();
    });
    
    /*
     * Searches the server
     * 
     * This function will search the server via GET
     * with the query string as a parameter
     * if the query string is not undefined
     * 
     * The resources returned are then added to the 
     * list of they are are not already in the list
     */
    $scope.$watch('query', function (q) {
		if (q) {
			Customer.query({q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.customers.indexOfById(resources[i]) == -1) {
						$scope.customers.push(resources[i]);
					}
				}
			});
		}
	});
    
    $scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			Customer.query({
				offset: $scope.customers.length,
				limit: 50
			}, function (resources) {
				fetching = false;
				for (var i = 0; i < resources.length; i++) {
					$scope.customers.push(resources[i]);
				}
			});
		}
	};
    
    
    
    
   
});
