
angular.module('employeeApp')
.controller('SupplyPropViewCtrl', ['$scope', 'Supply', '$filter', '$q', 'Notification', '$location',
function ($scope, Supply, $filter, $q, Notification, $location) {
    $scope.supplyList = Supply.query({type: 'prop'});
    
    //Change page to add page
    $scope.add = function () {
        $scope.safeApply(function () {
            $location.path('/supply/prop/add');
        });
	};
      
    $scope.upload = function (index, image) {
     
        Notification.display('Uploading Image...', false);
        
        var resource = $filter('orderBy')($filter('filter')($scope.supplyList, $scope.query), 'supplier.name')[index],
            deferred,
            promise,
            fd = new FormData();
            
        
        deferred = $q.defer();
        promise = deferred.promise;
        
        //Create promise events
        promise.then(function (data) {
            /*The success fulfillment of the
             * promise will kick in the events:
             * -Show success notice
             * -update image property of prop
             */
			Notification.display('Image Updated');
            
            //Perform scope updates if
            //The scope still exists
            
			$scope.safeApply(function () {
                resource.image = resource.image || {};
                angular.copy(data, resource.image);
                resource.$save(function () {
                    Notification.display('Prop Saved');
                });
            });
            
                
            
        }, function (reason) {
            Notification.display('Unable to Upload Image');
        });
        
        //Append image and upload the form data
        fd.append('image', image);
        jQuery.ajax("supply/image", {
			type: 'POST',
			data: fd,
			processData: false,
			contentType: false,
			success: function (response) {
				deferred.resolve(response);
			},
			error: function () {
				deferred.reject();
			}
		});
	};
}]);
