
angular.module('employeeApp')
.controller('ContactSupplierDetailsCtrl', ['$scope', 'Supplier', '$routeParams', '$location', 'SupplierContact', 'Notification', '$timeout',
function ($scope, Supplier, $routeParams, $location, SupplierContact, Notification, $timeout) {
    
	var updateLoopActive = false,
		timeoutPromise;
	
	//Retreive the supplier from the server
    $scope.supplier =  Supplier.get({'id': $routeParams.id});
    
    //addS  contact to the supplier
    $scope.addContact = function (contact) {
        
        $scope.supplier.contacts = $scope.supplier.contacts || [];
        contact = contact || $scope.contact;
        $scope.supplier.contacts.push(contact);
        
        $scope.contact = {};
        
        $scope.showAddContact = false;
        
        //Save changes
        $scope.supplier.$update();
        
    };
    
    //Remove a supplier contact
    $scope.deleteContact = function ($index) {
        
        var contact = SupplierContact.get({'id': $scope.supplier.contacts[$index].id}, function () {
           
            $scope.supplier.contacts.splice($index, 1);
            contact.$delete();
            
            $scope.supplier.$save();
            $scope.$apply();
        });
        
    
    };
    
	$scope.$watch(function () {
		var supplier = angular.copy($scope.supplier);
		delete supplier.last_modified;
		return supplier;	
	}, function (newVal, oldVal) {
		
		if (!updateLoopActive && oldVal.hasOwnProperty('id')) {
			updateLoopActive = true;
			timeoutPromise = $timeout(function () {
				Notification.display('Updating supplier...', false);
				var supplier = angular.copy($scope.supplier);
				supplier.$update(function () {
					updateLoopActive = false;
					Notification.display('Supplier updated');
				}, function () { 
					Notification.display('There was an error updating the supplier');
				});
			
			}, 5000);
		}
	}, true);
    
    $scope.update = function () {
		/*
        //Notify
        Notification.display('Updating Supplier...', false); 
        //if
        //angular.extend($scope.supplier.address, position);
        $scope.supplier.$update(function (data) {
            Notification.display('Supplier Updated');
        });
       
        */
    };
    
    $scope.remove = function () {
        $scope.supplier.$remove(function () {
            $location.path('/contact/supplier');
        });
        
    };
    
	$scope.$on('$destroy', function () {
		Notification.display('Updating supplier...', false);
		$scope.supplier.$update(function () {
			Notification.display('Supplier updated');
		}, function (e) {
			Notification.display('There was an error updating the supplier');
		});
	});
    
}]);
