
angular.module('employeeApp')
.controller('SupplyFabricAddCtrl', ['$scope', 'Supplier', 'Fabric', '$location', 'Notification', 'FileUploader', '$log',
function ($scope, Supplier, Fabric, $location, Notification, FileUploader, $log) {
    $scope.suppliers = Supplier.query({limit:0, offset:1, page_size:99999});
    $scope.fabric = new Fabric();
    
	/*
 	 * SUPPLIER SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/
	$scope.suppliers = Supplier.query({page_size:99999, limit:0});
	
	$scope.searchSuppliers = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var suppliers = [];
		for (var i = 0; i < $scope.suppliers.length; i++) {
			if (angular.lowercase($scope.suppliers[i].name).indexOf(lowercaseQuery) !== -1) {
				suppliers.push($scope.suppliers[i]);
			}
		}
		
		return suppliers;
	};
	
	// Watch on supplierSearchText to get products from the server
	$scope.retrieveSuppliers = function (query) {
		if (query) {
			Supplier.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.suppliers.indexOfById(responses[i]) === -1) {
						$scope.suppliers.push(responses[i]);
					}
				}
			});
		}
	};
	
	/**
	 * Updates the supplier name incase this is a new supplier
	 * @public
	 * @param {String} supplierName - Name of the Supplier
	 * @returns {null} 
	 */
	
	$scope.updateSupplierName = function (supplierName) {
		/*
		$scope.po.supplier = $scope.po.supplier || {name: '', addresses:[]};
		
		if (!$scope.po.supplier.id) {
			$scope.po.supplier.name = supplierName || '';
			//$scope.supplies = [];
		} else {
			if ($scope.po.supplier.name.indexOf(supplierName) == -1) {
				$scope.po.supplier = {name: supplierName, addresses: []};
			}
		}*/
	};
	
	/*
	 * Add a supplier to the purchase order
	 */
	$scope.addSupplier = function (supplier) {
		
		$scope.fabric.supplier = supplier;
		
	};
	
    //Add Fabric
    $scope.save = function () {
        //Display saving message
        Notification.display('Saving Fabric...', false);
        //Checks the form is valid
        if ($scope.form.$valid) {
            //save to database
			$scope.$saving = true;
			
            $scope.fabric.$create(function () {
                Notification.display('Fabric Saved');
                $location.path('supply/fabric');
            }, function (e) {
				Notifiation.display('There was an error in creating this fabric', 0);
            	$log.error(JSON.stringify(e));
				$scope.$saving = false;
            });
        }
       
    };
    
    //Upload Image
    $scope.upload = function () {
        
        //Notify of uploading image
        Notification.display('Uploading Image...', false);
		
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/supply/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.fabric.image = dataObj.data;
				
		}, function (e) {
			$log.error(JSON.stringify(e));
			Notification.display("There was an error in uploading the file");
		});
    };
}]);
