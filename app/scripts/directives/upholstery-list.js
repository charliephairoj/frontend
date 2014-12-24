
angular.module('employeeApp')
.directive('upholsteryList', ['Upholstery', 'Notification', '$filter', 'KeyboardNavigation', '$rootScope',
function (Upholstery, Notification, $filter, KeyboardNavigation, $rootScope) {
	return {
		templateUrl: 'views/templates/upholstery-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			onSelect: '&',
			safeApply: '&',
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
			scope.upholsteries = Upholstery.query({limit: 20}, function (response) {
				fetching = false;
				changeSelection(index);
			});

			/*
			* Search
			*/
			scope.$watch('query', function (q) {
				if (q) {
					scope.currentIndex = 0;
					Upholstery.query({q: q, limit: 10 + (scope.query.length * 2)}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.upholsteries.indexOfById(resources[i].id) == -1) {
								scope.upholsteries.push(resources[i]);
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
					Notification.display("Loading more upholsteries...", false);
					fetching = true;
					Upholstery.query({
						offset: scope.upholsteries.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.upholsteries.push(resources[i]);
						}
					});
				}
			};
			
			
			
			
			function changeSelection(i) {
				
				$rootScope.safeApply(function () {
					if (currentSelection) {
						currentSelection.$selected = false;
					}
					
					currentSelection = $filter('filter')(scope.upholsteries, scope.query)[i];
					
					if (currentSelection) {
						currentSelection.$selected = true;
					}
				});
			
				var selection = $('.upholstery.selected');
				var container = selection.parents('.inner-container');
				var scrollTop = container.scrollTop();
				var cHeight = container.innerHeight();
				
				
				if (scrollTop > (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
					container.scrollTop(selection.outerHeight() * i);
				}
				
			}
			
			scope.select = function (upholstery) {
				scope.onSelect({$upholstery: upholstery});
			};
			
			var keyboardNav = new KeyboardNavigation();
			
			keyboardNav.ondown = function () {
				if (index < $filter('filter')(scope.upholsteries, scope.query).length - 1) {
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
