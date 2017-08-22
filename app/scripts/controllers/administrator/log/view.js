angular.module('employeeApp')
.controller('AdministratorLogViewCtrl', ['$scope', '$http', 'Group', 'Notification', 
function ($scope, $http, Group, Notification) {

    var fetching = false;
    $scope.logs = [];
    $http.get('/api/v1/administrator/log/').success(function (resp) {
        console.log(resp);
        $scope.logs = resp;
    });
    
    
    $scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more logs...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.logs.length
			};
            
            url = '/api/v1/administrator/log/';
            url += "?limit=20";
            url += "&offset=";
            url += $scope.logs.length;

            $http.get(url).success(function (resources) {
                for (var i = 0; i < resources.length; i++) {
					if ($scope.logs.indexOfById(resources[i].id) == -1) {
						$scope.logs.push(resources[i]);
					}
                }
                
                fetching = false;
            });
			
		}
	};
}]);
