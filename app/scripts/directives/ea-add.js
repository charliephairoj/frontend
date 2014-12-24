
angular.module('employeeApp')
.directive('eaAdd', [function () {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			function callback(evt) {
				if ((evt.which == "65" && (evt.metaKey || evt.ctrlKey))) {
					evt.preventDefault();
					scope.$eval(attrs.eaAdd);
				}
      
			}
  
			$(window).on('keydown', callback);
  
			scope.$on('$destroy', function () {
				$(window).off('keydown', callback); 
			});
		}
	};
}]);
