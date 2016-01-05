
angular.module('employeeApp.services', ['ngResource']);
angular.module('employeeApp.directives', []);
angular.module('employeeApp.filters', []);
angular.module('employeeApp', ['ngRoute', 'ngResource', 'ngCookies', 'ngMessages', 'employeeApp.directives', 'employeeApp.filters',
                               'employeeApp.services', 'ngMaterial'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.when('/contact/customer/add', {
		templateUrl: 'views/contact/customer/add.html',
		controller: 'ContactCustomerAddCtrl'
	})
	.when('/contact/customer/:id', {
		templateUrl: 'views/contact/customer/details.html',
        controller: 'ContactCustomerDetailsCtrl'
	})
      .when('/contact/customer', {
        templateUrl: 'views/contact/customer/view.html',
        controller: 'ContactCustomerViewCtrl'
	})
      .when('/contact/supplier/add', {
        templateUrl: 'views/contact/supplier/add.html',
        controller: 'ContactSupplierAddCtrl'
	})
      .when('/contact/supplier', {
        templateUrl: 'views/contact/supplier/view.html',
        controller: 'ContactSupplierViewCtrl'
	})
      .when('/contact/supplier/:id', {
        templateUrl: 'views/contact/supplier/details.html',
        controller: 'ContactSupplierDetailsCtrl'
	})
      .when('/contact', {
        templateUrl: 'views/contact.html'
	})
      .when('/product/upholstery/add', {
        templateUrl: 'views/product/upholstery/add.html',
        controller: 'ProductUpholsteryAddCtrl'
	})
      .when('/product/upholstery', {
        templateUrl: 'views/product/upholstery/view.html',
        controller: 'ProductUpholsteryViewCtrl'
	})
      .when('/product/upholstery/:id', {
        templateUrl: 'views/product/upholstery/details.html',
        controller: 'ProductUpholsteryDetailsCtrl'
	})
      .when('/product', {
        templateUrl: 'views/product.html'
	})
      .when('/product/model/add', {
        templateUrl: 'views/product/model/add.html',
        controller: 'ProductModelAddCtrl'
	})
      .when('/product/model', {
        templateUrl: 'views/product/model/view.html',
        controller: 'ProductModelViewCtrl'
	})
      .when('/product/model/:id', {
        templateUrl: 'views/product/model/details.html',
        controller: 'ProductModelDetailsCtrl'
	})
      .when('/order/acknowledgement/create', {
        templateUrl: 'views/order/acknowledgement/create.html',
        controller: 'OrderAcknowledgementCreateCtrl'
	})
      .when('/order', {
        templateUrl: 'views/order.html'
	})
	.when('/order/acknowledgement', {
        templateUrl: 'views/order/acknowledgement/view.html',
        controller: 'OrderAcknowledgementViewCtrl',
		reloadOnSearch: false
	})
      .when('/order/shipping/create', {
        templateUrl: 'views/order/shipping/create.html',
        controller: 'OrderShippingCreateCtrl'
	})
      .when('/order/shipping', {
        templateUrl: 'views/order/shipping/view.html',
        controller: 'OrderShippingViewCtrl'
	})
      .when('/order/shipping/deliveries/today', {
        templateUrl: 'views/order/shipping/today.html',
        controller: 'OrderShippingTodayCtrl'
	})
      .when('/order/shipping/deliveries/week', {
        templateUrl: 'views/order/shipping/week.html',
        controller: 'OrderShippingWeekCtrl'
	})
      .when('/administrator/group/add', {
        templateUrl: 'views/administrator/group/add.html',
        controller: 'AdministratorGroupAddCtrl'
	})
      .when('/administrator/group', {
        templateUrl: 'views/administrator/group/view.html',
        controller: 'AdministratorGroupViewCtrl'
	})
      .when('/administrator/group/:id', {
        templateUrl: 'views/administrator/group/details.html',
        controller: 'AdministratorGroupDetailsCtrl'
	})
      .when('/administrator/user/add', {
        templateUrl: 'views/administrator/user/add.html',
        controller: 'AdministratorUserAddCtrl'
	})
      .when('/administrator/user/:id', {
        templateUrl: 'views/administrator/user/details.html',
        controller: 'AdministratorUserDetailsCtrl'
	})
      .when('/administrator/user', {
        templateUrl: 'views/administrator/user/view.html',
        controller: 'AdministratorUserViewCtrl'
	})
      .when('/administrator', {
        templateUrl: 'views/administrator.html'
	})
      .when('/supply', {
        templateUrl: 'views/supply/view.html',
        controller: 'SupplyViewCtrl'
	})
      .when('/supply/fabric', {
        templateUrl: 'views/supply/fabric/view.html',
        controller: 'SupplyFabricViewCtrl'
	})
      .when('/supply/fabric/add', {
        templateUrl: 'views/supply/fabric/add.html',
        controller: 'SupplyFabricAddCtrl'
	})
      .when('/supply/fabric/:id', {
        templateUrl: 'views/supply/fabric/details.html',
        controller: 'SupplyFabricDetailsCtrl'
	})
      .when('/supply/foam/add', {
        templateUrl: 'views/supply/foam/add.html',
        controller: 'SupplyFoamAddCtrl'
	})
      .when('/supply/foam/:id', {
        templateUrl: 'views/supply/foam/details.html',
        controller: 'SupplyFoamDetailsCtrl'
	})
      .when('/supply/foam', {
        templateUrl: 'views/supply/foam/view.html',
        controller: 'SupplyFoamViewCtrl'
	})
      .when('/accounting', {
        templateUrl: 'views/accounting.html'
	})
      .when('/accounting/transaction', {
        templateUrl: 'views/accounting/transaction/view.html',
        controller: 'AccountingTransactionViewCtrl'
	})
      .when('/accounting/transaction/add', {
        templateUrl: 'views/accounting/transaction/add.html',
        controller: 'AccountingTransactionAddCtrl'
	})
      .when('/accounting/transaction/:id', {
        templateUrl: 'views/accounting/transaction/details.html',
        controller: 'AccountingTransactionDetailsCtrl'
	})
      .when('/order/acknowledgement/:id', {
        templateUrl: 'views/order/acknowledgement/details.html',
        controller: 'OrderAcknowledgementDetailsCtrl'
	})
      .when('/order/shipping/delivery', {
        templateUrl: 'views/order/shipping/delivery.html',
        controller: 'OrderShippingDeliveryCtrl'
	})
      /*
      .when('/order/shipping/deliveries/week', {
        templateUrl: 'views/order/acknowledgement/weekly.html',
        controller: 'OrderAcknowledgementWeeklyCtrl'
      })
      .when('/order/shipping/deliveries/today', {
        templateUrl: 'views/order/acknowledgement/daily.html',
        controller: 'OrderAcknowledgementDailyCtrl'
      })*/
      .when('/order/shipping/:id', {
        templateUrl: 'views/order/shipping/details.html',
        controller: 'OrderShippingDetailsCtrl'
	})
      .when('/order/acknowledgement/item/:id', {
        templateUrl: 'views/order/acknowledgement/item/details.html',
        controller: 'OrderAcknowledgementItemDetailsCtrl'
	})
      .when('/supply/prop', {
        templateUrl: 'views/supply/prop/view.html',
        controller: 'SupplyPropViewCtrl'
	})
      .when('/supply/prop/add', {
        templateUrl: 'views/supply/prop/add.html',
        controller: 'SupplyPropAddCtrl'
	})
      .when('/supply/prop/:id', {
        templateUrl: 'views/supply/prop/details.html',
        controller: 'SupplyPropDetailsCtrl'
	})
      .when('/supply/lumber/view', {
        templateUrl: 'views/supply/lumber/view.html',
        controller: 'SupplyLumberViewCtrl'
	})
      .when('/product/inventory', {
        templateUrl: 'views/product/inventory.html',
        controller: 'ProductInventoryCtrl'
	})
      
      .when('/product/table', {
        templateUrl: 'views/product/table/view.html',
        controller: 'ProductTableViewCtrl'
	})
      .when('/product/rug', {
        templateUrl: 'views/product/rug.html',
        controller: 'ProductRugCtrl'
	})
      .when('/product/rug/view', {
        templateUrl: 'views/product/rug/view.html',
        controller: 'ProductRugViewCtrl'
	})
      .when('/product/rug/add', {
        templateUrl: 'views/product/rug/add.html',
        controller: 'ProductRugAddCtrl'
	})
      .when('/product/table/add', {
        templateUrl: 'views/product/table/add.html',
        controller: 'ProductTableAddCtrl'
	})
      .when('/product/table/:id', {
        templateUrl: 'views/product/table/details.html',
        controller: 'ProductTableDetailsCtrl'
	})
      .when('/project', {
        templateUrl: 'views/project/view.html',
        controller: 'ProjectViewCtrl'
	})
      .when('/project/:id', {
        templateUrl: 'views/project/details.html',
        controller: 'ProjectDetailsCtrl'

	})
      .when('/hr', {
        templateUrl: 'views/hr.html'
	})
      .when('/hr/employee', {
        templateUrl: 'views/hr/employee/view.html',
        controller: 'HrEmployeeViewCtrl'
	})
      .when('/project/room/:id', {
        templateUrl: 'views/project/room/details.html',
        controller: 'ProjectRoomDetailsCtrl'
	})
      .when('/order/purchase_order', {
        templateUrl: 'views/order/purchase_order/view.html',
        controller: 'OrderPurchaseOrderViewCtrl',
		  reloadOnSearch: false
	})
      .when('/order/purchase_order/create', {
        templateUrl: 'views/order/purchase_order/create.html',
        controller: 'OrderPurchaseOrderCreateCtrl'
	})
      .when('/order/purchase_order/:id', {
        templateUrl: 'views/order/purchase_order/details.html',
        controller: 'OrderPurchaseOrderDetailsCtrl'
	})
      .when('/supply/log', {
        templateUrl: 'views/supply/log.html',
        controller: 'SupplyLogCtrl'
    })
    .when('/supply/shopping_list', {
      templateUrl: 'views/supply/shopping_list.html',
      controller: 'SupplyShoppingListCtrl'
    })
    .when('/supply/buying_guide', {
      templateUrl: 'views/supply/buying_guide.html',
      controller: 'SupplyBuyingGuideCtrl'
    })
      .when('/supply/:id', {
        templateUrl: 'views/supply/details.html',
        controller: 'SupplyDetailsCtrl'
	})
      
     
      .when('/equipment', {
        templateUrl: 'views/equipment/view.html',
        controller: 'EquipmentViewCtrl'
      })
 
     
      .when('/order/estimate', {
        templateUrl: 'views/order/estimate/view.html',
        controller: 'OrderEstimateViewCtrl'
      })
      .when('/order/estimate/create', {
        templateUrl: 'views/order/estimate/create.html',
        controller: 'OrderEstimateCreateCtrl'
      })
      .when('/order/estimate/:id', {
        templateUrl: 'views/order/estimate/details.html',
        controller: 'OrderEstimateDetailsCtrl'
      })
      .when('/scanner', {
        templateUrl: 'views/scanner.html',
        controller: 'ScannerCtrl'
      })
      .otherwise({
        redirectTo: '/'
	});
}]);

function search(list, key, value, callback, error) {        
    for (var i = 0; i < list.length; i++) {
        if (list[i].hasOwnProperty(key)) {
            if (list[i][key] == value) {
                callback(list[i], i);
                return list[i];
                    
            }
        }
    }
        
    if (angular.isFunction(error)) {
		error();
    }
    return false;
}

function merge(permList, groupPerms) {
    if (permList && groupPerms) {
        angular.forEach(groupPerms, function (perm) {
            search(permList, 'id', perm.id, function (item, index) {                    
                permList[index].status = true;
            });
                
        });
    }
}
/*chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('../index.html', {
    'bounds': {
      'width': 1200,
      'height': 800
    },
	
	//'state': 'fullscreen'
  });
});*/
/*
 * Declare the standard headers
 */
angular.module('employeeApp').config(['$httpProvider', '$resourceProvider', '$mdThemingProvider', '$provide', 
function ($httpProvider, $resourceProvider, $mdThemingProvider, $provide) {
	
	/*
	 * Change how the $log service works 
	 */
	$provide.decorator('$log', ['$delegate', function ($delegate) {
		
		var _info = $delegate.info;
		var _warn = $delegate.warn;
		var _error = $delegate.error;
		
		var record = function (lType, msg) {
	
			var promise = $.ajax({
				type: 'POST',
				url: '/api/v1/client/log/', 
				data: {'type': lType, 'message': msg},
				processData: true,
			});
		};
		
		$delegate.info = function () {
			var args    = [].slice.call(arguments),
                now     = new Date().toUTCString();
			var msg = args[0].hasOwnProperty('stack') ? args[0].stack : now + '-' + args[0];

			record('info', args[0]);
			_info(msg);
		};
		
		$delegate.warn = function () {
			var args    = [].slice.call(arguments),
	            now     = new Date().toUTCString();
			var msg = args[0].hasOwnProperty('stack') ? args[0].stack : now + '-' + args[0];
		
			record('warn', args[0]);
			_warn(msg);
		};
		
		$delegate.error = function () {
			var args    = [].slice.call(arguments),
	            now     = new Date().toUTCString();
			var msg = args[0].hasOwnProperty('stack') ? args[0].stack : now + '-' + args[0];

			record('error', args[0]);
			//_error(msg);
		};
		
		return $delegate;
		
	}]);
	
    $httpProvider.defaults.headers.post  = {
		"Cache-Control": "no-cache", 
		"expires": "-1", 
		"pragma": "no-cache",
		"Content-Type": "application/json"
	};
    $httpProvider.defaults.headers.get  = {"Cache-Control": "no-cache", "expires": "-1", "pragma": "no-cache"};

    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.stripTrailingSlashes = false;
		
    /*
     * Takes out the objects from the data 
     */
    $httpProvider.defaults.transformResponse.push(function (data, headers) {
		if (typeof(data) == 'object') {
			if (data.hasOwnProperty('results')) {
				return data.results;
			}
		}
		return data;
	});
	
	/*
	 * Configure the theme for this application
	 */
	
	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('blue')
		.backgroundPalette('grey');
	
	
	
}]);

  
/*
 * Run top level application code
 */
angular.module('employeeApp').run(function ($rootScope, CurrentUser, scanner, $http, Geocoder, $q, $cookies, $interval, PurchaseOrder, $mdDialog, $location) {
	
	/*
	 * Set the token 
	 */
	$http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
	$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
	  jqXHR.setRequestHeader('X-CSRFToken', $cookies.get('csrftoken'));
	});
	
	/*
	 * Get the current user and place it at the top scope
	 */
	$rootScope.currentUser = new CurrentUser(function () {
		inventoryUserCheck();

		for (var z = 0; z < $rootScope.groups.length; z++) {
			if ($rootScope.groups[z].toLowerCase() == 'decoroom') {
				$location.path('/order/acknowledgement');
			}
		}
	});
	
	//Check if user is from decoroom
	$rootScope.currentUser.onready = function () {
		for (var z = 0; z < this.groups.length; z++) {
			if (this.groups[z].toLowerCase() == 'decoroom') {
				$location.path('/order/acknowledgement');
			}
		}
	}.bind($rootScope.currentUser);
	
	//Check if user is inventory
	$rootScope.currentUser.onready = function () {
		
		if (this.hasModule('supplies') && !this.hasModule('acknowledgements') && 
		!this.hasModule('shipping')) {
			$rootScope.inventory = true;
			$location.path('/scanner');
		}
	}.bind($rootScope.currentUser);
    
    /*
     * Prototypical extension of core classes
     */
    
    //Array: indexById
    
    Array.prototype.indexOfById = function (needle) {
		needle = typeof(needle) == "object" ? needle.hasOwnProperty('id') ? needle.id : null : needle;
		var haystack = this;
		for (var i = 0; i < haystack.length; i++) {
			if (haystack[i].id == needle) {
				return i;
			}
		}
		return -1;
	};
    
    /*
     * Finding a key by value
     * 
     * This function finds the first instance of a key 
     * based on the value provided
     */
   
    
    $rootScope.safeApply = function (fn) {
		var phase;
		try {
			phase = this.$root.$$phase;
		} catch (e) {
			phase = $rootScope.$$phase;
		}
		if (phase == '$apply' || phase == '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			try{
				this.$apply(fn);
			} catch (e) {
			}
			
		}
    };
    
    
    /*
     * Set values and objects that are used throughout
     * the application
     */
    
    $rootScope.units = {
		'in': "Inch",
		cm: 'Centimeter',
		m: 'Meter',
		mm: 'Millimeter',
		yd: 'Yard',
		kg: 'Kilogram',
		pack: 'Pack',
		container: 'Container',
		pc: 'Piece'
	};
	/*
	
	$http.get('/api/v1/supply/type').then(function (response) {
		$rootScope.types = response.data;
	});
    
	*/
	 	
    window.globalScanner = new scanner('global');
    globalScanner.enable();
	//hi
	
	/*
	 * Changing the password
	 *
	 */
	
	/*
	 * Create dialog to change password
	 */
	$rootScope.showChangePassword = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/change-password.html',
			controller: 'DialogsChangePasswordCtrl'
		});
	};
	
	
	/*
	 * Geolocating the user
	 * 
	 * Establishes the current country that the user is currently in.
	 * First uses the HTML5 geolocation test to determine, if the browser
	 * has implemented. And then retrieves the lat and lng. The lat and lng 
	 * are then reverse geolocated with the google maps reserves geocode
	 * service. The results are then search for the country code. 
	 * 
	 */
	//Set initial country
	$rootScope.country = 'TH';
	
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function (position) {
			if (Geocoder.initialized) {
				//Reverse geocode and returns the promise
				var promise = Geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude);
				//Set the success and error callbacks for the promise
				promise.then(function (results) {
					//Cycle through componenets to look for country
					for (var i in results[0].address_components) {
						var component = results[0].address_components[i];
						if (typeof(component.types) == 'object') {
							if (component.types.indexOf('country') != -1) {
								//Set country to main scope, to be called later
								//$rootScope.country = 'KH';
								$rootScope.country = component.short_name;
							}
						}
					}
				}, function () {
					$log.error('Getting the position failed');
				});
			} else {
				
			}
		}, function (e) {
			$log.log(e);
		});
		
	} else {
		$log.log('Geolocation not available'); 
	}
	
	/*
	 * Auto print new purchase orders
	 */
	
	/*
	var storage = window.localStorage;
	var printList = [];
	
	
	
	$interval(function () {
		if (printList.length > 0) {
			var el;
			
			if ($('#auto-print-pdf').length === 0) {
				el = angular.element("<iframe width='1' height='1' id='auto-print-pdf' src='" + printList.splice(0, 1) + "'></iframe>");
				angular.element('#hidden-pdf-frame').append(el);
			} else{
				el = $('#auto-print-pdf');
				el.attr('src', printList.splice(0, 1));
			}
		}
	}, 15000);
	
	var intervalSwitch = $interval(function () {
		
		var user = $rootScope.currentUser;

		//Checks that this is the inventory type account
		if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && !user.hasModule('shipping')) {
			
			//Gets a saved or creates a new last_modified reference date
			var date = storage.getItem('purchase-order-last-modified');
			date = !date ? new Date() : new Date(date);
			var newLastModifiedDate = new Date();
			
			//Sets the new last_modified reference date
			storage.setItem('purchase-order-last-modified', newLastModifiedDate.toISOString());
			
			//Request update from the server
			PurchaseOrder.query({last_modified:"2015-03-26T09:17:24.117Z", status:"processed"}, function (resp) {
			
				for (var i = 0; i < resp.length; i++) {
					printList.push(resp[i].auto_print_pdf.url);
				}
			});
		}
	}, 5000);	
	*/
});


angular.module('employeeApp')
.controller('MainCtrl', ['$scope', '$location', 'Acknowledgement', 'mapMarker', 'PurchaseOrder', '$rootScope', '$log',
function ($scope, $location, Acknowledgement, mapMarker, PurchaseOrder, $rootScope, $log) {
	
	var user = $scope.currentUser;
	var changePage = function () {
		if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && 
		!user.hasModule('shipping')) {
			$rootScope.inventory = true;
			$location.path('/scanner');
		}
			
	};
	
	if (!$scope.currentUser.ready) {
		user.onready = changePage;
	} else {
		changePage();
	}
	
	/*
	 * Map 
	 *
	 */
	var latLng = {},
	    map,
	    marker,
		markers = {'acknowledgements': [],
				   'purchaseOrders': []},
	    //Options for the map 
		mapOptions = {
			center: new google.maps.LatLng(13.776239, 100.527884),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.ROAD
		};

	var styles = [
		{
			featureType: "road",
			stylers: [
				{visibility: "off"}
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
	
	//Function to get zoom and position
	function setMapFocus(latArray, lngArray){
		var ne = new google.maps.LatLng(Math.max.apply(null, latArray), Math.max.apply(null, lngArray)),
			sw = new google.maps.LatLng(Math.min.apply(null, latArray), Math.min.apply(null, lngArray));
		
		var bounds = new google.maps.LatLngBounds(sw, ne);
		map.fitBounds(bounds);	
	}
	
	//Initialize map
	map = new google.maps.Map($('#main-map')[0], mapOptions);
	map.setOptions({styles:styles});
	
	//Get purchase orders
	$scope.pos = PurchaseOrder.query(function () {}, function () {});
	//Get acknowledgements and create markers on map for each order
	$scope.acknowledgements = Acknowledgement.query(function (resp) {
			
		$scope.active = 'acknowledgements';
		
		for (var i = 0; i < 20; i++) {
			try {
				var address = resp[i].customer;
				if (address.latitude && address.longitude) {
		
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(address.latitude, address.longitude),
						map: map,
						title: "Order #" + resp[i].id,
						draggable: false
					});
				
					markers[$scope.active].push(marker);
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		map.setZoom(6);
	});
	
	
	/*
	 * Extract relevant orders
	 */
	function extractOrders(dataArray, dataType) {
		var statuses,
			validData = [];
		
		if (dataType == 'acknowledgement') {
			statuses = ['acknowledged', 'in production', 'deposit received'];
		} else if (dataType == 'purchase order') {
			statuses = ['processed', 'ordered'];
		} else {
			throw Error("Invalid data type.");
		}
		
		for (var i = 0; i < dataArray.length; i++) {
			if (statuses.indexOf(dataArray[i].status.toLowerCase()) > -1) {
				validData.push(dataArray[i]);
			}
		}
		return validData;
	}
	
	/* 
 	 * Show markers for pending orders or pending purchase orders
	 */
	$scope.view = function (target) {
		
		var arrayHolder,
			getAddress, 
			markerArray,
			lats = [],
			lngs = [];
		
		for (var i in markers[$scope.active]) {
			try {
				markers[$scope.active][i].setMap(null);
			} catch (e) {
				$log.error(e);
			}
		}
		
		$scope.active = target;
		markers[$scope.active] = [];
			
		if (target === 'acknowledgements') {
			arrayHolder = extractOrders($scope.acknowledgements, 'acknowledgement');
			getAddress = function (dataObj) {
				return dataObj.customer;
			};
		} else if (target === 'purchaseOrders') {
			arrayHolder = extractOrders($scope.pos, 'purchase order');
			getAddress = function (dataObj) {
				return dataObj.supplier.addresses[0] || {};
			};
		}
		
		for (i = 0; i < arrayHolder.length; i++) {
			try {
				var address = getAddress(arrayHolder[i]);
				if (address.latitude && address.longitude) {
					
					//Add to lats and lngs for later calculations 
					lats.push(address.latitude);
					lngs.push(address.longitude);
					
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(address.latitude, address.longitude),
						map: map,
						title: (arrayHolder[i].customer || arrayHolder[i].supplier).name,
						draggable: false
					});
					
					markers[$scope.active].push(marker);
				}
			} catch (e) {
				$log.error(e);
			}
		}
		
		setMapFocus(lats, lngs);
	};
	
}]);


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
	
	/*
    * Add a new equipment to the equipment list
	*/
	$scope.addNewEquipment = function () {
		var equipment = new Equipment();
		equipment.$new = true;
		$scope.equipmentList.push(equipment);
	};
	
	$scope.createEquipment = function (equipment) {
		
		equipment.id = equipment.id || undefined;
		
		if (equipment.$new) {
			var savingFn = equipment.id ? '$update' : '$create';
			
			equipment[savingFn](function () {
				delete this.$new;
			}.bind(equipment));
			
		}
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


/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp')
.directive('acknowledgementSummary', ['D3', '$http', '$filter', '$log', '$rootScope', function (D3, $http, $filter, $log, $rootScope) {
	
	function hasEvent(acknowledgement, e) {
		if (acknowledgement) {
			for (var i in acknowledgement.logs) {
				if (acknowledgement.logs[i].hasOwnProperty('message')) {
					if (acknowledgement.logs[i].message.indexOf(e) > -1) {
						return true;
					}
				}
				
			}
		}
		
		return false;
	}
	
	function createChart(element, data, callback, acknowledgements) {
		//Create box charts for summary
		var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div')
		.attr('class', function (d) {
			return d.category.toLowerCase().replace(/ /gi, '-');
		});
		
		//Attach amount
		/*
		box.append('h2').text(function (d) {
			return "$" + $filter('number')(d.amount);
		});*/
		//Attach count
		box.append('span').text(function (d) {
			return d.category + " " + d.count;
		});
		
		box.append('div').attr('class', 'arrow');
		
		box.on('click', function (d) {
			angular.element('.acknowledgement-summary div.active').removeClass('active');
			d3.select(this).attr('class', 'active ' + d.category.toLowerCase().replace(/ /gi, '-'));
			(callback || angular.noop)({'$category': d.category});
		}).on('mouseenter', function (d) {
			
			var cat = d.category.toLowerCase() == 'acknowledged' ? 'open' : d.category.toLowerCase();
			$rootScope.safeApply(function () {
				for (var i in (acknowledgements || [])) {
					try {
						if (hasEvent(acknowledgements[i], cat)) {
							acknowledgements[i].$active = true;
						}
					} catch (e) {
						$log.warn(e);
					}
				}
			});
			
		}).on('mouseleave', function (d) {
			$rootScope.safeApply(function () {
				for (var i in (acknowledgements || [])) {
					acknowledgements[i].$active = false;
				}
			});
		});
		
		box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
			//Calculate bar width
			var value =  ((d.count / d.total) * 100);
			
			//Equalize the values so that all bars are visible
			if (value < 17) {
				value = 17;
			} else if (value > 70) {
				value = 66;
			}
			
			return value + '%';
		});
		
	}
	
    return {
      	restrict: 'EA',
		scope: {
			'onClick': '&',
			'acknowledgements': '='
		},
      	link: function postLink(scope, element, attrs) {
        	
			//Set class for this element
			element.addClass('acknowledgement-summary');
			
			//Get Summary data
			var promise = $http.get('/api/v1/acknowledgement/stats/');
			promise.then(function (e) {
				e = e.data;
				var total = e.total.count;
				var data = [
					{count:e.acknowledged.count, amount: e.acknowledged.amount, category:'Acknowledged', total:total},
					{count:e.deposit_received.count, amount: e.deposit_received.amount, category:'Deposit Received', total:total},
					{count:e.in_production.count, amount: e.in_production.amount, category:'In Production', total:total},
					{count:e.ready_to_ship.count, amount: e.ready_to_ship.amount, category:'Ready to Ship', total:total},
					{count:e.shipped.count, amount: e.shipped.amount, category:'Shipped', total:total},
					{count:e.invoiced.count, amount: e.invoiced.amount, category:'Invoiced', total:total},
					{count:e.paid.count, amount: e.paid.amount, category:'Paid', total:total},
				];
				
				//Call fn to create chart
				createChart(element, data, scope.onClick, scope.acknowledgements);
			});
      	}
    };
}]);


angular.module('employeeApp.directives')
.directive('addCustomer', ['Customer', '$mdToast', 'Geocoder', '$log',
function (Customer, $mdToast, Geocoder, $log) {
	return {
		templateUrl: 'views/templates/add-customer.html',
		replace: true,
		restrict: 'A',
		scope: {visible: '=addCustomer'},
		link: function postLink(scope, element, attrs) {
			
            scope.customer = new Customer();
            
            /*
             * List of tips
             * 
             * The tips are to be used with the tooltips
             */
            scope.firstNameTip = "Enter the customer's first name or name (required)";
            scope.lastNameTip = "Enter the customer's last name if applicable";
            scope.emailTip = "Enter a valid email address (required)";
            scope.telTip = "Enter a valid phone number (required)";
            scope.typeTip = "What type of customer is this? (required)";
            scope.currencyTip = "What currency does this customer deal in? (required)";
            
            //Get the longitude and latitude of the customer's address
			scope.getLocation = function () {
				if (scope.customer.address.address1 && scope.customer.address.city && scope.customer.address.territory &&
				scope.customer.address.country && scope.customer.address.zipcode && !scope.customer.address.user_defined_latlng) {

					//Get promise and bind to call backs
					var promise = Geocoder.geocode(scope.customer.address);
					promise.then(function (results) {
						if (scope.marker) {
							scope.marker.setPosition(results[0].geometry.location);
						} else {
							scope.marker = scope.map.createMarker(results[0].geometry.location);
							scope.marker.onchange = function (latLng) {
								//Set address lat and lng
								scope.customer.address.lat = scope.marker.lat;
								scope.customer.address.lng = scope.marker.lng;
								scope.customer.address.user_defined_latlng = true;
							};
						}

						//Reposition the map to the marker
						scope.map.setPosition(results[0].geometry.location);

						//Set the Address lat and lng
						scope.customer.address.lat = scope.marker.lat;
						scope.customer.address.lng = scope.marker.lng;

					}, function (status) {
						$log.error(status);
					});
				}
			};
			
            scope.add = function () {
				if (scope.form.$valid) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('Creating customer...'));

					scope.customer.$save(function (response) {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(2000)
							.content('Customer created.'));

						scope.visible = false;
						scope.customer = new Customer();
					}, function (reason) {
						$log.error(reason);
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content("There was an error in creating the customer"));
					});
				} else {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('Please fill out the form properly'));
				}
			};
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('addEquipment', ['$rootScope', 'Supplier', 'Supply', 'Notification', '$http', 'Equipment',
function ($rootScope, Supplier, Supply, Notification, $http, Equipment) {
	return {
		templateUrl: 'views/templates/add-equipment.html',
		replace: true,
		restrict: 'EA',
		scope: {
			'visible': '=addEquipment',
			'onAdd': '&'
		},
		link: function postLink(scope, element, attrs) {
			
			
			/*
			 * Vars and Properties
			 */
			scope.equipment = new Equipment();
			scope.descriptions = [
				{description:'F-50 Pnuematic Stapler', image: 'img/equipment/F50.jpg'},
				{description: 'F-30 Pnuematic Stapler', image: "img/equipment/F30.jpg"},
				{description: 'J-1022 Pnuematic Stapler', image: "img/equipment/J1022.jpg"},
				{description: 'ST-64 Pneumatic Stapler', image: "img/equipment/ST64.jpg"},
				{description: 'Electric Hand Drill', image: "img/equipment/hand_drill.jpg"},
				{description: 'Electric Jigsaw', image: "img/equipment/jigsaw.jpg"},
				{description: 'Electric Router', image: "img/equipment/router.jpg"},
				{description: 'Polisher', image: "img/equipment/polisher.jpg"},
				{description: 'Electric Sander', image: "img/equipment/electric_sander.jpg"}
			];
			scope.brands = [
				'Maktec',
				'Red King',
				'King',
				'DMax',
				'Puma',
				'Ken',
				'Jumbo',
				'Makita',
				'Bosch',
				'BEC',
				'Unknown'
			];
			scope.statuses = [
				'checked out',
				'checked in',
				'repair'
			];
			scope.showDescription = false;
			
			/*
			 * Set Description
			 */
			scope.selectDescription = function (description) {
				scope.equipment.description = description.description;
				scope.showDescription = false;
			};
			
			/* 
			 * Create a new Equipment by sending to server
			 */
			scope.add = function(equipment) {
				if (scope.form.$valid && scope.equipment.description) {
					Notification.display("Adding new " + scope.description + "...", false);
					scope.equipment.$create(function () {
						Notification.display(scope.description + " Added.");
						scope.equipment = new Equipment();
					}, function () {
						Notication.display("Could not add " + scope.description, false);
					});
				}
			};

			scope.addImage = function (data) {
				scope.equipment.image = data;
			};
			
	
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('addSupplier', ['$rootScope', 'Supplier', '$mdToast', '$log',
function ($rootScope, Supplier, $mdToast, $log) {
	return {
		templateUrl: 'views/templates/add-supplier.html',
		replace: true,
		restrict: 'EA',
		scope: {'visible': '=addSupplier',
				'onAdd': '&'},
		link: function postLink(scope, element, attrs) {
			
            scope.supplier = new Supplier();
            scope.contact = {};
			
			/*
			 * Tips for the form
			 * 
			 * A list of tooltip texts for help the user navigate the form
			 */
			scope.nameTip = "What is the supplier's name (required)";
			scope.thaiNameTip = "Enter the supplier's name in Thai";
			scope.emailTip = "Enter a valid email address (required)";
            scope.telTip = "Enter a valid phone number (required)";
            scope.currencyTip = "What currency does this supplier deal in? (required)";
            scope.discountTip = "What discount do we get? (required)";
            scope.termsTip = "How many days of credit do we get? (required)";
            scope.addrTip = "What is the supplier's address (required)";
            scope.cityTip = "What city is the supplier in? (required)";
            scope.territoryTip = "What chaengwat/territory/state is the supplier in? (required)";
            scope.countryTip = "What country is the supplier in? (requied)";
            scope.zipcodeTip = "What zipcode is the supplier in? (required)";
            
            scope.addContact = function (contact) {
				scope.supplier.contacts = scope.supplier.contacts || [];
				if (scope.supplier.contacts.length === 0) {
					contact = contact || scope.contact;
					contact.primary = true;
				}
				scope.supplier.contacts.push(contact);
				scope.contact = {};	
            };
			
			scope.validation = function () {
				var primary = [];
				for (var i = 0; i < (scope.supplier.contacts && scope.supplier.contacts.length); i++) {
					if (scope.supplier.contacts[i].primary) {
						primary.append(scope.supplier.contacts[i]);
					}
				}
				
				if (primary.length != 1) {
					throw ValueError("There can only be 1 primary contact");
				}
			};
            
			scope.add = function () {
				try {
					if (scope.form.$valid) {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('Creating supplier...'));

						scope.supplier.$save(function (response) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(2000)
								.content('Supplier created.'));
							
							//Call on add
							scope.onAdd({$supplier:scope.supplier});
							
							//Reset to before add
							scope.visible = false;
							scope.supplier = new Supplier();
						}, function (reason) {
							$log.error(reason);
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(0)
								.content('There was an error in creating the supplier'));
						});
					} else {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('Please fill out the form properly'));
					}
				} catch (e) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content(e));
				}
			};
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('addSupply', ['$rootScope', 'Supplier', 'Supply', '$mdToast', '$http', '$log',
function ($rootScope, Supplier, Supply, $mdToast, $http, $log) {
	return {
		templateUrl: 'views/templates/add-supply.html',
		replace: true,
		restrict: 'EA',
		scope: {
			'visible': '=addSupply',
			'onAdd': '&',
			'assignedSupplier': '=supplier'
		},
		require: '?supplyList',
		link: function postLink(scope, element, attrs, supplyListCtrl) {
			
			
			/*
			 * Vars and Properties
			 */
			
			scope.types = {};
			
			$http.get('/api/v1/supply/type').then(function (response) {
				for (var i = 0; i < response.data.length; i++) {
					if (response.data[i] && response.data[i] != 'custom' && !scope.types[response.data[i].toLowerCase()]){
						scope.types[response.data[i]] = response.data[i].toLowerCase();
					}
				}
			});
			
			scope.$watch('assignedSupplier', function (val){
				if (val) {
					scope.supply.supplier = angular.copy(val);
				}
			});
			
			//Request suppliers via get if not already assigned
			scope.$watch('visible', function (val) {
				if (val && !scope.supplier) {
					scope.suppliers = scope.suppliers || Supplier.query({limit: 0});
				}
			});
		
			
			/*
			 * Watch the supplier scope in case a supplier is assigned
			 */
			
			scope.showWidth = function () {
				var units = scope.supply.units;
				var type = scope.supply.type;
				return scope.supply.new_supply ? (units === "m" || units === "pc" || units === "pack" || units === "yd" ||
				(units === "kg" && type === "packaging") ? true : false) : false;
			};
			
			scope.showDepth = function () {
				var units = scope.supply.units;
				return scope.supply.new_supply ? (units === "pc" || units === "pack" ? true : false) : false;
			};
			
			scope.showHeight = function () {
				var units = scope.supply.units;
				var type = scope.supply.type;
				return scope.supply.new_supply ? (units === "pc" || units === "pack" ||
				(units === "kg" && type === "packaging") ? true : false) : false;
			};
			
			scope.supply = new Supply();
			scope.supply.units = 'pc';
			
			scope.selectSupply = function (supply) {
				$rootScope.safeApply(function () {
					angular.extend(scope.supply, supply);
				});
			};
			
			scope.add = function () {
				if (scope.form.$valid) {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content('Creating supply...'));

					//Moves the supply and adds the the supplier array
					scope.supply.suppliers = scope.supply.suppliers || [];
					if (scope.supply.suppliers.indexOfById(scope.supply.supplier)) {
						var supplier_data = scope.supply.supplier;
						supplier_data.supplier = {'id': supplier_data.id};
						delete supplier_data.id;
						scope.supply.suppliers.push(supplier_data);
					}
					delete scope.supply.supplier;
					
					//Decides whether to update or create based on presence of id
					if (scope.supply.hasOwnProperty('id')) {
						scope.supply.$update(function (response) {
							scope.visible = false;
							scope.onAdd({$supply:scope.supply});
							scope.supply = new Supply();
							
							$mdToast.show($mdToast.simple()
								.hideDelay(2000)
								.position('top right')
								.content('Supply created.'));
							
							if (scope.assignedSupplier) {
								scope.supply.supplier = angular.copy(scope.assignedSupplier);
							}
							
						}, function (reason) {
							$log.error(reason);
						});
					} else {
						scope.supply.$create(function (response) {

							scope.visible = false;
							scope.onAdd({$supply:scope.supply});
							scope.supply = new Supply();
							
							$mdToast.show($mdToast.simple()
								.hideDelay(2000)
								.position('top right')
								.content('Supply created.'));
							
							if (scope.assignedSupplier) {
								scope.supply.supplier = angular.copy(scope.assignedSupplier);
							}
							
						}, function (reason) {
							$log.error(reason);
							$mdToast.show($mdToast.simple()
								.hideDelay(0)
								.position('top right')
								.content('There was an error in creating the supply'));
						});
					}
				} else {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content('Please fill out the form properly'));
				}
			};

			scope.addImage = function (data) {
				scope.supply.image = data;
			};
			
	
		}
	};
}]);



angular.module('employeeApp')
.directive('attendanceChart', ['D3', '$log', function (D3, $log) {
    return {
      	templateUrl: 'views/templates/attendance-chart.html',
		replace: true,
      	restrict: 'EA',
		scope: {
			data: '=',
			active: '=',
			onSelect: '&'
		},
      	link: function postLink(scope, element, attrs) {
			function activate() {
				var barWidth = element.parents('.suppliers').width() / 2,
					barHeight = 20,
					leftMargin = 90,
					times = [],
					selectedAttendances = [],
					selectedElements = [],
					origin;
					
				//Flags
				var mouseDown = false;

				for (var i = 0; i < scope.data.length; i++) {
					times.push(scope.data[i].total_time);
				}
				var maxTime = D3.max(times);
			
				var chart = D3.select(element[0])
				.append('svg')
				.attr('class', 'chart')
				.attr('width', barWidth)
				.attr('height', 20 * scope.data.length);
			
				var x = D3.scale.linear()
				    .domain([0, D3.max(times)])
				    .range([0, barWidth - leftMargin]);
			
				var bar = chart.selectAll('g')
				.data(scope.data)
				.enter()
				.append('g')
				.attr('transform', function (d, i) {
					return "translate(0," + i * 20 + ")";
				})
				.on('mouseover', function (d) {
					var selectedBar = D3.select(this);
					if (mouseDown) {
						var index = selectedAttendances.indexOfById(d);
						if (index == -1) {
							selectedAttendances.push(d);
							selectedElements.push(this);
							selectedBar.attr('class', 'selected');
							
						}
					} else {
						scope.$apply(function () {
							scope.active = d;
						});
						
						selectedBar.attr('class', 'active');
					
					}
					
					
				})
				.on('mouseout', function (d) {
					var yPos = $(this).offset().top;
					var selectedBar = D3.select(this);
					if (mouseDown) {
						$log.log(yPos+" : "+D3.event.y);
						
						var index = selectedAttendances.indexOfById(d);
						if (yPos >= D3.event.y) {
							selectedBar.classed('selected', false);
							selectedAttendances.splice(index, 1);
						} 
					} else {
						selectedBar.classed('active', false);
					}
				})
				.on('mousedown', function (d) {
					mouseDown = true;
					selectedAttendances.push(d);
					var evt = D3.event;
					origin = {x:evt.x, y:evt.y};
					D3.select(this)
					.classed('selected', true)
					.classed('active', false);
				})
				.on('mouseup', function () {
					mouseDown = false;
					
					if (selectedAttendances.length) {
						window.alert(selectedAttendances.length);
						for (var i = 0; i < selectedElements.length; i++) {
							$(selectedElements[i]).removeClass('selected');
						}
						
						selectedAttendances = [];
						selectedElements = [];
					}
				});
				
				
			
				var otRect = bar.append("rect")
				.attr('class', 'overtime')
				.attr("x", leftMargin)
				.attr('width', 0)    
				.attr("height", barHeight - 1);
			
				var regRect = bar.append("rect")
				.attr('class', 'regular-time')
				.attr('x', leftMargin)
				.attr('width', 0)
				.attr('height', barHeight - 1);
			
				var date = bar.append("text")
				.attr('class', 'date')
				.style('width', leftMargin+'px')
				.attr("x", leftMargin - 2)
				.attr("y", 20 / 2)
				.attr("dy", ".35em")
				.text(function (d) {
					var date = new Date(d.date);
					return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
				});
			
				otRect.transition()
				.duration(2000)
				.delay(function () {
					return Math.random() * 100;
				})
				.attr("width", function (d) {
			    	return d.total_time ? (d.total_time / maxTime) * barWidth - leftMargin : 0;
			    });
			
				regRect.transition()
				.duration(2000)
				.delay(function () {
					return Math.random() * 100;
				})
				.attr("width", function (d) {
			    	return d.regular_time ? (d.regular_time / maxTime || 0) * barWidth - leftMargin : 0;
			    });
				
			}
			
			scope.$watch('data', function (newVal) {
				if (newVal) {
					activate();
				}
			});
		}
    };
}]);


angular.module('employeeApp')
.directive('background', [function () {
    return {
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            if (attrs.backgroundImages) {
                
            } else {
                throw new TypeError("Missing Images for Background Directive.");
            }
        }
    };
}]);


angular.module('employeeApp')
.directive('beautify', ['$filter', '$parse', function ($filter, $parse) {
	return {
		restrict: 'A', 
		link: function (scope, element, attr) {
			//bind to blur
            element.bind('blur', function () {
                //create new beautified version
                var beautifiedValue = $filter('beautify')(element.context.value);
                //apply to input
                element.context.value = beautifiedValue;
                //assign to model
                $parse(attr.ngModel).assign(scope, beautifiedValue);
            }); 
 
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('camera', ['CameraService', '$log', function (CameraService, $log) {
	return {
		template: '<div class="camera">' +
					'<div class="guide"></div>' +
					'<div class="active-media-area">' +
						'<canvas></canvas>' +
						'<video class="camera-video"></video>' +
					'</div>' +
					'<div class="snapshot-btn" ng-click="takeSnapshot()"></div>' +
					'<div class="btn-menu">' +
						'<div  class="save-btn" ng-click="save()">Save</div>' +
						'<div class="retake-btn" ng-click="retake()">Retake</div>' +
					'</div>' +
				'</div>',
		restrict: 'EA',
		replace: true,
		scope: {
			onSnapshot: '&',
			cropOptions: '=',
			square: '=',
			depth: '='
		},
		link: function postLink(scope, element, attrs) {
			//$log.log('test');
			//$log.log(CameraService.hasUserMedia());
			if (!CameraService.hasUserMedia()) {return; }
			
			var userMedia = CameraService.getUserMedia,
				canvas = element.find('canvas')[0],
				ctx = canvas.getContext('2d'),
				video = element.find('video')[0],
				width = scope.width || 1280,
				height = scope.height || 720;
				
			if (scope.square) {
				angular.element(canvas).addClass('square');
			}
				
			var onSuccess = function (stream) {
				video.src = window.URL.createObjectURL(stream);
				
				video.play();
			};
			
			navigator.getUserMedia({
				video: {
					mandatory: {
						minWidth: width,
						minHeight: height
					}
				},
				audio: false
			}, onSuccess, function (e) {
				navigator.getUserMedia({
					video:true,
					audio:false
				}, onSuccess, function (e) {
					$log.error(e);
				});
			});
			
			function getImageAsBlob(url) {
				var bytes = atob(url.split(',')[1]);
				var stream = new Uint8Array(bytes.length);
				for (var key in bytes) {
					stream[key] = bytes.charCodeAt(key);
				}
				return new Blob([stream], {type: 'image/jpeg'});
			}
			
			scope.retake = function () {
				$(element).removeClass('active');
			};
			
			scope.save = function () {
				var img = getImageAsBlob(canvas.toDataURL("image/jpeg"));
				scope.onSnapshot({$image: img});
				scope.retake();
			};
			
			scope.takeSnapshot = function () {
				width = scope.square ? video.videoHeight : video.videoWidth;
				height = video.videoHeight;
				
				canvas.height = scope.square ? angular.element(video).height() : height;
				canvas.width = scope.square ? canvas.height : width;

				ctx.fillRect(0, 0, width, height);
				
				if (scope.square) {
					ctx.drawImage(video, (video.videoWidth - width) / 2, 0, width, height, 0, 0, canvas.width, canvas.height);
				} else{
					ctx.drawImage(video, 0, 0, width, height);
				}
					
				$(element).addClass('active');
			};
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('checkmark', [function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            if (!attrs.checkmark) {
                throw new TypeError("Missing expression to evaluate.");
            }
            var check = angular.element('<span class="checkmark">✓</span>');
            
            scope.$watch(attrs.checkmark, function (val) {
                if (val) {
                    element.append(check);
                } else {
                    check.remove();
                }
            });
        }
    };
}]);


angular.module('employeeApp')
.directive('clickUrl', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function () {
				scope.category = 'fabric';
                $location.path(attr.clickUrl);
                scope.$apply();
            });
            
        }
    };
}]);


angular.module('employeeApp')
.directive('customerList', ['Customer', '$mdToast', 'KeyboardNavigation', '$rootScope', '$filter',
function (Customer, $mdToast, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/customer-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=customerList',
			onSelect: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
			/*
			* Initial fetching of the customers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
			scope.customers = Customer.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Customer.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.customers.indexOfById(resources[i].id) == -1) {
								scope.customers.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			/*
			 * Loads the next set of customers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					$mdToast.show($mdToast.simple()
						.position('right top')
						.hideDelay(0)
						.content('Loading customers suppliers...'));
					
					fetching = true;
					Customer.query({
						offset: scope.customers.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						$mdToast.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.customers.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.select = function (customer) {
				scope.onSelect({'customer': customer});
			};
			
			function filter(array) {
				return $filter('orderBy')($filter('filter')(scope.customers, scope.query), 'name');
			}
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = filter(scope.customers)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.customer.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < filter(scope.customers).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
			
		}
    };
}]);


angular.module('employeeApp')
.directive('dragOn', [function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            
            element.attr('draggable', true);
            element.bind('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', JSON.stringify(scope.$eval(attrs.dragOn)));
            });
            
        }
    };
}]);


angular.module('employeeApp.directives')
.directive('onDrop', [function () {
    function emptyStrFilter(element, index, array) {
        return (element !== "");
    }
    /*
     * Function helps get the target object
     * in the scope
     */
    function getTarget(scope, targetString) {
        //Assigns vars
        
        /*
         * Extracts the first string part, which
         * we can expect to exsist. Then we extract
         * the last part, which we check if we need
         * to make
         */
        var preTarget = targetString.split(/\.\w*$/).shift(),
            targetObj = targetString.split(/\./).pop(),
            target;
        //Evaluates against scope
        target = scope.$eval(preTarget);
        //check if obj exsists and create if not
        target[targetObj] = target[targetObj] || {};
        //advances the progressing
        target = target[targetObj];
        //Return 
        return target;
    }
    /*
     * Function returns the data from the drop event
     * and automatically parses it
     */
    function getData(event) {
        return JSON.parse(event.originalEvent.dataTransfer.getData('text/plain'));
    }
    //Prevent Propagation
    function preventPropagation(event) {
        event.stopPropagation();
        event.preventDefault();
        event.originalEvent.dataTransfer.effectAllowed = "copy";
    }
    
    return {
        restrict: 'A',
        replace: false,
		scope: {
			'onDrop': '=',
		},
        link: function (scope, element, attrs) {
            element.bind('drop', function (event) {
				console.log(event);
				
                preventPropagation(event);
                element.removeClass('drag');
				console.log(event);
                /*
                 * Gets the target and copies
                 * the data from the dragged 
                 * object to it
                 */
                scope.$apply(function () {
					/*
                    var target = getTarget(scope, attrs.dropOn);
                    angular.copy(getData(event), target);
					*/
					scope.dropOn = getData(event);
					
					if (attrs.onDrop) {
						scope.onDrop({$file:getData(event)});
					}
                });
                
                
            }).bind('dragover', function (event) {
                preventPropagation(event);
                element.addClass('drag');
            }).bind('dragleave', function (event) {
                preventPropagation(event);
                element.removeClass('drag');
            });
        }
    };
}]);


angular.module('employeeApp')
.directive('eaAdd', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function callback(evt) {
				if ((evt.which == "65" && (evt.metaKey || evt.ctrlKey))) {
					evt.preventDefault();
					scope.$eval(attrs.eaAdd);
				}
      
			}
  
			$(window).on('keydown', callback);
  
			scope.$on('$destroy', function () {
				$(window).off('keydown', callback); 
			});
		}
	};
}]);


angular.module('employeeApp')
.directive('eaSave', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.text('this is the eaSave directive');
		}
	};
}]);


angular.module('employeeApp')
.directive('ecBlur', [function () {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, element, attrs) {
			element.bind('blur', function () {
				scope.$eval(attrs.ecBlur);
			});
       
           
		}
	};
}]);


angular.module('employeeApp')
.directive('employee', ['$rootScope', '$timeout', 'Notification', 'Attendance', '$log',
function ($rootScope, $timeout, Notification, Attendance, $log) {
    return {
      	templateUrl: 'views/templates/employee.html',
		replace: true,
      	restrict: 'EA',
		scope: {
			employee: '=',
			onSelect: '&'
		},
      	link: function postLink(scope, element, attrs) {
			
			scope.fetched = false;
			scope.departments = [
				'carpentry',
				'painting',
				'polishing',
				'sewing',
				'upholstery',
				'foam',
				'management',
				'tufting',
				'shearing',
				'dying',
				'inventory',
				'packing',
				'front office',
				'graphics',
				'accounting',
				'landscaping'
			];
			
			var updateLoopActive = false,
				timeoutPromise,
				cancelWatch = angular.noop(),
				badTypes = ['custom', null];
			
			/*
			 * General Functions
			 */
			
            scope.addImage = function (data) {
				var image = data.hasOwnProperty('data') ? data.data : data;
				scope.employee.image = image;
				scope.employee.$update(function () {
					Notification.hide();
				});
            };
				
			//Start a watch on the scope for the supply var
			
			function startWatch() {
				
				cancelWatch = scope.$watch('employee', function (newVal, oldVal) {
					if (!updateLoopActive && oldVal.hasOwnProperty('id')) {
						updateLoopActive = true;
						timeoutPromise = $timeout(function () {
							var employee = angular.copy(scope.employee);
							Notification.display('Updating ' + scope.employee.name + '...', false);
							employee.$update(function () {
								updateLoopActive = false;
								Notification.display(scope.employee.name + ' updated');
							}, function () {
								Notification.display("There was an error in updating " + scope.employee.name);
							});
						}, 5000);
					}
				}, true);
			}
			
			scope.activate = function () {
				if (element.hasClass('active')) {
					element.removeClass('active');
					cancelWatch();
				} else {
					element.addClass('active');
					startWatch();
					
					try {
						scope.onSelect({'$element': element});
					} catch (e) {
						$log.error(e);
					}
					
					scope.attendances = Attendance.query({
						employee__id:scope.employee.id
					}, function (response) {
						scope.attendances = [];
						scope.attendances.push.apply(scope.attendances, response);
					});	
				}
			};
      	}
    };
}]);


angular.module('employeeApp.directives')
.directive('equipment', ['$http', 'Equipment', '$rootScope', 'Notification', '$timeout', '$window', 'scanner', 'D3', '$compile', '$log',
function ($http, Equipment, $rootScope, Notification, $timeout, $window, scanner, D3, $compile, $log) {
	
	var subHTML;
	var brands = [
		'Maktec',
		'Red King',
		'King',
		'DMax',
		'Puma',
		'Ken',
		'Jumbo',
		'Makita',
		'Bosch',
		'BEC',
		'Unknown'
	];
	var statuses = [
		'checked in',
		'checked out',
		'repair',
		'out of service'
	];
	var promise = $http.get('views/templates/supply-details.html');
	promise.then(function (response) {
		subHTML = response.data || response;
	}, function () {
		
	});
	
	function createChart(data, property, largestSize, className) {
		var box = D3.select('div.'+className+' .chart').selectAll('div').data(data).enter().append('div')
		.attr('class', 'price-box').style('left', function (d, i) {return ((i * 6) + i) + 'em';})
		.attr('class', function (d, i) {
			try {
				if (Number(data[i+1][property]) > Number(d[property])) {
					return 'price-box green';
				} else if (Number(data[i+1][property]) < Number(d[property])) {
					return 'price-box red';
				} else {
					return 'price-box black';
				}
			} catch (e) {
				return 'price-box black';
			}
	
		});

		var costSpans = box.append('span').text(function (d) {return d[property];}).attr('class', 'price');
		var dateSpans = box.append('span').attr('class', 'date')
		.text(function (d) {
			var date = new Date(d.timestamp);
			return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
		});

		D3.select('div.'+className).transition().duration(1000).style('border', '1px solid #CCC').style('height', '10em');
		box.transition().duration(2000).delay(1000).style('height', function (d) { return (((d[property]) / largestSize) * 8) + 'em';});
	}
	
	return {
  		templateUrl: 'views/templates/equipment.html',
		replace: true,
  	  	restrict: 'EA',
		scope: {
			equipment: '=',
			onSelect: '&'
		},
  	  	link: function postLink(scope, element, attrs) {
			
			var fullCompiled = false;
			scope.fetched = false;
			scope.brands = brands;
			scope.statuses = statuses;
			var updateLoopActive = false,
				timeoutPromise,
				cancelWatch = angular.noop(),
				badTypes = ['custom', null];
			
			/*
			 * General Functions
			 */
			
			//Start a watch on the scope for the supply var
			function startWatch() {
				cancelWatch = scope.$watch(function () {
					var equipment = angular.copy(scope.equipment);
					var attrsToRemove = ['last_modified', 'image', 'supplier', 'sticker'];
					for (var i = 0; i < attrsToRemove.length; i++) {
						delete equipment[attrsToRemove[i]];
					}
					return equipment;
				}, function (newVal, oldVal) {
					if (oldVal.hasOwnProperty('id')) {
						
						$timeout.cancel(timeoutPromise);
						
						timeoutPromise = $timeout(function () {
							equipment = angular.copy(scope.equipment);
							Notification.display('Saving DRE-' + scope.equipment.id + '...', false);
							equipment.$update(function () {
								Notification.display('DRE-' + scope.equipment.id + ' saved');
							}, function () {
								Notification.display("There was an error in saving DRE-" + scope.equipment.id);
							});
						}, 1250);
						
					}
				}, true);
			}
			
			function prepareData(response, attrName) {
				var data = response.data || response;
				var subData = [];
				for (var i = 0; i < data.length; i++) {
					subData.push(data[i][attrName]);
				}
				
				largest = Math.max.apply(Math, subData);
				
				return {'largest': Math.max.apply(Math, subData),
						'data': data};
			}
			
			scope.activate = function () {
				
				/*
				if (!fullCompiled) {
					var html = $compile(subHTML)(scope);
					angular.element(element.find('.supply-details')).html(html);
					fullCompiled = true;
				}
				*/
				if (element.hasClass('active')) {
					element.removeClass('active');
					cancelWatch();
				} else {
					element.addClass('active');
					
					try {
						scope.onSelect({'$element': element});
					} catch (e) {
						$log.error(e);
					}

					Equipment.get({id:scope.equipment.id}, function (response) {
						angular.extend(scope.equipment, response);
						startWatch();
						scope.fetched = true;
						
					});
				}
			};
			
  	  	}
	};
}]);


angular.module('employeeApp')
.directive('fabricSelector', ['Fabric', '$mdToast', '$parse', 
function (Fabric, $mdToast, $parse) {
	return {
		templateUrl: 'views/templates/fabric-selector.html',
		replace: true,
		restrict: 'A',
		scope: {
			product: '=',
			onComplete: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true;

			/*
			 * Initial fetching of the customers.
			 * 
			 * We will turn the fetching flag to false
			 * once we received the results
			 */
			scope.fabrics = Fabric.query(function (response) {
				fetching = false;
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Fabric.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.fabrics.indexOfById(resources[i].id) == -1) {
								scope.fabrics.push(resources[i]);
							}
						}
					});
				}
			});
			
			/*
			 * Loads the next set of customers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content('Loading more fabrics...'));	
					fetching = true;
					Fabric.query({
						offset: scope.fabrics.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						$mdToast.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.fabrics.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.done = function () {
				scope.onComplete();
			};
			
			function parseKeydown(evt) {
				if (evt.which === 13) {
					try{
						scope.$apply(function () {
							scope.done();
						});
					} catch (e) {
						
					}
					
				}
			}
			
			$(window).on('keydown', parseKeydown);
			
			scope.$on('$destroy', function () {
				$(window).off('keydown', parseKeydown);
			});
		}
	};
}]);



angular.module('employeeApp')
.directive('fabricStorage', ['$rootScope', function ($rootScope) {
	
	function Shelf () {
		this.hMargin = 10;
	}
	
	Shelf.prototype.draw = function (ctx, tower) {
		ctx.beginPath();
		ctx.fillStyle = "#CCCCCC";
		ctx.fillRect(10 + this.hMargin, 10 + 10, 200 - (this.hMargin * 2), 100 - (this.hMargin * 2));
	};
	
	Shelf.prototype.isPointInElement = function (x, y) {
		return ((x >= this.x && x <= (this.x + this.w)) && (y >= this.y && y <= (this.y + this.h))) ? true : false;
	};
	
	function Tower () {
		this.x = 10;
		this.y = 10;
		this.h = 50;
		this.w = 50;
		this.color = "#AAAAAA";
		this.textColor = "#000000";
		this.active = false;
		
		for (var i = 0; i < 4; i++) {
			this.shelves = [];
		}
	}
	
	Tower.prototype.draw = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.h, this.w);
		ctx.fillStyle = this.textColor;
		ctx.fillText(this.id, this.x + 20, this.y + 25);
		
		if (this.active) {
			ctx.fillStyle = "#CCCCCC";
			ctx.strokeRect(10, 10, 200, 300);
			
			for (var i = 0; i < this.shelves.length; i++) {
				this.shelves[i].draw(ctx, this);
			}
		}
	};
	
	Tower.prototype.isPointInElement = function (x, y) {
		return ((x >= this.x && x <= (this.x + this.w)) && (y >= this.y && y <= (this.y + this.h))) ? true : false;
	};
	
	function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
	}
	
    return {
      	template: '<canvas></canvas>',
		replace: true,
      	restrict: 'EA',
      	link: function postLink(scope, element, attrs) {
			var positions = [
				{id: 11, x: 410, y: 10},
				{id: 12, x: 465, y: 10},
				{id: 13, x: 410, y: 85},
				{id: 14, x: 465, y: 85},
				{id: 15, x: 410, y: 140},
				{id: 16, x: 465, y: 140},
				{id: 17, x: 410, y: 215},
				{id: 18, x: 465, y: 215}
			],
			towers = [];
				
			
			//Add towers on the left of the room
			for (var i = 0; i < 5; i++) {
				positions.push({id: 10 - (i * 2), x: 540, y: (i * 50) + (i * 5) + 10});
				positions.push({id: 10 - (i * 2) - 1, x: 595, y: (i * 50) + (i * 5) + 10});
			} 
			
        	var context = element[0].getContext('2d');
			context.canvas.height = 400;
			context.canvas.width =  800;
			
			for (i = 0; i < positions.length; i++) {
				var tower = new Tower();
				towers.push(tower);
				tower.id = positions[i].id;
				tower.x = positions[i].x;
				tower.y = positions[i].y;
				tower.draw(context);
			}
			
			element[0].addEventListener('mousemove', function (evt) {
				var pos = getMousePos(element[0], evt);
				var active = false;
				for (var i = 0; i < towers.length; i++) {
					if (towers[i].isPointInElement(pos.x, pos.y)) {
						active = true;
					} 
					
					document.body.style.cursor = active ? "pointer" : "default";
					
				}
			});
			
			element[0].addEventListener('click', function (evt) {
				var pos = getMousePos(element[0], evt);
				
				for (var i = 0; i < towers.length; i++) {
					towers[i].active = false;
					towers[i].color = '#AAAAAA';
					towers[i].textColor = "#000000";
					if (towers[i].isPointInElement(pos.x, pos.y)) {
						towers[i].active = true;
						towers[i].color = '#313131';
						towers[i].textColor = "#FFFFFF";
					}
					towers[i].draw(context);
					
				}
			});
      	}
    };
}]);


angular.module('employeeApp')
.directive('fadeIn', [function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.addClass('fadeIn');
        }
    };
}]);


angular.module('employeeApp.directives')
.directive('fadeLoad', [function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.css('opacity', 0);
            element.bind('load', function () {
                element.fadeTo(1000, 1);
            });
        }
    };
}]);


/**
 * @ngdoc directive
 * @name frontendApp.directive:fileDrop
 * @description
 * # fileDrop
 */
angular.module('employeeApp')
.directive('fileDrop', function () {
    return {
      	restrict: 'EA',
		scope: {
			onDrop: '&fileDrop'
		},
      	link: function postLink(scope, element, attrs) {
        	/*
             * Create Objects and Functions to be used
             */
            
            //File Reader
            var fileReader = new FileReader();
            
            fileReader.onload = function (evt) {
				scope.onDrop({$file: evt.target.result});
            };
       
            /*
             * Add functions to deal with the drag enter,leave and
             * over actions of the user
             */
			
            //Drag Enter
            element.bind('drag', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-active');
            });
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-activeactive');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
                evt.stopPropagation();
				
				element.removeClass('drag-activeactive');
            });
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-activeactive');
            });
            
            /*
             * This Section deals with the Dropping of the file, 
             * checking if it is an image, and adding it to the array
             * "scope.images"
             */
            
            element.bind('drop', function (evt) {
                
                //prevent default
                evt.preventDefault();
                evt.stopPropagation();
                element.removeClass('drag-activeactive');
                
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var files = e.dataTransfer.files;

				scope.onDrop({$files: files});
               
            });
      	}
    };
});


angular.module('employeeApp')
.directive('fileHandler', ['$rootScope', function ($rootScope) {
    return {
		/*jshint multistr: true */
        template: '<div class="file-handler">\
                        <div class="file-handler-message" ng-hide="files.length>0">\
                            <h3>Drop File Here</h3>\
                        </div>\
                        <div class="file-handler-list">\
                            <ul>\
                                <li ng-repeat="file in files">{{file.name}}</li>\
                            </ul>\
                        </div>\
                   </div>',
        restrict: 'A',
        scope: {files: '=fileHandler'},
        replace: true,
        link: function postLink(scope, element, attrs) {
            var reader = new FileReader();
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                element.addClass('drag-drop-active');
                element.addClass('drag-over');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
				element.removeClass('drag-drop-active');
				element.removeClass('drag-over');
			});
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                element.addClass('drag-drop-active');
                element.addClass('drag-over');
            });
            
            element.bind('drop', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                element.removeClass('drag-drop-active');
                element.removeClass('drag-over');
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var files = e.dataTransfer.files;
                
                scope.files = files;
            });
        }
    };
}]);


angular.module('employeeApp.directives')
.directive('imageCropper', ['Notification', '$compile', '$log', function (Notification, $compile, $log) {
    function Scene(canvas, ctx, image) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.img = image;
        this._scale = 1;
        this.bX = 0;
        this.bY = 0;
        this.bH = this.img.height;
        this.bW = this.img.width;
        this.cropX = null;
        this.cropY = null;
        this.cropW = null;
        this.cropH = null;
        this.mouseX = null;
        this.mouseY = null;
        this.corners = [];
        this.xProportion = this.canvas.width / this.img.width;
        this.yProportion = this.canvas.height / this.img.height; 
    }
    
	Object.defineProperties(Scene.prototype, {
		scale: {
            get: function () {
                return this._scale;
            },
            set: function (scale) {
                this._scale = scale <= 1 ? scale : scale / 100;
            }
        },
		x: {
			get: function () {
				return this.bX;
			},
			set: function (x) {
				this.bX = x;
			}
		},
		y: {
			get: function () {
				return this.bY;
			},
			set: function (y) {
				this.bY = y;
			}
		}, 
		w: {
			get: function () {
				return this.bW;
			},
			set: function (w) {
				this.bW = w;
			}
		}, 
		h: {
			get: function () {
				return this.bH;
			},
			set: function (h) {
				this.bH = h;
			}
		} 
	});

    Scene.prototype.repositionCorners = function () {
        this.corners.topLeft = {x: this.bX * this.xProportion, y: this.bY * this.yProportion};
        this.corners.topRight = {x: (this.bX + this.bW) * this.xProportion, y: this.bY * this.yProportion};
        this.corners.bottomRight = {x: (this.bX + this.bW) * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
        this.corners.bottomLeft = {x: this.bX * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
    };
    
    Scene.prototype.inCorner = function (x, y) {
        for (var key in this.corners) {
            if (Math.sqrt(Math.pow(x - this.corners[key].x, 2) + Math.pow(y - this.corners[key].y, 2)) <= 10) {
                return key;
            }
        }
    };
    
    Scene.prototype.drawCube = function (x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        this.ctx.fill();
    };
    
    Scene.prototype.drawCubes = function () {
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.drawCube(this.bX * this.xProportion, this.bY * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, (this.bY + this.bH) * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, this.bY * this.yProportion);
        this.drawCube(this.bX * this.xProportion, (this.bY + this.bH) * this.yProportion);
    };
    
    Scene.prototype.drawBackground = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.draw = function () {
        //Calculations
        this.repositionCorners();
        
        //Rendering
        this.drawBackground();
        this.ctx.drawImage(this.img, this.bX, this.bY, this.bW, this.bH, this.bX * this.xProportion, this.bY * this.yProportion, this.bW * this.xProportion, this.bH * this.yProportion);
        this.drawCubes();
    };
    
    Scene.prototype.drawImage = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.crop = function (boundingWidth, boundingHeight) {
        if (boundingHeight && boundingWidth) {
            var ratio1 = boundingHeight / boundingWidth;
            var ratio2 = this.bH / this.bW;
            if (ratio1 > ratio2) {
                this.canvas.width = boundingWidth;
                this.canvas.height = (this.bH * boundingWidth) / this.bW;
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
            } else { 
                this.canvas.height = boundingHeight;
                this.canvas.width = (this.bW * boundingHeight) / this.bH;
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
            }
        } else {
            this.canvas.width = this.bW;
            this.canvas.height = this.bH;
        }
        
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.canvas.width, this.canvas.height);
       // this.canvas.width = this.bW/this.xProportion
       // this.canvas.height = this.bH/this.xProportion
        //this.ctx.putImageData(imageData, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.getImageAsURL = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');
        canvas.width = this.w * this._scale;
        canvas.height = this.h * this._scale;
        context.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.w * this._scale, this.h * this._scale);
        return canvas.toDataURL("image/jpeg");
        
    };
    
    Scene.prototype.getImageAsBlob = function () {
        var url = this.getImageAsURL();
        var bytes = atob(url.split(',')[1]);
        var stream = new Uint8Array(bytes.length);
        for (var key in bytes) {
            stream[key] = bytes.charCodeAt(key);
        }
        return new Blob([stream], {type: 'image/jpeg'});
    };
    
    
    
    return {
        restrict: 'A',
		/*jshint multistr: true */
        template: '<div class="cropper">\
                        <div class="cropper-message" ng-show="!cropper.image.loaded"><h3>Drop Image Here</h3></div>\
                        <div class="cropper-controller" ng-show="cropper.image.loaded">\
                            <button ng-click="cropper.crop()" ng-show="!cropper.cropping">Crop</button>\
                            <button ng-click="cropper.save()" ng-show="cropper.cropping">Done Cropping</button>\
                            <button ng-click="save()" ng-show="!cropper.cropping">Save</button>\
                            <button data-ng-click="preview(cropper.getImageAsURL())">Preview</button>\
                            <table class="cropper-scale">\
                                <tr>\
                                    <td>Scale:</td>\
                                    <td><input class="scale" type="number" data-ng-model="cropper.scale" min="0" max="100">%</td>\
                                </tr>\
                                <tr>\
                                    <td>Width</td>\
                                    <td>{{cropper.image.scaled_width | number:0}}px</td>\
                                </tr>\
                                <tr>\
                                    <td>Height</td>\
                                    <td>{{cropper.image.scaled_height | number:0}}px</td>\
                                </tr>\
                            </table>\
                        </div>\
                        <div class="canvas-container" ng-class="{show:cropper.image.loaded}">\
                            <canvas class="cropper-canvas"></canvas>\
                        </div>\
                    </div>',
        replace: true,
		scope: {
			onSave: '&',
			onLoad: '&'
		},
        link: function postLink(scope, element, attrs) {
            var cubes = [];
            var canvasContainer = element.find('.canvas-container');
            var canvasElement = canvasContainer.find('canvas');
            var canvas = canvasContainer.find("canvas")[0];
            var parent = element;
            var fileReader = new FileReader();
            var ctx = canvas.getContext('2d');
            var mouseX;
            var mouseY;
            var corner;
            var scene;
            var image;
            var mousedown = false;

            //Set Canvas to parent width and height
            canvas.width = canvasContainer.outerWidth();
            canvas.height = canvasContainer.outerHeight();
            
            fileReader.onload = function (evt) {
                parent.removeClass('drag-drop-active');
                //Create Image
                image = new Image();
                image.onload = function (e) {
                    //Display Notification
                    Notification.display('Image Rendered');
                    //Set canvas dimensions
                    
                   
                    var height = canvasContainer.outerHeight();
                    var width = canvasContainer.outerWidth();
                    var ratio1 = height / width;
                    var ratio2 = image.height / image.width;
                    if (ratio1 > ratio2) {
                        canvas.width = width;
                        canvas.height = (image.height * width) / image.width;
                    } else { 
                        canvas.height = height;
                        canvas.width = (image.width * height) / image.height;
                    }
                    //Position the canvas relative to parent
                    angular.element(canvas).css('top', (height - canvas.height) / 2);
                    angular.element(canvas).css('left', (width - canvas.width) / 2);
                    //Create and Draw new Scene
                    scene = new Scene(canvas, ctx, image);
                    scene.drawImage();
                    
                    /*
                     * Try running the onload function that is 
                     * attached to the scope directive
                     */
                    try {
						scope.onLoad();
                    } catch (evt) {
						$log.warn(evt);
                    }
                    
                    scope.$apply();
                };
                image.src = evt.target.result;
                
            };
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                parent.addClass('drag-drop-active');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
				parent.removeClass('drag-drop-active');
            });
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                parent.addClass('drag-drop-active');
            });
            
            element.bind('drop', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                Notification.display('Processing Image...', false);
                parent.removeClass('drag-drop-active');
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var file = e.dataTransfer.files[0];
                fileReader.readAsDataURL(file);
            });

            function mouseDown(e) {
                e.preventDefault();
                mousedown = true;
                mouseX = e.offsetX;
                mouseY = e.offsetY;
                corner = scene.inCorner(e.offsetX, e.offsetY);
                scene.canvas.style.cursor = 'move';
            }
            
            function mouseMove(e) {
                if (mousedown) {
                    if (corner) {
                        switch (corner) {
						case "topLeft":
                            scene.w = scene.w + ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h + ((mouseY - e.offsetY) / scene.yProportion);
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                            break;
                        case "topRight":
                            scene.w = scene.w - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h + ((mouseY - e.offsetY) / scene.yProportion);
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                            break;
                        case "bottomRight":
                            scene.w = scene.w - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h - ((mouseY - e.offsetY) / scene.yProportion);
                            break;
                        case "bottomLeft":
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h - ((mouseY - e.offsetY) / scene.yProportion);
                            scene.w = scene.w + ((mouseX - e.offsetX) / scene.xProportion);
                            break;
                        }
                    } else {
                        var topLeft = scene.corners.topLeft,
                            bottomRight = scene.corners.bottomRight;
                       
                        if (topLeft.y - (mouseY - e.offsetY) > 0 && bottomRight.y - (mouseY - e.offsetY) < scene.img.height * scene.yProportion) {
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                        } else {
                            scene.y = topLeft.y - (mouseY - e.offsetY) <= 0 ? 0 : (scene.canvas.height - (bottomRight.y - topLeft.y)) / scene.yProportion;
                        }
                        if (topLeft.x - (mouseX - e.offsetX) > 0 && bottomRight.x - (mouseX - e.offsetX) < scene.img.width * scene.xProportion) {
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                        } else {
                            scene.x = topLeft.x - (mouseX - e.offsetX) <= 0 ? 0 : (scene.canvas.width - (bottomRight.x - topLeft.x)) / scene.xProportion;
                        }                            
                    }
                    
                    mouseX = e.offsetX;
                    mouseY = e.offsetY;
                    scene.draw();
                    scope.$apply();
                    
                }
            }
            
            function mouseUp(e) {
                mousedown = false;
                corner = false;
            }
            
            function mouseLeave(e) {
                mousedown = false;
                corner = false;
            }
            
            /*
             * API Section
             * 
             * Properties:
             * -scale
             * 
             * Methods:
             * -crop
             * -save
             * -getImage
             */
            scope.cropper = {cropping: false, image: {}};
            
            Object.defineProperties(scope.cropper, {
                scale: {
                    get: function () {
                        return scene ? scene.scale * 100 : 100;
                    },
                    set: function (scale) {
                        if (scene) {
                            scene.scale = scale;
                        }
                    }
                } 
            });  
            
            Object.defineProperties(scope.cropper.image, {
                width: {
                    get: function () {
                        return scene ? scene.w ? scene.w : 0 : 0;
                    }
                },
                height: {
                    get: function () {
                        return scene ? scene.h ? scene.h : 0 : 0;
                    }
                },
                scaled_height: {
                    get: function () {
                        return scene ? scene.h ? scene.h * scene.scale : 0 : 0;
                    }
                },
                scaled_width: {
                    get: function () {
                        return scene ? scene.w ? scene.w * scene.scale : 0 : 0;
                    }
                },
                loaded: {
                    get: function () {
                        return scene ? true : false;
                    }
                }
            }); 
            
            scope.cropper.crop = function () {
                scope.cropper.cropping = true;
                scene.x = 10;
                scene.y = 10;
                scene.w = scene.w - 20;
                scene.h = scene.h - 20;
                scene.canvas.style.cursor = 'move';
                scene.draw();
                canvasElement.bind('mousedown', mouseDown);
                canvasElement.bind('mousemove', mouseMove);
                canvasElement.bind('mouseup', mouseUp);
                canvasElement.bind('mouseleave', mouseLeave);
            };
            
            scope.cropper.save = function () {
                scope.cropper.cropping = false;
                scene.canvas.style.cursor = 'move';
                scene.crop(canvasContainer.innerWidth(), canvasContainer.innerHeight());
                canvasElement.unbind('mousedown', mouseDown);
                canvasElement.unbind('mousemove', mouseMove);
                canvasElement.unbind('mouseup', mouseUp);
                canvasElement.unbind('mouseleave', mouseLeave);
            };
            
            scope.cropper.upload = function () {
                
            };
            
            scope.cropper.getImage = function () {
                return scene ? scene.getImageAsBlob() : null;
            };
            
            scope.cropper.getImageAsURL = function () {
                return scope.cropper.getImageURL();
            };
            
            scope.cropper.getImageURL = function () {
                return scene ? scene.getImageAsURL() : null;
            };
            
            scope.preview = function (url) {
                if (url) {
                    window.open(url);
                }
            };
            
            scope.cropper.reset = function () {
                scene = undefined;
            };
            
           
            scope.save = function () {
				scope.onSave({$image: scope.cropper.getImage()});
				scope.cropper.reset();
            };
        }
    };
}]);


angular.module('employeeApp')
.directive('imageDropTarget', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        replace: false,
        link: function ($scope, element, attrs) {
            
            /*
             * Create Objects and Functions to be used
             */
            
            //File Reader
            var fileReader = new FileReader();
            
            fileReader.onload = function (evt) {
                
                var image = {
                    'url': evt.target.result
                };
                //Create array if not exists
                $scope.imagePreviews = $scope.imagePreviews || [];
                
                $scope.$apply(function () {
                    $scope.imagePreviews.push(image);          
                });
            };
            /*
             * Available methods to interact with this directive 
             * inlucde: clear images
             */
            
            //Clear Image
            $scope.clearImages = function () {
				/* jshint ignore:start */
                $scope.images ? $scope.images.length = 0 : $scope.images = []; // jshint ignore:line
				/* jshint ignore:end */ 
            };
            
            /*
             * Add functions to deal with the drag enter,leave and
             * over actions of the user
             */
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                element.addClass('active');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
				element.removeClass('active');
            });
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                element.addClass('active');
            });
            
            /*
             * This Section deals with the Dropping of the file, 
             * checking if it is an image, and adding it to the array
             * "scope.images"
             */
            
            element.bind('drop', function (evt) {
                
                //prevent default
                evt.preventDefault();
                evt.stopPropagation();
                element.removeClass('active');
                
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var files = e.dataTransfer.files;
                
                //Loop Through all up loaded files,
                //validate that they are images and add
                //it to the "scope.images"
                for (var i = 0; i < files.length; i++) {
                    
                    if (files[i].type == "image/png" || files[i].type == "image/jpeg") {
                        //Create array if not exists
                        $scope.images = $scope.images || [];
                        //Push image   
                        $scope.images.push(files[i]);
                        //Read data and push to preview
                        fileReader.readAsDataURL(files[i]);
                    }
                }
                //Eval the attr of this directive
                $scope.$eval(attrs.imageDropTarget);
            });
        }
    };
}]);


angular.module('employeeApp')
.directive('imageUploader', ['$mdToast', 'FileUploader', 
function ($mdToast, FileUploader) {
	return {
		templateUrl: 'views/templates/image-uploader.html',
		restrict: 'EA',
		replace: true,
		scope: {
			url: '@url',
			onUpload: '&',
			square: '=',
		},
		link: function postLink(scope, element, attrs) {
			scope.selection = "addImage";
			scope.showUploadButton = false;

			scope.buttonOn = function () {
				scope.showUploadButton = true;
			};
			scope.buttonOff = function () {
				scope.showUploadButton = false;
			};

			/*
			* Upload Image
			* 
			* Uploads image to the designated url. It then calls
			* the on-upload function that is 
			*/
			scope.upload = function ($image, callback) {
				var promise = FileUploader.upload($image, scope.url);
				promise.then(function (dataObj) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content('File was uploaded.'));

					scope.onUpload({data: dataObj.data, $image: dataObj.data});
					(callback || angular.noop)(dataObj.data);
				}, function () {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('There was an error uploading the file'));
				});
			};
		}
	};
}]);


angular.module('employeeApp')
.directive('img', [function () {
	
	function position(spec) {
		if (spec.height && spec.parentHeight && spec.elementHeight) {
			var heightDiff = spec.parentHeight - spec.elementHeight;
			spec.element.css('top', heightDiff / 2);
		} else if (spec.width && spec.parentWidth && spec.elementWidth) {
			var widthDiff = spec.parentWidth - spec.elementWidth;
			spec.element.css('left', widthDiff / 2);
		}
	}
	
	return {
		restrict: 'E',
		compile: function prelink(tElement, tAttrs) {
			if (!tElement.hasClass('logo')) {
				tElement.addClass('preloaded');
			}
			return {
				post: function postLink(scope, element, iAttrs) {
					//Add the preclass as soon as possible

					
					element.on('load', function () {
						if (iAttrs.center) {
							var parent = element.parent();
							var pWidth = parent.innerWidth();
							var pHeight = parent.innerWidth();
							position({
								element: element,
								width: true,
								parentWidth: pWidth,
								elementWidth: element.outerWidth()
							});
						}
						element.removeClass('preloaded');
					});
				}
			};
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('map', ['mapMarker', '$log', function (mapMarker, $log) {
    //Create the variables to be used
    var latLng = {},
        map,
        marker;
        //Options for the map 
	try {
		var mapOptions = {
			center: new google.maps.LatLng(13.776239, 100.527884),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.ROAD
		};
	} catch (e) {

	}
    var styles = [
    	{
    		featureType: "road",
			stylers: [
				{visibility: "off"}
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
    
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
			try {

				scope.map = {
					Marker: mapMarker,
					LatLng: google.maps.LatLng
				};
				scope.map.map = new google.maps.Map(element.get(0), mapOptions);
				scope.map.map.setOptions({styles:styles});
				
				//Refresh the map if a shown event is broadcast
				scope.$on('shown', function () {
					google.maps.event.trigger(scope.map.map, 'resize');
				});

				scope.map.refresh = function () {
					google.maps.event.triggger(this.map);    
				};

				//Create a marker and adds to scope.map.markers
				scope.map.createMarker = function (obj) {
					if (obj instanceof google.maps.LatLng) {
						latLng = obj;
					} else if (obj.hasOwnProperty('lat') && obj.hasOwnProperty('lng')) {
						latLng = new google.maps.LatLng(obj.lat, obj.lng);
					} else {
						latLng = null;
					}

					return new scope.map.Marker({
						map: this.map,
						position: latLng
					});
				};
				//Set map position
				scope.map.setPosition = function (obj) {
					if (obj instanceof google.maps.LatLng) {
						latLng = obj;
					} else {
						latLng = new google.maps.LatLng(obj.lat, obj.lng);
					}

					this.map.panTo(latLng);
					this.map.setZoom(14);
				};

			} catch (e) {
				$log.error(e);
			}
          
        }
    };
}]);


angular.module('employeeApp.directives')
.directive('modal', ['$log', function ($log) {
    var backdrop;
    var closeButton;
    
    function create_backdrop() {
        return angular.element('<div id="backdrop"></div>');
    }
    
    function postLink(scope, element, attr) {
        

    }
    
    return {
        restrict: 'A',
        scope: false,
        compile: function (Element, Attrs) {
			return {
				pre: function (scope, tElement, tAttrs) {
						tElement.addClass('modal hide');
						if (tAttrs.title) {
							closeButton = angular.element('<button type="button" class="close">&times;</button>');
							var title = angular.element('<div class="modal-title"><h4>' + tAttrs.title + '</h4></div>');
							title.append(closeButton);
							tElement.append(title);
						} else {
							//throw Error("Missing Title");
						}
				},
				post: function (scope, element, attrs) {
       
					function show(scope, element) {
						element.removeClass('hide');
						backdrop = create_backdrop();
						$(document.body).append(backdrop); 
						backdrop.on('click', function () {
							hide(scope, element, backdrop);
						});
	
						backdrop.fadeTo(500, 0.7);
						element.fadeTo(500, 1, function () {
							scope.$broadcast('shown');
						});
					}
	
					function hide(scope, element, backdrop, callback) {

						element.fadeOut(400, function () {
							element.addClass('hide');
							scope.$broadcast('hidden');
						});

						if (backdrop) {
							backdrop.fadeOut(500, function () {
								backdrop.remove();
								(callback || angular.noop)();
								try {
									(scope.modal._onhide && scope.modal || angular.noop)();
								} catch (e) {
									$log.warn(e);
								}

								if (attrs.ngModel || attrs.modal) {
									if (scope.$$phase == '$apply' || scope.$$phase == '$digest') {
										scope[attrs.ngModel || attrs.modal] = false;
									} else {
										try {
											scope.safeApply(function () {
												scope[attrs.ngModel || attrs.modal] = false;
											});
										} catch (e) {
											
										}
										
									}
								}

								if (attrs.onhide) {
									scope.$eval(attrs.onhide);
								}
							});
						}
					}
					/*
					* Hide the modal when the page
					* changes based on the scope 
					* messages
					*/
					scope.$on('$destroy', function () {
						if (backdrop) {
							backdrop.remove();
						}
					});

					if (attrs.ngModel || attrs.modal) {
						scope.$watch(attrs.ngModel || attrs.modal, function (value) {
							if (value) {
								show(scope, element);
							} else {
								hide(scope, element, backdrop);
							}
						});
					}

					scope.modal = {_onhide: undefined};
					scope.modal.show = function () {
						show(scope, element);
					};
					scope.modal.hide = function (callback) {
						hide(scope, element, backdrop, callback);
					};

					Object.defineProperties(scope.modal, {
						onhide: {
							set: function (fn) {
								this._onhide = fn;
							}
						}
					});

					if (closeButton) {
						closeButton.click(function () {
							try{
								scope.$apply(function () {
									scope[attrs.ngModel || attrs.modal] = false;
								});
							} catch (e) {
								$log.warn(e);
							}
							
						});
					}
				}
			};
		}
	};
}]);


angular.module('employeeApp')
.directive('onScrollEnd', ['$log', function ($log) {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.bind('scroll', function (e) {
				var childHeight = $(element.children()[0]).height();
				var elHeight = element.height();
				if (childHeight >= elHeight) {
					if ((element.scrollTop() + elHeight) >= childHeight - 10) {
						try {
							scope.$eval(attrs.onScrollEnd);
						} catch (err) {
							console.error("Missing a function for 'on-scroll-end'");
						}
					}
				}
			});
		}
	};
}]);


angular.module('employeeApp')
.directive('productSelector', ['Upholstery', 'Fabric', 'Table', '$rootScope', '$mdToast', 'FileUploader',
    function (Upholstery, Fabric, Table, $rootScope, $mdToast, FileUploader) {
        return {
            templateUrl: 'views/templates/product-selector.html',
            replace: true,
            restrict: 'A',
            scope: {
                visible: '=productSelector',
                url: '@productSelectorUploadUrl',
                add: '&productSelectorAdd'
            },
            link: function postLink(scope, element, attrs) {
				
                
                
                scope.fabricList = Fabric.query();
                scope.tableList = Table.query();
				scope.product = {};
                
				function uploadImage(image, callback) {
                    //Display Notification
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('Uploading image...'));
                    //Set the upload Target
                    
                    //Get new image and add to form data
                    //var fd = new FormData();
                    //fd.append('image', image);
                   
					var promise = FileUploader.upload(image, scope.url || 'upload/images');

					promise.then(function (response) {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(2000)
							.content('Image uploaded.'));
						(callback || angular.noop)(response.data);
					}, function () {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('Failed to upload image'));
					});
                    
                    /*//Upload the image
                    jQuery.ajax(scope.url || "upload/images", {
						type:'POST',
						data:fd,
						processData:false,
						contentType:false,
						success: function(response){
							Notification.display('Image Uploaded');
							(callback || angular.noop)(response);
						}
					});
					*/
                }
                
                function add() {
                    var newProduct = angular.copy(scope.product);
                    scope.add({product: newProduct});
                }
                
                scope.addImage = function (data) {
					var image = data.hasOwnProperty('data') ? data.data : data;
					scope.product.image = image;
                };
                
                scope.addUpholstery = function (upholstery) {
                    if (upholstery) {
                        scope.product = upholstery;
                        scope.selection = 'quantity';  
                    } else {
                        throw new TypeError("Expecting an Upholstery.");
                    }
                    
                };
                
                scope.addTable = function (table) {
                    if (table) {
                        scope.product = table;
                        scope.selection = 'quantity';
                    } else {
                        throw new TypeError("Expecting a Table.");
                    }
                    
                };

                scope.addCustomItem = function (item, image) {
                    
                    if (item) { 
						/*
                        var promise = FileUploader.upload(image, scope.url);
                        promise.then(function(response){
                            
                            angular.copy(response, scope.product.image);
                                            
                            
                        });*/
						angular.extend(scope.product, item);
						scope.product.is_custom = true;
						scope.product.type = 'custom';
						scope.selection = 'quantity';
					} else {
                        throw new TypeError("Expecting a Custom Item and Image.");
                    }
                };
                
                scope.setQuantity = function (quantity) {
                    scope.product.quantity = quantity;
					scope.selection = 'fabric';
					/*
                    if (scope.product.type.toLowerCase() == 'upholstery') {
                        scope.selection = 'fabric';
                    } else {
                        scope.visible = false;
                        var newProduct = angular.copy(scope.product); 
                        scope.reset();
                        scope.add({product: newProduct});
                    }
					*/
                };
                
                scope.setFabric = function () {
                    scope.visible = false;
                    var newProduct = angular.copy(scope.product);
                    scope.reset();
                    scope.add({product: newProduct});
                };
                
                scope.reset = function () {
                    scope.product = {};
                    scope.selection = 'upholstery';  
                };
                
               
               
                         
            }
        };
    }]);


/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp')
.directive('purchaseOrderSummary', ['D3', '$http', '$filter', function (D3, $http, $filter) {
	
	function createChart(element, data) {
		//Create box charts for summary
		var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div')
		.attr('class', function (d) {
			return d.category.toLowerCase();
		});
		
		//Attach amount
		box.append('span').text(function (d) {
			return "$" + $filter('number')(d.amount);
		});
		//Attach count
		box.append('span').text(function (d) {
			return d.category + " " + d.count;
		});
		
		//Add arrow
		box.append('div').attr('class', 'arrow');
		
		box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
			//Calculate bar width
			var value =  ((d.count / d.total) * 100);
			
			//Equalize the values so that all bars are visible
			if (value < 10) {
				value = 10;
			} else if (value > 80) {
				value = 80;
			}
			
			return value + '%';
		});
	}
	
    return {
      	restrict: 'EA',
      	link: function postLink(scope, element, attrs) {
        	
			//Set class for this element
			element.addClass('purchase-order-summary');
			
			//Get Summary data
			var promise = $http.get('/api/v1/purchase-order/stats/');
			promise.then(function (e) {
				e = e.data;
				var total = e.total.count;
				var data = [
					{count:e.processed.count, amount: e.processed.amount, category:'Processed', total:total},
					{count:e.received.count, amount: e.received.amount, category:'Received', total:total},
					{count:e.paid.count, amount: e.paid.amount, category:'Paid', total:total}
				];
				
				//Call fn to create chart
				createChart(element, data);
			});
      	}
    };
}]);


angular.module('employeeApp.directives')
.directive('supplyScannerModal', ['scanner', 'Supply', '$mdToast', 'KeyboardNavigation', '$timeout', '$rootScope', 'Equipment',
function (scanner, Supply, $mdToast, KeyboardNavigation, $timeout, $rootScope, Equipment) {
	return {
		templateUrl: 'views/templates/supply-scanner-modal.html',
		restrict: 'A',
		replace: true,
		scope: {
			'visible': '=supplyScannerModal'
		},
		link: function postLink(scope, element, attrs) {
			/*
			 * Vars
			 */
			var keyboardNav = new KeyboardNavigation();
			scope.action = 'subtract';
			scope.disabled = false;
			scope.scanner = new scanner('supply-scanner-modal');
			scope.equipment = {description: 'F-50', brand: 'Red King'};
			scope.interfaceType = 'equipment';

			var focusOnQuantity = function () {
				var quantity = element.find('input');
				quantity.focus();
				quantity.val('');
			};
			
			scope.fractSize = function () {
				return scope.supply ? scope.supply.units == 'pc' ? 0 : 2 : 2;
			};
			
			/*
			 * Watchers
			 */
			/*
			 * This is a hack to rememdy that I cannot
			 * add an ng-class to the main tag of this
			 * directive
			 */
			scope.$watch('showAddImage', function (val) {
				if (val) {
					element.addClass('add-image');
				} else {
					element.removeClass('add-image');
				}
			});
			
			/*
			 * Add Image
			 * 
			 * Updates the image of the currently selected supply
			 */
			scope.addImage = function (data) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Updating the supply's image"));	

				var image = data.hasOwnProperty('data') ? data.data : data;
				scope.supply.image = image;
				scope.supply.$update(function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(2000)
						.position('top right')
						.content("Supply's image updated."));
				});
			};
			
			scope.interfaceType = 'supply';
			
			scope.changeQuantity = function (quantity) {
				quantity = quantity || scope.quantity;
				if (scope.supply.hasOwnProperty('id') && quantity > 0 && !scope.disabled) {
					//Verifies that quantity change will not result in negative quantity
					if (scope.action == 'subtract' && scope.supply.quantity - quantity < 0) {
						throw Error("Cannot have a negative quantity");
					}
					
					scope.disabled = true;
										
					//Determines wheather to add or subtract quantity from original quantity
					if (scope.action == 'subtract') {
						scope.supply.quantity -= Number(quantity);
					} else if (scope.action == 'add') {
						scope.supply.quantity += Number(quantity);
					}
					
					scope.supply.$update({'country': $rootScope.country}, function () {
						$mdToast.show($mdToast.simple()
							.hideDelay(2000)
							.position('top right')
							.content('Quantity of ' + scope.supply.description + ' changed to ' + scope.supply.quantity));

						scope.quantity = 0;
						$timeout(function () {
							scope.supply = undefined;
						}, 1500);
					}, function (e) {
						$mdToast.show($mdToast.simple()
							.hideDelay(2000)
							.position('top right')
							.content(e));
					});
				}
			};
			
			/*
			 * Register the supply code regex
			 */
			scope.scanner.register(/^DRS-\d+$/, function (code) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Looking up supply"));

				scope.interfaceType = 'supply';
				scope.supply = Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
					scope.disabled = false;
					Notification.hide();
					focusOnQuantity();
				}, function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content("Unable to find supply."));
					/*
					scope.supply = Supply.get({id:code}, function () {
						Notification.display('Unable to find supply', false);
					});
					*/
				});
			});
			/*
			 * Register the upc regex
			 */
			scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
				scope.interfaceType = 'supply';
				Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
					scope.disabled = false;
					focusOnQuantity();
					try {
						scope.supply = response[0];
					} catch (e) {
					}
				}, function (reason) {

				});
			});
			
			/*
			 *  Regiester the equipment code
			 */ 
			scope.scanner.register(/^DRE-\d+$/, function (code) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Looking up equipment."));
				scope.interfaceType = 'equipment';
				scope.equipment = Equipment.get({id: code.split('-')[1]}, function (response) {
					scope.disabled = false;
					$mdToast.hide();
				}, function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content("Unable to find equipment."));
				});
			});
			
			/*
			 * Sets navigation
			 */
			function changeAction(action) {
				if (scope.$$phase === '$digest' || scope.$$phase === '$apply') {
					scope.action = action;
				} else {
					scope.$apply(function () {
						scope.action = action;
					});
				}
				
			}
			
			keyboardNav.onright = function () {
				changeAction('subtract');
			};
			
			keyboardNav.onleft = function () {
				changeAction('add');
			};
			
			keyboardNav.onenter = function () {
				scope.changeQuantity(scope.quantity);
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					//Disable the global scanner
					try {
						window.globalScanner.disable();
					} catch (e) {
						
					}
					
					//Enable the scanner and disable the standard codes
					scope.scanner.enable();
					keyboardNav.enable();
					scope.scanner.disableStandard();
					
					
				} else {
					scope.scanner.disable();
					keyboardNav.disable();
					scope.scanner.enableStandard();
					scope.showAddImage = false;
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
				scope.scanner.disable();
				scope.showAddImage = false;
			});
			
		
		}
	};
}]);


angular.module('employeeApp')
.directive('scanner', ['$location', '$rootScope', function ($location, $rootScope) {
	var code = '';
	function dispatch(code) {
		var codes = code.split('-');
		if (codes.length > 1) {
			switch (codes[0]) {
			case 'A':
				$rootScope.$apply(function () {
					$location.path('/order/acknowledgement/' + codes[1]);
				});
				break;
			case 'S':
				$rootScope.$apply(function () {
					$location.path('/order/shipping/' + codes[1]);
				});
				break;
			default:
				break;
			}
		}
	}
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.keyup(function (e) {
				var key = e.keyCode;
				if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
					var letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
					code += letter;
				} else {
					switch (key) {
					case 13:
						dispatch(code);
						code = '';
						break;
					case 189:
						code += '-';
						break;
					default:
						break;
					}
				}
			});
		}
	};
}]);

//'use strict';

angular.module('employeeApp')
.directive('searchBar', ['$compile', function ($compile) {
	"use strict";
	return {
		restrict: 'A',
		scope: {
			query:	'=ngModel'
		},
		link: function postLink(scope, element, attrs) {
			var input = null;
			var model = attrs.ngModel || 'query';
			element.addClass('search-bar');
			if (attrs.searchBarDate !== undefined) {
				input = angular.element('<div data-ng-model="' + model + '" class="datepicker" ui-date></div>');
				element.addClass('date');
			} else {
				input = angular.element('<input size="40" placeholder="Search" ng-model="query" />');
			}
			
			var clearButton = angular.element("<span class='close-button'>&times;</span>");
			
			$compile(input)(scope);
			element.append(input);
			element.append(clearButton);
	
			/*
			* The handler will detect if ctrl/cmd+F 
			* is pressed on the keyboard
			* 
			* If press occurs, we disable the default action
			* perform state specific actions
			*/
			function searchHandler(evt) {
				if ((evt.which == "70" && (evt.metaKey || evt.ctrlKey))) {
					evt.preventDefault();
					//Determine
					scope.$apply(function () {
						if (element.hasClass('focus')) {
							//Hide object and blur
							input.blur();
							element.removeClass('focus');
						} else {
							//Show and focus
							input.focus();
							element.addClass('focus');   
						}
					});
				}
			}
			
			//Bind an action 
			$(window).on('keydown', searchHandler);
			
			/*
			 * Clear Button
			 */
			clearButton.click(function () {
				try{
					scope.$apply(function () {
						scope.query = '';
					});
				} catch (e) {
					
				}
				
			});

			//Unbind when leaving the Page
			scope.$on('$destroy', function () {
				$(window).off('keydown', searchHandler);    
			});
		}
	};
}]);


angular.module('employeeApp')
.directive('supplierList', ['Supplier', '$mdToast', 'KeyboardNavigation', '$rootScope', '$filter',
function (Supplier, $mdToast, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/supplier-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=supplierList',
			onSelect: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
			/*
			* Initial fetching of the suppliers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
			scope.suppliers = Supplier.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Supplier.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.suppliers.indexOfById(resources[i].id) == -1) {
								scope.suppliers.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			/*
			 * Loads the next set of suppliers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					$mdToast.show($mdToast.simple()
						.position('right top')
						.hideDelay(0)
						.content('Loading more suppliers...'));

					fetching = true;
					Supplier.query({
						offset: scope.suppliers.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						$mdToast.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.suppliers.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.select = function (supplier) {
				scope.onSelect({'$supplier': supplier});
			};
			
			function filter(array) {
				return $filter('orderBy')($filter('filter')(scope.suppliers, scope.query), 'name');
			}
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = filter(scope.suppliers)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.supplier.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < filter(scope.suppliers).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
			
		}
    };

}]);


angular.module('employeeApp')
.directive('suppliers', ['Supplier', '$mdToast', 'KeyboardNavigation', '$rootScope', '$filter',
function (Supplier, $mdToast, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/suppliers.html',
		replace: true,
		restrict: 'A',
		scope: {
			onSelect: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
			/*
			* Initial fetching of the suppliers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
			scope.suppliers = Supplier.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Supplier.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.suppliers.indexOfById(resources[i].id) == -1) {
								scope.suppliers.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			/*
			 * Loads the next set of suppliers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('Loading more suppliers...'));

					fetching = true;
					Supplier.query({
						offset: scope.suppliers.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						$mdToast.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.suppliers.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.select = function (supplier) {
				scope.onSelect({'$supplier': supplier});
			};
			
			function filter(array) {
				return $filter('orderBy')($filter('filter')(scope.suppliers, scope.query), 'name');
			}
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = filter(scope.suppliers)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.supplier.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < filter(scope.suppliers).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
			
		}
    };

}]);


angular.module('employeeApp')
.directive('supplies', ['Supply', '$filter', 'KeyboardNavigation', '$mdToast', '$rootScope', '$http', '$compile',
function (Supply, $filter, KeyboardNavigation, $mdToast, $rootScope, $http, $compile) {
	return {
		templateUrl: 'views/templates/supplies.html',
		replace: true,
		restrict: 'A',
		scope: {
			//visible: '=supplyList',
			onSelect: '&',
			supplier: '=',
			newSupply: '='
		},
		compile: function compile(tElement, tAttrs, transclude) {
			return {
				post: function postLink(scope, element, attrs) {
					var fetching = true,
						supplierId,
						currentSelection,
						index = 0;
			
					var promise = $http.get('/api/v1/supply/type/');
					promise.success(function (d) {
						scope.types = d;
						scope.types.splice(scope.types.indexOf(null), 1);
					});

					/*
					* Initial fetching of the supplies.
					* 
					* We will turn the fetching flag to false
					* once we received the results
					*/
					if (attrs.supplier) {
						scope.$watch('supplier', function (val) {
							if (val) {
								supplierId = val.id;
								scope.supplies = Supply.query({supplier_id: val.id, limit: 20}, function (response) {
									fetching = false;
									changeSelection(index);
								});
							}
						});
					} else {
						scope.supplies = Supply.query({limit: 20}, function (response) {
							fetching = false;
							changeSelection(index);
						});
					}
			
					/*
					 * Search
					 */
					scope.$watch('query', function (q) {
						if (q) {
							options = {
								q: q, 
								limit: 10 + (q.length * 2)
							};
							
							if (supplierId) {
								options.supplier_id = supplierId;
							}
							
							Supply.query(options, function (resources) {
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i].id) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
								index = 0;
								changeSelection(index);
							});
						}
					});
			
					/*
					 * Watch for new items to add
					 */
					scope.$watch('newSupply', function (supply) {
						if (supply instanceof Supply) {
							scope.supplies = scope.supplies || [];
							if (scope.supplies.indexOfById(supply.id) == -1) {
								scope.supplies.push(supply);
							}
						}
					});
			
					/*
					 * Loads the next set of supplies if there is no fetching
					 * currently running
					 */
					scope.loadNext = function () {
						fetching = false;
						if (!fetching) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(0)
								.content('Loading more supplies...'));

							fetching = true;
					
							var options = {
								offset: scope.supplies.length,
								limit: 50
							};
					
							//Set Supplier ID
							if (supplierId) {
								options.supplier_id = supplierId;
							}

							Supply.query(options, function (resources) {
								fetching = false;
								$mdToast.hide();
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i]) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
							});
						}
					};
			
					/*
					 * The function to run when a customer is selected
					 */
					scope.select = function (supply) {
						scope.onSelect({'$supply': supply});
					};
			
					function filter(array) {
						return $filter('filter')(array, scope.query);
					}
					function changeSelection(i) {
				
						$rootScope.safeApply(function () {
							if (currentSelection) {
								currentSelection.$selected = false;
							}
					
							currentSelection = filter(scope.supplies)[i];
					
							if (currentSelection) {
								currentSelection.$selected = true;
							}
						});
			
						var selection = $('.supply.selected');
						var container = selection.parents('.inner-container');
						var scrollTop = container.scrollTop();
						var cHeight = container.innerHeight();
				
				
						if (scrollTop > (selection.outerHeight() * i)) {
							container.scrollTop(selection.outerHeight() * i);
						} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
							container.scrollTop(selection.outerHeight() * i);
						}
				
					}
			
					var keyboardNav = new KeyboardNavigation();
			
					keyboardNav.ondown = function () {
						if (index < filter(scope.supplies).length - 1) {
							index += 1;
							changeSelection(index);
						}
					};
			
					keyboardNav.onup = function () {
						if (index !== 0) {
							index -= 1;
							changeSelection(index);
						}
					};
			
					keyboardNav.onenter = function () {
						$rootScope.safeApply(function () {
							scope.select(currentSelection);
						});
					};
			
					scope.$watch('visible', function (val) {
						if (val) {
							keyboardNav.enable();
						} else {
							keyboardNav.disable();
						}
					});
			
					scope.$on('$destroy', function () {
						keyboardNav.disable();
					});
			
				}
		    };
		        
		}
    };
}]);


angular.module('employeeApp')
.directive('supplyList', ['Supply', '$filter', 'KeyboardNavigation', '$mdToast', '$rootScope', '$http', '$compile',
function (Supply, $filter, KeyboardNavigation, $mdToast, $rootScope, $http, $compile) {
	return {
		templateUrl: 'views/templates/supply-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=supplyList',
			onSelect: '&',
			supplier: '=',
			newSupply: '='
		},
		compile: function compile(tElement, tAttrs, transclude) {
			return {

				post: function postLink(scope, element, attrs) {
					var fetching = true,
						supplierId,
						currentSelection,
						index = 0;
			
					var promise = $http.get('/api/v1/supply/type/');
					promise.success(function (d) {
						scope.types = d;
						scope.types.splice(scope.types.indexOf(null), 1);
					});

					/*
					* Initial fetching of the supplies.
					* 
					* We will turn the fetching flag to false
					* once we received the results
					*/
					if (attrs.supplier) {
						scope.$watch('supplier', function (val) {
							if (val) {
								supplierId = val.id;
								scope.supplies = Supply.query({supplier_id: val.id, limit: 20}, function (response) {
									fetching = false;
									changeSelection(index);
								});
							}
						});
					} else {
						scope.supplies = Supply.query({limit: 20}, function (response) {
							fetching = false;
							changeSelection(index);
						});
					}
			
					/*
					 * Search
					 */
					scope.$watch('query', function (q) {
						if (q) {
							var options = {
								q: q, 
								limit: 10 + (q.length * 2)
							};
							
							if (supplierId) {
								options.supplier_id = supplierId;
							}
							
							Supply.query(options, function (resources) {
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i].id) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
								index = 0;
								changeSelection(index);
							});
						}
					});
			
					/*
					 * Watch for new items to add
					 */
					scope.$watch('newSupply', function (supply) {
						if (supply instanceof Supply) {
							scope.supplies = scope.supplies || [];
							if (scope.supplies.indexOfById(supply.id) == -1) {
								scope.supplies.push(supply);
							}
						}
					});
			
					/*
					 * Loads the next set of supplies if there is no fetching
					 * currently running
					 */
					scope.loadNext = function () {
						fetching = false;
						if (!fetching) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(0)
								.content('Loading more supplies...'));
							fetching = true;
					
							var options = {
								offset: scope.supplies.length,
								limit: 50
							};
					
							//Set Supplier ID
							if (supplierId) {
								options.supplier_id = supplierId;
							}

							Supply.query(options, function (resources) {
								fetching = false;
								$mdToast.hide();
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i]) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
							});
						}
					};
			
					/*
					 * The function to run when a customer is selected
					 */
					scope.select = function (supply) {
						scope.onSelect({'$supply': supply});
					};
			
					function filter(array) {
						return $filter('filter')(array, scope.query);
					}
					function changeSelection(i) {
				
						$rootScope.safeApply(function () {
							if (currentSelection) {
								currentSelection.$selected = false;
							}
					
							currentSelection = filter(scope.supplies)[i];
					
							if (currentSelection) {
								currentSelection.$selected = true;
							}
						});
			
						var selection = $('.supply.selected');
						var container = selection.parents('.inner-container');
						var scrollTop = container.scrollTop();
						var cHeight = container.innerHeight();
				
				
						if (scrollTop > (selection.outerHeight() * i)) {
							container.scrollTop(selection.outerHeight() * i);
						} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
							container.scrollTop(selection.outerHeight() * i);
						}
				
					}
			
					var keyboardNav = new KeyboardNavigation();
			
					keyboardNav.ondown = function () {
						if (index < filter(scope.supplies).length - 1) {
							index += 1;
							changeSelection(index);
						}
					};
			
					keyboardNav.onup = function () {
						if (index !== 0) {
							index -= 1;
							changeSelection(index);
						}
					};
			
					keyboardNav.onenter = function () {
						$rootScope.safeApply(function () {
							scope.select(currentSelection);
						});
					};
			
					scope.$watch('visible', function (val) {
						if (val) {
							keyboardNav.enable();
						} else {
							keyboardNav.disable();
						}
					});
			
					scope.$on('$destroy', function () {
						keyboardNav.disable();
					});
			
				}
		    };
		        
		}
    };
}]);


angular.module('employeeApp.directives')
.directive('supply', ['$http', 'Supply', '$rootScope', '$mdToast', '$timeout', '$window', 'scanner', 'D3', '$compile', 'FileUploader', '$log',
function ($http, Supply, $rootScope, $mdToast, $timeout, $window, scanner, D3, $compile, FileUploader, $log) {
	
	var subHTML;
	var promise = $http.get('views/templates/supply-details.html');
	promise.then(function (response) {
		subHTML = response.data || response;
	}, function () {
		
	});
	
	function createChart(data, property, largestSize, className) {
		var box = D3.select('div.'+className+' .chart').selectAll('div').data(data).enter().append('div')
		.attr('class', 'price-box').style('left', function (d, i) {return ((i * 6) + i) + 'em';})
		.attr('class', function (d, i) {
			try {
				if (Number(data[i+1][property]) > Number(d[property])) {
					return 'price-box green';
				} else if (Number(data[i+1][property]) < Number(d[property])) {
					return 'price-box red';
				} else {
					return 'price-box black';
				}
			} catch (e) {
				return 'price-box black';
			}
	
		});

		var costSpans = box.append('span').text(function (d) {return d[property];}).attr('class', 'price');
		var dateSpans = box.append('span').attr('class', 'date')
		.text(function (d) {
			var date = new Date(d.timestamp);
			return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
		});

		D3.select('div.'+className).transition().duration(1000).style('border', '1px solid #CCC').style('height', '10em');
		box.transition().duration(2000).delay(1000).style('height', function (d) { return (((d[property]) / largestSize) * 8) + 'em';});
	}
	
	return {
  		templateUrl: 'views/templates/supply.html',
		replace: true,
  	  	restrict: 'A',
		scope: {
			supply: '=',
			onSelect: '&'
		},
  	  	link: function postLink(scope, element, attrs) {
			
			var fullCompiled = false;
			scope.fetched = false;
			scope.units = angular.copy($rootScope.units);
			scope.types = angular.copy($rootScope.types || []);
			
			//Set Up Scanner
			scope.scanner = new scanner("supply/"+scope.supply.id);
			scope.scanner.disableStandard();
			scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
				if (scope.upcTarget) {
					scope.supply.suppliers[scope.supply.suppliers.indexOfById(scope.upcTarget.id)].code = code;
					scope.scanner.disable();
					globalScanner.enable();
					scope.upcTarget = undefined;
				}
			});
			
			var updateLoopActive = false,
				timeoutPromise,
				cancelWatch = angular.noop(),
				badTypes = ['custom', null];
			
			//Modify Types
			for (var y = 0; y < badTypes.length; y++) {
				var index = scope.types.indexOf(badTypes[y]);
				if (index != -1) {
					scope.types.splice(scope.types.indexOf(badTypes[y]), 1);
				}
			}
			
			/*
			 * General Functions
			 */
			
			//Start a watch on the scope for the supply var
			function startWatch() {
				cancelWatch = scope.$watch(function () {
					var supply = angular.copy(scope.supply);
					var attrsToRemove = ['last_modified', 'image', 'supplier', 'suppliers', 'sticker',
										 '$promise', '$resolved'];
					for (var i = 0; i < attrsToRemove.length; i++) {
						delete supply[attrsToRemove[i]];
					}
					return supply;
				}, function (newVal, oldVal) {

					if (oldVal.hasOwnProperty('id') && !angular.equals(newVal, oldVal)) {
						
						$timeout.cancel(timeoutPromise);
						
						timeoutPromise = $timeout(function () {
							var supply = angular.copy(scope.supply);
							$mdToast.show($mdToast.simple()
								.hideDelay(0)
								.position('top right')
								.content("Saving " + scope.supply.description + "..."));
							supply.$update({'country': $rootScope.country}, function () {
								$mdToast.show($mdToast.simple()
									.hideDelay(2000)
									.position('top right')
									.content(scope.supply.description + ' saved'));
							}, function () {
								$mdToast.show($mdToast.simple()
									.hideDelay(0)
									.position('top right')
									.content("There was an error in saving " + scope.supply.description));
							});
						}, 750);
						
					}
				}, true);
			}
			
			function prepareData(response, attrName) {
				var data = response.data || response;
				var subData = [];
				for (var i = 0; i < data.length; i++) {
					subData.push(data[i][attrName]);
				}
				
				largest = Math.max.apply(Math, subData);
				
				return {'largest': Math.max.apply(Math, subData),
						'data': data};
			}
			/*
			 * Seletively show dimensions
			 */
			scope.showWidth = function () {
		
				return validWidth.indexOf($scope.supply.units) > -1 || 
				validWidth.indexOf($scope.supply.type) > -1 ||
				($scope.supply.units == 'kg' && $scope.supply.type == 'packaging') ? true : false;
			};
	
			scope.showDepth = function () {
				return validDepth.indexOf($scope.supply.units) > -1 ? true : false;
			};
	
			scope.showHeight = function () {
				return validHeight.indexOf($scope.supply.units) > -1 ||
				($scope.supply.units == 'kg' && $scope.supply.type == 'packaging') ? true : false;
			};
			
			scope.viewStickers = function () {
				try {
					$window.open(scope.supply.sticker.url);
				} catch (e) {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content("This supply is missing a sticker"));
				}
			};
			
			scope.activate = function () {
				
				//Used to determine if the directive needs to add the detailed area
				if (element.find('.supply-details').children().length === 0) {
					var html = $compile(subHTML)(scope);
					angular.element(element.find('.supply-details')).append(html);
					fullCompiled = true;
				}
				
				if (element.hasClass('active')) {
					element.removeClass('active');
					cancelWatch();
				} else {
					element.addClass('active');
					
					try {
						scope.onSelect({'$element': element});
					} catch (e) {
						$log.warn(e);
					}

					Supply.get({id:scope.supply.id}, function (response) {
						angular.extend(scope.supply, response);
						startWatch();
						scope.fetched = true;
						
						
						$http.get('/api/v1/log/', {params: {'action': 'SUBTRACT', 'supply': scope.supply.id}}).then(function(response) {
							
							var dataObj = prepareData(response, 'quantity');
							
							if (dataObj.data.length > 0) {
								createChart(dataObj.data, 'quantity', dataObj.largest, 'usage-chart-supply-'+scope.supply.id);
							}
						});
						
						
						for (var index in scope.supply.suppliers) {
							var supplier = scope.supply.suppliers[index];
			
							if (typeof(supplier) == "object") {
								
								$http.get('/api/v1/log/', {params: {'action': 'PRICE CHANGE', 'supply': scope.supply.id, 'supplier': supplier.id}}).then(function(response) {
									var supplier_id = response.config.params.supplier,
										dataObj = prepareData(response, 'cost');
										
									scope.price_logs = scope.price_logs || [];
									scope.price_logs.push(dataObj.data);
									
									if (dataObj.data.length > 0) {
										createChart(dataObj.data, 'cost', dataObj.largest, 'price-chart-supplier-'+supplier_id);
									} else {
										D3.select('div.price-chart-supplier-'+supplier_id+' .chart').style('display', 'none');
									}
								}); //jshint ignore:line
							}
						}
						
					});
				}
			};
			
			scope.addUPC = function(supplier) {
				globalScanner.disable();
				scope.upcTarget = supplier;
				scope.scanner.enable();
			};
			
			var imgCapture = element.find('.image-capture')[0];
			angular.element(imgCapture).on('change', function (evt) {
				
				if (evt.target.files.length > 0) {
					var image = evt.target.files[0];
					var promise = FileUploader.upload(image, "/api/v1/supply/image/");
					
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('Uploading file...'));
					
					promise.then(function (dataObj) {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(3000)
							.content('File was uploaded.'));

						scope.supply.image = dataObj.data;
						
						scope.supply.$update({'country': $rootScope.country}, function () {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(3000)
								.content(scope.supply.description + ' was updated.'));
							
						}, function (e) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(3000)
								.content(e));
							
						});
						
					}, function () {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('There was an error uploading the file'));
					});
				}
			});
			
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
			
			scope.printSticker = function () {
				var container = $(".print").empty();
				var iframe = document.createElement('iframe');
				iframe.onload = setPrint;
				iframe.src = "api/v1/supply/" + scope.supply.id + "/sticker/";
				container.append(iframe);
			};
  	  	}
	};
}]);


angular.module('employeeApp')
.directive('tableList', ['Table', 'Notification', 'KeyboardNavigation', '$rootScope', '$filter',
function (Table, Notification, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/table-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			onSelect: '&',
			visible: '='
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
            
            /*
             * Initial fetching of the customers.
             * 
             * We will turn the fetching flag to false
             * once we received the results
             */
			scope.tables = Table.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Table.query({q: q, limit: 10}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.tables.indexOfById(resources[i].id) == -1) {
								scope.tables.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			
			/*
			* Loads the next set of customers if there is no fetching
			* currently running
			*/
			scope.loadNext = function () {
				if (!fetching) {
					Notification.display("Loading more tables...", false);
					fetching = true;
					Table.query({
						offset: scope.tables.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.tables.push(resources[i]);
						}
						if (resources.length === 0) {
							fetching = true;
						}
					});
				}
			};

			scope.select = function (table) {
				scope.onSelect({$table: table});
			};
			
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = $filter('filter')(scope.tables, scope.query)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.table.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			scope.select = function (table) {
				scope.onSelect({$table: table});
			};
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < $filter('filter')(scope.tables, scope.query).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			keyboardNav.enable();
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('telephone', ['$filter', '$parse', function ($filter, $parse) {
	return {
		restrict: 'A', 
		link: function (scope, element, attr) {
			//bind to blur
            element.bind('blur', function () {
                //create new beautified version
                var filteredValue = $filter('telephone')(element.context.value);
                //apply to input
                element.context.value = filteredValue;
                //assign to model
                $parse(attr.ngModel).assign(scope, filteredValue);
            });
		}
	};
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegatation.
 */
angular.module('employeeApp.directives')
.directive('tooltipPopup', function () {
	return {
		restrict: 'EA',
		replace: true,
		scope: { tooltipTitle: '@', placement: '@', animation: '&', isOpen: '&' },
		templateUrl: 'views/templates/tooltip-popup.html'
	};
})
.directive('tooltip', ['$compile', '$timeout', '$parse', '$window', function ($compile, $timeout, $parse, $window) {
	var template = 
		'<tooltip-popup ' +
			'tooltip-title="{{tt_tooltip}}" ' +
			'placement="{{tt_placement}}" ' +
			'animation="tt_animation()" ' +
			'is-open="tt_isOpen"' +
		'>' +
		'</tooltip-popup>';
  
	return {
		scope: true,
		link: function (scope, element, attr) {
			var tooltip = $compile(template)(scope), 
				transitionTimeout,
				triggers = {
					'focus': 'blur',
					'mouseenter': 'mouseleave'
				},
				triggerChoice = (attr.tooltipTrigger || 'mouseenter').toLowerCase();

			attr.$observe('tooltip', function (val) {
				scope.tt_tooltip = val;
			});

			attr.$observe('tooltipPlacement', function (val) {
				// If no placement was provided, default to 'top'.
				scope.tt_placement = val || 'right';
			});

			attr.$observe('tooltipAnimation', function (val) {
				scope.tt_animation = $parse(val);
			});

			// By default, the tooltip is not open.
			scope.tt_isOpen = false;
      
			// Calculate the current position and size of the directive element.
			function getPosition() {
				var boundingClientRect = element[0].getBoundingClientRect();
				return {
					width: element.prop('offsetWidth'),
					height: element.prop('offsetHeight'),
					top: boundingClientRect.top + $window.pageYOffset,
					left: boundingClientRect.left + $window.pageXOffset
				};
			}
      
			// Show the tooltip popup element.
			function show() {
				var position,
					ttWidth,
					ttHeight,
					ttPosition;
	
				//don't show empty tooltips
				if (!scope.tt_tooltip) {
					return;
				}
	
				// If there is a pending remove transition, we must cancel it, lest the
				// toolip be mysteriously removed.
				if (transitionTimeout) {
					$timeout.cancel(transitionTimeout);
				}

				// Set the initial positioning.
				tooltip.css({top: 0, left: 0, display: 'block'});

				// Now we add it to the DOM because need some info about it. But it's not 
				// visible yet anyway.
				element.after(tooltip);

				// Get the position of the directive element.
				position = getPosition();

				// Get the height and width of the tooltip so we can center it.
				ttWidth = tooltip.prop('offsetWidth');
				ttHeight = tooltip.prop('offsetHeight');

				// Calculate the tooltip's top and left coordinates to center it with
				// this directive.
				switch (scope.tt_placement) {
				case 'right':
					ttPosition = {
						top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
						left: (position.left + position.width) + 'px'
					};
					break;
				case 'bottom':
					ttPosition = {
						top: (position.top + position.height) + 'px',
						left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
					};
					break;
				case 'left':
					ttPosition = {
						top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
						left: (position.left - ttWidth) + 'px'
					};
					break;
				default:
					ttPosition = {
						top: (position.top - ttHeight) + 'px',
						left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
					};
					break;
				}

				// Now set the calculated positioning.
				tooltip.css(ttPosition);

				// And show the tooltip.
				scope.tt_isOpen = true;
			}

			// Hide the tooltip popup element.
			function hide() {
				// First things first: we don't show it anymore.
				//tooltip.removeClass( 'in' );
				scope.tt_isOpen = false;
        
				// And now we remove it from the DOM. However, if we have animation, we 
				// need to wait for it to expire beforehand.
				// FIXME: this is a placeholder for a port of the transitions library.
				if (angular.isDefined(scope.tt_animation) && scope.tt_animation()) {
					transitionTimeout = $timeout(function () {tooltip.remove(); }, 500);
				} else {
					tooltip.remove();
				}
			}
      
      
			// Register the event listeners.
			element.bind(triggerChoice || 'mouseenter', function () {
				scope.$apply(show);
			});
			element.bind(triggers[triggerChoice] || 'mouseleave', function () {
				scope.$apply(hide);
			});
		}
	};
}]);



angular.module('employeeApp')
.directive('touchend', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchEnd(e) {
				//element.addClass('touch-end');
				element.removeClass('touch-start');
				element.removeClass('touch-move');
			}
			
			//Apply if an iOS device
			if (window.iOS) { //jsHint ignore
				element.on('touchend', touchEnd);
		
				scope.$on('$destroy', function () {
					element.off('touchmove', touchEnd);
				});
			}
		}
    };
});

angular.module('employeeApp')
.directive('touchmove', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchMove(e) {
				element.addClass('touch-move');
				element.removeClass('touch-start');
			}
			
			//Apply if an iOS device 
			if (window.iOS) {
				element.on('touchmove', touchMove);
			
				scope.$on('$destroy', function () {
					element.off('touchmove', touchMove);
				});
			}
		}
    };
});


angular.module('employeeApp')
.directive('touchselect', ['$location', function ($location) {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			
			//Flags
			var started = false,
				moved = false;
							
			//Handlers
			function click(e) {
			
				e.preventDefault();
				e.stopPropagation();
			
			}

			function touchStart() {
				started = true;
			}
		
			function touchMove() {
				moved = true;
			}
		 
			function touchEnd() {
				if (started && !moved) {
					var url = attrs.ngHref || attrs.href;
					
					scope.safeApply(function () {
						$location.path(url);
					});
					element.click();
				}
			
				started = false;
				moved = false;
			}
			
			if (window.iOS) {
			
				
						
				element.on('click', click);
				element.on('touchstart', touchStart);
				element.on('touchmove', touchMove);
				element.on('touchend', touchEnd);
			
				//Release the event handlers
				scope.$on('$destroy', function () {
					element.off('click', click);
					element.off('touchstart', touchStart);
					element.off('touchmove', touchMove);
					element.off('touchEnd', touchEnd);
				});
				
			}
		}
    };
}]);


angular.module('employeeApp')
.directive('touchstart', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchStart(e) {
				element.addClass('touch-start');
			}
			
			//Apply if an iOS device
			if (window.iOS) {
				element.on('touchstart', touchStart);
			
				scope.$on('$destroy', function () {
					element.off('touchstart', touchStart);
				});
			}
		}
	};
});


angular.module('employeeApp')
.directive('upholsteryList', ['Upholstery', 'Notification', '$filter', 'KeyboardNavigation', '$rootScope',
function (Upholstery, Notification, $filter, KeyboardNavigation, $rootScope) {
	return {
		templateUrl: 'views/templates/upholstery-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			onSelect: '&',
			safeApply: '&',
			visible: '='
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
            /*
             * Initial fetching of the customers.
             * 
             * We will turn the fetching flag to false
             * once we received the results
             */
			scope.upholsteries = Upholstery.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});

			/*
			* Search
			*/
			scope.$watch('query', function (q) {
				if (q) {
					scope.currentIndex = 0;
					Upholstery.query({q: q, limit: 10 + (scope.query.length * 2)}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.upholsteries.indexOfById(resources[i].id) == -1) {
								scope.upholsteries.push(resources[i]);
							}
						}
						
						index = 0;
						changeSelection(index);
					});
				}
			});
			
			/*
			* Loads the next set of customers if there is no fetching
			* currently running
			*/
			scope.loadNext = function () {
				if (!fetching) {
					Notification.display("Loading more upholsteries...", false);
					fetching = true;
					Upholstery.query({
						offset: scope.upholsteries.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.upholsteries.push(resources[i]);
						}
					});
				}
			};
			
			
			
			
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = $filter('filter')(scope.upholsteries, scope.query)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.upholstery.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			scope.select = function (upholstery) {
				scope.onSelect({$upholstery: upholstery});
			};
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < $filter('filter')(scope.upholsteries, scope.query).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
			
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('x', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			if (!attrs.x) {
				throw new TypeError("Missing expression to evaluate.");
			}
			var x = angular.element('<span class="x-mark">𐄂</span>');
            
			scope.$watch(attrs.x, function (val) {
				if (val) {
					element.append(x);
				} else {
					x.remove();
				}
			});
		}
	};
}]);

angular.module('employeeApp')
.filter('available', [function () {
	return function (input) {
		return 'available filter: ' + input;
	};
}]);


angular.module('employeeApp.filters')
.filter('beautify', [function () {
    return function (input) {
		try {
			//declare vars
			var newStrArray = [],
				newStr,
				upperLetter,
				newWord,
				//split the words into array
				words = input.split(/\s+/);

			//loops through the words and uppercase first letter
			angular.forEach(words, function (word) {
				//Capitalize first lteer 
				upperLetter = word.charAt(0).toUpperCase();
				//get remainder of word
				newWord = word.slice(1);
				//create new formatted word
				newWord = upperLetter + newWord;
				//add to new string array
				newStrArray.push(newWord);

			});
			//join new string array
			newStr = newStrArray.join(' ');
			//return string
			return newStr;
		} catch (e) {
			return input;
		}
	};
}]);


angular.module('employeeApp.filters')
.filter('dateFilter', [function () {
    function filter(item, target, comparison, success) {
        switch (comparison) {
        case "equals":
            if ((item.getMonth() == target.getMonth()) && (item.getYear() == target.getYear()) && (item.getDate() == target.getDate())) {
                return true;
            }
            break;
        case "greater":
            if (item.getTime() >= target.getTime()) {
                return true;
            }
            break;
        case "less":
            if (item.getTime() <= target.getTime()) {
                return true;
            }
            break;
        default:
            if ((item.getMonth(item) == target.getMonth()) && (item.getYear() == target.getYear()) && (item.getDate() == target.getDate())) {
                return true;
            }
            break;
        }
        return false;
            
    }
    return function (array, key, date, comparison) {
        var predicates = [];
        angular.forEach(array, function (item) {      
            if (item.hasOwnProperty(key)) {
                if (typeof(item[key]) == 'object') {
                    if (filter(item[key], date, comparison)) {
                        predicates.push(item);
                    }
                } else if (typeof(item[key]) == "string") {
                    var testDate = new Date(item[key]);
                    filter(testDate, date, comparison, function (verifiedObj) {
                        predicates.push(verifiedObj); 
                    });
                }
            } 
        });
        return predicates;
    };
}]);


angular.module('employeeApp.filters')
.filter('dateRange', [function () {
    function filter(date, start, end, success) {
        if (start.getTime() <= date.getTime() && date.getTime() <= end.getTime()) {
            success();
        }
    }
    function convertToDateObject(arg) {
        switch (typeof(arg)) {
        case "object":
            return arg;
        case 'string':
            return new Date(arg);
        case 'number':
            return new Date(arg);
        default:
            return new Date(arg);
        }
    }
    return function (array, key, arg1, arg2) {
        var predicates = [],
            start = convertToDateObject(arg1),
            end = convertToDateObject(arg2),
            testDate = null;
        angular.forEach(array, function (item) {      
            if (item.hasOwnProperty(key)) {
                if (typeof(item[key]) == 'object') {
                    filter(item[key], start, end, function () {
                        predicates.push(item); 
                    });
                } else if (typeof(item[key]) == "string") {
                    testDate = new Date(item[key]);
                    filter(testDate, start, end, function () {
                        predicates.push(item); 
                    });
                } else if (typeof(item[key]) == "number") {
                    testDate = new Date(item[key]);
                    filter(testDate, start, end, function () { 
                        predicates.push(item); 
                    });
                }
            } 
        });
        return predicates;
    };
}]);


angular.module('employeeApp.filters')
.filter('exclude', [function () {
    //function to compare
	return function (array, key, value) {
          
        if (!(array instanceof Array)) {
			return [];
        }
       
        var filtered = [];
        
        for (var i in array) {
            if (array[i][key] != value) {
                filtered.push(array[i]);
            }
        }
        
        return filtered;
	};
}]);


angular.module('employeeApp.filters')
.filter('telephone', [function () {
	return function ($input) {
		var clean = $input.replace(/ /g, '').replace(/\-/g, '');
		return clean; 
	};
}]);


angular.module('employeeApp.services')
.service('CameraService', function CameraService() {
    
	function getUserMedia() {
		navigator.getUserMedia = (window.navigator.getUserMedia || 
									window.navigator.webkitGetUserMedia ||
									window.navigator.mozGetUserMedia || 
									window.navigator.msGetUserMedia);
		return navigator.getUserMedia;
	}
	
	return {
		hasUserMedia: function () {
			return !!getUserMedia();
		},
		getUserMedia: getUserMedia
	};
});


angular.module('employeeApp.services')
.service('D3', function D3() {
	  return d3; //jshint ignore:line
    // AngularJS will instantiate a singleton by calling "new" on this function
});


/*
 * indexedDB Storage
 * 
 * This file implements a indexedDB backend to store objects
 * from the server and the provide them as a cache and other 
 * potential uses. 
 * 
 * Private Methods:
 * - _save()
 * - _get()
 * - _query()
 * - _remove()
 * 
 * Public Methods:
 * -save()
 * -get()
 * -query()
 * -remove()
 * -clear()
 */
angular.module('employeeApp.services')
.factory('DB', ['$q', '$timeout', '$rootScope',  function ($q, $timeout, $rootScope) {
	/*
	 * Private Vars
	 */
	var db,
		version = 1,
		objectStores = [
			{
				'resourceName': 'supply',
				'keyPath': 'id',
				'indexes': ['id', 'supplier']
			},
			{
				'resourceName': 'acknowledgement',
				'keyPath': 'id',
				'indexes': ['id', 'delivery_date']
			}
		];
		
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	
	/*
	 * Private functions 
	 */
	
	/*
	 * Open database
	 */
	function openDatabase() {
		
		var openRequest = indexedDB.open("employee", version),
			objectStore;
		
		//On success
		openRequest.onsuccess = function (e) {
			//Get the database
			db = e.target.result;
		};
		
		//On Error
		openRequest.onerror = function (e) {
			console.log('Error opening indexedDB');
			console.dir(e);
		};
		
		//On Upgrade Needed
		openRequest.onupgradeneeded = function (e) {
			console.log("Upgrading the indexedDB..");
			
			//Get the database
			db = e.target.result;
			
			//Create the object store if it does not exists
			for (var i = 0; i < objectStores.length; i++) {
				var param = objectStores[i];
				
				//Creates the store if not yet created
				if (!db.objectStoreNames.contains(param.resourceName)) {
					objectStore = db.createObjectStore(param.resourceName, {keyPath: param.keyPath});
				} else {
					objectStore = db.transaction.objectStore(param.resourceName);
				}
				
				//Cycle throught the indexes
				for (var h = 0; h < param.indexes.length; h++) {
					var index = param.indexes[h];
					
					//Creates indexes if not yet created
					if (!objectStore.indexNames.contains(index)) {
						objectStore.createIndex(index, index, {unique: false});
					}
				}
			}
		};
	}
	
	function DB(resourceName) {
		this.resourceName = resourceName;
		
		if (!db) {
			openDatabase();
		}
		
		/*
		 * Query
		 * 
		 * Gets all the objects in the object store that 
		 * meets the specified parameters
		 */
		this.query = function () {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName]);
				
			objectStore.openCursor().onsuccess = function (event) {
				var	data = [], 
					cursor = event.target.result;
				
				//Add object to the array and continue to the next one
				if (cursor) {
					data.append(cursor.value);
					cursor.continue(); //jshint ignore:line
				
				//Resolve the promise
				} else {
					deferred.resolve(data);
				}
			};
			
			return deferred.promise;
		};
		
		this.get = function (id) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName]);
			
			var request = objectStore.get(id);
			
			request.onsuccess = function (e) {
				var result = request.result;
				
				deferred.resolve(result);
			};
			
			return deferred.promise;
			
		};
		
		this.create = function (obj) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName], 'readwrite');
				
			var request = objectStore.add(object);
			
			request.onsucces = function (e) {
				deferred.resolve();
			};
			
			request.onerror = function (e) {
				console.log(e.target.error.name);
			};
			
			return deferred.promise;
		};
		
		this.update = function (obj) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName], 'readwrite');
				
			var request = objectStore.put(object);
			
			request.onsucces = function (e) {
				deferred.resolve();
			};
			
			request.onerror = function (e) {
				console.log(e.target.error.name);
			};
			
			return deferred.promise;
		};
	}
	
    function DBFactory(resourceName) {
		return new DB(resourceName);
    }
    
    return DBFactory;
}]);


/*
 * Resource Service
 * 
 * The purpose of this service is too provide
 * a wrapper for the native $resource service
 * provided by AngularJS. This resource allows us 
 * to interface with the storage service and prepopulat
 * the response before updating with the response 
 * from the server.
 * 
 * The service must all be able to poll and used the 
 * 'last-modified' key to retrieve the most recent version
 * of data
 * 
 * Capabilities:
 * 
 * -Perform basic GET, PUT, POST and DELETE operations
 * -prepopulate the response with data from the storage
 *  service
 * 
 * Structure and Cycle:
 * 
 * The intended structure and cycle of the resource is
 * 1. A GET request is made to retrieve an item or an
 *    array of items
 *    -If there is already prexisting data then retrieve
 *     the data from the storage and respond
 *    -When the server responsds update the returned data
 *     by finding the id and then updating the item
 * 2. Save the last-checked time to be used later for polling
 * 3. Returns a new Resource that prototypically inherits from
 *    the parent. 
 * 4. Save the resource should call the underlying request from 
 *    the parent. 
 * 
 * Properties:
 * 
 * -$$poll: If true begin a timeout based
 *      repeated calling of the initial function
 * -$$last_checked: Date and Time of the last GET
 *      request made to the server that was successful
 * -$$timeout: Hold the reference to the current timeout
 * 
 * Public Methods:
 * 
 * Parent Methods:
 * -poll()
 * -get()
 * -query()
 * -save()
 * -delete()
 * 
 * Child Methods:
 * -$save()
 * -$delete()
 * -$get()
 * -$query()
 */
angular.module('employeeApp.services')

.factory('eaResource', ['eaStorage', '$rootScope', '$http', '$q', '$parse', '$resource', '$timeout', 'eaIndexedDB', 'Notification', 
function(eaStorage, $rootScope, $http, $q, $parse, $resource, $timeout, eaIndexedDB, Notification) {
	function ResourceFactory(url, paramDefaults, actions){
        //Default methods available to the public
        var DEFAULT_ACTIONS = {'get':    {method:'GET'},
                               'save':   {method:'POST'},
                               'update': {method:'PUT'},
                               'query':  {method:'GET', isArray:true},
                               'remove': {method:'DELETE'},
                               'delete': {method:'DELETE'}},
            oResource = new $resource(url, paramDefaults, actions), //jshint ignore:line
            storage = eaStorage(url.split(/\//g)[0]),
            db = eaIndexedDB(url),
            value,
            previousAction,
            previousParams,
            last_checked = true,
            poll = true,
            getter = function(obj, path) {
                return $parse(path)(obj);
            };
            
        /*Helper Functions*/
        function extractParams(data, actionParams){
            var ids = {};
            actionParams = angular.extend({}, paramDefaults, actionParams);
            angular.forEach(actionParams, function(value, key){
                if (angular.isFunction(value)) { value = value(); }
                ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
            });
            return ids;
        }
        
        /*
         * Locates the index of an object
         * which matches the supplied id
         */
        function indexOfId(array, id){
            for(var i=0; i<array.length; i++){
                if(array[i].hasOwnProperty('id')){
                    if(array[i].id == id){
                        return i;
                    }
                }
            }
            return -1;
        }
        
        //Extend all actions to include default and argument actions
        actions = angular.extend({}, DEFAULT_ACTIONS, actions);
        
        /*
         * Initialize the Resource the properties
         */
        function Resource(value){
            angular.extend(this, value || {});
            this.$$poll = false;
            this.$$last_checked = null;
            this.$$timeout = null;
            this.$$date = true;
        }
        
        /*
         * Set Date for when doing mock tests
         */
        Resource.disableLastChecked = function(){
            last_checked = false;
        };
        
        Resource.prototype.disableLastChecked = Resource.disableLastChecked;
        /*
         * Create a polling function. When the polling function 
         * is call the poll value will be set to true
         */
        Resource.poll = function(){ 
            this.$$poll = true;
            poll = true;
            return this;
        };
        
        Resource.prototype.poll = Resource.poll;
        
        Resource.stopPolling = function(){
            this.$$poll = false;
            poll = false;
            return this;
        };
        
        Resource.prototype.poll = Resource.poll;
        
        /*
         * Loop through all the actions and assign them 
         * as methods to the Resource and process the data
         * and the params for each method
         */
        angular.forEach(actions, function(action, name){
            var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
            //Default methods
            Resource[name] = function(a1, a2, a3, a4){
                var params = {};
                var data;
                var success = angular.noop;
                var error = null;
                var promise;

				/* jshint ignore: start */
                switch(arguments.length) {
                    case 4:
                        error = a4;
                        success = a3;
                    //fallthrough
                    case 3:
                    case 2:
                        if (angular.isFunction(a2)) {
                            if (angular.isFunction(a1)) {
                                success = a1;
                                error = a2;
                                break;
                            }
        
                            success = a2;
                            error = a3;
                      //fallthrough
                        } else {
                            params = a1;
                            data = a2;
                            success = a3;
                            break;
                        }
                    case 1:
                        if (angular.isFunction(a1)) success = a1;
                        else if (hasBody) data = a1;
                        else params = a1;
                        break;
                    case 0: break;
                    default:
                        throw "Expected between 0-4 arguments [params, data, success, error], got " +
                            arguments.length + " arguments.";
                }
                /* jshint ignore: end */
                /*
                 * RESETTING AREA:
                 * 
                 * This area will reset the settings of the call if the previous 
                 * action does not meet the current action. We do this in the case 
                 * of polling where the action is the same as before.
                 */
                if (previousAction != name || params != previousParams) {
                    this.$$last_checked = undefined;
                }
                /*
                 * CRTICIAL COMPONENT:
                 * 
                 * This part will determine whether to set the return referenced as an 
                 * array, object, or to keep it in its current state. This is crucial 
                 * for when polling is activated. 
                 */
                
                if(action.isArray){
                    value = angular.isArray(value) ? value || [] : [];
                }else{
                    value = angular.isObject(value) && !value.hasOwnProperty('length') ? value || {} : {};
                    value = this instanceof Resource ? this : new Resource(value);
                }
                
                /*
                 * Preloads Data from the indexedDB
                 * 
                 * We first must check if this is a request for data. 
                 * After we check if the db is ready. Depending on whether 
                 * it is ready or not we proceed in two different ways:
                 * 
                 * -db is ready:
                 *     -check if to make query or get call
                 * -db is not ready:
                 *     -attach an on ready call and make the 
                 *      appropriate get or query call
                 */
				if (action.method == "GET" && !this.$$last_checked) {
					if(db.ready){
						if (action.isArray) {
							db.query(function(data){
								var fn =  function(){
									for(var key in data){
										//Loop for existing item in value
										var index = indexOfId(value, data[key].id);
										if (index != -1) {
											angular.copy(data[key], value[index]);
										} else {
											try{
												value.push(new Resource(data[key]));
											}catch(e){
												console.warn(e.stack);
											}
										}
									}
									(success || angular.noop)(value);
								};
                                 
								if($rootScope.$$phase == "$apply" || $rootScope.$$phase == "$digest"){
									fn();
								}else{
									$rootScope.$apply(function(){
										fn();
									});
								}
							});
						} else {
							db.get(params.id, function(response){
								var fn = function(){
									angular.copy(new Resource(response), value);
									(success || angular.noop)(value);
								};
                                 
								if($rootScope.$$phase == "$digest" || $rootScope.$$phase == "$apply"){
									fn();
								}else{
									$rootScope.$apply(function(){
										fn(); 
									});
								}
							});
						}
					}else{
						if (action.isArray) {
							db.onready = function(){
								db.query(function(data){
									var fn = function(){
										for(var key in data){
											//Loop for existing item in value
											var index = indexOfId(value, data[key].id);
											if (index != -1) {
												angular.copy(data[key], value[index]);
											} else {
												try{
													value.push(new Resource(data[key]));
                                                }catch(e){
                                                    console.warn(e.stack);   
                                                }
											}
										}
										(success || angular.noop)(value);
									};
                                     
									if($rootScope.$$phase == "$digest" || $rootScope.$$phase == "$apply"){
										fn();
									}else{
										$rootScope.$apply(function(){
											fn(); 
										});
									}
								});
							};
						} else {
							db.onready = function(){
								db.get(params.id, function(response){
									var fn = function(){
										angular.copy(new Resource(response), value);
										(success || angular.noop)(value);
									};
                                     
									if($rootScope.$$phase == "$digest" || $rootScope.$$phase == "$apply"){
										fn();
									}else{
										$rootScope.$apply(function(){
											fn(); 
										});
									}
								});
							};
						}
					}
				}
                 
                /*
                 * Determines whether to include the last modified parameter depending
                 * on whether the 'last_checked' var has a value or not
                 */ 
                //dump((this.$$last_checked && typeof(this.$$last_checked) != "boolean") && action.method == "GET")
                if(this.$$last_checked !== undefined && action.method == "GET"){ 
                    angular.extend(params, {last_modified:this.$$last_checked.toISOString()});
                }
                /*
                if(storage.getLastModified() && action.method == "GET"){
                    angular.extend(params, {last_modified:storage.getLastModified().toISOString()});
                }
                */
                var oPromise = oResource[name](params, data, function(response){
                    /*
                     * If the hasBody is positive, it indicates this is a child
                     * resource and there for the resource it self should be update
                     * with the data because it is currently presented tot he user
                     */
                    if(action.method == "DELETE" || hasBody){angular.extend(this, response);}
                    /*
                     * If the method is GET it indicates that the user has requested 
                     * data and the resource is a gateway and it itself is no the the
                     * data holder. There for the reference that is returned to the user 
                     * should be update with either the array of items or the item data
                     * respecitvely.
                     */
                    if (action.method === "GET") {
                        if(action.isArray || angular.isArray(response)){
                            
                            var index; 
                            
                            /*
                             * We use vanilla javascript to iterate through 
                             * the array and apply changes to that the 
                             * digest is not trigger initially. We wait till
                             * the end to trigger the digest
                             */
                            for (var i in response) {
                                //Find the index of the matched item by id
                                index = indexOfId(value, response[i].id);
                                
                                if(index > -1){
                                    /*
                                    * In order not to waste resource we
                                    * first check if the two items are equal or not.
                                    * If they are not equal then we perform an extend
                                    */
                                    if (!angular.equals(value[index], response[i])) {
                                        angular.extend(value[index], new Resource(response[i]));
                                        if(value[index].deleted){
                                            value.splice(index, 1);
                                            var item = [];
                                            item.splice(index);
                                        }
                                    }
                                    
                                }else{
                                    //Add the new item
                                    if(!response[i].deleted){
                                        try{
                                            value.push(new Resource(response[i])); 
                                        }catch(e){
                                            console.warn(e.stack);
                                        }
                                    }
                                }
                                
                            }
                        }else{
                            //Upate the reference with the data
                            if(response.deleted){
                                angular.copy({}, value);
                                Notification.display("This resource no longer exists.");
                            }else{
                                angular.extend(value, new Resource(response));
                            }
                        }
                    }
                    
                    /*
                     * Determines whether the action is to delete from the server
                     * or to post and get data. Because post and get data would 
                     * both return responses we would save this to the storage. 
                     * For delete requests, we would have to delete the item
                     */
                    
                    if(db.ready){
                        action.method == "DELETE" ? db.remove(params) : hasBody ? db.save(this) : db.save(value);  // jshint ignore:line
                    }
                    
                    //action.method == "DELETE" ? storage.remove(params) : hasBody ? storage.save(this) : storage.save(value);  
                    /*
                     * Last checked
                     */
                    if(last_checked){
                        
                        this.$$last_checked = new Date();
                    }
                    
                    /*
                     * The Resource will check if to poll the server only if
                     * the action method is a GET and the $$poll swtich is turned
                     * on. 
                     * 
                     * The request itself is incapsulated in an anonymous function
                     * so that we can pass arguments and bind 'this'
                     */
                    if(this.$$poll && action.method == "GET"){
                        //Call timeout
                        this.$$timeout = $timeout(function(){
                            //Create binded fn
                            var request = Resource[name].bind(this);
                            //call binded fn
                            request(params, data, success, error);
                        }.bind(this), 30000);
                    }   
                    //Run success call back
                    success(response);
                }.bind(this), function(e){
					
                });
                //return placeholder
                
                /*
                 * We set what action just took place
                 * so that we may know if to change
                 * the settings of the current action
                 */
                previousAction = name;
                previousParams = params;
                //Return the reference
                return value;
                
                
            };
            
            //Prototypical methods
            Resource.prototype['$'+name] = function(a1, a2, a3){
                var params = extractParams(this),
                    success = angular.noop,
                    error;
    
                switch(arguments.length) {
                    case 3: 
						params = a1;
						success = a2; 
						error = a3; 
						break;
                    case 2:
                    case 1:
                        if (angular.isFunction(a1)) {
                            success = a1;
                            error = a2;
                        } else {
                            params = a1;
                            success = a2 || angular.noop;
                        }
                        break;
                    case 0:
						break;
                    default:
                        throw "Expected between 1-3 arguments [params, success, error], got " +
                          arguments.length + " arguments.";
                }
                var data = hasBody ? this : undefined;
                Resource[name].call(this, params, data, success, error);
            };
        });
        
        return Resource;
    }
    return ResourceFactory;

}]);


/*
 * Local Storage Service
 * 
 * This Service will keep an active collection that can be 
 * queried via id. The collection will also act as an interface 
 * with the localStorage of the browser. The storage of items
 * in the collection will be entirely based on the id of the.
 * The main function will be a factory that returns a collection
 * for a specified namespace. 
 * 
 * Capabilities:
 * 
 * -main collection for a namespace
 * -Maintain active collection
 * -Get an object from the collection
 * -Save an object to the collection
 *   -check for duplicate id. If found
 *    then updates instead of create a new one
 * -get all objects from the collection
 * -delete an object from the collection
 * -keep collection in sync with localStorage
 * 
 * Public Methods
 * 
 * -query(arg)
 * -save()
 * -get(arg)
 * -remove(arg)
 * 
 * Private Methods
 * 
 * -saveToStorage()
 * -loadFromStorage()
 * 
 */
angular.module('employeeApp.services')
.factory('eaStorage', [function() {
      
	//Factory Function 
	function factory(namespace){
          
		//compare 2 items and see if the first items
		//has the same keys and values of second item
		function compare(item, arg) {
			var aKey;
			for (aKey in arg) {
				if (item.hasOwnProperty(aKey)){
					if (item[aKey] !== arg[aKey]){
						return false;
					}
				} else {
					return false;
				}
			}
              
			return true;
		}
          
		function parseDate(obj){
			if(obj.hasOwnProperty('delivery_date')){
				obj.delivery_date = new Date(obj.delivery_date);
			}
			if(obj.hasOwnProperty('time_created')){
				obj.time_created = new Date(obj.time_created);
			}
			if(obj.hasOwnProperty('last_login')){
				obj.last_login = new Date(obj.last_login);
			}
			return obj;
		}
          
		//Storage initialization
		function storage(namespace) {
			this.namespace = namespace;
			this.collection = this.__loadFromStorage__(this.namespace) || {};
		}
          
		/*
		 * Properties
		*/
          
		/*Disabled*/
		//Get Length of collection
		storage.__defineGetter__("length", function(){
			return 'ok';//Object.keys(this.collection).length; 
		});
		/*
		* Private functions
		*/

		/*
		* Save function
		* 
		* Saves an object with an id property
		* to the collection
		*/
		storage.prototype.__save__ = function(obj){
			//Checks if the obj has an id
			if (obj.hasOwnProperty('id')) {
				this.collection[obj.id] = obj;
			} else {
				//dump(obj);
				//throw new TypeError("Object has no 'id' property");
			}
		};
          
          
		/*
		* Save to Local Storage
		* 
		* Stringifies the item and then saves it to 
		* the local storage as a string. The key is the first
		* variable while the data is the second variable
		*/
		storage.prototype.__saveToStorage__ = function(key, data){
			window.localStorage.setItem(key, JSON.stringify(data));   
		};
          
		/*
		* Load from Local Storage
		* 
		* The function will retrieve an item from the local storage. 
		* The data is then parsed by the JSON module before being
		* returned.
		*/
		storage.prototype.__loadFromStorage__ = function(key){
			return JSON.parse(window.localStorage.getItem(key));
		};
          
		/*
		* Public Methods
		*/
          
		/*
		* Query items form the collection
		* 
		* The argument must be in the form of an
		* object where the keys will be used to compare
		* with keys of objects in the collection
		* and the value compared with the objects' values
		*/
		storage.prototype.query = function(arg){
              
			if(typeof(arg) === 'object') {
				var data = [],
					key;
				for(key in this.collection) {
					if (compare(this.collection[key], arg)) {
						this.collection[key] = parseDate(this.collection[key]);
						data.push(this.collection[key]);
					}
				}
                  
				//Return the data set
				return data;
                  
			} else {
				throw new TypeError('Arguments must be in the form of a key:value object');
			}
              
		};
          
		/*
		* Save Function 
		* 
		* This function will save either and object
		* or an array of objects. Both are saved via
		* a save function
		* 
		* The save inner function checks if the object 
		* or the object in the array has an id property
		* and throws an error if it does not.
		* 
		* After all saves, the entire collection is saved
		* to the local storage
		*/
		storage.prototype.save = function(obj){
			var i;
			if (Object.prototype.toString.call( obj ) === '[object Array]') {
				for (i in obj) {
					this.__save__(obj[i]);
				}
			} else {
				this.__save__(obj);
			}
              
			this.__saveToStorage__(this.namespace, this.collection);
              
		};
          
		//Get an obj by id
		storage.prototype.get = function(id){
			return this.collection[id] ? parseDate(this.collection[id]) : null;
		};
          
		//Iterate through all the items in the collecion
		storage.prototype.iterate = function(callback){
			var key;
			//Loop through all keys
			for (key in this.collection) {
				//check the it is a direct property
				if (this.collection.hasOwnProperty(key)) {
					//call back fn with item as argument
					callback(parseDate(this.collection[key]));
				}
			}
		};
          
		//Delete an object by id
		storage.prototype.remove = function(arg){
			//Establish id or extract it
			var id = typeof(arg) === "object" ? arg.hasOwnProperty('id') ? arg.id : null : arg;
			if (this.collection.hasOwnProperty(id)) {
				delete this.collection[id];
				this.__saveToStorage__(this.namespace, this.collection);
			}
		};
          
		//Returns the namespace based storage
		return new storage(namespace);
	}
      
	//Return Factory Function 
	return factory;
    
}]);


angular.module('employeeApp')
.factory('FileUploader', ['$q', '$http', 'Notification', function($q, $http, Notification) {
	var uploader = {},
		type,
		fd;

	uploader.upload = function (file, url, data) {
        
        //if(!file.isPrototypeOf){
            //throw new TypeError("Expectina a file");
        //}
        //Determine file type and data
		try {
			type = file.type.split('/')[0];
		} catch (e) {

		}
        
		type = file.isPrototypeOf(Image) || type === 'image' ? 'Image' : 'File';
				
		var fd = new FormData();
		//fd = data.isPrototypeOf(FormData) ? data : new FormData();
	
		//Notification.display('Uploading '+type+'...', false);
        
        //Attch the file to be sent
		fd.append(type.toLowerCase(), file);
        
        //Add additional data to the form data
		try {
			for(var i in data){
				fd.append(i, data[i]);
			}
		} catch (e) {

		}
        
        /*
         * We use the angular $http module to send the image
         * 
         * We have to set the content type to undefined so that 
         * it is not automatically 'application/json'
         * 
         * We set the transformRequest to angular.identity so that
         * the data is not serialized
         */
        var promise = $http({
			method: 'POST', 
			url: url || "upload/images", 
			data: fd, 
			headers: {'Content-Type': undefined}, 
			transformRequest: angular.identity
		});
        
        /*
		promise.success(function(data, status, headers, config) {

		}).error(function (response) {
			Notification.display("There was an error in uploading the "+type.toLowerCase(), false);
		});
		*/
		return promise;
    };
    
    return uploader;
}]);



angular.module('employeeApp.services')
.factory('Geocoder', ['$q', '$rootScope', '$log', function($q, $rootScope, $log) {
        
    /*Helper functions*/
    function prepareAddress(obj){
        var addrStr = '';
        
        if(obj.hasOwnProperty('address') || obj.hasOwnProperty('address1')){
            addrStr += obj.address || obj.address1;
        }else{
            throw new TypeError("Missing 'address' or 'address1' argument");
        }
        
        if(obj.hasOwnProperty('city')){
            addrStr += ', '+obj.city;
        }else{
            throw new TypeError("Missing 'city' argument");
        }
        
        if(obj.hasOwnProperty('territory')){
            addrStr += ', '+obj.territory;
        }else{
            throw new TypeError("Missing 'territory' argument");
        }
        
        if(obj.hasOwnProperty('country')){
            addrStr += ', '+obj.country;
        }else{
            throw new TypeError("Missing 'country' argument");
        }
        
        if(obj.hasOwnProperty('zipcode')){
            addrStr += ', '+obj.zipcode;
        }else{
            throw new TypeError("Missing 'zipcode' argument");
        }
        
        return addrStr;
    }
    
    
	function Geocoder() {
		this.google = "google" in window ? window.google : {maps:{
				Geocoder:angular.noop,
				LatLng:angular.noop
			}};
		this.geocoder = new this.google.maps.Geocoder();
		
		this.initialized = "google" in window ? true : false;
    }
    
    /*
    Object.defineProperties(Geocoder.prototype, {
        address:{
            get:function(){return this._address;},
            set:function(addr){this._address = addr;}
        },
        city:{
            get:function(){return this._city;},
            set:function(city){this._city = city;},
        },
        territory:{
            get:function(){return this._territory;},
            set:function(territory){this._territory = territory;}
        },
        country:{
            get:function(){return this._country;},
            set:function(country){
                this._country = country;
                this._region = this._getRegion(this._country);
            }
        }
    });*/
     
    Geocoder.prototype._getRegion = function(country){
        switch(country.toLocaleLowerCase()){
            case "thailand":
                return 'TH';
            case "usa":
                return "US";
            case "us":
                return 'US';
            case "italy":
                return 'IT';
            case 'spain':
                return 'ES';
            case 'germany':
                return 'DE';
            case 'china':
                return 'CN';
            case 'india':
                return 'IN';
            case 'new zealand':
                return 'NZ';
            case 'australia':
                return 'AU';
            default:
                return false;
		}
	};
        
  
	Geocoder.prototype._lookup = function(addr, callback, errback){
		var addrStr = prepareAddress(addr);
		this.geocoder.geocode( { 'address': addrStr, 'region': this._getRegion(addr.country)}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				(callback || angular.noop)(results);
			} else {
				$log.error(status);
				(errback || angular.noop)(status);
			}
		});
    };
    
    Geocoder.prototype.geocode = function(arg){
        if(angular.isObject(arg)) {
            var deferred = $q.defer();
            
            this._lookup(arg, function(results){
                $rootScope.safeApply(function(){
                    deferred.resolve(results);
                });
            }, function(status){
                $rootScope.safeApply(function(){
                    deferred.reject(status);
                });
            });
            return deferred.promise;
        }else{
            throw new TypeError("Arguments must be in the form of an object.");
        }
    };
    
	Geocoder.prototype.reverseGeocode = function (lat, lng) {
 
		var deferred = $q.defer();
		var latLng = new this.google.maps.LatLng(lat, lng);
		try {
			this.geocoder.geocode({'latLng': latLng}, function (results, status) {
				deferred.resolve(results);
			});
		} catch (e) {
			deferred.reject('ok');
		}

		return deferred.promise;
	};
    
    return new Geocoder();
    
}]);


angular.module('employeeApp')
.factory('ImageCropper', [function Imagecropper() {
    function Scene(canvas, ctx, image) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.img = image;
        this._scale = 1;
        this.bX = 0;
        this.bY = 0;
        this.bH = this.img.height;
        this.bW = this.img.width;
        this.cropX = null;
        this.cropY = null;
        this.cropW = null;
        this.cropH = null;
        this.mouseX = null;
        this.mouseY = null;
        this.corners = [];
        this.xProportion = this.canvas.width / this.img.width;
        this.yProportion = this.canvas.height / this.img.height; 
    }
    
	Object.defineProperties(Scene.prototype, {
		scale: {
            get: function () {
                return this._scale;
            },
            set: function (scale) {
                this._scale = scale <= 1 ? scale : scale / 100;
            }
        },
		x: {
			get: function () {
				return this.bX;
			},
			set: function (x) {
				this.bX = x;
			}
		},
		y: {
			get: function () {
				return this.bY;
			},
			set: function (y) {
				this.bY = y;
			}
		}, 
		w: {
			get: function () {
				return this.bW;
			},
			set: function (w) {
				this.bW = w;
			}
		}, 
		h: {
			get: function () {
				return this.bH;
			},
			set: function (h) {
				this.bH = h;
			}
		} 
	});

    Scene.prototype.repositionCorners = function () {
        this.corners.topLeft = {x: this.bX * this.xProportion, y: this.bY * this.yProportion};
        this.corners.topRight = {x: (this.bX + this.bW) * this.xProportion, y: this.bY * this.yProportion};
        this.corners.bottomRight = {x: (this.bX + this.bW) * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
        this.corners.bottomLeft = {x: this.bX * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
    };
    
    Scene.prototype.inCorner = function (x, y) {
        for (var key in this.corners) {
            if (Math.sqrt(Math.pow(x - this.corners[key].x, 2) + Math.pow(y - this.corners[key].y, 2)) <= 10) {
                return key;
            }
        }
    };
    
    Scene.prototype.drawCube = function (x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        this.ctx.fill();
    };
    
    Scene.prototype.drawCubes = function () {
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.drawCube(this.bX * this.xProportion, this.bY * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, (this.bY + this.bH) * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, this.bY * this.yProportion);
        this.drawCube(this.bX * this.xProportion, (this.bY + this.bH) * this.yProportion);
    };
    
    Scene.prototype.drawBackground = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.draw = function () {
        //Calculations
        this.repositionCorners();
        
        //Rendering
        this.drawBackground();
        this.ctx.drawImage(this.img, this.bX, this.bY, this.bW, this.bH, this.bX * this.xProportion, this.bY * this.yProportion, this.bW * this.xProportion, this.bH * this.yProportion);
        this.drawCubes();
    };
    
    Scene.prototype.drawImage = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.crop = function (boundingWidth, boundingHeight) {
        if (boundingHeight && boundingWidth) {
            var ratio1 = boundingHeight / boundingWidth;
            var ratio2 = this.bH / this.bW;
            if (ratio1 > ratio2) {
                this.canvas.width = boundingWidth;
                this.canvas.height = (this.bH * boundingWidth) / this.bW;
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
            } else { 
                this.canvas.height = boundingHeight;
                this.canvas.width = (this.bW * boundingHeight) / this.bH;
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
            }
        } else {
            this.canvas.width = this.bW;
            this.canvas.height = this.bH;
        }
        
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.canvas.width, this.canvas.height);
       // this.canvas.width = this.bW/this.xProportion
       // this.canvas.height = this.bH/this.xProportion
        //this.ctx.putImageData(imageData, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.getImageAsURL = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');
        canvas.width = this.w * this._scale;
        canvas.height = this.h * this._scale;
        context.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.w * this._scale, this.h * this._scale);
        return canvas.toDataURL("image/jpeg");
        
    };
    
    Scene.prototype.getImageAsBlob = function () {
        var url = this.getImageAsURL();
        var bytes = atob(url.split(',')[1]);
        var stream = new Uint8Array(bytes.length);
        for (var key in bytes) {
            stream[key] = bytes.charCodeAt(key);
        }
        return new Blob([stream], {type: 'image/jpeg'});
    };
	
	return Scene;
	
}]);


angular.module('employeeApp.services')
.factory('indexOfId', ['$q', function($q) {
	function filter(){
		this.worker = new Worker('scripts/workers/index-of-id.js');
	}
   
	filter.prototype._prepare_id = function(arg1){
		if(typeof(arg1) == "object"){
           
		}else if(typeof(arg1) == 'number'){
           
		}
	};
   
	filter.prototype.filter = function(arg1, haystack, callback){
		var needle = this._prepare_id(arg1);
		this.worker.onmessage = function(e){
			(callback || angular.noop)(e.data);
		};
	};
   
   //return new filter();
}]);


angular.module('employeeApp')
.factory('inventory', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
		someMethod: function() {
			return meaningOfLife;
		}
    };
}]);


angular.module('employeeApp.services')
.factory('KeyboardNavigation', ['$rootScope', '$log', function KeyboardNavigation($rootScope, $log) {
	function KeyboardNavigationFactory(configs) {
		
		var currentIndex = 0,
			enabled = false,
			scope = configs ? configs.scope ? configs.scope  : $rootScope.$new() : $rootScope.$new(),
			onleft,
			onright, 
			onup,
			ondown,
			onenter;
			
		configs = configs || {};
			
		function changeIndex(valInc){
			if (configs.array) {
				scope.$apply(function() {
					currentIndex += valInc;
				});
			}
		}
		
		function directionHandler(evt, fn) {
			evt.preventDefault();
			evt.stopPropagation();
			fn();
		}
		
		function parseKeydown(evt) {
			
			
			switch(evt.which) {
				case 37:
					if (onleft) {directionHandler(evt, onleft);}
					break;
				case 38:
					changeIndex(-1);
					if (onup) {directionHandler(evt, onup);}
					break;
				case 39:
					if (onright) {directionHandler(evt, onright);}
					break;
				case 40:
					changeIndex(1);
					if (ondown) {directionHandler(evt, ondown);}
					break;
				case 13:
					if (onenter) {directionHandler(evt, onenter);}
					break;
			
			}
		}
		
		function disable() {
			if (enabled) {
				$(window).off('keydown', parseKeydown);
				enabled = false;
			}
		}
		
		function enable() {
			if (!enabled) {
				$(window).on('keydown', parseKeydown);
				enabled = true;
			}
		}
		
		function KeyboardNav() {
			
			enable();
			
			if (configs.scope) {
				configs.scope.$on('$destroy', function () {
					disable();
				});
			}
		}
		
		KeyboardNav.prototype.disable = function () {
			disable();
		};
		
		KeyboardNav.prototype.enable = function () {
			enable();
		};
		
		Object.defineProperties(KeyboardNav.prototype, {
			onup: {
				set: function (fn) {
					onup = fn;
				}
			},
			ondown: {
				set: function (fn) {
					ondown = fn;
				}
			},
			onleft: {
				set: function (fn) {
					onleft = fn;
				}
			},
			onright: {
				set: function (fn) {
					onright = fn;
				}
			},
			onenter: {
				set: function (fn) {
					onenter = fn;
				}
			}
		});
		
		return new KeyboardNav();
	}
	
	return KeyboardNavigationFactory;
}]);


angular.module('employeeApp.services')
.factory('Notification', ['$timeout', '$rootScope', '$mdToast', function($timeout, $rootScope, $mdToast) {
    function center(target){
        var width = angular.element(window).width();
        var tWidth = angular.element(target).width();
        if (angular.element(target).css('left') === 0) {
            angular.element(target).css('left', width-tWidth);
        } else {
            angular.element(target).css('margin-left', -(tWidth/2));
        }
    }
    
	function spawnNotification(message, autoHide) {
		
		var notification = new Notification(message);
		
		if (autoHide) {
			setTimeout(function () {
				this.close();
			}.bind(notification), autoHide);
		}
		
		function close() {
			notification.close();
		}
		
		return {
			hide: close,
			close: close
		};
	}
	
	function spawnToast(message, autoHide) {
		
		var promise = $mdToast.show($mdToast
							.simple()
							.action('CLOSE')
							.position('top right')
							.content(message)
							.hideDelay(autoHide));
		
		

		return {
			hide: $mdToast.hide,
			close: $mdToast.hide
		};
							
	}
	
	function spawnSimpleNotification(message, autoHide) {
        //Change message and 
		
        $rootScope.safeApply(function () {
            this.notification.html(message);
            center(this.notification);
            this.notification.addClass('active');
        }.bind(this));
        
        
        //Cancels the fadingout and 
        //removal of message
        if(this.promise){
            $timeout.cancel(this.promise);
        }
        
        if(autoHide !== false){
           
            this.promise = $timeout(function () {
                this.hide();
                
            }.bind(this), 1000);
        }
		
		
		var close = function () {
			this.notification.removeClass('active');
		}.bind(this);
		
		return {
			hide: close,
			close: close
		};
	}
	
    function Notifier() {
		
        this.notification = angular.element(document.getElementById('notification'));
        this.promise = null;
		this._display = spawnSimpleNotification;
		
		//Determine which notification system to use
		if (!("Notification" in window)) {
			this._display = spawnSimpleNotification;
		} else if (Notification.permission === 'granted') {
				this._display = spawnToast;
		} else {
			Notification.requestPermission(function (permission) {
			
				if (permission === 'granted') {
					this._display = spawnNotification;
				} else {
					this._display = spawnSimpleNotification;
				}
			});
		}
    }
    
    
    /*
     * The display function will display a new messge
     * And call a timeout after a certain amount of time
     * to fade out the message. If the message is already displayed,
     * it will just change the message and cancel the old timeout.
     */
    Notifier.prototype.display = function (message, autoHide) {
        
		var notification = this._display(message, autoHide);
		
		return notification;
		
    };
    
    Notifier.prototype.hide = function () {
        //Remove Message and 
        this.notification.removeClass('active');
		
		$mdToast.hide();
    };
    
    return new Notifier();
}]);


angular.module('employeeApp')
  .service('Resizer', function Resizer() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });


/*
 * Resource Service
 * 
 * The purpose of this service is too provide
 * a wrapper for the native $resource service
 * provided by AngularJS. This resource allows us 
 * to interface with the storage service and prepopulat
 * the response before updating with the response 
 * from the server.
 * 
 * The service must all be able to poll and used the 
 * 'last-modified' key to retrieve the most recent version
 * of data
 * 
 * Capabilities:
 * 
 * -Perform basic GET, PUT, POST and DELETE operations
 * -prepopulate the response with data from the storage
 *  service
 * 
 * Structure and Cycle:
 * 
 * The intended structure and cycle of the resource is
 * 1. A GET request is made to retrieve an item or an
 *    array of items
 *    -If there is already prexisting data then retrieve
 *     the data from the storage and respond
 *    -When the server responsds update the returned data
 *     by finding the id and then updating the item
 * 2. Save the last-checked time to be used later for polling
 * 3. Returns a new Resource that prototypically inherits from
 *    the parent. 
 * 4. Save the resource should call the underlying request from 
 *    the parent. 
 * 
 * Properties:
 * 
 * -$$poll: If true begin a timeout based
 *      repeated calling of the initial function
 * -$$last_checked: Date and Time of the last GET
 *      request made to the server that was successful
 * -$$timeout: Hold the reference to the current timeout
 * 
 * Public Methods:
 * 
 * Parent Methods:
 * -poll()
 * -get()
 * -query()
 * -save()
 * -delete()
 * 
 * Child Methods:
 * -$save()
 * -$delete()
 * -$get()
 * -$query()
 */
angular.module('employeeApp.services')

.factory('Resource', ['eaStorage', '$rootScope', '$http', '$q', '$parse', '$resource', 'Notification', 
function(eaStorage, $rootScope, $http, $q, $parse, $resource, Notification) {
	function ResourceFactory(url, paramDefaults, actions){
        //Default methods available to the public
        var DEFAULT_ACTIONS = {'get':    {method:'GET'},
                               'save':   {method:'POST'},
                               'update': {method:'PUT'},
                               'query':  {method:'GET', isArray:true},
                               'remove': {method:'DELETE'},
                               'delete': {method:'DELETE'}},
            oResource = new $resource(url, paramDefaults, actions), //jshint ignore:line
            storage = eaStorage(url.split(/\//g)[0]),
            db,// = eaIndexedDB(url),
            value,
            previousAction,
            previousParams,
            last_checked = true,
            poll = true,
            getter = function(obj, path) {
                return $parse(path)(obj);
            };
            
        /*Helper Functions*/
        function extractParams(data, actionParams){
            var ids = {};
            actionParams = angular.extend({}, paramDefaults, actionParams);
            angular.forEach(actionParams, function(value, key){
                if (angular.isFunction(value)) { value = value(); }
                ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
            });
            return ids;
        }
        
        /*
         * Locates the index of an object
         * which matches the supplied id
         */
        function indexOfId(array, id){
            for(var i=0; i<array.length; i++){
                if(array[i].hasOwnProperty('id')){
                    if(array[i].id == id){
                        return i;
                    }
                }
            }
            return -1;
        }
        
        //Extend all actions to include default and argument actions
        actions = angular.extend({}, DEFAULT_ACTIONS, actions);
        
        /*
         * Initialize the Resource the properties
         */
        function Resource(value){
            angular.extend(this, value || {});
            this.$$poll = false;
            this.$$last_checked = null;
            this.$$timeout = null;
            this.$$date = true;
        }
        
        
        
        /*
         * Loop through all the actions and assign them 
         * as methods to the Resource and process the data
         * and the params for each method
         */
        angular.forEach(actions, function(action, name){
            var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
            //Default methods
            Resource[name] = function(a1, a2, a3, a4){
                var params = {};
                var data;
                var success = angular.noop;
                var error = null;
                var promise;

				/* jshint ignore: start */
                switch(arguments.length) {
                    case 4:
                        error = a4;
                        success = a3;
                    //fallthrough
                    case 3:
                    case 2:
                        if (angular.isFunction(a2)) {
                            if (angular.isFunction(a1)) {
                                success = a1;
                                error = a2;
                                break;
                            }
        
                            success = a2;
                            error = a3;
                      //fallthrough
                        } else {
                            params = a1;
                            data = a2;
                            success = a3;
                            break;
                        }
                    case 1:
                        if (angular.isFunction(a1)) success = a1;
                        else if (hasBody) data = a1;
                        else params = a1;
                        break;
                    case 0: break;
                    default:
                        throw "Expected between 0-4 arguments [params, data, success, error], got " +
                            arguments.length + " arguments.";
                }
                /* jshint ignore: end */
                /*
                 * RESETTING AREA:
                 * 
                 * This area will reset the settings of the call if the previous 
                 * action does not meet the current action. We do this in the case 
                 * of polling where the action is the same as before.
                 */
                if (previousAction != name || params != previousParams) {
                    this.$$last_checked = undefined;
                }
                /*
                 * CRTICIAL COMPONENT:
                 * 
                 * This part will determine whether to set the return referenced as an 
                 * array, object, or to keep it in its current state. This is crucial 
                 * for when polling is activated. 
                 */
                
                if(action.isArray){
                    value = angular.isArray(value) ? value || [] : [];
                }else{
                    value = angular.isObject(value) && !value.hasOwnProperty('length') ? value || {} : {};
                    value = this instanceof Resource ? this : new Resource(value);
                }
                
                
                 
                /*
                 * Determines whether to include the last modified parameter depending
                 * on whether the 'last_checked' var has a value or not
                 */ 
                //dump((this.$$last_checked && typeof(this.$$last_checked) != "boolean") && action.method == "GET")
                if(this.$$last_checked !== undefined && action.method == "GET"){ 
                    angular.extend(params, {last_modified:this.$$last_checked.toISOString()});
                }
                /*
                if(storage.getLastModified() && action.method == "GET"){
                    angular.extend(params, {last_modified:storage.getLastModified().toISOString()});
                }
                */
                var oPromise = oResource[name](params, data, function(response){
                    /*
                     * If the hasBody is positive, it indicates this is a child
                     * resource and there for the resource it self should be update
                     * with the data because it is currently presented tot he user
                     */
                    if(action.method == "DELETE" || hasBody){angular.extend(this, response);}
                    /*
                     * If the method is GET it indicates that the user has requested 
                     * data and the resource is a gateway and it itself is no the the
                     * data holder. There for the reference that is returned to the user 
                     * should be update with either the array of items or the item data
                     * respecitvely.
                     */
                    if (action.method === "GET") {
                        if(action.isArray || angular.isArray(response)){
                            
                            var index; 
                            
                            /*
                             * We use vanilla javascript to iterate through 
                             * the array and apply changes to that the 
                             * digest is not trigger initially. We wait till
                             * the end to trigger the digest
                             */
                            for (var i in response) {
                                //Find the index of the matched item by id
                                index = indexOfId(value, response[i].id);
                                
                                if(index > -1){
                                    /*
                                    * In order not to waste resource we
                                    * first check if the two items are equal or not.
                                    * If they are not equal then we perform an extend
                                    */
                                    if (!angular.equals(value[index], response[i])) {
                                        angular.extend(value[index], new Resource(response[i]));
                                        if(value[index].deleted){
                                            value.splice(index, 1);
                                            var item = [];
                                            item.splice(index);
                                        }
                                    }
                                    
                                }else{
                                    //Add the new item
                                    if(!response[i].deleted){
                                        try{
                                            value.push(new Resource(response[i])); 
                                        }catch(e){
                                            //console.warn(e.stack);
                                        }
                                    }
                                }
                                
                            }
                        }else{
                            //Upate the reference with the data
                            if(response.deleted){
                                angular.copy({}, value);
                                Notification.display("This resource no longer exists.");
                            }else{
                                angular.extend(value, new Resource(response));
                            }
                        }
                    }
                    
                    /*
                     * Determines whether the action is to delete from the server
                     * or to post and get data. Because post and get data would 
                     * both return responses we would save this to the storage. 
                     * For delete requests, we would have to delete the item
                     */
                    /*
                    if(db.ready){
                        action.method == "DELETE" ? db.remove(params) : hasBody ? db.save(this) : db.save(value);  // jshint ignore:line
                    }*/	
                    
                    //action.method == "DELETE" ? storage.remove(params) : hasBody ? storage.save(this) : storage.save(value);  
                    /*
                     * Last checked
                     */
                    
                    //Run success call back
                    success(response);
                }.bind(this), function(e){
					
                });
                //return placeholder
                
                /*
                 * We set what action just took place
                 * so that we may know if to change
                 * the settings of the current action
                 */
                previousAction = name;
                previousParams = params;
                //Return the reference
                return value;
                
                
            };
            
            //Prototypical methods
            Resource.prototype['$'+name] = function(a1, a2, a3){
                var params = extractParams(this),
                    success = angular.noop,
                    error;
    
                switch(arguments.length) {
                    case 3: 
						params = a1;
						success = a2; 
						error = a3; 
						break;
                    case 2:
                    case 1:
                        if (angular.isFunction(a1)) {
                            success = a1;
                            error = a2;
                        } else {
                            params = a1;
                            success = a2 || angular.noop;
                        }
                        break;
                    case 0:
						break;
                    default:
                        throw "Expected between 1-3 arguments [params, success, error], got " +
                          arguments.length + " arguments.";
                }
                var data = hasBody ? this : undefined;
                Resource[name].call(this, params, data, success, error);
            };
        });
        
        return Resource;
    }
    return ResourceFactory;

}]);


angular.module('employeeApp')
.factory('s3', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
		someMethod: function() {
			return meaningOfLife;
		}
    };
}]);


angular.module('employeeApp.services')
.factory('scanner', ['$location', '$rootScope', '$timeout', function ($location, $rootScope, $timeout) {
		
	var code = '',
		codes = '',
		unparsedStr = '',
		standardCodes = [ 
			[/^PO-\d+$/, '/order/purchase_order/'],
			[/^A-\d+$/, '/order/acknowledgement/'],
			[/^AI-\d+$/, '/order/acknowledgement/item/'],
			[/^S-\d+$/, '/order/shipping/']
		],
		customCodes = [],
		parseStandardCodes = true,
		timeoutVar = 0,
		re = /^METROLOGICK07[A-Z]\-\d+$/,
		codeRe = /[A-Z]\-\d+$/;
		
		
	var check = function (evt) {
		this._check(evt);
	};
    
    function Scanner(identity) {
		this._identity = identity;
		this._activeParse = false;
		this.enabled = false;
		this._onscan = null;
		this.f = check.bind(this);
		Object.defineProperties(this, {
			_code: {
				get: function () {
					return code;
				}
			}
		});
    }
    
	Scanner.prototype.stringCheck = function (evt) {
		
		//Cancel previously set timeout
		$timeout.cancel(timeoutVar);
		
		//Get the letter
		var key = evt.keyCode;
		var letter;
		
		if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
			letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
			//Add to unparsed string
			unparsedStr += letter;
		} else if (key === 189) {
			letter = '-';
			//Add to unparsed string
			unparsedStr += letter;
		}
		
		
		
		//Restart the time to check the string
		timeoutVar = $timeout(function () {
			if (re.test(unparsedStr)) {
				codes = codeRe.exec(unparsedStr);
				if (codes) {
					code = codes[0];
					this._dispatch(code);
				}
				unparsedStr = '';
				
				
			}
		}.bind(this), 500, false);
	};
	
	
	Scanner.prototype._check = function (evt, customFn) {
		
		/*
		 * Checks if the string matches the preset prefix and suffix 
		 * of the scanner
		 */
		this.stringCheck(evt);
		
		/*
		 * Checks if the character is the start code for the 
		 * scanner. If it is the start code, then turn on the parse
		 * switch to get the successive characters
		 */
		if (evt.keyCode === 76 && evt.altKey) {
			evt.preventDefault();
			this._activeParse = true;
		
		/*
		 * Checks if the character is the end code for the scanner.
		 * If it is, then turn off the parse switch, send the code to dispatch,
		 * and reset the code variable
		 */
		} else if (evt.altKey && evt.keyCode == 71) {
			evt.preventDefault();
			this._activeParse = false;
			this._dispatch(code);
			code = '';
		/*
		 * If the parse switch is on, add the keypressed character to the code string
		 */
		} else {
			if (this._activeParse) {
				evt.preventDefault();
				this._parse(evt);
			}
		}
	};
    
	Scanner.prototype._parse = function (evt) {
		var key = evt.keyCode;
		if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
			var letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
			code += letter;
		} else if (key === 189) {
			code += '-';
		}
	};

	Scanner.prototype._dispatch = function (code) {
		codes = code.split('-');
		if (parseStandardCodes) {
			for (var i=0; i<standardCodes.length; i++) {
				if (standardCodes[i][0].test(code)) {
					codes = code.split('-');
					/* jshint ignore:start */
					$rootScope.safeApply(function () {
						$location.path(standardCodes[i][1]+codes[1]);
					});
					/* jshint ignore:end */
				}
			}
		}

		for (var h=0; h<customCodes.length; h++) {
			if (customCodes[h][0].test(code)) {
				customCodes[h][1](code);
			}
		}
	};
    
    /*
     * Public API
     * 
     * -enable
     * -disable
     * -onscan
     */
    
    Object.defineProperties(Scanner.prototype, {
		standardEnabled: {
			get: function () {
				return parseStandardCodes;
			}
		}
	});
    
    
    
	Scanner.prototype.enable = function () {
		angular.element(document.body).on('keydown', this.f);
		this.enabled = true;
	};
    
	Scanner.prototype.disable = function () {
		angular.element(document.body).off('keydown',this.f);
		this.enabled = false;
	};
    
	Scanner.prototype.disableStandard = function () {
		parseStandardCodes = false;
	};
    
	Scanner.prototype.enableStandard = function () {
		parseStandardCodes = true;
	};
    
	Scanner.prototype.register = function (re, fn) {
		customCodes.push([re, fn]);
	};
    
	Scanner.deregister = function (re) {
		for (var i=0; i<customCodes.length; i++) {
			if (customCodes[i][0] == re) {
				customCodes.splice(i);
			}
		}
	};
	
	Scanner.prototype.destroy = function () {
		this.disable();
	};
    
	Object.defineProperty(Scanner.prototype, 'onscan', {
		set: function (fn) {
			this._onscan = fn;
		}
	});
	
	function ScannerFactory(identity) {
		return new Scanner(identity);
	}
	
	return ScannerFactory;
	
}]);


angular.module('employeeApp.services')
.factory('$storage', [function() {
    function storageFactory(key){
        //Create the main factory
        function StorageEngine(key){
            //ASSIGNS KEY TO OBJECT
            this.key = key;
            //CHECKS IF SUPPORTS LOCALSTORAGE
            if('localStorage' in window && window.localStorage !== null){
				this.storage = window.localStorage;
				this.getKeys();
            }    
             
        }
        
       
        
        //determines if storage works
        StorageEngine.prototype.isSupported = function(){
            try {
                return 'localStorage' in window && window.localStorage !== null;
            }catch(e){
                return false;
            }
        };
        
        /*
         * The following methods deal with the key and 
         * array of keys that holds the ids for individual 
         * objects under this key.
         */
        
        //Create a key
        StorageEngine.prototype.createKeysArray = function(){
            this.keys = [];
            this.saveKeys();
            return this.keys;
        };
        
        //Save keys
        StorageEngine.prototype.saveKeys = function(){
            typeof(this.keys) === 'object' ? this.storage.setItem(this.key, JSON.stringify(this.keys)) : this.createKeysArray(); // jshint ignore:line
        };
        
        StorageEngine.prototype.createKey = function(){
            key = 'storage-temp'+Date.now();  
            return key;
        };
        
        //Save a key
        StorageEngine.prototype.saveKey = function(arg){
            
            var itemKey = this.key+arg;
            
            //CHECK IF keys is valid
            this.keys = this.keys || this.createKeysArray();
 
            //Checks for duplicates
            if(this.keys.indexOf(itemKey)===-1){
                this.keys.push(itemKey);
                this.saveKeys();
            }
            
            return itemKey;
        };
        
        //Retrieve all keys
        StorageEngine.prototype.getKeys = function(){
            
            //Get keys
            this.keys = JSON.parse(this.storage.getItem(this.key));
            //If keys are not an array, create an array to hold keys
            if(typeof(this.keys) != 'object'){
                //Create an for keys and saves it
                this.createKeysArray();
            } 
           
            return this.keys;
            
        };
        
        //Delete a key
        StorageEngine.prototype.deleteKey = function(key){
            
            //Checks whether keys are valid
            this.keys = this.keys || this.getKeys();
            
            var index = this.keys.indexOf(key);
            if(index!= -1){
                this.keys.splice(index);
                this.saveKeys();
                return true;
            }else{
                return false;
            }
        };
        
        //Clear Keys
        StorageEngine.prototype.clearKeys = function(){
            
            this.keys = [];
            this.storage.setItem(this.key, JSON.stringify(this.keys));
            if (JSON.parse(this.storage.getItem(this.key)).length===0) {
                return true;
            } else {
                return false;
			}
        };
        
        //Get a key
        StorageEngine.prototype.getKey = function(arg){
            //CREATE TEMPORARY KEY
            return this.key + arg;
               
        };
        
        /*
         * The following methods deal with the actual retrieving, storing
         * and delete of the object themselves represented by the keys
         */
        
        //querya all items of name space
        StorageEngine.prototype.query = function(){
            //create array to hold data
            var data = [], i;
            //iterate through all the keys
            this.keys = this.getKeys();   
            for(i in this.keys){
                data.push(JSON.parse(this.storage.getItem(this.keys[i])));
            }
            //return the data
            return data;
            
        };
        
        //Save item into storage
        StorageEngine.prototype.save = function(data){
            var itemKey;
            //Function to save object if it has an id
            function saveFn(obj){ 
                if(obj.hasOwnProperty('id')){
                    var itemKey = this.saveKey(obj.id);
                    this.storage.setItem(itemKey, JSON.stringify(obj));
                    return true;
                }else{
                    return false;
                }
            }
            var saveObject = saveFn.bind(this);
            //Check if the data is valid
            if(data){
                //Checks if an array or not
                if(angular.isArray(data)){
                    //loop through items
                    for(var i=0; i<data.length; i++){
                        //return false if data did not save
                        if(!saveObject(data[i])){
                            return false;
                        }
                    }
                }else{
                    //return false if data did not save
                    return saveObject(data) ? data : false;
                }
            }else{
                //return false if data is not valid
                return false;
            }
        };
        
        //Get an item from storage
        StorageEngine.prototype.get = function(args){
            if(args.hasOwnProperty('id')){  
                var itemKey;
                //CHECKS IF THE ARG
                
                
                itemKey = this.getKey(args.id);
                    
                if(itemKey){
                    return JSON.parse(this.storage.getItem(itemKey));
                }else{
                    return 'itemKey';  
                }    
                
                 
            }else{
                return args;  
            }
            
               
                
        };
        
     
        //Remove an Item from storage
        StorageEngine.prototype.remove = function(args){
            //declare vars
            var itemKey;
            //checks if object has an id
            if(args.hasOwnProperty('id')){
                //get item key from id
                itemKey = this.getKey(args.id);
                //delete item and item key
                this.storage.removeItem(itemKey);
                this.deleteKey(itemKey);
                
                return true;
            //returns false is has no id
            }else{
                return false;
            }
        };
        
        
        //Clear Items
        StorageEngine.prototype.clear = function(){
            
            var index;
            //clear items
            for(index in this.keys){
                this.storage.removeItem(this.keys[index]);
            }
            //clear keys
            this.clearKeys();
            
        };
        
        /*
         * Save and retrieves last modified time for resources
         */
        StorageEngine.prototype.saveLastModified = function(date){
            this.storage.setItem(this.key+"-last_modified", date.toISOString());
        };
        
        StorageEngine.prototype.getLastModified = function(){
            var dateStr = this.storage.getItem(this.key+"-last_modified");
            if(dateStr){
                return new Date(dateStr);
            }else{
                return false;
            }
        };
        
        return new StorageEngine(key);
    }
    
    return storageFactory;
}]);

self.addEventListener('message', function(e){
    var haystack = e.data.haystack;
    var needle = e.data.needle;
    if(needle.hasOwnProperty('id')){
        for(var i in haystack){
            if(haystack[i].hasOwnProperty('id')){
                if(haystack[i].id == needle.id){
                    self.postMessage(i);
                    return;
                }
            }
        }
        self.postMessage(-1);
    }else{
        self.postMessage(-1);
    }
    
});
