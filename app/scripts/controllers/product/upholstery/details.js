
angular.module('employeeApp')
.controller('ProductUpholsteryDetailsCtrl', ['$scope', 'Upholstery', '$routeParams', '$mdToast', '$location', '$timeout', 'FileUploader',
function ($scope, Upholstery, $routeParams, $mdToast, $location, $timeout, FileUploader) {
	
	$scope.updateLoopActive = true;
	var timeoutPromise;
	
    $scope.uphol = Upholstery.get({'id': $routeParams.id}, function () {
		$scope.safeApply(function () {
			$scope.updateLoopActive = false;
		});
    });    
    
    //Upload Image
    $scope.upload = function () {
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('File was uploaded.'));

				$scope.uphol.image = dataObj.data;
				
				$scope.update();
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
		/*
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
		});*/
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
		if (oldVal.hasOwnProperty('id')) {
			
			$timeout.cancel(timeoutPromise);
			
			timeoutPromise = $timeout(function () {
				
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('Updating ' + $scope.uphol.description + '...'));
				
				$scope.uphol.$update(function () {
					$scope.updateLoopActive = false;
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content($scope.uphol.description + ' updated.'));

				}, function () {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content("Unable to update"));

				});
			}, 700);
		}
    }, true);
    
    $scope.update = function () {
        //Notification.display('Saving Upholsterty...', false);
		/*
        $scope.uphol.$update(function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(3000)
				.content('Upholstery saved.'));
        });
		*/
    };
    
    $scope.remove = function () {
        //Notification.display('Deleteing Upholstery Product');
        $scope.uphol.$delete(function () { 
            //Notification.display('Upholstery Product Deleted');
            $location.path('/product/upholstery');
        });
    };
    
    $scope.$on('$destroy', function () {
        $scope.update(); 
    });
}]);
