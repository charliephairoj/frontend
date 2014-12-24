
angular.module('employeeApp')
.directive('customerList', ['Customer', 'Notification', 'KeyboardNavigation', '$rootScope', '$filter',
function (Customer, Notification, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/customer-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=customerList',
			onSelect: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
			/*
			* Initial fetching of the customers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
			scope.customers = Customer.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Customer.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.customers.indexOfById(resources[i].id) == -1) {
								scope.customers.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			/*
			 * Loads the next set of customers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					Notification.display("Loading more customers...", false);
					fetching = true;
					Customer.query({
						offset: scope.customers.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.customers.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.select = function (customer) {
				scope.onSelect({'customer': customer});
			};
			
			function filter(array) {
				return $filter('orderBy')($filter('filter')(scope.customers, scope.query), 'name');
			}
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = filter(scope.customers)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.customer.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < filter(scope.customers).length - 1) {
					index += 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onup = function () {
				if (index !== 0) {
					index -= 1;
					changeSelection(index);
				}
			};
			
			keyboardNav.onenter = function () {
				$rootScope.safeApply(function () {
					scope.select(currentSelection);
				});
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					keyboardNav.enable();
				} else {
					keyboardNav.disable();
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
			});
			
		}
    };
}]);
