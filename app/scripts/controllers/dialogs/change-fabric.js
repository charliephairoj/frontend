
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsChangeFabricCtrl
 * @description
 * # DialogsChangeFabricCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsChangeFabricCtrl', ['$scope', '$mdDialog', 
function ($scope, $mdDialog) {
	
	$scope.close = function () {
		$mdDialog.hide();
	};
	
}]);
