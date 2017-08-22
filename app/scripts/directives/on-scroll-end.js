
angular.module('employeeApp')
.directive('onScrollEnd', ['$log', function ($log) {
	
	var scrollFactor = 0.6;
	
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var lastScrollTop = 0;
			console.log(attrs);
			element.bind('scroll', function (e) {
				
				var scrollTop = element.scrollTop();
				
				if (scrollTop > lastScrollTop) {
					lastScrollTop = scrollTop;
					
					if (scrollTop > element[0].scrollHeight * scrollFactor) {
						console.log(attrs.onScrollEnd);
						try {
							scope.$eval(attrs.onScrollEnd);
							
						} catch (err) {
							console.log(err);
							console.error("Missing a function for 'on-scroll-end'");
						}
					}
				}
				
			});
		}
	};
}]);
