
angular.module('employeeApp')
.controller('SupplyFabricAddCtrl', ['$scope', 'Supplier', 'Fabric', '$location', 'Notification', 'FileUploader', 
function ($scope, Supplier, Fabric, $location, Notification, FileUploader) {
    $scope.suppliers = Supplier.query({limit:0});
    $scope.fabric = new Fabric();
    
    //Tooltips
    $scope.supplierText = "Choose a Supplier for this Fabric";
    $scope.referenceText = "Enter the Supplier's Reference Number";
    $scope.lengthText = "Enter the Current Length of this Fabric in yards";
    $scope.widthText = "Enter the Width in millimeters";
    $scope.patternText = "Enter the Pattern of this Fabric";
    $scope.colorText = "Enter the Color of this Fabric";
    $scope.cost = "Enter the Cost per Yard of this Fabric";
    //Methods
    
    //Add Fabric
    $scope.save = function () {
        //Display saving message
        Notification.display('Saving Fabric...', false);
        //Checks the form is valid
        if ($scope.form.$valid) {
            //save to database
            $scope.fabric.$create(function () {
                Notification.display('Fabric Saved');
                $location.path('supply/fabric');
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
			Notification.display("There was an error in uploading the file");
		});
    };
}]);
