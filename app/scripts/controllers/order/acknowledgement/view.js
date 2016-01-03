
angular.module('employeeApp')
.controller('OrderAcknowledgementViewCtrl', ['$scope', 'Acknowledgement', '$location', '$filter', 'KeyboardNavigation', 'Notification', '$log', 'Fabric',
function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, Notification, $log, Fabric) {
	
	
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
	
	var notification = Notification.display('Retrieving acknowledgements...', false);

	$scope.query = {};
	
	/* 
	 * Set default search from search url
	 */
	if (search.q) {
		$scope.safeApply(function () {
			$scope.query = {$: {$: search.q}};
		});
	}
	if (search.status) {
		$scope.safeApply(function () {
			$scope.query.status = search.status;
		});
	}
	
	
	//Poll the server for acknowledgements
	$scope.acknowledgements = Acknowledgement.query({limit: 20}, function (e) {
		notification.hide();
		fetching = false;
		changeSelection(index);
	});

	$scope.setCategory = function ($category) {
		$scope.safeApply(function () {
			$scope.query.status = $category;
		});
		
		//Set search paramters in url
		$location.search('status', $category);
		
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
			
			//createAcknowledgementMarkers()
			
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
	
	//Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			
			var notification = Notification.display('Retrieving more acknowledgements...', false);
	
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
				notification.hide();
				for (var i = 0; i < resources.length; i++) {
					if ($scope.acknowledgements.indexOfById(resources[i]) === -1) {
						$scope.acknowledgements.push(resources[i]);
					}
				}
				
				//createAcknowledgementMarkers();
			});
		}
	};
	
	//Help determine if an event occured for the given acknowledgement
	$scope.hasEvent = function (ack, e) {
		for (var i in ack.logs) {
			if (ack.logs[i].hasOwnProperty('message')) {
				if (ack.logs[i].message.indexOf(e) > -1) {
					return true;
				}
			}
			
		}
		
		return false;
	};
	
	
	/*
	 * Navigate to the details page for an acknowledgement
	 */
	$scope.navigate = function (id) {
		$location.path('/order/acknowledgement/' + id);
	};
	
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
	
	/**
	 * FABRIC SECTION
	 * 
	 * This section deals with the product listing and search
	 */
	
	// Inital list of upholsteries
	$scope.fabricSearchText = null;
	$scope.fabrics = Fabric.query({page_size:9999, limit:0});
	
	// Watch on productSearchText to get products from the server
	$scope.retrieveFabrics = function (query) {		
		if (query) {
			Fabric.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.fabrics.indexOfById(responses[i]) === -1) {
						$scope.fabrics.push(responses[i]);
					}
				}
			});
		}
	};
	
	/**
	 * Returns a list of fabric whose description matches the search term
	 *
	 * @public
	 * @param {String} query - Search term to apply against fabric.description
	 * @returns {Array} - An array of fabrics whose description matches the search term
	 */
	$scope.searchFabrics = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
			if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
				fabrics.push($scope.fabrics[i]);
			}
		}
		return fabrics;
	};
	
	/**
	 * Save the acknowledgement
	 * 
	 * @public
	 * @param {Object} acknowledgement - The acknowledgement to be saved
	 */
	$scope.update = function (acknowledgement) {
		
		Notification.display("Updating order #" + acknowledgement.id);
		
		acknowledgement.$update(function () {
			Notification.display("Order #" + acknowledgement.id + " updated");
		});
	};
	
}]);
