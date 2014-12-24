
angular.module('employeeApp')
.controller('ContactSupplierAddCtrl', function ($scope, Supplier, $location, Notification) {
      
	$scope.supplier = new Supplier();
    //Mehtods
    
    //addS  contact to the supplier
    $scope.addContact = function () {
        //Notify
        Notification.display('Contact Added to Supplier'); 
        
        
        $scope.supplier.contacts = $scope.supplier.contacts || [];
      
        
        $scope.supplier.contacts.push(angular.copy($scope.contact));
        
        $scope.contact = {};
        
        $scope.showAddContact = false;
        
    };
    
    $scope.getLocation = function () {
		var position = $scope.map.getPosition($scope.supplier.address, function (response) {
			angular.extend($scope.supplier.address, response);
			$scope.map.setPosition({
				lat: response.lat,
				lng: response.lng,
				updateMarker: true
			});
		});
	};
    
    //Method to save the supplier to the database
    $scope.save = function () {
        
        if ($scope.form.$valid) {
            //Notify
            Notification.display('Saving supplier...', false);
          
                    
            $scope.supplier.$save(function () {
                //Notify
                Notification.display('Supplier Saved');
                $location.path('/contact/supplier');
            }, function (e) {
				Notification.display('There was an error in creating this supplier', false);
			});
		} else {
			Notification.display("Please fill out all required sections correctly");			
		}
        
        
        
        
    };
});
