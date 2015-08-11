
angular.module('employeeApp')
.controller('OrderAcknowledgementCreateCtrl', ['$scope', 'Acknowledgement', 'Customer', '$filter', '$window', 'Project', '$mdToast', 'FileUploader', 'Room', 'Phase', '$mdDialog',
function ($scope, Acknowledgement, Customer, $filter, $window, Project, $mdToast, FileUploader, Room, Phase, $mdDialog) {
    //Vars
    $scope.showFabric = false;
    $scope.uploading = false;
    $scope.customImageScale = 100;
	
	$scope.projects = Project.query({page_size:99999, limit:0, status__exclude:"completed"});
    $scope.ack = new Acknowledgement();
    
    var uploadTargets = [];
    var storage = window.localStorage,
		
		/*
	 	 * Map variables and settings
	 	 */ 
		map,
		marker,
		geocoder = new google.maps.Geocoder(),
		markers = [],
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
	map = new google.maps.Map($('#create-ack-map')[0], mapOptions);
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
	
	//Restore saved acknowledgement from localStorage
    if (storage.getItem('acknowledgement-create')) {
        angular.extend($scope.ack, JSON.parse(storage.getItem('acknowledgement-create')));
		
		//Set marker for customer
		try {
			var address = $scope.ack.customer.addresses[0];
			if (address.latitude && address.longitude) {
				 marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				 map.panTo(marker.getPosition());
				 map.setZoom(17);
			} 
		} catch (e) {
			console.error(e);
		}
		
    }
	
	//Set items and employee
    $scope.ack.items = $scope.ack.items || [];
    $scope.employee = {id: $scope.currentUser.id};
    
    //Save a copy of acknowledgement to localStorage 
	$scope.tempSave = function () {
        storage.setItem('acknowledgement-create', JSON.stringify($scope.ack));
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
			$scope.ack.project = resp;
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
		room.project = $scope.ack.project;
		$scope.room = new Room();
		room.$create(function (resp) {
			$scope.ack.project.rooms.push(resp);
			$scope.ack.room = resp;
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
        $scope.ack.items.push(product);
        $scope.tempSave();
    };
    
    $scope.removeItem = function (index) {
        $scope.ack.items.splice(index, 1);
        $scope.tempSave();
    };
	
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
			}, function () {
				
			});
		}
		/* jshint ignore:end */
	};
    
    $scope.create = function () {
		$scope.ack.employee = $scope.currentUser;
        $scope.tempSave();
        try {
            if ($scope.isValidated()) {
				
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content("Creating new acknowledgement...")
					.hideDelay(0));
				
				/*
				 * Preps for creation of a new project
				 */
				if ($scope.ack.newProject) {
					$scope.ack.project = {codename: $scope.ack.newProjectName};

					delete $scope.ack.newProject;
					delete $scope.ack.newProjectName;

				}
				
                $scope.ack.$create(function (response) {
					
                   	$mdToast.show($mdToast
						.simple()
						.position('top right')
						.content("Acknowledgement created with ID: " + $scope.ack.id)
						.hideDelay(2000));
						
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
                    console.error(e);
					$mdToast.show($mdToast
						.simple()
						.content(e)
						.hideDelay(0));
                });
            }
        } catch (e) {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content(e.message)
				.hideDelay(0));
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
            if (!$scope.ack.customer.hasOwnProperty('id')) {
                throw new ReferenceError("Missin customer ID");
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
