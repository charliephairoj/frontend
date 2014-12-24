
angular.module('employeeApp')
.directive('supplierList', ['Supplier', 'Notification', 'KeyboardNavigation', '$rootScope', '$filter',
function (Supplier, Notification, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/supplier-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=supplierList',
			onSelect: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true,
				currentSelection,
				index = 0;
			
			/*
			* Initial fetching of the suppliers.
			* 
			* We will turn the fetching flag to false
			* once we received the results
			*/
			scope.suppliers = Supplier.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Supplier.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.suppliers.indexOfById(resources[i].id) == -1) {
								scope.suppliers.push(resources[i]);
							}
						}
						index = 0;
						changeSelection(index);
					});
				}
			});
			/*
			 * Loads the next set of suppliers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					Notification.display("Loading more suppliers...", false);
					fetching = true;
					Supplier.query({
						offset: scope.suppliers.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.suppliers.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.select = function (supplier) {
				scope.onSelect({'$supplier': supplier});
			};
			
			function filter(array) {
				return $filter('orderBy')($filter('filter')(scope.suppliers, scope.query), 'name');
			}
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = filter(scope.suppliers)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.supplier.selected');
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
				if (index < filter(scope.suppliers).length - 1) {
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
