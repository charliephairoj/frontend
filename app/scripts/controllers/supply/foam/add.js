
angular.module('employeeApp')
.controller('SupplyFoamAddCtrl', ['$scope', 'Foam', 'Supplier', '$location', 'Notificaiton',
function ($scope, Foam, Supplier, $location, Notification) {
    $scope.supplierList = Supplier.query();
    $scope.foam = new Foam();
    //Methods
    
    //Add Lumber
    $scope.save = function () {       
        $scope.foam.$save(function () {
            $location.path('/foam');
        });
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
        
        jQuery.ajax("supply/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Updated');
				$scope.foam.image = $scope.foam.image || {};
				angular.copy(responseData, $scope.foam.image);
				$scope.$apply();
			}
		});
	};
}]);
