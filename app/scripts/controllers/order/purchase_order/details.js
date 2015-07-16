
angular.module('employeeApp')

.controller('OrderPurchaseOrderDetailsCtrl', ['$scope', '$routeParams', 'PurchaseOrder', '$mdToast', '$location', '$window', 'Project', '$mdDialog', 'Room', 'Phase',
function ($scope, $routeParams, PurchaseOrder, $mdToast, $location, $window, Project, $mdDialog, Room, Phase) {
	
	var updateLoopActive = false,
		timeoutPromise,
	map,
	geocoder = new google.maps.Geocoder(),
	markers = [],
	mapOptions = {
			center: new google.maps.LatLng(13.776239, 100.527884),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.ROAD
	},
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
	map = new google.maps.Map($('#po-map')[0], mapOptions);
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
	
	//Retrieve the purchase order from the server
	$scope.po = PurchaseOrder.get({id: $routeParams.id}, function () {
		for (var i = 0; i < $scope.po.items.length; i++) {
			var item = $scope.po.items[i];
			item.unit_cost = Number(item.unit_cost);
			item.quantity = Number(item.quantity);
		}
		
		//Reconcile the project so that it is shown to the user
		if ($scope.po.id && $scope.po.project && $scope.projects.length) {
			var index = $scope.projects.indexOfById($scope.po.project.id);
			
			$scope.po.project = $scope.projects[index] || $scope.po.project;
			
			if ($scope.po.room) {
				index = $scope.po.project.rooms.indexOfById($scope.po.room.id);
				$scope.po.room = $scope.po.project.rooms[index] || $scope.po.room;
			}
			
			if ($scope.po.phase) {
				index = $scope.po.project.phases.indexOfById($scope.po.phase.id);
				$scope.po.phase = $scope.po.project.phases[index];
			}
		}
		
		var address = $scope.po.supplier.addresses[0] || {};
		
		if (address.latitude && address.longitude) {
			var latLng = map.getCenter();
		
			marker = createMarker({address:address, title:$scope.po.supplier.name, latitude:latLng.lat(), longitude: latLng.lng(),
				icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
			});
			map.panTo(marker.getPosition());
			map.setZoom(17);
			
		} else {
			/*
			//Create address string for geocoding
			var addressStr = address.address1 || "";
			addressStr += (address.address2 || "") + ", ";
			addressStr += (address.city || "") + ", ";
			addressStr += (address.territory || "") + ", ";
			addressStr += (address.country || "") + " ";
			addressStr += (address.zipcode || "");
			
			//Perform geocoding request
			geocoder.geocode({address: addressStr}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var local = results[0].geometry.location;
					marker = createMarker({address:address, title:$scope.supplier.name, latitude:local.lat(), longitude: local.lng()});
					map.panTo(marker.getPosition());
					map.setZoom(14);
				} else {
					console.error(status);
				}
			});
			*/
		}
	});

	//Get a list of projects
	$scope.projects = Project.query({limit:0, page_size:1000}, function () {
		
		//Reconcile the project so that it is shown to the user
		if ($scope.po.id && $scope.po.project) {
			var index = $scope.projects.indexOfById($scope.po.project.id);
			$scope.po.project = $scope.projects[index];
			
			if ($scope.po.room) {
				index = $scope.po.project.rooms.indexOfById($scope.po.room.id);
				$scope.po.room = $scope.po.project.rooms[index] || $scope.po.room;
			}
			
			if ($scope.po.phase) {
				index = $scope.po.project.phases.indexOfById($scope.po.phase.id);
				$scope.po.phase = $scope.po.project.phases[index];
			}
		}
	});
	
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
	
	$scope.save = function () {
		$mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Saving changes to purchase order ' + $scope.po.id)
			.hideDelay(0));
		$scope.po.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Changes to purchase order ' + $scope.po.id + ' saved.')
				.hideDelay(2000));
			$window.open($scope.po.pdf.url);
			
			//Reconcile the project so that it is shown to the user
			if ($scope.po.id && $scope.po.project) {
				var index = $scope.projects.indexOfById($scope.po.project.id);
				$scope.po.project = $scope.projects[index];
			
				if ($scope.po.room) {
					index = $scope.po.project.rooms.indexOfById($scope.po.room.id);
					$scope.po.room = $scope.po.project.rooms[index] || $scope.po.room;
				}
			
				if ($scope.po.phase) {
					index = $scope.po.project.phases.indexOfById($scope.po.phase.id);
					$scope.po.phase = $scope.po.project.phases[index];
				}
			}
			
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
		$scope.po.items = $scope.po.items || [];
		
		if ($scope.po.items.indexOfById(item) == -1) {
			$scope.showAddItem = false;
			var purchasedItem = angular.copy(item);
		
			delete purchasedItem.quantity;
			purchasedItem.supply = {id:purchasedItem.id};
			delete purchasedItem.id;
			//set unit cost
			if (purchasedItem.cost) {
				purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.cost;
			} else {
				purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.suppliers[0].cost;
			}
			$scope.po.items.push(purchasedItem);
		} else {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
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
				if ($scope.po.items[i].status.toLowerCase() != "paid") {
					$scope.po.items[i].status = 'Received';
				}
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
		$scope.showPaidCal = false;
		//Modify the order
		$scope.po.status = 'PAID';
		
		//Pay for the items
		for (var i = 0; i < $scope.po.items.length; i++) {
			$scope.po.items[i].status = 'PAID';
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
