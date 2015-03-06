
angular.module('employeeApp')
.controller('AddSupplierContactCtrl', ['$scope', '$mdDialog',
function ($scope, $mdDialog) {
    
	$scope.complete = function () {
		$mdDialog.hide();
	}
    
}]);
