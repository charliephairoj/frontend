
angular.module('employeeApp')
.controller('OrderEstimateCreateCtrl', ['$scope', 'Estimate', 'Customer', '$filter', '$window', 'Project', 'Notification', 'FileUploader', 'Room', 'Phase', '$mdDialog', '$log', 'Upholstery', 'Fabric', '$location', '$rootScope',
function ($scope, Estimate, Customer, $filter, $window, Project, Notification, FileUploader, Room, Phase, $mdDialog, $log, Upholstery, Fabric, $location, $rootScope) {

    //Vars
    $scope.uploading = false;
    $scope.customImageScale = 100;

	$scope.projects = Project.query({page_size:99999, limit:0, status__exclude:"completed"});
    $scope.estimate = new Estimate();

    var uploadTargets = [];
    var storage = window.localStorage;
	var tempSaveTimer = null;

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
	map = new google.maps.Map($('#create-ack-map')[0], mapOptions);

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
			if (this.address.latitude != $scope.estimate.customer.addresses[0].latitude ||
				this.address.longitude != $scope.estimate.customer.addresses[0].longitude) {
					$scope.estimate.customer.addresses[0].latitude = latLng.lat();
					$scope.estimate.customer.addresses[0].longitude = latLng.lng();
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
		$scope.marker = createMarker({address: {}, latitude: 13.935441, longitude: 100.6864353, title:$scope.estimate.customer.name});
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


	//Restore saved Estimate from localStorage
    if (storage.getItem('estimate-create')) {
        angular.extend($scope.estimate, JSON.parse(storage.getItem('estimate-create')));

		//Set marker for customer
		try {
			if($scope.estimate.customer) {
				$scope.estimate.customer = new Customer($scope.estimate.customer);
				// Restore the name of the customer to the autocomplete field
				$scope.customerSearchText = $scope.estimate.customer.name;
				$scope.selectedCustomer = $scope.estimate.customer;

				var address = $scope.estimate.customer.addresses[0];
				if (address.latitude && address.longitude) {
					 $scope.marker = createMarker({address: address, title: $scope.estimate.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});

	 				calculateRoute(home, $scope.marker.getPosition(), function () {
	 					clearRoute();
	 					$scope.marker.setMap(map);
	    				map.panTo($scope.marker.getPosition());
	    				map.setZoom(17);
	 				});
				}
			}
		} catch (e) {
			$log.error(e);
		}

		if ($scope.estimate.project) {
			$scope.estimate.project = new Project($scope.estimate.project);
			$scope.projectSearchText = $scope.estimate.project.codename;
			$scope.selectedProject = $scope.estimate.project;
		}

    }

	//Set items and employee
    $scope.estimate.items = $scope.estimate.items || [];
    $scope.employee = {id: $scope.currentUser.id};

    //Save a copy of Estimate to localStorage
	$scope.tempSave = function () {
        storage.setItem('estimate-create', JSON.stringify($scope.estimate));
    };

	$scope.$watch('estimate', function (newVal, oldVal) {

		if (newVal && oldVal) {
			if (!tempSaveTimer) {
				tempSaveTimer = setTimeout(function () {
					Notification.display('Temporarily saving Estimate....', 2000);
					tempSaveTimer = null;
					$scope.tempSave();
				}, 1000);
			}
		}
	});

	/*
 	 * CUSTOMER SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/

	/**
	 * Customer Variables
	 */
	$scope.customers = Customer.query({page_size:9999, limit:0});

	// Watch on customerSearchText to get products from the server
	$scope.retrieveCustomers = function (query) {
		console.log(query);
		if (query) {
			Customer.query({q:query, limit:5}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.customers.indexOfById(responses[i]) === -1) {
						$scope.customers.push(responses[i]);
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

	$scope.searchCustomers = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var customers = [];
		for (var i = 0; i < $scope.customers.length; i++) {
			if (angular.lowercase($scope.customers[i].name).indexOf(lowercaseQuery) !== -1) {
				customers.push($scope.customers[i]);
			}
		}

		return customers;
	};


	/**
	 * Updates the customer name, so that if the customer is a new one,
	 * a customer object is already in place to accept the new details
	 *
	 * @public
	 * @param {String} customerName - Name of the Customer
	 * @returns {null}
	 */

	$scope.updateCustomerName = function (customerName) {

		$scope.retrieveCustomers(customerName);

		$scope.estimate.customer = $scope.estimate.customer || {name: '', addresses: []};

		if (!$scope.estimate.customer.id) {
			clearRoute();
			$scope.estimate.customer.name = customerName || '';
		} else {
			if ($scope.estimate.customer.name.indexOf(customerName) == -1) {
				$scope.estimate.customer = {name: customerName, addresses: []};
			}
		}
	};



	//Add customer and hide modal
    $scope.addCustomer = function (customer) {
        //Set Customer and save
        $scope.estimate.customer = customer;
        $scope.tempSave();

		//Reset the map
		if ($scope.marker) {
			$scope.marker.setMap(null);
		}
		clearRoute();
	 	map.setZoom(9);


		//Set marker for customer
		try {
			var address = customer.addresses[0];

			if (address.latitude && address.longitude) {
				$scope.marker = createMarker({address: address, title: $scope.estimate.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});

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
    };


	/**
	 * PROJECT SECTION
	 *
	 * Describes the projects, room and phases
	 */

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
		console.log(projects);
		return projects;
	};

	$scope.addProject = function (project) {
		$scope.estimate.project = project;
		$scope.tempSave();
	};

	/**
	 * Update the project's name if a project is not selected yet. This is incase, the project
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Project
	 * @returns {null}
	 */

	$scope.updateProjectName = function (projectName) {
		$scope.estimate.project = $scope.estimate.project || {codename: ''};

		if (!$scope.estimate.project.id) {
			$scope.estimate.project.codename = projectName || '';
		} else {
			if ($scope.estimate.project.codename.indexOf(projectName) == -1) {
				$scope.estimate.project = {codename: projectName};
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
		room.project = $scope.estimate.project;
		$scope.room = new Room();
		room.$create(function (resp) {
			$scope.estimate.project.rooms.push(resp);
			$scope.estimate.room = resp;
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
		phase.project = $scope.estimate.project.id;
		$scope.phase = undefined;
		phase.$create(function (resp) {
			$scope.estimate.project.phases.push(resp);
			$scope.estimate.phase = resp;
		}, function (e) {
			$log.error(JSON.stringify(e));
		});
	};

	/*
	 * Cancel adding a item
	 */
	$scope.cancelAddPhase = function () {
		$mdDialog.hide();
		$scope.phase = undefined;
	};

    $scope.addItem = function (product) {

		if (product.description) {
            var product = angular.copy(product);

			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
            product.unit_price = product.price;
	        $scope.estimate.items.push(product);
	        $scope.tempSave();

			delete $scope.tempProduct;
			delete $scope.productSearchText;
		}
    };



    $scope.removeItem = function (index) {
        $scope.estimate.items.splice(index, 1);
        $scope.tempSave();
    };

	/**
	 * FILES SECTIONs
	 *
	 * This section deals with files that are associated or to be associated with this Estimate
	 */

	/**
	 * Add files to the file uploader. On callback the files are then associated with the Estimate.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addFiles = function (files) {
		$scope.estimate.files = $scope.estimate.files || [];

		/* jshint ignore:start */
		Notification.display('Uploading files');

		for (var i = 0; i < files.length; i++) {
			$scope.estimate.files.push({filename: files[i].name});

			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.estimate.files.length; h++) {
					if (data.filename == $scope.estimate.files[h].filename) {
						angular.extend($scope.estimate.files[h], data);
					}
				}

				Notification.display('File uploaded');
				$scope.tempSave();

			}, function (e) {
				$log.error(JSON.stringify(e));
			});
		}

		/* jshint ignore:end */
	};

	/**
	 * Add files to the file uploader. On callback the files are then associated with the Estimate.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addImage = function (files, item) {
		console.log(files);
		$scope.estimate.files = $scope.estimate.files || [];

		/* jshint ignore:start */

		Notification.display('Uploading image...');


		var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
		promise.then(function (result) {
			var data = result.data || result;
			item.image = data

			Notification.display('Image uploaded');
			$scope.tempSave();

		}, function (e) {
			$log.error(JSON.stringify(e));
		});
		/* jshint ignore:end */
	};

	/**
	 * PRODUCT SECTION
	 *
	 * This section deals with the product listing and search
	 */

	// Inital list of upholsteries
	$scope.upholsteries = Upholstery.query();

	// Watch on productSearchText to get products from the server
	$scope.retrieveUpholsteries = function (query) {
		if (query) {
			Upholstery.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.upholsteries.indexOfById(responses[i]) === -1) {
						$scope.upholsteries.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Returns a list of upholsteries whose description matches the search term
	 * @public
	 * @param {String} query - Search term to apply against project.codename
	 * @returns {Array} - An array of projects whose codename matches the search term
	 */
	$scope.searchProducts = function (query) {

		var products = [];
		var lowercaseQuery = query ? angular.lowercase(query.trim()) : '';

		for (var i = 0; i < $scope.upholsteries.length; i++) {
            try{
                var description = $scope.upholsteries[i].description;
                description = description.toLowerCase();
                if (description.indexOf(lowercaseQuery) !== -1 ) {
                    products.push($scope.upholsteries[i]);
                }
            } catch (e) {
                console.log(e);
            }

		}

		return products;
	};


	/**
	 * FABRIC SECTION
	 *
	 * This section deals with the product listing and search
	 */

	// Inital list of upholsteries
	$scope.fabricSearchText = null;
	$scope.fabrics = Fabric.query({page_size:9999, limit:0});

	// Watch on productSearchText to get products from the server
	$scope.retrieveFabrics = function (query) {
		if (query) {
			Fabric.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.fabrics.indexOfById(responses[i]) === -1) {
						$scope.fabrics.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Returns a list of fabric whose description matches the search term
	 *
	 * @public
	 * @param {String} query - Search term to apply against fabric.description
	 * @returns {Array} - An array of fabrics whose description matches the search term
	 */
	$scope.searchFabrics = function (query) {
		var lowercaseQuery = query ? angular.lowercase(query.trim()) : '';
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
            try{
                var description = $scope.fabrics[i].description;
                description = description.toLowerCase()
                if (description.indexOf(lowercaseQuery) !== -1) {
                    fabrics.push($scope.fabrics[i]);
                }
            } catch (e) {
                console.log(e);
            }

		}
		return fabrics;
	};


	/**
	 * Estimate VALIDATION, PREPARATION AND CREATION
	 *
	 * This section deals with validating the details of the acknowlegement, preparing
	 * the Estimate by creating new customers, projects, rooms and phases as necessary,
	 * and creating the actually Estimate
	 */

	/**
	 * Validates the data of the Estimate
	 *
	 * @public
	 * @returns Boolean - Returns true if the Estimate is valid
	 */

    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
        if (!$scope.estimate.customer) {
            throw new TypeError("Please add a customer.");
        } else {
            if (!$scope.estimate.customer.hasOwnProperty('name')) {
                throw new ReferenceError("Missin customer name");
            }
        }

		
		if (!$scope.estimate.currency) {
            //throw new TypeError("Please select a currency.");
        }
		

        //Validate ordered Items
        if (!$scope.estimate.items) {
            throw new TypeError("Products is not an array");
        } else {
			//Verifies that there are items ordered
            if ($scope.estimate.items.length <= 0) {
                throw new RangeError("No products added to the order");
            } else {
                for (var i = 0; i < $scope.estimate.items.length; i++) {
					var item = $scope.estimate.items[i];
                    /*
                     * Check that there is a quantity
                     * for each piece of product
                     */
                    if (!$scope.estimate.items[i].hasOwnProperty('quantity') || !$scope.estimate.items[i].quantity) {
                        throw new RangeError("Expecting a quantity of at least 1 for " + $scope.estimate.items[i].description);
                    }

                    /*
                     * Validates that every item has a price
                     */
                    if (!$scope.estimate.items[i].hasOwnProperty('has_price')) {
                        //throw new ReferenceError("Product missing 'has_price' attribute");
                    } else {
                        if (!$scope.estimate.items[i].has_price) {
                            //throw new TypeError("Product missing price");
                        }
                    }
                }
            }
        }

        //Validate Delivery Date
        if (!$scope.estimate.delivery_date) {
            throw new TypeError("Please select a preliminary delivery date.");
        }

        //Validate vat
        if ($scope.estimate.vat === undefined || $scope.estimate.vat === null) {
            throw new TypeError("Please set the vat.");
        }

        //Validate purchase order number
        if (!$scope.estimate.po_id) {
            //throw new TypeError("PO# is not defined");
        }

		//Test if the project was declared in the remarks section
		testWords = [
			{
				re: /ห้อง/ig,
				type: 'room',
			 	message: "Please specify the room in room selection"
			},
			{
				re: /บ้าน/ig,
				type: 'project',
			 	message: "Please specify the project in the project selection"
			},
			{
				re: /บ้านตัวอย่าง/ig,
				type: 'project',
			 	message: "Please specify the project in the project selection"
			},
			{
				re: /ลดาวัลย์/ig,
				type: 'project',
			 	message: "Please specify the project in the project selection"
			},
			{
				re: /โครงการ/ig,
				type: 'project',
			 	message: "Please specify the project in the project selection"
			}
		];
		for (var j = 0; j < testWords.length; j++) {
			if (testWords[j].re.test($scope.estimate.remarks) && !$scope.estimate[testWords[j].type]) {
				//throw new TypeError(testWords[j].message);
			}
		}

        //Return true for form validated
		return true;
	};

	/**
	 * Prepare the Estimate for creation. Creates customers, projects, rooms, and phases
	 * if they are respectively new
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

	function prepareEstimate (estimate, callback) {
		//Object used to track progress of sub-resource creations
		var progress = {fullRun: false};

		//Check the progress of customer, project creation
		function checkProgress (callback) {
			for (var key in progress) {
				if (progress[key] === false) {
					return false;
				} else if (progress[key] === 'error') {
					throw new Error();
				}
			}
			(callback || angular.noop)();
		}

		//Checks if customer exists and creates if not
		if (!estimate.customer.id && estimate.customer.name) {
			progress.customer = false;
			var customer = new Customer();
			angular.extend(customer, estimate.customer);

			customer.$create(function (resp) {
				angular.extend(estimate.customer, resp);
				progress.customer = true;
				checkProgress(callback);
			}, function () {
				progress.customer = 'error';
			});
		} else if (estimate.customer.id) {
			//progress.customer = false;
			/*
			if (estimate.customer.$update) {
				estimate.customer.$update(function (resp) {
					angular.extend(estimate.customer, resp);
					progress.customer = true;
					checkProgress(callback);
				}, function () {
					progress.customer = 'error';
				});
			}
			*/

		}

		//Checks if the project exists and create if not
		if (estimate.project) {
			if (!estimate.project.id && estimate.project.codename) {
				progress.project = false;
				var project = new Project();
				angular.extend(project, estimate.project);

				project.$create(function (resp) {
					angular.extend(estimate.project, resp);
					progress.project = true;
					checkProgress(callback);
				}, function () {
					progress.project = 'error';
				});
			}
		}

		//Check if items are custom
		for (var i = 0; i < estimate.items.length; i++) {
			if (!estimate.items[i].hasOwnProperty('id')) {
				estimate.items[i].is_custom = true;
			}
		}

		progress.fullRun = true;
		console.log(progress)

		checkProgress(callback);

	}

	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */

    $scope.create = function () {
		$scope.estimate.employee = $scope.currentUser;
        $scope.tempSave();

        try {
            if ($scope.isValidated()) {

				Notification.display("Creating new Quotation...", false);

				prepareEstimate($scope.estimate, function () {
	                $scope.estimate.$create(function (response) {

						Notification.display("Estimate created with ID: " + $scope.estimate.id, 2000);

						for (var h = 0; h < response.files.length; h++) {
							$window.open(response.files[h].url);
						}

	                    //$scope.reset();
						//$location.path("order/Estimate/" + response.id);


	                }, function (e) {
	                    $log.error(JSON.stringify(e));
						Notification.display("There was an error in creating the Estimate. A report has been sent to Charlie.", false);
	                });
				});


            }
        } catch (e) {
			$log.error(JSON.stringify({message: e, data: $scope.estimate}));
			Notification.display(e.message, false);
        }
    };

    $scope.reset = function () {
        $scope.estimate = new Estimate();
        $scope.estimate.items = [];
        storage.removeItem('estimate-create');
    };



}]);
