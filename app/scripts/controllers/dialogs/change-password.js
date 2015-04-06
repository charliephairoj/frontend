
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangePasswordCtrl
 * @description
 * # DialogsChangePasswordCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsChangePasswordCtrl', ['$scope', '$mdDialog', '$http', '$mdToast',
function ($scope, $mdDialog, $http, $mdToast) {
	
	$scope.changePassword = function () {
		if ($scope.old_password && ($scope.new_password === $scope.repeat_password)) {
			var data = {'old': $scope.old_password,
						'newPass': $scope.new_password,
						'repeatPass': $scope.repeat_password};
					
			var promise = $http.post('/api/v1/change_password/', data);

			promise.then(function () {
				$mdDialog.hide();
				$mdToast.show($mdToast
							  .simple()
							  .position('top right')
							  .content('Password Changed.')
				.hideDelay(2000));
			}, function (e) {
				console.log(e);
				$mdToast.show($mdToast
							  .simple()
							  .position('top right')
							  .action('Close')
							  .content(e.data.status)
				.hideDelay(0));
			});
		} else {
			var message;
			if (!$scope.old_password) {
				message = "Must input current password.";
			} else {
				message = "New passwords do not match.";
			}
			
			
			$mdToast.show($mdToast
						  .simple()
						  .position('top right')
						  .action('Close')
						  .content(message)
			.hideDelay(0));
		}
	};
	
	$scope.cancel = function () {
		$mdDialog.hide();
	};
	

}]);
