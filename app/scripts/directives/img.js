
angular.module('employeeApp')
.directive('img', [function () {
	
	function position(spec) {
		if (spec.height && spec.parentHeight && spec.elementHeight) {
			var heightDiff = spec.parentHeight - spec.elementHeight;
			spec.element.css('top', heightDiff / 2);
		} else if (spec.width && spec.parentWidth && spec.elementWidth) {
			var widthDiff = spec.parentWidth - spec.elementWidth;
			spec.element.css('left', widthDiff / 2);
		}
	}
	
	return {
		restrict: 'E',
		compile: function prelink(tElement, tAttrs) {
			if (!tElement.hasClass('logo')) {
				tElement.addClass('preloaded');
			}
			return {
				post: function postLink(scope, element, iAttrs) {
					//Add the preclass as soon as possible

					
					element.on('load', function () {
						if (iAttrs.center) {
							var parent = element.parent();
							var pWidth = parent.innerWidth();
							var pHeight = parent.innerWidth();
							position({
								element: element,
								width: true,
								parentWidth: pWidth,
								elementWidth: element.outerWidth()
							});
						}
						element.removeClass('preloaded');
					});
				}
			};
		}
	};
}]);
