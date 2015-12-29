
angular.module('employeeApp')
.controller('OrderAcknowledgementCreateCtrl', ['$scope', 'Acknowledgement', 'Customer', '$filter', '$window', 'Project', 'Notification', 'FileUploader', 'Room', 'Phase', '$mdDialog', '$log', 'Upholstery', 'Fabric',
function ($scope, Acknowledgement, Customer, $filter, $window, Project, Notification, FileUploader, Room, Phase, $mdDialog, $log, Upholstery, Fabric) {
    //Vars
    $scope.uploading = false;
    $scope.customImageScale = 100;
	
	$scope.projects = Project.query({page_size:99999, limit:0, status__exclude:"completed"});
    $scope.ack = new Acknowledgement();
	$scope.customers = Customer.query({page_size:9999, limit:0});
    
    var uploadTargets = [];
    var storage = window.localStorage;
		
	/*
 	 * Map variables and settings
 	 */
	var map,
		marker,
		geocoder = new google.maps.Geocoder(),
		markers = [],
		mapOptions = {
				center: new google.maps.LatLng(13.776239, 100.527884),
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROAD
		},
	
	/**
	 *	MAPS SECTION
	 *  
	 * Implements all the functions and necessary to initialize and control
	 * google maps instance
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
	
	// Create a traffic layer and apply it to the map
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);

	/**
	 * Create a new marker for the map
	 * @private
	 * @param {Object} configs - An object container latitude and longitude to create the marker
	 * @returns {Object} marker - Returns an instance of the new marker created
	 */
	
	function createMarker(configs) {
		
		if (configs.address) {
			var lat = configs.address.latitude || configs.latitude,
				lng = configs.address.longitude || configs.longitude;
		} else {
			var lat = configs.latitude,
				lng = configs.longitude;
		}
		
		
	
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
	
	/**
	 * Creates a marker and then adds it to the map
	 * @public
	 * @returns {Object} Marker - returns and instance of the new marker
	 */
	
	$scope.addMarker = function () {
		var marker = createMarker({latitude: 13.776239, longitude: 100.527884, title:$scope.ack.customer.name});
		
		
	}
	
	
	//Restore saved acknowledgement from localStorage
    if (storage.getItem('acknowledgement-create')) {
        angular.extend($scope.ack, JSON.parse(storage.getItem('acknowledgement-create')));
				
		//Set marker for customer
		try {
			if($scope.ack.customer) {
				var address = $scope.ack.customer.addresses[0];
				if (address.latitude && address.longitude) {
					 marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
					 map.panTo(marker.getPosition());
					 map.setZoom(17);
				} 
			}
		} catch (e) {
			$log.error(e);
		}
		
    }
	
	//Set items and employee
    $scope.ack.items = $scope.ack.items || [];
    $scope.employee = {id: $scope.currentUser.id};
    
    //Save a copy of acknowledgement to localStorage 
	$scope.tempSave = function () {
        storage.setItem('acknowledgement-create', JSON.stringify($scope.ack));
    };
    
	/*
 	 * CUSTOMER SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
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
	}
	
	/**
	 * Watches $scope.ack.customer for changes. If the customer changes, and new marker is created. 
	 * @public
	 * @param {String}  Describe this parameter
	 * @returns {null}
	 */
	/*
	$scope.$watch('ack.customer', function (newVal, oldVal) {
		if (newVal) {
			if (newVal.id && !oldVal) {
				// Temporarily save the acknowledgement
				$scope.tempSave();
			
				// Create a marker for the customer
				try {
					var address = customer.addresses[0];
					if (address.latitude && address.longitude) {
						 marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
						 map.panTo(marker.getPosition());
						 map.setZoom(17);
					}
				} catch (e) {
					$log.warn(JSON.stringify(e));
				}
				
			} else if (newVal.id !== oldVal.id) {
				// Temporarily save the acknowledgement
				$scope.tempSave();
			
				// Create a marker for the customer
				try {
					var address = customer.addresses[0];
					if (address.latitude && address.longitude) {
						 marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
						 map.panTo(marker.getPosition());
						 map.setZoom(17);
					}
				} catch (e) {
					$log.warn(JSON.stringify(e));
				}
			}
		}
		
	})
	*/
	
	/**
	 * Describe what this method does
	 * @public
	 * @param {String} customerName - Name of the Customer
	 * @returns {null} 
	 */
	
	$scope.updateCustomerName = function (customerName) {
		$scope.ack.customer = $scope.ack.customer || {name: ''};
		
		if (!$scope.ack.customer.id) {
			$scope.ack.customer.name = customerName || '';
		} else {
			if ($scope.ack.customer.name.indexOf(customerName) == -1) {
				$scope.ack.customer = {name: customerName};
			}
		}
	};
	
	
	
	//Add customer and hide modal
    $scope.addCustomer = function (customer) {
        //Set Customer
        $scope.ack.customer = customer;
        //Hide Customer Panel
        $scope.showCustomers = false;
        $scope.tempSave();
		
		if (marker) {
			marker.setMap(null);
		}
		//Set marker for customer
		try {
			var address = customer.addresses[0];
			if (address.latitude && address.longitude) {
				 marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				 map.panTo(marker.getPosition());
				 map.setZoom(17);
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
	$scope.searcProjects = function (query) {
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
		$scope.ack.project = project;
	}
	
	/**
	 * Update the project's name if a project is not selected yet. This is incase, the project
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Project
	 * @returns {null} 
	 */

	$scope.updateProjectName = function (projectName) {
		$scope.ack.project = $scope.ack.project || {codename: ''};
	
		if (!$scope.ack.project.id) {
			$scope.ack.project.codename = projectName || '';
		} else {
			if ($scope.ack.project.codename.indexOf(projectName) == -1) {
				$scope.ack.project = {codename: projectName};
			}
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
		
		Notification.display("Creating project...", false);
			
		$scope.project.$create(function (resp) {
			$scope.projects.push(resp);
			$scope.ack.project = resp;
			Notification.hide();
			$scope.project = new Project();
		}, function (e) {
			$log.error(JSON.stringify(e));
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
		room.project = $scope.ack.project;
		$scope.room = new Room();
		room.$create(function (resp) {
			$scope.ack.project.rooms.push(resp);
			$scope.ack.room = resp;
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
		phase.project = $scope.ack.project.id;
		$scope.phase = undefined;
		phase.$create(function (resp) {
			$scope.ack.project.phases.push(resp);
			$scope.ack.phase = resp;
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
			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
	        $scope.ack.items.push(product);
	        $scope.tempSave();
		
			delete $scope.tempProduct;
			delete $scope.productSearchText;
		}
    };
    
	
	
    $scope.removeItem = function (index) {
        $scope.ack.items.splice(index, 1);
        $scope.tempSave();
    };
	
	/**
	 * FILES SECTIONs
	 *
	 * This section deals with files that are associated or to be associated with this acknowledgement
	 */
	
	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addFiles = function (files) {
		$scope.ack.files = $scope.ack.files || []; 
		
		/* jshint ignore:start */
		for (var i = 0; i < files.length; i++) {
			$scope.ack.files.push({filename: files[i].name});
			
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.ack.files.length; h++) {
					if (data.filename == $scope.ack.files[h].filename) {
						angular.extend($scope.ack.files[h], data);
					}
				}
			}, function (e) {
				$log.error(JSON.stringify(e));
			});
		}
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
		var lowercaseQuery = angular.lowercase(query);
		var products = [];
		for (var i = 0; i < $scope.upholsteries.length; i++) {
			if (angular.lowercase($scope.upholsteries[i].description).indexOf(lowercaseQuery) !== -1) {
				products.push($scope.upholsteries[i]);
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
		console.log(query);
		
		if (query) {
			Fabric.query({q:query}, function (responses) {
				console.log(responses);
				for (var i = 0; i < responses.length; i++) {
					console.log($scope.fabrics.indexOfById(responses[i]));
					if ($scope.fabrics.indexOfById(responses[i]) === -1) {
						$scope.fabrics.push(responses[i]);
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
	$scope.searchFabrics = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
			if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
				fabrics.push($scope.fabrics[i]);
			}
		}
		return fabrics;
	};
	
	
    $scope.create = function () {
		$scope.ack.employee = $scope.currentUser;
        $scope.tempSave();
        try {
            if ($scope.isValidated()) {
				
				Notification.display("Creating new acknowledgment", false);
				
				/*
				 * Preps for creation of a new project
				 */
				if ($scope.ack.newProject) {
					$scope.ack.project = {codename: $scope.ack.newProjectName};

					delete $scope.ack.newProject;
					delete $scope.ack.newProjectName;

				}
				
                $scope.ack.$create(function (response) {
					
					Notification.display("Acknowledgement created with ID: " + $scope.ack.id, 2000);
						
                    if (response.pdf.acknowledgement) {
						$window.open(response.pdf.acknowledgement);
                    }
                    if (response.pdf.confirmation) {
						$window.open(response.pdf.confirmation);
                    }
                    if (response.pdf.production) {
						$window.open(response.pdf.production);
                    }
                    angular.extend($scope.ack, JSON.parse(storage.getItem('acknowledgement-create')));
					
					delete $scope.ack.newProject;
					delete $scope.ack.newProjectName;
					
                }, function (e) {
                    $log.error(JSON.stringify(e));
					Notification.display("There was an error in creating the acknowledgement. A report has been sent to Charlie.", false);
                });
            }
        } catch (e) {
			$log.error(JSON.stringify({message: e, data: $scope.ack}));
			Notification.display(e.message, false);
        }
    };
    
    $scope.reset = function () {
        $scope.ack = new Acknowledgement();
        $scope.ack.items = [];
        storage.removeItem('acknowledgement-create');
    };
    
    //Validations
    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
        if (!$scope.ack.customer) {
            throw new TypeError("Please add a customer.");
        } else {
            if (!$scope.ack.customer.hasOwnProperty('name')) {
                throw new ReferenceError("Missin customer name");
            }
        }
        
        //Validate ordered Items
        if (!$scope.ack.items) {
            throw new TypeError("Products is not an array");
        } else {
			//Verifies that there are items ordered
            if ($scope.ack.items.length <= 0) {
                throw new RangeError("No products added to the order");
            } else {
                for (var i = 0; i < $scope.ack.items.length; i++) {
					var item = $scope.ack.items[i];
                    /*
                     * Check that there is a quantity 
                     * for each piece of product
                     */
                    if (!$scope.ack.items[i].hasOwnProperty('quantity') || !$scope.ack.items[i].quantity) {
                        throw new RangeError("Expecting a quantity of at least 1 for " + $scope.ack.items[i].description);
                    }
                    
                    /*
                     * Validates that every item has a price
                     */
                    if (!$scope.ack.items[i].hasOwnProperty('has_price')) {
                        //throw new ReferenceError("Product missing 'has_price' attribute");
                    } else {
                        if (!$scope.ack.items[i].has_price) {
                            //throw new TypeError("Product missing price");
                        }
                    }
                    
                    /*
                     * Validates custom items
                     */
                    if (!item.hasOwnProperty('id')) {
						if (!item.is_custom) {
							throw new TypeError("Item without id is not custom. Please contact an Administrator.");
						}
                    }
                }
            }
        }
        
        //Validate Delivery Date
        if (!$scope.ack.delivery_date) {
            throw new TypeError("Please select a preliminary delivery date.");
        }
        
        //Validate vat
        if ($scope.ack.vat === undefined || $scope.ack.vat === null) {
            throw new TypeError("Please set the vat.");
        }
        
        //Validate purchase order number
        if (!$scope.ack.po_id) {
            throw new TypeError("PO# is not defined");
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
			if (testWords[j].re.test($scope.ack.remarks) && !$scope.ack[testWords[j].type]) {
				throw new TypeError(testWords[j].message);
			}
		}
        //Return true for form validated
		return true;
	};
        
}]);
