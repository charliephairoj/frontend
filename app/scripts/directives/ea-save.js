
angular.module('employeeApp')
.directive('eaSave', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.text('this is the eaSave directive');
		}
	};
}]);
