
/**
 * @ngdoc function
 * @name frontendApp.controller:ScannerCtrl
 * @description
 * # ScannerCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('ScannerCtrl', ['$scope', '$mdDialog', 'scanner', "$timeout", 'Supply', '$mdToast', 'Employee', '$http', '$rootScope', 'Equipment', 'PurchaseOrder', 'KeyboardNavigation', 'FileUploader', '$log',
function ($scope, $mdDialog, scanner, $timeout, Supply, $mdToast, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation, FileUploader, $log) {
    /*
	Equipment.get({'id': 116}, function (resp) {
		$scope.equipmentList.push(resp);
	});
	Supply.query({'q': 'screw'}, function (resp) {
		for (var i = 0; i < resp.length; i++) {
			$scope.supplies.push(resp[i]);
		}
	});
	*/

	/*
	 * Vars
	 */
	var keyboardNav = new KeyboardNavigation(),
		checkoutActive = false;
	$scope.scanner = new scanner('supply-scanner-modal'); //jshint ignore: line
	$scope.interfaceType = 'equipment';
	$scope.supplies = [];
	$scope.equipmentList = [];
	$scope.poList = PurchaseOrder.query();
	$scope.employees = Employee.query({limit:0, page_size:99999});
	$scope.scanner.enable();
	$scope.scanner.disableStandard();
	$scope.tempUrl = "http://mineolalionsclub.org/wp-content/uploads/2014/02/employee_placeholder.png";
	
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
	};
	
	/**
	 * 	EQUIPMENT SECTION
	 */
	
	/**
	 * Get the status of an equipment
	 * @private
	 * @param {Object} equipment Equipment object to get status for
	 * @returns Equipment status
	 * @type String
	 */
	$scope.getEquipmentStatus = function (equipment) {
		try {
			return equipment.status.toLowerCase() == "checked out" ? equipment.status + ' by ' + equipment.employee.name : equipment.status;
		} catch (e) {
			return equipment.status;
		}
	}
	
	/**
	 * Show the 'Add Equipment' Dialog
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showAddEquipment = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-equipment.html',
			locals: {
				'equipmentList': $scope.equipmentList
			},
			clickOutsideToClose: true,
			controller: function ($scope, $mdDialog, equipmentList) {
				$scope.equipment = new Equipment();		
				
				$scope.create = function () {
					$mdDialog.hide();
					$scope.equipment.id = $scope.equipment.id || undefined;
					
					var savingFn = equipment.id ? '$update' : '$create';
		
					$scope.equipment[savingFn](function () {
						equipmentList.push(angular.copy($scope.equipment));
					}, function (e) {
						console.log(e);
					});
					
				}
				
				$scope.cancel = function () {
					$mdDialog.hide();
				};
			}
		});
	};
	
	/*
    * Add a new equipment to the equipment list
	*/
	$scope.addNewEquipment = function () {
		var equipment = new Equipment();
		equipment.$new = true;
		$scope.equipmentList.push(equipment);
	};
	
	$scope.createEquipment = function (equipment) {
		
		
	};

	 /* 
	 * Updates the image of the currently selected supply
	 */
	$scope.addEquipmentImage = function ($image, equipment) {
		var promise = FileUploader.upload($image, '/api/v1/supply/image/');
		promise.then(function (data) {
			equipment.image = data.hasOwnProperty('data') ? data.data : data;
		}, function () {
			
		});
	};
	
	/*
	 * Remove equipment
	*/
	$scope.removeEquipment = function (equipment, $index) {
		$scope.equipmentList.splice($index, 1);
	};
	
	 /* 
	 * 
	 * Updates the image of the currently selected supply
	 */
	$scope.addImage = function (data) {
		var image = data.hasOwnProperty('data') ? data.data : data;
		$scope.supply.image = image;
		$scope.supply.$update(function () {

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
			$mdToast.hide();
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
			
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
			$mdToast.show($mdToast.simple()
				.hideDelay(0)
				.position('top right')
				.action('Close')
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
			
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
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
			
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(e);
		});
	});

	/*
	 *  Regiester the equipment code
	 */ 
	$scope.scanner.register(/^DRE-\d+$/, function (code) {
		$mdToast.show($mdToast.simple()
			.hideDelay(0)
			.position('top right')
			.action('Close')
			.content('Looking up Equipment...'));
	
		Equipment.get({id: code.split('-')[1]}, function (response) {
			$mdToast.hide();
			$scope.equipmentList.push(response);
		
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
			
			$mdToast.show($mdToast.simple()
				.content('Unable to find equipment.')
				.position('top right')
				.action('Close')
				.hideDelay(0));
		});
	});

	/*
	 *  Regiester the employee code
	 */ 
	$scope.scanner.register(/^DREM-\d+$/, function (code) {
		$mdToast.hide();
		//Notifiy the user of action
		$mdToast.show($mdToast.simple()
			.content("Looking up employee...")
			.position('top right')
			.action('close')
			.hideDelay(0));
	
		$scope.equipment = Employee.get({id: code.split('-')[1]}, function (response) {
			$scope.employee = response;
			$mdToast.hide();
		
		}, function (e) {
			
			var msg = JSON.stringify(e);
			$log.error(msg);
			
			$mdToast.show($mdToast.simple()
				.content('Unable to find employee.')
				.position('top right')
				.action('close')
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
	
	
		$mdToast.show($mdToast.simple()
			.position('top right')
			.hideDelay(0)
			.content('Processing checkout...'));
	
		if (!checkoutActive) {
			//Turn the switch on to prevent duplicate checkouts
			checkoutActive = true;
		
			try {
		
				$scope.verify();
			
				/*
				 *  Create new supply var to work on and attach to the request. This prevents the changes
				 *  from being immediately viewed on the screen and reflected before the request is complete
				 */
				var supplies = angular.copy($scope.supplies);
			
				/*
				 * Assign the employee to each supply and calculate the 
				 * new quantity based on the supply action
				 */				
				for (var i = 0; i < supplies.length; i++) {
					supplies[i].employee = angular.copy($scope.employee);
				
					//Add or subtract quantity based on user selected action
					if (supplies[i].$$action == 'subtract') {
						supplies[i].quantity -= supplies[i].$$quantity;
					} else if (supplies[i].$$action == 'add') {
						supplies[i].quantity += supplies[i].$$quantity;
					}
				}
	
				//Do supply PUT
				if (supplies.length > 0) {
				
					//Make the PUT request
					var supplyPromise = $http.put('/api/v1/supply/', supplies);
			
					//Define callbacks for the request
					supplyPromise.success(function () {
						$scope.supplies = [];
						$scope.postCheckout();
					}).error(function (e) {
						$scope.checkoutError(e);
					});
				}
			
				/* 
				 * Assign the employee to each equipment
				 */
				for (var h = 0; h < $scope.equipmentList.length; h++) {
					$scope.equipmentList[h].employee = angular.copy($scope.employee);
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
				$log.error(e);
				checkoutActive = false;
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(0)
					.action('close')
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
				}, function (e) {
					$log.error(JSON.stringify(e));
				});
			}
		}
	};

	$scope.postCheckout = function () {
		if ($scope.supplies.length === 0 && $scope.equipmentList.length === 0 && !$scope.po) {
		
			//Turn checkout switch off to allow new checkout
			checkoutActive = false;
		
			//Reset employee
			$scope.employee = undefined;
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(2000)
				.content('Checkout complete.'));
		}
	};

	$scope.checkoutError = function (e) {
		$log.error(JSON.stringify(e));
		$mdToast.show($mdToast.simple()
			.position('top right')
			.hideDelay(0)
			.action('Close')
			.content("There was a checkout error"));
	};
	
	/*
	* Functions to print stickers
	*/
	function setPrint () {				
	    var afterPrint = function() {
	        $(".print").empty();
	    };

	    if (window.matchMedia) {
	        var mediaQueryList = window.matchMedia('print');
	        mediaQueryList.addListener(function(mql) {
	            if (mql.matches) {
	               	angular.noop();
	            } else {
	                afterPrint();
	            }
	        });
	    }

		window.onafterprint = afterPrint;
			
		this.contentWindow.focus();
		this.contentWindow.print();
	}
	
	$scope.printEquipmentSticker = function (equipment) {
		var container = $(".print").empty();
		var iframe = document.createElement('iframe');
		iframe.onload = setPrint;
		iframe.src = "api/v1/equipment/" + equipment.id + "/sticker/";
		container.append(iframe);
	};
	
	$scope.printSupplySticker = function (supply) {
		var container = $(".print").empty();
		var iframe = document.createElement('iframe');
		iframe.onload = setPrint;
		iframe.src = "api/v1/supply/" + supply.id + "/sticker/";
		container.append(iframe);
	};
	

	$scope.$on('$destroy', function () {
		$scope.scanner.disable();
	
		try {
			window.globalScanner.enable();
		} catch (e) {
		
		}
	});

}]);
