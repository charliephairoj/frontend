
/**
 * @ngdoc function
 * @name frontendApp.controller:ScannerCtrl
 * @description
 * # ScannerCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('ScannerCtrl', ['$scope', '$mdDialog', 'scanner', "$timeout", 'Supply', 'Notification', 'Employee', '$http', '$rootScope', 'Equipment', 'PurchaseOrder', 'KeyboardNavigation', 'FileUploader', '$log',
function ($scope, $mdDialog, scanner, $timeout, Supply, Notification, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation, FileUploader, $log) {
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
		checkoutActive = false,
		supplyList = [];
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
 	 * Supply SECTION
	 *
	 * This section deals with the supply searching and what happens when a supply is selected
	*/

	$scope.selectedSupply = null;
	$scope.supplySearchText = '';
	
	// Watch on customerSearchText to get products from the server
	$scope.retrieveSupplies = function (query) {
		if (query) {
			Supply.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if (supplyList.indexOfById(responses[i]) === -1) {
						supplyList.push(responses[i]);
					}
				}
			});
		}
	};
	
	/**
	 * Returns a list of customers whose name matches the query
	 * 
	 * @public
	 * @param {String} query - the string to search against the customer names
	 * @returns {Array} - An array of customes that matches the query
	 */
	
	$scope.searchSupplies = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var data = [];
		for (var i = 0; i < supplyList.length; i++) {
			if (angular.lowercase(supplyList[i].description || '').indexOf(lowercaseQuery) !== -1) {
				if ($scope.supplies.indexOfById(supplyList[i]) === -1) {
					data.push(supplyList[i]);					
				}
			}
		}
		
		return data;
	};

	$scope.addSupply = function (supply) {
		$scope.supplies.push(angular.copy(supply));
		$scope.selectedSupply = null;
		$scope.supplySearchText = '';
	}

	$scope.quantityDescription = function (supply) {
		return supply.$$quantity ? 'จำนวนใหม่ ในสต๊อก/Updated Quantity' : 'จำนวน ในสต๊อก/Quantity';
	}

	$scope.newSupplyQuantity = function (supply) {

		return supply.quantity + ((supply.$$action == 'add' ? supply.$$quantity : (-1 * supply.$$quantity)) || 0);
	}

	$scope.supplyQuantityLabel = function (supply) {
		return supply.$$action == 'add' ? 'เพิ่มจำนวน/Add Quantity' : 'ลดจำนวน/Reduce Quantity';
	}


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
					Notification.display('Add new equipment...', false);
					$mdDialog.hide();
					$scope.equipment.id = $scope.equipment.id || undefined;
					
					var savingFn = $scope.equipment.id ? '$update' : '$create';
		
					$scope.equipment[savingFn](function () {
						Notification.display($scope.equipment.description + ' added.', 2000);
						equipmentList.push(angular.copy($scope.equipment));
					}, function (e) {
						Notification.display('Count not add ' + $scope.equipment.description + '.', 2000);
						console.log(e);
					});
					
				}
				
				$scope.cancel = function () {
					$mdDialog.cancel();
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
			Notification.display('Looking up supply...', false);
		} catch (e) {
		
		}
				
		Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
			if ($scope.supplies.indexOfById(response) == -1) {
				response.$$action = 'subtract';
				$scope.supplies.push(response);
				Notification.display('Added ' + response.description + ' to checkout.', 2000);
			} else {
				Notification.display(response.description + ' already in checkout', 2000);
			}
			
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
			Notification.display('Unable to find supply.', false);
		});
	});

	/*
	 * Register the upc regex
	 */
	$scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
		try {
			Notification.display('Looking up supply...', false);
		} catch (e) {
		
		}
	
		Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
			response[0].$$action = 'subtract';
			$scope.supplies.push(response[0]);
			Notification.display('Added ' + response.description + ' to checkout.', 2000);
			
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
			Notification.display('Looking up Purchase Order...', false);
		} catch (e) {
		
		}
	
		PurchaseOrder.get({id: code.split('-')[1]}, function (response) {
			$scope.po = response;
		
			Notification.display('Purchase Order ' + response.id + ' retrieved.', 2000);
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
		Notification.display('Looking up Equipment...', false);
	
		Equipment.get({id: code.split('-')[1]}, function (response) {
			Notification.display(response.description + ' retrieved.', false);	
			$scope.equipmentList.push(response);
		
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
			
			Notification.display('Unable to find equipment.', false);
		});
	});

	/*
	 *  Regiester the employee code
	 */ 
	$scope.scanner.register(/^DREM-\d+$/, function (code) {
		//Notifiy the user of action
		Notification.display("Looking up employee...", false);
	
		$scope.equipment = Employee.get({id: code.split('-')[1]}, function (response) {
			$scope.employee = response;
			Notification.display(response.name + ' retrieved.', 2000);
		
		}, function (e) {
			
			var msg = JSON.stringify(e);
			$log.error(msg);
			
			Notification.display('Unable to find employee.', false);
		});
	});

	$scope.verify = function () {
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
	
	
		Notification.display('Processing checkout...', false);
	
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
					supplyPromise.success(function (resp) {
						$scope.supplies = [];

						//Update supplies in the supply list
						for (var h=0; h < resp.length; h++) {
							var index = supplyList.indexOfById(resp[h].id);

							supplyList[index] = angular.copy(resp[h]);
						}
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
				Notification.display(e.message, false);
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
			Notification.display('Checkout complete.', 2000);
		}
	};

	$scope.checkoutError = function (e) {
		$log.error(JSON.stringify(e));
		Notification.display("There was a checkout error", false);
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
	
	$scope.printSupplySticker = function (supply, type) {

		var id = '';
		if (type == 'po') {
			id = supply.supply;
		} else if (type == 'supply') {
			id = supply.id;
		} else {
			$log.error('No id to retrieve the sticker for this supply');
		}

		console.log(supply);
		var container = $(".print").empty();
		var iframe = document.createElement('iframe');
		iframe.onload = setPrint;
		iframe.src = "api/v1/supply/" + id + "/sticker/";
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
