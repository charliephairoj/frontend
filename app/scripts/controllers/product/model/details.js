
angular.module('employeeApp')
.controller('ProductModelDetailsCtrl', ['$scope', 'Model', '$routeParams', '$location', 'Notification', '$http', 'FileUploader',
function ($scope, Model, $routeParams, $location, Notification, $http, FileUploader) {
    $scope.model = Model.get({'id': $routeParams.id});
    
    //Uploads Profie Image
    $scope.upload = function () {
        //display notification
        Notification.display('Uploading Model Image...', false);
        
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
		        Notification.display('Image uploaded.');
				$scope.model.image = dataObj.data;
				
				$scope.update();
				
				$scope.images = null;
				
				
		}, function () {
	        Notification.display('Error uploading image', false);
			
		});
	};
    
    
    
    $scope.remove = function () {
        //Notify
        Notification.display('Deleting Model...');
        
        //Ajax call to delete
        $scope.model.$delete(function () {
            //Notify
            Notification.display('Model Deleted');
            //Reroute to view page
            $location.path('/product/model');
        });
        
    };
    
    $scope.update = function () {
        Notification.display('Saving Model...', false);
        $scope.model.$update(function () {
			Notification.display('Model Updated');
        });
    };
    
    $scope.$on('$destroy', function () {
        $scope.update();
    });
    
}]);
