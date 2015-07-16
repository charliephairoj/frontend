
angular.module('employeeApp')
.controller('ContactSupplierDetailsCtrl', ['$scope', 'Supplier', '$routeParams', '$location', 'SupplierContact', 'Notification', '$timeout', '$mdDialog', '$mdToast',
function ($scope, Supplier, $routeParams, $location, SupplierContact, Notification, $timeout, $mdDialog, $mdToast) {
    
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
					console.error(status);
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
		console.log($scope.supplier);
		console.log($scope.supplier.addresses[0].latitude, $scope.supplier.addresses[0].longitude);
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
