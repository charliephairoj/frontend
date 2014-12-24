
angular.module('employeeApp')
.controller('ContactCustomerAddCtrl', ['$scope', 'Customer', '$location', 'Notification', 'Geocoder',
function ($scope, Customer, $location, Notification, Geocoder) {
      
	$scope.customer = new Customer();
      
	$scope.save = function () {
		if ($scope.form.$valid) {
			Notification.display('Creating customer...', false);
			$scope.customer.$save(function () {
				Notification.display('Customer created');
				$location.path('/contact/customer');
			}, function (e) {
				Notification.display('There was an error in creating the customer', false);
			});
		} else {
			Notification.display('Please fill out all required fields correctly', false);
		}
	};
  
	$scope.getPosition = function () {
		if ($scope.customer.address.address1 && $scope.customer.address.city && $scope.customer.address.territory &&
		$scope.customer.address.country && $scope.customer.address.zipcode) {
          
			//Get promise and bind to call backs
			var promise = Geocoder.geocode($scope.customer.address);
			promise.then(function (results) {
				if ($scope.marker) {
					$scope.marker.setPosition(results[0].geometry.location);
				} else {
					$scope.marker = $scope.map.createMarker(results[0].geometry.location);
					$scope.marker.onchange = function (latLng) {
						//Set address lat and lng
						$scope.customer.address.lat = $scope.marker.lat;
						$scope.customer.address.lng = $scope.marker.lng;
					};
				}
  
				//Reposition the map to the marker
				$scope.map.setPosition(results[0].geometry.location);
  
				//Set the Address lat and lng
				$scope.customer.address.lat = $scope.marker.lat;
				$scope.customer.address.lng = $scope.marker.lng;
                  
			}, function (status) {
				console.error(status);
			});
		}
	};
      
}]);
