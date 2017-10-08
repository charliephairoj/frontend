angular.module('employeeApp')
.controller('AdministratorLabelViewCtrl', ['$scope', '$http', 'Group', 'Notification', 'Label',
function ($scope, $http, Group, Notification, Label) {

    var fetching = false;
    $scope.newLabel = new Label();
    $scope.labels = Label.query();
   

    $scope.create = function () {

        Notification.display('Creating Label...');

        $scope.newLabel.$create(function (resp) {
            $scope.labels.push(resp);
            $scope.newLabel = new Label();
            Notification.display('Label created.');
        });
    };

    $scope.update = function (label) {
        Notification.display('Updating Label');
        
        label.$update(function (resp) {
            Notification.display('Label updated.');
        });
    };
    
    $scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more logs...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.logs.length
			};
            
            url = '/api/v1/label/';
            url += "?limit=20";
            url += "&offset=";
            url += $scope.labels.length;

            $http.get(url).success(function (resources) {
                for (var i = 0; i < resources.length; i++) {
					if ($scope.labels.indexOfById(resources[i].id) == -1) {
						$scope.labels.push(resources[i]);
					}
                }
                
                fetching = false;
            });
			
		}
	};
}]);
