
angular.module('employeeApp.directives')
.directive('addSupplier', ['$rootScope', 'Supplier', '$mdToast', 
function ($rootScope, Supplier, $mdToast) {
	return {
		templateUrl: 'views/templates/add-supplier.html',
		replace: true,
		restrict: 'EA',
		scope: {'visible': '=addSupplier',
				'onAdd': '&'},
		link: function postLink(scope, element, attrs) {
			
            scope.supplier = new Supplier();
            scope.contact = {};
			
			/*
			 * Tips for the form
			 * 
			 * A list of tooltip texts for help the user navigate the form
			 */
			scope.nameTip = "What is the supplier's name (required)";
			scope.thaiNameTip = "Enter the supplier's name in Thai";
			scope.emailTip = "Enter a valid email address (required)";
            scope.telTip = "Enter a valid phone number (required)";
            scope.currencyTip = "What currency does this supplier deal in? (required)";
            scope.discountTip = "What discount do we get? (required)";
            scope.termsTip = "How many days of credit do we get? (required)";
            scope.addrTip = "What is the supplier's address (required)";
            scope.cityTip = "What city is the supplier in? (required)";
            scope.territoryTip = "What chaengwat/territory/state is the supplier in? (required)";
            scope.countryTip = "What country is the supplier in? (requied)";
            scope.zipcodeTip = "What zipcode is the supplier in? (required)";
            
            scope.addContact = function (contact) {
				scope.supplier.contacts = scope.supplier.contacts || [];
				if (scope.supplier.contacts.length === 0) {
					contact = contact || scope.contact;
					contact.primary = true;
				}
				scope.supplier.contacts.push(contact);
				scope.contact = {};	
            };
			
			scope.validation = function () {
				var primary = [];
				for (var i = 0; i < (scope.supplier.contacts && scope.supplier.contacts.length); i++) {
					if (scope.supplier.contacts[i].primary) {
						primary.append(scope.supplier.contacts[i]);
					}
				}
				
				if (primary.length != 1) {
					throw ValueError("There can only be 1 primary contact");
				}
			};
            
			scope.add = function () {
				try {
					if (scope.form.$valid) {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('Creating supplier...'));

						scope.supplier.$save(function (response) {
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(2000)
								.content('Supplier created.'));
							
							//Call on add
							scope.onAdd({$supplier:scope.supplier});
							
							//Reset to before add
							scope.visible = false;
							scope.supplier = new Supplier();
						}, function (reason) {
							console.error(reason);
							$mdToast.show($mdToast.simple()
								.position('top right')
								.hideDelay(0)
								.content('There was an error in creating the supplier'));
						});
					} else {
						$mdToast.show($mdToast.simple()
							.position('top right')
							.hideDelay(0)
							.content('Please fill out the form properly'));
					}
				} catch (e) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content(e));
				}
			};
		}
	};
}]);
