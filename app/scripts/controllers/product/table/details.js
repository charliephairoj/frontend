
angular.module('employeeApp')
.controller('ProductTableDetailsCtrl', ['$scope', 'Table', '$routeParams', '$mdToast', '$location', 'FileUploader',
function ($scope, Table, $routeParams, $mdToast, $location, FileUploader) {
	$scope.table = Table.get({'id': $routeParams.id});    
     
	//Upload Image
	$scope.upload = function () {
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('File was uploaded.'));

				$scope.table.image = dataObj.data;
				
				$scope.update();
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
	};
     
	$scope.update = function () {
		//Notification.display('Saving Table...', false);
		$scope.table.$update(function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(3000)
				.content('Table saved.'));
		});
	};
    
	$scope.remove = function () {
		//Notification.display('Deleteing Table Product');
		$scope.table.$delete(function () {
			//Notification.display('Table Product Deleted');
			$location.path('/product/table');
		});
	};
     
	$scope.$on('$destroy', function () {
		$scope.update(); 
	});
}]);
