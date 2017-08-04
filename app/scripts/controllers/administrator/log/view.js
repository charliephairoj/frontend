angular.module('employeeApp')
.controller('AdministratorLogViewCtrl', ['$scope', '$http', 'Group', 'Notification', 
function ($scope, $http, Group, Notification) {
    $scope.logs = [];

    $scope.logs = $http.get('/api/v1/administrator/log/').success(function (resp) {
        console.log(resp);
        $scope.logs = resp;
    });
	
}]);
