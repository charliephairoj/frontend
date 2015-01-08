
angular.module('employeeApp')

.controller('OrderPurchaseOrderDetailsCtrl', ['$scope', '$routeParams', 'PurchaseOrder', '$mdToast', '$location', '$window',
function ($scope, $routeParams, PurchaseOrder, $mdToast, $location, $window) {
		
	$scope.po = PurchaseOrder.get({id: $routeParams.id, pdf: true});

	
	$scope.save = function () {
		$mdToast.show($mdToast
			.simple()
			.content('Saving changes to purchase order ' + $scope.po.id)
			.hideDelay(0));
		$scope.po.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content('Changes to purchase order ' + $scope.po.id + ' saved.')
				.hideDelay(0));
			$window.open($scope.po.pdf.url);
		}, function (e) {
			console.error(e);
		});
	};
	
	/*
	 * Unit costs
	 */
	$scope.unitCost = function (unitCost, discount) {
		return unitCost - (unitCost * (discount / 100));
	};
	
	/*
	 * Functions to get summary totals
	 */
	$scope.subtotal = function () {
		var subtotal = 0;
		if ($scope.po.items) {
			for (var i = 0; i < $scope.po.items.length; i++) {
				var item = $scope.po.items[i];
				subtotal += ($scope.unitCost(item.unit_cost, item.discount) * item.quantity);
			}
		}
		
		return subtotal;
	};
	
	$scope.discount = function () {
		return $scope.subtotal() * ($scope.po.discount / 100);
	};
	
	$scope.total = function () {
		return $scope.subtotal() - $scope.discount(); 
	};
	
	$scope.grandTotal = function () {
		var total = $scope.total();
		return total + (total * ($scope.po.vat / 100));
	};
	/*
	 * Adds a new Item to the Purchase Order. However
	 * this does not save it to the database on the server
	 * side. The update function must be called in addition
	 * to adding the item
	 */
	$scope.addItem = function (item) {
		if ($scope.po.items.indexOfById(item) == -1) {
			$scope.showAddItem = false;
			var purchasedItem = angular.copy(item);
		
			delete purchasedItem.quantity;
			purchasedItem.supply = {id:purchasedItem.id};
			delete purchasedItem.id;
			console.log(purchasedItem);
			//set unit cost
			if (purchasedItem.cost) {
				purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.cost;
			} else {
				purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.suppliers[0].cost;
			}
			console.log(purchasedItem);
			$scope.po.items.push(purchasedItem);
			console.log($scope.po.items);
		} else {
			$mdToast.show($mdToast
				.simple()
				.content('This item is already present in the purchase order')
				.hideDelay(2000));
		}
	};
	
	/*
	 * Remove an Item from the the purchase order
	 * 
	 * Takes an index as the argment and removes that corresponding item from
	 * the items array of scope.po. This does not automatically update the server, 
	 * must be called separately
	 */
	$scope.removeItem = function ($index) {
		$scope.po.items.splice($index, 1);
		
		if ($scope.po.items.length === 0) {
			delete $scope.po.items;
		}
	};
	
	$scope.viewPDF = function () {
		$window.open($scope.po.pdf.url);	
	};
	
	$scope.order = function () {
		$mdToast.show($mdToast
			.simple()
			.content("Updating purchase order...")
			.hideDelay(0));
		$scope.showCal = false;
		//Modify the order
		$scope.po.status = 'Ordered';
		//Receive items
		for (var i = 0; i < $scope.po.items.length; i++) {
			$scope.po.items[i].status = 'Ordered';
		}
		
		$scope.po.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content("Purchase order updated."));
		});
	};
	
	$scope.receive = function () {
		if ($scope.po.receive_date) {
			$mdToast.show($mdToast
				.simple()
				.content("Updating purchase order...")
				.hideDelay(0));
			$scope.showCal = false;
			//Modify the order
			$scope.po.status = 'Received';
			//Receive items
			for (var i = 0; i < $scope.po.items.length; i++) {
				$scope.po.items[i].status = 'Received';
			}
			
			$scope.po.$update(function () {
				$mdToast.show($mdToast
					.simple()
					.content("Purchase order updated."));
			});
			
		} else {
			$scope.showCal = true;
		}
	};
	
	$scope.pay = function () {
		$mdToast.show($mdToast
			.simple()
			.content("Updating purchase order...")
			.hideDelay(0));
		
		//Modify the order
		$scope.po.status = 'Paid';
		
		//Pay for the items
		for (var i = 0; i < $scope.po.items.length; i++) {
			$scope.po.items[i].status = 'Paid';
		}
		
		$scope.po.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content("Purchase order updated."));
		});
	};
	
	$scope.cancel = function () {
		$mdToast.show($mdToast
			.simple()
			.content("Updating purchase order...")
			.hideDelay(0));
		
		$scope.po.status = 'Cancelled';
		
		//Pay for the items
		for (var i = 0; i < $scope.po.items.length; i++) {
			$scope.po.items[i].status = 'Cancelled';			
		}
		
		$scope.po.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content("Purchase order " + $scope.po.id + " cancelled."));
			$location.path("order/purchase_order");
		});
	};
}]);
