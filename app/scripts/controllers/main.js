
angular.module('employeeApp')
.controller('MainCtrl', ['$scope', '$location', 'Acknowledgement', 'mapMarker',
function ($scope, $location, Acknowledgement, mapMarker) {
	
	var user = $scope.currentUser;
	var changePage = function () {
		if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && 
		!user.hasModule('shipping')) {
			//$location.path('/supply');
		}
			
	};
	
	if (!$scope.currentUser.ready) {
		user.onready = changePage;
	} else {
		changePage();
	}
	
	var acknowledgements = Acknowledgement.query(function (resp) {
		for (var i = 0; i < 20; i++) {
			new google.maps.Marker({
				position: new google.maps.LatLng(13.736565,100.641658),
				map: $scope.map.map,
				title: "Order #" + resp[i].id,
				draggable: true
			});
		}
		
		
	});
	
	/*
	 * Map 
	 *
	 */
	var latLng = {},
	    map,
	    marker,
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
	
	$scope.map = {
		Marker: mapMarker,
		LatLng: google.maps.LatLng
	};
	$scope.map.map = new google.maps.Map($('#main-map')[0], mapOptions);
	//$scope.map.map.setOptions({styles:styles});
	
	//Refresh the map if a shown event is broadcast
	$scope.$on('shown', function () {
		google.maps.event.trigger($scope.map.map, 'resize');
	});

	$scope.map.refresh = function () {
		google.maps.event.triggger(this.map);    
	};

	//Create a marker and adds to $scope.map.markers
	$scope.map.createMarker = function (obj) {
		if (obj instanceof google.maps.LatLng) {
			latLng = obj;
		} else if (obj.hasOwnProperty('lat') && obj.hasOwnProperty('lng')) {
			latLng = new google.maps.LatLng(obj.lat, obj.lng);
		} else {
			console.log('oops');
			latLng = null;
		}

		return new $scope.map.Marker({
			map: this.map,
			position: latLng
		});
	};
	//Set map position
	$scope.map.setPosition = function (obj) {
		if (obj instanceof google.maps.LatLng) {
			latLng = obj;
		} else {
			latLng = new google.maps.LatLng(obj.lat, obj.lng);
		}

		this.map.panTo(latLng);
		this.map.setZoom(14);
	};
	
	
	
}]);
