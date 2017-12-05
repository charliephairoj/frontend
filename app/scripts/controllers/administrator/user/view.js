
angular.module('employeeApp')
.controller('AdministratorUserViewCtrl', ['$scope', 'User', 'Group', 'Notification', '$mdDialog', '$http',
function ($scope, User, Group, Notification, $mdDialog, $http) {

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
	
	/**
	 * Show Change Password Dialog
	 * @param {*} user 
	 */
	$scope.showChangePassword = function (user) {
		$mdDialog.show({
			templateUrl: 'views/templates/change-password.html',
			controllerAs: 'ctrl',
			locals: {
				'user':user
			},
			controller: function ($scope, $mdDialog, user) {
				$scope.user = user;
				$scope.requireOldPassword = false;


				$scope.valid = function () {
					try{
						return (($scope.new_password === $scope.repeat_password) && $scope.new_password && $scope.new_password.length >= 6) ? true : false;						
					} catch (e) {
						return false;
					}
					
				};


				$scope.changePassword = function () {
					$http.post('/api/v1/change_password/', {
						'new_password': $scope.new_password,
						'repeat_new_password': $scope.repeat_password,
						'user_id': $scope.user.id
					}).success(function (resp) {
						Notification.display('Password changed for ' + $scope.user.first_name);
						$scope.cancel();
					}).error(function (e) {
						console.log(e);
					});
				};

				$scope.cancel = function () {
					$mdDialog.hide();
				};

			},
			clickOutsideToClose: true
		});
	}


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
