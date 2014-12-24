/*
 * Declare the standard headers
 */
angular.module('employeeApp').config(['$httpProvider', '$resourceProvider', function ($httpProvider, $resourceProvider) {
	
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
	
	
}]);

  
/*
 * Run top level application code
 */
angular.module('employeeApp').run(function ($rootScope, CurrentUser, scanner, $http, Geocoder, $q, $cookies) {
	
	$http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
	/*
	 * Get the current user and place it at the top scope
	 */
	$rootScope.currentUser = new CurrentUser();
    
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
		var phase = this.$root.$$phase;
		if (phase == '$apply' || phase == '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
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
					console.error('Getting the position failed');
				});
			} else {
				
			}
		}, function (e) {
			console.log(e);
		});
		
	} else {
		console.log('Geolocation not available'); 
	}
	
	/*
	 * Determine if it is an iOS device
	 */
	
	window.iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
	
	/*
	 * Prevent rubber band effect of iOS webapp
     */
	
	var scrollY = 0;

    angular.element(document).on('touchstart', function (e) {
        scrollY = e.originalEvent.touches.item(0).clientY;
    });

    angular.element(document).on('touchmove', function (e) {
		var container = angular.element(e.target).parents('.scroll-enabled')[0];

		if (container) {
			var containerHeight = $(container).height();
			var scrollDelta = scrollY - e.originalEvent.touches.item(0).clientY;
			if (container.scrollTop === 0 && scrollDelta < 0) {
				e.preventDefault();
			} else if (containerHeight + container.scrollTop == container.scrollHeight && scrollDelta > 0) {
				e.preventDefault();
			}
		} else {
			e.preventDefault();
		}
    });
});
