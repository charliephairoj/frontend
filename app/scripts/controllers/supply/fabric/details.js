
angular.module('employeeApp')
.controller('SupplyFabricDetailsCtrl', ['$scope', 'Fabric', '$routeParams', '$location', 'Notification', '$http',
function ($scope, Fabric, $routeParams, $location, Notification, $http) {
    $scope.fabric = Fabric.get({'id': $routeParams.id});
    
    //Uploads Profie Image
    $scope.upload = function () {
        //display notification
        Notification.display('Uploading Image...', false);
        
        var fd = new FormData();
        
        fd.append('image', $scope.images[0]);
        
        //clear the form
        $scope.addLength = null;
        $scope.addRemark = null;
        
        jQuery.ajax("fabric/" + $scope.fabric.id + "/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				//display success mesage
				Notification.display('Image Updated');
				$scope.fabric.image = {};
				angular.copy(responseData, $scope.fabric.image);
				$scope.fabric.$save();
				//Set new profile pic
				$scope.profileImageUrl = $scope.fabric.image.url;
				//Clear upload images and clear previews
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
		});
	};
    
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
   
    $scope.viewLog = function () {
        
        $http.get("fabric/" + $scope.fabric.id + "/log").success(function (data) {
			$scope.logs = [];
			angular.forEach(data, function (item) {
				$scope.logs.push(item);
			});
		});
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
    
    $scope.update = function () {
        Notification.display('Updating Fabric...', false);
        $scope.fabric.$update(Notification.display('Fabric Updated'));
    };
}]);
