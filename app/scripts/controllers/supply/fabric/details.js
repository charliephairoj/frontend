
angular.module('employeeApp')
.controller('SupplyFabricDetailsCtrl', ['$scope', 'Fabric', '$routeParams', '$location', 'Notification', 'SupplyLog', '$mdToast', 'FileUploader',
function ($scope, Fabric, $routeParams, $location, Notification, SupplyLog, $mdToast, FileUploader) {
    $scope.fabric = Fabric.get({'id': $routeParams.id});
    $scope.logs = SupplyLog.query({supply_id: $routeParams.id});
    
    //Create fabric actions
    var DEFAULT_ACTIONS = ['reserve', 'add', 'subtract', 'reset'];
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    $scope.add = function () {
		$scope.fabric.$add({quantity: $scope.quantity}, function () {

		});
		$scope.showAdd = false;
		$scope.quantity = null;
	};
    
    $scope.subtract = function () {
		$scope.fabric.$subtract({quantity: $scope.quantity}, function () {

		});
		$scope.showSubtract = false;
		$scope.quantity = null;
	};
   
    $scope.remove = function () {
        //Notify
        Notification.display('Deleting Fabric...');
        
        //Ajax call to delete
        $scope.fabric.$delete(function () {
            //Notify
            Notification.display('Fabric Deleted');
            //Reroute to view page
            $location.path('/fabric');
        });
        
    };
	
    //Upload Image
    $scope.upload = function () {
        
        //Notify of uploading image
        Notification.display('Uploading Image...', false);
		
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/supply/image/");
			promise.then(function (dataObj) {
				Notification.display('Image Uploaded');

				$scope.fabric.image = dataObj.data;
				$scope.fabric.$update(function () {
					Notification.display('Fabric updated');
				});
				
		}, function (e) {
			Notification.display("There was an error in uploading the file");
		});
    };
    
    $scope.update = function () {
        Notification.display('Updating Fabric...', false);
        $scope.fabric.$update(Notification.display('Fabric Updated'));
    };
	
	$scope.updateLog = function ($index) {
		var log = $scope.logs[$index];
		
		if (log.action == "RESERVE" || log.action == "CUT" || log.action == "CANCEL"){
			
			
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Updating ' + $scope.fabric.description + ' for Ack #'+ log.acknowledgement_id + '.')
				.hideDelay(0));
			
			$scope.logs[$index].$update(function (response) {
				
				if (response.supply) {
					$scope.fabric.quantity = response.supply.quantity;
				}
				
				$mdToast.hide();
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content('Updated.')
					.hideDelay(2000));
			}, function (e) {
				$mdToast.hide();
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content(e)
					.hideDelay(0));
			});
		}
		
		
	};
}]);
