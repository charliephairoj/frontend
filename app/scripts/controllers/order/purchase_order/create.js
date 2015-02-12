
angular.module('employeeApp')
.controller('OrderPurchaseOrderCreateCtrl', ['$scope', 'PurchaseOrder', 'Supplier', 'Supply', '$mdToast', '$filter', '$timeout', '$window', 'Project',
function ($scope, PurchaseOrder, Supplier, Supply, $mdToast, $filter, $timeout, $window, Project) {
	
	/*
	 * Setup vars
	 */
	$scope.showSuppliers = false;
	$scope.showSupplies = false;
	//$scope.suppliers = Supplier.query({limit: 0});
	$scope.projects = Project.query({page_size:99999});
	$scope.po = new PurchaseOrder();
	
	
	
	/*
	 * Add a supplier to the purchase order
	 */
	$scope.addSupplier = function (supplier) {
		//Hide Modal
		$scope.showSuppliers = false;
		
		if ($scope.po.supplier) {
			if (supplier.id != $scope.po.supplier.id) {
				$scope.po.items = undefined;
			}
		}
		$scope.po.supplier = supplier;
		$scope.po.discount = supplier.discount;

		$scope.supplies = $filter('filter')(Supply.query({supplier_id: supplier.id}, function (response) {
			$scope.supplies = $filter('filter')(response, supplier.name);
		}), supplier.name);
		
		$scope.safeApply();
	};
	
    /*
	 * Add an item to the purchase order
	 */
	$scope.addItem = function (item) {

		//Hide Modal
		$scope.showSupplies = false;
		
		$scope.po.items = $scope.po.items || [];
		var purchasedItem = angular.copy(item);
		
		delete purchasedItem.quantity;
		
		/*
		 * Apply the items unit cost or cost from supplier to the supply cost
		 */
		purchasedItem.cost = purchasedItem.cost || purchasedItem.unit_cost;
		
		if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers')) {
			for (var i = 0; i < purchasedItem.suppliers.length; i++) {
				if (purchasedItem.suppliers[i].supplier.id == ($scope.po.supplier.id || $scope.po.supplier.supplier.id)) {
					purchasedItem.cost = purchasedItem.suppliers[i].cost;
				}
			}
		}
		
		//Add new supply to the list of items for the purchase order
		$scope.po.items.push(purchasedItem);
	};
	
	/*
	 * Remove an item fro the purchase order
	 */
	$scope.removeItem = function (index) {
		$scope.po.items.splice(index, 1);
		
		if ($scope.po.items.length === 0) {
			delete $scope.po.items;
		}
	};
	
	/*
	 * Watch Items for change
	 * 
	 * We initially tests that the lengths are the same, 
	 * in order to eliminate add and subtracting items.
	 * 
	 * We then loop through all the items and find the item
	 * that has changed, and then we compare the costs and the id
	 * to ensure the the same item has change. The costs is saved, 
	 * and a reference object is made.
	 * 
	 * After a delay of 5 seconds, we compare the saved costs with the
	 * current item cost, by using a reference. 
	 */
	$scope.$watch('po.items', function (newVal, oldVal) {
		try {
			//Filter out changes in length
			if (newVal.length == oldVal.length && newVal.length > 1) {
				//Loop through all the items;
				for (var i = 0; i < newVal.length; i++) {
					//Tests if the costs are different but the id is the same
					if (newVal[i].cost != oldVal[i].cost && newVal[i].id == oldVal[i].id) {
						var cost = newVal[i].cost;
						/*We make a reference to the original object, 
						 *So that we can make sure the price has settled
						 *in x milliseconds.*/
						var obj = newVal[i];
						$timeout(function () {
							//Tests to make sure the cost has settled
							if (obj.cost == cost) {
								var supply = obj.isPrototypeOf(Supply) ? obj : new Supply(obj);
								//supply.$update();
							}
						}, 5000); //jshint ignore:line
					}
				
					//if (po.items[i].cost == newVal[i].cost)
				}
			}
		} catch (e) {
		
		}
	}, true);
	
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
				discount = item.discount || 0;
				subtotal += ($scope.unitCost(item.cost, discount) * item.quantity);
			}
		}
		return subtotal;
	};
	
	$scope.discount = function () {
		return $scope.subtotal() * (($scope.po.discount || 0) / 100);
	};
	
	$scope.total = function () {
		return $scope.subtotal() - $scope.discount(); 
	};
	
	$scope.grandTotal = function () {
		var total = $scope.total();
		return total + (total * ($scope.po.vat / 100));
	};
	/*
	 * Verfication of order
	 */
	$scope.verifyOrder = function () {
		if (!$scope.po.hasOwnProperty('supplier')) {
			throw new Error("Please select a supplier");
		}
		
		if ($scope.po.items.length <= 0) {
			throw new Error("Please add items to the purchase order");
		}
		
		for (var i = 0; i < ($scope.po.items.length ||[]); i++) {
			if (!$scope.po.items[i].quantity || $scope.po.items[i].quantity <= 0) {
				throw new Error($scope.po.items[i].description + " is missing a quantity");
			}
		} 
		
		return true;
	};
	
	/*
	 * Save the purchase order to the server
	 */
	$scope.save = function () {
		try {
			if ($scope.verifyOrder()) {
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content('Creating new purchase order...')
					.hideDelay(0));
				
				/*
				 * prep the items by moving the supply id to a separate hash
				 */
			  	for (var i = 0; i < $scope.po.items.length; i++) {
			  		$scope.po.items[i].supply = {id: $scope.po.items[i].id};
					delete $scope.po.items[i].id;
			  	}
				/*
				 * Preps for creation of a new project
				 */
				if ($scope.po.newProject) {
					$scope.po.project = {codename: $scope.po.newProjectName};
					delete $scope.po.newProject;
					delete $scope.po.newProjectName;
				}
				
				$scope.po.$save(function (response) {
					try {
						$window.open(response.pdf.url);
					} catch (e) {
						console.warn(e);
					}
					$mdToast.show($mdToast
						.simple()
						.position('top right')
						.content('Purchase order created.'));
						
					$scope.reset();
				}, function (e) {
					$mdToast.show($mdToast
						.simple()
						.content(e));
				});
			}
			else {
				throw Error;
			}
		} catch (e) {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content(e)
				.hideDelay(0));
		}
	};
	
	/*
	 * Reset the order
	 */
	$scope.reset = function () {
		$scope.po = new PurchaseOrder();
		$scope.po.items = [];
	};
	
	
}]);
