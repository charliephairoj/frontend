'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:deal
 * @description
 * # deal
 */
angular.module('employeeApp.directives')
.directive('purchaseOrder', [function () {
	return {
		templateUrl: 'views/templates/purchase-order.html',
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

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

		}
	};
}]);
