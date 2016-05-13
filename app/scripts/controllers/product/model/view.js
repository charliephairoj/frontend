
angular.module('employeeApp')
.controller('ProductModelViewCtrl', ['$scope', 'Model', 'Notification', '$log', '$location', function ($scope, Model, Notification, $log, $location) {
	
	var fetching = false;	
	/* 
	 * Set default search from search url
	 */
		
    $scope.models = Model.query(function () {

    });
    
    $scope.$watch('query.$.$', function (q) {
		if (q) {
			Model.query({q: q, limit: 10}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.models.indexOfById(resources[i]) == -1) {
						$scope.models.push(resources[i]);
					}		
				}
			});
		}
	});
    
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more models...', false);
			fetching = true;
			Model.query({
				limit: 50,
				offset: $scope.models.length
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					$scope.models.push(resources[i]);
				}
				fetching = false;
			}, function (e) {
				$log.error(e);
				fetching = false;
			});
		}
	};
	
	/*
	 * Watch for changes of a model
	 */
	// Helper function to update the model
	var updateTimer = null;
	var update = function () {
		var notification = Notification.display('Updating ' + this.model + '.', false);
		
		this.$update(postUpdate);	
	};
	
	// Callback to run when the acknowledgement is finished updating
	function postUpdate (resp) {
		var notification = Notification.display(resp.model + " status updated.", 2000);
	}
	
	//Help function to test object equality
	function equals(newObj, oldObj) {
		
		//Create new array of arguments
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		for (i in newObj) {
			if (args.indexOf(i) === -1 && i.indexOf('$') === -1) {
				if (oldObj[i] != newObj[i]) {
					return false;
				}
			}
		}
		
		return true;
	}
	
	$scope.$watch('models', function (newVal, oldVal) {
		if (newVal && oldVal) {
			try{				
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							if (!equals(newVal[i], oldVal[i], 'images', 'last_modified')) {
								clearTimeout(updateTimer);
								updateTimer = setTimeout(update.bind(newVal[i]), 600);
							}
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		
	}, true);
	
	$scope.$on('$destroy', function () {
		
	});
    
}]);
