
angular.module('employeeApp.filters')
.filter('telephone', [function () {
	return function ($input) {
		var clean = $input.replace(/ /g, '').replace(/\-/g, '');
		return clean; 
	};
}]);
