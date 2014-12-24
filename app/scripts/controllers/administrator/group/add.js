
angular.module('employeeApp')
.controller('AdministratorGroupAddCtrl', ['$scope', 'Group', 'Permission', '$location', 
function ($scope, Group, Permission, $location) {
	$scope.permissions = Permission.query({limit: 0});
	$scope.group = new Group();
	$scope.group.permissions = [];

	/*
	 * Saves the group to the server
	 */
	$scope.save = function () {

		/*
		* Adds selected permissions to the permissions
		* allowed for this group
		* Runs through all the permissions, and checks the '$checked'
		* attribute. If it is positive then that permission is added
		* to the permissions for the gorup
		*/
		for (var i = 0; i < $scope.permissions; i++) {
			if ($scope.permissions[i].$checked) {
				$scope.group.permissions.push($scope.permissions[i]);
			}
		}

		//Post the data to the server
		$scope.group.$create(function () {
			//Return to list page after successful creation
			$location.path("/administrator/group");
		});
	};
}]);
