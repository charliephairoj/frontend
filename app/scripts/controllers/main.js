
angular.module('employeeApp')
.controller('MainCtrl', ['$scope', '$location',
function ($scope, $location) {
	
	var user = $scope.currentUser;
	var changePage = function () {
		if (user.hasModule('supplies') && !user.hasModule('acknowledgements') && 
		!user.hasModule('shipping')) {
			$location.path('/supply');
		}
		
	};
	
	if (!$scope.currentUser.ready) {
		user.onready = changePage;
	} else {
		changePage();
	}
	
}]);
