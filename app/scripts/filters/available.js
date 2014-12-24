
angular.module('employeeApp')
.filter('available', [function () {
	return function (input) {
		return 'available filter: ' + input;
	};
}]);
