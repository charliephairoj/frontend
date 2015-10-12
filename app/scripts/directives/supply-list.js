
angular.module('employeeApp')
.directive('supplyList', ['Supply', '$filter', 'KeyboardNavigation', '$mdToast', '$rootScope', '$http', '$compile',
function (Supply, $filter, KeyboardNavigation, $mdToast, $rootScope, $http, $compile) {
	return {
		templateUrl: 'views/templates/supply-list.html',
		replace: true,
		restrict: 'A',
		scope: {
			visible: '=supplyList',
			onSelect: '&',
			supplier: '=',
			newSupply: '='
		},
		compile: function compile(tElement, tAttrs, transclude) {
			return {

				post: function postLink(scope, element, attrs) {
					var fetching = true,
						supplierId,
						currentSelection,
						index = 0;
			
					var promise = $http.get('/api/v1/supply/type/');
					promise.success(function (d) {
						scope.types = d;
						scope.types.splice(scope.types.indexOf(null), 1);
					});

					/*
					* Initial fetching of the supplies.
					* 
					* We will turn the fetching flag to false
					* once we received the results
					*/
					if (attrs.supplier) {
						scope.$watch('supplier', function (val) {
							if (val) {
								supplierId = val.id;
								scope.supplies = Supply.query({supplier_id: val.id, limit: 20}, function (response) {
									fetching = false;
									changeSelection(index);
								});
							}
						});
					} else {
						scope.supplies = Supply.query({limit: 20}, function (response) {
							fetching = false;
							changeSelection(index);
						});
					}
			
					/*
					 * Search
					 */
					scope.$watch('query', function (q) {
						if (q) {
							var options = {
								q: q, 
								limit: 10 + (q.length * 2)
							};
							
							if (supplierId) {
								options.supplier_id = supplierId;
							}
							
							Supply.query(options, function (resources) {
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i].id) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
								index = 0;
								changeSelection(index);
							});
						}
					});
			
					/*
					 * Watch for new items to add
					 */
					scope.$watch('newSupply', function (supply) {
						if (supply instanceof Supply) {
							scope.supplies = scope.supplies || [];
							if (scope.supplies.indexOfById(supply.id) == -1) {
								scope.supplies.push(supply);
							}
						}
					});
			
					/*
					 * Loads the next set of supplies if there is no fetching
					 * currently running
					 */
					scope.loadNext = function () {
						fetching = false;
						if (!fetching) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(0)
								.content('Loading more supplies...'));
							fetching = true;
					
							var options = {
								offset: scope.supplies.length,
								limit: 50
							};
					
							//Set Supplier ID
							if (supplierId) {
								options.supplier_id = supplierId;
							}

							Supply.query(options, function (resources) {
								fetching = false;
								$mdToast.hide();
								for (var i = 0; i < resources.length; i++) {
									if (scope.supplies.indexOfById(resources[i]) == -1) {
										scope.supplies.push(resources[i]);
									}
								}
							});
						}
					};
			
					/*
					 * The function to run when a customer is selected
					 */
					scope.select = function (supply) {
						scope.onSelect({'$supply': supply});
					};
			
					function filter(array) {
						return $filter('filter')(array, scope.query);
					}
					function changeSelection(i) {
				
						$rootScope.safeApply(function () {
							if (currentSelection) {
								currentSelection.$selected = false;
							}
					
							currentSelection = filter(scope.supplies)[i];
					
							if (currentSelection) {
								currentSelection.$selected = true;
							}
						});
			
						var selection = $('.supply.selected');
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
						if (index < filter(scope.supplies).length - 1) {
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
		        
		}
    };
}]);
