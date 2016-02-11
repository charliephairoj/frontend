'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:numberFormat
 * @description
 * # numberFormat
 */
angular.module('employeeApp.directives')
.directive('numberFormatter', ['$filter', function ($filter) {
	var numberFilter = $filter('number');
    return {
      	restrict: 'A',
		require: 'ngModel',
      	link: function postLink(scope, element, attrs, ngModel) {
        	ngModel.$parsers.push(function (value) {
        		var value = Number(value.replace(',', ''));
				return value;
        	});
			
			element.on('blur', function () {
				setTimeout(function ( ) {
					ngModel.$setViewValue(numberFilter(ngModel.$modelValue));
					ngModel.$render();
				}, 250);
				
				
			});
			
			ngModel.$formatters.push(function (value) {
				return $filter('number')(value);
			});
     	 }
    };
}]);
