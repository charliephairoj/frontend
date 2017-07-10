
angular.module('employeeApp')
.controller('MainCtrl', ['$scope', '$location', 'Acknowledgement', 'mapMarker', 'PurchaseOrder', '$rootScope', '$log', '$http',
function ($scope, $location, Acknowledgement, mapMarker, PurchaseOrder, $rootScope, $log, $http) {

	/**
	 * VoIP: Twilio
	 */
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
