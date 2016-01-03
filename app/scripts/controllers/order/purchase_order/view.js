
angular.module('employeeApp')
.controller('OrderPurchaseOrderViewCtrl', ['$scope', 'PurchaseOrder', '$filter', 'KeyboardNavigation', '$location', 'Notification',
function ($scope, PurchaseOrder, $filter, KeyboardNavigation, $location, Notification) {
	
	//Flags and variables
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
		
	//System wide message
	Notification.display('Loading purchasing orders...');
		
	//Poll Server for pos
	$scope.poList = PurchaseOrder.query({limit: 20}, function () {
		for (var i = 0; i < $scope.poList.length; i++) {
			var rD = $scope.poList[i].receive_date;
			var pD = $scope.poList[i].paid_date;
			$scope.poList[i].receive_date = rD ? new Date(rD) : rD; 
			$scope.poList[i].paid_date = pD ? new Date(pD) : pD; 
		}
		
		fetching = false;
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
					var rD = resources[i].receive_date;
					var pD = resources[i].paid_date;
					resources[i].receive_date = rD ? new Date(rD) : rD; 
					resources[i].paid_date = pD ? new Date(pD) : pD; 
				
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
			Notification.display('Loading more purchasing orders...');
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
	
	/**
	 * Save the purchase order
	 *
	 * @public
	 * @param {Object} purchaseOrder - Purchase Order to be updated
	 */
	$scope.update = function (purchaseOrder) {
		Notification.display("Updating purchase order #" + purchaseOrder.id);
		
		purchaseOrder.$update(function () {
			Notification.display("Purchase Order #" + purchaseOrder.id + " updated.");
		});
	};
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);
