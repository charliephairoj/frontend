
angular.module('employeeApp')
.directive('fabricSelector', ['Fabric', 'Notification', '$parse', function (Fabric, Notification, $parse) {
	return {
		templateUrl: 'views/templates/fabric-selector.html',
		replace: true,
		restrict: 'A',
		scope: {
			product: '=',
			onComplete: '&'
		},
		link: function postLink(scope, element, attrs) {
			var fetching = true;

			/*
			 * Initial fetching of the customers.
			 * 
			 * We will turn the fetching flag to false
			 * once we received the results
			 */
			scope.fabrics = Fabric.query(function (response) {
				fetching = false;
			});
			
			/*
			 * Search
			 */
			scope.$watch('query', function (q) {
				if (q) {
					Fabric.query({q: q, limit: 5}, function (resources) {
						for (var i = 0; i < resources.length; i++) {
							if (scope.fabrics.indexOfById(resources[i].id) == -1) {
								scope.fabrics.push(resources[i]);
							}
						}
					});
				}
			});
			
			/*
			 * Loads the next set of customers if there is no fetching
			 * currently running
			 */
			scope.loadNext = function () {
				if (!fetching) {
					Notification.display("Loading more fabrics...", false);
					fetching = true;
					Fabric.query({
						offset: scope.fabrics.length,
						limit: 50
					}, function (resources) {
						fetching = false;
						Notification.hide();
						for (var i = 0; i < resources.length; i++) {
							scope.fabrics.push(resources[i]);
						}
					});
				}
			};
			
			/*
			 * The function to run when a customer is selected
			 */
			scope.done = function () {
				scope.onComplete();
			};
			
			function parseKeydown(evt) {
				if (evt.which === 13) {
					scope.$apply(function () {
						scope.done();
					});
				}
			}
			
			$(window).on('keydown', parseKeydown);
			
			scope.$on('$destroy', function () {
				$(window).off('keydown', parseKeydown);
			});
		}
	};
}]);
