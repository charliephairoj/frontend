
angular.module('employeeApp')
.directive('touchmove', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchMove(e) {
				element.addClass('touch-move');
				element.removeClass('touch-start');
			}
			
			//Apply if an iOS device 
			if (window.iOS) {
				element.on('touchmove', touchMove);
			
				scope.$on('$destroy', function () {
					element.off('touchmove', touchMove);
				});
			}
		}
    };
});
