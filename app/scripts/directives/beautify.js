
angular.module('employeeApp')
.directive('beautify', ['$filter', '$parse', function ($filter, $parse) {
	return {
		restrict: 'A', 
		link: function (scope, element, attr) {
			//bind to blur
            element.bind('blur', function () {
                //create new beautified version
                var beautifiedValue = $filter('beautify')(element.context.value);
                //apply to input
                element.context.value = beautifiedValue;
                //assign to model
                $parse(attr.ngModel).assign(scope, beautifiedValue);
            }); 
 
		}
	};
}]);
