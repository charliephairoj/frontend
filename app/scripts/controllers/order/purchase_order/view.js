
angular.module('employeeApp')
.controller('OrderPurchaseOrderViewCtrl', ['$scope', 'PurchaseOrder', '$filter', '$mdToast', 'KeyboardNavigation', '$location',
function ($scope, PurchaseOrder, $filter, $mdToast, KeyboardNavigation, $location) {
	
	//Flags and variables
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
		
	//System wide message
	$mdToast.show($mdToast
		.simple()
		.position('top right')
		.content('Loading purchasing orders...')
		.hideDelay(0));
	
	//Poll Server for pos
	$scope.poList = PurchaseOrder.query({limit: 20}, function () {
		fetching = false;
		$mdToast.hide();
		changeSelection(index);
	}, function () {
		fetching = false;
	});
	
	/*
	 * Search Mechanism
	 * 
	 * a wartch is put on the query model. 
	 * whenever it changes a request is made to the server 
	 * with the query
	 * 
	 * The resources are then integrated with the list of 
	 * PO's so that there are no duplicates
	 */
	$scope.$watch('query.$.$', function (q) {
		if (q) {
			$location.search('q', q);
			PurchaseOrder.query({limit: q ? 10 * q.length : 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.poList.indexOfById(resources[i].id) == -1) {
						$scope.poList.push(resources[i]);
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
	
	$scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Loading more purchasing orders...')
				.hideDelay(0));
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.poList.length
			};
			
			try{
				if ($scope.query.$.$) {
					config.q = $scope.query.$.$;
					config.offset = $filter('filter')($scope.poList, config.q).length; 
				
				}
			} catch (e) {
				
			}
			
			
			PurchaseOrder.query(config, function (resources) {
				$mdToast.hide();
				fetching = false;
				for (var i = 0; i < resources.length; i++) {
					if ($scope.poList.indexOfById(resources[i].id) == -1) {
						$scope.poList.push(resources[i]);
					}
				}
			});
		}
	};
	
	function filter(array) {
		return $filter('filter')(array, $scope.query);
	}
			
	function changeSelection(i) {
				
		$scope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.poList)[i];
			
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
		if (index < filter($scope.poList).length - 1) {
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
			$location.path('/order/purchase_order/' + currentSelection.id);
		});
	};
	
	keyboardNav.enable();
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);
