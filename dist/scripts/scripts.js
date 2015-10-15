angular.module('employeeApp.services', ['ngResource']);
angular.module('employeeApp.directives', []);
angular.module('employeeApp.filters', []);
angular.module('employeeApp', [
  'ngRoute',
  'ngResource',
  'ngCookies',
  'employeeApp.directives',
  'employeeApp.filters',
  'employeeApp.services',
  'ui.date',
  'ngMaterial'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/contact/customer/add', {
      templateUrl: 'views/contact/customer/add.html',
      controller: 'ContactCustomerAddCtrl'
    }).when('/contact/customer/:id', {
      templateUrl: 'views/contact/customer/details.html',
      controller: 'ContactCustomerDetailsCtrl'
    }).when('/contact/customer', {
      templateUrl: 'views/contact/customer/view.html',
      controller: 'ContactCustomerViewCtrl'
    }).when('/contact/supplier/add', {
      templateUrl: 'views/contact/supplier/add.html',
      controller: 'ContactSupplierAddCtrl'
    }).when('/contact/supplier', {
      templateUrl: 'views/contact/supplier/view.html',
      controller: 'ContactSupplierViewCtrl'
    }).when('/contact/supplier/:id', {
      templateUrl: 'views/contact/supplier/details.html',
      controller: 'ContactSupplierDetailsCtrl'
    }).when('/contact', { templateUrl: 'views/contact.html' }).when('/product/upholstery/add', {
      templateUrl: 'views/product/upholstery/add.html',
      controller: 'ProductUpholsteryAddCtrl'
    }).when('/product/upholstery', {
      templateUrl: 'views/product/upholstery/view.html',
      controller: 'ProductUpholsteryViewCtrl'
    }).when('/product/upholstery/:id', {
      templateUrl: 'views/product/upholstery/details.html',
      controller: 'ProductUpholsteryDetailsCtrl'
    }).when('/product', { templateUrl: 'views/product.html' }).when('/product/model/add', {
      templateUrl: 'views/product/model/add.html',
      controller: 'ProductModelAddCtrl'
    }).when('/product/model', {
      templateUrl: 'views/product/model/view.html',
      controller: 'ProductModelViewCtrl'
    }).when('/product/model/:id', {
      templateUrl: 'views/product/model/details.html',
      controller: 'ProductModelDetailsCtrl'
    }).when('/order/acknowledgement/create', {
      templateUrl: 'views/order/acknowledgement/create.html',
      controller: 'OrderAcknowledgementCreateCtrl'
    }).when('/order', { templateUrl: 'views/order.html' }).when('/order/acknowledgement', {
      templateUrl: 'views/order/acknowledgement/view.html',
      controller: 'OrderAcknowledgementViewCtrl',
      reloadOnSearch: false
    }).when('/order/shipping/create', {
      templateUrl: 'views/order/shipping/create.html',
      controller: 'OrderShippingCreateCtrl'
    }).when('/order/shipping', {
      templateUrl: 'views/order/shipping/view.html',
      controller: 'OrderShippingViewCtrl'
    }).when('/order/shipping/deliveries/today', {
      templateUrl: 'views/order/shipping/today.html',
      controller: 'OrderShippingTodayCtrl'
    }).when('/order/shipping/deliveries/week', {
      templateUrl: 'views/order/shipping/week.html',
      controller: 'OrderShippingWeekCtrl'
    }).when('/administrator/group/add', {
      templateUrl: 'views/administrator/group/add.html',
      controller: 'AdministratorGroupAddCtrl'
    }).when('/administrator/group', {
      templateUrl: 'views/administrator/group/view.html',
      controller: 'AdministratorGroupViewCtrl'
    }).when('/administrator/group/:id', {
      templateUrl: 'views/administrator/group/details.html',
      controller: 'AdministratorGroupDetailsCtrl'
    }).when('/administrator/user/add', {
      templateUrl: 'views/administrator/user/add.html',
      controller: 'AdministratorUserAddCtrl'
    }).when('/administrator/user/:id', {
      templateUrl: 'views/administrator/user/details.html',
      controller: 'AdministratorUserDetailsCtrl'
    }).when('/administrator/user', {
      templateUrl: 'views/administrator/user/view.html',
      controller: 'AdministratorUserViewCtrl'
    }).when('/administrator', { templateUrl: 'views/administrator.html' }).when('/supply', {
      templateUrl: 'views/supply/view.html',
      controller: 'SupplyViewCtrl'
    }).when('/supply/fabric', {
      templateUrl: 'views/supply/fabric/view.html',
      controller: 'SupplyFabricViewCtrl'
    }).when('/supply/fabric/add', {
      templateUrl: 'views/supply/fabric/add.html',
      controller: 'SupplyFabricAddCtrl'
    }).when('/supply/fabric/:id', {
      templateUrl: 'views/supply/fabric/details.html',
      controller: 'SupplyFabricDetailsCtrl'
    }).when('/supply/foam/add', {
      templateUrl: 'views/supply/foam/add.html',
      controller: 'SupplyFoamAddCtrl'
    }).when('/supply/foam/:id', {
      templateUrl: 'views/supply/foam/details.html',
      controller: 'SupplyFoamDetailsCtrl'
    }).when('/supply/foam', {
      templateUrl: 'views/supply/foam/view.html',
      controller: 'SupplyFoamViewCtrl'
    }).when('/accounting', { templateUrl: 'views/accounting.html' }).when('/accounting/transaction', {
      templateUrl: 'views/accounting/transaction/view.html',
      controller: 'AccountingTransactionViewCtrl'
    }).when('/accounting/transaction/add', {
      templateUrl: 'views/accounting/transaction/add.html',
      controller: 'AccountingTransactionAddCtrl'
    }).when('/accounting/transaction/:id', {
      templateUrl: 'views/accounting/transaction/details.html',
      controller: 'AccountingTransactionDetailsCtrl'
    }).when('/order/acknowledgement/:id', {
      templateUrl: 'views/order/acknowledgement/details.html',
      controller: 'OrderAcknowledgementDetailsCtrl'
    }).when('/order/shipping/delivery', {
      templateUrl: 'views/order/shipping/delivery.html',
      controller: 'OrderShippingDeliveryCtrl'
    }).when('/order/shipping/:id', {
      templateUrl: 'views/order/shipping/details.html',
      controller: 'OrderShippingDetailsCtrl'
    }).when('/order/acknowledgement/item/:id', {
      templateUrl: 'views/order/acknowledgement/item/details.html',
      controller: 'OrderAcknowledgementItemDetailsCtrl'
    }).when('/supply/prop', {
      templateUrl: 'views/supply/prop/view.html',
      controller: 'SupplyPropViewCtrl'
    }).when('/supply/prop/add', {
      templateUrl: 'views/supply/prop/add.html',
      controller: 'SupplyPropAddCtrl'
    }).when('/supply/prop/:id', {
      templateUrl: 'views/supply/prop/details.html',
      controller: 'SupplyPropDetailsCtrl'
    }).when('/supply/lumber/view', {
      templateUrl: 'views/supply/lumber/view.html',
      controller: 'SupplyLumberViewCtrl'
    }).when('/product/inventory', {
      templateUrl: 'views/product/inventory.html',
      controller: 'ProductInventoryCtrl'
    }).when('/product/table', {
      templateUrl: 'views/product/table/view.html',
      controller: 'ProductTableViewCtrl'
    }).when('/product/rug', {
      templateUrl: 'views/product/rug.html',
      controller: 'ProductRugCtrl'
    }).when('/product/rug/view', {
      templateUrl: 'views/product/rug/view.html',
      controller: 'ProductRugViewCtrl'
    }).when('/product/rug/add', {
      templateUrl: 'views/product/rug/add.html',
      controller: 'ProductRugAddCtrl'
    }).when('/product/table/add', {
      templateUrl: 'views/product/table/add.html',
      controller: 'ProductTableAddCtrl'
    }).when('/product/table/:id', {
      templateUrl: 'views/product/table/details.html',
      controller: 'ProductTableDetailsCtrl'
    }).when('/project', {
      templateUrl: 'views/project/view.html',
      controller: 'ProjectViewCtrl'
    }).when('/project/:id', {
      templateUrl: 'views/project/details.html',
      controller: 'ProjectDetailsCtrl'
    }).when('/hr', { templateUrl: 'views/hr.html' }).when('/hr/employee', {
      templateUrl: 'views/hr/employee/view.html',
      controller: 'HrEmployeeViewCtrl'
    }).when('/project/room/:id', {
      templateUrl: 'views/project/room/details.html',
      controller: 'ProjectRoomDetailsCtrl'
    }).when('/order/purchase_order', {
      templateUrl: 'views/order/purchase_order/view.html',
      controller: 'OrderPurchaseOrderViewCtrl',
      reloadOnSearch: false
    }).when('/order/purchase_order/create', {
      templateUrl: 'views/order/purchase_order/create.html',
      controller: 'OrderPurchaseOrderCreateCtrl'
    }).when('/order/purchase_order/:id', {
      templateUrl: 'views/order/purchase_order/details.html',
      controller: 'OrderPurchaseOrderDetailsCtrl'
    }).when('/supply/log', {
      templateUrl: 'views/supply/log.html',
      controller: 'SupplyLogCtrl'
    }).when('/supply/shopping_list', {
      templateUrl: 'views/supply/shopping_list.html',
      controller: 'SupplyShoppingListCtrl'
    }).when('/supply/buying_guide', {
      templateUrl: 'views/supply/buying_guide.html',
      controller: 'SupplyBuyingGuideCtrl'
    }).when('/supply/:id', {
      templateUrl: 'views/supply/details.html',
      controller: 'SupplyDetailsCtrl'
    }).when('/equipment', {
      templateUrl: 'views/equipment/view.html',
      controller: 'EquipmentViewCtrl'
    }).when('/order/estimate', {
      templateUrl: 'views/order/estimate/view.html',
      controller: 'OrderEstimateViewCtrl'
    }).when('/order/estimate/create', {
      templateUrl: 'views/order/estimate/create.html',
      controller: 'OrderEstimateCreateCtrl'
    }).when('/order/estimate/:id', {
      templateUrl: 'views/order/estimate/details.html',
      controller: 'OrderEstimateDetailsCtrl'
    }).when('/scanner', {
      templateUrl: 'views/scanner.html',
      controller: 'ScannerCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
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
/*
 * Declare the standard headers
 */
angular.module('employeeApp').config([
  '$httpProvider',
  '$resourceProvider',
  '$mdThemingProvider',
  '$provide',
  function ($httpProvider, $resourceProvider, $mdThemingProvider, $provide) {
    /*
	 * Change how the $log service works 
	 */
    $provide.decorator('$log', [
      '$delegate',
      function ($delegate) {
        var _info = $delegate.info;
        var _warn = $delegate.warn;
        var _error = $delegate.error;
        var record = function (lType, msg) {
          var promise = $.ajax({
              type: 'POST',
              url: '/api/v1/client/log/',
              data: {
                'type': lType,
                'message': msg
              },
              processData: true
            });
        };
        $delegate.info = function () {
          var args = [].slice.call(arguments), now = new Date().toUTCString();
          var msg = now + '-' + (args[0].hasOwnProperty('stack') ? args[0].stack : args[0]);
          record('info', args[0]);
          _info(msg);
        };
        $delegate.warn = function () {
          var args = [].slice.call(arguments), now = new Date().toUTCString();
          var msg = now + '-' + (args[0].hasOwnProperty('stack') ? args[0].stack : args[0]);
          record('warn', args[0]);
          _warn(msg);
        };
        $delegate.error = function () {
          var args = [].slice.call(arguments), now = new Date().toUTCString();
          var msg = now + '-' + (args[0].hasOwnProperty('stack') ? args[0].stack : args[0]);
          record('error', args[0]);
          _error(msg);
        };
        return $delegate;
      }
    ]);
    $httpProvider.defaults.headers.post = {
      'Cache-Control': 'no-cache',
      'expires': '-1',
      'pragma': 'no-cache',
      'Content-Type': 'application/json'
    };
    $httpProvider.defaults.headers.get = {
      'Cache-Control': 'no-cache',
      'expires': '-1',
      'pragma': 'no-cache'
    };
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.stripTrailingSlashes = false;
    /*
     * Takes out the objects from the data 
     */
    $httpProvider.defaults.transformResponse.push(function (data, headers) {
      if (typeof data == 'object') {
        if (data.hasOwnProperty('results')) {
          return data.results;
        }
      }
      return data;
    });
    /*
	 * Configure the theme for this application
	 */
    $mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('blue').backgroundPalette('grey');
  }
]);
/*
 * Run top level application code
 */
angular.module('employeeApp').run([
  '$rootScope',
  'CurrentUser',
  'scanner',
  '$http',
  'Geocoder',
  '$q',
  '$cookies',
  '$interval',
  'PurchaseOrder',
  '$mdDialog',
  '$location',
  function ($rootScope, CurrentUser, scanner, $http, Geocoder, $q, $cookies, $interval, PurchaseOrder, $mdDialog, $location) {
    /*
	 * Set the token 
	 */
    $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
      jqXHR.setRequestHeader('X-CSRFToken', $cookies.csrftoken);
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
      if (this.hasModule('supplies') && !this.hasModule('acknowledgements') && !this.hasModule('shipping')) {
        $rootScope.inventory = true;
        $location.path('/scanner');
      }
    }.bind($rootScope.currentUser);
    /*
     * Prototypical extension of core classes
     */
    //Array: indexById
    Array.prototype.indexOfById = function (needle) {
      needle = typeof needle == 'object' ? needle.hasOwnProperty('id') ? needle.id : null : needle;
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
      try {
        var phase = this.$root.$$phase;
      } catch (e) {
        var phase = $rootScope.$$phase;
      }
      if (phase == '$apply' || phase == '$digest') {
        if (fn && typeof fn === 'function') {
          fn();
        }
      } else {
        try {
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
      'in': 'Inch',
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
              if (typeof component.types == 'object') {
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
    }  /*
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
  }
]);
angular.module('employeeApp').controller('ContactCustomerAddCtrl', [
  '$scope',
  'Customer',
  '$location',
  'Notification',
  'Geocoder',
  '$log',
  function ($scope, Customer, $location, Notification, Geocoder, $log) {
    $scope.customer = new Customer();
    $scope.save = function () {
      if ($scope.form.$valid) {
        Notification.display('Creating customer...', false);
        $scope.customer.$save(function () {
          Notification.display('Customer created');
          $location.path('/contact/customer');
        }, function (e) {
          Notification.display('There was an error in creating the customer', false);
        });
      } else {
        Notification.display('Please fill out all required fields correctly', false);
      }
    };
    $scope.getPosition = function () {
      if ($scope.customer.address.address1 && $scope.customer.address.city && $scope.customer.address.territory && $scope.customer.address.country && $scope.customer.address.zipcode) {
        //Get promise and bind to call backs
        var promise = Geocoder.geocode($scope.customer.address);
        promise.then(function (results) {
          if ($scope.marker) {
            $scope.marker.setPosition(results[0].geometry.location);
          } else {
            $scope.marker = $scope.map.createMarker(results[0].geometry.location);
            $scope.marker.onchange = function (latLng) {
              //Set address lat and lng
              $scope.customer.address.lat = $scope.marker.lat;
              $scope.customer.address.lng = $scope.marker.lng;
            };
          }
          //Reposition the map to the marker
          $scope.map.setPosition(results[0].geometry.location);
          //Set the Address lat and lng
          $scope.customer.address.lat = $scope.marker.lat;
          $scope.customer.address.lng = $scope.marker.lng;
        }, function (status) {
          $log.error(status);
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactCustomerDetailsCtrl', [
  '$scope',
  'Customer',
  '$routeParams',
  '$location',
  'Notification',
  '$timeout',
  function ($scope, Customer, $routeParams, $location, Notification, $timeout) {
    var updateLoopActive = false, timeoutPromise, map, markers = [], mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      }, styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Create new map and set the map style
    map = new google.maps.Map($('#customer-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //General purpose create marker function
    function createMarker(configs) {
      var lat = configs.address.latitude || configs.latitude, lng = configs.address.longitude || configs.longitude;
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          title: String(configs.index + 1),
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
        //Change icon color
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      }.bind(configs));
      //Add Hover listener to the marker
      google.maps.event.addListener(marker, 'mouseover', function () {
        $scope.safeApply(function () {
          this.address.hover = true;
        }.bind(this));
      }.bind(configs));
      //Add mouseleave listener to the marker
      google.maps.event.addListener(marker, 'mouseout', function () {
        $scope.safeApply(function () {
          this.address.hover = false;
        }.bind(this));
      }.bind(configs));
      return configs.marker;
    }
    //Request the customer resource from server
    $scope.customer = Customer.get({ 'id': $routeParams.id }, function () {
      //Loop through the addresses to create markers for them
      for (var i = 0; i < $scope.customer.addresses.length; i++) {
        var address = $scope.customer.addresses[i];
        //Create a marker for previously marked addresses
        if (address.latitude && address.longitude) {
          marker = createMarker({
            address: address,
            index: i,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
        }
      }
      //Focus map on single location
      if ($scope.customer.addresses.length === 1) {
        map.panTo(marker.getPosition());
        map.setZoom(17);
      }
    });
    $scope.update = function () {
      Notification.display('Updating...', false);
      $scope.customer.$update(function () {
        Notification.display('Customer Save');
      }, function () {
        Notification.display('Unable to Update Customer');
      });
    };
    $scope.$watch(function () {
      var customer = angular.copy($scope.customer);
      delete customer.last_modified;
      return customer;
    }, function (newVal, oldVal) {
      if (oldVal.hasOwnProperty('id') && !updateLoopActive) {
        updateLoopActive = true;
        timeoutPromise = $timeout(function () {
          Notification.display('Updating customer...', false);
          var customer = angular.copy($scope.customer);
          for (var i = 0; i < customer.addresses.length; i++) {
            delete customer.addresses[i].marker;
          }
          customer.$update(function () {
            updateLoopActive = false;
            Notification.display('Customer updated');
          }, function () {
            updateLoopActive = false;
            Notification.display('There was an error updating the customer');
          });
        }, 5000);
      }
    }, true);
    $scope.createMarker = function (address, $index) {
      var latlng = map.getCenter();
      createMarker({
        address: address,
        index: $index,
        latitude: latlng.lat(),
        longitude: latlng.lng()
      });
    };
    $scope.remove = function () {
      $scope.customer.$delete(function () {
        $location.path('/contact/customer');
      });
    };
    $scope.$on('$destroy', function () {
      $timeout.cancel(timeoutPromise);
      Notification.display('Updating customer...', false);
      $scope.customer.$update(function () {
        Notification.display('Customer updated.');
      });
    });
  }
]);
angular.module('employeeApp').controller('ContactCustomerViewCtrl', [
  '$scope',
  'Customer',
  'Notification',
  '$location',
  '$filter',
  function ($scope, Customer, Notification, $location, $filter) {
    var fetching = false;
    //Display system notification
    Notification.display('Loading Customers...', false);
    //Poll the server for customers
    $scope.customers = Customer.query(function () {
      Notification.hide();
    });
    /*
     * Searches the server
     * 
     * This function will search the server via GET
     * with the query string as a parameter
     * if the query string is not undefined
     * 
     * The resources returned are then added to the 
     * list of they are are not already in the list
     */
    $scope.$watch('query', function (q) {
      if (q) {
        Customer.query({ q: q }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.customers.indexOfById(resources[i]) == -1) {
              $scope.customers.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        Customer.query({
          offset: $scope.customers.length,
          limit: 50
        }, function (resources) {
          fetching = false;
          for (var i = 0; i < resources.length; i++) {
            $scope.customers.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierAddCtrl', [
  '$scope',
  'Supplier',
  '$location',
  'Notification',
  function ($scope, Supplier, $location, Notification) {
    $scope.supplier = new Supplier();
    //Mehtods
    //addS  contact to the supplier
    $scope.addContact = function () {
      //Notify
      Notification.display('Contact Added to Supplier');
      $scope.supplier.contacts = $scope.supplier.contacts || [];
      $scope.supplier.contacts.push(angular.copy($scope.contact));
      $scope.contact = {};
      $scope.showAddContact = false;
    };
    $scope.getLocation = function () {
      var position = $scope.map.getPosition($scope.supplier.address, function (response) {
          angular.extend($scope.supplier.address, response);
          $scope.map.setPosition({
            lat: response.lat,
            lng: response.lng,
            updateMarker: true
          });
        });
    };
    //Method to save the supplier to the database
    $scope.save = function () {
      if ($scope.form.$valid) {
        //Notify
        Notification.display('Saving supplier...', false);
        $scope.supplier.$save(function () {
          //Notify
          Notification.display('Supplier Saved');
          $location.path('/contact/supplier');
        }, function (e) {
          Notification.display('There was an error in creating this supplier', false);
        });
      } else {
        Notification.display('Please fill out all required sections correctly');
      }
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierViewCtrl', [
  '$scope',
  'Supplier',
  'Notification',
  '$filter',
  function ($scope, Supplier, Notification, $filter) {
    //System message
    Notification.display('Loading suppliers...', false);
    //Load initial suppliers
    $scope.suppliers = Supplier.query(function () {
      Notification.hide();
    });
    /*
     * Search Mechanism
     */
    $scope.$watch('query', function (q) {
      if (q) {
        Supplier.query({ q: q }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.suppliers.indexOfById(resources[i]) == -1) {
              $scope.suppliers.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      Supplier.query({
        offset: $scope.suppliers.length,
        limit: 50
      }, function (resources) {
        for (var i = 0; i < resources.length; i++) {
          $scope.suppliers.push(resources[i]);
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('ContactSupplierDetailsCtrl', [
  '$scope',
  'Supplier',
  '$routeParams',
  '$location',
  'SupplierContact',
  'Notification',
  '$timeout',
  '$mdDialog',
  '$mdToast',
  '$log',
  function ($scope, Supplier, $routeParams, $location, SupplierContact, Notification, $timeout, $mdDialog, $mdToast, $log) {
    var updateLoopActive = false, timeoutPromise, map, geocoder = new google.maps.Geocoder(), markers = [], mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      }, styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Create new map and set the map style
    map = new google.maps.Map($('#supplier-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //General purpose create marker function
    function createMarker(configs) {
      var lat = configs.address.latitude || configs.latitude, lng = configs.address.longitude || configs.longitude;
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
        if (this.address.latitude != $scope.supplier.addresses[0].latitude || this.address.longitude != $scope.supplier.addresses[0].longitude) {
          $scope.supplier.addresses[0].latitude = latLng.lat();
          $scope.supplier.addresses[0].longitude = latLng.lng();
        }
        //Change icon color
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
        $scope.update();
      }.bind(configs));
      return configs.marker;
    }
    $scope.createMarker = function (address, $index) {
      var latlng = map.getPosition();
      createMarker({
        address: address,
        index: $index,
        latitude: latlng.lat(),
        longitude: latlng.lng()
      });
    };
    //Retreive the supplier from the server
    $scope.supplier = Supplier.get({ 'id': $routeParams.id }, function () {
      var address = $scope.supplier.addresses[0];
      if (address.latitude && address.longitude) {
        var latLng = map.getCenter();
        marker = createMarker({
          address: address,
          title: $scope.supplier.name,
          latitude: latLng.lat(),
          longitude: latLng.lng(),
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
        map.panTo(marker.getPosition());
        map.setZoom(17);
      } else {
        //Create address string for geocoding
        var addressStr = address.address1 || '';
        addressStr += (address.address2 || '') + ', ';
        addressStr += (address.city || '') + ', ';
        addressStr += (address.territory || '') + ', ';
        addressStr += (address.country || '') + ' ';
        addressStr += address.zipcode || '';
        //Perform geocoding request
        geocoder.geocode({ address: addressStr }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var local = results[0].geometry.location;
            marker = createMarker({
              address: address,
              title: $scope.supplier.name,
              latitude: local.lat(),
              longitude: local.lng()
            });
            map.panTo(marker.getPosition());
            map.setZoom(14);
          } else {
            $log.error(status);
          }
        });
      }
    });
    $scope.contact = {};
    $scope.showAddContact = function () {
      $mdDialog.show({
        templateUrl: 'views/templates/add-supplier-contact.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    $scope.complete = function () {
      if ($scope.form.$valid) {
        $mdToast.hide();
        $mdDialog.hide();
        $scope.addContact();
      } else {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Please complete all fields.'));
      }
    };
    $scope.cancel = function () {
      $mdDialog.hide();
      $sccope.contact = {};
    };
    //addS  contact to the supplier
    $scope.addContact = function (contact) {
      $scope.supplier.contacts = $scope.supplier.contacts || [];
      contact = contact || $scope.contact;
      $scope.supplier.contacts.push(contact);
      $scope.contact = {};
      //Save changes
      $scope.supplier.$update();
    };
    //Remove a supplier contact
    $scope.deleteContact = function ($index) {
      $scope.supplier.contacts.splice($index, 1);
      $scope.supplier.$update();
    };
    /*
	$scope.$watch(function () {
		var supplier = angular.copy($scope.supplier);
		delete supplier.last_modified;
		return supplier;	
	}, function (newVal, oldVal) {
		
		if (!updateLoopActive && oldVal.hasOwnProperty('id')) {
			updateLoopActive = true;
			timeoutPromise = $timeout(function () {
				Notification.display('Updating supplier...', false);
				var supplier = angular.copy($scope.supplier);
				supplier.$update(function () {
					updateLoopActive = false;
					Notification.display('Supplier updated');
				}, function () { 
					Notification.display('There was an error updating the supplier');
				});
			
			}, 5000);
		}
	}, true);
    */
    $scope.update = function () {
      //Notify
      Notification.display('Updating Supplier...', false);
      $log.debug($scope.supplier);
      $log.debug($scope.supplier.addresses[0].latitude, $scope.supplier.addresses[0].longitude);
      $scope.supplier.$update(function (data) {
        Notification.display('Supplier Updated');
      });
    };
    $scope.remove = function () {
      $scope.supplier.$remove(function () {
        $location.path('/contact/supplier');
      });
    };
    $scope.$on('$destroy', function () {
      Notification.display('Updating supplier...', false);
      $scope.supplier.$update(function () {
        Notification.display('Supplier updated');
      }, function (e) {
        Notification.display('There was an error updating the supplier');
      });
    });
  }
]);
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
angular.module('employeeApp.services').factory('Resource', [
  'eaStorage',
  '$rootScope',
  '$http',
  '$q',
  '$parse',
  '$resource',
  'Notification',
  function (eaStorage, $rootScope, $http, $q, $parse, $resource, Notification) {
    function ResourceFactory(url, paramDefaults, actions) {
      //Default methods available to the public
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'update': { method: 'PUT' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, oResource = new $resource(url, paramDefaults, actions),
        //jshint ignore:line
        storage = eaStorage(url.split(/\//g)[0]), db,
        // = eaIndexedDB(url),
        value, previousAction, previousParams, last_checked = true, poll = true, getter = function (obj, path) {
          return $parse(path)(obj);
        };
      /*Helper Functions*/
      function extractParams(data, actionParams) {
        var ids = {};
        actionParams = angular.extend({}, paramDefaults, actionParams);
        angular.forEach(actionParams, function (value, key) {
          if (angular.isFunction(value)) {
            value = value();
          }
          ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }
      /*
         * Locates the index of an object
         * which matches the supplied id
         */
      function indexOfId(array, id) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].hasOwnProperty('id')) {
            if (array[i].id == id) {
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
      function Resource(value) {
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
      angular.forEach(actions, function (action, name) {
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        //Default methods
        Resource[name] = function (a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = angular.noop;
          var error = null;
          var promise;
          /* jshint ignore: start */
          switch (arguments.length) {
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
              error = a3;  //fallthrough
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (angular.isFunction(a1))
              success = a1;
            else if (hasBody)
              data = a1;
            else
              params = a1;
            break;
          case 0:
            break;
          default:
            throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
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
          if (action.isArray) {
            value = angular.isArray(value) ? value || [] : [];
          } else {
            value = angular.isObject(value) && !value.hasOwnProperty('length') ? value || {} : {};
            value = this instanceof Resource ? this : new Resource(value);
          }
          /*
                 * Determines whether to include the last modified parameter depending
                 * on whether the 'last_checked' var has a value or not
                 */
          //dump((this.$$last_checked && typeof(this.$$last_checked) != "boolean") && action.method == "GET")
          if (this.$$last_checked !== undefined && action.method == 'GET') {
            angular.extend(params, { last_modified: this.$$last_checked.toISOString() });
          }
          /*
                if(storage.getLastModified() && action.method == "GET"){
                    angular.extend(params, {last_modified:storage.getLastModified().toISOString()});
                }
                */
          var oPromise = oResource[name](params, data, function (response) {
              /*
                     * If the hasBody is positive, it indicates this is a child
                     * resource and there for the resource it self should be update
                     * with the data because it is currently presented tot he user
                     */
              if (action.method == 'DELETE' || hasBody) {
                angular.extend(this, response);
              }
              /*
                     * If the method is GET it indicates that the user has requested 
                     * data and the resource is a gateway and it itself is no the the
                     * data holder. There for the reference that is returned to the user 
                     * should be update with either the array of items or the item data
                     * respecitvely.
                     */
              if (action.method === 'GET') {
                if (action.isArray || angular.isArray(response)) {
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
                    if (index > -1) {
                      /*
                                    * In order not to waste resource we
                                    * first check if the two items are equal or not.
                                    * If they are not equal then we perform an extend
                                    */
                      if (!angular.equals(value[index], response[i])) {
                        angular.extend(value[index], new Resource(response[i]));
                        if (value[index].deleted) {
                          value.splice(index, 1);
                          var item = [];
                          item.splice(index);
                        }
                      }
                    } else {
                      //Add the new item
                      if (!response[i].deleted) {
                        try {
                          value.push(new Resource(response[i]));
                        } catch (e) {
                        }
                      }
                    }
                  }
                } else {
                  //Upate the reference with the data
                  if (response.deleted) {
                    angular.copy({}, value);
                    Notification.display('This resource no longer exists.');
                  } else {
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
            }.bind(this), function (e) {
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
        Resource.prototype['$' + name] = function (a1, a2, a3) {
          var params = extractParams(this), success = angular.noop, error;
          switch (arguments.length) {
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
            throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });
      return Resource;
    }
    return ResourceFactory;
  }
]);
angular.module('employeeApp.services').factory('$storage', [function () {
    function storageFactory(key) {
      //Create the main factory
      function StorageEngine(key) {
        //ASSIGNS KEY TO OBJECT
        this.key = key;
        //CHECKS IF SUPPORTS LOCALSTORAGE
        if ('localStorage' in window && window.localStorage !== null) {
          this.storage = window.localStorage;
          this.getKeys();
        }
      }
      //determines if storage works
      StorageEngine.prototype.isSupported = function () {
        try {
          return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
          return false;
        }
      };
      /*
         * The following methods deal with the key and 
         * array of keys that holds the ids for individual 
         * objects under this key.
         */
      //Create a key
      StorageEngine.prototype.createKeysArray = function () {
        this.keys = [];
        this.saveKeys();
        return this.keys;
      };
      //Save keys
      StorageEngine.prototype.saveKeys = function () {
        typeof this.keys === 'object' ? this.storage.setItem(this.key, JSON.stringify(this.keys)) : this.createKeysArray();  // jshint ignore:line
      };
      StorageEngine.prototype.createKey = function () {
        key = 'storage-temp' + Date.now();
        return key;
      };
      //Save a key
      StorageEngine.prototype.saveKey = function (arg) {
        var itemKey = this.key + arg;
        //CHECK IF keys is valid
        this.keys = this.keys || this.createKeysArray();
        //Checks for duplicates
        if (this.keys.indexOf(itemKey) === -1) {
          this.keys.push(itemKey);
          this.saveKeys();
        }
        return itemKey;
      };
      //Retrieve all keys
      StorageEngine.prototype.getKeys = function () {
        //Get keys
        this.keys = JSON.parse(this.storage.getItem(this.key));
        //If keys are not an array, create an array to hold keys
        if (typeof this.keys != 'object') {
          //Create an for keys and saves it
          this.createKeysArray();
        }
        return this.keys;
      };
      //Delete a key
      StorageEngine.prototype.deleteKey = function (key) {
        //Checks whether keys are valid
        this.keys = this.keys || this.getKeys();
        var index = this.keys.indexOf(key);
        if (index != -1) {
          this.keys.splice(index);
          this.saveKeys();
          return true;
        } else {
          return false;
        }
      };
      //Clear Keys
      StorageEngine.prototype.clearKeys = function () {
        this.keys = [];
        this.storage.setItem(this.key, JSON.stringify(this.keys));
        if (JSON.parse(this.storage.getItem(this.key)).length === 0) {
          return true;
        } else {
          return false;
        }
      };
      //Get a key
      StorageEngine.prototype.getKey = function (arg) {
        //CREATE TEMPORARY KEY
        return this.key + arg;
      };
      /*
         * The following methods deal with the actual retrieving, storing
         * and delete of the object themselves represented by the keys
         */
      //querya all items of name space
      StorageEngine.prototype.query = function () {
        //create array to hold data
        var data = [], i;
        //iterate through all the keys
        this.keys = this.getKeys();
        for (i in this.keys) {
          data.push(JSON.parse(this.storage.getItem(this.keys[i])));
        }
        //return the data
        return data;
      };
      //Save item into storage
      StorageEngine.prototype.save = function (data) {
        var itemKey;
        //Function to save object if it has an id
        function saveFn(obj) {
          if (obj.hasOwnProperty('id')) {
            var itemKey = this.saveKey(obj.id);
            this.storage.setItem(itemKey, JSON.stringify(obj));
            return true;
          } else {
            return false;
          }
        }
        var saveObject = saveFn.bind(this);
        //Check if the data is valid
        if (data) {
          //Checks if an array or not
          if (angular.isArray(data)) {
            //loop through items
            for (var i = 0; i < data.length; i++) {
              //return false if data did not save
              if (!saveObject(data[i])) {
                return false;
              }
            }
          } else {
            //return false if data did not save
            return saveObject(data) ? data : false;
          }
        } else {
          //return false if data is not valid
          return false;
        }
      };
      //Get an item from storage
      StorageEngine.prototype.get = function (args) {
        if (args.hasOwnProperty('id')) {
          var itemKey;
          //CHECKS IF THE ARG
          itemKey = this.getKey(args.id);
          if (itemKey) {
            return JSON.parse(this.storage.getItem(itemKey));
          } else {
            return 'itemKey';
          }
        } else {
          return args;
        }
      };
      //Remove an Item from storage
      StorageEngine.prototype.remove = function (args) {
        //declare vars
        var itemKey;
        //checks if object has an id
        if (args.hasOwnProperty('id')) {
          //get item key from id
          itemKey = this.getKey(args.id);
          //delete item and item key
          this.storage.removeItem(itemKey);
          this.deleteKey(itemKey);
          return true;  //returns false is has no id
        } else {
          return false;
        }
      };
      //Clear Items
      StorageEngine.prototype.clear = function () {
        var index;
        //clear items
        for (index in this.keys) {
          this.storage.removeItem(this.keys[index]);
        }
        //clear keys
        this.clearKeys();
      };
      /*
         * Save and retrieves last modified time for resources
         */
      StorageEngine.prototype.saveLastModified = function (date) {
        this.storage.setItem(this.key + '-last_modified', date.toISOString());
      };
      StorageEngine.prototype.getLastModified = function () {
        var dateStr = this.storage.getItem(this.key + '-last_modified');
        if (dateStr) {
          return new Date(dateStr);
        } else {
          return false;
        }
      };
      return new StorageEngine(key);
    }
    return storageFactory;
  }]);
angular.module('employeeApp.services').factory('Customer', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/customer/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Supplier', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/supplier/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('CurrentUser', [
  '$http',
  function ($http) {
    //Create the initial object
    function User() {
      //Declare flags and array holder for fns
      this.ready = false;
      this._onready = [];
      //Get information about the current user
      var promise = $http.get('/api/v1/current_user');
      promise.then(function (response) {
        angular.extend(this, response.data || {});
        this.ready = true;
        for (var i = 0; i < this._onready.length; i++) {
          this._onready[i](response.data);
        }
      }.bind(this));
    }
    //checks if user has a permission
    User.prototype.hasPermission = function (permStr) {
      //If the permissions are not yet
      //loaded then false is returnd
      return this.modules ? this.permissions.indexOf(permStr) !== -1 ? true : false : false;
    };
    //Checks if user has a module
    User.prototype.hasModule = function (moduleStr) {
      //If the permissions are not yet
      //loaded then false is returnd
      return this.modules ? this.modules.indexOf(moduleStr) !== -1 ? true : false : false;
    };
    Object.defineProperties(User.prototype, {
      onready: {
        set: function (fn) {
          if (typeof fn == 'function') {
            this._onready.push(fn);
          }
        }
      }
    });
    //return the user
    return User;
  }
]);
angular.module('employeeApp.services').factory('Notification', [
  '$timeout',
  '$rootScope',
  function ($timeout, $rootScope) {
    function center(target) {
      var width = angular.element(window).width();
      var tWidth = angular.element(target).width();
      if (angular.element(target).css('left') === 0) {
        angular.element(target).css('left', width - tWidth);
      } else {
        angular.element(target).css('margin-left', -(tWidth / 2));
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
    function spawnToast() {
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
      if (this.promise) {
        $timeout.cancel(this.promise);
      }
      if (autoHide !== false) {
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
      if (!('Notification' in window)) {
        this._display = spawnSimpleNotification;
      } else if (Notification.permission === 'granted') {
        this._display = spawnNotification;
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
      this.notification.removeClass('active');  //$mdToast.hide();
    };
    return new Notifier();
  }
]);
angular.module('employeeApp.services').factory('SupplierContact', [
  '$resource',
  function (eaResource) {
    return eaResource('supplier_contact/:id', { id: '@id' });
  }
]);
angular.module('employeeApp.filters').filter('dateRange', [function () {
    function filter(date, start, end, success) {
      if (start.getTime() <= date.getTime() && date.getTime() <= end.getTime()) {
        success();
      }
    }
    function convertToDateObject(arg) {
      switch (typeof arg) {
      case 'object':
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
      var predicates = [], start = convertToDateObject(arg1), end = convertToDateObject(arg2), testDate = null;
      angular.forEach(array, function (item) {
        if (item.hasOwnProperty(key)) {
          if (typeof item[key] == 'object') {
            filter(item[key], start, end, function () {
              predicates.push(item);
            });
          } else if (typeof item[key] == 'string') {
            testDate = new Date(item[key]);
            filter(testDate, start, end, function () {
              predicates.push(item);
            });
          } else if (typeof item[key] == 'number') {
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
angular.module('employeeApp.filters').filter('dateFilter', [function () {
    function filter(item, target, comparison, success) {
      switch (comparison) {
      case 'equals':
        if (item.getMonth() == target.getMonth() && item.getYear() == target.getYear() && item.getDate() == target.getDate()) {
          return true;
        }
        break;
      case 'greater':
        if (item.getTime() >= target.getTime()) {
          return true;
        }
        break;
      case 'less':
        if (item.getTime() <= target.getTime()) {
          return true;
        }
        break;
      default:
        if (item.getMonth(item) == target.getMonth() && item.getYear() == target.getYear() && item.getDate() == target.getDate()) {
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
          if (typeof item[key] == 'object') {
            if (filter(item[key], date, comparison)) {
              predicates.push(item);
            }
          } else if (typeof item[key] == 'string') {
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
angular.module('employeeApp.filters').filter('beautify', [function () {
    return function (input) {
      try {
        //declare vars
        var newStrArray = [], newStr, upperLetter, newWord,
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
angular.module('employeeApp.filters').filter('exclude', [function () {
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
angular.module('employeeApp.filters').filter('telephone', [function () {
    return function ($input) {
      var clean = $input.replace(/ /g, '').replace(/\-/g, '');
      return clean;
    };
  }]);
angular.module('employeeApp').controller('ProductUpholsteryAddCtrl', [
  '$scope',
  'Model',
  'Configuration',
  'Upholstery',
  'Notification',
  '$location',
  'FileUploader',
  function ($scope, Model, Configuration, Upholstery, Notification, $location, FileUploader) {
    $scope.modelList = Model.query({ limit: 0 });
    $scope.configurationList = Configuration.query({ limit: 0 });
    $scope.upholstery = new Upholstery();
    //Text for tooltips
    $scope.modelText = 'Choose a Model';
    $scope.configurationText = 'Choose a Configuration';
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
    $scope.bpText = 'Enter the number of Back Pillows';
    $scope.apText = 'Enter the number of Accent Pillows';
    $scope.lpText = 'Enter the number of Lumbar Pillows';
    $scope.cpText = 'Enter the number of Corner Pillows';
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/upholstery/image/');
      promise.then(function (dataObj) {
        Notification.display('Image Uploaded');
        $scope.upholstery.image = dataObj.data;
      }, function () {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error uploading the file'));
      });
    };
    $scope.save = function () {
      Notification.display('Saving Upholstery Product...');
      $scope.upholstery.$create(function () {
        Notification.display('Upholstery Product Saved');
        $location.path('/product/upholstery');
      });
    };
  }
]);
angular.module('employeeApp').controller('ProductUpholsteryViewCtrl', [
  '$scope',
  'Upholstery',
  'Notification',
  '$filter',
  '$location',
  function ($scope, Upholstery, Notification, $filter, $location) {
    var fetching = false;
    Notification.display('Loading Upholstery...', false);
    $scope.resources = Upholstery.query({ limit: 20 }, function () {
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Upholstery.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.resources.indexOfById(resources[i]) == -1) {
              $scope.resources.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more upholstery...', false);
        Upholstery.query({
          offset: $scope.resources.length,
          limit: 10
        }, function (resources) {
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.resources.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ProductUpholsteryDetailsCtrl', [
  '$scope',
  'Upholstery',
  '$routeParams',
  '$mdToast',
  '$location',
  '$timeout',
  'FileUploader',
  function ($scope, Upholstery, $routeParams, $mdToast, $location, $timeout, FileUploader) {
    $scope.updateLoopActive = true;
    var timeoutPromise;
    $scope.uphol = Upholstery.get({ 'id': $routeParams.id }, function () {
      $scope.safeApply(function () {
        $scope.updateLoopActive = false;
      });
    });
    //Upload Image
    $scope.upload = function () {
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/upholstery/image/');
      promise.then(function (dataObj) {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('File was uploaded.'));
        $scope.uphol.image = dataObj.data;
        $scope.update();
      }, function () {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error uploading the file'));
      });  /*
        fd.append('image', $scope.images[0]);
		jQuery.ajax("/api/v1/upholstery/image", {
			type: 'POST',
			data: fd,
			cache: false,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Updated');
				$scope.uphol.image = {};
				angular.copy(responseData, $scope.uphol.image);
				$scope.uphol.$update();
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
		});*/
    };
    $scope.$watch(function () {
      var uphol = angular.copy($scope.uphol);
      try {
        delete uphol.last_modified;
        delete uphol.image;
        delete uphol.model;
        delete uphol.configuration;
      } catch (e) {
      }
      return uphol;
    }, function (newVal, oldVal) {
      if (oldVal.hasOwnProperty('id')) {
        $timeout.cancel(timeoutPromise);
        timeoutPromise = $timeout(function () {
          $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('Updating ' + $scope.uphol.description + '...'));
          $scope.uphol.$update(function () {
            $scope.updateLoopActive = false;
            $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content($scope.uphol.description + ' updated.'));
          }, function () {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('Unable to update'));
          });
        }, 700);
      }
    }, true);
    $scope.update = function () {
    };
    $scope.remove = function () {
      //Notification.display('Deleteing Upholstery Product');
      $scope.uphol.$delete(function () {
        //Notification.display('Upholstery Product Deleted');
        $location.path('/product/upholstery');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp.services').factory('Upholstery', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/upholstery/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Model', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/model/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Configuration', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/configuration/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('ProductModelAddCtrl', [
  '$scope',
  'Model',
  'Notification',
  '$location',
  'FileUploader',
  function ($scope, Model, Notification, $location, FileUploader) {
    $scope.model = new Model();
    //Tooltips
    $scope.nameText = 'Enter a Name for this Model';
    $scope.modelText = 'Enter a Model Number for this Model';
    $scope.collectionText = 'Enter this Model\'s Collection';
    //Adds a new models
    $scope.save = function (model) {
      Notification.display('Saving Model...', false);
      $scope.model.$create(function () {
        $location.path('/product/model');
        Notification.display('Model Saved');
      });
    };
    $scope.uploadImage = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/upholstery/image/');
      promise.then(function (dataObj) {
        Notification.display('Image Uploaded');
        $scope.model.image = dataObj.data;
      }, function (e) {
        Notification.display('There was an error in uploading the file');
      });
    };
  }
]);
angular.module('employeeApp').controller('ProductModelViewCtrl', [
  '$scope',
  'Model',
  'Notification',
  function ($scope, Model, Notification) {
    var fetching = false;
    $scope.modelList = Model.query(function () {
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Model.query({
          q: q,
          limit: 10
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.modelList.indexOfById(resources[i]) == -1) {
              $scope.modelList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more models...', false);
        Model.query({
          limit: 50,
          offset: $scope.modelList.length
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.modelList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('ProductModelDetailsCtrl', [
  '$scope',
  'Model',
  '$routeParams',
  '$location',
  'Notification',
  '$http',
  'FileUploader',
  function ($scope, Model, $routeParams, $location, Notification, $http, FileUploader) {
    $scope.model = Model.get({ 'id': $routeParams.id });
    //Uploads Profie Image
    $scope.upload = function () {
      //display notification
      Notification.display('Uploading Model Image...', false);
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/upholstery/image/');
      promise.then(function (dataObj) {
        Notification.display('Image uploaded.');
        $scope.model.image = dataObj.data;
        $scope.update();
        $scope.images = null;
      }, function () {
        Notification.display('Error uploading image', false);
      });
    };
    $scope.remove = function () {
      //Notify
      Notification.display('Deleting Model...');
      //Ajax call to delete
      $scope.model.$delete(function () {
        //Notify
        Notification.display('Model Deleted');
        //Reroute to view page
        $location.path('/product/model');
      });
    };
    $scope.update = function () {
      Notification.display('Saving Model...', false);
      $scope.model.$update(function () {
        Notification.display('Model Updated');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp.services').factory('Acknowledgement', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/acknowledgement/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementCreateCtrl', [
  '$scope',
  'Acknowledgement',
  'Customer',
  '$filter',
  '$window',
  'Project',
  'Notification',
  'FileUploader',
  'Room',
  'Phase',
  '$mdDialog',
  '$log',
  function ($scope, Acknowledgement, Customer, $filter, $window, Project, Notification, FileUploader, Room, Phase, $mdDialog, $log) {
    //Vars
    $scope.showFabric = false;
    $scope.uploading = false;
    $scope.customImageScale = 100;
    $scope.projects = Project.query({
      page_size: 99999,
      limit: 0,
      status__exclude: 'completed'
    });
    $scope.ack = new Acknowledgement();
    var uploadTargets = [];
    var storage = window.localStorage,
      /*
	 	 * Map variables and settings
	 	 */
      map, marker, geocoder = new google.maps.Geocoder(), markers = [], mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      },
      //Style for the map
      styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Create new map and set the map style
    map = new google.maps.Map($('#create-ack-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //General purpose create marker function
    function createMarker(configs) {
      var lat = configs.address.latitude || configs.latitude, lng = configs.address.longitude || configs.longitude;
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
        if (this.address.latitude != $scope.supplier.addresses[0].latitude || this.address.longitude != $scope.supplier.addresses[0].longitude) {
          $scope.po.supplier.addresses[0].latitude = latLng.lat();
          $scope.po.supplier.addresses[0].longitude = latLng.lng();
        }
        //Change icon color
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
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
          marker = createMarker({
            address: address,
            title: $scope.ack.customer.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          map.panTo(marker.getPosition());
          map.setZoom(17);
        }
      } catch (e) {
        $log.error(e);
      }
    }
    //Set items and employee
    $scope.ack.items = $scope.ack.items || [];
    $scope.employee = { id: $scope.currentUser.id };
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
          marker = createMarker({
            address: address,
            title: $scope.ack.customer.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          map.panTo(marker.getPosition());
          map.setZoom(17);
        }
      } catch (e) {
        $log.warn(JSON.stringify(e));
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
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    $scope.completeAddProject = function () {
      $mdDialog.hide();
      Notification.display('Creating project...', false);
      $scope.project.$create(function (resp) {
        $scope.projects.push(resp);
        $scope.ack.project = resp;
        Notification.hide();
        $scope.project = new Project();
      }, function (e) {
        $log.error(JSON.stringify(e));
      });
    };
    $scope.cancelAddProject = function () {
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
        controller: function () {
          this.parent = $scope;
        }
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
        controller: function () {
          this.parent = $scope;
        }
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
        $scope.ack.files.push({ filename: files[i].name });
        var promise = FileUploader.upload(files[i], '/api/v1/acknowledgement/file/');
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
      }  /* jshint ignore:end */
    };
    $scope.create = function () {
      $scope.ack.employee = $scope.currentUser;
      $scope.tempSave();
      try {
        if ($scope.isValidated()) {
          Notification.display('Creating new acknowledgment', false);
          /*
				 * Preps for creation of a new project
				 */
          if ($scope.ack.newProject) {
            $scope.ack.project = { codename: $scope.ack.newProjectName };
            delete $scope.ack.newProject;
            delete $scope.ack.newProjectName;
          }
          $scope.ack.$create(function (response) {
            Notification.display('Acknowledgement created with ID: ' + $scope.ack.id, 2000);
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
            Notification.display('There was an error in creating the acknowledgement. A report has been sent to Charlie.', false);
          });
        }
      } catch (e) {
        $log.error(JSON.stringify({
          message: e,
          data: $scope.ack
        }));
        Notification.display(e, false);
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
        throw new TypeError('Please add a customer.');
      } else {
        if (!$scope.ack.customer.hasOwnProperty('id')) {
          throw new ReferenceError('Missin customer ID');
        }
      }
      //Validate ordered Items
      if (!$scope.ack.items) {
        throw new TypeError('Products is not an array');
      } else {
        //Verifies that there are items ordered
        if ($scope.ack.items.length <= 0) {
          throw new RangeError('No products added to the order');
        } else {
          for (var i = 0; i < $scope.ack.items.length; i++) {
            var item = $scope.ack.items[i];
            /*
                     * Check that there is a quantity 
                     * for each piece of product
                     */
            if (!$scope.ack.items[i].hasOwnProperty('quantity') || !$scope.ack.items[i].quantity) {
              throw new RangeError('Expecting a quantity of at least 1 for ' + $scope.ack.items[i].description);
            }
            /*
                     * Validates that every item has a price
                     */
            if (!$scope.ack.items[i].hasOwnProperty('has_price')) {
            } else {
              if (!$scope.ack.items[i].has_price) {
              }
            }
            /*
                     * Validates custom items
                     */
            if (!item.hasOwnProperty('id')) {
              if (!item.is_custom) {
                throw new TypeError('Item without id is not custom. Please contact an Administrator.');
              }
            }
          }
        }
      }
      //Validate Delivery Date
      if (!$scope.ack.delivery_date) {
        throw new TypeError('Please select a preliminary delivery date.');
      }
      //Validate vat
      if ($scope.ack.vat === undefined || $scope.ack.vat === null) {
        throw new TypeError('Please set the vat.');
      }
      //Validate purchase order number
      if (!$scope.ack.po_id) {
        throw new TypeError('PO# is not defined');
      }
      //Test if the project was declared in the remarks section
      testWords = [
        {
          re: /ห้อง/gi,
          type: 'room',
          message: 'Please specify the room in room selection'
        },
        {
          re: /บ้าน/gi,
          type: 'project',
          message: 'Please specify the project in the project selection'
        },
        {
          re: /บ้านตัวอย่าง/gi,
          type: 'project',
          message: 'Please specify the project in the project selection'
        },
        {
          re: /ลดาวัลย์/gi,
          type: 'project',
          message: 'Please specify the project in the project selection'
        },
        {
          re: /โครงการ/gi,
          type: 'project',
          message: 'Please specify the project in the project selection'
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
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementViewCtrl', [
  '$scope',
  'Acknowledgement',
  '$location',
  '$filter',
  'KeyboardNavigation',
  'Notification',
  '$log',
  function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, Notification, $log) {
    /*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
    var fetching = true, index = 0, currentSelection, search = $location.search();
    var notification = Notification.display('Retrieving acknowledgements...', false);
    $scope.query = {};
    /* 
	 * Set default search from search url
	 */
    if (search.q) {
      $scope.safeApply(function () {
        $scope.query = { $: { $: search.q } };
      });
    }
    if (search.status) {
      $scope.safeApply(function () {
        $scope.query.status = search.status;
      });
    }
    //Poll the server for acknowledgements
    $scope.acknowledgements = Acknowledgement.query({ limit: 20 }, function (e) {
      notification.hide();
      fetching = false;
      changeSelection(index);
    });
    $scope.setCategory = function ($category) {
      $scope.safeApply(function () {
        $scope.query.status = $category;
      });
      //Set search paramters in url
      $location.search('status', $category);
      //Determines the paramters for the GET request
      var params = {
          limit: 20,
          status: $category
        };
      try {
        if ($scope.query.$.$) {
          params.q = $scope.query.$.$;
        }
      } catch (e) {
      }
      //Make a GET request to the acknowledgement server
      Acknowledgement.query(params, function (resources) {
        for (var i = 0; i < resources.length; i++) {
          if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
            $scope.acknowledgements.push(resources[i]);
          }
        }  //createAcknowledgementMarkers()
      });
    };
    /*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
    $scope.$watch('query.$.$', function (q) {
      if (q) {
        $location.search('q', q);
        Acknowledgement.query({
          q: q,
          limit: q ? q.length : 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
              $scope.acknowledgements.push(resources[i]);
            }
          }
          index = 0;
          changeSelection(index);
        });
      }
    });
    //Loads the next set of data
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        var notification = Notification.display('Retrieving more acknowledgements...', false);
        //Determine parameters for the GET call	
        var params = {
            limit: 50,
            offset: $scope.acknowledgements.length
          };
        if ($scope.query.status) {
          params.status = $scope.query.status;
        }
        //Make a GET request to the server
        Acknowledgement.query(params, function (resources) {
          fetching = false;
          notification.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.acknowledgements.push(resources[i]);
          }
          createAcknowledgementMarkers();
        });
      }
    };
    /*
	 * Navigate to the details page for an acknowledgement
	 */
    $scope.navigate = function (id) {
      $location.path('/order/acknowledgement/' + id);
    };
    /*
	 * Watch for changes in the status of the acknowledgement
	 */
    $scope.$watch('acknowledgements', function (newVal, oldVal) {
      // Callback to run when the acknowledgement is finished updating
      function postUpdate(resp) {
        var notification = Notification.display('Acknowledgement #' + resp.id + ' status updated to \'' + resp.status.toLowerCase() + '\'', 2000);
      }
      if (newVal && oldVal) {
        try {
          for (var i = 0; i < newVal.length; i++) {
            if (newVal[i] && oldVal[i]) {
              if (newVal[i].id === oldVal[i].id) {
                if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
                  var notification = Notification.display('Updating Acknowledgement #' + newVal[i].id + ' status...', false);
                  newVal[i].$update(postUpdate);
                }
              }
            }
          }
        } catch (e) {
          $log.error(e);
        }
      }
    }, true);
    function filter(array) {
      return $filter('filter')(array, $scope.query);
    }
    function changeSelection(i) {
      $scope.safeApply(function () {
        if (currentSelection) {
          currentSelection.$selected = false;
        }
        currentSelection = filter($scope.acknowledgements)[i];
        if (currentSelection) {
          currentSelection.$selected = true;
        }
      });
      var selection = $('.item.selected');
      var container = selection.parents('.outer-container');
      var scrollTop = container.scrollTop();
      var cHeight = container.innerHeight();
      if (scrollTop > selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      } else if (scrollTop + cHeight < selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      }
    }
    var keyboardNav = new KeyboardNavigation();
    keyboardNav.ondown = function () {
      if (index < filter($scope.acknowledgements).length - 1) {
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
      $scope.safeApply(function () {
        $location.path('/order/acknowledgement/' + currentSelection.id);
      });
    };
    keyboardNav.enable();
    $scope.$on('$destroy', function () {
      keyboardNav.disable();
    });
    /*
	 * Map Section
	 */
    var latLng = {}, map, marker, markers = [];
    //Options for the map 
    mapOptions = {
      center: new google.maps.LatLng(13.776239, 100.527884),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROAD
    };
    var styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Function to get zoom and position
    function setMapFocus(latArray, lngArray) {
      var ne = new google.maps.LatLng(Math.max.apply(null, latArray), Math.max.apply(null, lngArray)), sw = new google.maps.LatLng(Math.min.apply(null, latArray), Math.min.apply(null, lngArray));
      var bounds = new google.maps.LatLngBounds(sw, ne);
      map.fitBounds(bounds);
    }
    //Function to create markers for acknowledgements
    function createAcknowledgementMarkers(acknowledgements) {
      acknowledgements = acknowledgements || $scope.acknowledgements;
      var lats = [], lngs = [];
      for (var h = 0; h < markers.length; h++) {
        markers[h].setMap(null);
      }
      markers = [];
      function focusOnMarker() {
        map.panTo(this.getPosition());
        map.setZoom(17);
      }
      for (var i = 0; i < acknowledgements.length; i++) {
        try {
          var address = acknowledgements[i].customer;
          if (address.latitude && address.longitude) {
            //Add to lats and lngs for later calculations 
            lats.push(address.latitude);
            lngs.push(address.longitude);
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(address.latitude, address.longitude),
              map: map,
              title: 'Order #' + acknowledgements.id,
              draggable: false
            });
            //Zoom to marker
            google.maps.event.addListener(marker, 'click', focusOnMarker.bind(marker));
            markers.push(marker);
          }
        } catch (e) {
          $log.error(e);
        }
      }
      setMapFocus(lats, lngs);
    }
    //Initialize map
    map = new google.maps.Map($('#acknowledgement-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //Open map, resize and create markers
    $scope.viewMap = function () {
      $scope.map = true;
      //setTimeout(function () {
      //	google.maps.event.trigger(map, 'resize');
      //}, 1000);
      createAcknowledgementMarkers();
    };
  }
]);
angular.module('employeeApp.services').factory('Fabric', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/fabric/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' },
      add: {
        method: 'POST',
        params: { action: 'add' }
      },
      subtract: {
        method: 'POST',
        params: { action: 'subtract' }
      }
    });
  }
]);
angular.module('employeeApp.directives').directive('fadeLoad', [function () {
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
angular.module('employeeApp').directive('fadeIn', [function () {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {
        element.addClass('fadeIn');
      }
    };
  }]);
angular.module('employeeApp').directive('ecBlur', [function () {
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
angular.module('employeeApp').directive('dragOn', [function () {
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
angular.module('employeeApp.directives').directive('dropOn', [function () {
    function emptyStrFilter(element, index, array) {
      return element !== '';
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
      var preTarget = targetString.split(/\.\w*$/).shift(), targetObj = targetString.split(/\./).pop(), target;
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
      event.originalEvent.dataTransfer.effectAllowed = 'copy';
    }
    return {
      restrict: 'A',
      replace: false,
      scope: {
        'dropOn': '=',
        'onDropAction': '&'
      },
      link: function (scope, element, attrs) {
        element.bind('drop', function (event) {
          preventPropagation(event);
          element.removeClass('drag');
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
            if (attrs.onDropAction) {
              scope.onDropAction({ $data: getData(event) });
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
angular.module('employeeApp').directive('imageDropTarget', [
  '$parse',
  function ($parse) {
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
          var image = { 'url': evt.target.result };
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
          $scope.images ? $scope.images.length = 0 : $scope.images = [];  // jshint ignore:line
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
            if (files[i].type == 'image/png' || files[i].type == 'image/jpeg') {
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
  }
]);
angular.module('employeeApp').directive('beautify', [
  '$filter',
  '$parse',
  function ($filter, $parse) {
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
  }
]);
angular.module('employeeApp.directives').directive('telephone', [
  '$filter',
  '$parse',
  function ($filter, $parse) {
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
  }
]);
angular.module('employeeApp.directives').directive('map', [
  'mapMarker',
  '$log',
  function (mapMarker, $log) {
    //Create the variables to be used
    var latLng = {}, map, marker;
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
          featureType: 'road',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
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
          scope.map.map.setOptions({ styles: styles });
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
  }
]);
angular.module('employeeApp').directive('clickUrl', [function () {
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
angular.module('employeeApp.directives').directive('modal', [
  '$log',
  function ($log) {
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
            scope.modal = { _onhide: undefined };
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
                try {
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
  }
]);
angular.module('employeeApp').controller('OrderShippingCreateCtrl', [
  '$scope',
  'Acknowledgement',
  '$filter',
  '$mdToast',
  'Shipping',
  '$location',
  'scanner',
  '$log',
  function ($scope, Acknowledgement, $filter, $mdToast, Shipping, $location, scanner, $log) {
    var fetchingAck = true;
    $scope.acknowledgements = Acknowledgement.query({ limit: 20 }, function () {
      fetchingAck = false;
    });
    $scope.shipping = new Shipping();
    var ack;
    scanner.onscan = function (code) {
      var re = new RegExp(/^A\-(s+)?/);
      if (re.test(code)) {
        $mdToast.show($mdToast.simple().content('Retrieving Acknowledgement# ' + code.split('-')[1]).delay(0));
        Notification.display('Retrieving Acknowledgement# ' + code.split('-')[1], false);
        Acknowledgement.get({ id: code.split('-')[1] }, function (response) {
          $mdToast.hide();
          var ack = response;
          $scope.shipping.acknowledgement = { id: ack.id };
          $scope.shipping.customer = ack.customer;
          $scope.shipping.products = ack.products;
          $scope.shipping.delivery_date = new Date(ack.delivery_date);
        }, function () {
          $mdToast.show($mdToast.simple().content('Unable to locate Acknowledgement#' + code.split('-')[1]).delay(0));
        });
      }
    };
    $scope.addAcknowledgement = function (ack) {
      $scope.shipping.acknowledgement = { id: ack.id };
      $scope.shipping.customer = ack.customer;
      $scope.shipping.items = ack.items;
      $scope.shipping.delivery_date = new Date(ack.delivery_date);
      for (var i = 0; i < $scope.shipping.items.length; i++) {
        try {
          $scope.shipping.items[i].quantity = Number($scope.shipping.items[i].quantity);
          $scope.shipping.items[i].width = Number($scope.shipping.items[i].width || 0);
          $scope.shipping.items[i].depth = Number($scope.shipping.items[i].depth || 0);
          $scope.shipping.items[i].height = Number($scope.shipping.items[i].height || 0);
        } catch (e) {
          $log.warn(e);
        }
      }
      //Hide Customer Panel
      $scope.showAck = false;
    };
    $scope.$watch('query', function (q) {
      if (q) {
        Acknowledgement.query({
          limit: 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
              $scope.acknowledgements.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetchingAck) {
        fetchingAck = true;
        Acknowledgement.query({
          offset: $scope.acknowledgements.length,
          limit: 20
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.acknowledgements.push(resources[i]);
          }
          fetchingAck = false;
        });
      }
    };
    $scope.create = function () {
      if ($scope.isValidated()) {
        $mdToast.show($mdToast.simple().content('Creating shippping manifest...').hideDelay(0));
        $scope.shipping.$save(function (resource) {
          $mdToast.show($mdToast.simple().content('Shipping manifest created').hideDelay(2000));
          if (resource.pdf.url) {
            window.open(resource.pdf.url);
          }
          $location.path('/order/shipping');
        }, function () {
          $mdToast.show($mdToast.simple().content('There was an error in creating the shipping manifest').hideDelay(0));
        });
      } else {
        $mdToast.show($mdToast.simple().content('The Order is Not Complete'));
      }
    };
    $scope.removeProduct = function (index) {
      $scope.shipping.items.splice(index, 1);
    };
    //Validations
    $scope.isValidated = function () {
      /*
         * The following are test to see if
         * The property has already been added
         */
      if (!$scope.shipping.acknowledgement) {
        return false;
      }
      if (!$scope.shipping.delivery_date) {
        return false;
      }
      //Return true for form validated
      return true;
    };
    $scope.$on('$destroy', function () {
      scanner.onscan = null;
    });
  }
]);
/*
 * All shipped orders view
 */
angular.module('employeeApp').controller('OrderShippingViewCtrl', [
  '$scope',
  'Shipping',
  '$filter',
  '$mdToast',
  function ($scope, Shipping, $filter, $mdToast) {
    /*
	 * Vars and flags
	 */
    var fetching = true;
    $mdToast.show($mdToast.simple().content('Loading shipping manifests...').hideDelay(0));
    /*
	 * Get an array of shipping manifests from the server
	 */
    $scope.shippingList = Shipping.query(function (resources) {
      fetching = false;
      $mdToast.hide();
    });
    /*
	 * Search the server 
	 * 
	 * The controller will send a GET request to the server
	 * with the query string whenever the "$scope.query" changes
	 * and when it is not undefined
	 */
    $scope.$watch('query', function (q) {
      if (q) {
        Shipping.query({
          limit: 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.shippingList.indexOfById(resources[i].id) == -1) {
              $scope.shippingList.push(resources[i]);
            }
          }
        });
      }
    });
    /*
	 * Load more shipping manifests
	 * 
	 * The function will request more manifests based on the current number 
	 * and the offset. The number of new manifests is limited to 20, which can be 
	 * changed via the parameters. This is intended to be used in conjuction with 
	 * the "on-scroll-end" directive
	 */
    $scope.loadNext = function () {
      if (!fetching) {
        $mdToast.show($mdToast.simple().content('Loading more shipping manifests...').hideDelay(0));
        Shipping.query({
          offset: $scope.shippingList.length,
          limit: 20
        }, function (resources) {
          $mdToast.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.shippingList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('OrderShippingTodayCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.startDate.setHours(0, 0, 0);
    $scope.endDate = new Date();
    $scope.endDate.setHours(0, 0, 0);
    $scope.endDate.setDate($scope.endDate.getDate() + 1);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp').controller('OrderShippingWeekCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.endDate.setDate($scope.endDate.getDate() + 7);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp.services').factory('Shipping', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/shipping/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('AdministratorGroupAddCtrl', [
  '$scope',
  'Group',
  'Permission',
  '$location',
  function ($scope, Group, Permission, $location) {
    $scope.permissions = Permission.query({ limit: 0 });
    $scope.group = new Group();
    $scope.group.permissions = [];
    /*
	 * Saves the group to the server
	 */
    $scope.save = function () {
      /*
		* Adds selected permissions to the permissions
		* allowed for this group
		* Runs through all the permissions, and checks the '$checked'
		* attribute. If it is positive then that permission is added
		* to the permissions for the gorup
		*/
      for (var i = 0; i < $scope.permissions; i++) {
        if ($scope.permissions[i].$checked) {
          $scope.group.permissions.push($scope.permissions[i]);
        }
      }
      //Post the data to the server
      $scope.group.$create(function () {
        //Return to list page after successful creation
        $location.path('/administrator/group');
      });
    };
  }
]);
angular.module('employeeApp').controller('AdministratorGroupViewCtrl', [
  '$scope',
  'Group',
  function ($scope, Group) {
    //Requests groups from the server
    $scope.groups = Group.query({ limit: 0 });
  }
]);
angular.module('employeeApp').controller('AdministratorGroupDetailsCtrl', [
  '$scope',
  'Group',
  'Permission',
  '$routeParams',
  '$location',
  function ($scope, Group, Permission, $routeParams, $location) {
    /*
     * Return the index of the first
     * occurence of the id in the list
     */
    function indexById(list, item) {
      if (!list.hasOwnProperty('length')) {
        throw new TypeError('Expecting an Array');
      }
      if (typeof item == 'object') {
        if (!item.hasOwnProperty('id')) {
          throw new TypeError('Expecting an id property for argument 2');
        }
      }
      //Set the id var
      var id = typeof item == 'object' ? item.id : item;
      for (var i in list) {
        if (list[i].id == id) {
          return i;
        }
      }
      return -1;
    }
    /*
     * Marks all items in list1 with $checked = true
     * property if it is in list 2
     */
    function merge(list1, list2) {
      for (var i in list1) {
        for (var h in list2) {
          if (list1[i].id == list2[h].id) {
            list1[i].$checked = true;
          }
        }
      }
    }
    /*
     * Calls for updated verions of the resources
     */
    $scope.permissionList = Permission.query({
      limit: 0,
      page_size: 10000
    }, function () {
      merge($scope.permissionList, $scope.group.permissions);
    });
    $scope.group = Group.get({ 'id': $routeParams.id }, function () {
      merge($scope.permissionList, $scope.group.permissions);
    });
    /*
	 * Implement watch on group
	 */
    /*
     * Removes or adds a permission to the group
     * permissions based on whether or not 
     */
    $scope.updatePermission = function (permission) {
      if (permission.$checked) {
        if (indexById($scope.group.permissions, permission) == -1) {
          $scope.group.permissions.push(angular.copy(permission));
        }
      } else {
        var index = indexById($scope.group.permissions, permission);
        if (index > -1) {
          $scope.group.permissions.splice(index, 1);
        }
      }
      var group = angular.copy($scope.group);
      group.$update(function (response) {
        angular.extend($scope.group, response);
      });
    };
    /*
     * Deletes the group
     */
    $scope.remove = function () {
      $scope.group.$delete(function () {
        $location.path('/groups');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.group.$update();
    });
  }
]);
angular.module('employeeApp').controller('AdministratorUserDetailsCtrl', [
  '$scope',
  'Group',
  'User',
  '$routeParams',
  '$location',
  '$http',
  'Notification',
  '$log',
  function ($scope, Group, User, $routeParams, $location, $http, Notification, $log) {
    var destroyed = false;
    function indexById(list, item) {
      if (!list.hasOwnProperty('length')) {
        throw new TypeError('Expecting an Array');
      }
      if (typeof item == 'object') {
        if (!item.hasOwnProperty('id')) {
          throw new TypeError('Expecting an id property for argument 2');
        }
      }
      //Set the id var
      var id = typeof item == 'object' ? item.id : item;
      for (var i in list) {
        if (list[i].id == id) {
          return i;
        }
      }
      return -1;
    }
    function merge(list1, list2) {
      for (var i in list1) {
        for (var h in list2) {
          if (list1[i].id == list2[h].id) {
            list1[i].$checked = true;
          }
        }
      }
    }
    $scope.groupList = Group.query({ limit: 0 }, function () {
      merge($scope.groupList, $scope.user.groups);
    });
    $scope.user = User.get({ 'id': $routeParams.id }, function () {
      merge($scope.groupList, $scope.user.groups);
    });
    /*
	 * Add Profile Image
	 * 
	 * Recieves the image data as an argument. The data is then applied 
	 * to the user and the user is saved
	 */
    $scope.addImage = function (imageData) {
      $scope.showAddImage = false;
      $scope.user.image = imageData.hasOwnProperty('data') ? imageData.data : imageData;
      $scope.user.$update();
    };
    $scope.changePassword = function () {
      var url = '/api/v1/user/' + $scope.user.id + '/change_password';
      $http.post(url, $scope.password).success(function (e) {
        Notification.display('Password successfully changed');
        $scope.password = {};
        $scope.showChangePassword = false;
      }).error(function (err) {
        $log.error(err);
      });
    };
    $scope.updateGroup = function (group) {
      if (group.$checked) {
        if ($scope.user.groups.indexOfById(group.id) === -1) {
          $scope.user.groups.push(angular.copy(group));
        }
      } else {
        var index = $scope.user.groups.indexOfById(group.id);
        if (index != -1) {
          $scope.user.groups.splice(index, 1);
        }
      }
      //Save the model
      Notification.display('Updating ' + $scope.user.username + '...', false);
      $scope.user.$update(function (response) {
        Notification.display($scope.user.username + ' updated.');
      });
    };
    $scope.remove = function () {
      if ($scope.currentUser.hasPermission('delete_user')) {
        Notification.display('Deleting user ' + $scope.user.username + '...', false);
        $scope.user.$delete(function () {
          Notification.display($scope.user.username + ' deleted.');
          destroyed = true;
          $location.path('/administrator/user');
        });
      }
    };
    $scope.update = function () {
      $scope.user.$update();
    };
    $scope.$on('$destroy', function () {
      if (!destroyed) {
        $scope.user.$update();
      }
    });
  }
]);
angular.module('employeeApp').controller('AdministratorUserAddCtrl', [
  '$scope',
  'User',
  'Group',
  '$location',
  function ($scope, User, Group, $location) {
    $scope.user = new User();
    $scope.user.groups = [];
    $scope.groups = Group.query({ limit: 0 }, function () {
    });
    /*
	 * Add Profile Image
	 * 
	 * Recieves the image data as an argument. The data is then applied 
	 * to the user and the user is saved
	 */
    $scope.addImage = function (imageData) {
      $scope.user.image = imageData.hasOwnProperty('data') ? imageData.data : imageData;
    };
    $scope.save = function () {
      //Validates the form
      if ($scope.form.$valid) {
        /*
			* Adds groups to the user
			* 
			* Runs through all the groups and checks if 
			* it hs been checked off. Groups that have been 
			* checked off are then added to the user groups
			*/
        for (var i = 0; i < $scope.groups.length; i++) {
          if ($scope.groups[i].$$checked) {
            $scope.user.groups.push(angular.copy($scope.groups[i]));
          }
        }
        /*
			 * Saves the user by sending a POST request to the server
			 */
        $scope.user.$create(function () {
          $location.path('/administrator/user');
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('AdministratorUserViewCtrl', [
  '$scope',
  'User',
  function ($scope, User) {
    //Request users from the server
    $scope.users = User.query({ limit: 0 });
  }
]);
angular.module('employeeApp.services').factory('Group', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/group/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('User', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/user/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('SupplyFabricViewCtrl', [
  '$scope',
  'Fabric',
  'Notification',
  '$log',
  function ($scope, Fabric, Notification, $log) {
    var fetching = true;
    $scope.fabrics = Fabric.query(function () {
      fetching = false;
    });
    /*
     * Search the server
     * 
     * The controller will send a GET query to the server
     * with the query string as a paramter whenever the 
     * 'scope.query' changes. 
     * 
     * The results are then added to the '$scope.fabrics', if it 
     * is not already in the list, which is matched by the item id
     */
    $scope.$watch('query', function (q) {
      if (q) {
        Fabric.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
              $scope.fabrics.push(resources[i]);
            }
          }
        });
      }
    });
    /*
	* Load more fabrics
	* 
	* This function will load more fabrics based on the 
	* current number of fabrics in the list, which becomes the offset. 
	* 
	* Note: The fabrics are not checked for duplicaiton before being added
	* to the list
	*/
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        Notification.display('Loading more fabrics...', false);
        Fabric.query({
          offset: $scope.fabrics.length,
          limit: 50
        }, function (resources) {
          fetching = false;
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
              $scope.fabrics.push(resources[i]);
            }
          }
        }, function (e) {
          $log.error(JSON.stringify(e));
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('SupplyFabricAddCtrl', [
  '$scope',
  'Supplier',
  'Fabric',
  '$location',
  'Notification',
  'FileUploader',
  '$log',
  function ($scope, Supplier, Fabric, $location, Notification, FileUploader, $log) {
    $scope.suppliers = Supplier.query({ limit: 0 });
    $scope.fabric = new Fabric();
    //Tooltips
    $scope.supplierText = 'Choose a Supplier for this Fabric';
    $scope.referenceText = 'Enter the Supplier\'s Reference Number';
    $scope.lengthText = 'Enter the Current Length of this Fabric in yards';
    $scope.widthText = 'Enter the Width in millimeters';
    $scope.patternText = 'Enter the Pattern of this Fabric';
    $scope.colorText = 'Enter the Color of this Fabric';
    $scope.cost = 'Enter the Cost per Yard of this Fabric';
    //Methods
    //Add Fabric
    $scope.save = function () {
      //Display saving message
      Notification.display('Saving Fabric...', false);
      //Checks the form is valid
      if ($scope.form.$valid) {
        //save to database
        $scope.fabric.$create(function () {
          Notification.display('Fabric Saved');
          $location.path('supply/fabric');
        }, function (e) {
          $log.error(JSON.stringify(e));
        });
      }
    };
    //Upload Image
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/supply/image/');
      promise.then(function (dataObj) {
        Notification.display('Image Uploaded');
        $scope.fabric.image = dataObj.data;
      }, function (e) {
        $log.error(JSON.stringify(e));
        Notification.display('There was an error in uploading the file');
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFabricDetailsCtrl', [
  '$scope',
  'Fabric',
  '$routeParams',
  '$location',
  'Notification',
  'SupplyLog',
  '$mdToast',
  'FileUploader',
  '$log',
  function ($scope, Fabric, $routeParams, $location, Notification, SupplyLog, $mdToast, FileUploader, $log) {
    $scope.fabric = Fabric.get({ 'id': $routeParams.id });
    $scope.logs = SupplyLog.query({ supply_id: $routeParams.id });
    //Create fabric actions
    var DEFAULT_ACTIONS = [
        'reserve',
        'add',
        'subtract',
        'reset'
      ];
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    $scope.quantityNeeded = function () {
      var qty = Number($scope.fabric.quantity) - Number($scope.fabric.reserved);
      var value = qty < 0 ? Math.abs(qty) : 'Sufficient fabric in stock.';
      return value;
    };
    $scope.add = function () {
      $scope.fabric.$add({ quantity: $scope.quantity }, function () {
      });
      $scope.showAdd = false;
      $scope.quantity = null;
    };
    $scope.subtract = function () {
      $scope.fabric.$subtract({ quantity: $scope.quantity }, function () {
      });
      $scope.showSubtract = false;
      $scope.quantity = null;
    };
    $scope.remove = function () {
      //Notify
      Notification.display('Deleting Fabric...');
      //Ajax call to delete
      $scope.fabric.$delete(function () {
        //Notify
        Notification.display('Fabric Deleted');
        //Reroute to view page
        $location.path('/fabric');
      });
    };
    //Upload Image
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      //Notify of uploading image        
      var promise = FileUploader.upload($scope.images[0], '/api/v1/supply/image/');
      promise.then(function (dataObj) {
        Notification.display('Image Uploaded');
        $scope.fabric.image = dataObj.data;
        $scope.fabric.$update(function () {
          Notification.display('Fabric updated');
        });
      }, function (e) {
        Notification.display('There was an error in uploading the file');
      });
    };
    $scope.update = function () {
      Notification.display('Updating Fabric...', false);
      $scope.fabric.$update(function () {
        Notification.display('Fabric Updated');
      }, function (e) {
        $log.error(JSON.stringify(e));
      });
    };
    $scope.updateLog = function ($index) {
      var log = $scope.logs[$index];
      if (log.action == 'RESERVE' || log.action == 'CUT' || log.action == 'CANCEL') {
        $mdToast.show($mdToast.simple().position('top right').content('Updating ' + $scope.fabric.description + ' for Ack #' + log.acknowledgement_id + '.').hideDelay(0));
        $scope.logs[$index].$update(function (response) {
          $log.debug(JSON.stringify(response));
          if (response.supply) {
            $scope.fabric.quantity = response.supply.quantity;
          }
          $mdToast.hide();
          $mdToast.show($mdToast.simple().position('top right').content('Updated.').hideDelay(2000));
        }, function (e) {
          $log.error(JSON.stringify(e));
          $mdToast.hide();
          $mdToast.show($mdToast.simple().position('top right').content(e).hideDelay(0));
        });
        Fabric.get({ 'id': $routeParams.id }, function (resp) {
          $scope.fabric.reserved = resp.reserved;
        });
      }
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamDetailsCtrl', [
  '$scope',
  'Foam',
  '$routeParams',
  '$location',
  'Notification',
  function ($scope, Foam, $routeParams, $location, Notification) {
    //Poller.poll($scope, function(){
    $scope.foam = Foam.get({ 'id': $routeParams.id });
    //});
    //Uploads Profie Image
    $scope.upload = function () {
      //display notification
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      //clear the form
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('supply/' + $scope.foam.id + '/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          //display success mesage
          Notification.display('Image Updated');
          $scope.foam.image = {};
          angular.copy(responseData, $scope.foam.image);
          $scope.foam.$save();
          //Set new profile pic
          $scope.profileImageUrl = $scope.foam.image.url;
          //Clear upload images and clear previews
          $scope.imagePreviews = null;
          $scope.images = null;
          $scope.$apply();
        }
      });
    };
    $scope.remove = function () {
      $scope.foam.$delete(function () {
        $location.path('/foam');
      });
      $scope.foamList = Foam.query();
    };
    $scope.update = function () {
      Notification.display('Updating Foam...', false);
      $scope.foam.$save(function () {
        Notification.display('Foam Updated');
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamAddCtrl', [
  '$scope',
  'Foam',
  'Supplier',
  '$location',
  'Notificaiton',
  function ($scope, Foam, Supplier, $location, Notification) {
    $scope.supplierList = Supplier.query();
    $scope.foam = new Foam();
    //Methods
    //Add Lumber
    $scope.save = function () {
      $scope.foam.$save(function () {
        $location.path('/foam');
      });
    };
    //Upload Image
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      //clear the form
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Updated');
          $scope.foam.image = $scope.foam.image || {};
          angular.copy(responseData, $scope.foam.image);
          $scope.$apply();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyFoamViewCtrl', [
  '$scope',
  'Foam',
  function ($scope, Foam) {
    $scope.foamList = Foam.query();
  }
]);
angular.module('employeeApp.services').factory('Foam', [
  'eaResource',
  function (eaResource) {
    return eaResource('foam/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').controller('AccountingTransactionViewCtrl', [
  '$scope',
  'Transaction',
  function ($scope, Transaction) {
    $scope.transactionList = Transaction.poll().query();
    $scope.$on('$destroy', function () {
      Transaction.stopPolling();
    });
  }
]);
angular.module('employeeApp').controller('AccountingTransactionAddCtrl', [
  '$scope',
  'Transaction',
  'Notification',
  '$location',
  'Contact',
  function ($scope, Transaction, Notification, $location, Contact) {
    $scope.transaction = new Transaction();
    $scope.contactList = Contact.query();
    $scope.save = function () {
      Notification.display('Saving Transaction...', false);
      $scope.transaction.$save(function () {
        Notification.display('Transaction Saved');
        $location.path('/accounting/transaction');
      });
    };
  }
]);
angular.module('employeeApp').controller('AccountingTransactionDetailsCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp.services').factory('Transaction', [
  'eaResource',
  function (eaResource) {
    return eaResource('transaction/:id', { id: '@id' });
  }
]);
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
angular.module('employeeApp.services').factory('eaStorage', [function () {
    //Factory Function 
    function factory(namespace) {
      //compare 2 items and see if the first items
      //has the same keys and values of second item
      function compare(item, arg) {
        var aKey;
        for (aKey in arg) {
          if (item.hasOwnProperty(aKey)) {
            if (item[aKey] !== arg[aKey]) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      }
      function parseDate(obj) {
        if (obj.hasOwnProperty('delivery_date')) {
          obj.delivery_date = new Date(obj.delivery_date);
        }
        if (obj.hasOwnProperty('time_created')) {
          obj.time_created = new Date(obj.time_created);
        }
        if (obj.hasOwnProperty('last_login')) {
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
      storage.__defineGetter__('length', function () {
        return 'ok';  //Object.keys(this.collection).length; 
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
      storage.prototype.__save__ = function (obj) {
        //Checks if the obj has an id
        if (obj.hasOwnProperty('id')) {
          this.collection[obj.id] = obj;
        } else {
        }
      };
      /*
		* Save to Local Storage
		* 
		* Stringifies the item and then saves it to 
		* the local storage as a string. The key is the first
		* variable while the data is the second variable
		*/
      storage.prototype.__saveToStorage__ = function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
      };
      /*
		* Load from Local Storage
		* 
		* The function will retrieve an item from the local storage. 
		* The data is then parsed by the JSON module before being
		* returned.
		*/
      storage.prototype.__loadFromStorage__ = function (key) {
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
      storage.prototype.query = function (arg) {
        if (typeof arg === 'object') {
          var data = [], key;
          for (key in this.collection) {
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
      storage.prototype.save = function (obj) {
        var i;
        if (Object.prototype.toString.call(obj) === '[object Array]') {
          for (i in obj) {
            this.__save__(obj[i]);
          }
        } else {
          this.__save__(obj);
        }
        this.__saveToStorage__(this.namespace, this.collection);
      };
      //Get an obj by id
      storage.prototype.get = function (id) {
        return this.collection[id] ? parseDate(this.collection[id]) : null;
      };
      //Iterate through all the items in the collecion
      storage.prototype.iterate = function (callback) {
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
      storage.prototype.remove = function (arg) {
        //Establish id or extract it
        var id = typeof arg === 'object' ? arg.hasOwnProperty('id') ? arg.id : null : arg;
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
angular.module('employeeApp.services').factory('eaResource', [
  'eaStorage',
  '$rootScope',
  '$http',
  '$q',
  '$parse',
  '$resource',
  '$timeout',
  'eaIndexedDB',
  'Notification',
  function (eaStorage, $rootScope, $http, $q, $parse, $resource, $timeout, eaIndexedDB, Notification) {
    function ResourceFactory(url, paramDefaults, actions) {
      //Default methods available to the public
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'update': { method: 'PUT' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, oResource = new $resource(url, paramDefaults, actions),
        //jshint ignore:line
        storage = eaStorage(url.split(/\//g)[0]), db = eaIndexedDB(url), value, previousAction, previousParams, last_checked = true, poll = true, getter = function (obj, path) {
          return $parse(path)(obj);
        };
      /*Helper Functions*/
      function extractParams(data, actionParams) {
        var ids = {};
        actionParams = angular.extend({}, paramDefaults, actionParams);
        angular.forEach(actionParams, function (value, key) {
          if (angular.isFunction(value)) {
            value = value();
          }
          ids[key] = value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }
      /*
         * Locates the index of an object
         * which matches the supplied id
         */
      function indexOfId(array, id) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].hasOwnProperty('id')) {
            if (array[i].id == id) {
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
      function Resource(value) {
        angular.extend(this, value || {});
        this.$$poll = false;
        this.$$last_checked = null;
        this.$$timeout = null;
        this.$$date = true;
      }
      /*
         * Set Date for when doing mock tests
         */
      Resource.disableLastChecked = function () {
        last_checked = false;
      };
      Resource.prototype.disableLastChecked = Resource.disableLastChecked;
      /*
         * Create a polling function. When the polling function 
         * is call the poll value will be set to true
         */
      Resource.poll = function () {
        this.$$poll = true;
        poll = true;
        return this;
      };
      Resource.prototype.poll = Resource.poll;
      Resource.stopPolling = function () {
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
      angular.forEach(actions, function (action, name) {
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        //Default methods
        Resource[name] = function (a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = angular.noop;
          var error = null;
          var promise;
          /* jshint ignore: start */
          switch (arguments.length) {
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
              error = a3;  //fallthrough
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (angular.isFunction(a1))
              success = a1;
            else if (hasBody)
              data = a1;
            else
              params = a1;
            break;
          case 0:
            break;
          default:
            throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
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
          if (action.isArray) {
            value = angular.isArray(value) ? value || [] : [];
          } else {
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
          if (action.method == 'GET' && !this.$$last_checked) {
            if (db.ready) {
              if (action.isArray) {
                db.query(function (data) {
                  var fn = function () {
                    for (var key in data) {
                      //Loop for existing item in value
                      var index = indexOfId(value, data[key].id);
                      if (index != -1) {
                        angular.copy(data[key], value[index]);
                      } else {
                        try {
                          value.push(new Resource(data[key]));
                        } catch (e) {
                          console.warn(e.stack);
                        }
                      }
                    }
                    (success || angular.noop)(value);
                  };
                  if ($rootScope.$$phase == '$apply' || $rootScope.$$phase == '$digest') {
                    fn();
                  } else {
                    $rootScope.$apply(function () {
                      fn();
                    });
                  }
                });
              } else {
                db.get(params.id, function (response) {
                  var fn = function () {
                    angular.copy(new Resource(response), value);
                    (success || angular.noop)(value);
                  };
                  if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                    fn();
                  } else {
                    $rootScope.$apply(function () {
                      fn();
                    });
                  }
                });
              }
            } else {
              if (action.isArray) {
                db.onready = function () {
                  db.query(function (data) {
                    var fn = function () {
                      for (var key in data) {
                        //Loop for existing item in value
                        var index = indexOfId(value, data[key].id);
                        if (index != -1) {
                          angular.copy(data[key], value[index]);
                        } else {
                          try {
                            value.push(new Resource(data[key]));
                          } catch (e) {
                            console.warn(e.stack);
                          }
                        }
                      }
                      (success || angular.noop)(value);
                    };
                    if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                      fn();
                    } else {
                      $rootScope.$apply(function () {
                        fn();
                      });
                    }
                  });
                };
              } else {
                db.onready = function () {
                  db.get(params.id, function (response) {
                    var fn = function () {
                      angular.copy(new Resource(response), value);
                      (success || angular.noop)(value);
                    };
                    if ($rootScope.$$phase == '$digest' || $rootScope.$$phase == '$apply') {
                      fn();
                    } else {
                      $rootScope.$apply(function () {
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
          if (this.$$last_checked !== undefined && action.method == 'GET') {
            angular.extend(params, { last_modified: this.$$last_checked.toISOString() });
          }
          /*
                if(storage.getLastModified() && action.method == "GET"){
                    angular.extend(params, {last_modified:storage.getLastModified().toISOString()});
                }
                */
          var oPromise = oResource[name](params, data, function (response) {
              /*
                     * If the hasBody is positive, it indicates this is a child
                     * resource and there for the resource it self should be update
                     * with the data because it is currently presented tot he user
                     */
              if (action.method == 'DELETE' || hasBody) {
                angular.extend(this, response);
              }
              /*
                     * If the method is GET it indicates that the user has requested 
                     * data and the resource is a gateway and it itself is no the the
                     * data holder. There for the reference that is returned to the user 
                     * should be update with either the array of items or the item data
                     * respecitvely.
                     */
              if (action.method === 'GET') {
                if (action.isArray || angular.isArray(response)) {
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
                    if (index > -1) {
                      /*
                                    * In order not to waste resource we
                                    * first check if the two items are equal or not.
                                    * If they are not equal then we perform an extend
                                    */
                      if (!angular.equals(value[index], response[i])) {
                        angular.extend(value[index], new Resource(response[i]));
                        if (value[index].deleted) {
                          value.splice(index, 1);
                          var item = [];
                          item.splice(index);
                        }
                      }
                    } else {
                      //Add the new item
                      if (!response[i].deleted) {
                        try {
                          value.push(new Resource(response[i]));
                        } catch (e) {
                          console.warn(e.stack);
                        }
                      }
                    }
                  }
                } else {
                  //Upate the reference with the data
                  if (response.deleted) {
                    angular.copy({}, value);
                    Notification.display('This resource no longer exists.');
                  } else {
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
              if (db.ready) {
                action.method == 'DELETE' ? db.remove(params) : hasBody ? db.save(this) : db.save(value);  // jshint ignore:line
              }
              //action.method == "DELETE" ? storage.remove(params) : hasBody ? storage.save(this) : storage.save(value);  
              /*
                     * Last checked
                     */
              if (last_checked) {
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
              if (this.$$poll && action.method == 'GET') {
                //Call timeout
                this.$$timeout = $timeout(function () {
                  //Create binded fn
                  var request = Resource[name].bind(this);
                  //call binded fn
                  request(params, data, success, error);
                }.bind(this), 30000);
              }
              //Run success call back
              success(response);
            }.bind(this), function (e) {
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
        Resource.prototype['$' + name] = function (a1, a2, a3) {
          var params = extractParams(this), success = angular.noop, error;
          switch (arguments.length) {
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
            throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });
      return Resource;
    }
    return ResourceFactory;
  }
]);
angular.module('employeeApp.services').factory('scanner', [
  '$location',
  '$rootScope',
  '$timeout',
  function ($location, $rootScope, $timeout) {
    var code = '', codes = '', unparsedStr = '', standardCodes = [
        [
          /^PO-\d+$/,
          '/order/purchase_order/'
        ],
        [
          /^A-\d+$/,
          '/order/acknowledgement/'
        ],
        [
          /^AI-\d+$/,
          '/order/acknowledgement/item/'
        ],
        [
          /^S-\d+$/,
          '/order/shipping/'
        ]
      ], customCodes = [], parseStandardCodes = true, timeoutVar = 0, re = /^METROLOGICK07[A-Z]\-\d+$/, codeRe = /[A-Z]\-\d+$/;
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
      if (96 <= key && key <= 105 || 48 <= key && key <= 90) {
        letter = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
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
        this._activeParse = true;  /*
		 * Checks if the character is the end code for the scanner.
		 * If it is, then turn off the parse switch, send the code to dispatch,
		 * and reset the code variable
		 */
      } else if (evt.altKey && evt.keyCode == 71) {
        evt.preventDefault();
        this._activeParse = false;
        this._dispatch(code);
        code = '';  /*
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
      if (96 <= key && key <= 105 || 48 <= key && key <= 90) {
        var letter = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
        code += letter;
      } else if (key === 189) {
        code += '-';
      }
    };
    Scanner.prototype._dispatch = function (code) {
      codes = code.split('-');
      if (parseStandardCodes) {
        for (var i = 0; i < standardCodes.length; i++) {
          if (standardCodes[i][0].test(code)) {
            codes = code.split('-');
            /* jshint ignore:start */
            $rootScope.safeApply(function () {
              $location.path(standardCodes[i][1] + codes[1]);
            });  /* jshint ignore:end */
          }
        }
      }
      for (var h = 0; h < customCodes.length; h++) {
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
      angular.element(document.body).off('keydown', this.f);
      this.enabled = false;
    };
    Scanner.prototype.disableStandard = function () {
      parseStandardCodes = false;
    };
    Scanner.prototype.enableStandard = function () {
      parseStandardCodes = true;
    };
    Scanner.prototype.register = function (re, fn) {
      customCodes.push([
        re,
        fn
      ]);
    };
    Scanner.deregister = function (re) {
      for (var i = 0; i < customCodes.length; i++) {
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
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementDetailsCtrl', [
  '$scope',
  'Acknowledgement',
  '$routeParams',
  '$http',
  '$window',
  'Notification',
  'FileUploader',
  'Project',
  '$mdDialog',
  'Fabric',
  function ($scope, Acknowledgement, $routeParams, $http, $window, Notification, FileUploader, Project, $mdDialog, Fabric) {
    //Show system notification
    var notification = Notification.display('Retrieving acknowledgement...', false);
    //Set Vars
    $scope.showCal = false;
    //GET request server for Acknowledgements
    $scope.acknowledgement = Acknowledgement.get({
      'id': $routeParams.id,
      'pdf': true
    }, function () {
      notification.hide();
      //Convert string into numbers for quantity and unit_price and fabric quantity
      for (var i = 0; i < $scope.acknowledgement.items.length; i++) {
        $scope.acknowledgement.items[i].quantity = Number($scope.acknowledgement.items[i].quantity);
        $scope.acknowledgement.items[i].unit_price = Number($scope.acknowledgement.items[i].unit_price);
        $scope.acknowledgement.items[i].fabric_quantity = Number($scope.acknowledgement.items[i].fabric_quantity);
        //Convert string into numbers for pillow fabric quantity
        for (var h = 0; h < $scope.acknowledgement.items[i].pillows.length; h++) {
          $scope.acknowledgement.items[i].pillows[h].fabric_quantity = Number($scope.acknowledgement.items[i].pillows[h].fabric_quantity);
        }
      }
      //Reconcile the project so that it is shown to the user
      if ($scope.projects.length > 0 && $scope.acknowledgement.project) {
        var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
        $scope.acknowledgement.project = $scope.projects[index];
      }
    });
    $scope.projects = Project.query({
      limit: 0,
      page_size: 1000
    }, function () {
      //Reconcile the project so that it is shown to the user
      if ($scope.acknowledgement.id && $scope.acknowledgement.project) {
        var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
        $scope.acknowledgement.project = $scope.projects[index];
      }
    });
    //get all fabrics
    $scope.fabrics = Fabric.query({
      limit: 0,
      page_size: 1000
    });
    //Request pdf for acknowledgements from server
    $scope.getPDF = function (type) {
      try {
        var address = $scope.acknowledgement.pdf[type.toLowerCase()];
        $window.open(address);
      } catch (e) {
        var message = 'Missing ' + type + ' pdf for Acknowledgement #' + $scope.acknowledgement.id;
        Notification.display(message, false);
        throw new Error(message);
      }
    };
    //Request log data for acknowledgement
    $scope.viewLog = function () {
      $http.get('acknowledgement/' + $scope.acknowledgement.id + '/log').success(function (data) {
        angular.forEach(data, function (log) {
          $scope.logs = $scope.logs || [];
          $scope.logs.push(log);
          $scope.showLog = true;
        });
      });
    };
    $scope.addFiles = function (files) {
      $scope.acknowledgement.files = $scope.acknowledgement.files || [];
      /* jshint ignore:start */
      for (var i = 0; i < files.length; i++) {
        $scope.acknowledgement.files.push({ filename: files[i].name });
        var promise = FileUploader.upload(files[i], '/api/v1/acknowledgement/file/');
        promise.then(function (result) {
          var data = result.data || result;
          for (var h = 0; h < $scope.acknowledgement.files.length; h++) {
            if (data.filename == $scope.acknowledgement.files[h].filename) {
              angular.extend($scope.acknowledgement.files[h], data);
            }
          }
          $scope.acknowledgement.$update();
        }, function () {
        });
      }  /* jshint ignore:end */
    };
    // Change Fabric
    $scope.changeFabric = function ($index) {
      $mdDialog.show({
        templateUrl: 'views/templates/change-fabric.html',
        controllerAs: 'ctrl',
        locals: {
          item: $scope.acknowledgement.items[$index],
          fabrics: $scope.fabrics
        },
        controller: 'DialogsChangeFabricCtrl',
        bindToController: true
      });
    };
    //Save updates to the server
    $scope.save = function () {
      var notification = Notification.display('Saving acknowledgement...', false);
      $scope.acknowledgement.$update(function (response) {
        notification.hide();
        Notification.display('Acknowledgement ' + $scope.acknowledgement.id + ' saved.', 2000);
        //Reconcile the projects so that the differences are shown the user
        var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
        $scope.acknowledgement.project = $scope.projects[index];
        //Convert string into numbers for quantity and unit_price and fabric quantity
        for (var i = 0; i < $scope.acknowledgement.items.length; i++) {
          $scope.acknowledgement.items[i].quantity = Number($scope.acknowledgement.items[i].quantity);
          $scope.acknowledgement.items[i].unit_price = Number($scope.acknowledgement.items[i].unit_price);
          $scope.acknowledgement.items[i].fabric_quantity = Number($scope.acknowledgement.items[i].fabric_quantity);
          //Convert string into numbers for pillow fabric quantity
          for (var h = 0; h < $scope.acknowledgement.items[i].pillows.length; h++) {
            $scope.acknowledgement.items[i].pillows[h].fabric_quantity = Number($scope.acknowledgement.items[i].pillows[h].fabric_quantity);
          }
        }
      }, function () {
        Notification.display('Failed to save acknowledgement ' + $scope.acknowledgement.id, false);
      });
    };
  }
]);
angular.module('employeeApp').directive('scanner', [
  '$location',
  '$rootScope',
  function ($location, $rootScope) {
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
          if (96 <= key && key <= 105 || 48 <= key && key <= 90) {
            var letter = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
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
  }
]);
angular.module('employeeApp.services').factory('dateParser', [
  '$q',
  function ($q) {
    function formatter(obj) {
      if (obj.hasOwnProperty('delivery_date')) {
        obj.delivery_date = new Date(obj.delivery_date);
      }
      if (obj.hasOwnProperty('time_created')) {
        obj.time_created = new Date(obj.time_created);
      }
      if (obj.hasOwnProperty('last_login')) {
        obj.last_login = new Date(obj.last_login);
      }
      return obj;
    }
    return {
      'response': function (response) {
        try {
          var data = response.data;
          if (angular.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
              try {
                data[i] = formatter(data[i]);
              } catch (e) {
              }
            }
          } else if (angular.isObject(data)) {
            data = formatter(data);
          }
          response.data = data;
        } catch (e) {
        }
        return response || $q.when(response);
      },
      'responseError': function (rejection) {
        return $q.reject(rejection);
      }
    };
  }
]).config(function ($httpProvider) {
  $httpProvider.interceptors.push('dateParser');
});
angular.module('employeeApp.services').factory('Permission', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/permission/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementWeeklyCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.endDate.setDate($scope.endDate.getDate() + 7);
    $scope.ackList = Acknowledgement.query({
      start_date: $scope.startDate.toISOString(),
      end_date: $scope.endDate.toISOString()
    });
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementDailyCtrl', [
  '$scope',
  'Acknowledgement',
  function ($scope, Acknowledgement) {
    $scope.today = new Date();
    $scope.ackList = Acknowledgement.query({ date: $scope.today.toISOString() });
  }
]);
angular.module('employeeApp').controller('OrderShippingDetailsCtrl', [
  '$scope',
  'Shipping',
  '$routeParams',
  '$mdToast',
  '$http',
  function ($scope, Shipping, $routeParams, $mdToast, $http) {
    $mdToast.show($mdToast.simple().content('Loading Shipping Manifest...').hideDelay(0));
    $scope.showCal = false;
    $scope.shipping = Shipping.get({
      'id': $routeParams.id,
      pdf: true
    }, function () {
      $mdToast.hide();
    });
    $scope.updateDeliveryDate = function () {
      $scope.showCal = false;
    };
    $scope.getPDF = function () {
      $mdToast.show($mdToast.simple().content('Retrieving PDF...'));
      if ($scope.shipping.pdf.url) {
        window.open($scope.shipping.pdf.url);
      }
    };
    $scope.save = function () {
      $mdToast.show($mdToast.simple().content('Saving Shipping Manifest...').hideDelay(0));
      $scope.shipping.$update(function () {
        $mdToast.show($mdToast.simple().content('Shipping manifest ' + $scope.shipping.id + ' saved').hideDelay(0));
      });
    };
  }
]);
/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegatation.
 */
angular.module('employeeApp.directives').directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      tooltipTitle: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'views/templates/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$compile',
  '$timeout',
  '$parse',
  '$window',
  function ($compile, $timeout, $parse, $window) {
    var template = '<tooltip-popup ' + 'tooltip-title="{{tt_tooltip}}" ' + 'placement="{{tt_placement}}" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + '>' + '</tooltip-popup>';
    return {
      scope: true,
      link: function (scope, element, attr) {
        var tooltip = $compile(template)(scope), transitionTimeout, triggers = {
            'focus': 'blur',
            'mouseenter': 'mouseleave'
          }, triggerChoice = (attr.tooltipTrigger || 'mouseenter').toLowerCase();
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
          var position, ttWidth, ttHeight, ttPosition;
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
          tooltip.css({
            top: 0,
            left: 0,
            display: 'block'
          });
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
              top: position.top + position.height / 2 - ttHeight / 2 + 'px',
              left: position.left + position.width + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: position.top + position.height + 'px',
              left: position.left + position.width / 2 - ttWidth / 2 + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: position.top + position.height / 2 - ttHeight / 2 + 'px',
              left: position.left - ttWidth + 'px'
            };
            break;
          default:
            ttPosition = {
              top: position.top - ttHeight + 'px',
              left: position.left + position.width / 2 - ttWidth / 2 + 'px'
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
            transitionTimeout = $timeout(function () {
              tooltip.remove();
            }, 500);
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
  }
]);
angular.module('employeeApp').controller('OrderAcknowledgementItemDetailsCtrl', [
  '$scope',
  '$routeParams',
  'AcknowledgementItem',
  'Fabric',
  'Notification',
  '$location',
  function ($scope, $routeParams, AcknowledgementItem, Fabric, Notification, $location) {
    $scope.fabricList = Fabric.query();
    $scope.item = AcknowledgementItem.get({ id: $routeParams.id });
    $scope.save = function () {
      Notification.display('Saving' + $scope.item.description + '...', false);
      $scope.item.$save(function () {
        Notification.display($scope.item.description + ' saved');
      }, function () {
        Notification.display('There was an error in saving ' + $scope.item.description, false);
      });
    };
    $scope.remove = function () {
      Notification.display('Deleting ' + $scope.item.description, false);
      $scope.item.$delete(function () {
        Notification.display('Deleting ' + $scope.item.description);
        $location.path('/order/acknowledgement');
      });
    };
  }
]);
angular.module('employeeApp').factory('AcknowledgementItem', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/acknowledgement-item/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('SupplyPropViewCtrl', [
  '$scope',
  'Supply',
  '$filter',
  '$q',
  'Notification',
  '$location',
  function ($scope, Supply, $filter, $q, Notification, $location) {
    $scope.supplyList = Supply.query({ type: 'prop' });
    //Change page to add page
    $scope.add = function () {
      $scope.safeApply(function () {
        $location.path('/supply/prop/add');
      });
    };
    $scope.upload = function (index, image) {
      Notification.display('Uploading Image...', false);
      var resource = $filter('orderBy')($filter('filter')($scope.supplyList, $scope.query), 'supplier.name')[index], deferred, promise, fd = new FormData();
      deferred = $q.defer();
      promise = deferred.promise;
      //Create promise events
      promise.then(function (data) {
        /*The success fulfillment of the
             * promise will kick in the events:
             * -Show success notice
             * -update image property of prop
             */
        Notification.display('Image Updated');
        //Perform scope updates if
        //The scope still exists
        $scope.safeApply(function () {
          resource.image = resource.image || {};
          angular.copy(data, resource.image);
          resource.$save(function () {
            Notification.display('Prop Saved');
          });
        });
      }, function (reason) {
        Notification.display('Unable to Upload Image');
      });
      //Append image and upload the form data
      fd.append('image', image);
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          deferred.resolve(response);
        },
        error: function () {
          deferred.reject();
        }
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyPropAddCtrl', [
  '$scope',
  'Supplier',
  'Supply',
  'Notification',
  '$location',
  '$q',
  function ($scope, Supplier, Supply, Notification, $location, $q) {
    var deferred, promise, uploading = false;
    $scope.supplierList = Supplier.query();
    $scope.prop = new Supply();
    $scope.prop.type = 'prop';
    //Tooltips
    $scope.supplierText = 'Choose a Supplier for this Fabric';
    $scope.referenceText = 'Enter the Supplier\'s Reference Number';
    $scope.widthText = 'Enter the Width in millimeters';
    $scope.depthText = 'Enter the Depth in millimeters';
    $scope.heightText = 'Enter the Height in millimeters';
    $scope.cost = 'Enter the Cost in the format of 100 or 123.45';
    //Methods
    //Add Fabric
    $scope.save = function () {
      /*
         * The function will first check if the 
         * form is valid
         * 
         * If the form is valid then there is a check
         * to see if there is an image upload in progress
         * 
         * if there is then it will save the item after the image 
         * is uploaded
         */
      //Checks the form is valid
      if ($scope.form.$valid) {
        if (uploading) {
          var prop = angular.copy($scope.prop);
          promise.then(function (response) {
            prop.image = prop.image || {};
            angular.copy(response, prop.image);
            Notification.display('Saving Prop...', false);
            prop.$save(function () {
              Notification.display('Prop Saved');
            });
          }, angular.noop);
        } else {
          Notification.display('Saving Prop...', false);
          //save to database
          $scope.prop.$save(function () {
            Notification.display('Prop Saved');
          });
        }
        $location.path('/supply/prop');
      }
    };
    //Upload Image
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      //clear the form
      $scope.addLength = null;
      $scope.addRemark = null;
      //Create deferred and promose
      deferred = $q.defer();
      promise = deferred.promise;
      //Create promise events
      promise.then(function (data) {
        /*The success fulfillment of the
             * promise will kick in the events:
             * -Show success notice
             * -update image property of prop
             */
        Notification.display('Image Updated');
        //Perform scope updates if
        //The scope still exists
        if ($scope) {
          $scope.$apply(function () {
            $scope.prop.image = $scope.prop.image || {};
            angular.copy(data, $scope.prop.image);
          });
        }
      }, function (reason) {
        Notification.display('Unable to Upload Image');
      });
      //Set uploading switch to true
      uploading = true;
      jQuery.ajax('supply/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (response) {
          deferred.resolve(response);
        },
        error: function () {
          deferred.reject();
        }
      });
    };
  }
]);
angular.module('employeeApp').factory('Supply', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/supply/:id/', { id: '@id' }, {
      create: { method: 'POST' },
      update: { method: 'PUT' },
      add: {
        method: 'POST',
        params: { action: 'add' }
      },
      subtract: {
        method: 'POST',
        params: { action: 'subtract' }
      }
    });
  }
]);
angular.module('employeeApp').controller('SupplyPropDetailsCtrl', [
  '$scope',
  function ($scope) {
  }
]);
//'use strict';
angular.module('employeeApp').directive('searchBar', [
  '$compile',
  function ($compile) {
    'use strict';
    return {
      restrict: 'A',
      scope: { query: '=ngModel' },
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
        var clearButton = angular.element('<span class=\'close-button\'>&times;</span>');
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
          if (evt.which == '70' && (evt.metaKey || evt.ctrlKey)) {
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
          try {
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
  }
]);
angular.module('employeeApp').directive('eaSave', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the eaSave directive');
      }
    };
  }]);
angular.module('employeeApp').directive('eaAdd', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        function callback(evt) {
          if (evt.which == '65' && (evt.metaKey || evt.ctrlKey)) {
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
angular.module('employeeApp.directives').directive('imageCropper', [
  'Notification',
  '$compile',
  '$log',
  function (Notification, $compile, $log) {
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
      this.corners.topLeft = {
        x: this.bX * this.xProportion,
        y: this.bY * this.yProportion
      };
      this.corners.topRight = {
        x: (this.bX + this.bW) * this.xProportion,
        y: this.bY * this.yProportion
      };
      this.corners.bottomRight = {
        x: (this.bX + this.bW) * this.xProportion,
        y: (this.bY + this.bH) * this.yProportion
      };
      this.corners.bottomLeft = {
        x: this.bX * this.xProportion,
        y: (this.bY + this.bH) * this.yProportion
      };
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
          this.canvas.height = this.bH * boundingWidth / this.bW;
          angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
          angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
        } else {
          this.canvas.height = boundingHeight;
          this.canvas.width = this.bW * boundingHeight / this.bH;
          angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
          angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
        }
      } else {
        this.canvas.width = this.bW;
        this.canvas.height = this.bH;
      }
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.canvas.width, this.canvas.height);  // this.canvas.width = this.bW/this.xProportion
                                                                                                                  // this.canvas.height = this.bH/this.xProportion
                                                                                                                  //this.ctx.putImageData(imageData, 0, 0, this.canvas.width, this.canvas.height);
    };
    Scene.prototype.getImageAsURL = function () {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = this.w * this._scale;
      canvas.height = this.h * this._scale;
      context.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.w * this._scale, this.h * this._scale);
      return canvas.toDataURL('image/jpeg');
    };
    Scene.prototype.getImageAsBlob = function () {
      var url = this.getImageAsURL();
      var bytes = atob(url.split(',')[1]);
      var stream = new Uint8Array(bytes.length);
      for (var key in bytes) {
        stream[key] = bytes.charCodeAt(key);
      }
      return new Blob([stream], { type: 'image/jpeg' });
    };
    return {
      restrict: 'A',
      template: '<div class="cropper">                        <div class="cropper-message" ng-show="!cropper.image.loaded"><h3>Drop Image Here</h3></div>                        <div class="cropper-controller" ng-show="cropper.image.loaded">                            <button ng-click="cropper.crop()" ng-show="!cropper.cropping">Crop</button>                            <button ng-click="cropper.save()" ng-show="cropper.cropping">Done Cropping</button>                            <button ng-click="save()" ng-show="!cropper.cropping">Save</button>                            <button data-ng-click="preview(cropper.getImageAsURL())">Preview</button>                            <table class="cropper-scale">                                <tr>                                    <td>Scale:</td>                                    <td><input class="scale" type="number" data-ng-model="cropper.scale" min="0" max="100">%</td>                                </tr>                                <tr>                                    <td>Width</td>                                    <td>{{cropper.image.scaled_width | number:0}}px</td>                                </tr>                                <tr>                                    <td>Height</td>                                    <td>{{cropper.image.scaled_height | number:0}}px</td>                                </tr>                            </table>                        </div>                        <div class="canvas-container" ng-class="{show:cropper.image.loaded}">                            <canvas class="cropper-canvas"></canvas>                        </div>                    </div>',
      replace: true,
      scope: {
        onSave: '&',
        onLoad: '&'
      },
      link: function postLink(scope, element, attrs) {
        var cubes = [];
        var canvasContainer = element.find('.canvas-container');
        var canvasElement = canvasContainer.find('canvas');
        var canvas = canvasContainer.find('canvas')[0];
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
              canvas.height = image.height * width / image.width;
            } else {
              canvas.height = height;
              canvas.width = image.width * height / image.height;
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
              case 'topLeft':
                scene.w = scene.w + (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h + (mouseY - e.offsetY) / scene.yProportion;
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
                break;
              case 'topRight':
                scene.w = scene.w - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h + (mouseY - e.offsetY) / scene.yProportion;
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
                break;
              case 'bottomRight':
                scene.w = scene.w - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h - (mouseY - e.offsetY) / scene.yProportion;
                break;
              case 'bottomLeft':
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
                scene.h = scene.h - (mouseY - e.offsetY) / scene.yProportion;
                scene.w = scene.w + (mouseX - e.offsetX) / scene.xProportion;
                break;
              }
            } else {
              var topLeft = scene.corners.topLeft, bottomRight = scene.corners.bottomRight;
              if (topLeft.y - (mouseY - e.offsetY) > 0 && bottomRight.y - (mouseY - e.offsetY) < scene.img.height * scene.yProportion) {
                scene.y = scene.y - (mouseY - e.offsetY) / scene.yProportion;
              } else {
                scene.y = topLeft.y - (mouseY - e.offsetY) <= 0 ? 0 : (scene.canvas.height - (bottomRight.y - topLeft.y)) / scene.yProportion;
              }
              if (topLeft.x - (mouseX - e.offsetX) > 0 && bottomRight.x - (mouseX - e.offsetX) < scene.img.width * scene.xProportion) {
                scene.x = scene.x - (mouseX - e.offsetX) / scene.xProportion;
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
        scope.cropper = {
          cropping: false,
          image: {}
        };
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
          scope.onSave({ $image: scope.cropper.getImage() });
          scope.cropper.reset();
        };
      }
    };
  }
]);
angular.module('employeeApp.services').factory('indexOfId', [
  '$q',
  function ($q) {
    function filter() {
      this.worker = new Worker('scripts/workers/index-of-id.js');
    }
    filter.prototype._prepare_id = function (arg1) {
      if (typeof arg1 == 'object') {
      } else if (typeof arg1 == 'number') {
      }
    };
    filter.prototype.filter = function (arg1, haystack, callback) {
      var needle = this._prepare_id(arg1);
      this.worker.onmessage = function (e) {
        (callback || angular.noop)(e.data);
      };
    };  //return new filter();
  }
]);
angular.module('employeeApp').controller('SupplyLumberViewCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp.services').factory('Contact', [
  'eaResource',
  function (eaResource) {
    return eaResource('contact/:id/', { id: '@id' });
  }
]);
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
angular.module('employeeApp.services').factory('DB', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    /*
	 * Private Vars
	 */
    var db, version = 1, objectStores = [
        {
          'resourceName': 'supply',
          'keyPath': 'id',
          'indexes': [
            'id',
            'supplier'
          ]
        },
        {
          'resourceName': 'acknowledgement',
          'keyPath': 'id',
          'indexes': [
            'id',
            'delivery_date'
          ]
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
      var openRequest = indexedDB.open('employee', version), objectStore;
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
        console.log('Upgrading the indexedDB..');
        //Get the database
        db = e.target.result;
        //Create the object store if it does not exists
        for (var i = 0; i < objectStores.length; i++) {
          var param = objectStores[i];
          //Creates the store if not yet created
          if (!db.objectStoreNames.contains(param.resourceName)) {
            objectStore = db.createObjectStore(param.resourceName, { keyPath: param.keyPath });
          } else {
            objectStore = db.transaction.objectStore(param.resourceName);
          }
          //Cycle throught the indexes
          for (var h = 0; h < param.indexes.length; h++) {
            var index = param.indexes[h];
            //Creates indexes if not yet created
            if (!objectStore.indexNames.contains(index)) {
              objectStore.createIndex(index, index, { unique: false });
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
        var deferred = $q.defer(), objectStore = db.transaction([this.resourceName]);
        objectStore.openCursor().onsuccess = function (event) {
          var data = [], cursor = event.target.result;
          //Add object to the array and continue to the next one
          if (cursor) {
            data.append(cursor.value);
            cursor.continue();  //jshint ignore:line
                                //Resolve the promise
          } else {
            deferred.resolve(data);
          }
        };
        return deferred.promise;
      };
      this.get = function (id) {
        var deferred = $q.defer(), objectStore = db.transaction([this.resourceName]);
        var request = objectStore.get(id);
        request.onsuccess = function (e) {
          var result = request.result;
          deferred.resolve(result);
        };
        return deferred.promise;
      };
      this.create = function (obj) {
        var deferred = $q.defer(), objectStore = db.transaction([this.resourceName], 'readwrite');
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
        var deferred = $q.defer(), objectStore = db.transaction([this.resourceName], 'readwrite');
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
  }
]);
angular.module('employeeApp').controller('ProductInventoryCtrl', [
  '$scope',
  'AcknowledgementItem',
  function ($scope, AcknowledgementItem) {
    $scope.itemList = AcknowledgementItem.poll().query({ status: 'inventory' });
    $scope.showAddInventory = false;
    $scope.addInventory = function (product) {
      $scope.item = new AcknowledgementItem();
      angular.extend($scope.item, JSON.parse(JSON.stringify(product)));
      if (product.hasOwnProperty('id')) {
        $scope.item.product = { id: product.id };
      }
      delete $scope.item.id;
      $scope.item.status = 'INVENTORY';
      $scope.item.$save(function () {
        $scope.itemList.push(angular.copy($scope.item));
      });
    };
    $scope.$on('$destroy', function () {
      $scope.AcknowledgementItem.stopPolling();
    });
  }
]);
angular.module('employeeApp.services').factory('Geocoder', [
  '$q',
  '$rootScope',
  '$log',
  function ($q, $rootScope, $log) {
    /*Helper functions*/
    function prepareAddress(obj) {
      var addrStr = '';
      if (obj.hasOwnProperty('address') || obj.hasOwnProperty('address1')) {
        addrStr += obj.address || obj.address1;
      } else {
        throw new TypeError('Missing \'address\' or \'address1\' argument');
      }
      if (obj.hasOwnProperty('city')) {
        addrStr += ', ' + obj.city;
      } else {
        throw new TypeError('Missing \'city\' argument');
      }
      if (obj.hasOwnProperty('territory')) {
        addrStr += ', ' + obj.territory;
      } else {
        throw new TypeError('Missing \'territory\' argument');
      }
      if (obj.hasOwnProperty('country')) {
        addrStr += ', ' + obj.country;
      } else {
        throw new TypeError('Missing \'country\' argument');
      }
      if (obj.hasOwnProperty('zipcode')) {
        addrStr += ', ' + obj.zipcode;
      } else {
        throw new TypeError('Missing \'zipcode\' argument');
      }
      return addrStr;
    }
    function Geocoder() {
      this.google = 'google' in window ? window.google : {
        maps: {
          Geocoder: angular.noop,
          LatLng: angular.noop
        }
      };
      this.geocoder = new this.google.maps.Geocoder();
      this.initialized = 'google' in window ? true : false;
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
    Geocoder.prototype._getRegion = function (country) {
      switch (country.toLocaleLowerCase()) {
      case 'thailand':
        return 'TH';
      case 'usa':
        return 'US';
      case 'us':
        return 'US';
      case 'italy':
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
    Geocoder.prototype._lookup = function (addr, callback, errback) {
      var addrStr = prepareAddress(addr);
      this.geocoder.geocode({
        'address': addrStr,
        'region': this._getRegion(addr.country)
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          (callback || angular.noop)(results);
        } else {
          $log.error(status);
          (errback || angular.noop)(status);
        }
      });
    };
    Geocoder.prototype.geocode = function (arg) {
      if (angular.isObject(arg)) {
        var deferred = $q.defer();
        this._lookup(arg, function (results) {
          $rootScope.safeApply(function () {
            deferred.resolve(results);
          });
        }, function (status) {
          $rootScope.safeApply(function () {
            deferred.reject(status);
          });
        });
        return deferred.promise;
      } else {
        throw new TypeError('Arguments must be in the form of an object.');
      }
    };
    Geocoder.prototype.reverseGeocode = function (lat, lng) {
      var deferred = $q.defer();
      var latLng = new this.google.maps.LatLng(lat, lng);
      try {
        this.geocoder.geocode({ 'latLng': latLng }, function (results, status) {
          deferred.resolve(results);
        });
      } catch (e) {
        deferred.reject('ok');
      }
      return deferred.promise;
    };
    return new Geocoder();
  }
]);
angular.module('employeeApp.services').factory('mapMarker', [function () {
    function MarkerFactory(configs) {
      function Marker(configs) {
        if (angular.isObject(configs)) {
          if (configs.map instanceof google.maps.Map) {
            this._map = configs.map;
          } else {
            throw new TypeError('Is not an instance of google.maps.Map');
          }
          if (!configs.position instanceof google.maps.LatLng) {
            throw new TypeError('Is not an instance of google.maps.LatLng');
          }
          this.prototype = new google.maps.Marker({
            position: configs.position,
            map: this._map,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this, 'dragend', function (e) {
            (this.onchange || angular.noop)({
              lat: this.lat,
              lng: this.lng
            });
          }.bind(this));
        }
      }
      Object.defineProperties(Marker.prototype, {
        lat: {
          get: function () {
            return this.getPosition().lat() || null;
          }
        },
        lng: {
          get: function () {
            return this.getPosition().lng() || null;
          }
        }
      });
      Marker.prototype.setPosition = function (latLng) {
        if (latLng instanceof google.maps.LatLng) {
          this.setPosition(latLng);
        }
      };
      Marker.prototype.hide = function () {
        this.setMap(null);
      };
      Marker.prototype.show = function () {
        this.setMap(this._map);
      };
      Marker.prototype.focus = function () {
        this.setCenter(this._marker.getPosition());
      };
      return new Marker(configs);
    }
    return MarkerFactory;
  }]);
angular.module('employeeApp').controller('OrderShippingDeliveryCtrl', [
  '$scope',
  'Delivery',
  function ($scope, Delivery) {
    $scope.deliveryList = Delivery.query();
  }
]);
angular.module('employeeApp').factory('Delivery', [
  'eaResource',
  function (eaResource) {
    return eaResource('delivery/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').controller('ProductTableViewCtrl', [
  '$scope',
  'Table',
  'Notification',
  function ($scope, Table, Notification) {
    var fetching = true;
    Notification.display('Loading Tables...');
    $scope.tableList = Table.query(function () {
      fetching = false;
      Notification.hide();
    });
    $scope.$watch('query', function (q) {
      if (q) {
        Table.query({
          q: q,
          limit: 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.tableList.indexOfById(resources[i]) == -1) {
              $scope.tableList.push(resources[i]);
            }
          }
        });
      }
    });
    $scope.loadNext = function () {
      if (!fetching) {
        Table.query({
          offset: $scope.tableList.length,
          limit: 50
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            $scope.tableList.push(resources[i]);
          }
        });
      }
    };
  }
]);
angular.module('employeeApp.services').factory('Table', [
  '$resource',
  function ($resource) {
    return $resource('api/v1/table/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('ProductRugViewCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp').controller('ProductRugAddCtrl', [
  '$scope',
  function ($scope) {
  }
]);
angular.module('employeeApp').directive('background', [function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (attrs.backgroundImages) {
        } else {
          throw new TypeError('Missing Images for Background Directive.');
        }
      }
    };
  }]);
angular.module('employeeApp').controller('ProductTableDetailsCtrl', [
  '$scope',
  'Table',
  '$routeParams',
  '$mdToast',
  '$location',
  'FileUploader',
  function ($scope, Table, $routeParams, $mdToast, $location, FileUploader) {
    $scope.table = Table.get({ 'id': $routeParams.id });
    //Upload Image
    $scope.upload = function () {
      var promise = FileUploader.upload($scope.images[0], '/api/v1/upholstery/image/');
      promise.then(function (dataObj) {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('File was uploaded.'));
        $scope.table.image = dataObj.data;
        $scope.update();
      }, function () {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error uploading the file'));
      });
    };
    $scope.update = function () {
      //Notification.display('Saving Table...', false);
      $scope.table.$update(function () {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('Table saved.'));
      });
    };
    $scope.remove = function () {
      //Notification.display('Deleteing Table Product');
      $scope.table.$delete(function () {
        //Notification.display('Table Product Deleted');
        $location.path('/product/table');
      });
    };
    $scope.$on('$destroy', function () {
      $scope.update();
    });
  }
]);
angular.module('employeeApp').controller('ProductTableAddCtrl', [
  '$scope',
  'Table',
  'Configuration',
  'Model',
  'Notification',
  '$location',
  function ($scope, Table, Configuration, Model, Notification, $location) {
    $scope.configurationList = Configuration.query({ limit: 0 });
    $scope.modelList = Model.query({ limit: 0 });
    $scope.table = new Table();
    //Text for tooltips
    $scope.modelText = 'Choose a Model';
    $scope.configurationText = 'Choose a Configuration';
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
    $scope.upload = function () {
      //Notify of uploading image
      Notification.display('Uploading Image...', false);
      var fd = new FormData();
      fd.append('image', $scope.images[0]);
      //clear the form
      $scope.addLength = null;
      $scope.addRemark = null;
      jQuery.ajax('/api/v1/upholstery/image', {
        type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
        success: function (responseData) {
          Notification.display('Image Uploaded');
          $scope.table.image = $scope.table.image || {};
          angular.copy(responseData, $scope.table.image);
          $scope.$apply();
          $scope.table.$update();
        }
      });
    };
    $scope.save = function () {
      Notification.display('Saving Table Product...');
      $scope.table.$create(function () {
        Notification.display('Table Product Saved');
        $location.path('/product/table');
      });
    };
  }
]);
angular.module('employeeApp').controller('ProjectViewCtrl', [
  '$scope',
  'Project',
  'Notification',
  'Customer',
  '$location',
  '$mdDialog',
  '$mdToast',
  '$log',
  function ($scope, Project, Notification, Customer, $location, $mdDialog, $mdToast, $log) {
    //Controlling attributes
    $scope.showAddProject = false;
    //Query the server for projects continouosly
    $scope.projects = Project.query();
    $scope.customers = Customer.query();
    $scope.showAddProject = function () {
      $scope.project = new Project();
      $mdDialog.show({
        templateUrl: 'views/templates/add-project.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    $scope.completeAddProject = function () {
      $mdDialog.hide();
      $mdToast.show($mdToast.simple().content('Creating project...').hideDelay(0));
      $scope.project.$create(function () {
        $mdToast.hide();
        $location.path('/project/' + $scope.project.id);
      }, function () {
      });
    };
    $scope.cancelAddProject = function () {
      $mdDialog.hide();
    };
    $scope.$watch('query', function (q) {
      if (q) {
        Project.query({
          limit: q.length,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.projects.indexOfById(resources[i].id) == -1) {
              $scope.projects.push(resources[i]);
            }
          }  //index = 0;
             //changeSelection(index);
        });
      }
    });
    /*
	 * Navigate to the details page for an acknowledgement
	 */
    $scope.navigate = function (id) {
      $location.path('/project/' + id);
    };
    /*
	 * Watch for changes in the status of the project
	 */
    $scope.$watch('projects', function (newVal, oldVal) {
      // Callback to when the acknowledgement is finished updating
      function postUpdate(resp) {
        $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Project: ' + resp.codename + ' status updated to \'' + resp.status.toLowerCase() + '\''));
      }
      if (newVal && oldVal) {
        try {
          for (var i = 0; i < newVal.length; i++) {
            if (newVal[i].id === oldVal[i].id) {
              if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
                $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Updating Project: ' + newVal[i].codename + ' status...'));
                newVal[i].$update(postUpdate);
              }
            }
          }
        } catch (e) {
          $log.error(e);
        }
      }
    }, true);
    //Create new project
    $scope.create = function () {
      Notification.display('Creating new project...', false);
      var project = new Project();
      angular.extend(project, $scope.project);
      project.$create(function (response) {
        Notification.display('New project created.');
        $scope.projectList.push(response);
        $scope.project = {};
        $scope.showAddProject = false;
      });
    };
  }
]);
angular.module('employeeApp').controller('ProjectDetailsCtrl', [
  '$scope',
  'Project',
  '$routeParams',
  'Room',
  'Notification',
  'FileUploader',
  '$http',
  '$timeout',
  'PurchaseOrder',
  'Acknowledgement',
  '$mdDialog',
  'Phase',
  function ($scope, Project, $routeParams, Room, Notification, FileUploader, $http, $timeout, PurchaseOrder, Acknowledgement, $mdDialog, Phase) {
    var timeoutPromise;
    $scope.showAddRoom = false;
    $scope.flag = false;
    $scope.project = Project.get({ id: $routeParams.id });
    $scope.room = {};
    $scope.purchaseOrders = PurchaseOrder.query({
      limit: 0,
      project_id: $routeParams.id
    });
    $scope.acknowledgements = Acknowledgement.query({
      limit: 0,
      project_id: $routeParams.id
    });
    $scope.room = new Room();
    $scope.roomTypes = [
      'Bedroom',
      'Dining Room',
      'Formal Dining Room',
      'Guest Bedroom',
      'Guest Bathroom',
      'Kitchen',
      'Living Room',
      'Maid\'s Quaters',
      'Master Bathroom',
      'Master Bedroom',
      'Pantry'
    ];
    $scope.addCustomer = function (customer) {
      $scope.showCustomers = false;
      $scope.project.customer = customer;
    };
    /*
	 * Create dialog to add phase
	 */
    $scope.showAddPhase = function () {
      $scope.phase = new Phase();
      $mdDialog.show({
        templateUrl: 'views/templates/add-phase.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    /*
	 * Complete adding item process and close the dialog 
	 */
    $scope.completeAddPhase = function () {
      $mdDialog.hide();
      var phase = angular.copy($scope.phase);
      phase.project = $scope.project.id;
      $scope.phase = undefined;
      phase.$create(function (resp) {
        $scope.project.phases.push(resp);
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
	 * Create dialog to add room
	 */
    $scope.showAddRoom = function () {
      $mdDialog.show({
        templateUrl: 'views/templates/add-room.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    /*
	 * Complete adding room process and close the dialog 
	 */
    $scope.completeAddRoom = function () {
      $mdDialog.hide();
      var room = angular.copy($scope.room);
      room.project = $scope.project;
      $scope.room = new Room();
      room.$create(function (resp) {
        $scope.project.rooms.push(resp);
      });
    };
    /*
	 * Cancel adding a room 
	 */
    $scope.cancelAddRoom = function () {
      $mdDialog.hide();
      $scope.room = new Room();
    };
    $scope.addSupply = function ($supply) {
      $scope.showAddSupply = false;
      var supply = angular.copy($supply);
      supply.quantity = 0;
      $scope.project.supplies = $scope.project.supplies || [];
      $scope.project.supplies.push(supply);  //Notify the user
                                             //Notification.display("Adding "+$supply.description+" to "+$scope.project.codename);
                                             //$scope.project.$update(function () {
                                             //	Notification.display($supply.description+" added to "+$scope.project.codename + ".");
                                             //});
    };
    $scope.removeSupply = function ($index) {
      $scope.project.supplies.splice($index, 1);
    };
    $scope.addImage = function (image) {
      var promise = FileUploader.upload(image, 'project/room/image');
      promise.then(function (response) {
        $scope.room.image = response;
        $scope.cropper.reset();
      });
    };
    $scope.addSchematic = function (files) {
      var file = angular.isArray(files) ? files[0] : files;
      var promise = FileUploader.upload(file, 'project/room/schematic');
      promise.then(function (response) {
        $scope.room.schematic = response;
      });
    };
    $scope.addRoom = function () {
      Notification.display('Adding ' + $scope.room.description, false);
      var room = new Room();
      angular.extend(room, $scope.room);
      room.project = { id: $scope.project.id };
      room.$save(function (response) {
        Notification.display($scope.room.description + ' added.');
        $scope.showAddRoom = false;
        $scope.project.rooms.push(room);
      }, function (e) {
        $scope.flag = true;
      });
    };
    /*
	 * Create dialog to add packing list
	 */
    $scope.showCreatePacking = function () {
      $mdDialog.show({
        templateUrl: 'views/templates/add-packing-list.html',
        controllerAs: 'ctrl',
        locals: { project: $scope.project },
        controller: 'DialogsCreatePackingListCtrl',
        bindToController: true
      });
    };
    /*
	 * Watches the project for changes in order to autosave
	 */
    $scope.$watch('project.supplies', function (newVal, oldVal) {
      if (oldVal) {
        $timeout.cancel(timeoutPromise);
        timeoutPromise = $timeout(function () {
          Notification.display('Saving...', false);
          var project = angular.copy($scope.project);
          project.$update(function () {
            Notification.display('Project ' + $scope.project.codename + ' saved');
          });
        }, 750);
      }
    }, true);
  }
]);
angular.module('employeeApp.services').factory('Project', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/project/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.services').factory('Room', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/room/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.directives').directive('checkmark', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (!attrs.checkmark) {
          throw new TypeError('Missing expression to evaluate.');
        }
        var check = angular.element('<span class="checkmark">\u2713</span>');
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
angular.module('employeeApp.directives').directive('x', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (!attrs.x) {
          throw new TypeError('Missing expression to evaluate.');
        }
        var x = angular.element('<span class="x-mark">\ud800\udd02</span>');
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
angular.module('employeeApp').controller('HrEmployeeViewCtrl', [
  '$scope',
  'Employee',
  'Notification',
  '$mdDialog',
  function ($scope, Employee, Notification, $mdDialog) {
    var fetching = false;
    $scope.employees = Employee.query();
    /*
	*  Focus the list to the active element
	*/
    $scope.focus = function ($element) {
      var container = $('div.outer-container');
      /*
		 * Set new scrollTop to determined by 
		 * - Scroll Top
		 * - offset of element
		 * - mainmenu height 
		 */
      container.animate({ scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height() });
    };
    /*
	 * Show add Employee
	 */
    $scope.showAddEmployee = function () {
      $mdDialog.show({
        templateUrl: 'views/templates/add-employee.html',
        controller: 'DialogsAddEmployeeCtrl'
      });
    };
    /*
	* Search mechanism
	* 
	* This function will send a GET request to the server
	* whenever the query string changes and that string will 
	* be sent along as a parameter. 
	*/
    $scope.$watch('query', function (q) {
      if (q) {
        Employee.query({
          limit: 10,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.employees.indexOfById(resources[i].id) == -1) {
              $scope.employees.push(resources[i]);
            }
          }
        });
      }
    });
    /*
	* Load more supplies
	* 
	* This function will load more supplies from the server
	* be using the current number of supplies as the offset
	*/
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more employees...', false);
        Employee.query({
          offset: $scope.employees.length,
          limit: 50
        }, function (resources) {
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            if ($scope.employees.indexOfById(resources[i].id) == -1) {
              $scope.employees.push(resources[i]);
            }
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').factory('ProjectItem', [
  'eaResource',
  function (eaResource) {
    return eaResource('project/item/:id', { id: '@id' });
  }
]);
angular.module('employeeApp').directive('productSelector', [
  'Upholstery',
  'Fabric',
  'Table',
  '$rootScope',
  '$mdToast',
  'FileUploader',
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
          $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Uploading image...'));
          //Set the upload Target
          //Get new image and add to form data
          //var fd = new FormData();
          //fd.append('image', image);
          var promise = FileUploader.upload(image, scope.url || 'upload/images');
          promise.then(function (response) {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Image uploaded.'));
            (callback || angular.noop)(response.data);
          }, function () {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Failed to upload image'));
          });  /*//Upload the image
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
          scope.add({ product: newProduct });
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
            throw new TypeError('Expecting an Upholstery.');
          }
        };
        scope.addTable = function (table) {
          if (table) {
            scope.product = table;
            scope.selection = 'quantity';
          } else {
            throw new TypeError('Expecting a Table.');
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
            throw new TypeError('Expecting a Custom Item and Image.');
          }
        };
        scope.setQuantity = function (quantity) {
          scope.product.quantity = quantity;
          scope.selection = 'fabric';  /*
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
          scope.add({ product: newProduct });
        };
        scope.reset = function () {
          scope.product = {};
          scope.selection = 'upholstery';
        };
      }
    };
  }
]);
angular.module('employeeApp').directive('fileHandler', [
  '$rootScope',
  function ($rootScope) {
    return {
      template: '<div class="file-handler">                        <div class="file-handler-message" ng-hide="files.length>0">                            <h3>Drop File Here</h3>                        </div>                        <div class="file-handler-list">                            <ul>                                <li ng-repeat="file in files">{{file.name}}</li>                            </ul>                        </div>                   </div>',
      restrict: 'A',
      scope: { files: '=fileHandler' },
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
  }
]);
angular.module('employeeApp').controller('ProjectRoomDetailsCtrl', [
  '$scope',
  'Room',
  '$routeParams',
  'Notification',
  '$mdDialog',
  'RoomItem',
  'FileUploader',
  '$timeout',
  '$mdToast',
  'Phase',
  'ProjectItemPart',
  function ($scope, Room, $routeParams, Notification, $mdDialog, RoomItem, FileUploader, $timeout, $mdToast, Phase, Part) {
    var timeoutPromise = {};
    $scope.room = Room.get({ id: $routeParams.id }, beginWatch);
    $scope.room.items = $scope.room.items || [];
    $scope.item = new RoomItem();
    function setTimeoutFactory(item, i) {
      timeoutPromise[i] = setTimeout(function (item) {
        $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Saving ' + item.description + '...'));
        item = new RoomItem(angular.copy(item));
        function callback() {
          $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content(item.description + ' saved.'));
        }
        item.id ? item.$update(callback) : item.$create(callback);  //jshint ignore:line
      }, 2000, item);
    }
    /*
	 * Watch the items
	 */
    function beginWatch() {
      $scope.$watch('room.items', function (newVal, oldVal) {
        if (newVal.length === oldVal.length) {
          for (var i = 0; i < newVal.length; i++) {
            if (!angular.equals(newVal[i], oldVal[i])) {
              clearTimeout(timeoutPromise[i]);
              setTimeoutFactory(newVal[i], i);
            }
          }
        }
      }, true);
    }
    /*
	 * Add files to the current item
	 */
    $scope.addListedItemFiles = function ($files, $index) {
      $scope.room.items[$index].files = $scope.room.items[$index].files || [];
      /* jshint ignore:start */
      for (var i = 0; i < $files.length; i++) {
        //$scope.room.items[$index].files.push({filename: $files[i].name});
        var promise = FileUploader.upload($files[i], '/api/v1/acknowledgement/file/');
        promise.then(function (result) {
          var data = result.data || result;
          $scope.room.items[$index].files.push(data);
          for (var h = 0; h < $scope.room.items[$index].files.length; h++) {
          }
        }, function (e) {
        });
      }  /* jshint ignore:end */
    };
    /*
	 * Create dialog to add item
	 */
    $scope.showAddItem = function () {
      $scope.item = new RoomItem();
      $mdDialog.show({
        templateUrl: 'views/templates/add-room-item.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    /*
	 * Add files to the current item
	 */
    $scope.addItemFiles = function ($files, $index) {
      var item = $scope.item || $scope.room.items[$index];
      item.files = item.files || [];
      /* jshint ignore:start */
      for (var i = 0; i < $files.length; i++) {
        item.files.push({ filename: $files[i].name });
        var promise = FileUploader.upload($files[i], '/api/v1/acknowledgement/file/');
        promise.then(function (result) {
          var data = result.data || result;
          for (var h = 0; h < item.files.length; h++) {
            if (data.filename == item.files[h].filename) {
              angular.extend(item.files[h], data);
            }
          }
        }, function (e) {
        });
      }  /* jshint ignore:end */
    };
    /*
	 * Complete adding item process and close the dialog 
	 */
    $scope.completeAddItem = function () {
      $mdDialog.hide();
      var item = angular.copy($scope.item);
      item.room = $scope.room;
      $scope.item = undefined;
      item.$create(function (resp) {
        $scope.room.items = $scope.room.items || [];
        $scope.room.items.push(resp);
      });
    };
    /*
	 * Cancel adding a item 
	 */
    $scope.cancelAddItem = function () {
      $mdDialog.hide();
      $scope.item = undefined;
    };
    /*
	 * Create dialog to add part
	 */
    $scope.showAddPart = function () {
      $scope.part = new Part();
      $mdDialog.show({
        templateUrl: 'views/templates/add-part.html',
        controllerAs: 'ctrl',
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    /*
	 * Complete adding part process and close the dialog 
	 */
    $scope.completeAddPart = function ($id) {
      $mdDialog.hide();
      var part = angular.copy($scope.part);
      $scope.part = undefined;
      part.item = $id;
      part.$create(function (resp) {
        $scope.room.items[$scope.room.items.indexOfById($id)].parts.push(resp);
      });
    };
    /*
	 * Cancel adding a part 
	 */
    $scope.cancelAddPart = function () {
      $mdDialog.hide();
      $scope.part = undefined;
    };
    /*
	 *  Shows the supply list modal
	 */
    $scope.showAddSupply = function ($index) {
      //Set the current item being worked on
      $scope.$active = $index;
      $scope.showSupplyToggle = true;
    };
    /* 
	 * Add Supply to Item
	 */
    $scope.addSupply = function ($supply) {
      $scope.room.items[$scope.$active].supplies = $scope.room.items[$scope.$active].supplies || [];
      var supply = angular.copy($supply);
      supply.quantity = 0;
      $scope.room.items[$scope.$active].supplies.push(supply);
      $scope.showSupplyToggle = false;
    };
  }
]);
angular.module('employeeApp').factory('s3', [function () {
    // Service logic
    // ...
    var meaningOfLife = 42;
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
angular.module('employeeApp').factory('FileUploader', [
  '$q',
  '$http',
  'Notification',
  function ($q, $http, Notification) {
    var uploader = {}, type, fd;
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
        for (var i in data) {
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
          url: url || 'upload/images',
          data: fd,
          headers: { 'Content-Type': undefined },
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
  }
]);
angular.module('employeeApp').filter('available', [function () {
    return function (input) {
      return 'available filter: ' + input;
    };
  }]);
angular.module('employeeApp').controller('SupplyViewCtrl', [
  '$scope',
  'Supply',
  'Notification',
  '$filter',
  'KeyboardNavigation',
  '$rootScope',
  '$location',
  '$http',
  'FileUploader',
  '$timeout',
  '$mdDialog',
  '$log',
  function ($scope, Supply, Notification, $filter, KeyboardNavigation, $rootScope, $location, $http, FileUploader, $timeout, $mdDialog, $log) {
    /*
	* Vars and flags
	*/
    var fetching = true, index = 0, currentSelection, activeQueryLoop = false, masterList = [], q, keyboardNav = new KeyboardNavigation();
    //system message
    var notification = Notification.display('Loading supplies...', false);
    $http.get('/api/v1/supply/type/').success(function (response) {
      $scope.types = response;
      $scope.types.splice($scope.types.indexOf(null), 1);
    });
    $scope.scannerMode = false;
    $scope.supplies = Supply.query({ 'country': $scope.country }, function (resources) {
      fetching = false;
      notification.hide();
      changeSelection(index);
    });
    /*
	 * Show the supply modal
	 */
    $scope.showScanner = function () {
      keyboardNav.disable();
      $mdDialog.show({
        templateUrl: 'views/templates/supply-scanner.html',
        controller: 'DialogsSupplyScannerCtrl'
      });
    };
    /*
	*  Focus the list to the active element
	*/
    $scope.focus = function ($element) {
      var container = $('div.outer-container');
      /*
		 * Set new scrollTop to determined by 
		 * - Scroll Top
		 * - offset of element
		 * - mainmenu height 
		 */
      container.animate({ scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height() });
    };
    /*
	* Adding image for ipads and iphones
	* 
	* This particular function is intended for the iphone and ipad.
	* It allows the user to directly add an image to the supply from the 
	* device's camera
	*/
    $scope.addImage = function (element, supply) {
      //Upload the file
      var promise = FileUploader.upload(element.files[0], '/api/v1/supply/image/');
      //Process the file after a successful upload
      promise.then(function (data) {
        Notification.display('Image uploaded');
        //Apply the image data and url to the supply, 
        //and then save the supply to the serve
        $scope.safeApply(function () {
          supply.image = data.hasOwnProperty('data') ? data.data : data;
          supply.save();
        });  //Process a failed upload
      }, function (e) {
        $log.error(e);
        Notification.display('Unable to upload image', false);
      });
    };
    /*
	* Search mechanism
	* 
	* This function will send a GET request to the server
	* whenever the query string changes and that string will 
	* be sent along as a parameter. 
	*/
    $scope.$watch('query', function (q) {
      /*
		//Set global q to search
		q = queryStr
		
		//checks if the loop is currently active
		//$scope.supplies = filter(masterList);
		$timeout(function () {
			$scope.supplies = filter(masterList);
		}, 1);
		
		var tSwitch = $timeout(function () {
			Supply.query({limit: 10, q: q, 'country': $scope.country}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if (masterList.indexOfById(resources[i].id) == -1) {
						masterList.push(resources[i]);
					}
				}
				$scope.supplies = filter(masterList);
				activeQueryLoop = false;
			});
		}, 1);
		*/
      //To Be deprecated in favor of a timeout based
      //query mechanism
      if (q) {
        Supply.query({
          limit: q.length,
          q: q,
          'country': $scope.country
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.supplies.indexOfById(resources[i].id) == -1) {
              $scope.supplies.push(resources[i]);
            }
          }
          index = 0;
          changeSelection(index);
        });
      }
    });
    /*
	* Load more supplies
	* 
	* This function will load more supplies from the server
	* be using the current number of supplies as the offset
	*/
    $scope.loadNext = function () {
      if (!fetching) {
        var notification = Notification.display('Loading more supplies...', false);
        Supply.query({
          offset: $scope.supplies.length,
          limit: 50,
          country: $scope.country
        }, function (resources) {
          notification.hide();
          for (var i = 0; i < resources.length; i++) {
            if ($scope.supplies.indexOfById(resources[i].id) == -1) {
              $scope.supplies.push(resources[i]);
            }
          }
        });
      }
    };
    function filter(array) {
      array = $filter('filter')(array, $scope.search);
      array = $filter('filter')(array, $scope.query);
      array = $filter('limitTo')(array, 30);
      array = $filter('orderBy')(array, 'description');
      return array;
    }
    $scope.customFilter = function (obj) {
      if ($scope.query) {
        var regex = new RegExp('\\b(' + $scope.query.split(' ') + ')', 'i');
        try {
          if (regex.test(obj.description)) {
            return true;
          }
        } catch (e) {
          $log.error(e);
        }
        try {
          for (var i = 0; i < obj.suppliers.length; i++) {
            if (regex.text(obj.suppliers[i].name)) {
              return true;
            }
          }
        } catch (e) {
          $log.error(e);
        }
        return false;
      } else {
        return true;
      }
    };
    function changeSelection(i) {
      $rootScope.safeApply(function () {
        if (currentSelection) {
          currentSelection.$selected = false;
        }
        currentSelection = filter($scope.supplies)[i];
        if (currentSelection) {
          currentSelection.$selected = true;
        }
      });
      var selection = $('.item.selected');
      var container = selection.parents('.outer-container');
      var scrollTop = container.scrollTop();
      var cHeight = container.innerHeight();
      if (scrollTop > selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      } else if (scrollTop + cHeight < selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      }
    }
    keyboardNav.ondown = function () {
      if (index < filter($scope.supplies).length - 1) {
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
        $location.path('/supply/' + currentSelection.id);
      });
    };
    keyboardNav.enable();
    /*
	 * When adding suppliers or supply
	 * disable the keyboard navigation
	 */
    $scope.$watch('showAddSupply', function (val, oldVal) {
      if (val && !oldVal) {
        keyboardNav.disable();
      } else if (!val && oldVal) {
        keyboardNav.enable();
      }
    });
    $scope.$watch('showAddSupplier', function (val, oldVal) {
      if (val && !oldVal) {
        keyboardNav.disable();
      } else if (!val && oldVal) {
        keyboardNav.enable();
      }
    });
    $scope.$watch('scannerMode', function (val, oldVal) {
      if (val && !oldVal) {
        globalScanner.disable();
        keyboardNav.disable();
      } else if (!val && oldVal) {
        globalScanner.enable();
        keyboardNav.enable();
      }
    });
    $scope.$on('$destroy', function () {
      keyboardNav.disable();
    });
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderViewCtrl', [
  '$scope',
  'PurchaseOrder',
  '$filter',
  '$mdToast',
  'KeyboardNavigation',
  '$location',
  function ($scope, PurchaseOrder, $filter, $mdToast, KeyboardNavigation, $location) {
    //Flags and variables
    var fetching = true, index = 0, currentSelection, search = $location.search();
    //System wide message
    $mdToast.show($mdToast.simple().position('top right').content('Loading purchasing orders...').hideDelay(0));
    //Poll Server for pos
    $scope.poList = PurchaseOrder.query({ limit: 20 }, function () {
      fetching = false;
      $mdToast.hide();
      changeSelection(index);
    }, function () {
      fetching = false;
    });
    /*
	 * Search Mechanism
	 * 
	 * a wartch is put on the query model. 
	 * whenever it changes a request is made to the server 
	 * with the query
	 * 
	 * The resources are then integrated with the list of 
	 * PO's so that there are no duplicates
	 */
    $scope.$watch('query.$.$', function (q) {
      if (q) {
        $location.search('q', q);
        PurchaseOrder.query({
          limit: q ? 10 * q.length : 5,
          q: q
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.poList.indexOfById(resources[i].id) == -1) {
              $scope.poList.push(resources[i]);
            }
          }
          index = 0;
          changeSelection(index);
        });
      }
    });
    /* 
	 * Set default search from search url
	 */
    if (search.q) {
      $scope.query = { $: { $: search.q } };
      $scope.safeApply();
    }
    $scope.loadNext = function () {
      if (!fetching) {
        //System wide message
        $mdToast.show($mdToast.simple().position('top right').content('Loading more purchasing orders...').hideDelay(0));
        fetching = true;
        var config = {
            limit: 20,
            offset: $scope.poList.length
          };
        try {
          if ($scope.query.$.$) {
            config.q = $scope.query.$.$;
            config.offset = $filter('filter')($scope.poList, config.q).length;
          }
        } catch (e) {
        }
        PurchaseOrder.query(config, function (resources) {
          $mdToast.hide();
          fetching = false;
          for (var i = 0; i < resources.length; i++) {
            if ($scope.poList.indexOfById(resources[i].id) == -1) {
              $scope.poList.push(resources[i]);
            }
          }
        });
      }
    };
    function filter(array) {
      return $filter('filter')(array, $scope.query);
    }
    function changeSelection(i) {
      $scope.safeApply(function () {
        if (currentSelection) {
          currentSelection.$selected = false;
        }
        currentSelection = filter($scope.poList)[i];
        if (currentSelection) {
          currentSelection.$selected = true;
        }
      });
      var selection = $('.item.selected');
      var container = selection.parents('.outer-container');
      var scrollTop = container.scrollTop();
      var cHeight = container.innerHeight();
      if (scrollTop > selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      } else if (scrollTop + cHeight < selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      }
    }
    var keyboardNav = new KeyboardNavigation();
    keyboardNav.ondown = function () {
      if (index < filter($scope.poList).length - 1) {
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
      $scope.safeApply(function () {
        $location.path('/order/purchase_order/' + currentSelection.id);
      });
    };
    keyboardNav.enable();
    $scope.$on('$destroy', function () {
      keyboardNav.disable();
    });
  }
]);
angular.module('employeeApp').factory('PurchaseOrder', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/purchase-order/:id/', { id: '@id' }, {
      create: { method: 'POST' },
      update: { method: 'PUT' }
    });
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderCreateCtrl', [
  '$scope',
  'PurchaseOrder',
  'Supplier',
  'Supply',
  '$mdToast',
  '$filter',
  '$timeout',
  '$window',
  'Project',
  'Room',
  'Phase',
  '$mdDialog',
  '$log',
  '$location',
  function ($scope, PurchaseOrder, Supplier, Supply, $mdToast, $filter, $timeout, $window, Project, Room, Phase, $mdDialog, $log, $location) {
    /*
	 * Setup vars
	 */
    $scope.showSuppliers = false;
    $scope.showSupplies = false;
    //$scope.suppliers = Supplier.query({limit: 0});
    $scope.projects = Project.query({ page_size: 99999 });
    $scope.po = new PurchaseOrder();
    /*
 	 * Map variables and settings
 	 */
    var map, marker, geocoder = new google.maps.Geocoder(), mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      },
      //Style for the map
      styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Create new map and set the map style
    map = new google.maps.Map($('#create-po-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //General purpose create marker function
    function createMarker(configs) {
      var lat = configs.address.latitude || configs.latitude, lng = configs.address.longitude || configs.longitude;
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
        if (this.address.latitude != $scope.supplier.addresses[0].latitude || this.address.longitude != $scope.supplier.addresses[0].longitude) {
          $scope.po.supplier.addresses[0].latitude = latLng.lat();
          $scope.po.supplier.addresses[0].longitude = latLng.lng();
        }
        //Change icon color
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
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
      $scope.supplies = $filter('filter')(Supply.query({ supplier_id: supplier.id }, function (response) {
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
          marker = createMarker({
            address: address,
            title: $scope.po.supplier.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          map.panTo(marker.getPosition());
          map.setZoom(17);
        }
      } catch (e) {
        $log.warn(e.stack);
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
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    $scope.completeAddProject = function () {
      $mdDialog.hide();
      $mdToast.show($mdToast.simple().content('Creating project...').hideDelay(0));
      $scope.project.$create(function (resp) {
        $scope.projects.push(resp);
        $scope.po.project = resp;
        $mdToast.hide();
        $scope.project = new Project();
      }, function (e) {
        $log.error(JSON.stringify(e));
      });
    };
    $scope.cancelAddProject = function () {
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
        controller: function () {
          this.parent = $scope;
        }
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
        controller: function () {
          this.parent = $scope;
        }
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
      purchasedItem.cost = Number(purchasedItem.cost || purchasedItem.unit_cost || 0);
      if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers')) {
        for (var i = 0; i < purchasedItem.suppliers.length; i++) {
          if (purchasedItem.suppliers[i].supplier.id == ($scope.po.supplier.id || $scope.po.supplier.supplier.id)) {
            purchasedItem.cost = Number(purchasedItem.suppliers[i].cost);
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
                  var supply = obj.isPrototypeOf(Supply) ? obj : new Supply(obj);  //supply.$update();
                }
              }, 5000);  //jshint ignore:line
            }  //if (po.items[i].cost == newVal[i].cost)
          }
        }
      } catch (e) {
        $log.warn(e.stack);
      }
    }, true);
    /*
	 * Unit costs
	 */
    $scope.unitCost = function (unitCost, discount) {
      return unitCost - unitCost * (discount / 100);
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
          subtotal += $scope.unitCost(item.cost, discount) * item.quantity;
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
      return total + total * ($scope.po.vat / 100);
    };
    /*
	 * Verfication of order
	 */
    $scope.verifyOrder = function () {
      if (!$scope.po.hasOwnProperty('supplier')) {
        throw new Error('Please select a supplier');
      }
      if ($scope.po.items.length <= 0) {
        throw new Error('Please add items to the purchase order');
      }
      for (var i = 0; i < ($scope.po.items.length || []); i++) {
        if (!$scope.po.items[i].quantity || $scope.po.items[i].quantity <= 0) {
          throw new Error($scope.po.items[i].description + ' is missing a quantity');
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
          $mdToast.show($mdToast.simple().position('top right').content('Creating new purchase order...').hideDelay(0));
          /*
				 * prep the items by moving the supply id to a separate hash
				 */
          for (var i = 0; i < $scope.po.items.length; i++) {
            $scope.po.items[i].supply = { id: $scope.po.items[i].id };
            delete $scope.po.items[i].id;
          }
          /*
				 * Preps for creation of a new project
				 */
          if ($scope.po.newProject) {
            $scope.po.project = { codename: $scope.po.newProjectName };
            delete $scope.po.newProject;
            delete $scope.po.newProjectName;
          }
          $scope.po.$save(function (response) {
            try {
              $window.open(response.pdf.url);
            } catch (e) {
              $log.warn(e);
            }
            $mdToast.show($mdToast.simple().position('top right').content('Purchase order created.'));
            //Change page to newly saved purchase order page
            $location.path('/order/purchase_order/' + response.id);
          }, function (e) {
            $log.error(JSON.stringify(e));
            $mdToast.show($mdToast.simple().content('There was an error in creeating the purchase order. A report has been sent to Charlie'));
          });
        } else {
          throw Error;
        }
      } catch (e) {
        $log.error(JSON.stringify(e));
        $mdToast.show($mdToast.simple().position('top right').content(e).hideDelay(0));
      }
    };
    /*
	 * Reset the order
	 */
    $scope.reset = function () {
      $scope.po = new PurchaseOrder();
      $scope.po.items = [];
    };
  }
]);
angular.module('employeeApp.directives').directive('addSupply', [
  '$rootScope',
  'Supplier',
  'Supply',
  '$mdToast',
  '$http',
  '$log',
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
            if (response.data[i] && response.data[i] != 'custom' && !scope.types[response.data[i].toLowerCase()]) {
              scope.types[response.data[i]] = response.data[i].toLowerCase();
            }
          }
        });
        scope.$watch('assignedSupplier', function (val) {
          if (val) {
            scope.supply.supplier = angular.copy(val);
          }
        });
        //Request suppliers via get if not already assigned
        scope.$watch('visible', function (val) {
          if (val && !scope.supplier) {
            scope.suppliers = scope.suppliers || Supplier.query({ limit: 0 });
          }
        });
        /*
			 * Watch the supplier scope in case a supplier is assigned
			 */
        scope.showWidth = function () {
          var units = scope.supply.units;
          var type = scope.supply.type;
          return scope.supply.new_supply ? units === 'm' || units === 'pc' || units === 'pack' || units === 'yd' || units === 'kg' && type === 'packaging' ? true : false : false;
        };
        scope.showDepth = function () {
          var units = scope.supply.units;
          return scope.supply.new_supply ? units === 'pc' || units === 'pack' ? true : false : false;
        };
        scope.showHeight = function () {
          var units = scope.supply.units;
          var type = scope.supply.type;
          return scope.supply.new_supply ? units === 'pc' || units === 'pack' || units === 'kg' && type === 'packaging' ? true : false : false;
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
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Creating supply...'));
            //Moves the supply and adds the the supplier array
            scope.supply.suppliers = scope.supply.suppliers || [];
            if (scope.supply.suppliers.indexOfById(scope.supply.supplier)) {
              var supplier_data = scope.supply.supplier;
              supplier_data.supplier = { 'id': supplier_data.id };
              delete supplier_data.id;
              scope.supply.suppliers.push(supplier_data);
            }
            delete scope.supply.supplier;
            //Decides whether to update or create based on presence of id
            if (scope.supply.hasOwnProperty('id')) {
              scope.supply.$update(function (response) {
                scope.visible = false;
                scope.onAdd({ $supply: scope.supply });
                scope.supply = new Supply();
                $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Supply created.'));
                if (scope.assignedSupplier) {
                  scope.supply.supplier = angular.copy(scope.assignedSupplier);
                }
              }, function (reason) {
                $log.error(reason);
              });
            } else {
              scope.supply.$create(function (response) {
                scope.visible = false;
                scope.onAdd({ $supply: scope.supply });
                scope.supply = new Supply();
                $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Supply created.'));
                if (scope.assignedSupplier) {
                  scope.supply.supplier = angular.copy(scope.assignedSupplier);
                }
              }, function (reason) {
                $log.error(reason);
                $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('There was an error in creating the supply'));
              });
            }
          } else {
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Please fill out the form properly'));
          }
        };
        scope.addImage = function (data) {
          scope.supply.image = data;
        };
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('addSupplier', [
  '$rootScope',
  'Supplier',
  '$mdToast',
  '$log',
  function ($rootScope, Supplier, $mdToast, $log) {
    return {
      templateUrl: 'views/templates/add-supplier.html',
      replace: true,
      restrict: 'EA',
      scope: {
        'visible': '=addSupplier',
        'onAdd': '&'
      },
      link: function postLink(scope, element, attrs) {
        scope.supplier = new Supplier();
        scope.contact = {};
        /*
			 * Tips for the form
			 * 
			 * A list of tooltip texts for help the user navigate the form
			 */
        scope.nameTip = 'What is the supplier\'s name (required)';
        scope.thaiNameTip = 'Enter the supplier\'s name in Thai';
        scope.emailTip = 'Enter a valid email address (required)';
        scope.telTip = 'Enter a valid phone number (required)';
        scope.currencyTip = 'What currency does this supplier deal in? (required)';
        scope.discountTip = 'What discount do we get? (required)';
        scope.termsTip = 'How many days of credit do we get? (required)';
        scope.addrTip = 'What is the supplier\'s address (required)';
        scope.cityTip = 'What city is the supplier in? (required)';
        scope.territoryTip = 'What chaengwat/territory/state is the supplier in? (required)';
        scope.countryTip = 'What country is the supplier in? (requied)';
        scope.zipcodeTip = 'What zipcode is the supplier in? (required)';
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
            throw ValueError('There can only be 1 primary contact');
          }
        };
        scope.add = function () {
          try {
            if (scope.form.$valid) {
              $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Creating supplier...'));
              scope.supplier.$save(function (response) {
                $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Supplier created.'));
                //Call on add
                scope.onAdd({ $supplier: scope.supplier });
                //Reset to before add
                scope.visible = false;
                scope.supplier = new Supplier();
              }, function (reason) {
                $log.error(reason);
                $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error in creating the supplier'));
              });
            } else {
              $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Please fill out the form properly'));
            }
          } catch (e) {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content(e));
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').factory('inventory', [function () {
    // Service logic
    // ...
    var meaningOfLife = 42;
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }]);
angular.module('employeeApp').directive('onScrollEnd', [
  '$log',
  function ($log) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('scroll', function (e) {
          var childHeight = $(element.children()[0]).height();
          var elHeight = element.height();
          if (childHeight >= elHeight) {
            if (element.scrollTop() + elHeight >= childHeight - 10) {
              try {
                scope.$eval(attrs.onScrollEnd);
              } catch (err) {
                console.error('Missing a function for \'on-scroll-end\'');
              }
            }
          }
        });
      }
    };
  }
]);
angular.module('employeeApp').directive('customerList', [
  'Customer',
  '$mdToast',
  'KeyboardNavigation',
  '$rootScope',
  '$filter',
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
        var fetching = true, currentSelection, index = 0;
        /*
			* Initial fetching of the customers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
        scope.customers = Customer.query({ limit: 20 }, function (response) {
          fetching = false;
          changeSelection(index);
        });
        /*
			 * Search
			 */
        scope.$watch('query', function (q) {
          if (q) {
            Customer.query({
              q: q,
              limit: 5
            }, function (resources) {
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
            $mdToast.show($mdToast.simple().position('right top').hideDelay(0).content('Loading customers suppliers...'));
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
          scope.onSelect({ 'customer': customer });
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
          if (scrollTop > selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          } else if (scrollTop + cHeight < selection.outerHeight() * i) {
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
  }
]);
angular.module('employeeApp').directive('upholsteryList', [
  'Upholstery',
  'Notification',
  '$filter',
  'KeyboardNavigation',
  '$rootScope',
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
        var fetching = true, currentSelection, index = 0;
        /*
             * Initial fetching of the customers.
             * 
             * We will turn the fetching flag to false
             * once we received the results
             */
        scope.upholsteries = Upholstery.query({ limit: 20 }, function (response) {
          fetching = false;
          changeSelection(index);
        });
        /*
			* Search
			*/
        scope.$watch('query', function (q) {
          if (q) {
            scope.currentIndex = 0;
            Upholstery.query({
              q: q,
              limit: 10 + scope.query.length * 2
            }, function (resources) {
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
            Notification.display('Loading more upholsteries...', false);
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
          if (scrollTop > selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          } else if (scrollTop + cHeight < selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          }
        }
        scope.select = function (upholstery) {
          scope.onSelect({ $upholstery: upholstery });
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
  }
]);
angular.module('employeeApp').directive('tableList', [
  'Table',
  'Notification',
  'KeyboardNavigation',
  '$rootScope',
  '$filter',
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
        var fetching = true, currentSelection, index = 0;
        /*
             * Initial fetching of the customers.
             * 
             * We will turn the fetching flag to false
             * once we received the results
             */
        scope.tables = Table.query({ limit: 20 }, function (response) {
          fetching = false;
          changeSelection(index);
        });
        /*
			 * Search
			 */
        scope.$watch('query', function (q) {
          if (q) {
            Table.query({
              q: q,
              limit: 10
            }, function (resources) {
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
            Notification.display('Loading more tables...', false);
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
          scope.onSelect({ $table: table });
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
          if (scrollTop > selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          } else if (scrollTop + cHeight < selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          }
        }
        scope.select = function (table) {
          scope.onSelect({ $table: table });
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
  }
]);
angular.module('employeeApp').directive('fabricSelector', [
  'Fabric',
  '$mdToast',
  '$parse',
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
            Fabric.query({
              q: q,
              limit: 5
            }, function (resources) {
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
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Loading more fabrics...'));
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
            try {
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
  }
]);
angular.module('employeeApp').controller('OrderPurchaseOrderDetailsCtrl', [
  '$scope',
  '$routeParams',
  'PurchaseOrder',
  '$mdToast',
  '$location',
  '$window',
  'Project',
  '$mdDialog',
  'Room',
  'Phase',
  '$log',
  function ($scope, $routeParams, PurchaseOrder, $mdToast, $location, $window, Project, $mdDialog, Room, Phase, $log) {
    var updateLoopActive = false, timeoutPromise, map, geocoder = new google.maps.Geocoder(), markers = [], mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      }, styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'on' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Create new map and set the map style
    map = new google.maps.Map($('#po-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //General purpose create marker function
    function createMarker(configs) {
      var lat = configs.address.latitude || configs.latitude, lng = configs.address.longitude || configs.longitude;
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
        if (this.address.latitude != $scope.supplier.addresses[0].latitude || this.address.longitude != $scope.supplier.addresses[0].longitude) {
          $scope.po.supplier.addresses[0].latitude = latLng.lat();
          $scope.po.supplier.addresses[0].longitude = latLng.lng();
        }
        //Change icon color
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      }.bind(configs));
      return configs.marker;
    }
    //Retrieve the purchase order from the server
    $scope.po = PurchaseOrder.get({ id: $routeParams.id }, function () {
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
        marker = createMarker({
          address: address,
          title: $scope.po.supplier.name,
          latitude: latLng.lat(),
          longitude: latLng.lng(),
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
        map.panTo(marker.getPosition());
        map.setZoom(17);
      } else {
      }
    });
    //Get a list of projects
    $scope.projects = Project.query({
      limit: 0,
      page_size: 1000
    }, function () {
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
        controller: function () {
          this.parent = $scope;
        }
      });
    };
    $scope.completeAddProject = function () {
      $mdDialog.hide();
      $mdToast.show($mdToast.simple().content('Creating project...').hideDelay(0));
      $scope.project.$create(function (resp) {
        $scope.projects.push(resp);
        $scope.po.project = resp;
        $mdToast.hide();
        $scope.project = new Project();
      }, function () {
      });
    };
    $scope.cancelAddProject = function () {
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
        controller: function () {
          this.parent = $scope;
        }
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
        controller: function () {
          this.parent = $scope;
        }
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
      $mdToast.show($mdToast.simple().position('top right').content('Saving changes to purchase order ' + $scope.po.id).hideDelay(0));
      $scope.po.$update(function () {
        $mdToast.show($mdToast.simple().position('top right').content('Changes to purchase order ' + $scope.po.id + ' saved.').hideDelay(2000));
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
        $log.error(e);
      });
    };
    /*
	 * Unit costs
	 */
    $scope.unitCost = function (unitCost, discount) {
      return unitCost - unitCost * (discount / 100);
    };
    /*
	 * Functions to get summary totals
	 */
    $scope.subtotal = function () {
      var subtotal = 0;
      if ($scope.po.items) {
        for (var i = 0; i < $scope.po.items.length; i++) {
          var item = $scope.po.items[i];
          subtotal += $scope.unitCost(item.unit_cost, item.discount) * item.quantity;
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
      return total + total * ($scope.po.vat / 100);
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
        purchasedItem.supply = { id: purchasedItem.id };
        delete purchasedItem.id;
        //set unit cost
        if (purchasedItem.cost) {
          purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.cost;
        } else {
          purchasedItem.unit_cost = purchasedItem.unit_cost || purchasedItem.suppliers[0].cost;
        }
        $scope.po.items.push(purchasedItem);
      } else {
        $mdToast.show($mdToast.simple().position('top right').content('This item is already present in the purchase order').hideDelay(2000));
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
      $mdToast.show($mdToast.simple().content('Updating purchase order...').hideDelay(0));
      $scope.showCal = false;
      //Modify the order
      $scope.po.status = 'Ordered';
      //Receive items
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'Ordered';
      }
      $scope.po.$update(function () {
        $mdToast.show($mdToast.simple().content('Purchase order updated.'));
      });
    };
    $scope.receive = function () {
      if ($scope.po.receive_date) {
        $mdToast.show($mdToast.simple().content('Updating purchase order...').hideDelay(0));
        $scope.showCal = false;
        //Modify the order
        $scope.po.status = 'Received';
        //Receive items
        for (var i = 0; i < $scope.po.items.length; i++) {
          if ($scope.po.items[i].status.toLowerCase() != 'paid') {
            $scope.po.items[i].status = 'Received';
          }
        }
        $scope.po.$update(function () {
          $mdToast.show($mdToast.simple().content('Purchase order updated.'));
        });
      } else {
        $scope.showCal = true;
      }
    };
    $scope.pay = function () {
      $mdToast.show($mdToast.simple().content('Updating purchase order...').hideDelay(0));
      $scope.showPaidCal = false;
      //Modify the order
      $scope.po.status = 'PAID';
      //Pay for the items
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'PAID';
      }
      $scope.po.$update(function () {
        $mdToast.show($mdToast.simple().content('Purchase order updated.'));
      });
    };
    $scope.cancel = function () {
      $mdToast.show($mdToast.simple().content('Updating purchase order...').hideDelay(0));
      $scope.po.status = 'Cancelled';
      //Pay for the items
      for (var i = 0; i < $scope.po.items.length; i++) {
        $scope.po.items[i].status = 'Cancelled';
      }
      $scope.po.$update(function () {
        $mdToast.show($mdToast.simple().content('Purchase order ' + $scope.po.id + ' cancelled.'));
        $location.path('order/purchase_order');
      });
    };
  }
]);
angular.module('employeeApp').controller('SupplyDetailsCtrl', [
  '$scope',
  '$routeParams',
  'Notification',
  'Supply',
  '$timeout',
  '$location',
  'scanner',
  '$window',
  '$http',
  '$log',
  function ($scope, $routeParams, Notification, Supply, $timeout, $location, scanner, $window, $http, $log) {
    Notification.display('Retrieving supply...', false);
    /*
	 * Vars
	 */
    $scope.action = 'subtract';
    $scope.showQuantity = false;
    $scope.supply = Supply.get({
      'id': $routeParams.id,
      'country': $scope.country
    }, function () {
      Notification.hide();
      for (var index in $scope.supply.suppliers) {
        var supplier = $scope.supply.suppliers[index];
        if (typeof supplier == 'object') {
          $http.get('/api/v1/log', {
            params: {
              'action': 'PRICE CHANGE',
              'supply': $scope.supply.id,
              'supplier': supplier.id
            }
          }).then(function (response) {
            var supplier_id = response.config.params.supplier;
            var prices = [];
            var data = response.data;
            for (var i = 0; i < response.data.length; i++) {
              prices.push(response.data[i].cost);
            }
            largest = Math.max.apply(Math, prices);
            if (prices.length > 0) {
              var box = d3.select('div.price-chart-supplier-' + supplier_id + ' .chart').selectAll('div').data(data).enter().append('div').attr('class', 'price-box').style('left', function (d, i) {
                  return i * 6 + i + 'em';
                }).attr('class', function (d, i) {
                  try {
                    if (Number(data[i - 1].cost) > Number(d.cost)) {
                      return 'green';
                    } else if (Number(data[i - 1].cost) < Number(d.cost)) {
                      return 'red';
                    }
                  } catch (e) {
                    return 'black';
                  }
                });
              var costSpans = box.append('span').text(function (d) {
                  return d.cost + 'thb';
                }).attr('class', 'price');
              var dateSpans = box.append('span').attr('class', 'date').text(function (d) {
                  var date = new Date(d.timestamp);
                  return date.toLocaleDateString('en-us', {
                    year: 'numeric',
                    'month': 'short',
                    day: 'numeric'
                  });
                });
              d3.select('div.price-chart-supplier-' + supplier_id).transition().duration(1000).style('background-color', '#FFF').style('height', '10em');
              box.transition().duration(2000).delay(1000).style('height', function (d) {
                return d.cost / largest * 8 + 'em';
              });
            } else {
              d3.select('div.price-chart-supplier-' + supplier_id + ' .chart').style('display', 'none');
            }
          });  //jshint ignore:line
        }
      }
      $http.get('/api/v1/log', {
        params: {
          'action': 'SUBTRACT',
          'supply': $scope.supply.id
        }
      }).then(function (response) {
        var quantities = [];
        var data = response.data;
        for (var i = 0; i < response.data.length; i++) {
          quantities.push(response.data[i].quantity);
        }
        largest = Math.max.apply(Math, quantities);
        if (quantities.length > 0) {
          var box = d3.select('div.usage .chart').selectAll('div').data(data).enter().append('div').attr('class', 'price-box').style('left', function (d, i) {
              return i * 6 + i + 'em';
            }).style('background-color', function (d, i) {
              try {
                if (Number(data[i - 1].quantity) > Number(d.quantity)) {
                  return 'green';
                } else if (Number(data[i - 1].quantity) < Number(d.quantity)) {
                  return 'red';
                }
              } catch (e) {
                return 'black';
              }
            });
          var costSpans = box.append('span').text(function (d) {
              return d.quantity;
            }).attr('class', 'price');
          var dateSpans = box.append('span').attr('class', 'date').text(function (d) {
              var date = new Date(d.timestamp);
              return date.toLocaleDateString('en-us', {
                year: 'numeric',
                'month': 'short',
                day: 'numeric'
              });
            });
          d3.select('div.usage').transition().duration(500).style('background-color', '#FFF');
          box.transition().duration(2000).delay(500).style('height', function (d) {
            return d.quantity / largest * 8 + 'em';
          });
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
    var updateLoopActive = false, timeoutPromise;
    var validWidth = [
        'm',
        'yd',
        'pc',
        'pack',
        'container',
        'fabric'
      ];
    var validDepth = [
        'pc',
        'pack',
        'container'
      ];
    var validHeight = [
        'pack',
        'pc'
      ];
    /*
	 * Seletively show dimensions
	 */
    $scope.showWidth = function () {
      return validWidth.indexOf($scope.supply.units) > -1 || validWidth.indexOf($scope.supply.type) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
    };
    $scope.showDepth = function () {
      return validDepth.indexOf($scope.supply.units) > -1 ? true : false;
    };
    $scope.showHeight = function () {
      return validHeight.indexOf($scope.supply.units) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
    };
    $scope.addImage = function (image) {
      $scope.supply.image = image;
    };
    $scope.viewStickers = function () {
      try {
        $window.open($scope.supply.sticker.url);
      } catch (e) {
        Notification.display('This supply is missing a sticker');
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
          supply.$update({ 'country': $scope.country }, function () {
            updateLoopActive = false;
            Notification.display($scope.supply.description + ' updated');
          }, function () {
            Notification.display('There was an error in updating ' + $scope.supply.description);
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
      $scope.supply.$add({
        quantity: quantity,
        'country': $scope.country
      }, function () {
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
      $scope.supply.$subtract({
        quantity: quantity,
        'country': $scope.country
      }, function () {
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
        throw ValueError('Expecting a quantity');
      }
      $scope[action]();
    };
    $scope.$on('$destroy', function () {
      //Turn off scanner and keyboard Navigation
      scanner.disable();
      $timeout.cancel(timeoutPromise);
      Notification.display('Updating ' + $scope.supply.description + '...', false);
      $scope.supply.$update({ 'country': 'TH' }, function () {
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
  }
]);
angular.module('employeeApp').directive('imageUploader', [
  '$mdToast',
  'FileUploader',
  function ($mdToast, FileUploader) {
    return {
      templateUrl: 'views/templates/image-uploader.html',
      restrict: 'EA',
      replace: true,
      scope: {
        url: '@url',
        onUpload: '&',
        square: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.selection = 'addImage';
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
            $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('File was uploaded.'));
            scope.onUpload({
              data: dataObj.data,
              $image: dataObj.data
            });
            (callback || angular.noop)(dataObj.data);
          }, function () {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error uploading the file'));
          });
        };
      }
    };
  }
]);
angular.module('employeeApp.directives').directive('addCustomer', [
  'Customer',
  '$mdToast',
  'Geocoder',
  '$log',
  function (Customer, $mdToast, Geocoder, $log) {
    return {
      templateUrl: 'views/templates/add-customer.html',
      replace: true,
      restrict: 'A',
      scope: { visible: '=addCustomer' },
      link: function postLink(scope, element, attrs) {
        scope.customer = new Customer();
        /*
             * List of tips
             * 
             * The tips are to be used with the tooltips
             */
        scope.firstNameTip = 'Enter the customer\'s first name or name (required)';
        scope.lastNameTip = 'Enter the customer\'s last name if applicable';
        scope.emailTip = 'Enter a valid email address (required)';
        scope.telTip = 'Enter a valid phone number (required)';
        scope.typeTip = 'What type of customer is this? (required)';
        scope.currencyTip = 'What currency does this customer deal in? (required)';
        //Get the longitude and latitude of the customer's address
        scope.getLocation = function () {
          if (scope.customer.address.address1 && scope.customer.address.city && scope.customer.address.territory && scope.customer.address.country && scope.customer.address.zipcode && !scope.customer.address.user_defined_latlng) {
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
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Creating customer...'));
            scope.customer.$save(function (response) {
              $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Customer created.'));
              scope.visible = false;
              scope.customer = new Customer();
            }, function (reason) {
              $log.error(reason);
              $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error in creating the customer'));
            });
          } else {
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Please fill out the form properly'));
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').controller('MainCtrl', [
  '$scope',
  '$location',
  'Acknowledgement',
  'mapMarker',
  'PurchaseOrder',
  '$rootScope',
  '$log',
  function ($scope, $location, Acknowledgement, mapMarker, PurchaseOrder, $rootScope, $log) {
    var user = $scope.currentUser;
    var changePage = function () {
      if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && !user.hasModule('shipping')) {
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
    var latLng = {}, map, marker, markers = {
        'acknowledgements': [],
        'purchaseOrders': []
      },
      //Options for the map 
      mapOptions = {
        center: new google.maps.LatLng(13.776239, 100.527884),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROAD
      };
    var styles = [
        {
          featureType: 'road',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{ color: '#DDDDDD' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry.fill',
          stylers: [{ color: '#FFFFFF' }]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'visibility': 'off' }]
        }
      ];
    //Function to get zoom and position
    function setMapFocus(latArray, lngArray) {
      var ne = new google.maps.LatLng(Math.max.apply(null, latArray), Math.max.apply(null, lngArray)), sw = new google.maps.LatLng(Math.min.apply(null, latArray), Math.min.apply(null, lngArray));
      var bounds = new google.maps.LatLngBounds(sw, ne);
      map.fitBounds(bounds);
    }
    //Initialize map
    map = new google.maps.Map($('#main-map')[0], mapOptions);
    map.setOptions({ styles: styles });
    //Get purchase orders
    $scope.pos = PurchaseOrder.query(function () {
    }, function () {
    });
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
              title: 'Order #' + resp[i].id,
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
      var statuses, validData = [];
      if (dataType == 'acknowledgement') {
        statuses = [
          'acknowledged',
          'in production',
          'deposit received'
        ];
      } else if (dataType == 'purchase order') {
        statuses = [
          'processed',
          'ordered'
        ];
      } else {
        throw Error('Invalid data type.');
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
      var arrayHolder, getAddress, markerArray, lats = [], lngs = [];
      for (var i in markers[$scope.active]) {
        try {
          markers[$scope.active][i].setMap(null);
        } catch (e) {
          console.$error(e);
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
  }
]);
angular.module('employeeApp').directive('img', [function () {
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
angular.module('employeeApp.services').factory('KeyboardNavigation', [
  '$rootScope',
  '$log',
  function KeyboardNavigation($rootScope, $log) {
    function KeyboardNavigationFactory(configs) {
      var currentIndex = 0, enabled = false, scope = configs ? configs.scope ? configs.scope : $rootScope.$new() : $rootScope.$new(), onleft, onright, onup, ondown, onenter;
      configs = configs || {};
      function changeIndex(valInc) {
        if (configs.array) {
          scope.$apply(function () {
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
        switch (evt.which) {
        case 37:
          if (onleft) {
            directionHandler(evt, onleft);
          }
          break;
        case 38:
          changeIndex(-1);
          if (onup) {
            directionHandler(evt, onup);
          }
          break;
        case 39:
          if (onright) {
            directionHandler(evt, onright);
          }
          break;
        case 40:
          changeIndex(1);
          if (ondown) {
            directionHandler(evt, ondown);
          }
          break;
        case 13:
          if (onenter) {
            directionHandler(evt, onenter);
          }
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
  }
]);
angular.module('employeeApp').directive('supplierList', [
  'Supplier',
  '$mdToast',
  'KeyboardNavigation',
  '$rootScope',
  '$filter',
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
        var fetching = true, currentSelection, index = 0;
        /*
			* Initial fetching of the suppliers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
        scope.suppliers = Supplier.query({ limit: 20 }, function (response) {
          fetching = false;
          changeSelection(index);
        });
        /*
			 * Search
			 */
        scope.$watch('query', function (q) {
          if (q) {
            Supplier.query({
              q: q,
              limit: 5
            }, function (resources) {
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
            $mdToast.show($mdToast.simple().position('right top').hideDelay(0).content('Loading more suppliers...'));
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
          scope.onSelect({ '$supplier': supplier });
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
          if (scrollTop > selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          } else if (scrollTop + cHeight < selection.outerHeight() * i) {
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
  }
]);
angular.module('employeeApp').directive('supplyList', [
  'Supply',
  '$filter',
  'KeyboardNavigation',
  '$mdToast',
  '$rootScope',
  '$http',
  '$compile',
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
            var fetching = true, supplierId, currentSelection, index = 0;
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
                  scope.supplies = Supply.query({
                    supplier_id: val.id,
                    limit: 20
                  }, function (response) {
                    fetching = false;
                    changeSelection(index);
                  });
                }
              });
            } else {
              scope.supplies = Supply.query({ limit: 20 }, function (response) {
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
                    limit: 10 + q.length * 2
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
                $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Loading more supplies...'));
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
              scope.onSelect({ '$supply': supply });
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
              if (scrollTop > selection.outerHeight() * i) {
                container.scrollTop(selection.outerHeight() * i);
              } else if (scrollTop + cHeight < selection.outerHeight() * i) {
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
  }
]);
angular.module('employeeApp.services').service('CameraService', function CameraService() {
  function getUserMedia() {
    navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia || window.navigator.msGetUserMedia;
    return navigator.getUserMedia;
  }
  return {
    hasUserMedia: function () {
      return !!getUserMedia();
    },
    getUserMedia: getUserMedia
  };
});
angular.module('employeeApp.directives').directive('camera', [
  'CameraService',
  '$log',
  function (CameraService, $log) {
    return {
      template: '<div class="camera">' + '<div class="guide"></div>' + '<div class="active-media-area">' + '<canvas></canvas>' + '<video class="camera-video"></video>' + '</div>' + '<div class="snapshot-btn" ng-click="takeSnapshot()"></div>' + '<div class="btn-menu">' + '<div  class="save-btn" ng-click="save()">Save</div>' + '<div class="retake-btn" ng-click="retake()">Retake</div>' + '</div>' + '</div>',
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
        if (!CameraService.hasUserMedia()) {
          return;
        }
        var userMedia = CameraService.getUserMedia, canvas = element.find('canvas')[0], ctx = canvas.getContext('2d'), video = element.find('video')[0], width = scope.width || 1280, height = scope.height || 720;
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
            video: true,
            audio: false
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
          return new Blob([stream], { type: 'image/jpeg' });
        }
        scope.retake = function () {
          $(element).removeClass('active');
        };
        scope.save = function () {
          var img = getImageAsBlob(canvas.toDataURL('image/jpeg'));
          scope.onSnapshot({ $image: img });
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
          } else {
            ctx.drawImage(video, 0, 0, width, height);
          }
          $(element).addClass('active');
        };
      }
    };
  }
]);
angular.module('employeeApp.services').factory('requestError', [
  '$q',
  'Notification',
  function ($q, Notification) {
    return {
      'response': function (response) {
        return response || $q.when(response);
      },
      'responseError': function (rejection) {
        if (rejection.status > 400) {
          var msg = 'AJAX failed. status: ' + rejection.status + '. response: ' + rejection.statusText;
          var promise = $.ajax({
              type: 'POST',
              url: '/api/v1/client/log/',
              data: {
                'type': 'error',
                'message': msg
              },
              processData: true
            });
        }
        return $q.reject(rejection);
      }
    };
  }
]).config(function ($httpProvider) {
  $httpProvider.interceptors.push('requestError');
});
angular.module('employeeApp.directives').directive('supplyScannerModal', [
  'scanner',
  'Supply',
  '$mdToast',
  'KeyboardNavigation',
  '$timeout',
  '$rootScope',
  'Equipment',
  function (scanner, Supply, $mdToast, KeyboardNavigation, $timeout, $rootScope, Equipment) {
    return {
      templateUrl: 'views/templates/supply-scanner-modal.html',
      restrict: 'A',
      replace: true,
      scope: { 'visible': '=supplyScannerModal' },
      link: function postLink(scope, element, attrs) {
        /*
			 * Vars
			 */
        var keyboardNav = new KeyboardNavigation();
        scope.action = 'subtract';
        scope.disabled = false;
        scope.scanner = new scanner('supply-scanner-modal');
        scope.equipment = {
          description: 'F-50',
          brand: 'Red King'
        };
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
          $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Updating the supply\'s image'));
          var image = data.hasOwnProperty('data') ? data.data : data;
          scope.supply.image = image;
          scope.supply.$update(function () {
            $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Supply\'s image updated.'));
          });
        };
        scope.interfaceType = 'supply';
        scope.changeQuantity = function (quantity) {
          quantity = quantity || scope.quantity;
          if (scope.supply.hasOwnProperty('id') && quantity > 0 && !scope.disabled) {
            //Verifies that quantity change will not result in negative quantity
            if (scope.action == 'subtract' && scope.supply.quantity - quantity < 0) {
              throw Error('Cannot have a negative quantity');
            }
            scope.disabled = true;
            //Determines wheather to add or subtract quantity from original quantity
            if (scope.action == 'subtract') {
              scope.supply.quantity -= Number(quantity);
            } else if (scope.action == 'add') {
              scope.supply.quantity += Number(quantity);
            }
            scope.supply.$update({ 'country': $rootScope.country }, function () {
              $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Quantity of ' + scope.supply.description + ' changed to ' + scope.supply.quantity));
              scope.quantity = 0;
              $timeout(function () {
                scope.supply = undefined;
              }, 1500);
            }, function (e) {
              $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content(e));
            });
          }
        };
        /*
			 * Register the supply code regex
			 */
        scope.scanner.register(/^DRS-\d+$/, function (code) {
          $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Looking up supply'));
          scope.interfaceType = 'supply';
          scope.supply = Supply.get({
            id: code.split('-')[1],
            'country': $rootScope.country
          }, function (response) {
            scope.disabled = false;
            Notification.hide();
            focusOnQuantity();
          }, function () {
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Unable to find supply.'));  /*
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
          Supply.query({
            upc: code,
            'country': $rootScope.country
          }, function (response) {
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
          $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Looking up equipment.'));
          scope.interfaceType = 'equipment';
          scope.equipment = Equipment.get({ id: code.split('-')[1] }, function (response) {
            scope.disabled = false;
            $mdToast.hide();
          }, function () {
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Unable to find equipment.'));
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
  }
]);
angular.module('employeeApp').service('Resizer', function Resizer() {
});
angular.module('employeeApp').directive('touchstart', function () {
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
angular.module('employeeApp').directive('touchmove', function () {
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
angular.module('employeeApp').directive('touchend', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      function touchEnd(e) {
        //element.addClass('touch-end');
        element.removeClass('touch-start');
        element.removeClass('touch-move');
      }
      //Apply if an iOS device
      if (window.iOS) {
        //jsHint ignore
        element.on('touchend', touchEnd);
        scope.$on('$destroy', function () {
          element.off('touchmove', touchEnd);
        });
      }
    }
  };
});
angular.module('employeeApp').directive('touchselect', [
  '$location',
  function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //Flags
        var started = false, moved = false;
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
  }
]);
angular.module('employeeApp').controller('SupplyLogCtrl', [
  '$scope',
  '$http',
  'SupplyLog',
  function ($scope, $http, SupplyLog) {
    $scope.logs = SupplyLog.query();
  }
]);
angular.module('employeeApp').factory('SupplyLog', [
  '$resource',
  function ($resource) {
    return $resource('/api/v1/log/:id/', { id: '@id' }, {
      create: { method: 'POST' },
      update: { method: 'PUT' }
    });
  }
]);
angular.module('employeeApp').controller('SupplyBuyingGuideCtrl', [
  '$scope',
  'Supply',
  '$http',
  function ($scope, Supply, $http) {
    var d;
    /*
	 * Prepare date for query
	 *
	 * We add a condition so that the request can be more easily tested
	 * with the correct date
	 */
    if ($scope.d) {
      d = $scope.d;
    } else {
      d = new Date();
      d.setDate(d.getDate() - 21);
    }
    $scope.supplies = Supply.query({
      'log__action': 'SUBTRACT',
      'log__timestamp__gt': d.toISOString()
    });
  }
]);
angular.module('employeeApp.directives').directive('supply', [
  '$http',
  'Supply',
  '$rootScope',
  '$mdToast',
  '$timeout',
  '$window',
  'scanner',
  'D3',
  '$compile',
  'FileUploader',
  '$log',
  function ($http, Supply, $rootScope, $mdToast, $timeout, $window, scanner, D3, $compile, FileUploader, $log) {
    var subHTML;
    var promise = $http.get('views/templates/supply-details.html');
    promise.then(function (response) {
      subHTML = response.data || response;
    }, function () {
    });
    function createChart(data, property, largestSize, className) {
      var box = D3.select('div.' + className + ' .chart').selectAll('div').data(data).enter().append('div').attr('class', 'price-box').style('left', function (d, i) {
          return i * 6 + i + 'em';
        }).attr('class', function (d, i) {
          try {
            if (Number(data[i + 1][property]) > Number(d[property])) {
              return 'price-box green';
            } else if (Number(data[i + 1][property]) < Number(d[property])) {
              return 'price-box red';
            } else {
              return 'price-box black';
            }
          } catch (e) {
            return 'price-box black';
          }
        });
      var costSpans = box.append('span').text(function (d) {
          return d[property];
        }).attr('class', 'price');
      var dateSpans = box.append('span').attr('class', 'date').text(function (d) {
          var date = new Date(d.timestamp);
          return date.toLocaleDateString('en-us', {
            year: 'numeric',
            'month': 'short',
            day: 'numeric'
          });
        });
      D3.select('div.' + className).transition().duration(1000).style('border', '1px solid #CCC').style('height', '10em');
      box.transition().duration(2000).delay(1000).style('height', function (d) {
        return d[property] / largestSize * 8 + 'em';
      });
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
        scope.scanner = new scanner('supply/' + scope.supply.id);
        scope.scanner.disableStandard();
        scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
          if (scope.upcTarget) {
            scope.supply.suppliers[scope.supply.suppliers.indexOfById(scope.upcTarget.id)].code = code;
            scope.scanner.disable();
            globalScanner.enable();
            scope.upcTarget = undefined;
          }
        });
        var updateLoopActive = false, timeoutPromise, cancelWatch = angular.noop(), badTypes = [
            'custom',
            null
          ];
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
            var attrsToRemove = [
                'last_modified',
                'image',
                'supplier',
                'suppliers',
                'sticker',
                '$promise',
                '$resolved'
              ];
            for (var i = 0; i < attrsToRemove.length; i++) {
              delete supply[attrsToRemove[i]];
            }
            return supply;
          }, function (newVal, oldVal) {
            if (oldVal.hasOwnProperty('id') && !angular.equals(newVal, oldVal)) {
              $timeout.cancel(timeoutPromise);
              timeoutPromise = $timeout(function () {
                var supply = angular.copy(scope.supply);
                $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Saving ' + scope.supply.description + '...'));
                supply.$update({ 'country': $rootScope.country }, function () {
                  $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content(scope.supply.description + ' saved'));
                }, function () {
                  $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('There was an error in saving ' + scope.supply.description));
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
          return {
            'largest': Math.max.apply(Math, subData),
            'data': data
          };
        }
        /*
			 * Seletively show dimensions
			 */
        scope.showWidth = function () {
          return validWidth.indexOf($scope.supply.units) > -1 || validWidth.indexOf($scope.supply.type) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
        };
        scope.showDepth = function () {
          return validDepth.indexOf($scope.supply.units) > -1 ? true : false;
        };
        scope.showHeight = function () {
          return validHeight.indexOf($scope.supply.units) > -1 || $scope.supply.units == 'kg' && $scope.supply.type == 'packaging' ? true : false;
        };
        scope.viewStickers = function () {
          try {
            $window.open(scope.supply.sticker.url);
          } catch (e) {
            $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('This supply is missing a sticker'));
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
              scope.onSelect({ '$element': element });
            } catch (e) {
              $log.error(e);
            }
            Supply.get({ id: scope.supply.id }, function (response) {
              angular.extend(scope.supply, response);
              startWatch();
              scope.fetched = true;
              $http.get('/api/v1/log/', {
                params: {
                  'action': 'SUBTRACT',
                  'supply': scope.supply.id
                }
              }).then(function (response) {
                var dataObj = prepareData(response, 'quantity');
                if (dataObj.data.length > 0) {
                  createChart(dataObj.data, 'quantity', dataObj.largest, 'usage-chart-supply-' + scope.supply.id);
                }
              });
              for (var index in scope.supply.suppliers) {
                var supplier = scope.supply.suppliers[index];
                if (typeof supplier == 'object') {
                  $http.get('/api/v1/log/', {
                    params: {
                      'action': 'PRICE CHANGE',
                      'supply': scope.supply.id,
                      'supplier': supplier.id
                    }
                  }).then(function (response) {
                    var supplier_id = response.config.params.supplier, dataObj = prepareData(response, 'cost');
                    scope.price_logs = scope.price_logs || [];
                    scope.price_logs.push(dataObj.data);
                    if (dataObj.data.length > 0) {
                      createChart(dataObj.data, 'cost', dataObj.largest, 'price-chart-supplier-' + supplier_id);
                    } else {
                      D3.select('div.price-chart-supplier-' + supplier_id + ' .chart').style('display', 'none');
                    }
                  });  //jshint ignore:line
                }
              }
            });
          }
        };
        scope.addUPC = function (supplier) {
          globalScanner.disable();
          scope.upcTarget = supplier;
          scope.scanner.enable();
        };
        var imgCapture = element.find('.image-capture')[0];
        angular.element(imgCapture).on('change', function (evt) {
          if (evt.target.files.length > 0) {
            var image = evt.target.files[0];
            var promise = FileUploader.upload(image, '/api/v1/supply/image/');
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Uploading file...'));
            promise.then(function (dataObj) {
              $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content('File was uploaded.'));
              scope.supply.image = dataObj.data;
              scope.supply.$update({ 'country': $rootScope.country }, function () {
                $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content(scope.supply.description + ' was updated.'));
              }, function (e) {
                $mdToast.show($mdToast.simple().position('top right').hideDelay(3000).content(e));
              });
            }, function () {
              $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('There was an error uploading the file'));
            });
          }
        });
        function setPrint() {
          var afterPrint = function () {
            $('.print').empty();
          };
          if (window.matchMedia) {
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function (mql) {
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
          var container = $('.print').empty();
          var iframe = document.createElement('iframe');
          iframe.onload = setPrint;
          iframe.src = 'api/v1/supply/' + scope.supply.id + '/sticker/';
          container.append(iframe);
        };
      }
    };
  }
]);
angular.module('employeeApp.services').factory('Employee', [
  '$resource',
  '$http',
  function ($resource) {
    return $resource('/api/v1/employee/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').directive('employee', [
  '$rootScope',
  '$timeout',
  'Notification',
  'Attendance',
  '$log',
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
        var updateLoopActive = false, timeoutPromise, cancelWatch = angular.noop(), badTypes = [
            'custom',
            null
          ];
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
                  Notification.display('There was an error in updating ' + scope.employee.name);
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
              scope.onSelect({ '$element': element });
            } catch (e) {
              $log.error(e);
            }
            scope.attendances = Attendance.query({ employee__id: scope.employee.id }, function (response) {
              scope.attendances = [];
              scope.attendances.push.apply(scope.attendances, response);
            });
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').factory('Attendance', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/attendance/:id', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').directive('attendanceChart', [
  'D3',
  '$log',
  function (D3, $log) {
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
          var barWidth = element.parents('.suppliers').width() / 2, barHeight = 20, leftMargin = 90, times = [], selectedAttendances = [], selectedElements = [], origin;
          //Flags
          var mouseDown = false;
          for (var i = 0; i < scope.data.length; i++) {
            times.push(scope.data[i].total_time);
          }
          var maxTime = D3.max(times);
          var chart = D3.select(element[0]).append('svg').attr('class', 'chart').attr('width', barWidth).attr('height', 20 * scope.data.length);
          var x = D3.scale.linear().domain([
              0,
              D3.max(times)
            ]).range([
              0,
              barWidth - leftMargin
            ]);
          var bar = chart.selectAll('g').data(scope.data).enter().append('g').attr('transform', function (d, i) {
              return 'translate(0,' + i * 20 + ')';
            }).on('mouseover', function (d) {
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
            }).on('mouseout', function (d) {
              var yPos = $(this).offset().top;
              var selectedBar = D3.select(this);
              if (mouseDown) {
                $log.log(yPos + ' : ' + D3.event.y);
                var index = selectedAttendances.indexOfById(d);
                if (yPos >= D3.event.y) {
                  selectedBar.classed('selected', false);
                  selectedAttendances.splice(index, 1);
                }
              } else {
                selectedBar.classed('active', false);
              }
            }).on('mousedown', function (d) {
              mouseDown = true;
              selectedAttendances.push(d);
              var evt = D3.event;
              origin = {
                x: evt.x,
                y: evt.y
              };
              D3.select(this).classed('selected', true).classed('active', false);
            }).on('mouseup', function () {
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
          var otRect = bar.append('rect').attr('class', 'overtime').attr('x', leftMargin).attr('width', 0).attr('height', barHeight - 1);
          var regRect = bar.append('rect').attr('class', 'regular-time').attr('x', leftMargin).attr('width', 0).attr('height', barHeight - 1);
          var date = bar.append('text').attr('class', 'date').style('width', leftMargin + 'px').attr('x', leftMargin - 2).attr('y', 20 / 2).attr('dy', '.35em').text(function (d) {
              var date = new Date(d.date);
              return date.toLocaleDateString('en-us', {
                year: 'numeric',
                'month': 'short',
                day: 'numeric'
              });
            });
          otRect.transition().duration(2000).delay(function () {
            return Math.random() * 100;
          }).attr('width', function (d) {
            return d.total_time ? d.total_time / maxTime * barWidth - leftMargin : 0;
          });
          regRect.transition().duration(2000).delay(function () {
            return Math.random() * 100;
          }).attr('width', function (d) {
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
  }
]);
angular.module('employeeApp.services').service('D3', function D3() {
  return d3;  //jshint ignore:line
              // AngularJS will instantiate a singleton by calling "new" on this function
});
angular.module('employeeApp').directive('supplies', [
  'Supply',
  '$filter',
  'KeyboardNavigation',
  '$mdToast',
  '$rootScope',
  '$http',
  '$compile',
  function (Supply, $filter, KeyboardNavigation, $mdToast, $rootScope, $http, $compile) {
    return {
      templateUrl: 'views/templates/supplies.html',
      replace: true,
      restrict: 'A',
      scope: {
        onSelect: '&',
        supplier: '=',
        newSupply: '='
      },
      compile: function compile(tElement, tAttrs, transclude) {
        return {
          post: function postLink(scope, element, attrs) {
            var fetching = true, supplierId, currentSelection, index = 0;
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
                  scope.supplies = Supply.query({
                    supplier_id: val.id,
                    limit: 20
                  }, function (response) {
                    fetching = false;
                    changeSelection(index);
                  });
                }
              });
            } else {
              scope.supplies = Supply.query({ limit: 20 }, function (response) {
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
                  limit: 10 + q.length * 2
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
                $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Loading more supplies...'));
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
              scope.onSelect({ '$supply': supply });
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
              if (scrollTop > selection.outerHeight() * i) {
                container.scrollTop(selection.outerHeight() * i);
              } else if (scrollTop + cHeight < selection.outerHeight() * i) {
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
  }
]);
angular.module('employeeApp.services').factory('Equipment', [
  '$resource',
  '$http',
  function ($resource) {
    return $resource('/api/v1/equipment/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp.directives').directive('addEquipment', [
  '$rootScope',
  'Supplier',
  'Supply',
  'Notification',
  '$http',
  'Equipment',
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
          {
            description: 'F-50 Pnuematic Stapler',
            image: 'img/equipment/F50.jpg'
          },
          {
            description: 'F-30 Pnuematic Stapler',
            image: 'img/equipment/F30.jpg'
          },
          {
            description: 'J-1022 Pnuematic Stapler',
            image: 'img/equipment/J1022.jpg'
          },
          {
            description: 'ST-64 Pneumatic Stapler',
            image: 'img/equipment/ST64.jpg'
          },
          {
            description: 'Electric Hand Drill',
            image: 'img/equipment/hand_drill.jpg'
          },
          {
            description: 'Electric Jigsaw',
            image: 'img/equipment/jigsaw.jpg'
          },
          {
            description: 'Electric Router',
            image: 'img/equipment/router.jpg'
          },
          {
            description: 'Polisher',
            image: 'img/equipment/polisher.jpg'
          },
          {
            description: 'Electric Sander',
            image: 'img/equipment/electric_sander.jpg'
          }
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
        scope.add = function (equipment) {
          if (scope.form.$valid && scope.equipment.description) {
            Notification.display('Adding new ' + scope.description + '...', false);
            scope.equipment.$create(function () {
              Notification.display(scope.description + ' Added.');
              scope.equipment = new Equipment();
            }, function () {
              Notication.display('Could not add ' + scope.description, false);
            });
          }
        };
        scope.addImage = function (data) {
          scope.equipment.image = data;
        };
      }
    };
  }
]);
angular.module('employeeApp').controller('EquipmentViewCtrl', [
  '$scope',
  'Equipment',
  'Notification',
  '$filter',
  'KeyboardNavigation',
  '$rootScope',
  '$location',
  '$http',
  'FileUploader',
  '$timeout',
  '$log',
  function ($scope, Equipment, Notification, $filter, KeyboardNavigation, $rootScope, $location, $http, FileUploader, $timeout, $log) {
    /*
	* Vars and flags
	*/
    var fetching = true, index = 0, currentSelection, activeQueryLoop = false, masterList = [], q;
    //system message
    Notification.display('Loading supplies...', false);
    $scope.scannerMode = false;
    $scope.equipmentList = Equipment.query({ 'country': $scope.country }, function (resources) {
      fetching = false;
      Notification.hide();
      changeSelection(index);
    });
    /*
	*  Focus the list to the active element
	*/
    $scope.focus = function ($element) {
      var container = $('div.outer-container');
      /*
		 * Set new scrollTop to determined by 
		 * - Scroll Top
		 * - offset of element
		 * - mainmenu height 
		 */
      container.animate({ scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height() });
    };
    /*
	* Adding image for ipads and iphones
	* 
	* This particular function is intended for the iphone and ipad.
	* It allows the user to directly add an image to the supply from the 
	* device's camera
	*/
    $scope.addImage = function (element, supply) {
      //Upload the file
      var promise = FileUploader.upload(element.files[0], '/api/v1/supply/image');
      //Process the file after a successful upload
      promise.then(function (data) {
        Notification.display('Image uploaded');
        //Apply the image data and url to the supply, 
        //and then save the supply to the serve
        $scope.safeApply(function () {
          supply.image = data.hasOwnProperty('data') ? data.data : data;
          supply.save();
        });  //Process a failed upload
      }, function (e) {
        $log.error(e);
        Notification.display('Unable to upload image', false);
      });
    };
    /*
	* Search mechanism
	* 
	* This function will send a GET request to the server
	* whenever the query string changes and that string will 
	* be sent along as a parameter. 
	*/
    $scope.$watch('query', function (q) {
      /*
		//Set global q to search
		q = queryStr
		
		//checks if the loop is currently active
		//$scope.supplies = filter(masterList);
		$timeout(function () {
			$scope.supplies = filter(masterList);
		}, 1);
		
		var tSwitch = $timeout(function () {
			Supply.query({limit: 10, q: q, 'country': $scope.country}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if (masterList.indexOfById(resources[i].id) == -1) {
						masterList.push(resources[i]);
					}
				}
				$scope.supplies = filter(masterList);
				activeQueryLoop = false;
			});
		}, 1);
		*/
      //To Be deprecated in favor of a timeout based
      //query mechanism
      if (q) {
        Supply.query({
          limit: q.length,
          q: q,
          'country': $scope.country
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.supplies.indexOfById(resources[i].id) == -1) {
              $scope.supplies.push(resources[i]);
            }
          }
          index = 0;
          changeSelection(index);
        });
      }
    });
    /*
	* Load more supplies
	* 
	* This function will load more supplies from the server
	* be using the current number of supplies as the offset
	*/
    $scope.loadNext = function () {
      if (!fetching) {
        Notification.display('Loading more supplies...', false);
        Equipment.query({
          offset: $scope.equipmentList.length,
          limit: 50
        }, function (resources) {
          Notification.hide();
          for (var i = 0; i < resources.length; i++) {
            if ($scope.equipmentList.indexOfById(resources[i].id) == -1) {
              $scope.equipmentList.push(resources[i]);
            }
          }
        });
      }
    };
    function changeSelection(i) {
      $rootScope.safeApply(function () {
        if (currentSelection) {
          currentSelection.$selected = false;
        }
        currentSelection = filter($scope.supplies)[i];
        if (currentSelection) {
          currentSelection.$selected = true;
        }
      });
      var selection = $('.item.selected');
      var container = selection.parents('.outer-container');
      var scrollTop = container.scrollTop();
      var cHeight = container.innerHeight();
      if (scrollTop > selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      } else if (scrollTop + cHeight < selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      }
    }
    var keyboardNav = new KeyboardNavigation();
    keyboardNav.ondown = function () {
      if (index < filter($scope.supplies).length - 1) {
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
        $location.path('/supply/' + currentSelection.id);
      });
    };
    keyboardNav.enable();
    /*
	 * When adding suppliers or supply
	 * disable the keyboard navigation
	 */
    $scope.$watch('showAddSupply', function (val, oldVal) {
      if (val && !oldVal) {
        keyboardNav.disable();
      } else if (!val && oldVal) {
        keyboardNav.enable();
      }
    });
    $scope.$watch('showAddSupplier', function (val, oldVal) {
      if (val && !oldVal) {
        keyboardNav.disable();
      } else if (!val && oldVal) {
        keyboardNav.enable();
      }
    });
    $scope.$watch('scannerMode', function (val, oldVal) {
      if (val && !oldVal) {
        globalScanner.disable();
        keyboardNav.disable();
      } else if (!val && oldVal) {
        globalScanner.enable();
        keyboardNav.enable();
      }
    });
    $scope.$on('$destroy', function () {
      keyboardNav.disable();
    });
  }
]);
angular.module('employeeApp.directives').directive('equipment', [
  '$http',
  'Equipment',
  '$rootScope',
  'Notification',
  '$timeout',
  '$window',
  'scanner',
  'D3',
  '$compile',
  '$log',
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
      var box = D3.select('div.' + className + ' .chart').selectAll('div').data(data).enter().append('div').attr('class', 'price-box').style('left', function (d, i) {
          return i * 6 + i + 'em';
        }).attr('class', function (d, i) {
          try {
            if (Number(data[i + 1][property]) > Number(d[property])) {
              return 'price-box green';
            } else if (Number(data[i + 1][property]) < Number(d[property])) {
              return 'price-box red';
            } else {
              return 'price-box black';
            }
          } catch (e) {
            return 'price-box black';
          }
        });
      var costSpans = box.append('span').text(function (d) {
          return d[property];
        }).attr('class', 'price');
      var dateSpans = box.append('span').attr('class', 'date').text(function (d) {
          var date = new Date(d.timestamp);
          return date.toLocaleDateString('en-us', {
            year: 'numeric',
            'month': 'short',
            day: 'numeric'
          });
        });
      D3.select('div.' + className).transition().duration(1000).style('border', '1px solid #CCC').style('height', '10em');
      box.transition().duration(2000).delay(1000).style('height', function (d) {
        return d[property] / largestSize * 8 + 'em';
      });
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
        var updateLoopActive = false, timeoutPromise, cancelWatch = angular.noop(), badTypes = [
            'custom',
            null
          ];
        /*
			 * General Functions
			 */
        //Start a watch on the scope for the supply var
        function startWatch() {
          cancelWatch = scope.$watch(function () {
            var equipment = angular.copy(scope.equipment);
            var attrsToRemove = [
                'last_modified',
                'image',
                'supplier',
                'sticker'
              ];
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
                  Notification.display('There was an error in saving DRE-' + scope.equipment.id);
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
          return {
            'largest': Math.max.apply(Math, subData),
            'data': data
          };
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
              scope.onSelect({ '$element': element });
            } catch (e) {
              $log.error(e);
            }
            Equipment.get({ id: scope.equipment.id }, function (response) {
              angular.extend(scope.equipment, response);
              startWatch();
              scope.fetched = true;
            });
          }
        };
      }
    };
  }
]);
angular.module('employeeApp').controller('SupplyShoppingListCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    var promise = $http.get('/api/v1/supply/shopping_list');
    promise.then(function (response) {
      $scope.supplies = response.data;
    });
  }
]);
angular.module('employeeApp').directive('suppliers', [
  'Supplier',
  '$mdToast',
  'KeyboardNavigation',
  '$rootScope',
  '$filter',
  function (Supplier, $mdToast, KeyboardNavigation, $rootScope, $filter) {
    return {
      templateUrl: 'views/templates/suppliers.html',
      replace: true,
      restrict: 'A',
      scope: { onSelect: '&' },
      link: function postLink(scope, element, attrs) {
        var fetching = true, currentSelection, index = 0;
        /*
			* Initial fetching of the suppliers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
        scope.suppliers = Supplier.query({ limit: 20 }, function (response) {
          fetching = false;
          changeSelection(index);
        });
        /*
			 * Search
			 */
        scope.$watch('query', function (q) {
          if (q) {
            Supplier.query({
              q: q,
              limit: 5
            }, function (resources) {
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
            $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Loading more suppliers...'));
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
          scope.onSelect({ '$supplier': supplier });
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
          if (scrollTop > selection.outerHeight() * i) {
            container.scrollTop(selection.outerHeight() * i);
          } else if (scrollTop + cHeight < selection.outerHeight() * i) {
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
  }
]);
angular.module('employeeApp').controller('DialogsSupplyScannerCtrl', [
  '$scope',
  '$mdDialog',
  'scanner',
  '$timeout',
  'Supply',
  '$mdToast',
  'Employee',
  '$http',
  '$rootScope',
  'Equipment',
  'PurchaseOrder',
  'KeyboardNavigation',
  function ($scope, $mdDialog, scanner, $timeout, Supply, $mdToast, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation) {
    /*
	 * Vars
	 */
    var keyboardNav = new KeyboardNavigation(), checkoutActive = false;
    $scope.scanner = new scanner('supply-scanner-modal');
    $scope.interfaceType = 'equipment';
    $scope.supplies = [];
    $scope.equipmentList = [];
    $scope.poList = PurchaseOrder.query();
    $scope.scanner.enable();
    $scope.scanner.disableStandard();
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
    /* Add Image
	 * 
	 * Updates the image of the currently selected supply
	 */
    $scope.addImage = function (data) {
      Notification.display('Updating the supply\'s image', false);
      var image = data.hasOwnProperty('data') ? data.data : data;
      $scope.supply.image = image;
      $scope.supply.$update(function () {
        Notification.display('Supply\'s image updated.');
      });
    };
    /*
	 * Register the supply code regex
	 */
    $scope.scanner.register(/^DRS-\d+$/, function (code) {
      try {
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up supply...'));
      } catch (e) {
      }
      Supply.get({
        id: code.split('-')[1],
        'country': $rootScope.country
      }, function (response) {
        $mdToast.hide();
        if ($scope.supplies.indexOfById(response) == -1) {
          response.$$action = 'subtract';
          $scope.supplies.push(response);
          $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Added ' + response.description + ' to checkout.'));
        } else {
          $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content(response.description + ' already in checkout'));
        }
      }, function () {
        $mdToast.show($mdToast.simple().hideDelay(0).position('top right').action('Close').content('Unable to find supply.'));
      });
    });
    /*
	 * Register the upc regex
	 */
    $scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
      try {
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up supply...'));
      } catch (e) {
      }
      Supply.query({
        upc: code,
        'country': $rootScope.country
      }, function (response) {
        response[0].$$action = 'subtract';
        $scope.supplies.push(response[0]);
        $mdToast.hide();
        $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Added ' + response.description + ' to checkout.'));
      }, function (reason) {
      });
    });
    /*
	 * Register the Purchase Order regex
	 */
    $scope.scanner.register(/^PO-\d+$/, function (code) {
      try {
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up Purchase Order...'));
      } catch (e) {
      }
      PurchaseOrder.get({ id: code.split('-')[1] }, function (response) {
        $scope.po = response;
        $mdToast.hide();
        for (var j = 0; j < $scope.po.items.length; j++) {
          $scope.po.items[j].$$action = true;
        }
      }, function (reason) {
      });
    });
    /*
	 *  Regiester the equipment code
	 */
    $scope.scanner.register(/^DRE-\d+$/, function (code) {
      $mdToast.show($mdToast.simple().hideDelay(0).position('top right').action('Close').content('Looking up Equipment...'));
      Equipment.get({ id: code.split('-')[1] }, function (response) {
        $mdToast.hide();
        $scope.equipmentList.push(response);
      }, function () {
        $mdToast.show($mdToast.simple().content('Unable to find equipment.').position('top right').action('Close').hideDelay(0));
      });
    });
    /*
	 *  Regiester the employee code
	 */
    $scope.scanner.register(/^DREM-\d+$/, function (code) {
      $mdToast.hide();
      //Notifiy the user of action
      $mdToast.show($mdToast.simple().content('Looking up employee...').position('top right').action('close').hideDelay(0));
      $scope.equipment = Employee.get({ id: code.split('-')[1] }, function (response) {
        $scope.employee = response;
        $mdToast.hide();
      }, function () {
        $mdToast.show($mdToast.simple().content('Unable to find employee.').position('top right').action('close').hideDelay(0));
      });
    });
    $scope.verify = function () {
      $mdToast.hide();
      for (var i = 0; i < $scope.supplies.length; i++) {
        if ($scope.supplies[i].$$action == 'subtract') {
          if ($scope.supplies[i].$$quantity > $scope.supplies[i].quantity) {
            throw Error($scope.supplies[i].description + ' quantity cannot be negative');
          }
        }
      }
      return true;
    };
    $scope.checkout = function () {
      $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Processing checkout...'));
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
          checkoutActive = false;
          $mdToast.show($mdToast.simple().position('top right').hideDelay(0).action('close').content(e.message));
        }
        //Perform Purchase Order PUT
        if ($scope.po) {
          for (var g = 0; g < $scope.po.items.length; g++) {
            if ($scope.po.items[g].$$action) {
              $scope.po.items[g].status = 'Received';
            }
          }
          $scope.po.status = 'Received';
          $scope.po.$update(function () {
            delete $scope.po;
            $scope.postCheckout();
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
        $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Checkout complete.'));
      }
    };
    $scope.checkoutError = function (e) {
      $mdToast.show($mdToast.simple().position('top right').hideDelay(0).action('Close').content('There was a checkout error'));
    };
    $scope.$on('$destroy', function () {
      $scope.scanner.disable();
      try {
        window.globalScanner.enable();
      } catch (e) {
      }
    });
  }
]);
angular.module('employeeApp').controller('DialogsAddEmployeeCtrl', [
  '$scope',
  'Employee',
  '$mdToast',
  function ($scope, Employee, $mdToast) {
    $scope.employee = new Employee();
    $scope.departments = [
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
    $scope.addImage = function (data) {
      var image = data.hasOwnProperty('data') ? data.data : data;
      $scope.employee.image = image;
    };
    $scope.create = function () {
      $mdToast.show($mdToast.simple().hideDelay(0).position('top right').content('Creating employee ' + $scope.employee.first_name + '.'));
      $scope.employee.$create(function () {
        $mdToast.hide();
        $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Employee ' + $scope.employee.first_name + ' created.'));
        $scope.reset();
      });
    };
    $scope.reset = function () {
      $scope.employee = new Employee();
    };
  }
]);
angular.module('employeeApp').controller('AddSupplierContactCtrl', [
  '$scope',
  '$mdDialog',
  function ($scope, $mdDialog) {
    $scope.complete = function () {
      $mdDialog.hide();
    };
  }
]);
/**
 * @ngdoc directive
 * @name frontendApp.directive:fileDrop
 * @description
 * # fileDrop
 */
angular.module('employeeApp').directive('fileDrop', function () {
  return {
    restrict: 'EA',
    scope: { onDrop: '&fileDrop' },
    link: function postLink(scope, element, attrs) {
      /*
             * Create Objects and Functions to be used
             */
      //File Reader
      var fileReader = new FileReader();
      fileReader.onload = function (evt) {
        scope.onDrop({ $file: evt.target.result });
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
        scope.onDrop({ $files: files });
      });
    }
  };
});
angular.module('employeeApp').controller('OrderEstimateViewCtrl', [
  '$scope',
  'Estimate',
  '$location',
  '$filter',
  'KeyboardNavigation',
  '$mdToast',
  function ($scope, Estimate, $location, $filter, KeyboardNavigation, $mdToast) {
    /*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
    var fetching = true, index = 0, currentSelection;
    var loadingToast = $mdToast.show($mdToast.simple().position('top right').content('Loading estimates...').hideDelay(0));
    //Poll the server for acknowledgements
    $scope.estimates = Estimate.query({ limit: 20 }, function (e) {
      $mdToast.hide();
      fetching = false;
      changeSelection(index);
    });
    /*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
    $scope.$watch('query.$.$', function (q) {
      if (q) {
        Estimate.query({
          q: q,
          limit: q ? q.length : 5
        }, function (resources) {
          for (var i = 0; i < resources.length; i++) {
            if ($scope.estimates.indexOfById(resources[i].id) == -1) {
              $scope.estimates.push(resources[i]);
            }
          }
          index = 0;
          changeSelection(index);
        });
      }
    });
    //Loads the next set of data
    $scope.loadNext = function () {
      if (!fetching) {
        fetching = true;
        var moreAckToast = $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Loading more acknowledgements...'));
        Estimate.query({
          limit: 50,
          offset: $scope.estimates.length
        }, function (resources) {
          fetching = false;
          $mdToast.hide();
          for (var i = 0; i < resources.length; i++) {
            $scope.estimates.push(resources[i]);
          }
        });
      }
    };
    function filter(array) {
      return $filter('filter')(array, $scope.query);
    }
    function changeSelection(i) {
      $scope.safeApply(function () {
        if (currentSelection) {
          currentSelection.$selected = false;
        }
        currentSelection = filter($scope.estimates)[i];
        if (currentSelection) {
          currentSelection.$selected = true;
        }
      });
      var selection = $('.item.selected');
      var container = selection.parents('.outer-container');
      var scrollTop = container.scrollTop();
      var cHeight = container.innerHeight();
      if (scrollTop > selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      } else if (scrollTop + cHeight < selection.outerHeight() * i) {
        container.scrollTop(selection.outerHeight() * i);
      }
    }
    var keyboardNav = new KeyboardNavigation();
    keyboardNav.ondown = function () {
      if (index < filter($scope.estimates).length - 1) {
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
      $scope.safeApply(function () {
        $location.path('/order/acknowledgement/' + currentSelection.id);
      });
    };
    keyboardNav.enable();
    $scope.$on('$destroy', function () {
      keyboardNav.disable();
    });
  }
]);
angular.module('employeeApp.services').factory('Estimate', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/estimate/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
angular.module('employeeApp').controller('OrderEstimateCreateCtrl', [
  '$scope',
  'Estimate',
  'Customer',
  '$filter',
  '$window',
  'Project',
  '$mdToast',
  'FileUploader',
  '$log',
  function ($scope, Estimate, Customer, $filter, $window, Project, $mdToast, FileUploader, $log) {
    //Vars
    $scope.showFabric = false;
    $scope.uploading = false;
    $scope.customImageScale = 100;
    $scope.projects = Project.query({ page_size: 99999 });
    $scope.estimate = new Estimate();
    var uploadTargets = [];
    var storage = window.localStorage;
    if (storage.getItem('estimate-create')) {
      angular.extend($scope.estimate, JSON.parse(storage.getItem('estimate-create')));
    }
    $scope.estimate.items = $scope.estimate.items || [];
    $scope.employee = { id: $scope.currentUser.id };
    $scope.tempSave = function () {
      storage.setItem('estimate-create', JSON.stringify($scope.estimate));
    };
    $scope.addCustomer = function (customer) {
      //Set Customer
      $scope.estimate.customer = customer;
      //Hide Customer Panel
      $scope.showCustomers = false;
      $scope.tempSave();
    };
    $scope.addItem = function (product) {
      $scope.estimate.items.push(product);
      $scope.tempSave();
    };
    $scope.removeItem = function (index) {
      $scope.estimate.items.splice(index, 1);
      $scope.tempSave();
    };
    $scope.addFiles = function (files) {
      $scope.estimate.files = $scope.estimate.files || [];
      /* jshint ignore:start */
      for (var i = 0; i < files.length; i++) {
        $scope.estimate.files.push({ filename: files[i].name });
        var promise = FileUploader.upload(files[i], '/api/v1/acknowledgement/file/');
        promise.then(function (result) {
          var data = result.data || result;
          for (var h = 0; h < $scope.estimate.files.length; h++) {
            if (data.filename == $scope.estimate.files[h].filename) {
              angular.extend($scope.estimate.files[h], data);
            }
          }
        }, function () {
        });
      }  /* jshint ignore:end */
    };
    $scope.create = function () {
      $scope.estimate.employee = $scope.currentUser;
      $scope.tempSave();
      try {
        if ($scope.isValidated()) {
          $mdToast.show($mdToast.simple().position('top right').content('Creating new acknowledgement...').hideDelay(0));
          /*
				 * Preps for creation of a new project
				 */
          if ($scope.estimate.newProject) {
            $scope.estimate.project = { codename: $scope.estimate.newProjectName };
            delete $scope.estimate.newProject;
            delete $scope.estimate.newProjectName;
          }
          $scope.estimate.$create(function (response) {
            $mdToast.show($mdToast.simple().position('top right').content('Estimate created with ID: ' + $scope.estimate.id).hideDelay(2000));
            if (response.pdf) {
              $window.open(response.pdf);
            }
            angular.extend($scope.estimate, JSON.parse(storage.getItem('estimate-create')));
            delete $scope.estimate.newProject;
            delete $scope.estimate.newProjectName;
          }, function (e) {
            $log.error(e);
            $mdToast.show($mdToast.simple().content(e).hideDelay(0));
          });
        }
      } catch (e) {
        $mdToast.show($mdToast.simple().position('top right').content(e).hideDelay(0));
      }
    };
    $scope.reset = function () {
      $scope.estimate = new Estimate();
      $scope.estimate.items = [];
      storage.removeItem('estimate-create');
    };
    //Validations
    $scope.isValidated = function () {
      /*
         * The following are test to see if
         * The property has already been added
         */
      if (!$scope.estimate.customer) {
        throw new TypeError('Please add a customer.');
      } else {
        if (!$scope.estimate.customer.hasOwnProperty('id')) {
          throw new ReferenceError('Missin customer ID');
        }
      }
      //Validate ordered Items
      if (!$scope.estimate.items) {
        throw new TypeError('Products is not an array');
      } else {
        //Verifies that there are items ordered
        if ($scope.estimate.items.length <= 0) {
          throw new RangeError('No products added to the order');
        } else {
          for (var i = 0; i < $scope.estimate.items.length; i++) {
            var item = $scope.estimate.items[i];
            /*
                     * Check that there is a quantity 
                     * for each piece of product
                     */
            if (!$scope.estimate.items[i].hasOwnProperty('quantity') || !$scope.estimate.items[i].quantity) {
              throw new RangeError('Expecting a quantity of at least 1 for ' + $scope.estimate.items[i].description);
            }
            /*
                     * Validates that every item has a price
                     */
            if (!$scope.estimate.items[i].hasOwnProperty('has_price')) {
            } else {
              if (!$scope.estimate.items[i].has_price) {
              }
            }
            /*
                     * Validates custom items
                     */
            if (!item.hasOwnProperty('id')) {
              if (!item.is_custom) {
                throw new TypeError('Item without id is not custom. Please contact an Administrator.');
              }
            }
          }
        }
      }
      //Validate Delivery Date
      if (!$scope.estimate.delivery_date) {
        throw new TypeError('Please select a preliminary delivery date.');
      }
      //Validate vat
      if ($scope.estimate.vat === undefined || $scope.estimate.vat === null) {
        throw new TypeError('Please set the vat.');
      }
      //Return true for form validated
      return true;
    };
  }
]);
angular.module('employeeApp').controller('OrderEstimateDetailsCtrl', [
  '$scope',
  'Estimate',
  '$routeParams',
  '$http',
  '$window',
  '$mdToast',
  'FileUploader',
  function ($scope, Estimate, $routeParams, $http, $window, $mdToast, FileUploader) {
    //Show system notification
    $mdToast.show($mdToast.simple().position('top right').content('Loading estimate...').hideDelay(0));
    //Set Vars
    $scope.showCal = false;
    //GET request server for Acknowledgements
    $scope.estimate = Estimate.get({
      'id': $routeParams.id,
      'pdf': true
    }, function () {
      $mdToast.hide();
    });
    //Grid Options
    $scope.gridOptions = {
      data: 'acknowledgement.products',
      columnDefs: [{
          field: 'image',
          displayName: 'Image'
        }]
    };
    //Request log data for acknowledgement
    /*
    $scope.viewLog = function () {
        $http.get("acknowledgement/" + $scope.estimate.id + "/log").success(function (data) {
			angular.forEach(data, function (log) {
				$scope.logs = $scope.logs || [];
				$scope.logs.push(log);
				$scope.showLog = true;
			});
		});
	};
    */
    $scope.addFiles = function (files) {
      $scope.estimate.files = $scope.estimate.files || [];
      /* jshint ignore:start */
      for (var i = 0; i < files.length; i++) {
        $scope.estimate.files.push({ filename: files[i].name });
        var promise = FileUploader.upload(files[i], '/api/v1/acknowledgement/file/');
        promise.then(function (result) {
          var data = result.data || result;
          for (var h = 0; h < $scope.estimate.files.length; h++) {
            if (data.filename == $scope.estimate.files[h].filename) {
              angular.extend($scope.estimate.files[h], data);
            }
          }
          $scope.estimate.$update();
        }, function () {
        });
      }  /* jshint ignore:end */
    };
    //Save updates to the server
    $scope.save = function () {
      $mdToast.show($mdToast.simple().position('top right').content('Saving acknowledgement...').hideDelay(0));
      $scope.estimate.$update(function (response) {
        $mdToast.show($mdToast.simple().position('top right').content('Acknowledgement ' + $scope.estimate.id + ' saved.'));
      }, function () {
        $mdToast.show($mdToast.simple().position('top right').content('Failed to save acknowledgement ' + $scope.estimate.id));
      });
    };
  }
]);
/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp').directive('purchaseOrderSummary', [
  'D3',
  '$http',
  '$filter',
  function (D3, $http, $filter) {
    function createChart(element, data) {
      //Create box charts for summary
      var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div').attr('class', function (d) {
          return d.category.toLowerCase();
        });
      //Attach amount
      box.append('h2').text(function (d) {
        return '$' + $filter('number')(d.amount);
      });
      //Attach count
      box.append('h2').text(function (d) {
        return d.category + ' ' + d.count;
      });
      box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
        //Calculate bar width
        var value = d.count / d.total * 100;
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
              {
                count: e.processed.count,
                amount: e.processed.amount,
                category: 'Processed',
                total: total
              },
              {
                count: e.received.count,
                amount: e.received.amount,
                category: 'Received',
                total: total
              },
              {
                count: e.paid.count,
                amount: e.paid.amount,
                category: 'Paid',
                total: total
              }
            ];
          //Call fn to create chart
          createChart(element, data);
        });
      }
    };
  }
]);
/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp').directive('acknowledgementSummary', [
  'D3',
  '$http',
  '$filter',
  function (D3, $http, $filter) {
    function createChart(element, data, callback) {
      //Create box charts for summary
      var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div').attr('class', function (d) {
          return d.category.toLowerCase().replace(/ /gi, '-');
        });
      //Attach amount
      /*
		box.append('h2').text(function (d) {
			return "$" + $filter('number')(d.amount);
		});*/
      //Attach count
      box.append('h2').text(function (d) {
        return d.category + ' ' + d.count;
      });
      box.on('click', function (d) {
        angular.element('.acknowledgement-summary div.active').removeClass('active');
        d3.select(this).attr('class', 'active ' + d.category.toLowerCase().replace(/ /gi, '-'));
        (callback || angular.noop)({ '$category': d.category });
      });
      box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
        //Calculate bar width
        var value = d.count / d.total * 100;
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
      scope: { 'onClick': '&' },
      link: function postLink(scope, element, attrs) {
        //Set class for this element
        element.addClass('acknowledgement-summary');
        //Get Summary data
        var promise = $http.get('/api/v1/acknowledgement/stats/');
        promise.then(function (e) {
          e = e.data;
          var total = e.total.count;
          var data = [
              {
                count: e.acknowledged.count,
                amount: e.acknowledged.amount,
                category: 'Acknowledged',
                total: total
              },
              {
                count: e.deposit_received.count,
                amount: e.deposit_received.amount,
                category: 'Deposit Received',
                total: total
              },
              {
                count: e.in_production.count,
                amount: e.in_production.amount,
                category: 'In Production',
                total: total
              },
              {
                count: e.ready_to_ship.count,
                amount: e.ready_to_ship.amount,
                category: 'Ready to Ship',
                total: total
              },
              {
                count: e.shipped.count,
                amount: e.shipped.amount,
                category: 'Shipped',
                total: total
              },
              {
                count: e.invoiced.count,
                amount: e.invoiced.amount,
                category: 'Invoiced',
                total: total
              },
              {
                count: e.paid.count,
                amount: e.paid.amount,
                category: 'Paid',
                total: total
              }
            ];
          //Call fn to create chart
          createChart(element, data, scope.onClick);
        });
      }
    };
  }
]);
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsAddRoomCtrl
 * @description
 * # DialogsAddRoomCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp').controller('DialogsAddRoomCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
/**
 * @ngdoc service
 * @name frontendApp.RoomItem
 * @description
 * # RoomItem
 * Factory in the frontendApp.
 */
angular.module('employeeApp.services').factory('RoomItem', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/room-item/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
/**
 * @ngdoc service
 * @name frontendApp.models/phase
 * @description
 * # models/phase
 * Factory in the frontendApp.
 */
angular.module('employeeApp').factory('Phase', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/phase/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
/**
 * @ngdoc service
 * @name frontendApp.models/projectItemPart
 * @description
 * # models/projectItemPart
 * Factory in the frontendApp.
 */
angular.module('employeeApp').factory('ProjectItemPart', [
  '$resource',
  '$http',
  function ($resource, $http) {
    return $resource('/api/v1/project-part/:id/', { id: '@id' }, {
      update: { method: 'PUT' },
      create: { method: 'POST' }
    });
  }
]);
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangePasswordCtrl
 * @description
 * # DialogsChangePasswordCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp').controller('DialogsChangePasswordCtrl', [
  '$scope',
  '$mdDialog',
  '$http',
  '$mdToast',
  '$log',
  function ($scope, $mdDialog, $http, $mdToast, $log) {
    $scope.changePassword = function () {
      if ($scope.old_password && $scope.new_password === $scope.repeat_password) {
        var data = {
            'old': $scope.old_password,
            'newPass': $scope.new_password,
            'repeatPass': $scope.repeat_password
          };
        var promise = $http.post('/api/v1/change_password/', data);
        promise.then(function () {
          $mdDialog.hide();
          $mdToast.show($mdToast.simple().position('top right').content('Password Changed.').hideDelay(2000));
        }, function (e) {
          $log.log(e);
          $mdToast.show($mdToast.simple().position('top right').action('Close').content(e.data.status).hideDelay(0));
        });
      } else {
        var message;
        if (!$scope.old_password) {
          message = 'Must input current password.';
        } else {
          message = 'New passwords do not match.';
        }
        $mdToast.show($mdToast.simple().position('top right').action('Close').content(message).hideDelay(0));
      }
    };
    $scope.cancel = function () {
      $mdDialog.hide();
    };
  }
]);
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsCreatePackingListCtrl
 * @description
 * # DialogsCreatePackingListCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp').controller('DialogsCreatePackingListCtrl', [
  '$scope',
  '$mdDialog',
  'Room',
  'Shipping',
  '$log',
  function ($scope, $mdDialog, Room, Shipping, $log) {
    function getRoomDetails() {
      function applyRoomDetails(resp) {
        angular.extend($scope.project.rooms[$scope.project.rooms.indexOfById(resp)], resp);
      }
      for (var i = 0; i < $scope.project.rooms.length; i++) {
        var room = Room.get({ id: $scope.project.rooms[i].id }, applyRoomDetails);
      }
    }
    setTimeout(function () {
      $scope.project = this.project;
      getRoomDetails();
    }.bind(this));
    /*
	 * Complete adding packing list process and close the dialog 
	 */
    $scope.completeAddPacking = function () {
      var shipping = new Shipping();
      shipping.phase = $scope.phase;
      shipping.project = $scope.project;
      shipping.items = [];
      for (var i = 0; i < $scope.project.rooms.length; i++) {
        for (var h = 0; h < $scope.project.rooms[i].items.length; h++) {
          for (var j = 0; j < $scope.project.rooms[i].items[h].parts.length; j++) {
            shipping.items.push($scope.project.rooms[i].items[h].parts[j]);
          }
        }
      }
      $mdDialog.hide();
      shipping.$create(function (resp) {
        $log.log(resp);
      });
    };
    /*
	 * Cancel create a packing list 
	 */
    $scope.cancelAddPacking = function () {
      $mdDialog.hide();
      $scope.room = new Room();
    };
  }
]);
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangeFabricCtrl
 * @description
 * # DialogsChangeFabricCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp').controller('DialogsChangeFabricCtrl', [
  '$scope',
  '$mdDialog',
  function ($scope, $mdDialog) {
    $scope.close = function () {
      $mdDialog.hide();
    };
  }
]);
angular.module('employeeApp').directive('fabricStorage', [
  '$rootScope',
  function ($rootScope) {
    function Shelf() {
      this.hMargin = 10;
    }
    Shelf.prototype.draw = function (ctx, tower) {
      ctx.beginPath();
      ctx.fillStyle = '#CCCCCC';
      ctx.fillRect(10 + this.hMargin, 10 + 10, 200 - this.hMargin * 2, 100 - this.hMargin * 2);
    };
    Shelf.prototype.isPointInElement = function (x, y) {
      return x >= this.x && x <= this.x + this.w && (y >= this.y && y <= this.y + this.h) ? true : false;
    };
    function Tower() {
      this.x = 10;
      this.y = 10;
      this.h = 50;
      this.w = 50;
      this.color = '#AAAAAA';
      this.textColor = '#000000';
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
        ctx.fillStyle = '#CCCCCC';
        ctx.strokeRect(10, 10, 200, 300);
        for (var i = 0; i < this.shelves.length; i++) {
          this.shelves[i].draw(ctx, this);
        }
      }
    };
    Tower.prototype.isPointInElement = function (x, y) {
      return x >= this.x && x <= this.x + this.w && (y >= this.y && y <= this.y + this.h) ? true : false;
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
            {
              id: 11,
              x: 410,
              y: 10
            },
            {
              id: 12,
              x: 465,
              y: 10
            },
            {
              id: 13,
              x: 410,
              y: 85
            },
            {
              id: 14,
              x: 465,
              y: 85
            },
            {
              id: 15,
              x: 410,
              y: 140
            },
            {
              id: 16,
              x: 465,
              y: 140
            },
            {
              id: 17,
              x: 410,
              y: 215
            },
            {
              id: 18,
              x: 465,
              y: 215
            }
          ], towers = [];
        //Add towers on the left of the room
        for (var i = 0; i < 5; i++) {
          positions.push({
            id: 10 - i * 2,
            x: 540,
            y: i * 50 + i * 5 + 10
          });
          positions.push({
            id: 10 - i * 2 - 1,
            x: 595,
            y: i * 50 + i * 5 + 10
          });
        }
        var context = element[0].getContext('2d');
        context.canvas.height = 400;
        context.canvas.width = 800;
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
            document.body.style.cursor = active ? 'pointer' : 'default';
          }
        });
        element[0].addEventListener('click', function (evt) {
          var pos = getMousePos(element[0], evt);
          for (var i = 0; i < towers.length; i++) {
            towers[i].active = false;
            towers[i].color = '#AAAAAA';
            towers[i].textColor = '#000000';
            if (towers[i].isPointInElement(pos.x, pos.y)) {
              towers[i].active = true;
              towers[i].color = '#313131';
              towers[i].textColor = '#FFFFFF';
            }
            towers[i].draw(context);
          }
        });
      }
    };
  }
]);
/**
 * @ngdoc function
 * @name frontendApp.controller:ScannerCtrl
 * @description
 * # ScannerCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp').controller('ScannerCtrl', [
  '$scope',
  '$mdDialog',
  'scanner',
  '$timeout',
  'Supply',
  '$mdToast',
  'Employee',
  '$http',
  '$rootScope',
  'Equipment',
  'PurchaseOrder',
  'KeyboardNavigation',
  'FileUploader',
  '$log',
  function ($scope, $mdDialog, scanner, $timeout, Supply, $mdToast, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation, FileUploader, $log) {
    /*
	 * Vars
	 */
    var keyboardNav = new KeyboardNavigation(), checkoutActive = false;
    $scope.scanner = new scanner('supply-scanner-modal');
    //jshint ignore: line
    $scope.interfaceType = 'equipment';
    $scope.supplies = [];
    $scope.equipmentList = [];
    $scope.poList = PurchaseOrder.query();
    $scope.employees = Employee.query({
      limit: 0,
      page_size: 99999
    });
    $scope.scanner.enable();
    $scope.scanner.disableStandard();
    $scope.tempUrl = 'http://mineolalionsclub.org/wp-content/uploads/2014/02/employee_placeholder.png';
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
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up supply...'));
      } catch (e) {
      }
      Supply.get({
        id: code.split('-')[1],
        'country': $rootScope.country
      }, function (response) {
        $mdToast.hide();
        if ($scope.supplies.indexOfById(response) == -1) {
          response.$$action = 'subtract';
          $scope.supplies.push(response);
          $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Added ' + response.description + ' to checkout.'));
        } else {
          $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content(response.description + ' already in checkout'));
        }
      }, function (e) {
        var msg = JSON.stringify(e);
        $log.error(msg);
        $mdToast.show($mdToast.simple().hideDelay(0).position('top right').action('Close').content('Unable to find supply.'));
      });
    });
    /*
	 * Register the upc regex
	 */
    $scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
      try {
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up supply...'));
      } catch (e) {
      }
      Supply.query({
        upc: code,
        'country': $rootScope.country
      }, function (response) {
        response[0].$$action = 'subtract';
        $scope.supplies.push(response[0]);
        $mdToast.hide();
        $mdToast.show($mdToast.simple().hideDelay(2000).position('top right').content('Added ' + response.description + ' to checkout.'));
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
        $mdToast.show($mdToast.simple().hideDelay(3000).position('top right').content('Looking up Purchase Order...'));
      } catch (e) {
      }
      PurchaseOrder.get({ id: code.split('-')[1] }, function (response) {
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
      $mdToast.show($mdToast.simple().hideDelay(0).position('top right').action('Close').content('Looking up Equipment...'));
      Equipment.get({ id: code.split('-')[1] }, function (response) {
        $mdToast.hide();
        $scope.equipmentList.push(response);
      }, function (e) {
        var msg = JSON.stringify(e);
        $log.error(msg);
        $mdToast.show($mdToast.simple().content('Unable to find equipment.').position('top right').action('Close').hideDelay(0));
      });
    });
    /*
	 *  Regiester the employee code
	 */
    $scope.scanner.register(/^DREM-\d+$/, function (code) {
      $mdToast.hide();
      //Notifiy the user of action
      $mdToast.show($mdToast.simple().content('Looking up employee...').position('top right').action('close').hideDelay(0));
      $scope.equipment = Employee.get({ id: code.split('-')[1] }, function (response) {
        $scope.employee = response;
        $mdToast.hide();
      }, function (e) {
        var msg = JSON.stringify(e);
        $log.error(msg);
        $mdToast.show($mdToast.simple().content('Unable to find employee.').position('top right').action('close').hideDelay(0));
      });
    });
    $scope.verify = function () {
      $mdToast.hide();
      for (var i = 0; i < $scope.supplies.length; i++) {
        if ($scope.supplies[i].$$action == 'subtract') {
          if ($scope.supplies[i].$$quantity > $scope.supplies[i].quantity) {
            throw Error($scope.supplies[i].description + ' quantity cannot be negative');
          }
        }
      }
      return true;
    };
    $scope.checkout = function () {
      $mdToast.show($mdToast.simple().position('top right').hideDelay(0).content('Processing checkout...'));
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
          $mdToast.show($mdToast.simple().position('top right').hideDelay(0).action('close').content(e.message));
        }
        //Perform Purchase Order PUT
        if ($scope.po) {
          for (var g = 0; g < $scope.po.items.length; g++) {
            if ($scope.po.items[g].$$action) {
              $scope.po.items[g].status = 'Received';
            }
          }
          $scope.po.status = 'Received';
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
        $mdToast.show($mdToast.simple().position('top right').hideDelay(2000).content('Checkout complete.'));
      }
    };
    $scope.checkoutError = function (e) {
      $log.error(JSON.stringify(e));
      $mdToast.show($mdToast.simple().position('top right').hideDelay(0).action('Close').content('There was a checkout error'));
    };
    /*
	* Functions to print stickers
	*/
    function setPrint() {
      var afterPrint = function () {
        $('.print').empty();
      };
      if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function (mql) {
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
      var container = $('.print').empty();
      var iframe = document.createElement('iframe');
      iframe.onload = setPrint;
      iframe.src = 'api/v1/equipment/' + equipment.id + '/sticker/';
      container.append(iframe);
    };
    $scope.printSupplySticker = function (supply) {
      var container = $('.print').empty();
      var iframe = document.createElement('iframe');
      iframe.onload = setPrint;
      iframe.src = 'api/v1/supply/' + supply.id + '/sticker/';
      container.append(iframe);
    };
    $scope.$on('$destroy', function () {
      $scope.scanner.disable();
      try {
        window.globalScanner.enable();
      } catch (e) {
      }
    });
  }
]);