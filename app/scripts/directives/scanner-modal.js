
angular.module('employeeApp.directives')
.directive('supplyScannerModal', ['scanner', 'Supply', '$mdToast', 'KeyboardNavigation', '$timeout', '$rootScope', 'Equipment',
function (scanner, Supply, $mdToast, KeyboardNavigation, $timeout, $rootScope, Equipment) {
	return {
		templateUrl: 'views/templates/supply-scanner-modal.html',
		restrict: 'A',
		replace: true,
		scope: {
			'visible': '=supplyScannerModal'
		},
		link: function postLink(scope, element, attrs) {
			/*
			 * Vars
			 */
			var keyboardNav = new KeyboardNavigation();
			scope.action = 'subtract';
			scope.disabled = false;
			scope.scanner = new scanner('supply-scanner-modal');
			scope.equipment = {description: 'F-50', brand: 'Red King'};
			scope.interfaceType = 'equipment';

			var focusOnQuantity = function () {
				var quantity = element.find('input');
				quantity.focus();
				quantity.val('');
			};
			
			scope.fractSize = function () {
				return scope.supply ? scope.supply.units == 'pc' ? 0 : 2 : 2;
			};
			
			/*
			 * Watchers
			 */
			/*
			 * This is a hack to rememdy that I cannot
			 * add an ng-class to the main tag of this
			 * directive
			 */
			scope.$watch('showAddImage', function (val) {
				if (val) {
					element.addClass('add-image');
				} else {
					element.removeClass('add-image');
				}
			});
			
			/*
			 * Add Image
			 * 
			 * Updates the image of the currently selected supply
			 */
			scope.addImage = function (data) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Updating the supply's image"));	

				var image = data.hasOwnProperty('data') ? data.data : data;
				scope.supply.image = image;
				scope.supply.$update(function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(2000)
						.position('top right')
						.content("Supply's image updated."));
				});
			};
			
			scope.interfaceType = 'supply';
			
			scope.changeQuantity = function (quantity) {
				quantity = quantity || scope.quantity;
				if (scope.supply.hasOwnProperty('id') && quantity > 0 && !scope.disabled) {
					//Verifies that quantity change will not result in negative quantity
					if (scope.action == 'subtract' && scope.supply.quantity - quantity < 0) {
						throw Error("Cannot have a negative quantity");
					}
					
					scope.disabled = true;
										
					//Determines wheather to add or subtract quantity from original quantity
					if (scope.action == 'subtract') {
						scope.supply.quantity -= Number(quantity);
					} else if (scope.action == 'add') {
						scope.supply.quantity += Number(quantity);
					}
					
					scope.supply.$update({'country': $rootScope.country}, function () {
						$mdToast.show($mdToast.simple()
							.hideDelay(2000)
							.position('top right')
							.content('Quantity of ' + scope.supply.description + ' changed to ' + scope.supply.quantity));

						scope.quantity = 0;
						$timeout(function () {
							scope.supply = undefined;
						}, 1500);
					}, function (e) {
						$mdToast.show($mdToast.simple()
							.hideDelay(2000)
							.position('top right')
							.content(e));
					});
				}
			};
			
			/*
			 * Register the supply code regex
			 */
			scope.scanner.register(/^DRS-\d+$/, function (code) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Looking up supply"));

				scope.interfaceType = 'supply';
				scope.supply = Supply.get({id: code.split('-')[1], 'country': $rootScope.country}, function (response) {
					scope.disabled = false;
					Notification.hide();
					focusOnQuantity();
				}, function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content("Unable to find supply."));
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
			scope.scanner.register(/^\d+(\-\d+)*$/, function (code) {
				scope.interfaceType = 'supply';
				Supply.query({upc: code, 'country': $rootScope.country}, function (response) {
					scope.disabled = false;
					focusOnQuantity();
					try {
						scope.supply = response[0];
					} catch (e) {
					}
				}, function (reason) {

				});
			});
			
			/*
			 *  Regiester the equipment code
			 */ 
			scope.scanner.register(/^DRE-\d+$/, function (code) {
				$mdToast.show($mdToast.simple()
					.hideDelay(0)
					.position('top right')
					.content("Looking up equipment."));
				scope.interfaceType = 'equipment';
				scope.equipment = Equipment.get({id: code.split('-')[1]}, function (response) {
					scope.disabled = false;
					$mdToast.hide();
				}, function () {
					$mdToast.show($mdToast.simple()
						.hideDelay(0)
						.position('top right')
						.content("Unable to find equipment."));
				});
			});
			
			/*
			 * Sets navigation
			 */
			function changeAction(action) {
				if (scope.$$phase === '$digest' || scope.$$phase === '$apply') {
					scope.action = action;
				} else {
					scope.$apply(function () {
						scope.action = action;
					});
				}
				
			}
			
			keyboardNav.onright = function () {
				changeAction('subtract');
			};
			
			keyboardNav.onleft = function () {
				changeAction('add');
			};
			
			keyboardNav.onenter = function () {
				scope.changeQuantity(scope.quantity);
			};
			
			scope.$watch('visible', function (val) {
				if (val) {
					//Disable the global scanner
					try {
						window.globalScanner.disable();
					} catch (e) {
						
					}
					
					//Enable the scanner and disable the standard codes
					scope.scanner.enable();
					keyboardNav.enable();
					scope.scanner.disableStandard();
					
					
				} else {
					scope.scanner.disable();
					keyboardNav.disable();
					scope.scanner.enableStandard();
					scope.showAddImage = false;
				}
			});
			
			scope.$on('$destroy', function () {
				keyboardNav.disable();
				scope.scanner.disable();
				scope.showAddImage = false;
			});
			
		
		}
	};
}]);
