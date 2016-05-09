'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DealsDetailsCtrl
 * @description
 * # DealsDetailsCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DealsDetailsCtrl', ['$scope', 'Deal', '$routeParams', 'Notification', '$timeout', '$log', function ($scope, Deal, $routeParams, Notification, $timeout, $log) {
    var updateLoopActive = false,
		timeoutPromise,
		currencySigns = {
			'THB':'฿',
			'EUR':'€',
			'USD':'$',
			'RMB':'¥',
			'SGD':'S$'
		};
	
	$scope.deal = Deal.get({'id': $routeParams.id}, function () {
		$scope.deal.last_contacted = new Date($scope.deal.last_contacted);
	});
	
	$scope.update = function () {
		Notification.display('Updating deal...', false);
		var deal = angular.copy($scope.deal);
		
		for (var i = 0; i < deal.customer.addresses.length; i++) {
			delete deal.customer.addresses[i].marker;
		}
		
		deal.$update(function () {
			updateLoopActive = false;
			Notification.display('Deal updated');
		}, function (e) { 
			updateLoopActive = false;
			$log.error(e);
			Notification.display('There was an error updating the deal');
		});
	}
	
	$scope.$watch(function () {
		var deal = angular.copy($scope.deal);
	
		delete deal.last_modified;
		delete deal.customer.last_modified;
		return deal;
	}, function (newVal, oldVal) {
		if (oldVal.hasOwnProperty('id') && !updateLoopActive) {
			updateLoopActive = true;
			timeoutPromise = $timeout($scope.update, 5000);
		}
	}, true);
	
	$scope.getCurrencySign = function (currency) {
		return currencySigns[currency];
	}
	
	$scope.$on('$destroy', function () {
		$scope.update();
	})
}]);
