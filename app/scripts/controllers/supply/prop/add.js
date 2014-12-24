
angular.module('employeeApp')
.controller('SupplyPropAddCtrl', ['$scope', 'Supplier', 'Supply', 'Notification', '$location', '$q',
function ($scope, Supplier, Supply, Notification, $location, $q) {
      
	var deferred,
		promise,
		uploading = false;
      
    $scope.supplierList = Supplier.query();
    $scope.prop = new Supply();
    $scope.prop.type = "prop";
    //Tooltips
    $scope.supplierText = "Choose a Supplier for this Fabric";
    $scope.referenceText = "Enter the Supplier's Reference Number";
    $scope.widthText = "Enter the Width in millimeters";
    $scope.depthText = "Enter the Depth in millimeters";
    $scope.heightText = "Enter the Height in millimeters";
    $scope.cost = "Enter the Cost in the format of 100 or 123.45";
    //Methods
    
    //Add Fabric
    $scope.save = function () {
        /*
         * The function will first check if the 
         * form is valid
         * 
         * If the form is valid then there is a check
         * to see if there is an image upload in progress
         * 
         * if there is then it will save the item after the image 
         * is uploaded
         */
        
        //Checks the form is valid
        if ($scope.form.$valid) {
            if (uploading) {
                var prop = angular.copy($scope.prop);
                promise.then(function (response) {
                    prop.image = prop.image || {};
                    angular.copy(response, prop.image);
                    Notification.display('Saving Prop...', false);
                    prop.$save(function () {
                        Notification.display('Prop Saved');
                    });
                }, angular.noop);
            } else {
                Notification.display('Saving Prop...', false);
                //save to database
                $scope.prop.$save(function () {
                    Notification.display('Prop Saved');
                    
                });
            }
            $location.path('/supply/prop');
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
        
        //Create deferred and promose
        deferred = $q.defer();
        promise = deferred.promise;
        
        //Create promise events
        promise.then(function (data) {
            /*The success fulfillment of the
             * promise will kick in the events:
             * -Show success notice
             * -update image property of prop
             */
            Notification.display('Image Updated');
            
            //Perform scope updates if
            //The scope still exists
            if ($scope) {
                $scope.$apply(function () {
                    $scope.prop.image = $scope.prop.image || {};
                    angular.copy(data, $scope.prop.image);
                });
            }
            
        }, function (reason) {
            Notification.display('Unable to Upload Image');
        });
        
        //Set uploading switch to true
        uploading = true;
        
        jQuery.ajax("supply/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (response) {
				deferred.resolve(response);
			},
			error: function () {
				deferred.reject();
			}
		});
	};
}]);
