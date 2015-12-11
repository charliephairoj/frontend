
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
	$scope.$watch('resources', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			var notification = Notification.display(resp.description + " status updated.", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				
				var update = function () {
					var notification = Notification.display('Updating ' + this.description + '.', false);
					
					this.$update(postUpdate);	
				};
				
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							if ((newVal[i].width != oldVal[i].width) || (newVal[i].depth != oldVal[i].depth) || (newVal[i].height != oldVal[i].height)) {
							
							
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
