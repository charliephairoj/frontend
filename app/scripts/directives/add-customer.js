
angular.module('employeeApp.directives')
.directive('addCustomer', ['Customer', 'Notification', 'Geocoder', function (Customer, Notification, Geocoder) {
	return {
		templateUrl: 'views/templates/add-customer.html',
		replace: true,
		restrict: 'A',
		scope: {visible: '=addCustomer'},
		link: function postLink(scope, element, attrs) {
			
            scope.customer = new Customer();
            
            /*
             * List of tips
             * 
             * The tips are to be used with the tooltips
             */
            scope.firstNameTip = "Enter the customer's first name or name (required)";
            scope.lastNameTip = "Enter the customer's last name if applicable";
            scope.emailTip = "Enter a valid email address (required)";
            scope.telTip = "Enter a valid phone number (required)";
            scope.typeTip = "What type of customer is this? (required)";
            scope.currencyTip = "What currency does this customer deal in? (required)";
            
            //Get the longitude and latitude of the customer's address
			scope.getLocation = function () {
				if (scope.customer.address.address1 && scope.customer.address.city && scope.customer.address.territory &&
				scope.customer.address.country && scope.customer.address.zipcode && !scope.customer.address.user_defined_latlng) {

					//Get promise and bind to call backs
					var promise = Geocoder.geocode(scope.customer.address);
					promise.then(function (results) {
						if (scope.marker) {
							scope.marker.setPosition(results[0].geometry.location);
						} else {
							scope.marker = scope.map.createMarker(results[0].geometry.location);
							scope.marker.onchange = function (latLng) {
								//Set address lat and lng
								scope.customer.address.lat = scope.marker.lat;
								scope.customer.address.lng = scope.marker.lng;
								scope.customer.address.user_defined_latlng = true;
							};
						}

						//Reposition the map to the marker
						scope.map.setPosition(results[0].geometry.location);

						//Set the Address lat and lng
						scope.customer.address.lat = scope.marker.lat;
						scope.customer.address.lng = scope.marker.lng;

					}, function (status) {
						console.error(status);
					});
				}
			};
			
            scope.add = function () {
				if (scope.form.$valid) {
					Notification.display('Creating customer...', false);
					scope.customer.$save(function (response) {
						Notification.display('Customer created');
						scope.visible = false;
						scope.customer = new Customer();
					}, function (reason) {
						console.error(reason);
						Notification.display("There was an error in creating the customer");
					});
				} else {
					Notification.display('Please fill out the form properly');
				}
			};
		}
	};
}]);
