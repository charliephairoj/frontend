
angular.module('employeeApp.directives')
.directive('x', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			if (!attrs.x) {
				throw new TypeError("Missing expression to evaluate.");
			}
			var x = angular.element('<span class="x-mark">𐄂</span>');
            
			scope.$watch(attrs.x, function (val) {
				if (val) {
					element.append(x);
				} else {
					x.remove();
				}
			});
		}
	};
}]);