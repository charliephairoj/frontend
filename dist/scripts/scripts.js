
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
      .when('/administrator/label', {
        templateUrl: 'views/administrator/label/view.html',
        controller: 'AdministratorLabelViewCtrl'
  })
      .when('/administrator/log', {
        templateUrl: 'views/administrator/log/view.html',
        controller: 'AdministratorLogViewCtrl'
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
  .when('/accounting/account', {
        templateUrl: 'views/accounting/account/view.html',
        controller: 'AccountingAccountViewCtrl'
        
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
      .when('/hr/payroll', {
        templateUrl: 'views/hr/payroll.html',
        controller: 'HrPayrollCtrl',
        controllerAs: 'hr/payroll'
      })
      .when('/deal', {
        templateUrl: 'views/deals/view.html',
        controller: 'DealCtrl',
        controllerAs: 'deal'
      })
      .when('/deal/:id', {
        templateUrl: 'views/deals/details.html',
        controller: 'DealsDetailsCtrl',
        controllerAs: 'deals/details'
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
angular.module('employeeApp')
.config(['$httpProvider', '$resourceProvider', '$mdThemingProvider', '$provide', '$mdDateLocaleProvider',

function ($httpProvider, $resourceProvider, $mdThemingProvider, $provide, $mdDateLocaleProvider) {
	
	/*
	 * Format Date
	 */
	$mdDateLocaleProvider.formatDate = function(date) {
		if (date) {
			var day = date.getDate();
			var monthIndex = date.getMonth();
			var year = date.getFullYear();

			return day + '/' + (monthIndex + 1) + '/' + year;
		} else {
			return ""
		}
       	
    };

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

			//record('info', args[0]);
			_info(msg);
		};
		
		$delegate.warn = function () {
			var args    = [].slice.call(arguments),
	            now     = new Date().toUTCString();
			var msg = args[0].hasOwnProperty('stack') ? args[0].stack : now + '-' + args[0];
		
			//record('warn', args[0]);
			_warn(msg);
		};
		
		$delegate.error = function () {
			var args    = [].slice.call(arguments),
	            now     = new Date().toUTCString();
			var msg = args[0].hasOwnProperty('stack') ? args[0].stack : now + '-' + args[0];

			record('error', args[0]);
			_error(msg);
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
		if (typeof(data) == 'object' && data) {
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
angular.module('employeeApp').run(['$rootScope', 'CurrentUser', 'scanner', '$http', 'Geocoder', '$q', '$cookies', '$interval', 'PurchaseOrder', '$mdDialog', '$location', '$log',
function ($rootScope, CurrentUser, scanner, $http, Geocoder, $q, $cookies, $interval, PurchaseOrder, $mdDialog, $location, $log) {
	
	/*
	 * Set the token 
	 */
	$http.defaults.headers.common['X-CSRFTOKEN'] = $cookies.get('csrftoken');
	$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
	  jqXHR.setRequestHeader('X-CSRFTOKEN', $cookies.get('csrftoken'));
	});

	/**
	 * Set the language
	 */
	$rootScope.lang = 'th';
	
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
	/*
	$rootScope.currentUser.onready = function () {
		for (var z = 0; z < this.groups.length; z++) {
			if (this.groups[z].toLowerCase() == 'decoroom') {
				$location.path('/order/acknowledgement');
			}
		}
	}.bind($rootScope.currentUser);
	*/
	
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
			if (haystack[i]){
				if (haystack[i].id == needle) {
					return i;
				}
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
					try{
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
					} catch (e) {
						$log.log(e);
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


	/**
	 * VoIP: Twilio
	 */
	/** 
	var voip = {
		'status': '',
		'conn': {parameters : {From: '+22324235234234'}}
	};

	$http.get('/api/v1/ivr/token/').then(function (resp) {
		Twilio.Device.setup(resp.data.token, {"debug": true});
		Twilio.Device.ready(function (device) {
			$log.debug(device);
		});


		Twilio.Device.incoming(function(connection) {
			voip.status = 'incoming';
			voip.conn = connection;
			console.log(connection);
			$rootScope.safeApply();
		});

		Twilio.Device.connect(function (conn) {
			voip.status = 'active';
			voip.conn = conn;
			$rootScope.safeApply();
		});

		Twilio.Device.disconnect(function (conn) {
			voip.status = '';
			voip.conn = null;
			$rootScope.safeApply();
		});

		$rootScope.voipStatus = function () {
			return voip.status;
		};

		$rootScope.voipFrom = function () {
			return voip.conn ? voip.conn.parameters.From : "";
		};

		$rootScope.answer = function () {
			voip.conn.accept();
		};

		$rootScope.hangup = function () {
			voip.conn.reject();
			Twilio.Device.disconnectAll();
			voip.status = '';
			voip.conn = null;

		}
	});
	*/
}]);


angular.module('employeeApp')
.controller('AccountingAccountViewCtrl', ['$scope', 'Account', '$mdDialog', 'Notification', '$log', '$timeout',
function ($scope, Account, $mdDialog, Notification, $log, $timeout) {
	$scope.accounts = Account.query();
    var fetching = false;

    //Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
            fetching = true;
            Notification.display("Loading more accounts...", false);
			
			Account.query({
				limit: 50, 
				offset: $scope.accounts.length
			}, function (resources) {
                Notification.hide();
                
				for (var i = 0; i < resources.length; i++) {
					$scope.accounts.push(resources[i]);
                }
                
                fetching = false;
                
			});
		}
    };
    

    /**
     * Update the account when there is a change
     */
    $scope.update = function(account) {
        $timeout.cancel(account.$$temporaryUpdate);
        account.$$temporaryUpdate = $timeout(function () {
            Notification.display("Updating account " + this.code + '...');
            
            this.$update(function(){
                Notification.display("Updated account " + this.code + '.');
            }.bind(this));
        }.bind(account), 5000);
    }


    /**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showAddAccount = function () {
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-account.html',
			controllerAs: 'ctrl',
			locals: {
                accounts: $scope.accounts
			},
			controller: ['$scope', '$mdDialog', 'accounts', function ($scope, $mdDialog, accounts) {
                $scope.account = new Account();
                
				/**
				 * Save the acknowledgement
				 * 
				 * @public
				 * @param {Object} acknowledgement - The acknowledgement to be saved
				 */
				$scope.add = function () {
					
					Notification.display("Adding a new Account to the Chart of Accounts");
					
					$scope.account.$create(function (resp) {
                        Notification.display("Account " + resp.code + ": " + resp.name_en);
                        accounts.push(angular.copy(resp));
                        $scope.cancel();
					}, function (e) {
                        $log.error(e);
                    });
				};
				
				
				$scope.cancel = function () {
                    $scope.account = new Account();
					$mdDialog.hide();
				}
			}],
			clickOutsideToClose: true
		});
	};
}]);


angular.module('employeeApp')
.controller('AccountingTransactionAddCtrl', ['$scope', 'Transaction', 'Notification', '$location', 'Contact',
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
}]);


angular.module('employeeApp')
.controller('AccountingTransactionDetailsCtrl', ['$scope', function ($scope) {

}]);


angular.module('employeeApp')
.controller('AccountingTransactionViewCtrl', ['$scope', 'Transaction', function ($scope, Transaction) {
	$scope.transactionList = Transaction.poll().query();
    
	$scope.$on('$destroy', function () {
		Transaction.stopPolling(); 
	});
}]);


angular.module('employeeApp')
.controller('AdministratorGroupAddCtrl', ['$scope', 'Group', 'Permission', '$location', 
function ($scope, Group, Permission, $location) {
	$scope.permissions = Permission.query({limit: 0});
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
			$location.path("/administrator/group");
		});
	};
}]);


angular.module('employeeApp')
.controller('AdministratorGroupDetailsCtrl', ['$scope', 'Group', 'Permission', '$routeParams', '$location',
function ($scope, Group, Permission, $routeParams, $location) {
  
    $scope.categories = [];

    /*
     * Return the index of the first
     * occurence of the id in the list
     */
    function indexById(list, item) {
        if (!list.hasOwnProperty('length')) {
            throw new TypeError("Expecting an Array");
        }
        if (typeof(item) == 'object') {
            if (!item.hasOwnProperty('id')) {
                throw new TypeError('Expecting an id property for argument 2');
            }
        }
        
        //Set the id var
        var id = typeof(item) == 'object' ? item.id : item;
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
    $scope.permissions = Permission.query({limit: 0, page_size:10000}, function () {
        merge($scope.permissions, $scope.group.permissions);

        for (var i = 0; i < $scope.permissions.length; i++) {
            console.log($scope.categories.indexOf($scope.permissions[i].content_type));
            console.log($scope.permissions[i].content_type);
            if ($scope.categories.indexOf($scope.permissions[i].content_type) === -1) {
                $scope.categories.push($scope.permissions[i].content_type);
            }
        }

        console.log($scope.categories);
    });
	
    $scope.group = Group.get({'id': $routeParams.id}, function () {
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
            $location.path("/groups");
        });
    };
    
    $scope.$on('$destroy', function () { 
        $scope.group.$update();
    });
}]);


angular.module('employeeApp')
.controller('AdministratorGroupViewCtrl', ['$scope', 'Group', function ($scope, Group) {
	
	//Requests groups from the server
	$scope.groups = Group.query({limit: 0});


}]);

angular.module('employeeApp')
.controller('AdministratorLabelViewCtrl', ['$scope', '$http', 'Group', 'Notification', 'Label',
function ($scope, $http, Group, Notification, Label) {

    var fetching = false;
    $scope.newLabel = new Label();
    $scope.labels = Label.query();
   

    $scope.create = function () {

        Notification.display('Creating Label...');

        $scope.newLabel.$create(function (resp) {
            $scope.labels.push(resp);
            $scope.newLabel = new Label();
            Notification.display('Label created.');
        });
    };

    $scope.update = function (label) {
        Notification.display('Updating Label');
        
        label.$update(function (resp) {
            Notification.display('Label updated.');
        });
    };
    
    $scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more logs...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.logs.length
			};
            
            url = '/api/v1/label/';
            url += "?limit=20";
            url += "&offset=";
            url += $scope.labels.length;

            $http.get(url).success(function (resources) {
                for (var i = 0; i < resources.length; i++) {
					if ($scope.labels.indexOfById(resources[i].id) == -1) {
						$scope.labels.push(resources[i]);
					}
                }
                
                fetching = false;
            });
			
		}
	};
}]);

angular.module('employeeApp')
.controller('AdministratorLogViewCtrl', ['$scope', '$http', 'Group', 'Notification', 
function ($scope, $http, Group, Notification) {

    var fetching = false;
    $scope.logs = [];
    $http.get('/api/v1/administrator/log/').success(function (resp) {
        console.log(resp);
        $scope.logs = resp;
    });
    
    
    $scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more logs...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.logs.length
			};
            
            url = '/api/v1/administrator/log/';
            url += "?limit=20";
            url += "&offset=";
            url += $scope.logs.length;

            $http.get(url).success(function (resources) {
                for (var i = 0; i < resources.length; i++) {
					if ($scope.logs.indexOfById(resources[i].id) == -1) {
						$scope.logs.push(resources[i]);
					}
                }
                
                fetching = false;
            });
			
		}
	};
}]);


angular.module('employeeApp')
.controller('AdministratorUserAddCtrl', ['$scope', 'User', 'Group', '$location',
function ($scope, User, Group, $location) {
	$scope.user = new User();
	$scope.user.groups = [];
	$scope.groups = Group.query({limit: 0}, function () {
		
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
				$location.path("/administrator/user");
			});
		}        
	};
}]);


angular.module('employeeApp')
.controller('AdministratorUserDetailsCtrl', ['$scope', 'Group', 'User', '$routeParams', '$location', '$http', 'Notification', '$log', 
function ($scope, Group, User, $routeParams, $location, $http, Notification, $log) {
    
    var destroyed = false;
    function indexById(list, item) {
        if (!list.hasOwnProperty('length')) {
            throw new TypeError("Expecting an Array");
        }
        if (typeof(item) == 'object') {
            if (!item.hasOwnProperty('id')) {
                throw new TypeError('Expecting an id property for argument 2');
            }
        }
        
        //Set the id var
        var id = typeof(item) == 'object' ? item.id : item;
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
  
    $scope.groupList = Group.query({limit: 0}, function () {
        merge($scope.groupList, $scope.user.groups);
    });
    $scope.user = User.get({'id': $routeParams.id}, function () {
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
        var url = "/api/v1/user/" + $scope.user.id + "/change_password";
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
				$location.path("/administrator/user");
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

}]);


angular.module('employeeApp')
.controller('AdministratorUserViewCtrl', ['$scope', 'User', 'Group', 'Notification', '$mdDialog', '$http',
function ($scope, User, Group, Notification, $mdDialog, $http) {

	//Request users from the server
	$scope.users = User.query({limit: 0});
    $scope.groups = Group.query({limit: 0});
	
	$scope.searchGroups = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var groups = [];
		for (var i = 0; i < $scope.groups.length; i++) {
			if (angular.lowercase($scope.groups[i].name).indexOf(lowercaseQuery) !== -1) {
				groups.push($scope.groups[i]);
			}
		}
		
		return groups;
	};
	
	/**
	 * Show Change Password Dialog
	 * @param {*} user 
	 */
	$scope.showChangePassword = function (user) {
		$mdDialog.show({
			templateUrl: 'views/templates/change-password.html',
			controllerAs: 'ctrl',
			locals: {
				'user':user
			},
			controller: ['$scope', '$mdDialog', 'user', function ($scope, $mdDialog, user) {
				$scope.user = user;
				$scope.requireOldPassword = false;


				$scope.valid = function () {
					try{
						return (($scope.new_password === $scope.repeat_password) && $scope.new_password && $scope.new_password.length >= 6) ? true : false;						
					} catch (e) {
						return false;
					}
					
				};


				$scope.changePassword = function () {
					$http.post('/api/v1/change_password/', {
						'new_password': $scope.new_password,
						'repeat_new_password': $scope.repeat_password,
						'reset_password': $scope.reset_password || false,
						'user_id': $scope.user.id
					}).success(function (resp) {
						Notification.display('Password changed for ' + $scope.user.first_name);
						$scope.cancel();
					}).error(function (e) {
						console.log(e);
					});
				};

				$scope.cancel = function () {
					$mdDialog.hide();
				};

			}],
			clickOutsideToClose: true
		});
	}


	$scope.save = function (user) {
		if ($scope.currentUser.hasPermission('change_user')) {
		
			Notification.display('Saving user: ' + user.username + '...', false);
			user.$update(function () {
				Notification.display(user.username + ' saved.');
			});
		}
	};
	
	$scope.remove = function (user, $index) {
		if ($scope.currentUser.hasPermission('delete_user')) {
			Notification.display('Deleting user: ' + user.username + '...', false);
			user.$delete(function () {
				Notification.display(user.username + ' deleted.');
				$scope.users.splice($index, 1);
			});
		}
    };
}]);


angular.module('employeeApp')
.controller('ContactCustomerAddCtrl', ['$scope', 'Customer', '$location', 'Notification', 'Geocoder', '$log',
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
		if ($scope.customer.address.address1 && $scope.customer.address.city && $scope.customer.address.territory &&
		$scope.customer.address.country && $scope.customer.address.zipcode) {
          
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
      
}]);


angular.module('employeeApp')
.controller('ContactCustomerDetailsCtrl', ['$scope', 'Customer', '$routeParams', '$location', 'Notification', '$timeout', 'Acknowledgement', 'Deal',
function ($scope, Customer, $routeParams, $location, Notification, $timeout, Acknowledgement, Deal) {
    
    var updateLoopActive = false,
		timeoutPromise,
		map,
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
		/*
	map = new google.maps.Map($('#customer-map')[0], mapOptions);
	map.setOptions({styles:styles});
	*/
		
	//General purpose create marker function
	function createMarker(configs) {
		var lat = configs.address.latitude || configs.latitude,
			lng = configs.address.longitude || configs.longitude;
		
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
			marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
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
    $scope.customer =  Customer.get({'id': $routeParams.id}, function () {
		
		//Loop through the addresses to create markers for them
        for (var i = 0; i < $scope.customer.addresses.length; i++) {
			var address = $scope.customer.addresses[i];
			
			//Create a marker for previously marked addresses
			if (address.latitude && address.longitude) {
	        	marker = createMarker({address: address, index:i, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
			}
        }
		
		//Focus map on single location
		if ($scope.customer.addresses.length === 1) {
			//map.panTo(marker.getPosition());
			//map.setZoom(17);
		}
    
        
    });
	
	$scope.acknowledgements = Acknowledgement.query({customer_id:$routeParams.id});
	$scope.deals = Deal.query({customer_id:$routeParams.id});
    
	
	/**
	 * Add new contact to the customer
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.addContact = function (contact) {
		$scope.customer.contacts = $scope.customer.contacts || [];
		$scope.customer.contacts.push(angular.copy(contact));
		$scope.contact = {};
	}
	
	
	/**
	 * Remove a contact from the customer
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.removeContact = function (index) {
		$scope.customer.contacts.splice(index, 1);
	}
	
   
    
    $scope.update = function () {
        Notification.display('Updating...', false);
        $scope.customer.$update(function (resp) {
			angular.merge($scope.customer, resp);
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
    	createMarker({address: address, index:$index, latitude:latlng.lat(), longitude:latlng.lng()});
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
}]);


angular.module('employeeApp')
.controller('ContactCustomerViewCtrl', ['$scope', 'Customer', 'Notification', '$location', '$filter', function ($scope, Customer, Notification, $location, $filter) {
	
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
			Customer.query({q: q}, function (resources) {
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
    
    
    
    
   
}]);


angular.module('employeeApp')
.controller('ContactSupplierAddCtrl', ['$scope', 'Supplier', '$location', 'Notification', function ($scope, Supplier, $location, Notification) {
      
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
			Notification.display("Please fill out all required sections correctly");			
		}
        
        
        
        
    };
}]);


angular.module('employeeApp')
.controller('ContactSupplierDetailsCtrl', ['$scope', 'Supplier', '$routeParams', '$location', 'SupplierContact', 'Notification', '$timeout', '$mdDialog', '$mdToast', '$log', 'Label',
function ($scope, Supplier, $routeParams, $location, SupplierContact, Notification, $timeout, $mdDialog, $mdToast, $log, Label) {
	
	$scope.banks = Label.query({'type':'bank'});
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
	map = new google.maps.Map($('#supplier-map')[0], mapOptions);
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
					$scope.supplier.addresses[0].latitude = latLng.lat();
					$scope.supplier.addresses[0].longitude = latLng.lng();
			}
				
			//Change icon color
			marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
			
			$scope.update();
			
		}.bind(configs));
		
		return configs.marker;
	}
	
  	$scope.createMarker = function (address, $index) {
		var latlng = map.getPosition();
    	createMarker({address: address, index:$index, latitude:latlng.lat(), longitude:latlng.lng()});
  	};
	
	//Retreive the supplier from the server
    $scope.supplier =  Supplier.get({'id': $routeParams.id}, function () {
    	var address = $scope.supplier.addresses[0];
		
		if (address.latitude && address.longitude) {
			var latLng = map.getCenter();
		
			marker = createMarker({address:address, title:$scope.supplier.name, latitude:latLng.lat(), longitude: latLng.lng(),
				icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
			});
			map.panTo(marker.getPosition());
			map.setZoom(17);
		} else {
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
			controller: function () {this.parent = $scope;}
	    });
	};
	
	$scope.complete = function () {
		if ($scope.form.$valid) {
			$mdToast.hide();
			$mdDialog.hide();
			$scope.addContact();
		} else {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
			.content('Please complete all fields.'));
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
    
}]);


angular.module('employeeApp')
.controller('ContactSupplierViewCtrl', ['$scope', 'Supplier', 'Notification', '$filter',
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
			Supplier.query({q: q}, function (resources) {
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
	
}]);

'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DealsDetailsCtrl
 * @description
 * # DealsDetailsCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DealsDetailsCtrl', ['$scope', 'Deal', '$routeParams', 'Notification', '$timeout', '$log', '$rootScope',
function ($scope, Deal, $routeParams, Notification, $timeout, $log, $rootScope) {
    var updateLoopActive = false,
		timeoutPromise,
		currencySigns = {
			'THB':'฿',
			'EUR':'€',
			'USD':'$',
			'RMB':'¥',
			'SGD':'S$'
		};

	$scope.newEvent = {
		occurred_at: new Date()
	};
	$scope.deal = Deal.get({'id': $routeParams.id});

	$scope.addEvent = function (event) {
		var description = "You "
		description += event.type;

        if (event.contact) {
            description += " " + event.contact.name;
        } else {
            description += " " + $scope.deal.customer.name;
        }

		$scope.deal.events.push({
			description: description,
			notes: event.notes,
			occurred_at: event.occurred_at

		});

		$scope.newEvent = {occurred_at: new Date()};
	};

	$scope.update = function () {

		Notification.display('Updating deal...', false);

		var deal = angular.copy($scope.deal);

		for (var i = 0; i < deal.customer.addresses.length; i++) {
			delete deal.customer.addresses[i].marker;
		}

		deal.$update(function (resp) {
			updateLoopActive = false;

			Notification.display('Deal updated');

			$rootScope.safeApply(function () {
				angular.copy(resp, $scope.deal);
			});
		}, function (e) {
			updateLoopActive = false;

			$log.error(e);

			Notification.display('There was an error updating the deal');
		});

	}

	$scope.$watch(function () {
		var deal = angular.copy($scope.deal);

		delete deal.last_modified;
		try{
			delete deal.customer.last_modified;
		} catch (e) {

		}
		return deal;
	}, function (newVal, oldVal) {
		if (oldVal.hasOwnProperty('id') && !updateLoopActive) {
			updateLoopActive = true;
			timeoutPromise = $timeout($scope.update, 5000);
		}
	}, true);

	$scope.getCurrencySign = function (currency) {
		return currencySigns[currency];
	}

	$scope.$on('$destroy', function () {
		$scope.deal.update();
	})
}]);

'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DealCtrl
 * @description
 * # DealCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DealCtrl', ['$scope', 'Deal', '$mdDialog', 'Customer', 'Notification', function ($scope, Deal, $mdDialog, Customer, Notification) {
	
	$scope.deals = Deal.query(function () {
		for (var i = 0; i < $scope.deals.length; i++) {
			$scope.deals[i].last_contacted = new Date($scope.deals[i].last_contacted);
		}
	});
	$scope.customers = Customer.query({limit:0, offset:0, page_size:99999});
	
	/**
	 * Get the total from a list of deals that has a certain status
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.getTotal = function (stage) {
		var total = 0;
		
		for (var i = 0; i < $scope.deals.length; i++) {
			if ($scope.deals[i].status === stage) {
				var amount
				
				if ($scope.deals[i].currency.toLowerCase() === 'thb') {
					amount = $scope.deals[i].total;
				} else {
					switch($scope.deals[i].currency.toLowerCase()) {
						case 'eur':
							amount = $scope.deals[i].total * 40;
						case 'usd': 
							amount = $scope.deals[i].total * 35;
					}
						
				}
				
				total += amount;
			}
		}
		
		return total;
	};
	
	
	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showCreateDeal = function () {
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-deal.html',
			controllerAs: 'ctrl',
			locals: {
				'customers': $scope.customers,
				'deals': $scope.deals
			},
			controller: ['$scope', '$mdDialog', 'customers', 'deals', function ($scope, $mdDialog, customers, deals) {
				$scope.deal = new Deal();
				$scope.customers = customers;
				
				
				/*
			 	 * CUSTOMER SECTION
				 *
				 * This section deals with the customer searching and what happens when a customer is selected
				*/
	
				// Watch on customerSearchText to get products from the server
				$scope.retrieveCustomers = function (query) {
					if (query) {
						Customer.query({q:query}, function (responses) {
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
					$scope.deal.customer = $scope.deal.customer || {name: '', addresses: []};
		
					if (!$scope.deal.customer.id) {
						$scope.deal.customer.name = customerName || '';
					} else {
						if ($scope.deal.customer.name.indexOf(customerName) == -1) {
							$scope.deal.customer = {name: customerName, addresses: []};
						}
					}
				};
	
	
	
				//Add customer and hide modal
			    $scope.addCustomer = function (customer) {
			        $scope.deal.customer = customer;
			    };
				
				$scope.createDeal = function () {
					$scope.deal.$create(function () {
						Notification.display('Deal with ' + $scope.deal.customer.name + ' created.', 2000);
						deals.push(angular.copy($scope.deal));
					}, function (e) {
						Notification.display(e, false);
					});
				}
				
				$scope.create = function () {
					$mdDialog.hide();
					Notification.display("Creating new deal with " + $scope.deal.customer.name, false);

					if (!$scope.deal.customer.hasOwnProperty('id')) {
						var customer = new Customer($scope.deal.customer);
						customer.$create(function (resp) {
							angular.merge($scope.deal.customer, resp);
							$scope.createDeal();
						}, function (e) {
							Notification.display("Unable to create new customer", false);
						});
					} else {
						$scope.createDeal();
					}
					
					
				};
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			}],
			clickOutsideToClose: true
		});
	};
	
	
    $scope.updateStage = function (deal, status) {
		var index = $scope.deals.indexOfById(deal);
		if (index > -1) {
			$scope.deals[index].status = status;
			$scope.deals[index].$update();
		}
    };
}]);


angular.module('employeeApp')
.controller('DialogsAddEmployeeCtrl', ['$scope', 'Employee', '$mdToast',
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
		$mdToast.show($mdToast.simple()
			.hideDelay(0)
			.position('top right')
			.content('Creating employee ' + $scope.employee.first_name + '.'));
		$scope.employee.$create(function () {
			$mdToast.hide();
			$mdToast.show($mdToast.simple()
				.hideDelay(2000)
				.position('top right')
				.content('Employee ' + $scope.employee.first_name + ' created.'));
				
			$scope.reset();
		});
	};
	
	$scope.reset = function () {
		$scope.employee = new Employee();
	};
	
}]);



/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsAddRoomCtrl
 * @description
 * # DialogsAddRoomCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
  .controller('DialogsAddRoomCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);


angular.module('employeeApp')
.controller('AddSupplierContactCtrl', ['$scope', '$mdDialog',
function ($scope, $mdDialog) {
    
	$scope.complete = function () {
		$mdDialog.hide();
	};
    
}]);


/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangeFabricCtrl
 * @description
 * # DialogsChangeFabricCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsChangeFabricCtrl', ['$scope', '$mdDialog', 
function ($scope, $mdDialog) {
	
	$scope.close = function () {
		$mdDialog.hide();
	};
	
}]);


/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangePasswordCtrl
 * @description
 * # DialogsChangePasswordCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsChangePasswordCtrl', ['$scope', '$mdDialog', '$http', '$mdToast', '$log',
function ($scope, $mdDialog, $http, $mdToast, $log) {
	
	$scope.changePassword = function () {
		if ($scope.old_password && ($scope.new_password === $scope.repeat_password)) {
			var data = {'old': $scope.old_password,
						'newPass': $scope.new_password,
						'repeatPass': $scope.repeat_password};
					
			var promise = $http.post('/api/v1/change_password/', data);

			promise.then(function () {
				$mdDialog.hide();
				$mdToast.show($mdToast
							  .simple()
							  .position('top right')
							  .content('Password Changed.')
				.hideDelay(2000));
			}, function (e) {
				$log.log(e);
				$mdToast.show($mdToast
							  .simple()
							  .position('top right')
							  .action('Close')
							  .content(e.data.status)
				.hideDelay(0));
			});
		} else {
			var message;
			if (!$scope.old_password) {
				message = "Must input current password.";
			} else {
				message = "New passwords do not match.";
			}
			
			
			$mdToast.show($mdToast
						  .simple()
						  .position('top right')
						  .action('Close')
						  .content(message)
			.hideDelay(0));
		}
	};
	
	$scope.cancel = function () {
		$mdDialog.hide();
	};
	

}]);


/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsCreatePackingListCtrl
 * @description
 * # DialogsCreatePackingListCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsCreatePackingListCtrl', 
['$scope', '$mdDialog', 'Room', 'Shipping', '$log', function ($scope, $mdDialog, Room, Shipping, $log) {
	
	function getRoomDetails() {
		
		function applyRoomDetails(resp) {
			angular.extend($scope.project.rooms[$scope.project.rooms.indexOfById(resp)], resp);
		}
					
		for (var i = 0; i < $scope.project.rooms.length; i++) {
			var room = Room.get({id: $scope.project.rooms[i].id}, applyRoomDetails);
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
}]);


angular.module('employeeApp')
.controller('DialogsSupplyScannerCtrl', ['$scope', '$mdDialog', 'scanner', "$timeout", 'Supply', '$mdToast', 'Employee', '$http', '$rootScope', 'Equipment', 'PurchaseOrder', 'KeyboardNavigation',
function ($scope, $mdDialog, scanner, $timeout, Supply, $mdToast, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation) {
	
	/*
	 * Vars
	 */
	var keyboardNav = new KeyboardNavigation(),
		checkoutActive = false;
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
		Notification.display("Updating the supply's image", false);
		var image = data.hasOwnProperty('data') ? data.data : data;
		$scope.supply.image = image;
		$scope.supply.$update(function () {
			Notification.display("Supply's image updated.");
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
				
		}, function () {
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
				
		}, function (reason) {
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
				
		}, function (reason) {
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
			
		}, function () {
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
			
		}, function () {
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
		$mdToast.show($mdToast.simple()
			.position('top right')
			.hideDelay(0)
			.action('Close')
			.content("There was a checkout error"));
	};
	
	$scope.$on('$destroy', function () {
		$scope.scanner.disable();
		
		try {
			window.globalScanner.enable();
		} catch (e) {
			
		}
	});
	
}]);


angular.module('employeeApp')
.controller('EquipmentViewCtrl', ['$scope', 'Equipment', 'Notification', '$filter', 'KeyboardNavigation', '$rootScope', '$location', '$http', 'FileUploader', '$timeout', '$log',
function ($scope, Equipment, Notification, $filter, KeyboardNavigation, $rootScope, $location, $http, FileUploader, $timeout, $log) {
	/*
	* Vars and flags
	*/
	var fetching = true,
		index = 0,
		currentSelection,
		activeQueryLoop = false,
		masterList = [],
		q;

	//system message
	Notification.display('Loading supplies...', false);
	
	$scope.scannerMode = false;
	$scope.equipmentList = Equipment.query({'country': $scope.country}, function (resources) {
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
		container.animate({
			scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height()
		});
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
			Notification.display("Image uploaded");
			
			//Apply the image data and url to the supply, 
			//and then save the supply to the serve
			$scope.safeApply(function () {
				supply.image = data.hasOwnProperty('data') ? data.data : data;
				supply.save();
			});
	
		//Process a failed upload
		}, function (e) {
			$log.error(e);
			Notification.display("Unable to upload image", false);
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
			Supply.query({limit: q.length, q: q, 'country': $scope.country}, function (resources) {
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
				limit: 50,
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
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
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
	
}]);




angular.module('employeeApp')
.controller('HrEmployeeViewCtrl', ['$scope', 'Employee', 'Notification', '$mdDialog', 'FileUploader', '$log', 'Shift', 'Attendance', '$q', '$timeout',
function ($scope, Employee, Notification, $mdDialog, FileUploader, $log, Shift, Attendance, $q, $timeout) {
    
	var fetching = false;
	$scope.selected_date = null;
	$scope.departments = {
			'tufting': {'en': 'Tufting',
						'th': 'tufting'},
			'woodworking': {'en': 'Woodworking',
					        'th': 'ไม้'},
			'painting': {'en': 'Painting',
						 'th': 'สี'},
			'sewing': {'en': 'Sewing',
					   'th': 'เย็บ'},
			'upholstery': {'en': 'Upholstery',
						   'th': 'หุ้ม'},
			'cutting fabric': {'en': 'Cutting Fabric',
							  'th': 'ตัดผ้า'},
			'foam': {'en': 'Foam',
					 'th': 'ฟองน้ำ'},
			'accounting': {'en': 'Accounting',
						   'th': 'บัญชี'},
			'inventory': {'en': 'Inventory',
						  'th': 'สโตร์'},
			'security': {'en': 'Security',
						 'th': 'ยาม'},
			'technician': {'en': 'Technician',
						   'th': 'ช่าง'},
			'polishing': {'en': 'Polishing',
						  'th': 'ปัดเงา'},
			'housekeeping': {'en': 'Housekeeping',
							 'th': 'แม่บ้าน'},
			'office': {'en': 'Office',
					   'th': 'Office'},
			'packing': {'en': 'Packing',
						'th': 'Packing'},
			'management': {'en': 'Management',
						   'th': 'Management'}
		};
	$scope.headings = {
			'title': {'en': 'Title',
					  'th': 'Title'},
			'name': {'en': 'Name',
					 'th': 'ชื่อ'},
			'id': {'en': 'Government ID',
				   'th': 'ID Card'},
			'nationality': {'en': 'Nationality',
							'th': 'สัญชาติ'},
			'telephone': {'en': 'Telephone',
							'th': 'โทรศัพท์'},
			'company': {'en': 'Company',
						'th': 'บริษัท'},
			'department': {'en': 'Department',
						   'th': 'แผนก'},
			'status': {'en': 'Status',
					   'th': 'สภาพการจ้าง'},
			'location': {'en': 'Location',
						 'th': 'สถานที่ปัจจุบัน'},
			'employment-date': {'en': 'Employment Date',
								'th': 'วันที่เริ่มทำงาน'},
			'card-number': {'en': 'Employee Card Number',
							'th': 'หมายเลขพนักงาน'},
			'bank': {'en': 'Bank',
					 'th': 'ธนาคาร'},
			'account-number': {'en': 'Bank Account Number',
							   'th': 'หมายเลขบัญชี'},
			'shift': {'en': 'Shift',
					  'th': 'เวลาทำงาน'},
			'wage': {'en': 'Pay Rate',
					 'th': 'ค่าจ้าง'},
			'pay-period': {'en': 'Pay Period',
						   'th': 'ประเภทการจ่ายเงิน'},
			'stipend': {'en': 'Stipend',
					 	'th': 'เบี้ยขยัน'},
			'manager': {'en': 'Manager Stipend',
					 	'th': 'ตำแหน่ง'},
			'pay-method': {'en': 'Payment Method',
						   'th': 'วิธีจ่ายเงิน'},
			'time-in': {'en': 'Clock In',
						'th': 'เวลาเข้า'},
			'time-out': {'en': 'Clock Out',
						 'th': 'เวลาออก'},
			'date': {'en': 'Date',
					 'th': 'วันที่'},
			'regular': {'en': 'Regular',
					 	'th': 'เวลาปกติ'}
									
			
		};
	$scope.nationalities = {
			'thai': {'en': 'Thai',
					 'th': 'ไทย'},
			'cambodian': {'en': 'Cambodian',
						  'th': 'ชาวกัมพูชา'},
			'laos': {'en': 'Laotian',
					 'th': 'ลาว'},
			'burmese': {'en': 'Burmese',
					 'th': 'พม่า'},
			'vietnamese': {'en': 'Vietnamese',
					       'th': 'เวียตนาม'}
		}, 
	$scope.lang = 'th';
	$scope.searchMonths = [
		
	]

	var today = new Date();	
	for (var i = 0; i < 36; i++) {
		var d = new Date();
		if (d.getMonth() - 1 >= 0) {
			d.setMonth(d.getMonth() - i);
		} else {
			d.setMonth(Math.abs(d.getMonth() - i));
			d.setFullYear(d.getFullYear() - 1);
		}
		$scope.searchMonths.push(d);
	}

	console.log($scope.searchMonths);

	$scope.overtimes = {};	
	$scope.employees = Employee.query(function() {

	});
	
	//$scope.shifts = Shift.query();
	$scope.shifts = [{"id":1,"start_time":"08:00:00","end_time":"17:00:00"}];

	$scope.getStandardOvertimes = function (a) {

		var deferred = $q.defer();

		/*
		$timeout(function () {
			

			deferred.resolve([]);
		}, 10);
		*/
		deferred.resolve([]);

		return deferred.promise;
	}

	/** 
	var hour = 17;
	var minute = 0;
	
	for (var i = 1; i < 25; i++) {
		
		// Advance to the next hour
		if (i % 2 > 0 && i > 0) {
			hour += 1;
			minute = 0;
		
		// Advance to the next half hour
		} else {
			minute = 30;
			
			if (hour === 24) {
				hour = 0;
			}
		}
		
		var time = new Date(2016, 2, 17, hour, minute, 0);

		$scope.overtimes.push(time);
	}
	*/
    
	// Convert all number strings into numbers
	var re = /^(?!0+[1-9])\d+?(\,d+)(\.\d+)?$/;
	var count = 0;
	function refactor(obj) {
		count++;
		
		for (var key in obj) {
			if (typeof(obj[key]) == 'object') {
				refactor(obj[key]);
			} else {
				if (re.test(obj[key])) {
					obj[key] = Number(obj[key].replace(',', ''));
				} 
			}					
		}
		
		return obj;
	}

	$scope.getNationality = function (nationality) {
		try{
			return $scope.nationalities[nationality][$scope.lang];
		} catch (e) {
			$log.warn(e);
		}
	}

	$scope.getDepartment = function (department) {
		if (department) {
			try{
				return $scope.departments[department][$scope.lang];
			} catch (e) {
				return 'ยังไม่ได้กำหนดแผนก';
			}
		} else {
			return 'ยังไม่ได้กำหนดแผนก';
		}
	}
	
	$scope.canViewPayRate = function (employee) {
		
		/*
		if (employee.department.toLowerCase() == 'management') {
			if (!$scope.currentUser.hasPermission('view_management_pay_rate')) {
				return false;
			}
		}
		
		if (employee.department.toLowerCase() == 'office') {
			if (!$scope.currentUser.hasPermission('view_office_pay_rate')) {
				return false;
			}
		}
		
		if (employee.manager_stiped > 0) {
			if (!$scope.currentUser.hasPermission('view_management_pay_rate')) {
				return false;
			}
		}*/
		
		if (!$scope.currentUser.hasPermission('can_view_pay_rate')) {
			return false;
		}
		
		return true;
	}
	
	$scope.update = function (employee) {
		Notification.display('Updating employee: ' + employee.name + '...', false);
		employee.$$saving = true;
		
		
		
		
		employee.$update(function () {
			employee.$$saving = false;
			Notification.display('Employee: ' + employee.name + ' updated.');
		}, function (e) {
			employee.$$saving = false;
			Notification.display('Error updating employee: ' + employee.name + '. Please contact Charlie.', false);
			$log.error(e);
		})
	};
	
	/**
	 * Show add employee dialog 
	
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.showAddEmployee = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-employee.html',
      	  	clickOutsideToClose:true,
			controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
				
				$scope.employee = new Employee();
				$scope.shifts = Shift.query();
				
				$scope.create = function () {
					Notification.display("Creating new employee " + $scope.employee.name + "...");
					$scope.saving = true;
					$scope.employee.$create(function (resp) {
						$scope.saving = false;
						Notification.display('Employee: ' + $scope.employee.name + ' created.');
						$mdDialog.hide()
					}, function (resp) {
						$log.error(resp);
						Notification.display('There was an error in creating employee: ' + $scope.employee.name + '.', 0);
					})
				};			
			}]
		});
	};
	
	
	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addImage = function (files, employee) {
	
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "api/v1/employee/image/");
				promise.then(function (result) {
			        
					var data = result.data || result;
					employee.image = data
					Notification.display('Image uploaded.');
					$scope.update(employee);
		
			}, function () {
				$log.error(JSON.stringify(e));
			
				Notification.display(e.message, 0);
	
			});
		}
		
		if (files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}]
		   	});
			
		} else {
			uploadImage(files[0]);
		}
	};
	
	
	/**
	 * Show the Download dialog
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.upload = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/upload-clockin-times.html',
      	  	clickOutsideToClose:true,
			controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
				$scope.uploadTimes = function ($files) {
					
					/* jshint ignore:start */
					Notification.display('Uploading times....', 0);
					
					var file = $files[0];
					
					var promise = FileUploader.upload(file, "/api/v1/employee/attendance/");
					promise.then(function (result) {
						Notification.display(result.status, 2000);
					}, function (e) {
						$log.error(JSON.stringify(e));
						Notification.display(e, 0);
					});
				
					/* jshint ignore:end */
					$mdDialog.hide();
				};					
			}]
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
			Employee.query({limit: 10, q: q}, function (resources) {
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
			//Disable new requests
			fetching = true;
			
			Notification.display('Loading more employees...', false);
			Employee.query({
				offset: $scope.employees.length,
				limit: 50,
			}, function (resources) {
				Notification.hide();
				
				
				
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
				
				// Allow new requests
				fetching = false;
				
			}, function (e) {
				// Allow new requests
				fetching = false;
			});
		}
	};
	
	
	/**
	 * Check if the attendance provided is Sunday
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.isSunday = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		return attendance.date.getDay() === 0 ? true : false;
	}
	
	
	/**
	 * Add a new Attendance
	 * 
	 * @public
	 * @param {Object} employee - employee to add an attendance for
	 */
	$scope.addAttendance = function (employee) {
		$mdDialog.show({
			templateUrl: 'views/templates/add-attendance.html',
      	  	clickOutsideToClose:true,
			locals: {
				shifts: $scope.shifts,
				employee: employee,
				mainOvertimes: $scope.overtimes
			},
			controller: ['$scope', '$mdDialog', 'shifts', 'employee', 'mainOvertimes', function ($scope, $mdDialog, shifts, employee, mainOvertimes) {
				
				$scope.shifts = shifts;
				
				// Set up default attributes
				$scope.a = new Attendance();
				$scope.a.employee = employee;
				$scope.a.date = new Date();
				$scope.a.start_time = new Date(2016, 2, 18, 8, 0);
				$scope.a.end_time = new Date(2016, 2, 18, 17, 0);
				$scope.a.shift = $scope.shifts[0];

				$scope.overtimes = [];
				$scope.mainOvertimes = mainOvertimes;
				
				var hour = 17;
				var minute = 0;
				
				for (var h = 1; h < 25; h++) {
					
					// Advance to the next hour
					if (h % 2 > 0 && h > 0) {
						hour += 1;
						minute = 0;
					
					// Advance to the next half hour
					} else {
						minute = 30;
						
						if (hour === 24) {
							hour = 0;
						}
					}
					
					var time = new Date($scope.a.date.getFullYear(), $scope.a.date.getMonth(), $scope.a.date.getDate(), hour, minute, 0);
			
					$scope.overtimes.push(time);
				}
				
				$scope.create = function () {
					Notification.display("Creating attendance for " + $scope.a.employee.name + "...", 2000);
					
					// Prepare for POST request
					$scope.a.shift = $scope.a.shift.id;
					$scope.a.employee = $scope.a.employee.id;
					
					$scope.a.$create(function (resp) {
						Notification.display('Attendance created for ' + $scope.a.employee.name, 2000);
						
						// Add to employee attendances
						$scope.a.employee.attendances = employee.attendances || [];
						$scope.a.employee.attendances.push(resp);

						$scope.mainOvertimes[getDateCode(resp.date)] = [];
	
						
						var hour = 17;
						var minute = 0;
						
						for (var h = 1; h < 25; h++) {
							
							// Advance to the next hour
							if (h % 2 > 0 && h > 0) {
								hour += 1;
								minute = 0;
							
							// Advance to the next half hour
							} else {
								minute = 30;
								
								if (hour === 24) {
									hour = 0;
								}
							}
							
							var time = new Date(resp.date.getFullYear(), resp.date.getMonth(), resp.date.getDate(), hour, minute, 0);
					
							$scope.mainOvertimes[getDateCode(resp.date)].push(time);
						}
						
					}, function (e) {
						// Default error message
						var message = "There was an error creating an attendance for " + $scope.a.employee.name;

						if (e.status === 400) {
							if ("data" in e) {
								if ("non_field_errors" in e.data) {
									if ("The fields date, employee must make a unique set." === e.data.non_field_errors[0]) {
										var message = "An Attendance for " + $scope.a.employee.name;
										message += " on " + $scope.a.date + " already exists";
									}
								}
							}
						} else {
							
						}
						console.log(e);
						Notification.display(message, 0);
						$log.error(e);
					});
					$mdDialog.hide();
				};					
					
			}]
		});
	};
	
	/**
	 * Update the an attendance record
	 * @public
	 * @param {Object} attendance - Attendance instance to be updated to the server
	 */
	
	$scope.updateAttendance = function (attendance) {
		Notification.display('Updating record for ' + attendance.date, 0);
		var a = new Attendance(attendance);
		a.$update(function (resp) {
			Notification.display('Updated record for ' + resp.date, 2000);
			angular.extend(attendance, resp);

			if (typeof(attendance.date) === 'string') {
				attendance.date = new Date(attendance.date);
			}
			
			if (attendance.overtime_request){
				attendance.overtime_request = new Date(attendance.overtime_request);
				console.log(attendance.overtime_request.getHours(), attendance.overtime_request.getMinutes());
			}
			
		}, function (e) {
			Notification.display('Error updating record: ' + e, 0);
		});
	};
	

	/**
	 * Retreive attendances from the server by month
	 */
	$scope.retrieveAttendancesbyMonth = function (date, employee) {
		console.log(date);
		var start_date = new Date(date.getFullYear(), date.getMonth() - 1 >= 0 ? date.getMonth() - 1 : 11, 26);
		var end_date = new Date(date.getFullYear(), date.getMonth(), 25);
		$scope.retrieveAttendances(start_date, end_date, employee);
	}
	/**
	 * Retrieve attendances from the server
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	var getDateCode = function (d) {
		if (typeof(d) === "string") {
			var d = Date.parse(d);
		}
		var dateCode = d.getFullYear();
		dateCode += "-";
		dateCode += d.getMonth();
		dateCode += "-";
		dateCode += d.getDate();

		return dateCode;
	};
	$scope.getDateCode = getDateCode;

	$scope.retrieveAttendances = function (start_date, end_date, employee) {
		var options = {};
		
		if (start_date && end_date) {
			options.start_date = start_date;
			options.end_date = end_date;

			options.employee_id = employee.id;
			
			Attendance.query(options, function (resp) {
				
				employee.attendances = resp;

				for (var i = 0; i < employee.attendances.length; i++) {
					var d = employee.attendances[i].date;
					$scope.overtimes[$scope.getDateCode(d)] = [];

					
					var hour = 17;
					var minute = 0;
					
					for (var h = 1; h < 25; h++) {
						
						// Advance to the next hour
						if (h % 2 > 0 && h > 0) {
							hour += 1;
							minute = 0;
						
						// Advance to the next half hour
						} else {
							minute = 30;
							
							if (hour === 24) {
								hour = 0;
							}
						}
						
						var time = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, minute, 0);
				
						$scope.overtimes[$scope.getDateCode(d)].push(time);
					}
				}

				console.log($scope.overtimes);
				
				
			});
		}
		
		
		
		
	}
	
	/**
	 * Calculate the pay rate
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope._calculatePayRate = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		var payRate = attendance.date.getDay() === 0 ? (attendance.pay_rate || attendance.employee.wage) * 2 : (attendance.pay_rate || attendance.employee.wage);
		
		return payRate;
	}
	
	/**
	 * Calculate regular wage
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateRegularWage = function (attendance, employee) {
		var wage = 0;
		
		//Calculate the regular time pay
		if (attendance.regular_time) {
			attendance.start_time = typeof(attendance.start_time) === 'string' ? new Date(attendance.start_time) : attendance.start_time;
			attendance.end_time = typeof(attendance.end_time) === 'string' ? new Date(attendance.end_time) : attendance.end_time;
			
			var payRate = $scope._calculatePayRate(attendance);
			
			if (attendance.regular_time >= 8) {
				wage += payRate;
			} else if (attendance.start_time.getHours() ==8 && attendance.start_time.getMinutes() <= 10){
				wage += payRate;
			} else {
				wage += (payRate) * (attendance.regular_time / 8);
			}
		}
		
		return wage
	};	
	
	/**
	 * Calculate overtime
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateOvertime = function (attendance, employee) {
		var overtimePay = 0;
		// Calculate the over time for the employee
		if (attendance.overtime > 0) {
			overtimePay += (((attendance.pay_rate || employee.wage || 0) / 8) * 1.5) * attendance.overtime;
		}
		
		return overtimePay;
		
	};
	
	/**
	 * Calculates the wage
	 * @public
	 * @param {Object} attendance - attendance to calculate the daily wage for
	 * @param {Object} employee - employee from which to get wage from
	 * @returns {Number} - returns the total pay for the employee
	 */
	
	$scope.calculateWage = function (attendance, employee) {
		
		var wage = $scope._calculateRegularWage(attendance, employee);
		
		wage += $scope._calculateOvertime(attendance, employee);
		
		return wage;
	}
	
	/**
	 * Calculate social security
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.calculateSocialSecurity = function (attendance, employee) {
		
		var socialSecurity = $scope._calculateRegularWage(attendance, employee) * 0.05;
		
		return socialSecurity || 0;
	};
	
	
	
	
	$scope.$on('$destroy', function () {
		$mdDialog.hide();
	});
}]);

'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:HrPayrollCtrl
 * @description
 * # HrPayrollCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('HrPayrollCtrl', ['$scope', 'Employee', 'Payroll', 'Attendance', 
function ($scope, Employee, Payroll, Attendance) {
	
	
	
	$scope.getEmployees = function () {
		
		if ($scope.start_date && $scope.end_date) {
			
			$scope.employees = Employee.query({
				limit:0, 
				page_size: 99999,
				offset:0,
				employee_status: 'active',
				start_date: $scope.start_date,
				end_date: $scope.end_date
			}, function (resp) {
				
			});
		}
	};
	
	var today = new Date();
	var date = today.getDate();
	if (10 < date < 15) {
		$scope.start_date = new Date(today.getFullYear(), today.getMonth() - 1, 26);
		$scope.end_date = new Date(today.getFullYear(), today.getMonth(), 10);
		
	} else if (25 < date < 30){
		$scope.start_date = new Date(today.getFullYear(), today.getMonth(), 11);
		$scope.end_date = new Date(today.getFullYear(), today.getMonth(), 25);
	}
	
	$scope.getEmployees();
	
	/**
	 * Check if the attendance provided is Sunday
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.isSunday = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		return attendance.date.getDay() === 0 ? true : false;
	}
	
	/**
	 * Calculate the pay rate
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope._calculatePayRate = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		var payRate = attendance.date.getDay() === 0 ? (attendance.pay_rate || attendance.employee.wage) * 2 : (attendance.pay_rate || attendance.employee.wage);
		
		return payRate;
	}
	
	/**
	 * Calculate regular wage
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateRegularWage = function (attendance, employee) {
		var wage = 0;
		
		//Calculate the regular time pay
		if (attendance.regular_time) {
			attendance.start_time = typeof(attendance.start_time) === 'string' ? new Date(attendance.start_time) : attendance.start_time;
			attendance.end_time = typeof(attendance.end_time) === 'string' ? new Date(attendance.end_time) : attendance.end_time;
			
			var payRate = $scope._calculatePayRate(attendance);
			
			if (attendance.regular_time >= 8) {
				wage += payRate;
			} else if (attendance.start_time.getHours() ==8 && attendance.start_time.getMinutes() <= 10){
				wage += payRate;
			} else {
				wage += (payRate) * (attendance.regular_time / 8);
			}
		}
		
		return wage
	};	
	
	/**
	 * Calculate overtime
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateOvertime = function (attendance, employee) {
		var overtimePay = 0;
		// Calculate the over time for the employee
		if (attendance.overtime > 0) {
			overtimePay += (((attendance.pay_rate || employee.wage || 0) / 8) * 1.5) * attendance.overtime;
		}
		
		return overtimePay;
		
	};
	
	/**
	 * Calculates the wage
	 * @public
	 * @param {Object} attendance - attendance to calculate the daily wage for
	 * @param {Object} employee - employee from which to get wage from
	 * @returns {Number} - returns the total pay for the employee
	 */
	
	$scope.calculateWage = function (attendance, employee) {
		
		var wage = $scope._calculateRegularWage(attendance, employee);
		
		wage += $scope._calculateOvertime(attendance, employee);
		
		return wage;
	}
	
	/**
	 * Calculate social security
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.calculateSocialSecurity = function (attendance, employee) {
		
		var socialSecurity = $scope._calculateRegularWage(attendance, employee) * 0.05;
		
		return socialSecurity || 0;
	};
	
}]);


angular.module('employeeApp')
.controller('MainCtrl', ['$scope', '$location', 'Acknowledgement', 'mapMarker', 'PurchaseOrder', '$rootScope', '$log', '$http',
function ($scope, $location, Acknowledgement, mapMarker, PurchaseOrder, $rootScope, $log, $http) {

	
	


	var user = $scope.currentUser;
	var changePage = function () {
		if (user.hasModule('supplies') && !user.hasModule('acknowledgements') &&

		!user.hasModule('shipping') && !user.hasModule('po')) {
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
		console.log(target);
		console.log(markers);

		for (var i=0; i < markers[$scope.active].length; i++) {
			try {
				markers[$scope.active][i].setMap(null);
			} catch (e) {
				console.warn(e);
				//$log.error(e);
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


angular.module('employeeApp')
.controller('OrderAcknowledgementCreateCtrl', ['$scope', 'Acknowledgement', 'Customer', '$filter', '$window', 'Project', 'Notification', 'FileUploader', 'Room', 'Phase', '$mdDialog', '$log', 'Upholstery', 'Fabric', '$location', '$rootScope',
function ($scope, Acknowledgement, Customer, $filter, $window, Project, Notification, FileUploader, Room, Phase, $mdDialog, $log, Upholstery, Fabric, $location, $rootScope) {
   
    //Vars
    $scope.uploading = false;
    $scope.customImageScale = 100;
	$scope.tempComponent = {};
	$scope.projects = Project.query({page_size:99999, limit:0, status__exclude:"completed"});
    $scope.ack = new Acknowledgement();
    
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
			if (this.address.latitude != $scope.ack.customer.addresses[0].latitude || 
				this.address.longitude != $scope.ack.customer.addresses[0].longitude) {
					$scope.ack.customer.addresses[0].latitude = latLng.lat();
					$scope.ack.customer.addresses[0].longitude = latLng.lng();
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
		$scope.marker = createMarker({address: {}, latitude: 13.935441, longitude: 100.6864353, title:$scope.ack.customer.name});
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
	
	
	//Restore saved acknowledgement from localStorage
    if (storage.getItem('acknowledgement-create')) {
		var data = JSON.parse(storage.getItem('acknowledgement-create'));
		data.delivery_date = data.delivery_date ? new Date(data.delivery_date) : data.delivery_date;
        angular.extend($scope.ack, data);
				
		//Set marker for customer
		try {
			if($scope.ack.customer) {
				$scope.ack.customer = new Customer($scope.ack.customer);
				// Restore the name of the customer to the autocomplete field
				$scope.customerSearchText = $scope.ack.customer.name;
				$scope.selectedCustomer = $scope.ack.customer;
				
				var address = $scope.ack.customer.addresses[0];
				if (address.latitude && address.longitude) {
					 $scope.marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
					 
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
		
		if ($scope.ack.project) {
			$scope.ack.project = new Project($scope.ack.project);
			$scope.projectSearchText = $scope.ack.project.codename;
			$scope.selectedProject = $scope.ack.project;
		}
		
    }
	
	//Set items and employee
    $scope.ack.items = $scope.ack.items || [];
    $scope.employee = {id: $scope.currentUser.id};
    
    //Save a copy of acknowledgement to localStorage 
	$scope.tempSave = function () {
        storage.setItem('acknowledgement-create', JSON.stringify($scope.ack));
    };
	
	$scope.$watch('ack', function (newVal, oldVal) {
	
		if (newVal && oldVal) {
			if (!tempSaveTimer) {
				tempSaveTimer = setTimeout(function () {
					Notification.display('Temporarily saving acknowledgement....', 2000);
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
			console.log(query);
			Customer.query({q:query}, function (responses) {
				console.log(responses);
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
		
		$scope.ack.customer = $scope.ack.customer || {name: '', addresses: []};
		
		if (!$scope.ack.customer.id) {
			clearRoute();
			$scope.ack.customer.name = customerName || '';
		} else {
			if ($scope.ack.customer.name.indexOf(customerName) == -1) {
				$scope.ack.customer = {name: customerName, addresses: []};
			}
		}
	};
	
	
	
	//Add customer and hide modal
    $scope.addCustomer = function (customer) {
        //Set Customer and save
        $scope.ack.customer = customer;
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
				$scope.marker = createMarker({address: address, title: $scope.ack.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				
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
	
	
	/*
 	 * CONTACT SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/
	
	
	/**
	 * Updates the contact name, so that if the contact is a new one, 
	 * a contact object is already in place to accept the new details
	 * 
	 * @public
	 * @param {String} customerName - Name of the Customer
	 * @returns {null} 
	 */
	
	$scope.updateContactName = function (contactName) {
		$scope.ack.contact = $scope.ack.contact || {name: ''};
		
		if (!$scope.ack.contact.id) {
			$scope.ack.contact.name = contactName || '';
		} else {
			if ($scope.ack.contact.name.indexOf(contactName) == -1) {
				$scope.ack.contact = {name: contactName || ''};
			}
		}
	};
	
	/**
	 * Adds the selected contact to the acknowledgement
	 * @private
	 * @param {Object} contact object with contact data to be added to acknowledgement
	 */
    $scope.addContact = function (contact) {
        //Set Customer and save
        $scope.ack.contact = contact;
        $scope.tempSave();
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
		return projects;
	};
	
	$scope.addProject = function (project) {
		$scope.ack.project = project;

		// Add selected room to the project if user input room first
		if ($scope.ack.room) {
			$scope.ack.project.room = angular.copy($scope.ack.room);
			delete $scope.ack.room;
		}

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
		$scope.ack.project = $scope.ack.project || {codename: ''};
	
		if (!$scope.ack.project.id) {
			$scope.ack.project.codename = projectName || '';
		} else {
			if ($scope.ack.project.codename.indexOf(projectName) == -1) {
				$scope.ack.project = {codename: projectName};
			}
		}
	};
	
	/**
	 * Returns a list of rooms whose codename matches the search term
	 * @public
	 * @param {String} query - Search term to apply against room.description
	 * @returns {Array} - An array of rooms whose codename matches the search term
	 */
	$scope.searchRooms = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var rooms = [];
		if ($scope.ack.project) {
			for (var i = 0; i < $scope.ack.project.rooms.length; i++) {
				if (angular.lowercase($scope.ack.project.rooms[i].description).indexOf(lowercaseQuery) !== -1) {
					rooms.push($scope.ack.project.rooms[i]);
				}
			}
		}
		
		return rooms;
	};
	
	$scope.addRoom = function (room) {
		$scope.ack.project.room = room;
		$scope.tempSave();
	};
	
	/**
	 * Update the room's name if a room is not selected yet. This is incase, the room
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Room
	 * @returns {null} 
	 */

	$scope.updateRoomName = function (roomName) {
		
		if ($scope.ack.project) {
			$scope.ack.project.room = $scope.ack.project.room || {description: ''};
			
			if (!$scope.ack.project.room.id) {
				$scope.ack.project.room.description = roomName || '';
			} else {
				if ($scope.ack.project.room.description.indexOf(roomName) == -1) {
					$scope.ack.project.room = {description: roomName};
				}
			}
		} else {
			$scope.ack.room = {description: roomName};
		}
	};
	
	/**
	 * Returns a list of phases whose codename matches the search term
	 * @public
	 * @param {String} query - Search term to apply against phase.description
	 * @returns {Array} - An array of phase whose description matches the search term
	 */
	$scope.searchPhases = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var phases = [];
		for (var i = 0; i < $scope.ack.project.phases.length; i++) {
			if (angular.lowercase($scope.ack.project.phases[i].description).indexOf(lowercaseQuery) !== -1) {
				phases.push($scope.ack.project.phases[i]);
			}
		}
		return phases;
	};
	
	$scope.addPhase = function (phase) {
		$scope.ack.project.phase = phase;
		$scope.tempSave();
	};
	
	/**
	 * Update the room's name if a project is not selected yet. This is incase, the project
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Project
	 * @returns {null} 
	 */

	$scope.updatePhaseName = function (phaseName) {
		$scope.ack.project.phase = $scope.ack.project.phase || {description: ''};
	
		if (!$scope.ack.project.phase.id) {
			$scope.ack.project.phase.description = phaseName || '';
		} else {
			if ($scope.ack.project.phase.description.indexOf(phaseName) == -1) {
				$scope.ack.project.phase = {description: phaseName};
			}
		}
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
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading files...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/acknowledgement/file/");
				promise.then(function (result) {
					var data = result.data || result;
					for (var h = 0; h < $scope.ack.files.length; h++) {
						if (data.filename == $scope.ack.files[h].filename) {
							angular.extend($scope.ack.files[h], data);
						}
					}
				
					Notification.display('File uploaded');
					$scope.tempSave();
		
			}, function (e) {
		        Notification.display('Error uploading files', false);
				
			});
		}
		
		if (files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}]
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
	};
	
	
	/**
	 * Sends an image to image edit, then saves image.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 */
	
    $scope.addImage = function (files, item) {
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/acknowledgement/item/image");
				promise.then(function (result) {
			        
					var data = result.data || result;
					item.image = data
			
					Notification.display('Image uploaded');
					$scope.tempSave();
		
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}
		
		if (files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}]
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
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
		var lowercaseQuery = angular.lowercase(query.trim());
		var products = [];
		for (var i = 0; i < $scope.upholsteries.length; i++) {
			if (angular.lowercase($scope.upholsteries[i].description).indexOf(lowercaseQuery) !== -1) {
				products.push($scope.upholsteries[i]);
			}
		}
		
		console.log(lowercaseQuery, products);
		
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
		var lowercaseQuery = angular.lowercase(query.trim());
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
			if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
				fabrics.push($scope.fabrics[i]);
			}
		}
		return fabrics;
	};
	

	/**
	 * Add a Component to the list of components for an item
	 */
	$scope.addComponent = function ($index, component) {
		$scope.ack.items[$index].components = $scope.ack.items[$index].components || [];

		$scope.ack.items[$index].components.push(angular.copy(component));

		delete $scope.tempComponent;
	}

	/**
	 * Add a Component to the list of components for an item
	 */
	$scope.removeComponent = function ($index, components) {
		components.splice($index, 1);
	}
	
	/**
	 * ACKNOWLEDGEMENT VALIDATION, PREPARATION AND CREATION
	 * 
	 * This section deals with validating the details of the acknowlegement, preparing 
	 * the acknowledgement by creating new customers, projects, rooms and phases as necessary, 
	 * and creating the actually acknowledgement
	 */
	
	/**
	 * Validates the data of the acknowledgement
	 *
	 * @public
	 * @returns Boolean - Returns true if the acknowledgement is valid
	 */
	
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

					if (item.unit_price == undefined || item.unit_price == null) {
						var message = item.description;
						message += ' is missing a unit price';
						throw new TypeError(message);
					}
					
					console.log(item);

					/**
					 * Validates the component if there are components
					 */
					if (item.hasOwnProperty('components')) {

						if (item.components.length > 0) {
							console.log(item.components);
							/**
							 * Validate that the component is not null and has a 
							 * description and quantity
							 */
							for (var k = 0; k < item.components.length; k++) {
								if (item.components[k] == undefined || item.components[k] == null) {
									var message = "Expected a component, but the component for ";
									message += item.description + " is null or undefined. Please tell Charlie";
									$log.error(message);
									throw new TypeError(message);
								} else {
									if (item.components[k].description == '' || item.components[k].description == undefined || item.components[k].description == null) {
										var message = "Expected a description the component, but the component for ";
										message += item.description + " has no description. Please tell Charlie";
										$log.error(message);
										throw new TypeError(message);
									}

									if (item.components[k].quantity <= 0 || item.components[k].description == undefined || item.components[k].description == null ||
										item.components[k].quantity == undefined || item.components[k].quantity == null) {
										var message = "Expected a quantity of at least 1 for component: ";
										message += item.components[k].description + ".";
										$log.error(message);
										throw new TypeError(message);
									}
								}
							}
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
			if (testWords[j].re.test($scope.ack.remarks) && !$scope.ack[testWords[j].type] && !$scope.ack.project[testWords[j].type]) {
				//throw new TypeError(testWords[j].message);
			}
		}

		if ($scope.ack.room) {
			if (!$scope.ack.project) {
				throw new TypeError('Missing a project for the room.');
			}
		}
		
		 
        //Return true for form validated
		return true;
	};
	
	/**
	 * Prepare the acknowledgement for creation. Creates customers, projects, rooms, and phases 
	 * if they are respectively new
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	function prepareAcknowledgement (acknowledgement, callback) {
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
		
		progress.customer = false;
		var customer = new Customer();
		angular.extend(customer, acknowledgement.customer);
		
		// Add a contact if it exists
		if (acknowledgement.contact){
			if (customer.hasOwnProperty('contacts')){
				if (customer.contacts.indexOfById(acknowledgement.contact.id) === -1) {
					customer.contacts.push(angular.copy(acknowledgement.contact))
				}
			}
		}
		
		//Checks if customer exists and creates if not
		if (!acknowledgement.customer.id && acknowledgement.customer.name) {
		
			customer.$create(function (resp) {
				angular.extend(acknowledgement.customer, resp);
				progress.customer = true;
				checkProgress(callback);
			}, function () {
				progress.customer = 'error';
			});
		} else if (acknowledgement.customer.id) {
			
			customer.$update(function (resp) {
				angular.extend(acknowledgement.customer, resp);
				progress.customer = true;
				checkProgress(callback);
			}, function () {
				progress.customer = 'error';
			});
			
			
		}
		
		//Checks if the project exists and create if not
		if (acknowledgement.project) {
			if (!acknowledgement.project.id && acknowledgement.project.codename) {
				progress.project = false;
				var project = new Project();
				angular.extend(project, acknowledgement.project);
				
				project.$create(function (resp) {
					angular.extend(acknowledgement.project, resp);
					progress.project = true;
					checkProgress(callback);
				}, function () {
					progress.project = 'error';
				});
			}
		}

		//Checks if the room exists and create if not
		if (acknowledgement.room) {
			if (!acknowledgement.room.id && acknowledgement.room.description) {
				progress.room = false;
				var room = new Room();
				room.project = acknowledgement.project;
				angular.extend(room, acknowledgement.room);
				
				room.$create(function (resp) {
					angular.extend(acknowledgement.room, resp);
					progress.room = true;
					checkProgress(callback);
				}, function () {
					progress.project = 'error';
				});
			}
		}
		
		//Check if items are custom
		for (var i = 0; i < acknowledgement.items.length; i++) {
			if (!acknowledgement.items[i].hasOwnProperty('id')) {
				acknowledgement.items[i].is_custom = true;
			}
		}
		
		progress.fullRun = true;
		
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
		$scope.ack.employee = $scope.currentUser;
        $scope.tempSave();
		
        try {
            if ($scope.isValidated()) {
				
				Notification.display("Creating new acknowledgment...", false);
				
				
				prepareAcknowledgement($scope.ack, function () {
	                $scope.ack.$create(function (response) {
					
						Notification.display("Acknowledgement created with ID: " + $scope.ack.id, 2000);
						
						for (var h = 0; h < response.files.length; h++) {
							$window.open(response.files[h].url);
						}
						
	                    //$scope.reset();
						//$location.path("order/acknowledgement/" + response.id);
						
					
	                }, function (e) {
	                    $log.error(JSON.stringify(e));
						Notification.display("There was an error in creating the acknowledgement. A report has been sent to Charlie.", false);
	                });
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
		$scope.customerSearchText = "";
        storage.removeItem('acknowledgement-create');
    };
    
    
        
}]);

   
angular.module('employeeApp')
.controller('OrderAcknowledgementDailyCtrl', ['$scope', 'Acknowledgement',
function ($scope, Acknowledgement) {
	$scope.today = new Date();
	$scope.ackList = Acknowledgement.query({date: $scope.today.toISOString()});

}]);


angular.module('employeeApp')
.controller('OrderAcknowledgementDetailsCtrl', ['$scope', 'Acknowledgement', '$routeParams', '$http', '$window', 'Notification', 'FileUploader', 'Project', '$mdDialog', 'Fabric',
function ($scope, Acknowledgement, $routeParams, $http, $window, Notification, FileUploader, Project, $mdDialog, Fabric) { 
	
	//Show system notification
	var notification = Notification.display('Retrieving acknowledgement...', false);
		
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.acknowledgement = Acknowledgement.get({'id': $routeParams.id, 'pdf': true}, function  () {
		notification.hide();
		
		//Reconcile the project so that it is shown to the user
		if ($scope.projects.length > 0 && $scope.acknowledgement.project) {
			var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
			$scope.acknowledgement.project = $scope.projects[index];
		}
	});
	
	$scope.ack = $scope.acknowledgement;
	
	$scope.projects = Project.query({limit:0, page_size:1000}, function () {
		
		//Reconcile the project so that it is shown to the user
		if ($scope.acknowledgement.id && $scope.acknowledgement.project) {
			var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
			$scope.acknowledgement.project = $scope.projects[index];
		}
	});

	//get all fabrics
	$scope.fabrics = Fabric.query({limit:0, page_size:1000});
	
	//Help determine if an event occured for the given acknowledgement
	$scope.hasEvent = function (ack, e) {
		
		if (ack.logs) {
			for (var i in ack.logs) {
				if (ack.logs[i].hasOwnProperty('message')) {
					if (ack.logs[i].message.indexOf(e) > -1) {
						return true;
					}
				}
			
			}
		}
		
		return false;
	};
	
	//Request pdf for acknowledgements from server
    $scope.getPDF = function (type) {
		try {
			var address = $scope.acknowledgement.pdf[type.toLowerCase()];
			$window.open(address);
		} catch (e) {
			var message = "Missing " + type + " pdf for Acknowledgement #" + $scope.acknowledgement.id;
			
			Notification.display(message, false);
	
			throw new Error(message);
		}
	};

	//Request log data for acknowledgement
    $scope.viewLog = function () {
        $http.get("acknowledgement/" + $scope.acknowledgement.id + "/log").success(function (data) {
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
			$scope.acknowledgement.files.push({filename: files[i].name});
			
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.acknowledgement.files.length; h++) {
					if (data.filename == $scope.acknowledgement.files[h].filename) {
						angular.extend($scope.acknowledgement.files[h], data);
					}
				}
				$scope.acknowledgement.$update();
				
			}, function () {
				
			})
		}
		/* jshint ignore:end */
		
	};
	
	// Change Fabric
	$scope.changeFabric = function ($index) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/change-fabric.html',
			controllerAs: 'ctrl',
			locals: {item: $scope.acknowledgement.items[$index],
					 fabrics: $scope.fabrics},
			controller: 'DialogsChangeFabricCtrl',
			bindToController: true,
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
        }, 
        function () {
			Notification.display('Failed to save acknowledgement ' + $scope.acknowledgement.id, false);
        });
    };
}]);


angular.module('employeeApp')
.controller('OrderAcknowledgementItemDetailsCtrl', ['$scope', '$routeParams', 'AcknowledgementItem', 'Fabric', 'Notification', '$location', 
function ($scope, $routeParams, AcknowledgementItem, Fabric, Notification, $location) {
	$scope.fabricList = Fabric.query();
	$scope.item = AcknowledgementItem.get({id: $routeParams.id});
  
	$scope.save = function () {
		Notification.display('Saving' + $scope.item.description + '...', false);
		$scope.item.$save(function () {
			Notification.display($scope.item.description + ' saved');
		}, function () {
			Notification.display("There was an error in saving " + $scope.item.description, false);
		});
	};
  
	$scope.remove = function () {
		Notification.display("Deleting " + $scope.item.description, false);
		$scope.item.$delete(function () {
			Notification.display("Deleting " + $scope.item.description);
			$location.path('/order/acknowledgement');
		});
	};
  
  
}]);


angular.module('employeeApp')
.controller('OrderAcknowledgementViewCtrl', ['$scope', 'Acknowledgement', '$location', '$filter', 'KeyboardNavigation', 'Notification', '$log', 'Fabric', 'FileUploader', '$mdDialog',
function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, Notification, $log, Fabric, FileUploader, $mdDialog) {
	
	$scope.test = function () {
		window.alert('hi');
	};
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
	
	var notification = Notification.display('Retrieving acknowledgements...', false);
	$scope.tempComponent = {};
	$scope.query = {};
	$scope.fabrics = [];

	/* 
	 * Set default search from search url
	 */
	if (search.q) {
		$scope.safeApply(function () {
			$scope.query = {$: {$: search.q}};
		});
	}
	if (search.status) {
		$scope.safeApply(function () {
			$scope.query.status = search.status;
		});
	} 
	
	
	//Poll the server for acknowledgements
	$scope.acknowledgements = Acknowledgement.query({limit: 20}, function (e) {
		notification.hide();
		fetching = false;
		changeSelection(index);
		
		for (var i = 0; i < $scope.acknowledgements.length; i++) {
			for (var h = 0; h < $scope.acknowledgements[h].length; h++) {
				
			}
		}

		$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
	});


	/**
	 * Get the total from a list of deals that has a certain status
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.getTotal = function (stage) {
		var total = 0;
		
		for (var i = 0; i < $scope.acknowledgements.length; i++) {
			if ($scope.acknowledgements[i].status === stage) {
				var amount;
				
				amount = $scope.acknowledgements[i].total;
				/*
				if ($scope.acknowledgements[i].currency.toLowerCase() === 'thb') {
					amount = $scope.acknowledgements[i].grand_total;
				} else {
					switch($scope.acknowledgements[i].currency.toLowerCase()) {
						case 'eur':
							amount = $scope.acknowledgements[i].grand_total * 40;
						case 'usd': 
							amount = $scope.acknowledgements[i].grand_total * 35;
					}
						
				}
				*/
				total += amount;
			}
		}
		
		return total;
	};


	$scope.updateStage = function (ack, status) {
		console.log(ack);
		console.log(status);
		var index = $scope.acknowledgements.indexOfById(ack);
		console.log(index);
		if (index > -1) {
			if (!$scope.acknowledgements[index].items) {
				Acknowledgement.get({id:ack.id}, function (resp) {
					console.log(resp);
					console.log(index);
					console.log($scope.acknowledgements[index]);
					$scope.acknowledgements[index] = resp;
					$scope.acknowledgements[index].status = status;
					$scope.acknowledgements[index].$update();
				});
			} else {
				$scope.acknowledgements[index].status = status;
				$scope.acknowledgements[index].$update();
			}
			
			
		}
    };
	
	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showAcknowledgement = function (ack) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-acknowledgement.html',
			controllerAs: 'ctrl',
			locals: {
				'customers': $scope.customers,
				'acknowledgement': ack,
				'fabrics': $scope.fabrics
			},
			controller: ['$scope', '$mdDialog', 'customers', 'acknowledgement', 'fabrics', function ($scope, $mdDialog, customers, acknowledgement, fabrics) {
				$scope.fabrics = fabrics;
				$scope.ack = Acknowledgement.get({'id':acknowledgement.id});
				$scope.customers = customers;
				$scope.tempComponent = {};
				$scope.openAttachment = function (link) {
					window.open(link);
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
				$scope.addFiles = function (files, acknowledgement) {
					
					$scope.ack.files = ack.files || []; 
				
					/* jshint ignore:start */
					
					Notification.display('Uploading files', 2000);
					
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
							
							Notification.display('File Uploaded', 2000);

							$scope.ack.$update(function (resp) {
								Notification.display('Acknowledgement ' + $scope.ack.id + ' saved.', 2000);
								console.log($scope.ack);
							}, function (e){
								Notification.display(e, 0);
							});
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							Notification.display(e.message, 0);
							
						});
					}
				
					/* jshint ignore:end */
				};

				/**
				 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
				 * @public
				 * @param {Array} files - Array of files with raw data
				 * @returns {null}
				 */
				$scope.addImage = function (files, item) {
					
					if (files.length > 0) {
						/* jshint ignore:start */	
						
						Notification.display('Uploading image...');
							
						var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
						promise.then(function (result) {
							var data = result.data || result;
							item.image = data
							Notification.display('Image uploaded.');
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							
							Notification.display(e.message, 0);
							
						});
						/* jshint ignore:end */
					}
				};


				/**
				 * FABRIC SECTION
				 * 
				 * This section deals with the product listing and search
				 */
				
				// Inital list of upholsteries
				$scope.fabricSearchText = null;
				//$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
				
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
					var lowercaseQuery = angular.lowercase(query.trim());
					var fabrics = [];
					for (var i = 0; i < $scope.fabrics.length; i++) {
						try{
							if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
								fabrics.push($scope.fabrics[i]);
							}
						} catch(e) {
							
						}
						
					}
					return fabrics;
				};
				
				$scope.addComponent = function (item, component) {
					item.components.push(angular.copy(component));

					$scope.tempComponent = {};

				}
	
				/**
				 * Save the acknowledgement
				 * 
				 * @public
				 * @param {Object} acknowledgement - The acknowledgement to be saved
				 */
				$scope.update = function (acknowledgement) {
					
					Notification.display("Updating order #" + acknowledgement.id);
					
					acknowledgement.$update(function () {
						Notification.display("Order #" + acknowledgement.id + " updated");
					});
				};
				
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			}],
			clickOutsideToClose: true
		});
	};
	
	
	/**
	 * Activate the acknowledgement
	 * @private
	 * @param {Object} acknowledgement Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.activate = function (acknowledgement) {
		acknowledgement.$$active = true;
		
		Notification.display('Retrieving Acknowledgement...', false);
		Acknowledgement.get({'id': acknowledgement.id}, function (resp) {
			angular.merge(acknowledgement, resp);
			Notification.hide();
		}, function (e) {
			Notification.display(e);
		});
	}
	
	
	/**
	 * Deactivate the acknowledgement
	 * @private
	 * @param {Object} acknowledgement Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.deactivate = function (acknowledgement) {
		acknowledgement.$$active = false;
	};
	
	
	$scope.openAttachment = function (link) {
		window.open(link);
	};
	
	/**
	 * Show the Download dialog
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.download = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/download-acknowledgements.html',
      	  	clickOutsideToClose:true,
			controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
				$scope.download = function (start, end) {
					$mdDialog.hide();
					url = '/api/v1/acknowledgement/download/?start=';
					url += start.toISOString();
					url += '&end=' + end.toISOString();
					window.open(url);
				};					
			}]
		});
	};

	$scope.setCategory = function ($category) {
		$scope.safeApply(function () {
			$scope.query.status = $category;
		});
		
		//Set search paramters in url
		$location.search('status', $category);
		
		//Determines the paramters for the GET request
		var params = {limit:20, status: $category};
		try {
			if ($scope.query.$.$ ) {
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
			}
			
			//createAcknowledgementMarkers()
			
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
			Acknowledgement.query({q: q, limit: q ? q.length : 5}, function (resources) {
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
					if ($scope.acknowledgements.indexOfById(resources[i]) === -1) {
						$scope.acknowledgements.push(resources[i]);
					}
				}
				
				//createAcknowledgementMarkers();
			});
		}
	};
	
	//Help determine if an event occured for the given acknowledgement
	$scope.hasEvent = function (ack, e) {
		for (var i in ack.logs) {
			if (ack.logs[i].hasOwnProperty('message')) {
				if (ack.logs[i].message.indexOf(e) > -1) {
					return true;
				}
			}
			
		}
		
		return false;
	};
	
	
	/*
	 * Navigate to the details page for an acknowledgement
	 */
	$scope.navigate = function (id) {
		$location.path('/order/acknowledgement/' + id);
	};
	
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
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
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
		/*
		$scope.safeApply(function () {
			$location.path('/order/acknowledgement/' + currentSelection.id);
		});
		*/
	};
	
	keyboardNav.enable();
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
	
	
	
}]);


angular.module('employeeApp')
.controller('OrderAcknowledgementWeeklyCtrl', ['$scope', 'Acknowledgement', 
function ($scope, Acknowledgement) {
	$scope.startDate = new Date();
	$scope.endDate = new Date();
	$scope.endDate.setDate($scope.endDate.getDate() + 7);
	$scope.ackList = Acknowledgement.query({
		start_date: $scope.startDate.toISOString(),
		end_date: $scope.endDate.toISOString()
	});
}]);


angular.module('employeeApp')
.controller('OrderDeliveryViewCtrl', ['$scope', function ($scope) {

}]);


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


angular.module('employeeApp')
.controller('OrderEstimateDetailsCtrl', ['$scope', 'Estimate', '$routeParams', '$http', '$window', '$mdToast', 'FileUploader',
function ($scope, Estimate, $routeParams, $http, $window, $mdToast, FileUploader) { 
	
	//Show system notification
	$mdToast.show($mdToast
		.simple()
		.position('top right')
		.content('Loading estimate...')
		.hideDelay(0));
		
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.estimate = Estimate.get({'id': $routeParams.id, 'pdf': true}, function  () {
		$mdToast.hide();
	});
	
	//Grid Options
	$scope.gridOptions = {
		data: 'acknowledgement.products',
		columnDefs: [{field: 'image', displayName: 'Image'}]
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
			$scope.estimate.files.push({filename: files[i].name});
			
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.estimate.files.length; h++) {
					if (data.filename == $scope.estimate.files[h].filename) {
						angular.extend($scope.estimate.files[h], data);
					}
				}
				$scope.estimate.$update();
				
			}, function () {
				
			})
		}
		/* jshint ignore:end */
		
	};
	
    //Save updates to the server
    $scope.save = function () { 
		
		$mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Saving acknowledgement...')
			.hideDelay(0));

        $scope.estimate.$update(function (response) {
            
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Acknowledgement ' + $scope.estimate.id + ' saved.'));
				
        }, 
        function () {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Failed to save acknowledgement ' + $scope.estimate.id));
        });
    };
}]);


angular.module('employeeApp')
.controller('OrderEstimateViewCtrl', ['$scope', 'Estimate', '$location', '$filter', 'KeyboardNavigation', '$mdToast', 'Fabric', 'FileUploader', 'Notification', 'Upholstery', 'Acknowledgement', '$log',
function ($scope, Estimate, $location, $filter, KeyboardNavigation, $mdToast, Fabric, FileUploader, Notification, Upholstery, Acknowledgement, $log) {
	
	
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection;
		
	var loadingToast = $mdToast.show($mdToast
			.simple()
			.position('bottom right')
			.content('Loading estimates...')
			.hideDelay(0));

	//Poll the server for acknowledgements
	$scope.estimates = Estimate.query({limit: 20}, function (e) {
		$mdToast.hide();
		fetching = false;
		changeSelection(index);
	});

	$scope.openAttachment = function (link) {
		window.open(link);
	}
	/*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
	$scope.$watch('query.$.$', function (q) {
		if (q) {
			Estimate.query({q: q, limit: q ? q.length*q.length : 5}, function (resources) {
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
		console.log('ok');
		console.log(fetching);
		if (!fetching) {
			fetching = true;
			var moreAckToast = $mdToast.show($mdToast
					.simple()
					.position('bottom right')
					.hideDelay(0)
					.content('Loading more quotations...'));
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
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
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
	
	//keyboardNav.enable();
	
	
    $scope.addItem = function (estimate, product, configs) {
		

		if (product.description) {
			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
			product.unit_price = product.price || 0;
	        estimate.items.push(product);
	       
			
		}

		estimate.$$product = null;
		estimate.$$searchText = '';

		console.log(estimate.$$product)
		console.log(estimate.$$searchText)

    };
    
	
	
    $scope.removeItem = function (estimate, index) {
        estimate.items.splice(index, 1);
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
	$scope.addFiles = function (files, quotation) {
	
		quotation.files = quotation.files || []; 

		/* jshint ignore:start */
	
		Notification.display('Uploading files', 2000);
	
		for (var i = 0; i < files.length; i++) {
			quotation.files.push({filename: files[i].name});
	
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < quotation.files.length; h++) {
					if (data.filename == quotation.files[h].filename) {
						angular.extend(quotation.files[h], data);
					}
				}
			
				Notification.display('File Uploaded', 2000);
			
			
			}, function (e) {
				$log.error(JSON.stringify(e));
				Notification.display(e.message, 0);
			
			});
		}

		/* jshint ignore:end */
	};

	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addImage = function (files, item) {
	
		if (files.length > 0) {
			/* jshint ignore:start */	
		
			Notification.display('Uploading image...');
			
			var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
			promise.then(function (result) {
				var data = result.data || result;
				item.image = data
				Notification.display('Image uploaded.');
			
			}, function (e) {
				$log.error(JSON.stringify(e));
			
				Notification.display(e.message, 0);
			
			});
			/* jshint ignore:end */
		}
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
		var lowercaseQuery = angular.lowercase(query.trim());
		var products = [];
		for (var i = 0; i < $scope.upholsteries.length; i++) {
			if (angular.lowercase($scope.upholsteries[i].description).indexOf(lowercaseQuery) !== -1) {
				products.push($scope.upholsteries[i]);
			}
		}
		
		console.log(lowercaseQuery, products);
		
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
		var lowercaseQuery = angular.lowercase(query.trim());
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
			try{
				if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
					fabrics.push($scope.fabrics[i]);
				}
			} catch (e) {
				
			}
			
		}
		return fabrics;
	};

	$scope.quotationIsValidated = function (quotation) {
		/*
         * The following are test to see if
         * The property has already been added
         */
        if (!quotation.customer) {
            throw new TypeError("Please add a customer.");
        } else {
            if (!quotation.customer.hasOwnProperty('name')) {
                throw new ReferenceError("Missing customer name");
            }
        }

		
		if (!quotation.currency) {
            //throw new TypeError("Please select a currency.");
        }
		

        //Validate ordered Items
        if (!quotation.items) {
            throw new TypeError("Please add products to this order");
        } else {
			//Verifies that there are items ordered
            if (quotation.items.length <= 0) {
                throw new RangeError("Please add products to this order");
            } else {
                for (var i = 0; i < quotation.items.length; i++) {
					var item = quotation.items[i];
                    /*
                     * Check that there is a quantity
                     * for each piece of product
                     */
                    if (!quotation.items[i].hasOwnProperty('quantity') || !quotation.items[i].quantity) {
                        throw new RangeError("Expecting a quantity of at least 1 for " + quotation.items[i].description);
                    }

                    /*
                     * Validates that every item has a price
                     */
                    if (!quotation.items[i].hasOwnProperty('unit_price')) {

					} else {
                        if (!quotation.items[i].unit_price) {
                            throw new TypeError("Product missing unit price");
                        }
                    }
                }
            }
        }

        //Validate Delivery Date
        if (!quotation.delivery_date) {
            throw new TypeError("Please select a preliminary delivery date.");
        }

        //Validate vat
        if (quotation.vat === undefined || quotation.vat === null) {
            throw new TypeError("Please set the vat.");
        }

        //Validate purchase order number
        if (!quotation.po_id) {
            //throw new TypeError("PO# is not defined");
        }


        //Return true for form validated
		return true;
	}

	/**
	 * Save the quotation
	 * 
	 * @public
	 * @param {Object} acknowledgement - The acknowledgement to be saved
	 */
	$scope.update = function (quotation) {
	
		Notification.display("Updating Quotation #" + quotation.id);

		try {
			if ($scope.quotationIsValidated(quotation)) {
				quotation.$update(function () {
					Notification.display("Quotation #" + quotation.id + " updated");
				});
			}
		} catch (e) {
			$log.error(JSON.stringify({message: e, data: quotation}));
			Notification.display(e.message, false);
		}
	
	};

	/**
	 * Create a new Acknowledgement 
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.createAcknowledgement = function (quotation) {
		
		Notification.display('Creating acknowledgement from quotation #' + quotation.id, 0);
		
		var acknowledgement = new Acknowledgement();
		
		// Assign order details
		acknowledgement.customer = quotation.customer;
		acknowledgement.delivery_date = quotation.delivery_date || 0;
		acknowledgement.discount = quotation.discount || 0;
		acknowledgement.vat = quotation.vat || 0;
		acknowledgement.terms = quotation.terms || 0;
		acknowledgement.po_id = quotation.po_id || 'NA';
		
		// Assign project
		if (quotation.project) {
			acknowledgement.project = quotation.project;
		}
		
		// Assign the room if it exists
		if (quotation.room) {
			acknowledgement.room = quotation.room;
		}
		
		// Assign the phase if it exists
		if (quotation.phase) {
			acknowledgement.phase = quotation.phase;
		}
		
		// Assign items
		acknowledgement.items = quotation.items;
		
		// Prepare items for new creation
		for (var i = 0; i < acknowledgement.items.length; i++) {
			if (!acknowledgement.items[i].hasOwnProperty('model') || acknowledgement.items[i].hasOwnProperty('configuration')) {
				delete acknowledgement.items[i].id;
			}
			
			acknowledgement.items[i].price = acknowledgement.items[i].unit_price || acknowledgement.items[i].price || 0;
		}
		
		acknowledgement.$create(function (resp) {
			Notification.display('Acknowledgement #' + resp.id + ' created from quotation #' + quotation.id, 2000);
			quotation.status = 'ordered';
			quotation.acknowledgement = resp;
			quotation.$update();
			
			$scope.safeApply(function () {
				$location.path('/order/acknowledgement/' + resp.id);
			});
			
		}, function (e) {
			Notification.display('Error creating new acknowledgement from quotation #' + quotation.id, 0);
			console.error(e);
		});
		
	}
	
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);


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


angular.module('employeeApp')

.controller('OrderPurchaseOrderDetailsCtrl', ['$scope', '$routeParams', 'PurchaseOrder', '$mdToast', '$location', '$window', 'Project', '$mdDialog', 'Room', 'Phase', '$log',
function ($scope, $routeParams, PurchaseOrder, $mdToast, $location, $window, Project, $mdDialog, Room, Phase, $log) {
	
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
					$log.error(status);
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
			$log.error(e);
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


angular.module('employeeApp')
.controller('OrderPurchaseOrderViewCtrl', ['$scope', 'PurchaseOrder', '$filter', 'KeyboardNavigation', '$location', 'Notification', 'Supply', 'Supplier', '$log', '$mdDialog', 'Acknowledgement',
function ($scope, PurchaseOrder, $filter, KeyboardNavigation, $location, Notification, Supply, Supplier, $log, $mdDialog, Acknowledgement) {
	
	//Flags and variables
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
		
	//System wide message
	Notification.display('Loading purchasing orders...');
		
	//Poll Server for pos
	$scope.poList = PurchaseOrder.query({limit: 20}, function () {
		for (var i = 0; i < $scope.poList.length; i++) {
			var rD = $scope.poList[i].receive_date;
			var pD = $scope.poList[i].paid_date;
			$scope.poList[i].receive_date = rD ? new Date(rD) : rD; 
			$scope.poList[i].paid_date = pD ? new Date(pD) : pD; 
		}
		
		fetching = false;
		changeSelection(index);
	}, function () {
		fetching = false;
	});

	$scope.supplies = [];
	$scope.acknowledgements = Acknowledgement.query({page_size:10, limit:0});
	
	$scope.openAttachment = function (link) {
		window.open(link);
	}
	
	/**
	 * Get the total from a list of deals that has a certain status
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.getTotal = function (stage) {
		var total = 0;
		
		for (var i = 0; i < $scope.poList.length; i++) {
			if ($scope.poList[i].status.toLowerCase() === stage.toLowerCase()) {
				var amount;
				
				amount = $scope.poList[i].total;
				/*
				if ($scope.acknowledgements[i].currency.toLowerCase() === 'thb') {
					amount = $scope.acknowledgements[i].grand_total;
				} else {
					switch($scope.acknowledgements[i].currency.toLowerCase()) {
						case 'eur':
							amount = $scope.acknowledgements[i].grand_total * 40;
						case 'usd': 
							amount = $scope.acknowledgements[i].grand_total * 35;
					}
						
				}
				*/
				total += amount;
			}
		}
		
		return total;
	};


	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showPurchaseOrder = function (po) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-purchase-order.html',
			controllerAs: 'ctrl',
			locals: {
				'suppliers': $scope.suppliers,
				'po': po,
				'supplies': $scope.supplies,
				'acknowledgements': $scope.acknowledgements
			},
			controller: ['$scope', '$mdDialog', 'suppliers', 'po', 'supplies', 'acknowledgements', function ($scope, $mdDialog, suppliers, po, supplies, acknowledgements) {
				$scope.po = PurchaseOrder.get({'id':po.id}, function (resp) {
					if ($scope.po.acknowledgement) {
						$scope.selectedAck = $scope.po.acknowledgement;
						if ($scope.acknowledgements.indexOfById($scope.po.acknowledgement) === -1) {
							$scope.acknowledgements.push($scope.po.acknowledgement);
						}
					}
					
				});
				$scope.suppliers = suppliers;
				$scope.supplies = supplies;
				$scope.acknowledgements = acknowledgements;
				$scope.tempComponent = {};
				$scope.openAttachment = function (link) {
					window.open(link);
				};
				
				/**
				 * ACKNOWLEDGEMENT SECTION
				 *
				 * Describes the projects, room and phases
				 */
				
				// Watch on supplierSearchText to get products from the server
				$scope.retrieveAcks = function (query) {
					console.log(query);
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
					console.log(query);
					var lowercaseQuery = angular.lowercase(query);
					var acks = [];
					
					/*
					for (var i = 0; i < scope.acknowledgements.length; i++) {
						if (angular.lowercase(scope.acknowledgements[i].id).indexOf(lowercaseQuery) !== -1) {
							acks.push(scope.acknowledgements[i]);
						}
					}
					*/

					var acks = $filter('filter')($scope.acknowledgements, query);
					return acks;
				};

				$scope.addAck = function (acknowledgement) {
					if (acknowledgement) {
						$scope.po.acknowledgement = acknowledgement;
					}
					
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
				$scope.addFiles = function (files, po) {
					
					$scope.po.files = po.files || []; 
				
					/* jshint ignore:start */
					
					Notification.display('Uploading files', 2000);
					
					for (var i = 0; i < files.length; i++) {
						$scope.po.files.push({filename: files[i].name});
					
						var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
						promise.then(function (result) {
							var data = result.data || result;
							for (var h = 0; h < $scope.po.files.length; h++) {
								if (data.filename == $scope.po.files[h].filename) {
									angular.extend($scope.po.files[h], data);
								}
							}
							
							Notification.display('File Uploaded', 2000);

							$scope.po.$update(function (resp) {
								Notification.display('Purchase Order ' + $scope.po.id + ' saved.', 2000);
								console.log($scope.po);
							}, function (e){
								Notification.display(e, 0);
							});
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							Notification.display(e.message, 0);
							
						});
					}
				
					/* jshint ignore:end */
				};

				/**
				 * PRODUCT SECTION
				 *
				 * This section deals with the product listing and search
				 */

				// Watch on productSearchText to get products from the server
				$scope.retrieveSupplies = function (query) {
					$scope.supplies = $scope.supplies || [];
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
						for (var i = 0; i < responses.length; i++) {
							if ($scope.supplies.indexOfById(responses[i]) === -1) {
								console.log(responses[i]);
								$scope.supplies.push(responses[i]);
							}
						}
					});
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
				* Add an item to the purchase order
				*/
				$scope.addItem = function (item) {
					
					if (item.description) {
						$scope.po.items = $scope.po.items || [];
						var purchasedItem = angular.copy(item);
			
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
			
			
						//Add new supply to the list of items for the purchase order
						$scope.po.items.push(purchasedItem);
					}
			
				};

				/**
				 * Remove item
				 */

				 $scope.removeItem = function ($index) {
					 $scope.po.items.splice($index, 1);
				 }

				/**
				 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
				 * @public
				 * @param {Array} files - Array of files with raw data
				 * @returns {null}
				 */
				$scope.addImage = function (files, item) {
					
					if (files.length > 0) {
						/* jshint ignore:start */	
						
						Notification.display('Uploading image...');
							
						var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
						promise.then(function (result) {
							var data = result.data || result;
							item.image = data
							Notification.display('Image uploaded.');
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							
							Notification.display(e.message, 0);
							
						});
						/* jshint ignore:end */
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
				* Verfication of order
				*/
				$scope.validatePurchaseOrder = function (purchaseOrder) {
					purchaseOrder = purchaseOrder || $scope.po;

					if (!purchaseOrder.hasOwnProperty('supplier')) {
						throw new Error("Please select a supplier");
					}

					if (!purchaseOrder.receive_date instanceof Date ||
						!purchaseOrder.receive_date) {
						throw new Error("Please select a 'Receiving Date' for the order");
					}

					//if (!purchaseOrder.currency) {
						//throw new TypeError("Please select a currency for this order");
					//}

					if (purchaseOrder.items.length <= 0) {
						throw new Error("Please add items to the purchase order");
					}

					if (purchaseOrder.items) {
						for (var i = 0; i < (purchaseOrder.items.length ||[]); i++) {
							if (!purchaseOrder.items[i].quantity || purchaseOrder.items[i].quantity <= 0) {
								throw new Error(purchaseOrder.items[i].description + " is missing a quantity");
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

					console.log(supplier);
					// Associate this supplier with the supply
					supply.suppliers = [supplier];
					supply.suppliers[0].supplier = {id: supplier.id};
					supply.suppliers[0].cost = supply.unit_cost || supply.cost;

					var resource = new Supply(supply);
					console.log(resource);
					// Create a new supply
					resource.$create(function (response) {

						angular.extend(supply, response);

						// Move supply id location to avoid item update
						// instead of item creation
						supply.supply = {id: supply.id};
						delete supply.id;

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


						purchaseOrder.$update(function (response) {
							$scope.creating = false;
							Notification.display('Purchase order updated.');

							angular.extend(purchaseOrder, response);
							//Change page to newly saved purchase order page
							//$location.path("/order/purchase_order/" + response.id);

						}, function (e) {
							$scope.creating = false;
							$log.error(JSON.stringify(e));
							Notification.display("There was an error in updating the purchase order. A report has been sent to Charlie");

						});

					}

				};

				/*
				* Save the purchase order to the server
				*/
				$scope.xupdate = function (purchaseOrder) {
					purchaseOrder = purchaseOrder || $scope.po;
					try {
						if ($scope.validatePurchaseOrder(purchaseOrder)) {

							Notification.display('Updating purchase order...');
							
							$scope._preparePurchaseOrder(purchaseOrder, $scope._sendCreateRequest.bind(purchaseOrder));
						}
					} catch (e) {
						$log.error(JSON.stringify(e));
						Notification.display(e.message);
					}
				};
				/**
				 * Save the po
				 * 
				 * @public
				 * @param {Object} po - The acknowledgement to be saved
				 */
				$scope.update = function (po) {
					
					Notification.display("Updating order #" + po.id);
					
					po.$update(function () {
						Notification.display("Order #" + po.id + " updated");
					});
				};
				
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			}],
			clickOutsideToClose: true
		});
	};


	$scope.updateStage = function (po, status) {

		if (po.status.toLowerCase() == "approved" && po.approval_pass || 1==1) {
			console.log(po);
			console.log(status);
			var index = $scope.poList.indexOfById(po);
			console.log(index);
			if (index > -1) {
				if (!$scope.poList[index].items) {
					PurchaseOrder.get({id:po.id}, function (resp) {
						console.log(resp);
						console.log(index);
						console.log($scope.poList[index]);
						$scope.poList[index] = resp;
						$scope.poList[index].status = status;
						$scope.poList[index].$update();
					});
				} else {
					$scope.poList[index].status = status;
					$scope.poList[index].$update();
				}
				
				
			}
		}
    };
	

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
			PurchaseOrder.query({limit: q ? 10 * q.length : 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					var rD = resources[i].receive_date;
					var pD = resources[i].paid_date;
					resources[i].receive_date = rD ? new Date(rD) : rD; 
					resources[i].paid_date = pD ? new Date(pD) : pD; 
				
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
		$scope.query = {$: {$: search.q}};
		$scope.safeApply();
	}
	
	/**
	 * PRODUCT SECTION
	 * 
	 * This section deals with the product listing and search
	 */
	
	// Watch on productSearchText to get products from the server
	$scope.retrieveSupplies = function (query) {
		$scope.supplies = $scope.supplies || [];
		var options = {};
		if (query) {
			options.q = query;
		} 
		
		/*
		if ($scope.po.supplier) {
			if ($scope.po.supplier.id) {
				//options.supplier_id = $scope.po.supplier.id;
			}
		}
		*/
		
		Supply.query(options, function (responses) {
			for (var i = 0; i < responses.length; i++) {
				if ($scope.supplies.indexOfById(responses[i]) === -1) {
					$scope.supplies.push(responses[i]);
				}
			}
		});
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
	$scope.addItem = function (po, item) {
		console.log(po, item);
		if (item.description) {
			po.items = po.items || [];
			var purchasedItem = angular.copy(item);
		
			delete purchasedItem.quantity;
		
			/*
			 * Apply the items unit cost or cost from supplier to the supply cost
			 */
			purchasedItem.cost = Number((purchasedItem.cost || purchasedItem.unit_cost) || 0);
		
			if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers') && po.supplier) {
				if (po.supplier.id) {
					for (var i = 0; i < purchasedItem.suppliers.length; i++) {
						if (purchasedItem.suppliers[i].supplier.id === po.supplier.id) {
							purchasedItem.cost = Number(purchasedItem.suppliers[i].cost);
							purchasedItem.purchasing_units = purchasedItem.suppliers[i].purchasing_units;
							purchasedItem.suppliers[i].supplier = {id: po.supplier.id};
						}
					}
				}
			}
		
			//Add new supply to the list of items for the purchase order
			po.items.push(purchasedItem);
		}
		
	};
	
	/*
	 * Remove an item fro the purchase order
	 */
	$scope.removeItem = function (po, index) {
		po.items.splice(index, 1);
		
		if (po.items.length === 0) {
			po.items = [];
		}
	};
	
	
	$scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more purchasing orders...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.poList.length
			};
			
			try{
				if ($scope.query.$.$) {
					config.q = $scope.query.$.$;
					config.offset = $filter('filter')($scope.poList, config.q).length; 
				
				}
			} catch (e) {
				
			}
			
			
			PurchaseOrder.query(config, function (resources) {
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
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
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
		/*
		$scope.safeApply(function () {
			$location.path('/order/purchase_order/' + currentSelection.id);
		});
		*/
	};
	
	keyboardNav.enable();
	
	
	/**
	 * Check if a supply is new for a supplier
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} supply - supply to be check
	 * @param {String|Object|Array|Boolean|Number} supplier - supplier to be checked against
	 * @returns {Boolean} - a boolean indicating if this is a new supply or not
	 */
	$scope.isNewSupply = function (supply, supplier) {
		if (!supply.suppliers) {
			return false;
		}
		
		if (supply.id && supplier) {
			for (var i = 0; i < supply.suppliers.length; i++) {
				if (supply.suppliers[i].supplier.id === supplier.id) {
					return false;
				}
			}
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
				$scope._checkProgress(progress, callback);
			}, function () {
				progress.supplier = 'error';
			});
		} else if (purchaseOrder.supplier.id) {
			progress.supplier = false;
			purchaseOrder.supplier = new Supplier(purchaseOrder.supplier);
			purchaseOrder.supplier.$update(function (resp) {
				angular.extend(purchaseOrder.supplier, resp);
				progress.supplier = true;
				$scope._checkProgress(progress, callback);
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
		
		// Associate this supplier with the supply
		supply.suppliers = [supplier];
		supply.suppliers[0].supplier = {id: supplier.id};
		supply.suppliers[0].cost = supply.cost;
		
		var resource = new Supply(supply);
		
		// Create a new supply
		resource.$create(function (response) {
			
			angular.extend(supply, response);
			
			// Move supply id location to avoid item update 
			// instead of item creation
	  		supply.supply = {id: supply.id};
			delete supply.id;
			
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
			supplierData.cost = supply.cost || supply.unit_cost;
			
			// Move the supplier id
			supplierData.supplier = {'id': supplierData.id};
			delete supplierData.id;
			
			// Add new supplier
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
		
		//Object used to track progress of sub-resource creations
		var progress = {supplies:false};
		//$scope._prepareSupplier(purchaseOrder, progress, callback);
				
		//Checks if the project exists and create if not
		/*
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
		*/
				
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
	};
	
	$scope._sendUpdateRequest = function () {
		purchaseOrder = this;
		
		purchaseOrder.$update(function (response) {
			Notification.display('Purchase order ' + purchaseOrder.id + ' created.');
								
			angular.extend(purchaseOrder, response);
			//Change page to newly saved purchase order page
			//$location.path("/order/purchase_order/" + response.id);
		
		}, function (e) {
			$log.error(JSON.stringify(e));
			Notification.display("There was an error in updating the purchase order. A report has been sent to Charlie");
			
		});
	};
	
	
	/**
	 * Save the purchase order
	 *
	 * @public
	 * @param {Object} purchaseOrder - Purchase Order to be updated
	 */
	
	$scope.update = function (purchaseOrder) {
		Notification.display("Updating purchase order #" + purchaseOrder.id);
		try {
			$scope._preparePurchaseOrder(purchaseOrder, $scope._sendUpdateRequest.bind(purchaseOrder));
		} catch (e) {
			console.error(e);
		}
		
	};
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);


angular.module('employeeApp')
.controller('OrderShippingCreateCtrl', ['$scope', 'Acknowledgement', 'Customer', '$filter', '$mdToast', 'Shipping', '$location', 'scanner', '$log', 'Room', 'Project',
function ($scope, Acknowledgement, Customer, $filter, $mdToast, Shipping, $location, scanner, $log, Room, Project) {

	var fetchingAck = true;

	$scope.shipping = new Shipping();
    var ack;

    scanner.onscan = function (code) {
        var re = new RegExp(/^A\-(s+)?/);
        if (re.test(code)) {
			$mdToast.show($mdToast
				.simple()
				.content('Retrieving Acknowledgement# ' + code.split('-')[1])
				.delay(0));
			Notification.display('Retrieving Acknowledgement# ' + code.split('-')[1], false);
            Acknowledgement.get({id: code.split('-')[1]}, function (response) {
                $mdToast.hide();
                var ack = response;
                $scope.shipping.acknowledgement = {id: ack.id};
                $scope.shipping.customer = ack.customer;
                $scope.shipping.products = ack.products;
                $scope.shipping.delivery_date = new Date(ack.delivery_date);
            },
            function () {
				$mdToast.show($mdToast
					.simple()
					.content('Unable to locate Acknowledgement#' + code.split('-')[1])
					.delay(0));
            });
        }
    };

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
		if (query) {
			Customer.query({q:query}, function (responses) {
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
		$scope.shipping.customer = $scope.shipping.customer || {name: '', addresses: []};
		
		if (!$scope.shipping.customer.id) {
			try{
				clearRoute();
			} catch (e) {
				$log.warn(e);
			}
			$scope.shipping.customer.name = customerName || '';
		} else {
			if ($scope.shipping.customer.name.indexOf(customerName) == -1) {
				$scope.shipping.customer = {name: customerName, addresses: []};
			}
		}
	};
	
	
	
	//Add customer and hide modal
    $scope.addCustomer = function (customer) {
        //Set Customer and save
        $scope.shipping.customer = customer;
        //$scope.tempSave();
			
		//Reset the map
		/*
		if ($scope.marker) {
			$scope.marker.setMap(null);
		}
		clearRoute();
	 	map.setZoom(9);
		*/
		
		//Set marker for customer
		try {
			var address = customer.addresses[0];
			
			if (address.latitude && address.longitude) {
				$scope.marker = createMarker({address: address, title: $scope.shipping.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				
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


	/*
 	 * Acknowledgement SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/

	/**
	 * Acknowledgement Variables
	 */
	$scope.acknowledgements = Acknowledgement.query(function () {
		fetching = false;
	});

	// Watch on customerSearchText to get products from the server
	$scope.retrieveAcknowledgements = function (query) {
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
	 * Returns a list of customers whose name matches the query
	 *
	 * @public
	 * @param {String} query - the string to search against the customer names
	 * @returns {Array} - An array of customes that matches the query
	 */

	$scope.searchAcknowledgements = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var acknowledgements = [];
		acknowledgements = $filter('filter')($scope.acknowledgements, query);

		return acknowledgements;
	};


    $scope.addAcknowledgement = function (ack) {
		ack = ack || $scope.selectedAcknowledgement;
		console.log(ack);
		console.log($scope.selectedAcknowledgement);
		if (ack) {
			$scope.shipping.acknowledgement = Acknowledgement.get({id: ack.id},
				function (resp) {
					$scope.shipping.acknowledgement = {id: ack.id};
					
					//Add project and room to the shipping
					$scope.shipping.project = $scope.shipping.acknowledgement.project;
					$scope.shipping.room = $scope.shipping.acknowledgement.room;

					/* Get Customer from the server
					 */
					$scope.shipping.customer = Customer.get({id: resp.customer.id}, function(resp){
						$scope.selectedCustomer = resp;
					});

					$scope.shipping.items = resp.items;
					$scope.shipping.delivery_date = new Date(resp.delivery_date);

					for (var i = 0; i < $scope.shipping.items.length; i++) {
						try{
							$scope.shipping.items[i].quantity = Number($scope.shipping.items[i].quantity);
							$scope.shipping.items[i].width = Number($scope.shipping.items[i].width || 0);
							$scope.shipping.items[i].depth = Number($scope.shipping.items[i].depth || 0);
							$scope.shipping.items[i].height = Number($scope.shipping.items[i].height || 0);


						} catch (e) {
							$log.warn(e);
						}

					}


				}
			)
		}
	};
	

	/**
	 * PROJECT SECTION
	 * 
	 * Describes the projects, room and phases
	 */
	$scope.projects = Project.query({page_size:9999, limit:0});
	
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
		$scope.shipping.project = project;
		//$scope.tempSave();
	};
	
	/**
	 * Update the project's name if a project is not selected yet. This is incase, the project
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Project
	 * @returns {null} 
	 */

	$scope.updateProjectName = function (projectName) {
		$scope.shipping.project = $scope.shipping.project || {codename: ''};
	
		if (!$scope.shipping.project.id) {
			$scope.shipping.project.codename = projectName || '';
		} else {
			if ($scope.shipping.project.codename.indexOf(projectName) == -1) {
				$scope.shipping.project = {codename: projectName};
			}
		}
	};
	
	/**
	 * Returns a list of rooms whose codename matches the search term
	 * @public
	 * @param {String} query - Search term to apply against room.description
	 * @returns {Array} - An array of rooms whose codename matches the search term
	 */
	$scope.searchRooms = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var rooms = [];

		if ($scope.shipping.project) {
			if ($scope.shipping.project.rooms){
				for (var i = 0; i < $scope.shipping.project.rooms.length; i++) {
					if (angular.lowercase($scope.shipping.project.rooms[i].description).indexOf(lowercaseQuery) !== -1) {
						rooms.push($scope.shipping.project.rooms[i]);
					}
				}
			}
		}
		
		
		return rooms;
	};
	
	$scope.addRoom = function (room) {
		$scope.shipping.room = angular.copy(room);
		//$scope.tempSave();
	};
	
	/**
	 * Update the room's name if a room is not selected yet. This is incase, the room
	 * does not yet exist.
	 * @public
	 * @param {String} projectName - Name of the Room
	 * @returns {null} 
	 */

	$scope.updateRoomName = function (roomName) {
		$scope.shipping.room = $scope.shipping.room || {description: ''};
	
		if (!$scope.shipping.room.id) {
			$scope.shipping.room.description = roomName || '';
		} else {
			// If add a new room where there is a room with a similar name
			if ($scope.shipping.room.description.indexOf(roomName) == -1) {

				$scope.shipping.room = {description: roomName};
			}
		}
	};


    $scope.$watch('query', function (q) {
		if (q) {
			Acknowledgement.query({limit: 5, q: q}, function (resources) {
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

	$scope.addComponent = function ($index, component) {
		$scope.shipping.items[$index].components = $scope.shipping.items[$index].components || [];
		$scope.shipping.items[$index].components.push(component);
	}

	$scope.addItem = function (product) {
		if (product.description) {
			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
			$scope.shipping.items = $scope.shipping.items || [];
	        $scope.shipping.items.push(product);
	        //$scope.tempSave();
		
			delete $scope.tempProduct;
			delete $scope.productSearchText;
		}
    };
    
	
	
    $scope.removeItem = function (index) {
        $scope.shipping.items.splice(index, 1);
        //$scope.tempSave();
    };

    $scope.create = function () {
		
		try{
			$scope.isValidated()
			$mdToast.show($mdToast
				.simple()
				.content('Creating shippping manifest...')
				.hideDelay(0));
			$scope.shipping.$save(function (resource) {
				$mdToast.show($mdToast
					.simple()
					.content('Shipping manifest created')
					.hideDelay(2000));
                if (resource.pdf.url) {
					window.open(resource.pdf.url);
                }
                $location.path('/order/shipping');
            },
            function () {
				$mdToast.show($mdToast
					.simple()
					.content('There was an error in creating the shipping manifest')
					.hideDelay(0));
            });
		} catch (e) {
			$mdToast.show($mdToast
				.simple()
				.content(e.message));
		}
    };

    //Validations
    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
		/*
        if (!$scope.shipping.acknowledgement) {
            return false;
        }
		*/

        if (!$scope.shipping.delivery_date) {
            var message = "Missing delivery date";	
			throw new Error(message);
        }

		// Check if the shipping has any items
		if (!$scope.shipping.items){
			var message = "No items to delivery";	
			throw new Error(message);
		} else {
			if ($scope.shipping.items.length === 0) {
				var message = "No items to delivery";	
				throw new Error(message);
			}
		}
		
		// Check if quantity is present
		for (var i=0; i < $scope.shipping.items.length; i++) {
			if (!$scope.shipping.items[i].quantity) {
				var message = $scope.shipping.items[i].description;
				message += " missing quantity";
				throw new Error(message);
			}
		}

        //Return true for form validated
        return true;
    };

    $scope.$on('$destroy', function () {
        scanner.onscan = null;
    });
}]);


angular.module('employeeApp')
.controller('OrderShippingDeliveryCtrl', ['$scope', 'Delivery', function ($scope, Delivery) {
    $scope.deliveryList = Delivery.query();
}]);


angular.module('employeeApp')
.controller('OrderShippingDetailsCtrl', ['$scope', 'Shipping', '$routeParams', '$mdToast', '$http',
function ($scope, Shipping, $routeParams, $mdToast, $http) {
	$mdToast.show($mdToast
		.simple()
		.content('Loading Shipping Manifest...')
		.hideDelay(0));
	$scope.showCal = false;
	$scope.shipping = Shipping.get({'id': $routeParams.id, pdf: true}, function () {
		$mdToast.hide();
	});

	$scope.updateDeliveryDate = function () {
		$scope.showCal = false;
	};

	$scope.getPDF = function () {
		$mdToast.show($mdToast
			.simple()
			.content('Retrieving PDF...'));
		if ($scope.shipping.pdf.url) {
			window.open($scope.shipping.pdf.url);
		}
	};

	$scope.save = function () {
		$mdToast.show($mdToast
			.simple()
			.content('Saving Shipping Manifest...')
			.hideDelay(0));
		$scope.shipping.$update(function () {
			$mdToast.show($mdToast
				.simple()
				.content('Shipping manifest ' + $scope.shipping.id + ' saved')
				.hideDelay(0));
		});
	};
}]);


angular.module('employeeApp')
.controller('OrderShippingTodayCtrl', ['$scope', 'Acknowledgement', function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.startDate.setHours(0, 0, 0);
    $scope.endDate = new Date();
    $scope.endDate.setHours(0, 0, 0);
    $scope.endDate.setDate($scope.endDate.getDate() + 1);
    $scope.ackList = Acknowledgement.query({
		start_date: $scope.startDate.toISOString(),
		end_date: $scope.endDate.toISOString()
	});
}]);

/*
 * All shipped orders view
 */
angular.module('employeeApp')
.controller('OrderShippingViewCtrl', ['$scope', 'Shipping', '$filter', '$mdToast', '$mdDialog', 'Fabric', 'Upholstery', 'Notification',
function ($scope, Shipping, $filter, $mdToast, $mdDialog, Fabric, Upholstery, Notification) {
	
	/*
	 * Vars and flags
	 */
	var fetching = true;
	
	$mdToast.show($mdToast
		.simple()
		.content('Loading shipping manifests...')
		.hideDelay(0));
	
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
			Shipping.query({limit: 5, q: q}, function (resources) {
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
			fetching = true;
			$mdToast.show($mdToast
				.simple()
				.content('Loading more shipping manifests...')
				.hideDelay(0));
				
			Shipping.query({
				offset: $scope.shippingList.length,
				limit: 20
			}, function (resources) {
				$mdToast.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.shippingList.push(resources[i]);
				}

				fetching = false;
			}, function () {
				fetching = false;
			});
		}
	};


	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showShipping = function (shipping) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-shipping.html',
			controllerAs: 'ctrl',
			locals: {
				//'customers': $scope.customers,
				'shipping': shipping
			},
			controller: ['$scope', '$mdDialog', 'shipping', function ($scope, $mdDialog, shipping) {
				$scope.shipping = Shipping.get({'id':shipping.id});
				//$scope.customers = customers;
				$scope.tempComponent = {};
				$scope.openAttachment = function (link) {
					window.open(link);
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
				$scope.addFiles = function (files, acknowledgement) {
					
					$scope.ack.files = ack.files || []; 
				
					/* jshint ignore:start */
					
					Notification.display('Uploading files', 2000);
					
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
							
							Notification.display('File Uploaded', 2000);

							$scope.ack.$update(function (resp) {
								Notification.display('Acknowledgement ' + $scope.ack.id + ' saved.', 2000);
								console.log($scope.ack);
							}, function (e){
								Notification.display(e, 0);
							});
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							Notification.display(e.message, 0);
							
						});
					}
				
					/* jshint ignore:end */
				};

				/**
				 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
				 * @public
				 * @param {Array} files - Array of files with raw data
				 * @returns {null}
				 */
				$scope.addImage = function (files, item) {
					
					if (files.length > 0) {
						/* jshint ignore:start */	
						
						Notification.display('Uploading image...');
							
						var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
						promise.then(function (result) {
							var data = result.data || result;
							item.image = data
							Notification.display('Image uploaded.');
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							
							Notification.display(e.message, 0);
							
						});
						/* jshint ignore:end */
					}
				};


				/**
				 * FABRIC SECTION
				 * 
				 * This section deals with the product listing and search
				 */
				
				// Inital list of upholsteries
				$scope.fabricSearchText = null;
				$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
				
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
					var lowercaseQuery = angular.lowercase(query.trim());
					var fabrics = [];
					for (var i = 0; i < $scope.fabrics.length; i++) {
						try{
							if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
								fabrics.push($scope.fabrics[i]);
							}
						} catch(e) {
							
						}
						
					}
					return fabrics;
				};
				
				$scope.addComponent = function (item, component) {
					item.components.push(angular.copy(component));

					$scope.tempComponent = {};

				}
	
				/**
				 * Save the acknowledgement
				 * 
				 * @public
				 * @param {Object} acknowledgement - The acknowledgement to be saved
				 */
				$scope.update = function (acknowledgement) {
					
					Notification.display("Updating order #" + acknowledgement.id);
					
					acknowledgement.$update(function () {
						Notification.display("Order #" + acknowledgement.id + " updated");
					});
				};
				
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			}],
			clickOutsideToClose: true
		});
	};
}]);


angular.module('employeeApp')
.controller('OrderShippingWeekCtrl', ['$scope', 'Acknowledgement', function ($scope, Acknowledgement) {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
    $scope.endDate.setDate($scope.endDate.getDate() + 7);
    $scope.ackList = Acknowledgement.query({
		start_date: $scope.startDate.toISOString(),
		end_date: $scope.endDate.toISOString()
	});
}]);


angular.module('employeeApp')
.controller('ProductInventoryCtrl', ['$scope', 'AcknowledgementItem',
function ($scope, AcknowledgementItem) {
           
    $scope.itemList = AcknowledgementItem.poll().query({status: "inventory"});
    $scope.showAddInventory = false;
    
    $scope.addInventory = function (product) {
        $scope.item = new AcknowledgementItem();
        angular.extend($scope.item, JSON.parse(JSON.stringify(product)));
        if (product.hasOwnProperty('id')) {
            $scope.item.product = {id: product.id};
        }
        delete $scope.item.id;
        
        $scope.item.status = "INVENTORY";
       
        $scope.item.$save(function () {
            $scope.itemList.push(angular.copy($scope.item));
        });
    };
    
   
    
    
    $scope.$on('$destroy', function () {
        $scope.AcknowledgementItem.stopPolling(); 
    });
}]);


angular.module('employeeApp')
.controller('ProductModelAddCtrl', ['$scope', 'Model', 'Notification', '$location', 'FileUploader', '$mdDialog',
function ($scope, Model, Notification, $location, FileUploader, $mdDialog) {
      
    $scope.model = new Model();
    
    //Adds a new models
    $scope.create = function (model) {
        Notification.display('Saving Model...', false);
        $scope.model.$create(function (obj) {
            $location.path('/product/model/'+obj.id+'/');
            Notification.display('Model Saved'); 
            
        });
    };
    
    //Uploads Profie Image
    $scope.addFiles = function (files) {
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Model Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/upholstery/image/");
				promise.then(function (dataObj) {
                    Notification.display('Image uploaded.');
                    $scope.model.images = $scope.model.images || [];
					$scope.model.images.push(dataObj.data);
		
					$scope.update();
		
					$scope.images = null;
		
		
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}
		
		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}]
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
    };
}]);


angular.module('employeeApp')
.controller('ProductModelDetailsCtrl', ['$scope', 'Model', '$routeParams', '$location', 'Notification', '$http', 'FileUploader', 'Upholstery', 'Configuration', '$mdDialog',
function ($scope, Model, $routeParams, $location, Notification, $http, FileUploader, Upholstery, Configuration, $mdDialog) {
    $scope.model = Model.get({'id': $routeParams.id});
	$scope.upholsteries = Upholstery.query({'model_id': $routeParams.id});
    $scope.configuration = false;
	
	var updateVars = {};

	// Uploads schematics for the upholstery
	$scope.addSchematic = function (upholstery, files) {

		function uploadImage (image, upholstery) {
	        //display notification
	        Notification.display('Uploading schematic...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/upholstery/image/");
				promise.then(function (dataObj) {
			        Notification.display('Schematic uploaded.');
					
					upholstery.schematic = dataObj.data;

					$scope.updateUpholstery(upholstery);
		
			}, function () {
		        Notification.display('Error uploading schematic', false);
	
			});
		}

		var image = files[0];
		if (image.type = "image/svg+xml") {
			uploadImage(image, upholstery);
		} else {
			Notification.display('Can only upload SVG files');
		}
	};
	
    //Uploads Profie Image
    $scope.addImage = function (files) {
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Model Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/upholstery/image/");
				promise.then(function (dataObj) {
			        Notification.display('Image uploaded.');
					$scope.model.images.push(dataObj.data);
		
					$scope.update();
		
					$scope.images = null;
		
		
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}
		
		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}]
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
	};
	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.removeImage = function ($index) {
		$scope.model.images.splice($index, 1);
		
		$scope.update();
	}
    
    
    
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
    
	/*
	 * Create dialog to add room
	 */
	$scope.showAddUpholstery = function () {
		
		// Redeclare variables to be used in subcontroller
		$scope.configurations = $scope.configurations || Configuration.query({limit:0, offset:0});
		
		// Create the dialog and display it
		$mdDialog.show({
			templateUrl: 'views/templates/add-upholstery.html',
      	  	clickOutsideToClose:true,
			controller: ['$scope', '$mdDialog', 'model', 'configurations', 'upholsteries', function ($scope, $mdDialog, model, configurations, upholsteries) {
				$scope.configurations = configurations;
				$scope.upholstery = new Upholstery();
				$scope.upholstery.model = model;
				
				/**
				 * Create a new upholstery via POST request
				 * @public
				 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
				 * @returns Describe what it returns
				 * @type String|Object|Array|Boolean|Number
				 */
				
				$scope.create = function () {
					$mdDialog.hide();
					Notification.display('Creating new upholstery: ');
					$scope.upholstery.$create(function () {
						Notification.display($scope.upholstery.model.model + ' ' + $scope.upholstery.configuration.configuration + ' created.');
						upholsteries.push(angular.copy($scope.upholstery));
					}, function (e) {
						Notification.display(e);
					});
				};
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
				
				
				
			}],
			locals: {
				'model': $scope.model, 
				'configurations': $scope.configurations, 
				'upholsteries': $scope.upholsteries
			}
		});
	};

	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.updateUpholstery = function (upholstery) {
		
		clearTimeout(updateVars[upholstery.id]);
		
		updateVars[upholstery.id] = setTimeout(function () {
	        Notification.display('Saving Upholstery...', false);
			
	        this.upholstery.$update(function (resp) {
				Notification.display('Upholstery Updated');
	        }, function (e) {
	        	Notification.display('Unable to update upholstery because ' + e);
	        });
		}.bind({upholstery: upholstery}), 3000);
	}


	/*
	 * Delete the Upholstery
	 */
	$scope.removeUpholstery = function (upholstery) {
		// Build the confirmation message
		var message = "Would you like to delete " + upholstery.description; 
		message += "?";

		// Display the confirmation message and act if true
		if (window.confirm(message)) {
			for (var i = 0; i < $scope.upholsteries.length; i++) {
				if ($scope.upholsteries[i].id === upholstery.id) { 
					$scope.upholsteries.splice(i, 1);
				}
			}

			upholstery.$delete(function () {
				Notification.display(upholstery.description + " deleted.", 2000);
			}, function () {
				Notification.display('There was an error deleting ' + upholstery.description, 5000);
				$scope.upholsteries.push(upholstery);
			});
		}
		
	};


    $scope.update = function () {
		
		function updateModel () {
	        Notification.display('Saving Model...', false);
			var model = angular.copy($scope.model);
			
	        model.$update(function (resp) {
				Notification.display('Model Updated');
				angular.extend($scope.model, resp);
	        }, function (e) {
	        	Notification.display('Unable to update model because ' + e);
	        });
		}
		
		clearTimeout($scope.updateVar); 
		$scope.updateVar = setTimeout(updateModel, 600);
        
    };
    
	/*
		Make Primary Image
	
		Set all the images in the set primary:false and then set the image supplied in the 
		argument as primary:true
	*/
	$scope.makePrimaryImage = function (image) {
		
		if (!$scope.configuration) {
			// Set all images as primary:false
			for (var i = $scope.model.images.length; i--;) {
				$scope.model.images[i].primary = false;
			}
		
			// Set argument image as primary:true
			image.primary = true;
		
			$scope.update();
		} else {
			$scope.configuration = false
			// Set all images as primary:false
			for (var i = $scope.model.images.length; i--;) {
				$scope.model.images[i].configuration = false;
			}
		
			// Set argument image as primary:true
			image.configuration = true;
		
			$scope.update();
		}
		
		
	};
	
    $scope.$on('$destroy', function () {
        $scope.update();
    });
    
}]);


angular.module('employeeApp')
.controller('ProductModelViewCtrl', ['$scope', 'Model', 'Notification', '$log', '$location', function ($scope, Model, Notification, $log, $location) {
	
	var fetching = false;	
	/* 
	 * Set default search from search url
	 */
		
    $scope.models = Model.query(function () {

    });
    
    $scope.$watch('query.$', function (q) {
		if (q) {
			Model.query({q: q, limit: 10}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.models.indexOfById(resources[i]) == -1) {
						$scope.models.push(resources[i]);
					}		
				}
			});
		}
	});
    
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more models...', false);
			fetching = true;
			Model.query({
				limit: 50,
				offset: $scope.models.length
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					$scope.models.push(resources[i]);
				}
				fetching = false;
			}, function (e) {
				$log.error(e);
				fetching = false;
			});
		}
	};
	
	/*
	 * Watch for changes of a model
	 */
	// Helper function to update the model
	var updateTimer = null;
	var update = function () {
		var notification = Notification.display('Updating ' + this.model + '.', false);
		
		this.$update(postUpdate);	
	};
	
	// Callback to run when the acknowledgement is finished updating
	function postUpdate (resp) {
		var notification = Notification.display(resp.model + " status updated.", 2000);
	}
	
	//Help function to test object equality
	function equals(newObj, oldObj) {
		
		//Create new array of arguments
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		for (i in newObj) {
			if (args.indexOf(i) === -1 && i.indexOf('$') === -1) {
				if (oldObj[i] != newObj[i]) {
					return false;
				}
			}
		}
		
		return true;
	}
	
	$scope.$watch('models', function (newVal, oldVal) {
		if (newVal && oldVal) {
			try{				
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							if (!equals(newVal[i], oldVal[i], 'images', 'last_modified')) {
								clearTimeout(updateTimer);
								updateTimer = setTimeout(update.bind(newVal[i]), 600);
							}
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		
	}, true);
	
	$scope.$on('$destroy', function () {
		
	});
    
}]);


angular.module('employeeApp')
.controller('ProductRugAddCtrl', ['$scope', function ($scope) {

}]);


angular.module('employeeApp')
.controller('ProductRugViewCtrl', ['$scope', function ($scope) {


}]);


angular.module('employeeApp')
.controller('ProductTableAddCtrl', ['$scope', 'Table', 'Configuration', 'Model', 'Notification', '$location',
function ($scope, Table, Configuration, Model, Notification, $location) {
    
    $scope.configurationList = Configuration.query({limit: 0});
    $scope.modelList = Model.query({limit: 0});
    $scope.table = new Table();
    
    //Text for tooltips
    $scope.modelText = "Choose a Model";
    $scope.configurationText = "Choose a Configuration";
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
        
		jQuery.ajax("/api/v1/upholstery/image", {
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

    
}]);


angular.module('employeeApp')
.controller('ProductTableDetailsCtrl', ['$scope', 'Table', '$routeParams', '$mdToast', '$location', 'FileUploader',
function ($scope, Table, $routeParams, $mdToast, $location, FileUploader) {
	$scope.table = Table.get({'id': $routeParams.id});    
     
	//Upload Image
	$scope.upload = function () {
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('File was uploaded.'));

				$scope.table.image = dataObj.data;
				
				$scope.update();
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
	};
     
	$scope.update = function () {
		//Notification.display('Saving Table...', false);
		$scope.table.$update(function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(3000)
				.content('Table saved.'));
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
}]);


angular.module('employeeApp')
.controller('ProductTableViewCtrl', ['$scope', 'Table', 'Notification', function ($scope, Table, Notification) {
	var fetching = true;
	Notification.display('Loading Tables...');
    
	$scope.tableList = Table.query(function () {
		fetching = false;
		Notification.hide();
	});
    
	$scope.$watch('query', function (q) {
		if (q) {
			Table.query({q: q, limit: 5}, function (resources) {
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
}]);


angular.module('employeeApp')
.controller('ProductUpholsteryAddCtrl', ['$scope', 'Model', 'Configuration', 'Upholstery', 'Notification', '$location', 'FileUploader',
function ($scope, Model, Configuration, Upholstery, Notification, $location, FileUploader) {
    $scope.modelList = Model.query({limit: 0});
    $scope.configurationList = Configuration.query({limit: 0});
    $scope.upholstery = new Upholstery();
    
    //Text for tooltips
    $scope.modelText = "Choose a Model";
    $scope.configurationText = "Choose a Configuration";
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
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.upholstery.image = dataObj.data;
				
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
	};
    
    $scope.save = function () {
        Notification.display('Saving Upholstery Product...');
        $scope.upholstery.$create(function () {
            Notification.display('Upholstery Product Saved');
            $location.path('/product/upholstery');
        }); 
    };
}]);


angular.module('employeeApp')
.controller('ProductUpholsteryDetailsCtrl', ['$scope', 'Upholstery', '$routeParams', '$mdToast', '$location', '$timeout', 'FileUploader', 'ProductSupply', '$mdDialog', 'Notification',
function ($scope, Upholstery, $routeParams, $mdToast, $location, $timeout, FileUploader, ProductSupply, $mdDialog, Notification) {
	
	$scope.updateLoopActive = true;
	var timeoutPromise;
	
    $scope.uphol = Upholstery.get({'id': $routeParams.id}, function () {
		$scope.safeApply(function () {
			$scope.updateLoopActive = false;
		});
    });    
	$scope.supplies = ProductSupply.query({'product__id': $routeParams.id}, function () {
	});
    
	
    //Upload Image
    $scope.upload = function () {
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('File was uploaded.'));

				$scope.uphol.image = dataObj.data;
				
				$scope.update();
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
		/*
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
    
	//Supply total
	$scope.supplyTotal = function () {
		var total = 0;
		for(var i = $scope.supplies.length; i--;) {
			total += Number($scope.supplies[i].cost);
		}
		
		return total;
	};
	
	/* 
	 * Dialog to add a new product supply
	 */
	$scope.showAddProductSupply = function () {
		$scope.supply = new ProductSupply();
		$scope.supply.product = $scope.uphol;
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-product-supply.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	$scope.completeAddProductSupply = function  () {
		$mdDialog.hide();
		
		Notification.display("Creating supply for " + $scope.uphol.description + "...", false);
			
		$scope.supply.$create(function (resp) {
			$scope.supplies.push(resp);
			
			Notification.hide();
			$scope.supply = new ProductSupply();
			$scope.supply.product = $scope.uphol;
		}, function (e) {
			$log.error(JSON.stringify(e));
		});
	};
	
	$scope.cancelAddProductSupply = function  () {
		$mdDialog.hide();
		$scope.supply = new ProductSupply();
		$scope.supply = $scope.uphol;
	};
	
	/*
		Watch function to detect changes in the list of supplies
	*/
	$scope.$watch('supplies', function (newVal, oldVal) {
		var updateSupply = function() {
			this.$update(function () {
				this.$updating = false;
			});
		};
		
		if (newVal.length && oldVal.length) {
			for (var i = newVal.length; i--;) {
				if (newVal[i] && oldVal[i]) {
					if (newVal[i].id == oldVal[i].id) {
						if (!angular.equals(newVal[i], oldVal[i])) {
							if (!newVal[i].$updating) {
								newVal[i].$updating = true;
								
								setTimeout(updateSupply.bind(newVal[i]), 600);
								
							}
							
						}
					}
				}
			}
		}
		
	}, true);
	
    $scope.$watch(function () {
		var uphol = angular.copy($scope.uphol);
		try {
			delete uphol.last_modified;
			//delete uphol.image;
			//delete uphol.model;
			//delete uphol.configuration;
		}catch (e) {
			
		}
		return uphol;
	}, function (newVal, oldVal) {
		
		if (newVal && oldVal) {
			if (newVal.hasOwnProperty('id')) {
				if (!angular.equals(newVal, oldVal)) {
					if (!newVal.$updating) {
						
						newVal.$updating = true;
						
						setTimeout(function () {
							this.$update(function () {
								this.$updating = false;
								$mdToast.show($mdToast.simple()
									.position('top right')
									.hideDelay(3000)
									.content($scope.uphol.description + ' updated.'));
							});
						}.bind(newVal), 600);
					}
				}
			}
		}
		
		/*
		if (oldVal.hasOwnProperty('id')) {
			
			$timeout.cancel(timeoutPromise);
			
			timeoutPromise = $timeout(function () {
				
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('Updating ' + $scope.uphol.description + '...'));
				
				$scope.uphol.$update(function () {
					$scope.updateLoopActive = false;
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content($scope.uphol.description + ' updated.'));

				}, function () {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content("Unable to update"));

				});
			}, 700);
		}*/
    }, true);
    
    $scope.update = function () {
        //Notification.display('Saving Upholsterty...', false);
		/*
        $scope.uphol.$update(function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(3000)
				.content('Upholstery saved.'));
        });
		*/
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
}]);


angular.module('employeeApp')
.controller('ProductUpholsteryViewCtrl', ['$scope', 'Upholstery', 'Notification', '$filter', '$location',
function ($scope, Upholstery, Notification, $filter, $location) {
	
	var fetching = false;
	
    Notification.display('Loading Upholstery...', false);
    
    $scope.resources = Upholstery.query({limit: 20}, function () {
        Notification.hide();
    });
    
    $scope.$watch('query', function (q) {
		if (q) {
			Upholstery.query({q: q, limit: 5}, function (resources) {
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
			var note = Notification.display('Loading more upholstery...', 6000);
			
			var params = {
				offset: $scope.resources.length,
				limit: 10
			};
			
			if ($scope.query) {
				params.q = $scope.query;
			}
			
			Upholstery.query(params, function (resources) {
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.resources.push(resources[i]);
				}
			});
		}
	};
	
	/*
	 * Watch for changes in the status of the acknowledgement
	 */
	// Helper function to upate an object bind to the function
	function update() {
		var notification = Notification.display('Updating ' + this.description + '.', false);
		this.$update(postUpdate);	
	}
	
	//Help function to test object equality
	function equals(newObj, oldObj) {
		
		//Create new array of arguments
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		// Loop through keys of the newest obj, and test that it is not
		// in the list of arguments
		for (i in newObj) {
			if (args.indexOf(i) === -1 && i.indexOf('$') === -1) {
				if (oldObj[i] != newObj[i]) {
					return false;
				}
			}
		}
		
		return true;
	}
	
	$scope.$watch('resources', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			var notification = Notification.display(resp.description + " status updated.", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				
				
				
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							if (equals(newVal, oldVal, 'images', 'last_modified', 'schematic', 'image')) {
								setTimeout(update.bind(newVal[i]), 600);
							}
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		
	}, true);
   
}]);


angular.module('employeeApp')
.controller('ProjectDetailsCtrl', ['$scope', 'Project', '$routeParams', 'Room', 'Notification', 'FileUploader', '$http', '$timeout', "PurchaseOrder", 'Acknowledgement', '$mdDialog', 'Phase', '$q', '$rootScope',
function ($scope, Project, $routeParams, Room, Notification, FileUploader, $http, $timeout, PurchaseOrder, Acknowledgement, $mdDialog, Phase, $q, $rootScope) {
    
	var timeoutPromise;
    $scope.showAddRoom = false;
    $scope.flag = false;
    $scope.project = Project.get({id: $routeParams.id});
    $scope.room = {};
	$scope.purchaseOrders = PurchaseOrder.query({limit:0, project_id:$routeParams.id});
	$scope.acknowledgements = Acknowledgement.query({limit:0, project_id:$routeParams.id});
	$scope.room = new Room();
    $scope.roomTypes = [
    	'Bedroom',
		'Dining Room',
		'Formal Dining Room',
		'Guest Bedroom',
		'Guest Bathroom',
		'Kitchen',
		'Living Room',
		"Maid's Quaters",
		'Master Bathroom',
		'Master Bedroom',
		'Pantry'
    ];
	$scope.updateVars = {};
	
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
			controller: function () {this.parent = $scope;}
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
			controller: function () {this.parent = $scope;}
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
		$scope.project.supplies.push(supply);
		
		//Notify the user
		//Notification.display("Adding "+$supply.description+" to "+$scope.project.codename);
		
		//$scope.project.$update(function () {
		//	Notification.display($supply.description+" added to "+$scope.project.codename + ".");
		//});
		
	};
	
	$scope.removeSupply = function ($index) {
		$scope.project.supplies.splice($index, 1);
	};
	
    $scope.addImage = function (files) {
        /**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image, fn) {
	        //display notification
	        Notification.display('Uploading Project Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/project/image/");
			promise.then(function (dataObj) {
				$scope.project.files.push(dataObj.data);
		
					//$scope.update();
		
					//$scope.images = null;
		
				(fn || angular.noop)();
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}

		function setDataURL(f) {
			var reader = new FileReader();
		
			// Closure to capture the file information.
			reader.onload = function (e) {
				$rootScope.safeApply(function () {
					f.url = e.target.result;
				});
			}
		
			// Read in the image file as a data URL.
			reader.readAsDataURL(f);			

		}
		
		// Create image attribute if does not exist
		$scope.project.files = $scope.project.files || [];

		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
				templateUrl: 'views/templates/edit-image.html',
				locals: {'update': $scope.update},  
				controller: ['$scope', '$mdDialog', 'update', function ($scope, $mdDialog, update) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};

					$scope.images = [];
					for (var i=0; i < files.length; i++) {
						$scope.images.push(files[i]);
						setDataURL($scope.images[i]);
					}

					$scope.imageToEdit = $scope.images[0];
					$scope.currentIndex = 0;
					$scope.fileSize = 0;
					$scope.saveProgress = {};
					$scope.update = update;
									
					

					$scope.setImage = function ($index) {
						var img = $scope.cropper.getImage();

						angular.copy(img, $scope.images[$scope.currentIndex]);
						setDataURL(img);
						img.name = $scope.images[$scope.currentIndex].name;
						$scope.images[$scope.currentIndex] = img;						
						$scope.imageToEdit = $scope.images[$index];
						$scope.currentIndex = $index;
						$scope.cropper.setImage($scope.imageToEdit);
					};
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						//Set current image in list of images
						image.name = $scope.images[$scope.currentIndex].name;
						$scope.images[$scope.currentIndex] = image;

						for (var h=0; h<$scope.images.length; h++) {
							$timeout(function () {
								$scope.saveProgress[this.index] = false;
								
								uploadImage($scope.images[this.index], function () {
									$scope.saveProgress[this.k] = true;
	
									if (Object.values($scope.saveProgress).indexOf(false) == -1) {
										Notification.display('Images uploaded');
										$scope.images = null;
										$scope.saveProgress = {};
										$scope.update();
										$mdDialog.hide();
										
									} 
								}.bind({'k':this.index}));
							}.bind({'index':h}), 100 * h);
							
						}
						
					}

					
					
						  

				}]
		   	});
			
		} else {
			uploadImage(files[0], function () {
				
			});
		}
	};


	/*
		Make Primary Image
	
		Set all the images in the set primary:false and then set the image supplied in the 
		argument as primary:true
	*/
	$scope.makePrimaryImage = function (image) {
		
		// Set all images as primary:false
		for (var i = $scope.project.files.length; i--;) {
			$scope.project.files[i].primary = false;
		}
	
		// Set argument image as primary:true
		image.primary = true;
	
		$scope.update();
	
		
		
	};

	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.removeImage = function ($index) {
		$scope.project.files.splice($index, 1);
		
		$scope.update();
	}

    
    $scope.addSchematic = function (files) {
        var file = angular.isArray(files) ? files[0] : files;
        var promise = FileUploader.upload(file, '/api/v1/project/image/');
        promise.then(function (response) {
            $scope.room.schematic = response; 
        });
    };
    
    $scope.addRoom = function () {
        Notification.display('Adding ' + $scope.room.description, false);
        var room = new Room();
        angular.extend(room, $scope.room);
        room.project = {id: $scope.project.id};
        room.$save(function (response) {
            Notification.display($scope.room.description + " added.");
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
			locals: {project: $scope.project},
			controller: 'DialogsCreatePackingListCtrl',
			bindToController: true,
		});
	};
	
	/*
	 * Watches the project for changes in order to autosave
	 *
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
	*/
	
	$scope.update = function () {
		
		function updateProject () {
	        Notification.display('Saving Project...', false);
			var project = angular.copy($scope.project);
			
	        project.$update(function (resp) {
				Notification.display('Project Updated');
				//var images = resp['files'];
				//delete resp['images'];

				angular.extend($scope.project, resp);

				
	        }, function (e) {
	        	Notification.display('Unable to update project because ' + e);
	        });
		}
		
		$timeout.cancel($scope.updateVar); 
		$scope.updateVar = $timeout(updateProject, 1500);
        
    };
	
	$scope.$on('$destroy', function () {
        $scope.update();
	});
	
}]);


angular.module('employeeApp')
.controller('ProjectRoomDetailsCtrl', ['$scope', 'Room', '$routeParams', 'Notification', '$mdDialog', 'RoomItem', 'FileUploader', '$timeout', '$mdToast', 'Phase', 'ProjectItemPart',
function ($scope, Room, $routeParams, Notification, $mdDialog, RoomItem, FileUploader, $timeout, $mdToast, Phase, Part) {
    
	var timeoutPromise = {};
    $scope.room = Room.get({id: $routeParams.id}, beginWatch);
	$scope.room.items = $scope.room.items || [];
	$scope.item = new RoomItem();
 
 	function setTimeoutFactory(item, i) {
		timeoutPromise[i] = setTimeout(function(item) {
			$mdToast.show($mdToast.simple()
				.hideDelay(0)
				.position('top right')
				.content("Saving " + item.description + "..."));
			
			item = new RoomItem(angular.copy(item));
			
			function callback() {
				$mdToast.show($mdToast.simple()
					.hideDelay(2000)
					.position('top right')
					.content(item.description + " saved."));
			}
			
			item.id ? item.$update(callback) : item.$create(callback); //jshint ignore:line
				
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
			
			var promise = FileUploader.upload($files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				$scope.room.items[$index].files.push(data);
				for (var h = 0; h < $scope.room.items[$index].files.length; h++) {
					//if (data.filename == $scope.room.items[$index].files[h].filename) {
					//	angular.extend($scope.room.items[$index].files[h], data);
					//}
				}
			}, function (e) {
				
			});
		}
		/* jshint ignore:end */
	};
	
	
	/*
	 * Create dialog to add item
	 */
	$scope.showAddItem = function () {
		$scope.item = new RoomItem();
		$mdDialog.show({
			templateUrl: 'views/templates/add-room-item.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
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
			item.files.push({filename: $files[i].name});
			
			var promise = FileUploader.upload($files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < item.files.length; h++) {
					if (data.filename == item.files[h].filename) {
						angular.extend(item.files[h], data);
					}
				}
			}, function (e) {
				
			});
		}
		/* jshint ignore:end */
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
			controller: function () {this.parent = $scope;}
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
	
}]);


angular.module('employeeApp')
.controller('ProjectViewCtrl', ['$scope', 'Project', 'Notification', 'Customer', '$location', '$mdDialog', '$mdToast', '$log', '$filter',
function ($scope, Project, Notification, Customer, $location, $mdDialog, $mdToast, $log, $filter) {
    
    //Controlling attributes
    $scope.showAddProject = false;
    $scope.query = {};
    //Query the server for projects continouosly
    $scope.projects = Project.query();
	$scope.customers = Customer.query();
	var fetching = false;
    
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
			
		$scope.project.$create(function () {
			$mdToast.hide();
			$location.path('/project/'+ $scope.project.id);
		}, function () {
			
		});
	};

	$scope.loadNext = function () {
		console.log('scroll end');
		if (!fetching) {
			Notification.display('Loading more projects...', false);
			fetching = true;
			Project.query({
				limit: 50,
				offset: $scope.projects.length
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.projects.indexOfById(resources[i].id) == -1) {
						$scope.projects.push(resources[i]);
					}
				}
				$mdToast.hide();
				fetching = false;
			}, function (e) {
				Notification.display('Unable to load more projects...', false);
				$log.error(e);
				fetching = false;
			});
		}
	};
	
	$scope.cancelAddProject = function  () {
		$mdDialog.hide();
	};
	
	
	$scope.$watch('query.$.$', function (q) {
		console.log(q);
		if (q) {
			Project.query({limit: q.length * 2, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.projects.indexOfById(resources[i].id) == -1) {
						$scope.projects.push(resources[i]);
					}
				}
				//index = 0;
				//changeSelection(index);

				console.log($filter('filter')($scope.projects, q));
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
	/*
	$scope.$watch('projects', function (newVal, oldVal) {
		
		// Callback to when the acknowledgement is finished updating
		function postUpdate (resp) {
			$mdToast.show($mdToast
						.simple()
						.position('top right')
						.hideDelay(2000)
						.content('Project: ' + resp.codename + " status updated to '" + resp.status.toLowerCase() + "'"));
		}
		
		if (newVal && oldVal) {
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i].id === oldVal[i].id) {
						if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
							$mdToast.show($mdToast
											.simple()
											.position('top right')
											.hideDelay(0)
											.content('Updating Project: ' + newVal[i].codename + ' status...'));
							newVal[i].$update(postUpdate);
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
		}
		
	}, true);
	*/
	function postUpdate (resp) {
		$mdToast.show($mdToast
					.simple()
					.position('bottom right')
					.hideDelay(2000)
					.content('Project: ' + resp.codename + " status updated to '" + resp.status.toLowerCase() + "'"));
	}
	
	$scope.update = function (project) {
		$mdToast.show($mdToast
				.simple()
				.position('bottom right')
				.hideDelay(0)
				.content('Updating Project: ' + project.codename + ' status...'));
		project.$update(postUpdate, function (e) {

			var message = e;
			$log.error(e);
			$mdToast.show($mdToast
				.simple()
				.position('bottom right')
				.hideDelay(2000)
				.content(message));
		});
	};

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
    
}]);


/**
 * @ngdoc function
 * @name frontendApp.controller:ScannerCtrl
 * @description
 * # ScannerCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('ScannerCtrl', ['$scope', 'Acknowledgement', '$filter', '$mdDialog', 'scanner', "$timeout", 'Supply', 'Notification', 'Employee', '$http', '$rootScope', 'Equipment', 'PurchaseOrder', 'KeyboardNavigation', 'FileUploader', '$log', 'Label',
function ($scope, Acknowledgement, $filter, $mdDialog, scanner, $timeout, Supply, Notification, Employee, $http, $rootScope, Equipment, PurchaseOrder, KeyboardNavigation, FileUploader, $log, Label) {
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
	$scope.acknowledgements = Acknowledgement.query({limit:10});
	$scope.acknowledgement = null;
	$scope.supplies = [];
	$scope.equipmentList = [];
	$scope.poList = PurchaseOrder.query();
	$scope.supplyTypes = Label.query({'type': 'supply type'});
	$scope.employees = Employee.query({limit:0, page_size:99999, status:'active'});
	$scope.employee = null;
	$scope.scanner.enable();
	$scope.scanner.disableStandard();
	$scope.tempUrl = "http://mineolalionsclub.org/wp-content/uploads/2014/02/employee_placeholder.png";
	
	keyboardNav.onenter = function (e) {
		//e.preventDefault();
	};

	//Disable the global scanner
	try {
		window.globalScanner.disable();
	} catch (e) {
		$log.error(e);
	}

	$scope.fractSize = function () {
		return $scope.supply ? $scope.supply.units == 'pc' ? 0 : 2 : 2;
	};


	/**
	 * ACKNOWLEDGEMENT SECTION
	 *
	 * Describes the projects, room and phases
	 */
	
	// Watch on supplierSearchText to get products from the server
	$scope.retrieveAcks = function (query) {
		console.log(query);
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
		console.log(query);
		var lowercaseQuery = angular.lowercase(query);
		var acks = [];
		
		/*
		for (var i = 0; i < scope.acknowledgements.length; i++) {
			if (angular.lowercase(scope.acknowledgements[i].id).indexOf(lowercaseQuery) !== -1) {
				acks.push(scope.acknowledgements[i]);
			}
		}
		*/

		var acks = $filter('filter')($scope.acknowledgements, query);
		return acks;
	};

	$scope.addAck = function (acknowledgement) {
		if (acknowledgement) {
			$scope.acknowledgement = acknowledgement;
		}
		
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
		console.log(supply);
		$scope.supplies.push(angular.copy(supply || {}));
		$scope.selectedSupply = null;
		$scope.supplySearchText = '';
	}

	$scope.quantityDescription = function (supply) {
		try{
			return supply.$$quantity ? 'จำนวนใหม่ ในสต๊อก/Updated Quantity' : 'จำนวน ในสต๊อก/Quantity';
		} catch (e) {
			return 'จำนวน ในสต๊อก/Quantity';
		}
	}

	$scope.newSupplyQuantity = function (supply) {
		try {
			return supply.quantity + ((supply.$$action == 'add' ? supply.$$quantity : (-1 * supply.$$quantity)) || 0);
		} catch (e) {
			return 0;
		}
	}

	$scope.supplyQuantityLabel = function (supply) {
		try {
			return supply.$$action == 'add' ? 'เพิ่มจำนวน/Add Quantity' : 'ลดจำนวน/Reduce Quantity';
		} catch (e) {
			return 'เพิ่มจำนวน/Add Quantity'
		}
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
		$scope.po.items.splice($index, 1);
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
			controller: ['$scope', '$mdDialog', 'equipmentList', function ($scope, $mdDialog, equipmentList) {
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
			}]
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
	$scope.scanner.register(/DRS-\d+/, function (code) {
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
	$scope.scanner.register(/\d+(\-\d+)*/, function (code) {
		try {
			Notification.display('Looking up supply...', false);
		} catch (e) {
		
		}
	
		Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
			if (response.length > 0){
				response[0].$$action = 'subtract';
				$scope.supplies.push(response[0]);
				Notification.display('Added ' + response.description + ' to checkout.', 2000);
			} else {
				Notification.display('Unable to find supply.', false);
			}
			
			
		}, function (e) {
			var msg = JSON.stringify(e);
			$log.error(msg);
			Notification.display('Unable to find supply with id: ' + code, false);			
		});
	});

	/*
	 * Register the Purchase Order regex
	 */
	$scope.scanner.register(/PO-\d+/, function (code) {
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
	$scope.scanner.register(/DRE-\d+/, function (code) {
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
	$scope.scanner.register(/DREM-\d+$/, function (code) {
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
					//Assign employee
					supplies[i].employee = angular.copy($scope.employee);

					//Assign acknowledgement
					if ($scope.acknowledgement) {
						supplies[i].acknowledgement = angular.copy($scope.acknowledgement);
					}
				
					//Add or subtract quantity based on user selected action
					if (supplies[i].$$action == 'subtract') {
						supplies[i].quantity -= supplies[i].$$quantity;
					} else if (supplies[i].$$action == 'add') {
						supplies[i].quantity += supplies[i].$$quantity;
					}
				}

				/**
				 * Create a new supply
				 */
				
				for (var g = 0; g < supplies.length; g++) {
					try{
						if (!supplies[g].hasOwnProperty('id')) {
							var qty = supplies[g].$$quantity;
							var supply = angular.copy(supplies[g]);

							//Remove supply from the array
							supplies.splice(g);
							// Create new supply resource
							var supply = new Supply(supply);
							// Set new quantity
							supply.quantity = qty;

							// Remove empty employee
							delete supply.employee;
							delete supply.acknowledgement;

							supply.$create(function () {
								var msg = "Created new supply: " + supply.description;
								Notification.display(msg);
	
								$scope.supplies = [];
	
								console.log($scope.supplies);
	
								$scope.postCheckout();
							}, function (e) {
								$scope.checkoutError(e);
							});
						}
					} catch (e) {
						$log.warn(e);
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
							
							if (index > -1) {
								supplyList[index] = angular.copy(resp[h]);
							} else {
								supplyList.push(angular.copy(resp[h]));
							}
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

			// Reset acknowledgement
			$scope.acknowledgement = undefined;

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
	
		try {
			$scope.scanner.disable();
			window.globalScanner.enable();
			keyboardNav.disable();
		} catch (e) {
			$log.error(e);
		}
	});

}]);


angular.module('employeeApp')
.controller('SupplyBuyingGuideCtrl', ['$scope', 'Supply', '$http', function ($scope, Supply, $http) {
	
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
		'log__action':'SUBTRACT',
		'log__timestamp__gt': d.toISOString()
	});
	
}]);


angular.module('employeeApp')
.controller('SupplyDetailsCtrl', ['$scope', '$routeParams', 'Notification', 'Supply', '$timeout', '$location', 'scanner', '$window', '$http', '$log',
function ($scope, $routeParams, Notification, Supply, $timeout, $location, scanner, $window, $http, $log) {
	
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


angular.module('employeeApp')
.controller('SupplyFabricAddCtrl', ['$scope', 'Supplier', 'Fabric', '$location', 'Notification', 'FileUploader', '$log',
function ($scope, Supplier, Fabric, $location, Notification, FileUploader, $log) {
    $scope.suppliers = Supplier.query({limit:0, offset:1, page_size:99999});
    $scope.fabric = new Fabric();
    
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
		/*
		$scope.po.supplier = $scope.po.supplier || {name: '', addresses:[]};
		
		if (!$scope.po.supplier.id) {
			$scope.po.supplier.name = supplierName || '';
			//$scope.supplies = [];
		} else {
			if ($scope.po.supplier.name.indexOf(supplierName) == -1) {
				$scope.po.supplier = {name: supplierName, addresses: []};
			}
		}*/
	};
	
	/*
	 * Add a supplier to the purchase order
	 */
	$scope.addSupplier = function (supplier) {
		
		$scope.fabric.supplier = supplier;
		
	};
	
    //Add Fabric
    $scope.save = function () {
        //Display saving message
        Notification.display('Saving Fabric...', false);
        //Checks the form is valid
        if ($scope.form.$valid) {
            //save to database
			$scope.$saving = true;
			
            $scope.fabric.$create(function () {
                Notification.display('Fabric Saved');
                $location.path('supply/fabric');
            }, function (e) {
				Notifiation.display('There was an error in creating this fabric', 0);
            	$log.error(JSON.stringify(e));
				$scope.$saving = false;
            });
        }
       
    };
    
    //Upload Image
    $scope.upload = function () {
        
        //Notify of uploading image
        Notification.display('Uploading Image...', false);
		
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/supply/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.fabric.image = dataObj.data;
				
		}, function (e) {
			$log.error(JSON.stringify(e));
			Notification.display("There was an error in uploading the file");
		});
    };
}]);


angular.module('employeeApp')
.controller('SupplyFabricDetailsCtrl', ['$scope', 'Fabric', '$routeParams', '$location', 'Notification', 'SupplyLog', '$mdToast', 'FileUploader', '$log',
function ($scope, Fabric, $routeParams, $location, Notification, SupplyLog, $mdToast, FileUploader, $log) {
    $scope.fabric = Fabric.get({'id': $routeParams.id}, function (e) {
    	$scope.fabric.quantity = Number($scope.fabric.quantity || 0);
		$scope.fabric.width = Number($scope.fabric.width || 0);
    });
    $scope.logs = SupplyLog.query({supply_id: $routeParams.id});
    
    //Create fabric actions
    var DEFAULT_ACTIONS = ['reserve', 'add', 'subtract', 'reset'];
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
	
	$scope.quantityNeeded = function () {
		var qty = Number($scope.fabric.quantity) - Number($scope.fabric.reserved);
		var value = qty < 0 ? Math.abs(qty) : "Sufficient fabric in stock."; 
		return value;
	};
    
    $scope.add = function () {
		$scope.fabric.$add({quantity: $scope.quantity}, function () {

		});
		$scope.showAdd = false;
		$scope.quantity = null;
	};
    
    $scope.subtract = function () {
		$scope.fabric.$subtract({quantity: $scope.quantity}, function () {

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
		var promise = FileUploader.upload($scope.images[0], "/api/v1/supply/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.fabric.image = dataObj.data;
				$scope.fabric.$update(function () {
					Notification.display('Fabric updated');
				});
				
		}, function (e) {
			Notification.display("There was an error in uploading the file");
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
		
		if (log.action == "RESERVE" || log.action == "CUT" || log.action == "CANCEL"){
			
			
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Updating ' + $scope.fabric.description + ' for Ack #'+ log.acknowledgement_id + '.')
				.hideDelay(0));
			
			$scope.logs[$index].$update(function (response) {
				$log.debug(JSON.stringify(response));
				
				if (response.supply) {
					$scope.fabric.quantity = response.supply.quantity;
				}
				
				$mdToast.hide();
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content('Updated.')
					.hideDelay(2000));
			}, function (e) {
				$log.error(JSON.stringify(e));
				
				$mdToast.hide();
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content(e)
					.hideDelay(0));
			});
			
			Fabric.get({'id': $routeParams.id}, function (resp) {
				$scope.fabric.reserved = resp.reserved;
			});
		}
		
		
	};
}]);


angular.module('employeeApp')
.controller('SupplyFabricViewCtrl', ['$scope', 'Fabric', 'Notification', '$log', function ($scope, Fabric, Notification, $log) {

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
			Fabric.query({q: q, limit: 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
						$scope.fabrics.push(resources[i]);
					}
				}
			});
		}
	});
	
	
	/*
	 * Watch for changes in the status of the fabric
	 */
	$scope.$watch('fabrics', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			var notification = Notification.display('Fabric ' + resp.description +  " status updated to '" + resp.status.toLowerCase() + "'", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							console.log(newVal[i], oldVal[i]);
							if (newVal[i].status != oldVal[i].status) {
							
								var notification = Notification.display('Updating ' + newVal[i].description + ' status...', false);
							
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
				fetching = false;
				Noification.display("Unable to load more fabrics.", false);
				$log.error(JSON.stringify(e));
			});
		}
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
	
	/**
	 * Print sticker for a fabric
	 * @private
	 * @param {Object} fabric fabric which to print the corresponding label
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.printFabricSticker = function (fabric) {
		var container = $(".print").empty();
		var iframe = document.createElement('iframe');
		iframe.onload = setPrint;
		iframe.src = "api/v1/supply/" + fabric.id + "/sticker/";
		container.append(iframe);
	};
	
}]);


angular.module('employeeApp')
.controller('SupplyFoamAddCtrl', ['$scope', 'Foam', 'Supplier', '$location', 'Notificaiton',
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
        
        jQuery.ajax("supply/image", {
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
}]);


angular.module('employeeApp')
.controller('SupplyFoamDetailsCtrl', ['$scope', 'Foam', '$routeParams', '$location', 'Notification',
function ($scope, Foam, $routeParams, $location, Notification) {
    //Poller.poll($scope, function(){
    $scope.foam = Foam.get({'id': $routeParams.id});
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
        
        jQuery.ajax("supply/" + $scope.foam.id + "/image", {	
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
}]);


angular.module('employeeApp')
.controller('SupplyFoamViewCtrl', ['$scope', 'Foam', function ($scope, Foam) {
    $scope.foamList = Foam.query();
    
}]);


angular.module('employeeApp')
.controller('SupplyLogCtrl', ['$scope', '$http', 'SupplyLog', 
function ($scope, $http, SupplyLog) {
	$scope.logs = SupplyLog.query();
}]);


angular.module('employeeApp')
.controller('SupplyLumberViewCtrl', ['$scope', function ($scope) {

}]);


angular.module('employeeApp')
.controller('SupplyPropAddCtrl', ['$scope', 'Supplier', 'Supply', 'Notification', '$location', '$q',
function ($scope, Supplier, Supply, Notification, $location, $q) {
      
	var deferred,
		promise,
		uploading = false;
      
    $scope.supplierList = Supplier.query();
    $scope.prop = new Supply();
    $scope.prop.type = "prop";
    //Tooltips
    $scope.supplierText = "Choose a Supplier for this Fabric";
    $scope.referenceText = "Enter the Supplier's Reference Number";
    $scope.widthText = "Enter the Width in millimeters";
    $scope.depthText = "Enter the Depth in millimeters";
    $scope.heightText = "Enter the Height in millimeters";
    $scope.cost = "Enter the Cost in the format of 100 or 123.45";
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
        
        jQuery.ajax("supply/image", {
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
}]);


angular.module('employeeApp')
.controller('SupplyPropDetailsCtrl', ['$scope', function ($scope) {

}]);


angular.module('employeeApp')
.controller('SupplyPropViewCtrl', ['$scope', 'Supply', '$filter', '$q', 'Notification', '$location',
function ($scope, Supply, $filter, $q, Notification, $location) {
    $scope.supplyList = Supply.query({type: 'prop'});
    
    //Change page to add page
    $scope.add = function () {
        $scope.safeApply(function () {
            $location.path('/supply/prop/add');
        });
	};
      
    $scope.upload = function (index, image) {
     
        Notification.display('Uploading Image...', false);
        
        var resource = $filter('orderBy')($filter('filter')($scope.supplyList, $scope.query), 'supplier.name')[index],
            deferred,
            promise,
            fd = new FormData();
            
        
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
        jQuery.ajax("supply/image", {
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
}]);


angular.module('employeeApp')
.controller('SupplyShoppingListCtrl', ['$scope', '$http', function ($scope, $http) {
	var promise = $http.get('/api/v1/supply/shopping_list');
	promise.then(function (response) {
		$scope.supplies = response.data;
	});
}]);


angular.module('employeeApp')
.controller('SupplyViewCtrl', ['$scope', 'Supply', 'Notification', '$filter', 'KeyboardNavigation', '$rootScope', '$location', '$http', 'FileUploader', '$timeout', '$mdDialog', '$log', 
function ($scope, Supply, Notification, $filter, KeyboardNavigation, $rootScope, $location, $http, FileUploader, $timeout, $mdDialog, $log) {
	/*
	* Vars and flags
	*/
	var fetching = true,
		index = 0,
		currentSelection,
		activeQueryLoop = false,
		masterList = [],
		q,
		keyboardNav = new KeyboardNavigation();
	

	//system message
	var notification = Notification.display('Loading supplies...', false);

	$http.get('/api/v1/supply/type/').success(function (response) {
		$scope.types = response;
		$scope.types.splice($scope.types.indexOf(null), 1);
	});
	
	$scope.scannerMode = false;
	$scope.supplies = Supply.query({'country': $scope.country}, function (resources) {
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
			templateUrl: "views/templates/supply-scanner.html",
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
		container.animate({
			scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height()
		});
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
			Notification.display("Image uploaded");
			
			//Apply the image data and url to the supply, 
			//and then save the supply to the serve
			$scope.safeApply(function () {
				supply.image = data.hasOwnProperty('data') ? data.data : data;
				supply.save();
			});
	
		//Process a failed upload
		}, function (e) {
			$log.error(e);
			Notification.display("Unable to upload image", false);
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
			Supply.query({limit: q.length, q: q, 'country': $scope.country}, function (resources) {
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
			var regex = new RegExp('\\b(' + $scope.query.split(' ') +')', 'i');
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
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
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
	
}]);



'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('acknowledgement', [function () {
	return {
		templateUrl: 'views/templates/acknowledgement.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			scope.status = false;
			var currencySigns = {
				'THB':'฿',
				'EUR':'€',
				'USD':'$',
				'RMB':'¥',
				'SGD':'S$'
			};
			
			scope.getCurrencySign = function (currency) {
				return currencySigns[currency];
			}

			if (attrs.hasOwnProperty('status')) {
				scope.status = true;
			};
			
		}
	};
}]);

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('acknowledgement', [function () {
	return {
		templateURL: 'views/templates/acknowledgement.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			var currencySigns = {
				'THB':'฿',
				'EUR':'€',
				'USD':'$',
				'RMB':'¥',
				'SGD':'S$'
			};
			
			scope.getCurrencySign = function (currency) {
				return currencySigns[currency];
			}

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

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:dealEventMessage
 * @description
 * # dealEventMessage
 */
angular.module('employeeApp')
.directive('dealEventMessage', function () {
	var stages = [
		'Opportunity',
		'Qualified',
		'Meeting',
		'Proposal', 
		'Closed Won',
		'Closed Lost',
		'emailed',
		'called',
		'had a meeting with'
	];
	
	function formatEventDescription (description) {
		for (var i = 0; i < stages.length; i++) {
			if (description.indexOf(stages[i])) {
				var replacement = "<b>" + stages[i] + "</b>";
				description = description.replace(stages[i], replacement);
			}
		}
		
		return description;
	}
	
	return {
		restrict: 'E',
		scope: {
			'description': '='
		},
		link: function postLink(scope, element, attrs) {
			var description = scope.description;
			var newDescription = formatEventDescription(description);
			element.html(newDescription);
		}
	};
});

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('deal', [function () {
	return {
		templateUrl: 'views/templates/deal.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			var currencySigns = {
				'THB':'฿',
				'EUR':'€',
				'USD':'$',
				'RMB':'¥',
				'SGD':'S$'
			};
			
			scope.getCurrencySign = function (currency) {
				return currencySigns[currency];
			}
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

            function touchHandler(event) {
                var touch = event.changedTouches[0];
            
                var simulatedEvent = document.createEvent("MouseEvent");
                    simulatedEvent.initMouseEvent({
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup"
                }[event.type], true, true, window, 1,
                    touch.screenX, touch.screenY,
                    touch.clientX, touch.clientY, false,
                    false, false, false, 0, null);
            
                touch.target.dispatchEvent(simulatedEvent);
                event.preventDefault();
            }
            
            function init() {
                document.addEventListener("touchstart", touchHandler, true);
                document.addEventListener("touchmove", touchHandler, true);
                document.addEventListener("touchend", touchHandler, true);
                document.addEventListener("touchcancel", touchHandler, true);
            }
            
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
			'onDrop': '&',
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
.directive('ecFocus', [function () {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, element, attrs) {
			element.bind('focus', function () {
				scope.$eval(attrs.ecFocus);
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

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:fabric
 * @description
 * # fabric
 */
angular.module('employeeApp')
.directive('fabric', ['Notification', function (Notification) {
	return {
	  	templateUrl: 'views/templates/fabric.html',
		replace: true,
	  	restrict: 'E',
	  	link: function postLink(scope, element, attrs) {
			var timeoutVar;

			scope.switchActive = function () {
				element.toggleClass('active');
			}

			scope.addContent = function (newContent) {
				if (newContent) {
					if (newContent.content && newContent.percentage) {
						scope.fabric.content += ' '
						scope.fabric.content += newContent.content + ':' + newContent.percentage;

						scope.update();
					}
				}

			};

			scope.getContent = function () {
				var contents = scope.fabric.content.split(' ');
				for (var i = 0; i < contents.length; i++) {
					//contents[i] = contents[i].split(':');
				}

				return contents;
			};

			scope.update = function () {
				clearTimeout(timeoutVar);
				timeoutVar = setTimeout(function () {
					this.fabric.$update(function () {
						Notification.display('Fabric updated.', 2000);
					}, function () {

					});
				}.bind(scope), 3000);

			}

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

			scope.printFabricSticker = function (supply) {
				Notification.display("Printing sticker...", 3000);
				var container = $(".print").empty();
				var iframe = document.createElement('iframe');
				iframe.onload = setPrint;
				iframe.src = "api/v1/fabric/" + supply.id + "/sticker/";
				container.append(iframe);
			};
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
			onDrop: '&fileDrop',
			activeClass: '@fileDropClass'
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
			
			var elementCheck = null;
           
		   	element.bind('dragover', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
		   	});
			
		   	element.bind('drag', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
		   	});
            
			//Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				console.log('enter' + scope.activeClass)
                element.addClass(scope.activeClass);
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
                evt.stopPropagation();
				
				console.log('leave ' + scope.activeClass, evt.target);
				if (element.hasClass(scope.activeClass)) {
					console.log('classoff ' + scope.activeClass, evt.target);
					element.removeClass(scope.activeClass);
				}
					
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
                
				element.removeClass(scope.activeClass);
                
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
			onLoad: '&',
			image: '=?',
			cropper: '=?'
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

            var setImage = function (image) {
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

                fileReader.readAsDataURL(image);
            };

            //Set Canvas to parent width and height
            canvas.width = canvasContainer.outerWidth();
            canvas.height = canvasContainer.outerHeight();
            
            
			
			if (scope.image) {
				setImage(scope.image);
			}
            
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
                },
				size: {
					get: function () {
						return scene ? scope.cropper.getImage().size : 0;	
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
            
            scope.cropper.setImage = function (image) {
                setImage(image);
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

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:numberFormat
 * @description
 * # numberFormat
 */
angular.module('employeeApp.directives')
.directive('numberFormatter', ['$filter', function ($filter) {
	var numberFilter = $filter('number');
    return {
      	restrict: 'A',
		require: 'ngModel',
      	link: function postLink(scope, element, attrs, ngModel) {
        	ngModel.$parsers.push(function (value) {
        		var value = Number(value.replace(',', ''));
				return value;
        	});
			
			element.on('blur', function () {
				setTimeout(function ( ) {
					ngModel.$setViewValue(numberFilter(ngModel.$modelValue));
					ngModel.$render();
				}, 250);
				
				
			});
			
			ngModel.$formatters.push(function (value) {
				return $filter('number')(value);
			});
     	 }
    };
}]);


angular.module('employeeApp')
.directive('onScrollEnd', ['$log', function ($log) {
	
	var scrollFactor = 0.5;
	
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var lastScrollTop = 0;
			console.log(attrs);
			console.log(element);
			element.bind('scroll', function (e) {
				
				var scrollTop = element.scrollTop();
				console.log(element[0].scrollHeight);
				if (scrollTop > lastScrollTop) {
					lastScrollTop = scrollTop;
					console.log(scrollTop, element[0].offsetHeight * scrollFactor);
					if (scrollTop > element[0].offsetHeight * scrollFactor) {
						console.log(attrs.onScrollEnd);
						try {
							scope.$eval(attrs.onScrollEnd);
							
						} catch (err) {
							console.log(err);
							console.error("Missing a function for 'on-scroll-end'");
						}
					}
				} else if (scrollTop < lastScrollTop) {
					lastScrollTop = scrollTop;
				}
				
			});
		}
	};
}]);


angular.module('employeeApp.directives')
.directive('phone', ['$http', '$rootScope', '$log', 'KeyboardNavigation', 'Employee', 'Customer', 'Supplier', 'Acknowledgement',
function ($http, $rootScope, $log, KeyboardNavigation, Employee, Customer, Supplier, Acknowledgement) {
	
	return {
		templateUrl: 'views/templates/phone.html',
		replace: true,
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

			k = KeyboardNavigation();
			k.disable();
			
			k.default = function (num) {
				scope.addNumber(num);
				$rootScope.safeApply();
			};
			k.onbackspace = function () {
				scope.backspace();
			};

			k.onenter = function (e) {
				console.log(e);
				scope.call();
			};
				
				/**
			 * VoIP: Twilio
			 */
			var voip = {
				'status': '',
				'conn': {}
			};
			
			scope.selectedContact = null;
			scope.contactSearchText = '';
			scope.dialpad = false;
			scope.dialedNumber = "";

			$http.get('/api/v1/ivr/token/').then(function (resp) {
				Twilio.Device.setup(resp.data.token, {"debug": true});
				Twilio.Device.ready(function (device) {
					$log.debug(device);
				});


				Twilio.Device.incoming(function(connection) {
					voip.status = 'incoming';
					voip.conn = connection;
					console.log(connection);
					$rootScope.safeApply();
				});

				Twilio.Device.connect(function (conn) {
					voip.status = conn._direction == 'OUTGOING' ? 'active' : 'active';
					voip.conn = conn;
					console.log(conn);
					$rootScope.safeApply();
				});

				Twilio.Device.disconnect(function (conn) {
					scope.hangup();
				});

				scope.activateDialpad = function () {
					k.enable();
					voip.status = 'dialpad'
				};

				/*
				* CUSTOMER SECTION
				*
				* This section deals with the customer searching and what happens when a customer is selected
				*/
				scope.contact = {};
				
				scope.contacts = {};

				var updateList = function (query, list) {
					if (list) {
						for (var i in scope.contacts) {
							if (angular.lowercase(scope.contacts[i].name).indexOf(query) !== -1) {
								if (list.indexOfById(scope.contacts[i].id) === -1) {
									list.push(scope.contacts[i]);
								}
							}
						}

						$rootScope.safeApply();
					}
					
				}

				scope.retrieveContacts = function (query, list) {
					if (query) {
						if (query.length > 2){
							Customer.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'customer';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
								
							});
							Supplier.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'supplier';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
							});
							Employee.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'employee';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
							});
						}
					}
					
					
				};

				scope.searchContacts = function (query) {
					var lowercaseQuery = angular.lowercase(query);
					var customers = [];

					if (query.length > 2){
						scope.retrieveContacts(lowercaseQuery, customers);
					}
					

					for (var i in scope.contacts) {
						if (angular.lowercase(scope.contacts[i].name).indexOf(lowercaseQuery) !== -1) {
							customers.push(scope.contacts[i]);
						}
					}
					
					return customers;
				};

				scope.selectContact = function(selectedContact) {
					scope.contact = angular.copy(selectedContact);
					if (selectedContact.telephone) {
						scope.dialedNumber = selectedContact.telephone;
					}
					

					if (scope.contact.type == 'customer') {
						Acknowledgement.query({q:scope.contact.name}, function (resp) {
							scope.contact.acknowledgements = resp;
						});
					}
				};

				scope.selectContact(scope.contact);
				scope.addNumber = function (num) {
					if(num) {
						scope.dialedNumber += num;
					}
				};

				scope.backspace = function () {
					scope.dialedNumber = scope.dialedNumber.slice(0, -1);
					$rootScope.safeApply();
				};

				scope.call = function () {
					voip.status = 'active';
					if (scope.dialedNumber.charAt(0) === '0') {
						scope.dialedNumber = scope.dialedNumber.replace('0', "+66");
					}
					var params = {"phoneNumber": scope.dialedNumber};
					k.disable();
					Twilio.Device.connect(params);
					$rootScope.safeApply();
				}

				scope.voipStatus = function () {
					return voip.status;
				};

				scope.voipFrom = function () {
					try{
						return status === "calling" ? scope.dialedNumber : voip.conn ? voip.conn.parameters.From : "";
					} catch (e) {

					}
				};

				scope.answer = function () {
					voip.conn.accept();
				};

				scope.hangup = function () {
					try{
						voip.conn.reject();
					} catch (e) {

					}
					Twilio.Device.disconnectAll();
					voip.status = '';
					voip.conn = null;
					scope.contact = null;
					scope.selectedContact = null;
					scope.contactSearchText = '';
					scope.dialedNumber = '';
					k.disable();
					$rootScope.safeApply();

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

'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('purchaseOrder', ['$filter', 'Acknowledgement', function ($filter, Acknowledgement) {
	return {
		templateUrl: 'views/templates/purchase-order.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

			var currencySigns = {
				'THB':'฿',
				'EUR':'€',
				'USD':'$',
				'RMB':'¥',
				'SGD':'S$'
			};
			
			scope.getCurrencySign = function (currency) {
				return currencySigns[currency];
			}

			

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
			
			/*
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
			*/
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
.filter('groupBy', [function () {
    //function to compare


    var dict = {};
	return function (array, key, value) {

        for (var i in array) {
            if (array[i][key]) {
                dict[array[i][key]] = dict[array[i][key]] ? dict[array[i][key]] : [];
                dict[array[i][key]].push(array[i]);
            }
            
        }
        var list = [];

        for (var k in dict) {
            console.log(dict[k]);
            list.push(dict[k]);
        }
        console.log(list);
        return list;
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


angular.module('employeeApp.services')
.factory('dateParser', ['$q', function($q) {
	var attrs = [
		'delivery_date',
		'time_created',
		'last_login',
		'last_contacted',
		'last_modified',
		'occurred_at',
		'employment_date',
		'receive_date',
		'order_date',
		'start_time',
		'end_time',
		'overtime_request',
		'date'
	]
	
	function parseObj(data) {
		for (var i in data) {

			if (typeof(data[i]) === 'object') {
				parseObj(data[i]);
			} else if (typeof(data[i]) === 'string') {
				if (attrs.indexOf(i) > -1) {
					
					var d = new Date(data[i]);
					if (typeof(d) != 'string') {
						data[i] = d;						
					} else {
						console.log(d);
						console.log(data[i]);
					}
				}
			}
		}
	}
	
	
	return {
		'response': function (response) {
			
			var data = response.data;
			
			if(angular.isArray(data)) {
				for(var i=0; i < data.length; i++) {
					parseObj(data[i]);
				}
			} else if(angular.isObject(data)) {
				parseObj(data);
			}
			response.data = data;
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			return $q.reject(rejection);
		}
	};
	
}]).config(['$httpProvider', function($httpProvider){
	$httpProvider.interceptors.push('dateParser');
}]);


angular.module('employeeApp.services')
.factory('requestError', ['$q', '$window', function ($q, $window) {
	return {
		'response': function (response) {
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			if (rejection.status > 400) {
				var msg = "AJAX failed. status: " + rejection.status + ". response: " + rejection.statusText;
				var promise = $.ajax({
					type: 'POST',
					url: '/api/v1/client/log/',
					data: {'type': 'error', 'message': msg},
					processData: true
				});
			}

			if (rejection.status === 403) {
				var hash = $window.location.hash;
				var url = '/login';
				if (hash !== '' && hash !== '#/' && hash) {
					url += '?next=';
					hash = hash.split('#')[1];
					url += hash;

				}
				
				
				//$window.location.href = url;
			}

			return $q.reject(rejection);
		}
	};

}]).config(['$httpProvider', function($httpProvider){
	$httpProvider.interceptors.push('requestError');
}]);


angular.module('employeeApp.services')
.factory('number', ['$q', '$log', function ($q, $log) {
	return {
		'response': function (response) {
			
			var re = /^(?!0+[1-9])\d+(\.\d+)?$/;
			var count = 0;
			
			function refactor(obj) {
				count++;
				
				for (var key in obj) {
					if (typeof(obj[key]) == 'object') {
						refactor(obj[key]);
					} else {
						if (re.test(obj[key])) {
							obj[key] = Number(obj[key]);
						} 
					}					
				}
				
				return obj;
			}
			
			try{
				if (typeof(response) == 'object') {
					response = refactor(response);
				}
			} catch (e) {
				$log.warn(count);
			}
			
			
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			return $q.reject(rejection);
		}
	};
	
}]).config(['$httpProvider', function($httpProvider){
	$httpProvider.interceptors.push('number');
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
			onenter,
			backspace,
			defaultFn;
			
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
				case 8:
					if (backspace) {backspace();}
					break;
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
				case 48:
					if (defaultFn) {defaultFn.call(this, 0)};
					break;
				case 49:
					if (defaultFn) {defaultFn.call(this, 1)};
					break;
				case 50:
					if (defaultFn) {defaultFn.call(this, 2)};
					break;
				case 51:
					if (defaultFn) {defaultFn.call(this, 3)};
					break;
				case 52:
					if (defaultFn) {defaultFn.call(this, 4)};
					break;
				case 53:
					if (defaultFn) {defaultFn.call(this, 5)};
					break;
				case 54:
					if (defaultFn) {defaultFn.call(this, 6)};
					break;
				case 55:
					if (defaultFn) {defaultFn.call(this, 7)};
					break;
				case 56:
					if (defaultFn) {defaultFn.call(this, 8)};
					break;
				case 57:
					if (defaultFn) {defaultFn.call(this, 9)};
					break;
				default: 
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
			},
			onbackspace: {
				set: function (fn) {
					backspace = fn;
				}
			},
			default: {
				set: function (fn) {
					defaultFn = fn;
				}
			}
		});
		
		return new KeyboardNav();
	}
	
	return KeyboardNavigationFactory;
}]);


angular.module('employeeApp.services')
.factory('mapMarker', [function() {
    function MarkerFactory(configs){
        function Marker(configs){
            if (angular.isObject(configs)) {
                
                if (configs.map instanceof google.maps.Map) {
                    this._map = configs.map;
                } else {
                    throw new TypeError("Is not an instance of google.maps.Map");
                }
                
                if (!configs.position instanceof google.maps.LatLng) {
                    throw new TypeError("Is not an instance of google.maps.LatLng");
                }
                
                this.prototype = new google.maps.Marker({ 
                    position: configs.position,
                    map: this._map,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
                
                google.maps.event.addListener(this, 'dragend', function(e){
                    (this.onchange || angular.noop)({
						lat: this.lat, 
						lng: this.lng
                    });
                }.bind(this));
            }
        }
        
        Object.defineProperties(Marker.prototype, {
            lat:{
                get:function(){return this.getPosition().lat() || null;}
            },
            lng:{
                get:function(){return this.getPosition().lng() || null;}
            }
        });
        
        Marker.prototype.setPosition = function(latLng){
            if(latLng instanceof google.maps.LatLng){
                this.setPosition(latLng);
            }
        };
        
        Marker.prototype.hide = function(){
            this.setMap(null);
        };
        
        Marker.prototype.show = function(){
            this.setMap(this._map);
        };
        
        Marker.prototype.focus = function () {
			this.setCenter(this._marker.getPosition());
		};
        
        return new Marker(configs);
    }
    
    return MarkerFactory;
}]);


angular.module('employeeApp.services')
.factory('Account', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/account/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('AcknowledgementItem', ['$resource', function($resource) {
	return $resource('/api/v1/acknowledgement-item/:id/', {id:'@id'}, {
		update: {method: 'PUT'},
		create: {method: 'POST'}
	});   
}]);


angular.module('employeeApp.services')
.factory('Acknowledgement', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/acknowledgement/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('Attendance', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/attendance/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Configuration', ['$resource', function($resource) {
	return $resource('/api/v1/configuration/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Contact', ['eaResource', function(eaResource) {
    return eaResource('contact/:id/', {id:'@id'});   
}]);


angular.module('employeeApp.services')
.factory('CurrentUser', ['$http', function($http) {
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
			for (var i=0; i<this._onready.length; i++) {
				this._onready[i](response.data);
			}
		}.bind(this));
		
    }
    
    //checks if user has a permission
    User.prototype.hasPermission = function(permStr){
        //If the permissions are not yet
        //loaded then false is returnd
        return this.modules ? this.permissions.indexOf(permStr) !== -1 ? true :false : false;
    };
    
    //Checks if user has a module
    User.prototype.hasModule = function(moduleStr){
        //If the permissions are not yet
        //loaded then false is returnd
        return this.modules ? this.modules.indexOf(moduleStr) !== -1 ? true :false : false;
    };
    
    Object.defineProperties(User.prototype, {
		onready: {
			set: function (fn) {
				if (typeof(fn) == 'function') {
					this._onready.push(fn);
				}
			}
		}
	});
    //return the user
    return User;
}]);


angular.module('employeeApp.services')
.factory('Customer', ['$resource', function($resource) {
	return $resource('/api/v1/customer/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Deal', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/deal/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('Delivery', ['eaResource', function(eaResource) {
    return eaResource('delivery/:id', {id:'@id'});   
}]);


angular.module('employeeApp.services')
.factory('Employee', ['$resource', '$http', function($resource) {
	return $resource('/api/v1/employee/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Equipment', ['$resource', '$http', function($resource) {
	return $resource('/api/v1/equipment/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Estimate', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/estimate/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Fabric', ['$resource', function($resource) {
	return $resource('/api/v1/fabric/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		},
		add: {
			method: 'POST',
			params: {action: 'add'},
		},
		subtract: {
			method: 'POST',
			params: {action: 'subtract'},
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Foam', ['eaResource', function(eaResource) {
    return eaResource('foam/:id', {id:'@id'});   
}]);


angular.module('employeeApp.services')
.factory('Group', ['$resource', function($resource) {
	return $resource('/api/v1/group/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
}]);


angular.module('employeeApp.services')
.factory('Label', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/label/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Model', ['$resource', function($resource) {
	return $resource('/api/v1/model/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);



/**
 * @ngdoc service
 * @name frontendApp.models/payroll
 * @description
 * # models/payroll
 * Service in the frontendApp.
 */
angular.module('employeeApp.services')
.factory('Payroll', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/payroll/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Permission', ['$resource', function($resource) {
    return $resource('/api/v1/permission/:id', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
    });     
}]);


/**
 * @ngdoc service
 * @name frontendApp.models/phase
 * @description
 * # models/phase
 * Factory in the frontendApp.
 */
angular.module('employeeApp')
.factory('Phase', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/phase/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


/**
 * @ngdoc service
 * @name frontendApp.models/productSupply
 * @description
 * # models/productSupply
 * Service in the frontendApp.
 */
angular.module('employeeApp')
.factory('ProductSupply', ['$resource', function($resource) {
	return $resource('/api/v1/product/supply/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
	});   
}]);

/**
 * @ngdoc service
 * @name frontendApp.models/projectItemPart
 * @description
 * # models/projectItemPart
 * Factory in the frontendApp.
 */
angular.module('employeeApp')
.factory('ProjectItemPart', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/project-part/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('ProjectItem', ['eaResource', function(eaResource) {
    return eaResource('project/item/:id', {id:'@id'});   
}]);


angular.module('employeeApp.services')
.factory('Project', ['$resource', function($resource) {
    return $resource('/api/v1/project/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('PurchaseOrder', ['$resource', function($resource) {
	return $resource('/api/v1/purchase-order/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Room', ['$resource', function($resource) {
	return $resource('/api/v1/room/:id/', {id:'@id'}, {
			update: {
				method: 'PUT'
			},
			create: {
				method: 'POST'
			}
		});     
}]);


/**
 * @ngdoc service
 * @name frontendApp.RoomItem
 * @description
 * # RoomItem
 * Factory in the frontendApp.
 */
angular.module('employeeApp.services')
.factory('RoomItem', ['$resource', '$http', function($resource, $http) {
	return $resource('/api/v1/room-item/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('Shift', ['$resource', '$http', function($resource) {
	return $resource('/api/v1/shift/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);

angular.module('employeeApp.services')
.factory('Shipping', ['$resource', function($resource) {
	return $resource('/api/v1/shipping/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp.services')
.factory('SupplierContact', ['$resource', function(eaResource) {
	return eaResource('supplier_contact/:id', {id:'@id'});
}]);


angular.module('employeeApp.services')
.factory('Supplier', ['$resource',function($resource) {
	return $resource('/api/v1/supplier/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
		},
		create: {
			method: 'POST'
		}
	});   
}]);


angular.module('employeeApp')
.factory('Supply', ['$resource', function($resource) {
	return $resource('/api/v1/supply/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
		add: {
			method: 'POST',
			params: {action: 'add'}, 
		},
		subtract: {
			method: 'POST',
			params: {action: 'subtract'},
		}
	});   
}]);


angular.module('employeeApp')
.factory('SupplyLog', ['$resource', function($resource) {
	return $resource('/api/v1/log/:id/', {id:'@id'}, {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
	});   
}]);

angular.module('employeeApp.services')
.factory('Table', ['$resource', function($resource) {
    return $resource('api/v1/table/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
    });   
}]);



angular.module('employeeApp.services')
.factory('Transaction', ['eaResource', function(eaResource) {
	return eaResource('transaction/:id', {id:'@id'});   
}]);


angular.module('employeeApp.services')
.factory('Upholstery', ['$resource',function ($resource) {
    return $resource('/api/v1/upholstery/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
}]);


angular.module('employeeApp.services')
.factory('User', ['$resource', function($resource) {
	return $resource('/api/v1/user/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
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
		
		autoHide = autoHide === undefined ? 2000 : autoHide;
		
		var promise = $mdToast.show($mdToast
							.simple()
							.action('CLOSE')
							.position('bottom right')
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
		this._display = spawnToast;
		
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
		codeRe = /[A-Z]\-\d+$/,
		stream = '';
		
		
	var check = function (evt) {
		this._check(evt);
	};
    
    function Scanner(identity) {
		this.stream = '';
		this._identity = identity;
		this._activeParse = false;
		this._timeoutParse = null;
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
		
		startCode = /]C0$/
		barcode = /]C0(.+)(\r)?/
		safetyCode1 = /](.)?(.)?$/
		safetyCode2 = /]C0.+$/
		
		/**
		 * Add the new read charatcter to the stream
		 */

		switch (evt.keyCode){
			case 189:
				this.stream = this.stream + '-';
				break;
			case 221:
				this.stream = this.stream + ']';
				break;
			default:
				var letter =  String.fromCharCode(evt.keyCode);
				this.stream = this.stream + letter;
				break;
		}

		if (!safetyCode1.test(this.stream) && !safetyCode2.test(this.stream) && this.stream.length > 30) {
				this.stream = '';
		} else if (startCode.test(this.stream)) {
			this._activeParse = true;
		} else if (this._activeParse && evt.keyCode === 13) {
			// Extract the code from the stream
			var code = barcode.exec(this.stream)[1];
			this._dispatch(code);
			this.stream = '';
			this._activeParse = false;
		}



		/*
		 * Checks if the character is the start code for the 
		 * scanner. If it is the start code, then turn on the parse
		 * switch to get the successive characters
		 */
		if (evt.keyCode === 76 && evt.altKey) {
			evt.preventDefault();
			this._activeParse = true;

			this._timeoutParse = $timeout(function () {
				this._activeParse = false;
				console.debug("Active parse timed out");

			}.bind(this), 1000, false);

			console.debug("scanner " + this._identity + " activated.");
		
		/*
		 * Checks if the character is the end code for the scanner.
		 * If it is, then turn off the parse switch, send the code to dispatch,
		 * and reset the code variable
		 */
		} else if (evt.altKey && evt.keyCode == 71) {
			$timeout.cancel(this._timeoutParse);
			evt.preventDefault();
			this._activeParse = false;
			this._dispatch(code);
			code = '';
			console.debug("scanner " + this._identity + " deactivated.");
			
		/*
		 * If the parse switch is on, add the keypressed character to the code string
		 */
		} else {
			if (this._activeParse) {
				// Cancel original timeout
				$timeout.cancel(this._timeoutParse);
				
				// Extend timeout as characters have been pressed
				this._timeoutParse = $timeout(function () {
					this._activeParse = false;
					console.debug("Active parse timed out");
	
				}.bind(this), 1000, false);		

				console.debug("Add character: " + code);
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
    try {
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
    } catch (e) {

    }
    
    
});
