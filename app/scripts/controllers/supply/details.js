
angular.module('employeeApp')
.controller('SupplyDetailsCtrl', ['$scope', '$routeParams', 'Notification', 'Supply', '$timeout', '$location', 'scanner', '$window', '$http',
function ($scope, $routeParams, Notification, Supply, $timeout, $location, scanner, $window, $http) {
	
	Notification.display('Retrieving supply...', false);
	
	/*
	 * Vars
	 */
	$scope.action = 'subtract';
	$scope.showQuantity = false;
	$scope.supply = Supply.get({'id': $routeParams.id, 'country': $scope.country}, function () {
		Notification.hide();
		
		for (var index in $scope.supply.suppliers) {
			var supplier = $scope.supply.suppliers[index];
			
			if (typeof(supplier) == "object") {
				$http.get('/api/v1/log', {params: {'action': 'PRICE CHANGE', 'supply': $scope.supply.id, 'supplier': supplier.id}}).then(function(response) {
					var supplier_id = response.config.params.supplier;
					var prices = [];
					var data = response.data;
					for (var i = 0; i < response.data.length; i++) {
						prices.push(response.data[i].cost);
					}
			
					largest = Math.max.apply(Math, prices);

					if (prices.length > 0) {
						var box = d3.select('div.price-chart-supplier-'+supplier_id+' .chart').selectAll('div').data(data).enter().append('div')
						.attr('class', 'price-box').style('left', function (d, i) {return ((i * 6) + i) + 'em';})
						.attr('class', function (d, i) {
							try {
							console.log(data[i-1].cost + ':' + d.cost);
								if (Number(data[i-1].cost) > Number(d.cost)) {
									return 'green';
								} else if (Number(data[i-1].cost) < Number(d.cost)) {
									return 'red';
								} 
							} catch (e) {
								return 'black';  
							}
					
						});
				
						var costSpans = box.append('span').text(function (d) {return d.cost+'thb';}).attr('class', 'price');
						var dateSpans = box.append('span').attr('class', 'date')
						.text(function (d) {
							var date = new Date(d.timestamp);
							return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
						});
				
						d3.select('div.price-chart-supplier-'+supplier_id).transition().duration(1000).style('background-color', '#FFF')
						.style('height', '10em');
						
						box.transition().duration(2000).delay(1000).style('height', function (d) { return ((d.cost / largest) * 8) + 'em';});
			
					} else {
						d3.select('div.price-chart-supplier-'+supplier_id+' .chart').style('display', 'none');
					}
				}); //jshint ignore:line
			}
		}
		
		$http.get('/api/v1/log', {params: {'action': 'SUBTRACT', 'supply': $scope.supply.id}}).then(function(response) {
			var quantities = [];
			var data = response.data;
			for (var i = 0; i < response.data.length; i++) {
				quantities.push(response.data[i].quantity);
			}
			
			largest = Math.max.apply(Math, quantities);
			
			if (quantities.length > 0) {
				var box = d3.select('div.usage .chart').selectAll('div').data(data).enter().append('div')
				.attr('class', 'price-box').style('left', function (d, i) {return ((i * 6) + i) + 'em';})
				.style('background-color', function (d, i) {
					try {
					console.log(data[i-1].quantity + ':' + d.quantity);
						if (Number(data[i-1].quantity) > Number(d.quantity)) {
							return 'green';
						} else if (Number(data[i-1].quantity) < Number(d.quantity)) {
							return 'red';
						} 
					} catch (e) {
						return 'black';
					}
					
				});
				
				var costSpans = box.append('span').text(function (d) {return d.quantity;}).attr('class', 'price');
				var dateSpans = box.append('span').attr('class', 'date')
				.text(function (d) {
					var date = new Date(d.timestamp);
					return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
				});
				
				d3.select('div.usage').transition().duration(500).style('background-color', '#FFF');
				box.transition().duration(2000).delay(500).style('height', function (d) { return ((d.quantity / largest) * 8) + 'em';});
			
			}
		});
			
		//Extract suppliers to be used for if add upc
		//$scope.suppliers = $scope.supply.suppliers;
		
		/*
		 * Set the selected supplier automatically if 
		 * there is only 1 supplier. The supply's supplier 
		 * is automattically because selectedSupplier is 
		 * referencing it
		 */
		try {
			if ($scope.supply.suppliers.length == 1) {
				$scope.selectedSupplier = $scope.supply.suppliers[0];
			}
		} catch (e) {
			
		}
	});
	globalScanner.disable();
	var updateLoopActive = false,
		timeoutPromise;
	var validWidth = ['m', 'yd', 'pc', 'pack', 'container', 'fabric'];
	var validDepth = ['pc', 'pack', 'container'];
	var validHeight = ['pack', 'pc'];
	/*
	 * Seletively show dimensions
	 */
	$scope.showWidth = function () {
		
		return validWidth.indexOf($scope.supply.units) > -1 || 
		validWidth.indexOf($scope.supply.type) > -1 ||
		($scope.supply.units == 'kg' && $scope.supply.type == 'packaging') ? true : false;
	};
	
	$scope.showDepth = function () {
		return validDepth.indexOf($scope.supply.units) > -1 ? true : false;
	};
	
	$scope.showHeight = function () {
		return validHeight.indexOf($scope.supply.units) > -1 ||
		($scope.supply.units == 'kg' && $scope.supply.type == 'packaging') ? true : false;
	};
	
	$scope.addImage = function (image) {
		$scope.supply.image = image;
	};
	
	$scope.viewStickers = function () {
		try {
			$window.open($scope.supply.sticker.url);
		} catch (e) {
			Notification.display("This supply is missing a sticker");
		}
	};
	
	scanner = new scanner('supply/details');
	//scanner.enable();
	scanner.disableStandard();
	scanner.register(/^\d+(\-\d+)*$/, function (code) {
		$scope.safeApply(function () {
			/*
			 * This adds the upc to the supplier in the supply's
			 * object because "selectedSupplier" is referencing 
			 * the original object
			 */
			$scope.selectedSupplier.upc = code;
			$scope.showAddUPC = false;
		});
	});
	/*
	 * Update the supply
	 * 
	 * Sends a PUT request to the server with all the values
	 * of the entire resource. We implement this by watching the supply
	 * object. 
	 * 
	 * We utilize a custom listener function because we must delete, 
	 * all dynamically generated content from the server, such as 
	 * last_modifed, and unique url, as this will cause a loop
	 * when the updating begins
	 */
	$scope.$watch(function () {
		var supply = angular.copy($scope.supply);
		delete supply.last_modified;
		delete supply.image;
		delete supply.supplier;
		delete supply.quantity;
		return supply;
	}, function (newVal, oldVal) {
		if (!updateLoopActive && oldVal.hasOwnProperty('id')) {
			updateLoopActive = true;
			timeoutPromise = $timeout(function () {
				Notification.display('Updating ' + $scope.supply.description + '...', false);
				var supply = angular.copy($scope.supply);
				supply.$update({'country': $scope.country}, function () {
					updateLoopActive = false;
					Notification.display($scope.supply.description + ' updated');
				}, function () {
					Notification.display("There was an error in updating " + $scope.supply.description);
				});
			}, 5000);
		}
	}, true);
	
	/*
	 * Adding a upc
	 * 
	 * Set Keyboard Navigation
	 * Detects the switch and opens the modal accordingly
	 * 
	 */
	$scope.$watch('showAddUPC', function (newVal, oldVal) {
		if (newVal) {
			scanner.enable();
		} else {
			scanner.disable();
		}
	});
	/*
	 * Add a quantity
	 * 
	 * Sends a POST request to the server via the add url with 
	 * the quanttity as a parameter
	 */
	$scope.add = function (quantity) {
		$scope.showQuantity = false;
		if (!quantity) {
			quantity = $scope.quantity;
		}
		
		$scope.supply.$add({quantity: quantity, 'country': $scope.country}, function () {
			if (!$scope.supply.hasOwnProperty('suppliers')) {
				$scope.supply.suppliers = $scope.suppliers;
			}
		});
	};
	
	/*
	 * Subtract a quantity
	 * 
	 * Sends a POST reques to the server via the subtract url with the 
	 * quantity as a parameter
	 */
	$scope.subtract = function (quantity) {
		$scope.showQuantity = false;
		if (!quantity) {
			quantity = $scope.quantity;
		}
		
		$scope.supply.$subtract({quantity: quantity, 'country': $scope.country}, function () {
			if (!$scope.supply.hasOwnProperty('suppliers')) {
				$scope.supply.suppliers = $scope.suppliers;
			}
		});
	};
	
	/*
	 * Change quantity
	 */
	$scope.changeQuantity = function (action, quantity) {
		if (!quantity) {
			throw ValueError("Expecting a quantity");
		}
		$scope[action]();
		
	};
	
	$scope.$on('$destroy', function () {
		//Turn off scanner and keyboard Navigation
		scanner.disable();
		$timeout.cancel(timeoutPromise);
		Notification.display('Updating ' + $scope.supply.description + '...', false);
		$scope.supply.$update({'country': 'TH'}, function () {
			Notification.display($scope.supply.description + ' updated.');
		});
		globalScanner.enable();
	});
	
	/*
	 * Remove
	 */
	$scope.remove = function () {
		if ($scope.currentUser.hasPermission('delete_supply')) {
			Notification.display('Deleting supply...', false);
			$scope.supply.$delete(function () {
				Notification.display('Supply deleted');
				$location.path('/supply');
			});
		}
	};
}]);
