
angular.module('employeeApp')
.directive('touchselect', ['$location', function ($location) {
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			
			//Flags
			var started = false,
				moved = false;
							
			//Handlers
			function click(e) {
			
				e.preventDefault();
				e.stopPropagation();
			
			}

			function touchStart() {
				console.log('touched');
				started = true;
			}
		
			function touchMove() {
				console.log('moved');
				moved = true;
			}
		 
			function touchEnd() {
				if (started && !moved) {
					console.log('time to click');
					var url = attrs.ngHref || attrs.href;
					
					scope.safeApply(function () {
						$location.path(url);
					});
					element.click();
				}
			
				started = false;
				moved = false;
			}
			
			if (window.iOS) {
			
				
						
				element.on('click', click);
				element.on('touchstart', touchStart);
				element.on('touchmove', touchMove);
				element.on('touchend', touchEnd);
			
				//Release the event handlers
				scope.$on('$destroy', function () {
					element.off('click', click);
					element.off('touchstart', touchStart);
					element.off('touchmove', touchMove);
					element.off('touchEnd', touchEnd);
				});
				
			}
		}
    };
}]);
