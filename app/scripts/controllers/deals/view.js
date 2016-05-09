'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DealCtrl
 * @description
 * # DealCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DealCtrl', ['$scope', 'Deal', '$mdDialog', 'Customer', 'Notification', function ($scope, Deal, $mdDialog, Customer, Notification) {
	
	$scope.deals = Deal.query();
	$scope.customers = Customer.query({limit:0, offset:0, page_size:99999});
	/*
	var statuses = [
		'opportunity',
		'qualified', 
		'meeting',
		'proposal',
		'closed won',
		'closed lost'
	]
	var index = 0;
	
	for (var i = 0; i < 120; i++) {
		var deal = new Deal();
		deal.status = statuses[index];
		deal.id = i;
		$scope.deals.push(deal);
		index ++;
		index = index % 6 == 0 ? 0 : index;
	}
	*/
	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showCreateDeal = function () {
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-deal.html',
			controllerAs: 'ctrl',
			locals: {
				'customers': $scope.customers,
				'deals': $scope.deals
			},
			controller: function ($scope, $mdDialog, customers, deals) {
				$scope.deal = new Deal();
				$scope.customers = customers;
				
				$scope.create = function () {
					$mdDialog.hide();
					Notification.display("Creating new deal with " + $scope.deal.customer.name, false);
					$scope.deal.$create(function () {
						Notification.display('Deal with ' + $scope.deal.customer.name + ' created.', 2000);
						deals.push(angular.copy($scope.deal));
					}, function (e) {
						Notification.display(e, false);
					});
				};
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			},
			clickOutsideToClose: true
		});
	}
	
	
    $scope.updateStage = function (deal, status) {
		var index = $scope.deals.indexOfById(deal);
		if (index > -1) {
			$scope.deals[index].status = status;
			$scope.deals[index].$update();
		}
    }
}]);
