
angular.module('employeeApp')
.controller('ProductUpholsteryDetailsCtrl', ['$scope', 'Upholstery', '$routeParams', 'Notification', '$location', '$timeout',
function ($scope, Upholstery, $routeParams, Notification, $location, $timeout) {
	
	$scope.updateLoopActive = true;
	
    $scope.uphol = Upholstery.get({'id': $routeParams.id}, function () {
		$scope.safeApply(function () {
			$scope.updateLoopActive = false;
		});
    });    
    
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
				$scope.uphol.image = {};
				angular.copy(responseData, $scope.uphol.image);
				$scope.uphol.$update();
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
		});
	};
    
    $scope.$watch(function () {
		var uphol = angular.copy($scope.uphol);
		try {
			delete uphol.last_modified;
			delete uphol.image;
			delete uphol.model;
			delete uphol.configuration;
		}catch (e) {
			
		}
		return uphol;
	}, function (newVal, oldVal) {
		if (!$scope.updateLoopActive && oldVal.hasOwnProperty('id')) {
			$scope.updateLoopActive = true;
			
			timeoutPromise = $timeout(function () {
				Notification.display('Updating ' + $scope.uphol.description + '...', false);
				$scope.uphol.$update(function () {
					$scope.updateLoopActive = false;
					Notification.display($scope.uphol.description + ' updated.');
				}, function () {
					Notification.display("Unable to update");
					$scope.updateLoopActive = false;
				});
			}, 5000);
		}
    }, true);
    
    $scope.update = function () {
        Notification.display('Saving Upholsterty...', false);
        $scope.uphol.$update(function () {
            Notification.display('Upholstery Saved');
        });
    };
    
    $scope.remove = function () {
        Notification.display('Deleteing Upholstery Product');
        $scope.uphol.$delete(function () { 
            Notification.display('Upholstery Product Deleted');
            $location.path('/product/upholstery');
        });
    };
    
    $scope.$on('$destroy', function () {
        $scope.update(); 
    });
}]);
