
angular.module('employeeApp.directives')
.directive('map', ['mapMarker', function (mapMarker) {
    //Create the variables to be used
    var latLng = {},
        map,
        marker;
        //Options for the map 
	try {
		var mapOptions = {
			center: new google.maps.LatLng(13.776239, 100.527884),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
	} catch (e) {

	}
    
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

			}
          
        }
    };
}]);
