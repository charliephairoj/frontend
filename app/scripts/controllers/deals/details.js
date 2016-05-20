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
		
	$scope.newEvent = {
		occured_at: new Date()
	};
	$scope.deal = Deal.get({'id': $routeParams.id}, function () {
		$scope.deal.last_contacted = new Date($scope.deal.last_contacted);
	});
	
	$scope.addEvent = function (event) {
		var description = "You "
		description += event.type;
		description += " " + event.contact.name;
		
		$scope.deal.events.push({
			description: description,
			notes: event.notes,
			occured_at: event.occured_at
			
		});
		$scope.update();
		$scope.newEvent = {occured_at: new Deal()};
	};
	
	$scope.update = function () {
		Notification.display('Updating deal...', false);
		var deal = angular.copy($scope.deal);
		
		for (var i = 0; i < deal.customer.addresses.length; i++) {
			delete deal.customer.addresses[i].marker;
		}
		
		deal.$update(function (resp) {
			updateLoopActive = false;
			Notification.display('Deal updated');
			angular.merge($scope.deal, resp);
		}, function (e) { 
			updateLoopActive = false;
			$log.error(e);
			Notification.display('There was an error updating the deal');
		});
	}
	
	$scope.$watch(function () {
		var deal = angular.copy($scope.deal);
	
		delete deal.last_modified;
		try{
			delete deal.customer.last_modified;
		} catch (e) {
			
		}
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
