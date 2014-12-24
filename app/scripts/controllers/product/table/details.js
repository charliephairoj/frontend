
angular.module('employeeApp')
.controller('ProductTableDetailsCtrl', ['$scope', 'Table', '$routeParams', 'Notification', '$location',
function ($scope, Table, $routeParams, Notification, $location) {
	$scope.table = Table.get({'id': $routeParams.id});    
     
	//Upload Image
	$scope.upload = function () {
		//Notify of uploading image
		Notification.display('Uploading Image...', false);
		var fd = new FormData();
        
		fd.append('image', $scope.images[0]);
		jQuery.ajax("/api/v1/upholstery/image", {
			type: 'POST',
			data: fd,
			cache: false,
            processData: false,
            contentType: false,
            success: function (responseData) {
				Notification.display('Image Updated');
                $scope.table.image = {};
                angular.copy(responseData, $scope.table.image);
                $scope.table.$update();
                $scope.imagePreviews = null;
                $scope.images = null;
                $scope.$apply();
            }
		});
	};
     
	$scope.update = function () {
		Notification.display('Saving Table...', false);
		$scope.table.$update(function () {
			Notification.display('Table Saved');
		});
	};
    
	$scope.remove = function () {
		Notification.display('Deleteing Table Product');
		$scope.table.$delete(function () {
			Notification.display('Table Product Deleted');
			$location.path('/product/table');
		});
	};
     
	$scope.$on('$destroy', function () {
		$scope.update(); 
	});
}]);
