

angular.module('employeeApp.services')
.factory('Geocoder', ['$q', '$rootScope', function($q, $rootScope) {
        
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
				console.error(status);
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
