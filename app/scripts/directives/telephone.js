
angular.module('employeeApp.directives')
.directive('telephone', ['$filter', '$parse', function ($filter, $parse) {
	return {
		restrict: 'A', 
		link: function (scope, element, attr) {
			//bind to blur
            element.bind('blur', function () {
                //create new beautified version
                var filteredValue = $filter('telephone')(element.context.value);
                //apply to input
                element.context.value = filteredValue;
                //assign to model
                $parse(attr.ngModel).assign(scope, filteredValue);
            });
		}
	};
}]);
