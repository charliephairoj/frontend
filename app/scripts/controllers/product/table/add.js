
angular.module('employeeApp')
.controller('ProductTableAddCtrl', ['$scope', 'Table', 'Configuration', 'Model', 'Notification', '$location',
function ($scope, Table, Configuration, Model, Notification, $location) {
    
    $scope.configurationList = Configuration.query({limit: 0});
    $scope.modelList = Model.query({limit: 0});
    $scope.table = new Table();
    
    //Text for tooltips
    $scope.modelText = "Choose a Model";
    $scope.configurationText = "Choose a Configuration";
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
   
    $scope.upload = function () {
         //Notify of uploading image
		Notification.display('Uploading Image...', false);
		var fd = new FormData();
        
		fd.append('image', $scope.images[0]);
        
		//clear the form
		$scope.addLength = null;
		$scope.addRemark = null;
        
		jQuery.ajax("/api/v1/upholstery/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Uploaded');
				$scope.table.image = $scope.table.image || {};
				angular.copy(responseData, $scope.table.image);
				$scope.$apply();
				$scope.table.$update();
			}
		});
	};
    
    
    $scope.save = function () {
        Notification.display('Saving Table Product...');
        $scope.table.$create(function () {
            Notification.display('Table Product Saved');
            $location.path('/product/table');
        }); 
    };

    
}]);
