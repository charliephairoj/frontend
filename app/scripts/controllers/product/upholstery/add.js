
angular.module('employeeApp')
.controller('ProductUpholsteryAddCtrl', ['$scope', 'Model', 'Configuration', 'Upholstery', 'Notification', '$location', 'FileUploader',
function ($scope, Model, Configuration, Upholstery, Notification, $location, FileUploader) {
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
		
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.upholstery.image = dataObj.data;
				
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
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
