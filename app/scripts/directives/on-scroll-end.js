
angular.module('employeeApp')
.directive('onScrollEnd', ['$log', function ($log) {
	
	var scrollFactor = 0.5;
	
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			var lastScrollTop = 0;
			console.log(attrs);
			console.log(element);
			element.bind('scroll', function (e) {
				
				var scrollTop = element.scrollTop();
				console.log(element[0].scrollHeight);
				if (scrollTop > lastScrollTop) {
					lastScrollTop = scrollTop;
					console.log(scrollTop, element[0].offsetHeight * scrollFactor);
					if (scrollTop > element[0].offsetHeight * scrollFactor) {
						console.log(attrs.onScrollEnd);
						try {
							scope.$eval(attrs.onScrollEnd);
							
						} catch (err) {
							console.log(err);
							console.error("Missing a function for 'on-scroll-end'");
						}
					}
				} else if (scrollTop < lastScrollTop) {
					lastScrollTop = scrollTop;
				}
				
			});
		}
	};
}]);
