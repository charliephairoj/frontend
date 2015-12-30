
angular.module('employeeApp')
.controller('AdministratorUserViewCtrl', ['$scope', 'User', 'Group', 'Notification', function ($scope, User, Group, Notification) {

	//Request users from the server
	$scope.users = User.query({limit: 0});
    $scope.groups = Group.query({limit: 0});
	
	$scope.searchGroups = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var groups = [];
		for (var i = 0; i < $scope.groups.length; i++) {
			if (angular.lowercase($scope.groups[i].name).indexOf(lowercaseQuery) !== -1) {
				groups.push($scope.groups[i]);
			}
		}
		
		return groups;
	};
	
	$scope.save = function (user) {
		if ($scope.currentUser.hasPermission('change_user')) {
		
			Notification.display('Saving user: ' + user.username + '...', false);
			user.$update(function () {
				Notification.display(user.username + ' saved.');
			});
		}
	};
	
	$scope.remove = function (user, $index) {
		if ($scope.currentUser.hasPermission('delete_user')) {
			Notification.display('Deleting user: ' + user.username + '...', false);
			user.$delete(function () {
				Notification.display(user.username + ' deleted.');
				$scope.users.splice($index, 1);
			});
		}
    };
}]);
