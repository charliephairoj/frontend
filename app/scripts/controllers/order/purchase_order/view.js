
angular.module('employeeApp')
.controller('OrderPurchaseOrderViewCtrl', ['$scope', 'PurchaseOrder', '$filter', 'Notification', 'KeyboardNavigation', '$location',
function ($scope, PurchaseOrder, $filter, Notification, KeyboardNavigation, $location) {
	
	//Flags and variables
	var fetching = true,
		index = 0,
		currentSelection;
	
	//System wide message
	Notification.display('Loading purchase orders...', false);
	
	//Poll Server for pos
	$scope.poList = PurchaseOrder.query({limit: 20}, function () {
		fetching = false;
		Notification.hide();
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
	$scope.$watch('query', function (q) {
		if (q) {
			PurchaseOrder.query({limit: 5, q: q}, function (resources) {
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
	
	$scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			PurchaseOrder.query({
				limit: 20,
				offset: $scope.poList.length
			}, function (resources) {
				fetching = false;
				for (var i = 0; i < resources.length; i++) {
					$scope.poList.push(resources[i]);
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
