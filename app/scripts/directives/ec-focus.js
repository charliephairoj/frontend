
angular.module('employeeApp')
.directive('ecFocus', [function () {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, element, attrs) {
			element.bind('focus', function () {
				scope.$eval(attrs.ecFocus);
			});
       
           
		}
	};
}]);
