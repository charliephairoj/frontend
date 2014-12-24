
angular.module('employeeApp')
.directive('tableList', ['Table', 'Notification', 'KeyboardNavigation', '$rootScope', '$filter',
function (Table, Notification, KeyboardNavigation, $rootScope, $filter) {
	return {
		templateUrl: 'views/templates/table-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			onSelect: '&',
			visible: '='
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
			scope.tables = Table.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Table.query({q: q, limit: 10}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.tables.indexOfById(resources[i].id) == -1) {
								scope.tables.push(resources[i]);
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
					Notification.display("Loading more tables...", false);
					fetching = true;
					Table.query({
						offset: scope.tables.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.tables.push(resources[i]);
						}
						if (resources.length === 0) {
							fetching = true;
						}
					});
				}
			};

			scope.select = function (table) {
				scope.onSelect({$table: table});
			};
			
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = $filter('filter')(scope.tables, scope.query)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.table.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			scope.select = function (table) {
				scope.onSelect({$table: table});
			};
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < $filter('filter')(scope.tables, scope.query).length - 1) {
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
			
			keyboardNav.enable();
			
			scope.$watch('visible', function (val) {
				console.log(val);
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
