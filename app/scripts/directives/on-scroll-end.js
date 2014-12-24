
angular.module('employeeApp')
.directive('onScrollEnd', [function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.bind('scroll', function (e) {
				var childHeight = $(element.children()[0]).height();
				var elHeight = element.height();
				if (childHeight >= elHeight) {
					if ((element.scrollTop() + elHeight) >= childHeight - 10) {
						try {
							scope.$eval(attrs.onScrollEnd);
						} catch (err) {
							console.error("Missing a function for 'on-scroll-end'");
						}
					}
				}
			});
		}
	};
}]);
