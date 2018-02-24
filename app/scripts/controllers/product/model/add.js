
angular.module('employeeApp')
.controller('ProductModelAddCtrl', ['$scope', 'Model', 'Notification', '$location', 'FileUploader',
function ($scope, Model, Notification, $location, FileUploader) {
      
    $scope.model = new Model();
    
    //Adds a new models
    $scope.save = function (model) {
        Notification.display('Saving Model...', false);
        $scope.model.$create(function (obj) {
            $location.path('/product/model/'+obj.id);
            Notification.display('Model Saved'); 
            
        });
    };
   
    $scope.addFiles = function (filelist) {
        console.log(filelist)
		//Notify of uploading image
		Notification.display('Uploading Image...', false);
		
        //Notify of uploading image        
		var promise = FileUploader.upload(filelist[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');
                $scope.model.images = $scope.model.images || [];
                $scope.model.images.push(dataObj.data);
				
		}, function (e) {
			Notification.display("There was an error in uploading the image");
		});
	};
}]);
