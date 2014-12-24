
angular.module('employeeApp')
.controller('SupplyFabricAddCtrl', ['$scope', 'Supplier', 'Fabric', '$location', 'Notification', 
function ($scope, Supplier, Fabric, $location, Notification) {
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
        var fd = new FormData();
        
        fd.append('image', $scope.images[0]);
        
        //clear the form
        $scope.addLength = null;
        $scope.addRemark = null;
        
        jQuery.ajax("fabric/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Updated');
				angular.copy(responseData, $scope.fabric);
				$scope.$apply();
			}
        });
    };
}]);
