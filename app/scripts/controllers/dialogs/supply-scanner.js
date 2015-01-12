'use strict';

angular.module('employeeApp')
.controller('DialogsSupplyScannerCtrl', ['$scope', 'Supply', 'Employee', 'scanner', '$rootScope', '$mdToast',
function ($scope, Supply, Employee, scanner, $rootScope, $mdToast) {
    
	$scope.supplies = [];
	
	$scope.scanner = new scanner('supply-scanner');
	
	try {
		window.globalScanner.disable();
	} catch (e) {
		
	}
	//Enable the scanner and disable the standard codes
	$scope.scanner.enable();
	$scope.scanner.disableStandard();
	
	//Remove the item from the list
	$scope.remove = function ($index) {
		$scope.supplies.splice($index, 1);
	};
	
	/*
	 * Register the supply code regex
	 */
	$scope.scanner.register(/^DRS-\d+$/, function (code) {
		$mdToast.show($mdToast.simple()
			.hideDelay(0)
			.position('top right')
			.content('Looking up supply...'));
		Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
			$scope.supplies.push(response);
			$mdToast.show($mdToast.simple()
				.hideDelay(2000)
				.position('top right')
				.content('Added ' + response.description + ' to checkout.'));
		}, function () {
			$mdToast.show($mdToast.simple()
				.hideDelay(0)
				.position('top right')
				.content('Unable to find supply.'));
		});
	});
	/*
	 * Register the upc regex
	 */
	$scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
		Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
			try {
				$scope.supplies.push(response[0]);
			} catch (e) {
				console.log(e);
			}
		}, function (reason) {
			console.log(reason);
		});
	});
	
	/*
	 *  Regiester the equipment code
	 */ 
	$scope.scanner.register(/^DRE-\d+$/, function (code) {
		//Notification.display("Looking up equipment", false);
		$scope.equipment = Equipment.get({id: code.split('-')[1]}, function (response) {
			//Notification.hide();
		}, function () {
			//Notification.display('Unable to find equipment.', false);
		});
	});
	
	$scope.$on('$destroy', function () {
		$scope.scanner.disable();
		window.globalScanner.enable();
	});
}]);
