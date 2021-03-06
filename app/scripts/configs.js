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
