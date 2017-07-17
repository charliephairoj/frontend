'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('acknowledgement', [function () {
	return {
		templateUrl: 'views/templates/acknowledgement.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {
			scope.status = false;
			var currencySigns = {
				'THB':'฿',
				'EUR':'€',
				'USD':'$',
				'RMB':'¥',
				'SGD':'S$'
			};
			
			scope.getCurrencySign = function (currency) {
				return currencySigns[currency];
			}

			if (attrs.hasOwnProperty('status')) {
				scope.status = true;
			};
			
		}
	};
}]);
