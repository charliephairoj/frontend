
angular.module('employeeApp')
.controller('OrderPurchaseOrderCreateCtrl', ['$scope', 'PurchaseOrder', 'Supplier', 'Supply', '$mdToast', '$filter', '$timeout', '$window', 'Project', 'Room', 'Phase', '$mdDialog',
function ($scope, PurchaseOrder, Supplier, Supply, $mdToast, $filter, $timeout, $window, Project, Room, Phase, $mdDialog) {
	
	/*
	 * Setup vars
	 */
	$scope.showSuppliers = false;
	$scope.showSupplies = false;
	//$scope.suppliers = Supplier.query({limit: 0});
	$scope.projects = Project.query({page_size:99999});
	$scope.po = new PurchaseOrder();
	

	/*
 	 * Map variables and settings
 	 */ 
	var map,
		marker,
		geocoder = new google.maps.Geocoder(),
		mapOptions = {
				center: new google.maps.LatLng(13.776239, 100.527884),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROAD
		},
		//Style for the map
		styles = [
			{
				featureType: "road",
				stylers: [
					{visibility: "on"}
				]
			},
			{
				featureType: "water",
				elementType: "geometry.fill",
				stylers: [
					{color:"#DDDDDD"}
				]
			},
			{
				featureType: "landscape",
				elementType: "geometry.fill",
				stylers: [
					{color:"#FFFFFF"}
				]
			},
			{
			    "featureType": "administrative.province",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  }
		];
    
	//Create new map and set the map style
	map = new google.maps.Map($('#create-po-map')[0], mapOptions);
	map.setOptions({styles:styles});

	//General purpose create marker function
	function createMarker(configs) {
		var lat = configs.address.latitude || configs.latitude,
			lng = configs.address.longitude || configs.longitude;
		
	
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: configs.title,
			draggable: true
		});
		
		if (configs.icon) {
			marker.setIcon(configs.icon);
		}
	
		//Add marker to configs for later bindings
		configs.marker = marker;
	
		//Swtich to let it be known a marker has been made for this address
		configs.address.marker = true;
	
		//Add a listener to mark when the user stops dragging the marker
		google.maps.event.addListener(marker, 'dragend', function () {
			var latLng = this.marker.getPosition();
			var index = Number(this.marker.getTitle()) - 1;
			this.address.latitude = latLng.lat();
			this.address.longitude = latLng.lng();
			
			//Ensure that the data in the supplier resource is consistent with the user's data
			if (this.address.latitude != $scope.supplier.addresses[0].latitude || 
				this.address.longitude != $scope.supplier.addresses[0].longitude) {
					$scope.po.supplier.addresses[0].latitude = latLng.lat();
					$scope.po.supplier.addresses[0].longitude = latLng.lng();
			}
				
			//Change icon color
			marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
					
		}.bind(configs));
		
		return configs.marker;
	}
	
	
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
		$scope.po.terms = supplier.terms;
		$scope.po.currency = supplier.currency;
		
		$scope.supplies = $filter('filter')(Supply.query({supplier_id: supplier.id}, function (response) {
			$scope.supplies = $filter('filter')(response, supplier.name);
		}), supplier.name);
		
		$scope.safeApply();
		
		if (marker) {
			marker.setMap(null);
		}
		//Set marker for customer
		try {
			var address = $scope.po.supplier.addresses[0];
			if (address.latitude && address.longitude) {
				 marker = createMarker({address: address, title: $scope.po.supplier.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				 map.panTo(marker.getPosition());
				 map.setZoom(17);
			}
		} catch (e) {
			console.error(e);
		}
	};
	
	/* 
	 * Dialog to add a new project
	 */
	$scope.showAddProject = function () {
		$scope.project = new Project();
		$mdDialog.show({
			templateUrl: 'views/templates/add-project.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	$scope.completeAddProject = function  () {
		$mdDialog.hide();
		
		$mdToast.show($mdToast
			.simple()
			.content("Creating project...")
			.hideDelay(0));
			
		$scope.project.$create(function (resp) {
			$scope.projects.push(resp);
			$scope.po.project = resp;
			$mdToast.hide();
			$scope.project = new Project();
		}, function () {
			
		});
	};
	
	$scope.cancelAddProject = function  () {
		$mdDialog.hide();
		$scope.project = new Project();
	};
	
	/*
	 * Create dialog to add room
	 */
	$scope.showAddRoom = function () {
		$scope.room = new Room();
		$mdDialog.show({
			templateUrl: 'views/templates/add-room.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Complete adding room process and close the dialog 
	 */
	$scope.completeAddRoom = function () {
		$mdDialog.hide();
		var room = angular.copy($scope.room);
		room.project = $scope.po.project;
		$scope.room = new Room();
		room.$create(function (resp) {
			$scope.po.project.rooms.push(resp);
			$scope.po.room = resp;
		});
	};
	
	/*
	 * Cancel adding a room 
	 */
	$scope.cancelAddRoom = function () {
		$mdDialog.hide();
		$scope.room = new Room();
	};
	
	/*
	 * Create dialog to add phase
	 */
	$scope.showAddPhase = function () {
		$scope.phase = new Phase();
		$mdDialog.show({
			templateUrl: 'views/templates/add-phase.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Complete adding item process and close the dialog 
	 */
	$scope.completeAddPhase = function () {
		$mdDialog.hide();
		var phase = angular.copy($scope.phase);
		phase.project = $scope.po.project.id;
		$scope.phase = undefined;
		phase.$create(function (resp) {
			$scope.po.project.phases.push(resp);
			$scope.po.phase = resp;
		});
	};
	
	/*
	 * Cancel adding a item 
	 */
	$scope.cancelAddPhase = function () {
		$mdDialog.hide();
		$scope.phase = undefined;
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
											
					//Change page to newly saved purchase order page
					$location.path("/order/purchase_order/" + response.id);
					
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
