
angular.module('employeeApp')
.directive('ecBlur', [function () {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, element, attrs) {
			element.bind('blur', function () {
				scope.$eval(attrs.ecBlur);
			});
       
           
		}
	};
}]);
