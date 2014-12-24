
angular.module('employeeApp')
.controller('AdministratorGroupViewCtrl', ['$scope', 'Group', function ($scope, Group) {
	
	//Requests groups from the server
	$scope.groups = Group.query({limit: 0});


}]);
