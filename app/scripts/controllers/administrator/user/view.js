
angular.module('employeeApp')
.controller('AdministratorUserViewCtrl', ['$scope', 'User', function ($scope, User) {

	//Request users from the server
	$scope.users = User.query({limit: 0});
 
}]);
