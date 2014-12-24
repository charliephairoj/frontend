
angular.module('employeeApp')
.controller('ProductModelAddCtrl', ['$scope', 'Model', 'Notification', '$location',
function ($scope, Model, Notification, $location) {
      
    $scope.model = new Model();
  
    //Tooltips
    $scope.nameText = "Enter a Name for this Model";
    $scope.modelText = "Enter a Model Number for this Model";
    $scope.collectionText = "Enter this Model's Collection";
    
    //Adds a new models
    $scope.save = function (model) {
        Notification.display('Saving Model...', false);
        $scope.model.$create(function () {
            $location.path('/product/model');
            Notification.display('Model Saved'); 
            
        });
    };
   
    $scope.uploadImage = function () {
		//Notify of uploading image
		Notification.display('Uploading Image...', false);
		var fd = new FormData();

		fd.append('image', $scope.images[0]);

		//clear the form
		$scope.addLength = null;
		$scope.addRemark = null;

		jQuery.ajax("/api/v1/model/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Uploaded');
				$scope.model.image = $scope.model.image || {};
				angular.copy(responseData, $scope.model.image);
				$scope.$update();
				$scope.$apply();
			}
		});
	};
}]);
