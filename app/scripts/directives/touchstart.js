
angular.module('employeeApp')
.directive('touchstart', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchStart(e) {
				element.addClass('touch-start');
			}
			
			//Apply if an iOS device
			if (window.iOS) {
				element.on('touchstart', touchStart);
			
				scope.$on('$destroy', function () {
					element.off('touchstart', touchStart);
				});
			}
		}
	};
});
