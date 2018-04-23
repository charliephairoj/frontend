
angular.module('employeeApp')
.controller('OrderPurchaseOrderCreateCtrl', ['$scope', 'PurchaseOrder', 'Supplier', 'Supply', 'Notification', '$filter', '$timeout', '$window', 'Project', 'Room', 'Phase', '$mdDialog', '$log', '$location', 'Label', '$rootScope', 'Acknowledgement',
function ($scope, PurchaseOrder, Supplier, Supply, Notification, $filter, $timeout, $window, Project, Room, Phase, $mdDialog, $log, $location, Label, $rootScope, Acknowledgement) {

	/**
	 * Titles 
	 */
	$scope.banks = Label.query({'type': 'bank'});
	$scope.supplyTypes = Label.query({'type': 'supply type'});
	$scope.labels = {};
	Label.query({'type': 'po create title'}, function (resp) {
		for (var i=0; i < resp.length; i++) {
			$scope.labels[resp[i].category] = {'en': resp[i].en, 'th': resp[i].th};
		}	

		$rootScope.safeApply();
	});
	/*
	$scope.labels = {
		'name': {'en': 'Supplier Name',
				 'th': 'ชื่อผู้ผลิต'},
		'telephone': {'en': 'Telephone',
					  'th': 'โทรศัพท์'},
		'fax': {'en': 'Fax',
				'th': 'แฟกซ์'},
		'email': {'en': 'Email',
				'th': 'อีเมล'},
		'address': {'en': 'Address',
					'th': 'หมายเลขที่อยู่'},
		'city': {'en': 'City',
				 'th': 'เขต'},
		'territory': {'en': 'Territory',
					  'th': 'จังหวัด'},
		'country': {'en': 'Country',
					'th': 'ประเทศ'},
		'zipcode': {'en': 'Zipcode',
					'th': 'รหัสไปรษณีย์'},
		'receiving_date': {'en': 'Receiving Date',
					'th': 'วันรับสินค้า'},
		'currency': {'en': 'Currency',
					 'th': 'เงินของประเทศ'},
		'discount': {'en': 'Discount',
					 'th': 'ส่วนลด'},
		'vat': {'en': 'VAT',
				'th': 'ภาษีมูลค่าเพิ่ม'},
		'terms': {'en': 'Terms',
				  'th': 'เครดิตกี่วัน'},
		'deposit': {'en': 'Deposit',
					'th': 'วางมัดจำ'},
		'comments': {'en': 'Comments',
					 'th': 'Comments'},
		'project': {'en': 'Project',
					'th': 'โครงการ'},
		'room': {'en': 'Room',
				 'th': 'ห้อง'},
		'phase': {'en': 'Phase',
				  'th': 'ระยะ'},
		'add_location': {'en': 'Add Location',
				  		 'th': 'เพิ่มสถานที่อยู่'},
		'edit_location': {'en': 'Edit Location',
				  		  'th': 'แก้ไขที่อยู่'},
		'directions': {'en': 'Directions',
				  	   'th': 'เส้นทางไป'}


				  

	};
	*/
	/*
	 * Setup vars
	 */
	$scope.po = new PurchaseOrder();
	$scope.po.items = [];
	$scope.listView = true;
	$scope.creating = false;
	$scope.supplyQuery = false;
	/**
	 *	MAPS SECTION
	 *
	 * Implements all the functions and necessary to initialize and control
	 * google maps instance
	 */

	$scope.marker = null;

	var map,
		home = new google.maps.LatLng(13.935441, 100.6864353),
		directionsService = new google.maps.DirectionsService(),
		directionsDisplay,
		geocoder = new google.maps.Geocoder(),
		markers = [],
		mapOptions = {
				center: new google.maps.LatLng(13.776239, 100.527884),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROAD
		},

		/**
		 * Map styling
		 */

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

	// Create the directions layer
	directionsDisplay = new google.maps.DirectionsRenderer({
		map: map,
		draggable: true
	});
    directionsDisplay.setMap(map);

	// Create a traffic layer and apply it to the map
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);

	/**
	 * Calculate the route between two points and renders it to the map
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

	function calculateRoute(start, end, errback) {

		var request = {
			origin: start,
			destination: end,
			avoidHighways: false,
			avoidTolls: false,
			travelMode: google.maps.TravelMode.DRIVING,
  		  	unitSystem: google.maps.UnitSystem.METRIC

		};

		directionsService.route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		    	directionsDisplay.setDirections(result);
				$scope.directionsActive = true;
			    //directionsDisplay.setPanel(document.getElementById("directions"));

		    } else {
		    	(errback || angular.noop)();
		    }
		});
	}

	/**
	 * Clears the route from the map
	 *
	 * @private
	 * @returns {null}
	 */

	function clearRoute () {
		directionsDisplay.set('directions', null);
		$scope.directionsActive = false;
	}

	/**
	 * Create a new marker for the map
	 *
	 * @private
	 * @param {Object} configs - An object container latitude and longitude to create the marker
	 * @returns {Object} marker - Returns an instance of the new marker created
	 */

	function createMarker(configs) {
		var lat = null,
			lng = null;

		if (configs.address) {
			lat = configs.address.latitude || configs.latitude;
			lng = configs.address.longitude || configs.longitude;
		} else {
			lat = configs.latitude;
			lng = configs.longitude;
		}



		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
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
			if (this.address.latitude != $scope.po.supplier.addresses[0].latitude ||
				this.address.longitude != $scope.po.supplier.addresses[0].longitude) {
					$scope.po.supplier.addresses[0].latitude = latLng.lat();
					$scope.po.supplier.addresses[0].longitude = latLng.lng();
			}

			//Change icon color
			marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");

		}.bind(configs));

		return configs.marker;
	}

	/**
	 * Creates a marker and then adds it to the map
	 * @public
	 * @returns {Object} Marker - returns and instance of the new marker
	 */

	$scope.addMarker = function () {
		$scope.marker = createMarker({address: {}, latitude: 13.935441, longitude: 100.6864353, title:$scope.po.supplier.name});
		$scope.marker.setMap(map);
		map.panTo($scope.marker.getPosition());
		map.setZoom(17);
	};

	$scope.editMarker = function () {
		clearRoute();

		if ($scope.marker) {
			$scope.marker.setMap(map);
			map.panTo($scope.marker.getPosition());
			map.setZoom(17);
		}
	};

	$scope.viewDirections = function () {
		//Clear marker
		$scope.marker.setMap(null);

		//Get Directions and render
		calculateRoute(home, $scope.marker.getPosition(), function () {
			$scope.marker.setMap(map);
			map.panTo($scope.marker.getPosition());
			map.setZoom(17);
		});
	};


	/*
 	 * SUPPLIER SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/
	$scope.suppliers = Supplier.query({page_size:99999, limit:0});

	$scope.searchSuppliers = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var suppliers = [];
		for (var i = 0; i < $scope.suppliers.length; i++) {
			if (angular.lowercase($scope.suppliers[i].name).indexOf(lowercaseQuery) !== -1) {
				suppliers.push($scope.suppliers[i]);
			}
		}

		return suppliers;
	};

	// Watch on supplierSearchText to get products from the server
	$scope.retrieveSuppliers = function (query) {
		if (query) {
			Supplier.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.suppliers.indexOfById(responses[i]) === -1) {
						$scope.suppliers.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Updates the supplier name incase this is a new supplier
	 * @public
	 * @param {String} supplierName - Name of the Supplier
	 * @returns {null}
	 */

	$scope.updateSupplierName = function (supplierName) {
		$scope.po.supplier = $scope.po.supplier || {name: '', addresses:[]};

		if (!$scope.po.supplier.id) {
			$scope.po.supplier.name = supplierName || '';
			//$scope.supplies = [];
		} else {
			if ($scope.po.supplier.name.indexOf(supplierName) == -1) {
				$scope.po.supplier = {name: supplierName, addresses: []};
			}
		}
	};

	/*
	 * Add a supplier to the purchase order
	 */
	$scope.addSupplier = function (supplier) {

		// Clear the old supplies list to start with a fresh list
		// dominated by supplies that belong to this supplier
		$scope.supplies = [];

		// Apply the supplier to purchase order
		$scope.po.supplier = supplier;
		$scope.po.discount = supplier.discount;
		$scope.po.terms = supplier.terms;
		$scope.po.currency = supplier.currency;


		Supply.query({supplier_id: supplier.id, limit: 0, page_size: 50}, function (response) {
			$scope.supplies = $filter('filter')(response, supplier.name);
		});

		$scope.safeApply();

		//Reset the map
		if ($scope.marker) {
			$scope.marker.setMap(null);
		}
		clearRoute();
	 	map.setZoom(9);


		//Set marker for customer
		try {
			var address = supplier.addresses[0];

			if (address.latitude && address.longitude) {
				$scope.marker = createMarker({address: address, title: $scope.po.supplier.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});

				calculateRoute(home, $scope.marker.getPosition(), function () {
					clearRoute();
					$scope.marker.setMap(map);
   					map.panTo($scope.marker.getPosition());
   					map.setZoom(17);
				});

			} else {
				$scope.marker = null;
			}
		} catch (e) {
			$log.warn(JSON.stringify(e));
		}

		//Update the pricing of all items so far
		if ($scope.po.items) {
			for (var h = 0; h < $scope.po.items.length; h++) {
				try{
					if ($scope.po.items[h].hasOwnProperty('suppliers') && $scope.po.supplier) {
						if ($scope.po.supplier.id) {
							for (var i = 0; i < $scope.po.items[h].suppliers.length; i++) {
								if ($scope.po.items[h].suppliers[i].supplier == $scope.po.supplier.id) {
									$scope.po.items[h].cost = Number($scope.po.items[h].suppliers[i].cost);
									$scope.po.items[h].purchasing_units = $scope.po.items[h].suppliers[i].purchasing_units;

								}
							}
						}
					}
				} catch (e) {
					$log.warn(e);
				}
			}
		}

		//Retrieve known supplies for this supplier
		$scope.retrieveSupplies();
	};

	
	/**
	 * ACKNOWLEDGEMENT SECTION
	 *
	 * Describes the projects, room and phases
	 */

	$scope.acknowledgements = Acknowledgement.query({page_size:100, limit:0});
	
	// Watch on supplierSearchText to get products from the server
	$scope.retrieveAcks = function (query) {
		if (query) {
			Acknowledgement.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.acknowledgements.indexOfById(responses[i]) === -1) {
						$scope.acknowledgements.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Returns a list of projects whose codename matches the search term
	 * @public
	 * @param {String} query - Search term to apply against project.codename
	 * @returns {Array} - An array of projects whose codename matches the search term
	 */
	$scope.searchAcks = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var acks = [];
		/** 
		for (var i = 0; i < $scope.acknowledgements.length; i++) {
			if (angular.lowercase($scope.acknowledgements[i].id).indexOf(lowercaseQuery) !== -1) {
				acks.push($scope.acknowledgements[i]);
			}
		}
		*/

		var acks = $filter('filter')($scope.acknowledgements, query);
		console.log(acks);
		return acks;
	};

	$scope.addAck = function (acknowledgement) {
		if (acknowledgement) {
			console.log(acknowledgement);
			$scope.po.acknowledgement = acknowledgement;
		}
		
	};
	
		


	/**
	 * PROJECT SECTION
	 *
	 * Describes the projects, room and phases
	 */

	$scope.projects = Project.query({page_size:99999, limit:0});

	/**
	 * Returns a list of projects whose codename matches the search term
	 * @public
	 * @param {String} query - Search term to apply against project.codename
	 * @returns {Array} - An array of projects whose codename matches the search term
	 */
	$scope.searchProjects = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var projects = [];
		for (var i = 0; i < $scope.projects.length; i++) {
			if (angular.lowercase($scope.projects[i].codename).indexOf(lowercaseQuery) !== -1) {
				projects.push($scope.projects[i]);
			}
		}
		return projects;
	};

	$scope.addProject = function (project) {
		$scope.po.project = project;
	};

	/**
	 * Update the project's name if a project is not selected yet. This is incase, the project
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Project
	 * @returns {null}
	 */

	$scope.updateProjectName = function (projectName) {
		$scope.po.project = $scope.po.project || {codename: ''};

		if (!$scope.po.project.id) {
			$scope.po.project.codename = projectName || '';
		} else {
			if ($scope.po.project.codename.indexOf(projectName) == -1) {
				$scope.po.project = {codename: projectName};
			}
		}
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
		}, function (e) {
			$log.error(JSON.stringify(e));
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
		}, function (e) {
			$log.error(JSON.stringify(e));
		});
	};


	/**
	 * PRODUCT SECTION
	 *
	 * This section deals with the product listing and search
	 */

	// Watch on productSearchText to get products from the server
	$scope.retrieveSupplies = function (query) {
		$scope.supplies = $scope.supplies || [];
		if (query && !$scope.supplyQuery) {
			$scope.supplyQuery = true;
			var options = {};
			if (query) {
				options.q = query;
			}
	
			if ($scope.po.supplier) {
				if ($scope.po.supplier.id) {
					options.supplier_id = $scope.po.supplier.id;
				}
			}
	
			Supply.query(options, function (responses) {
				$scope.supplyQuery = false;
				for (var i = 0; i < responses.length; i++) {
					if ($scope.supplies.indexOfById(responses[i]) === -1) {
						$scope.supplies.push(responses[i]);
					}
				}
			}, function () {
				$scope.supplyQuery = false;
			});
		}
		
	};

	/**
	 * Returns a list of supplies whose description matches the search term
	 * @public
	 * @param {String} query - Search term to apply against supply.description
	 * @returns {Array} - An array of supplies whose description matches the search term
	 */
	$scope.searchSupplies = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var supplies = [];
		$scope.supplies = $scope.supplies || [];

		for (var i = 0; i < $scope.supplies.length; i++) {

			if (lowercaseQuery) {
				if (angular.lowercase(String($scope.supplies[i].description)).indexOf(lowercaseQuery) !== -1) {
					supplies.push($scope.supplies[i]);
				}
			} else {
				supplies.push($scope.supplies[i]);
			}

		}
		return supplies;
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
		console.log(item);

		if (item.description) {
			$scope.po.items = $scope.po.items || [];
			var purchasedItem = angular.copy(item);
			console.log(purchasedItem);
			delete purchasedItem.quantity;

			/*
			 * Apply the items unit cost or cost from supplier to the supply cost
			 */
			purchasedItem.cost = Number((purchasedItem.cost || purchasedItem.unit_cost) || 0);

			if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers') && $scope.po.supplier) {
				if ($scope.po.supplier.id) {
					for (var i = 0; i < purchasedItem.suppliers.length; i++) {
						if (purchasedItem.suppliers[i].supplier.id === $scope.po.supplier.id) {
							purchasedItem.cost = Number(purchasedItem.suppliers[i].cost);
							purchasedItem.unit_cost = Number(purchasedItem.suppliers[i].cost);
							purchasedItem.purchasing_units = purchasedItem.suppliers[i].purchasing_units;
							purchasedItem.suppliers[i].supplier = {id: $scope.po.supplier.id};
						}
					}
				}
			}

			// Update the specific supplier information for this item
			if (purchasedItem.suppliers) {
				for (var h = 0; h < purchasedItem.suppliers.length; h++) {
					if ($scope.po.supplier && purchasedItem.suppliers[h].supplier) {
						if (purchasedItem.suppliers[h].supplier.id === $scope.po.supplier.id) {
							purchasedItem.suppliers[h].purchasing_units = purchasedItem.purchasing_units;
						}
					}

				}
			}
			console.log(purchasedItem);

			//Add new supply to the list of items for the purchase order
			$scope.po.items.push(purchasedItem);
		}

	};

	/*
	 * Remove an item fro the purchase order
	 */
	$scope.removeItem = function (index) {
		$scope.po.items.splice(index, 1);

		if ($scope.po.items.length === 0) {
			$scope.po.items = [];
		}
	};

	/**
	 * Check if a supply is new for a supplier
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} supply - supply to be check
	 * @param {String|Object|Array|Boolean|Number} supplier - supplier to be checked against
	 * @returns {Boolean} - a boolean indicating if this is a new supply or not
	 */
	$scope.isNewSupply = function (supply, supplier) {
		if (supply.id && supplier && supply.suppliers) {
			for (var i = 0; i < supply.suppliers.length; i++) {
				if (supply.suppliers[i].supplier.id === supplier.id) {
					return false;
				}
			}
		}

		return true;
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
	/*
	$scope.$watch('po.items', function (newVal, oldVal) {
		try {
			//Filter out changes in length
			if (newVal.length == oldVal.length && newVal.length > 1) {
				//Loop through all the items;
				for (var i = 0; i < newVal.length; i++) {
					//Tests if the costs are different but the id is the same
					if (newVal[i].cost != oldVal[i].cost && newVal[i].id == oldVal[i].id) {
						var cost = newVal[i].cost;
						//We make a reference to the original object,
						//So that we can make sure the price has settled
						//in x milliseconds.
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
			$log.warn(e.stack);
		}
	}, true);
	*/

	/*
	 * Unit costs
	 */
	$scope.unitCost = function (unitCost, discount) {
		var costPreDiscount = unitCost;
		var discountAmount = (unitCost * (discount / 100));

		return unitCost - ((unitCost * (discount / 100)) || 0);
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
				subtotal += ($scope.unitCost(item.unit_cost, discount) * item.quantity);
			}
		}
		return subtotal || 0;
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
	$scope.validatePurchaseOrder = function (purchaseOrder) {
		purchaseOrder = purchaseOrder || $scope.po;

		if (!purchaseOrder.hasOwnProperty('supplier')) {
			throw new Error("Please select a supplier");
		} else {
			if (!purchaseOrder.supplier.name) {
				throw new Error("Please add a name for the supplier.");
			}

			if (!purchaseOrder.supplier.telephone) {
				throw new Error("Please add a telephone number for " + purchaseOrder.supplier.name);
			}
		}

		if (!purchaseOrder.receive_date instanceof Date ||
			!purchaseOrder.receive_date) {
			throw new Error("Please select a 'Receiving Date' for the order");
		}

		if (!purchaseOrder.currency) {
			throw new TypeError("Please select a currency for this order");
		}

		if (purchaseOrder.items.length <= 0) {
			throw new Error("Please add items to the purchase order");
		}

		if (purchaseOrder.items) {
			for (var i = 0; i < (purchaseOrder.items.length ||[]); i++) {
				if (!purchaseOrder.items[i].quantity || purchaseOrder.items[i].quantity <= 0) {
					throw new Error(purchaseOrder.items[i].description + " " + $scope.labels.quantity_error[$scope.lang]);
				}

				if (!purchaseOrder.items[i].type) {
					throw new Error(purchaseOrder.items[i].description + " " + $scope.labels.type_error[$scope.lang]);
				}
			}
		} else {
			throw new TypeError("Please add items to purchase before creating");
		}
		

		return true;
	};

	//Check the progress of customer, project creation
	$scope._checkProgress = function (progress, callback) {

		for (var key in progress) {
			if (progress[key] === false) {
				return false;
			} else if (progress[key] === 'error') {
				throw new Error();
			}
		}
		(callback || angular.noop)();
	};

	/**
	 * Create or update the supplier
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

	$scope._prepareSupplier = function (purchaseOrder, progress, callback) {
		//Checks if customer exists and creates if not
		if (!purchaseOrder.supplier.id && purchaseOrder.supplier.name) {
			progress.supplier = false;

			var supplier = new Supplier();
			angular.extend(supplier, purchaseOrder.supplier);

			supplier.$create(function (resp) {
				angular.extend(purchaseOrder.supplier, resp);
				progress.supplier = true;

				callback();
			}, function () {
				progress.supplier = 'error';
			});
		} else if (purchaseOrder.supplier.id) {
			progress.supplier = false;

			var supplier = new Supplier();
			angular.extend(supplier, purchaseOrder.supplier);

			supplier.$update(function (resp) {
				angular.extend(purchaseOrder.supplier, resp);
				progress.supplier = true;

				callback();

			}, function () {
				progress.supplier = 'error';
			});
		}
	};


	/**
	 * Create a new supply
	 *
	 * @private
	 * @param {Object} supply - supply object to create
	 * @param {Object} supplier - supplier to be associated with the supply
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

	$scope._createSupply = function (supply, supplier, progress, callback) {

		// Add progress check
		progress[supply.description] = false;

		/**
		 * 	Associate this supplier with the supply. The supplier needs to be
		 * copied so that reference is not passed along to succeeding new 
		 * items.
		 */
		supply.suppliers = [angular.copy(supplier)];
		supply.suppliers[0].supplier = {id: supplier.id};
		supply.suppliers[0].cost = supply.unit_cost || supply.cost;
		supply.suppliers[0].unit_cost = supply.unit_cost || supply.cost;

		var resource = new Supply(supply);

		// Create a new supply
		resource.$create(function (response) {

			angular.extend(supply, response);

			// Move supply id location to avoid item update
			// instead of item creation
	  		supply.supply = {id: supply.id};
			delete supply.id;

			//Add price
			supply.unit_cost = supply.suppliers[0].cost;
			supply.cost = supply.suppliers[0].cost;

			// Check the progress
			progress[supply.description] = true;
			$scope._checkProgress(progress, callback);

		}, function (reason) {
			$log.error(reason);
		});

	};

	/**
	 * Update and existing supply
	 *
	 * @private
	 * @param {Object} supply - supply object to create
	 * @param {Object} supplier - supplier to be associated with the supply
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

	$scope._updateSupply = function (supply, supplier, progress, callback) {



		// Update supply with new supplier
		if ($scope.isNewSupply(supply, supplier)) {
			var supplierData = angular.copy(supplier);
			supplierData.cost = supply.unit_cost || supply.cost;

			// Move the supplier id
			supplierData.supplier = {'id': supplierData.id};
			delete supplierData.id;

			// Add new supplier
			supply.suppliers = supply.suppliers || [];
			supply.suppliers.push(supplierData);

			// Add progress check
			progress[supply.id] = false;

			var resource = new Supply(supply);

			resource.$update(function (response) {
				angular.extend(supply, response);

				// Move supply id location to avoid item update
				// instead of item creation
		  		supply.supply = {id: supply.id};
				delete supply.id;

				// Check the progress
				progress[supply.supply.id] = true;
				$scope._checkProgress(progress, callback);

			}, function (reason) {
				$log.error(reason);
			});

		} else {
			// Update the specific supplier information for this item
			for (var h = 0; h < supply.suppliers.length; h++) {
				if (supplier && supply.suppliers[h].supplier) {
					if (supply.suppliers[h].supplier.id === supplier.id) {
						supply.suppliers[h].purchasing_units = supply.purchasing_units;

						// Update the supply with the new cost for this supplier
						supply.suppliers[h].cost = supply.unit_cost;
						supply.suppliers[h].unit_cost = supply.unit_cost;
					}
				}

			}

			var resource = new Supply(supply);

			resource.$update(function (response) {
				angular.extend(supply, response);

				// Move supply id location to avoid item update
				// instead of item creation
		  		supply.supply = {id: supply.id};
				delete supply.id;

				// Create the unit cost 
				for (var h=0; h < supply.suppliers.length; h++) {
					if (supply.suppliers[h].id == $scope.po.supplier.id) {
						supply.unit_cost = supply.suppliers[h].cost;
						supply.cost = supply.suppliers[h].cost;
					}
				}

				// Check the progress
				progress[supply.supply.id] = true;
				$scope._checkProgress(progress, callback);

			}, function (reason) {
				$log.error(reason);
			});
		}
	};

	/**
	 * Prepare the purchase order for creation. Creates supplier, project, room, and phase
	 * if they are respectively new
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @param {Function} callback - Function to call if the creations are successful
	 */

	$scope._preparePurchaseOrder = function (purchaseOrder, callback) {

		// Prepare the supplies and projects and makes final callback to create po
		// To be passed into prepare supplier callback
		function prepareSuppliesAndProjects() {
			//Checks if the project exists and create if not
			if (purchaseOrder.project) {
				if (!purchaseOrder.project.id && purchaseOrder.project.codename) {
					progress.project = false;
					var project = new Project();
					angular.extend(project, purchaseOrder.project);

					project.$create(function (resp) {
						angular.extend(purchaseOrder.project, resp);
						progress.project = true;
						$scope._checkProgress(progress, callback);
					}, function () {
						progress.project = 'error';
					});
				}
			}

			//Check if items are custom
			for (var i = 0; i < purchaseOrder.items.length; i++) {
				if (purchaseOrder.items[i].hasOwnProperty('id')) {
			  		// Update the supply
					$scope._updateSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
				} else {
					// Create a new supply
					$scope._createSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
				}
			}

			// Signal to progress check that supplies preparation has passed
			progress.supplies = true;
			$scope._checkProgress(progress, callback);
		}

		//Object used to track progress of sub-resource creations
		var progress = {supplies:false};
		$scope._prepareSupplier(purchaseOrder, progress, prepareSuppliesAndProjects);

	};

	$scope._sendCreateRequest = function () {
		if (!$scope.creating) {
			$scope.creating = true;

			purchaseOrder = this || $scope.po;


			purchaseOrder.$create(function (response) {
				$scope.creating = false;
				Notification.display('Purchase order created.');

				angular.extend(purchaseOrder, response);
				//Change page to newly saved purchase order page
				//$location.path("/order/purchase_order/" + response.id);

			}, function (e) {
				$scope.creating = false;
				$log.error(JSON.stringify(e));
				Notification.display("There was an error in creating the purchase order. A report has been sent to Charlie");

			});

		}

	};

	/*
	 * Save the purchase order to the server
	 */
	$scope.create = function (purchaseOrder) {
		purchaseOrder = purchaseOrder || $scope.po;
		try {
			if ($scope.validatePurchaseOrder(purchaseOrder)) {

				Notification.display('Creating new purchase order...');
				
				$scope._preparePurchaseOrder(purchaseOrder, $scope._sendCreateRequest.bind(purchaseOrder));
			}
		} catch (e) {
			$log.error(JSON.stringify(e));
			Notification.display(e.message);
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
