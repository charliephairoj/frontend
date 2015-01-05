
angular.module('employeeApp.directives')
.directive('addSupply', ['$rootScope', 'Supplier', 'Supply', 'Notification', '$http',
function ($rootScope, Supplier, Supply, Notification, $http) {
	return {
		templateUrl: 'views/templates/add-supply.html',
		replace: true,
		restrict: 'EA',
		scope: {
			'visible': '=addSupply',
			'onAdd': '&',
			'assignedSupplier': '=supplier'
		},
		require: '?supplyList',
		link: function postLink(scope, element, attrs, supplyListCtrl) {
			
			
			/*
			 * Vars and Properties
			 */
			
			scope.types = {};
			
			$http.get('/api/v1/supply/type').then(function (response) {
				for (var i = 0; i < response.data.length; i++) {
					if (response.data[i] && response.data[i] != 'custom' && !scope.types[response.data[i].toLowerCase()]){
						scope.types[response.data[i]] = response.data[i].toLowerCase();
					}
				}
			});
			
			scope.$watch('assignedSupplier', function (val){
				if (val) {
					scope.supply.supplier = angular.copy(val);
				}
			});
			
			//Request suppliers via get if not already assigned
			scope.$watch('visible', function (val) {
				if (val && !scope.supplier) {
					scope.suppliers = scope.suppliers || Supplier.query({limit: 0});
				}
			});
		
			
			/*
			 * Watch the supplier scope in case a supplier is assigned
			 */
			
			scope.showWidth = function () {
				var units = scope.supply.units;
				var type = scope.supply.type;
				return scope.supply.new_supply ? (units === "m" || units === "pc" || units === "pack" || units === "yd" ||
				(units === "kg" && type === "packaging") ? true : false) : false;
			};
			
			scope.showDepth = function () {
				var units = scope.supply.units;
				return scope.supply.new_supply ? (units === "pc" || units === "pack" ? true : false) : false;
			};
			
			scope.showHeight = function () {
				var units = scope.supply.units;
				var type = scope.supply.type;
				return scope.supply.new_supply ? (units === "pc" || units === "pack" ||
				(units === "kg" && type === "packaging") ? true : false) : false;
			};
			
			scope.supply = new Supply();
			scope.supply.units = 'pc';
			
			scope.selectSupply = function (supply) {
				$rootScope.safeApply(function () {
					angular.extend(scope.supply, supply);
				});
			};
			
			scope.add = function () {
				if (scope.form.$valid) {
					Notification.display('Creating supply...', false);
					//Moves the supply and adds the the supplier array
					scope.supply.suppliers = scope.supply.suppliers || [];
					if (scope.supply.suppliers.indexOfById(scope.supply.supplier)) {
						var supplier_data = scope.supply.supplier;
						supplier_data.supplier = {'id': supplier_data.id};
						delete supplier_data.id;
						scope.supply.suppliers.push(supplier_data);
					}
					delete scope.supply.supplier;
					
					//Decides whether to update or create based on presence of id
					if (scope.supply.hasOwnProperty('id')) {
						scope.supply.$update(function (response) {
							scope.visible = false;
							scope.onAdd({$supply:scope.supply});
							scope.supply = new Supply();
							Notification.display('Supply created');
							
							if (scope.assignedSupplier) {
								scope.supply.supplier = angular.copy(scope.assignedSupplier);
							}
							
						}, function (reason) {
							console.error(reason);
						});
					} else {
						scope.supply.$create(function (response) {
							Notification.display('Supply created');
							scope.visible = false;
							scope.onAdd({$supply:scope.supply});
							scope.supply = new Supply();
							
							if (scope.assignedSupplier) {
								scope.supply.supplier = angular.copy(scope.assignedSupplier);
							}
							
						}, function (reason) {
							console.error(reason);
							Notification.display('There was an error in creating the supply', false);
						});
					}
				} else {
					Notification.display('Please fill out the form properly');
				}
			};

			scope.addImage = function (data) {
				scope.supply.image = data;
			};
			
	
		}
	};
}]);
