
angular.module('employeeApp')
.controller('OrderAcknowledgementViewCtrl', ['$scope', 'Acknowledgement', '$location', '$filter', 'KeyboardNavigation', '$mdToast',
function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, $mdToast) {
	
	
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
		
	var loadingToast = $mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Loading acknowledgements...')
			.hideDelay(0));

	$scope.query = {};
	
	//Poll the server for acknowledgements
	$scope.acknowledgements = Acknowledgement.query({limit: 20}, function (e) {
		$mdToast.hide();
		fetching = false;
		changeSelection(index);
	});

	$scope.setCategory = function ($category) {
		$scope.safeApply(function () {
			
			$scope.query.status = $category;
		});
		
		//Determines the paramters for the GET request
		var params = {limit:20, status: $category};
		try {
			if ($scope.query.$.$ ) {
				params.q = $scope.query.$.$;
			}
		} catch (e) {
			
		}
		
		
		//Make a GET request to the acknowledgement server
		Acknowledgement.query(params, function (resources) {
			for (var i = 0; i < resources.length; i++) {
				if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
					$scope.acknowledgements.push(resources[i]);
				}
			}
		});
	};
	/*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
	$scope.$watch('query.$.$', function (q) {
		if (q) {
			$location.search('q', q);
			Acknowledgement.query({q: q, limit: q ? q.length : 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
						$scope.acknowledgements.push(resources[i]);
					}
				}
				index = 0;
				changeSelection(index);
				
			});
		}
	});
	
	/* 
	 * Set default search from search url
	 */
	if (search.q) {
		$scope.query = {$: {$: search.q}};
		$scope.safeApply();
	}

	//Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			var moreAckToast = $mdToast.show($mdToast
					.simple()
					.position('top right')
					.hideDelay(0)
					.content('Loading more acknowledgements...'));
				
			//Determine parameters for the GET call	
			var params = {
				limit: 50, 
				offset: $scope.acknowledgements.length
			};
			if ($scope.query.status) {
				params.status = $scope.query.status;
			}
			
			//Make a GET request to the server
			Acknowledgement.query(params, function (resources) {
				fetching = false;
				$mdToast.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.acknowledgements.push(resources[i]);
				}
			});
		}
	};
	
	/*
	 * Navigate to the details page for an acknowledgement
	 */
	$scope.navigate = function (id) {
		$location.path('/order/acknowledgement/' + id);
	};
	
	/*
	 * Watch for changes in the status of the acknowledgement
	 */
	$scope.$watch('acknowledgements', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			$mdToast.show($mdToast
						.simple()
						.position('top right')
						.hideDelay(2000)
						.content('Acknowledgement #' + resp.id + " status updated to '" + resp.status.toLowerCase() + "'"));
		}
		
		if (newVal && oldVal) {
			
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i].id === oldVal[i].id) {
						if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
							$mdToast.show($mdToast
											.simple()
											.position('top right')
											.hideDelay(0)
											.content('Updating Acknowledgement #' + newVal[i].id + ' status...'));
							newVal[i].$update(postUpdate);
						}
					}
				}
			} catch (e) {
				console.debug(e);
			}
			
		}
		
	}, true);
	
	function filter(array) {
		return $filter('filter')(array, $scope.query);
	}
			
	function changeSelection(i) {
				
		$scope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.acknowledgements)[i];
			
			if (currentSelection) {
				currentSelection.$selected = true;
			}
		});
	
		var selection = $('.item.selected');
		var container = selection.parents('.outer-container');
		var scrollTop = container.scrollTop();
		var cHeight = container.innerHeight();
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		}
				
	}
	
	var keyboardNav = new KeyboardNavigation();
			
	keyboardNav.ondown = function () {
		if (index < filter($scope.acknowledgements).length - 1) {
			index += 1;
			changeSelection(index);
		}
	};
	
	keyboardNav.onup = function () {
		if (index !== 0) {
			index -= 1;
			changeSelection(index);
		}
	};
	
	keyboardNav.onenter = function () {
		$scope.safeApply(function () {
			$location.path('/order/acknowledgement/' + currentSelection.id);
		});
	};
	
	keyboardNav.enable();
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);
