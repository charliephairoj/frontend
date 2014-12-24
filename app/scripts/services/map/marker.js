
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
