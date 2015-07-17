
angular.module('employeeApp')
.controller('ContactCustomerDetailsCtrl', ['$scope', 'Customer', '$routeParams', '$location', 'Notification', '$timeout',
function ($scope, Customer, $routeParams, $location, Notification, $timeout) {
    
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
	map = new google.maps.Map($('#customer-map')[0], mapOptions);
	map.setOptions({styles:styles});
	
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
