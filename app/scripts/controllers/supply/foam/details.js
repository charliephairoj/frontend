
angular.module('employeeApp')
.controller('SupplyFoamDetailsCtrl', ['$scope', 'Foam', '$routeParams', '$location', 'Notification',
function ($scope, Foam, $routeParams, $location, Notification) {
    //Poller.poll($scope, function(){
    $scope.foam = Foam.get({'id': $routeParams.id});
    //});
    
    //Uploads Profie Image
    $scope.upload = function () {
        //display notification
        Notification.display('Uploading Image...', false);
        
        var fd = new FormData();
        
        fd.append('image', $scope.images[0]);
        
        //clear the form
        $scope.addLength = null;
        $scope.addRemark = null;
        
        jQuery.ajax("supply/" + $scope.foam.id + "/image", {	
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (responseData) {
				//display success mesage
				Notification.display('Image Updated');
				$scope.foam.image = {};
				angular.copy(responseData, $scope.foam.image);
				$scope.foam.$save();
				//Set new profile pic
				$scope.profileImageUrl = $scope.foam.image.url;
				//Clear upload images and clear previews
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
		});
	};
    
    $scope.remove = function () {
        $scope.foam.$delete(function () {
            $location.path('/foam');
        });
        $scope.foamList = Foam.query();
    };
    
    $scope.update = function () {
        Notification.display('Updating Foam...', false);
        $scope.foam.$save(function () {
            Notification.display('Foam Updated'); 
        });
    };
}]);
