
angular.module('employeeApp')
.controller('DialogsSupplyScannerCtrl', ['$scope', '$mdDialog', 'scanner', "$timeout", 'Supply', '$mdToast', 'Employee', '$http', '$rootScope', 'Equipment', 'PurchaseOrder',
function ($scope, $mdDialog, scanner, $timeout, Supply, $mdToast, Employee, $http, $rootScope, Equipment, PurchaseOrder) {
	
	/*
	 * Vars
	 */
	$scope.scanner = new scanner('supply-scanner-modal');
	$scope.interfaceType = 'equipment';
	$scope.supplies = [];
	$scope.equipmentList = [];
	
	$scope.scanner.enable();
	$scope.scanner.disableStandard();
	
	keyboardNav.onenter = function (e) {
		e.preventDefault();
	};
	
	//Disable the global scanner
	try {
		window.globalScanner.disable();
	} catch (e) {
		
	}
	
	$scope.fractSize = function () {
		return $scope.supply ? $scope.supply.units == 'pc' ? 0 : 2 : 2;
	};
	
	/*
	 * Remove item from list of supplies
	 */
	$scope.remove = function ($index, supply) {
		$scope.supplies.splice($index, 1);
	};
	
	/*
	 * Remove Purchase Order item from purchase order
	 */ 
	$scope.removeItem = function ($index) {
		$scope.po.items[$index].$$action = false;
	}
	
	 /* Add Image
	 * 
	 * Updates the image of the currently selected supply
	 */
	$scope.addImage = function (data) {
		Notification.display("Updating the supply's image", false);
		var image = data.hasOwnProperty('data') ? data.data : data;
		$scope.supply.image = image;
		$scope.supply.$update(function () {
			Notification.display("Supply's image updated.");
		});
	};

	
	/*
	 * Register the supply code regex
	 */
	$scope.scanner.register(/^DRS-\d+$/, function (code) {
		try {
			$mdToast.show($mdToast.simple()
				.hideDelay(3000)
				.position('top right')
				.content('Looking up supply...'));
		} catch (e) {
			
		}
			
		
			
		Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
			if ($scope.supplies.indexOfById(response) == -1) {
				response.$$action = 'subtract';
				$scope.supplies.push(response);
				$mdToast.show($mdToast.simple()
					.hideDelay(2000)
					.position('top right')
					.content('Added ' + response.description + ' to checkout.'));
			} else {
				$mdToast.show($mdToast.simple()
					.hideDelay(2000)
					.position('top right')
					.content(response.description + ' already in checkout'));
			}
				
		}, function () {
			$mdToast.show($mdToast.simple()
				.hideDelay(0)
				.position('top right')
				.content('Unable to find supply.'));
		});
	});
	
	/*
	 * Register the upc regex
	 */
	$scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
		try {
			$mdToast.show($mdToast.simple()
				.hideDelay(3000)
				.position('top right')
				.content('Looking up supply...'));
		} catch (e) {
			
		}
		
		Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
			response[0].$$action = 'subtract';
			$scope.supplies.push(response[0]);
			$mdToast.hide();
			$mdToast.show($mdToast.simple()
				.hideDelay(2000)
				.position('top right')
				.content('Added ' + response.description + ' to checkout.'));
				
		}, function (reason) {
			console.log(reason);
		});
	});
	
	/*
	 * Register the Purchase Order regex
	 */
	$scope.scanner.register(/^PO-\d+$/, function (code) {
		try {
			$mdToast.show($mdToast.simple()
				.hideDelay(3000)
				.position('top right')
				.content('Looking up Purchase Order...'));
		} catch (e) {
			
		}
		
		PurchaseOrder.get({id: code.split('-')[1]}, function (response) {
			$scope.po = response;
			
			$mdToast.hide();
			
			for (var j = 0; j < $scope.po.items.length; j++) {
				$scope.po.items[j].$$action = true;
			}
				
		}, function (reason) {
			console.log(reason);
		});
	});
	
	/*
	 *  Regiester the equipment code
	 */ 
	$scope.scanner.register(/^DRE-\d+$/, function (code) {
		Equipment.get({id: code.split('-')[1]}, function (response) {
			$scope.equipmentList.push(response);
			
		}, function () {
			$mdToast.show($mdToast.simple()
				.content('Unable to find equipment.')
				.hideDelay(0));
		});
	});
	
	/*
	 *  Regiester the employee code
	 */ 
	$scope.scanner.register(/^DREM-\d+$/, function (code) {
		
		//Notifiy the user of action
		$mdToast.show($mdToast.simple()
			.content("Looking up employee...")
			.hideDelay(3000));
		
		$scope.equipment = Employee.get({id: code.split('-')[1]}, function (response) {
			$scope.employee = response;
			$mdToast.hide();
			
		}, function () {
			$mdToast.show($mdToast.simple()
				.content('Unable to find employee.')
				.hideDelay(0));
		});
	});
	
	$scope.verify = function () {
		$mdToast.hide();
		for (var i = 0; i < $scope.supplies.length; i++) {
			if ($scope.supplies[i].$$action == "subtract") {
				if ($scope.supplies[i].$$quantity > $scope.supplies[i].quantity) {
					throw Error($scope.supplies[i].description + " quantity cannot be negative");
				}
			}
		}
		
		return true;
	};
	
	$scope.checkout = function () {
		
		try {
			
			$scope.verify();
			
			/*
			 * Assign the employee to each supply and calculate the 
			 * new quantity based on the supply action
			 */
			for (var i = 0; i < $scope.supplies.length; i++) {
				$scope.supplies[i].employee = angular.copy($scope.employee);

				if ($scope.supplies[i].$$action == 'subtract') {
					$scope.supplies[i].quantity -= $scope.supplies[i].$$quantity;
				} else if ($scope.supplies[i].$$action == 'add') {
					$scope.supplies[i].quantity += $scope.supplies[i].$$quantity;
				}
			}
		
			/* 
			 * Assign the employee to each equipment
			 */
			for (var h = 0; h < $scope.equipmentList.length; h++) {
				$scope.equipmentList[h].employee = angular.copy($scope.employee);
			}
		
			//Do supply PUT
			if ($scope.supplies.length > 0) {
				var supplyPromise = $http.put('/api/v1/supply/', $scope.supplies);
		
				supplyPromise.success(function () {
					$scope.supplies = [];
					$scope.postCheckout();
				}).error(function (e) {
					$scope.checkoutError(e);
				});
			}
		
			//Do equipment PUT
			if ($scope.equipmentList.length > 0) {
				var equipPromise = $http.put('/api/v1/equipment/', $scope.equipmentList);
		
				equipPromise.success(function () {
					$scope.equipmentList = [];
					$scope.postCheckout();
				}).error(function (e) {
					$scope.checkoutError(e);
				});
			}
		} catch (e) {
			console.log(e);
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content(e.message));
		}
		
		//Perform Purchase Order PUT
		if ($scope.po) {
			for (var g = 0; g < $scope.po.items.length; g++) {
				if ($scope.po.items[g].$$action) {
					$scope.po.items[g].status = 'Received';
				}
			}
			
			$scope.po.status = "Received";
			
			$scope.po.$update(function () {
				delete $scope.po;
				$scope.postCheckout();
			});
		}
	};
	
	$scope.postCheckout = function () {
		if ($scope.supplies.length === 0 && $scope.equipmentList.length === 0 && !$scope.po) {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(2000)
				.content('Checkout complete.'));
		}
	};
	
	$scope.checkoutError = function (e) {
		$mdToast.show($mdToast.simple()
			.position('top right')
			.hideDelay(0)
			.content("There was a checkout error"));
	};
	
	$scope.$on('$destroy', function () {
		$scope.scanner.disable();
		
		try {
			window.globalScanner.enable();
		} catch (e) {
			
		}
	});
	
}]);
