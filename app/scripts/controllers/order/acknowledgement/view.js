
angular.module('employeeApp')
.controller('OrderAcknowledgementViewCtrl', ['$scope', 'Acknowledgement', '$location', '$filter', 'KeyboardNavigation', 'Notification',
function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, Notification) {
	
	
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

	$scope.query = {};
	
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
	});

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
		function postUpdate (resp) {
			var notification = Notification.display('Acknowledgement #' + resp.id + " status updated to '" + resp.status.toLowerCase() + "'", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i].id === oldVal[i].id) {
						if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
							
							var notification = Notification.display('Updating Acknowledgement #' + newVal[i].id + ' status...', false);
							
							newVal[i].$update(postUpdate);
						}
					}
				}
			} catch (e) {
				console.log(e);
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
	var latLng = {},
	    map,
	    marker,
		markers = [];
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

	//Function to get zoom and position
	function setMapFocus(latArray, lngArray){
		var ne = new google.maps.LatLng(Math.max.apply(null, latArray), Math.max.apply(null, lngArray)),
			sw = new google.maps.LatLng(Math.min.apply(null, latArray), Math.min.apply(null, lngArray));
	
		var bounds = new google.maps.LatLngBounds(sw, ne);
		map.fitBounds(bounds);	
	}

	//Function to create markers for acknowledgements
	function createAcknowledgementMarkers (acknowledgements) {
		
		acknowledgements = acknowledgements || $scope.acknowledgements;
		
		var lats = [],
			lngs = [];
		
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
						title: "Order #" + acknowledgements.id,
						draggable: false
					});
				
					//Zoom to marker
					google.maps.event.addListener(marker, 'click', focusOnMarker.bind(marker));
					
					markers.push(marker);
				}
			} catch (e) {
				console.log(acknowledgements[i]);
				console.error(e);
			}
		}
	
		setMapFocus(lats, lngs);
	}
	
	
	//Initialize map
	map = new google.maps.Map($('#acknowledgement-map')[0], mapOptions);
	map.setOptions({styles:styles});
	
	
	//Open map, resize and create markers
	$scope.viewMap = function () {
		
		$scope.map = true;
		
		//setTimeout(function () {
		//	google.maps.event.trigger(map, 'resize');
		//}, 1000);
		
		createAcknowledgementMarkers();
	};
	
	
}]);
