
angular.module('employeeApp')
.controller('ProductModelDetailsCtrl', ['$scope', 'Model', '$routeParams', '$location', 'Notification', '$http',
function ($scope, Model, $routeParams, $location, Notification, $http) {
    $scope.model = Model.get({'id': $routeParams.id});
    
    //Uploads Profie Image
    $scope.upload = function () {
        //display notification
        Notification.display('Uploading Model Image...', false);
        
        var fd = new FormData();
        
        fd.append('image', $scope.images[0]);
        
        //clear the form
        $scope.addLength = null;
        $scope.addRemark = null;
        
        jQuery.ajax("fabric/" + $scope.model.id + "/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (response) {
				Notification.display('Model Image Updated');
				$scope.model.image =  $scope.model.image || {};
				angular.copy(response, $scope.model.image);
				$scope.model.$save();
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
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
