
angular.module('employeeApp')
.controller('ContactCustomerDetailsCtrl', ['$scope', 'Customer', '$routeParams', '$location', 'Notification', '$timeout',
function ($scope, Customer, $routeParams, $location, Notification, $timeout) {
    
    var updateLoopActive = false,
		timeoutPromise;
    
    $scope.customer =  Customer.get({'id': $routeParams.id}, function () {
        
        /*
		if ($scope.customer.address.lat && $scope.customer.address.lng) {
			$scope.marker = $scope.map.createMarker({
                lat: $scope.customer.address.lat,
                lng: $scope.customer.address.lng
            });
		} else if (!$scope.customer.address.user_defined_latlng) {
			try {
				var promise = Geocoder.geocode($scope.customer.address);
				promise.then(function (results) {
					updatePosition(results);
				});
			} catch(err) {
				console.warn(err);
			}
		}*/
        
    });
    
    /*
    function updatePosition(results){
        if ($scope.marker) {
            $scope.marker.setPosition(results[0].geometry.location);
        } else {
            $scope.marker = $scope.map.createMarker(results[0].geometry.location);
            $scope.marker.onchange = function (latLng) {
                //Set address lat and lng
                $scope.customer.address.lat = $scope.marker.lat;
                $scope.customer.address.lng = $scope.marker.lng;
                $scope.customer.address.user_defined_latlng = true;
                $scope.customer.$update();
            };
        }
      
        //Reposition the map to the marker
        $scope.map.setPosition(results[0].geometry.location);
      
        //Set the Address lat and lng
        $scope.customer.address[0].lat = $scope.marker.lat;
        $scope.customer.address[0].lng = $scope.marker.lng;
    }
    */
   
    //Mehtods
    
    $scope.update = function () {
		/*
        Notification.display('Updating...', false);
        $scope.customer.$update(function () {
            Notification.display('Customer Save'); 
        }, function () {
            Notification.display('Unable to Update Customer');
        });
        */
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
				customer.$update(function () {
					updateLoopActive = false;
					Notification.display('Customer updated');
				}, function () { 
					Notification.display('There was an error updating the customer');
				});
			
			}, 5000);
		}
	}, true);
    
    /*
    $scope.updatePosition = function () {
        var promise = Geocoder.geocode($scope.customer.address);
        promise.then(function (results) {
            updatePosition(results);
        });
    };*/
    
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
