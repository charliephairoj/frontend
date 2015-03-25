
angular.module('employeeApp')
.controller('ProductModelAddCtrl', ['$scope', 'Model', 'Notification', '$location', 'FileUploader',
function ($scope, Model, Notification, $location, FileUploader) {
      
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
		
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.model.image = dataObj.data;
				
		}, function (e) {
			Notification.display("There was an error in uploading the file");
		});
	};
}]);
