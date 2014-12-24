
angular.module('employeeApp')
.controller('ProductUpholsteryAddCtrl', ['$scope', 'Model', 'Configuration', 'Upholstery', 'Notification', '$location',
function ($scope, Model, Configuration, Upholstery, Notification, $location) {
    $scope.modelList = Model.query({limit: 0});
    $scope.configurationList = Configuration.query({limit: 0});
    $scope.upholstery = new Upholstery();
    
    //Text for tooltips
    $scope.modelText = "Choose a Model";
    $scope.configurationText = "Choose a Configuration";
    $scope.widthText = 'Enter a Width in millimeters';
    $scope.depthText = 'Enter a Depth in millimeters';
    $scope.bpText = 'Enter the number of Back Pillows';
    $scope.apText = 'Enter the number of Accent Pillows';
    $scope.lpText = 'Enter the number of Lumbar Pillows';
    $scope.cpText = 'Enter the number of Corner Pillows';
    
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
				$scope.upholstery.image = $scope.upholstery.image || {};
				angular.copy(responseData, $scope.upholstery.image);
				$scope.$apply();
			}
		});
	};
    
    $scope.save = function () {
        Notification.display('Saving Upholstery Product...');
        $scope.upholstery.$create(function () {
            Notification.display('Upholstery Product Saved');
            $location.path('/product/upholstery');
        }); 
    };
}]);
