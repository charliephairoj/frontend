
angular.module('employeeApp')
.directive('touchend', function () {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function touchEnd(e) {
				//element.addClass('touch-end');
				element.removeClass('touch-start');
				element.removeClass('touch-move');
			}
			
			//Apply if an iOS device
			if (window.iOS) { //jsHint ignore
				element.on('touchend', touchEnd);
		
				scope.$on('$destroy', function () {
					element.off('touchmove', touchEnd);
				});
			}
		}
    };
});