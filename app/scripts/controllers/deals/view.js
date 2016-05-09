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
				
				
				/*
			 	 * CUSTOMER SECTION
				 *
				 * This section deals with the customer searching and what happens when a customer is selected
				*/
	
				// Watch on customerSearchText to get products from the server
				$scope.retrieveCustomers = function (query) {
					if (query) {
						Customer.query({q:query}, function (responses) {
							for (var i = 0; i < responses.length; i++) {
								if ($scope.customers.indexOfById(responses[i]) === -1) {
									$scope.customers.push(responses[i]);
								}
							}
						});
					}
				};
	
				/**
				 * Returns a list of customers whose name matches the query
				 * 
				 * @public
				 * @param {String} query - the string to search against the customer names
				 * @returns {Array} - An array of customes that matches the query
				 */
	
				$scope.searchCustomers = function (query) {
					var lowercaseQuery = angular.lowercase(query);
					var customers = [];
					for (var i = 0; i < $scope.customers.length; i++) {
						if (angular.lowercase($scope.customers[i].name).indexOf(lowercaseQuery) !== -1) {
							customers.push($scope.customers[i]);
						}
					}
		
					return customers;
				};
	
	
				/**
				 * Updates the customer name, so that if the customer is a new one, 
				 * a customer object is already in place to accept the new details
				 * 
				 * @public
				 * @param {String} customerName - Name of the Customer
				 * @returns {null} 
				 */
	
				$scope.updateCustomerName = function (customerName) {
					$scope.deal.customer = $scope.deal.customer || {name: '', addresses: []};
		
					if (!$scope.deal.customer.id) {
						$scope.deal.customer.name = customerName || '';
					} else {
						if ($scope.deal.customer.name.indexOf(customerName) == -1) {
							$scope.deal.customer = {name: customerName, addresses: []};
						}
					}
				};
	
	
	
				//Add customer and hide modal
			    $scope.addCustomer = function (customer) {
			        $scope.deal.customer = customer;
			    };
				
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
