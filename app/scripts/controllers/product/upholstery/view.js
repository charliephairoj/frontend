
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
	
	/*
	 * Watch for changes in the status of the acknowledgement
	 */
	// Helper function to upate an object bind to the function
	function update() {
		var notification = Notification.display('Updating ' + this.description + '.', false);
		this.$update(postUpdate);	
	};
	
	//Help function to test object equality
	function equals(newObj, oldObj) {
		
		//Create new array of arguments
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		// Loop through keys of the newest obj, and test that it is not
		// in the list of arguments
		for (i in newObj) {
			if (args.indexOf(i) === -1 && i.indexOf('$') === -1) {
				if (oldObj[i] != newObj[i]) {
					return false;
				}
			}
		}
		
		return true;
	}
	
	$scope.$watch('resources', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			var notification = Notification.display(resp.description + " status updated.", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				
				
				
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							if (equals(newVal, oldVal, 'images', 'last_modified', 'schematic', 'image')) {
								setTimeout(update.bind(newVal[i]), 600);
							}
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		
	}, true);
   
}]);
