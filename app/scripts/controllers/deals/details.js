'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DealsDetailsCtrl
 * @description
 * # DealsDetailsCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DealsDetailsCtrl', ['$scope', 'Deal', '$routeParams', 'Notification', '$timeout', '$log', '$rootScope',
function ($scope, Deal, $routeParams, Notification, $timeout, $log, $rootScope) {
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
		occurred_at: new Date()
	};
	$scope.deal = Deal.get({'id': $routeParams.id});

	$scope.addEvent = function (event) {
		var description = "You "
		description += event.type;

        if (event.contact) {
            description += " " + event.contact.name;
        } else {
            description += " " + $scope.deal.customer.name;
        }

		$scope.deal.events.push({
			description: description,
			notes: event.notes,
			occurred_at: event.occurred_at

		});

		$scope.newEvent = {occurred_at: new Date()};
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

			$rootScope.safeApply(function () {
				angular.copy(resp, $scope.deal);
			});
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
		$scope.deal.update();
	})
}]);
