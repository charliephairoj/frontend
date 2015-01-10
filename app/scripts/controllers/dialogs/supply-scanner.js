'use strict';

angular.module('employeeApp')
.controller('DialogsSupplyScannerCtrl', ['$scope', 'Supply', 'Employee', 'scanner',
function ($scope, Supply, Employee, scanner) {
	Employee.query({q:'apaporn'}, function (r) {
		$scope.employee = r[0];
	});
    $scope.supplies = Supply.query({q:'screw'});
	
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
		//Notification.display("Looking up supply...", false);

		Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
			$scope.supplies.push(response);
			//Notification.hide();
		}, function () {
			//Notification.display('Unable to find supply.', false);
			/*
			scope.supply = Supply.get({id:code}, function () {
				Notification.display('Unable to find supply', false);
			});
			*/
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
