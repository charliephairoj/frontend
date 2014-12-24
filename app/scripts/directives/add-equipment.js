
angular.module('employeeApp.directives')
.directive('addEquipment', ['$rootScope', 'Supplier', 'Supply', 'Notification', '$http', 'Equipment',
function ($rootScope, Supplier, Supply, Notification, $http, Equipment) {
	return {
		templateUrl: 'views/templates/add-equipment.html',
		replace: true,
		restrict: 'EA',
		scope: {
			'visible': '=addEquipment',
			'onAdd': '&'
		},
		link: function postLink(scope, element, attrs) {
			
			
			/*
			 * Vars and Properties
			 */
			scope.equipment = new Equipment();
			scope.descriptions = [
				{description:'F-50 Pnuematic Stapler', image: 'img/equipment/F50.jpg'},
				{description: 'F-30 Pnuematic Stapler', image: "img/equipment/F30.jpg"},
				{description: 'J-1022 Pnuematic Stapler', image: "img/equipment/J1022.jpg"},
				{description: 'ST-64 Pneumatic Stapler', image: "img/equipment/ST64.jpg"},
				{description: 'Electric Hand Drill', image: "img/equipment/hand_drill.jpg"},
				{description: 'Electric Jigsaw', image: "img/equipment/jigsaw.jpg"},
				{description: 'Electric Router', image: "img/equipment/router.jpg"},
				{description: 'Polisher', image: "img/equipment/polisher.jpg"},
				{description: 'Electric Sander', image: "img/equipment/electric_sander.jpg"}
			];
			scope.brands = [
				'Maktec',
				'Red King',
				'King',
				'DMax',
				'Puma',
				'Ken',
				'Jumbo',
				'Makita',
				'Bosch',
				'BEC',
				'Unknown'
			];
			scope.statuses = [
				'checked out',
				'checked in',
				'repair'
			];
			scope.showDescription = false;
			
			/*
			 * Set Description
			 */
			scope.selectDescription = function (description) {
				scope.equipment.description = description.description;
				scope.showDescription = false;
			};
			
			/* 
			 * Create a new Equipment by sending to server
			 */
			scope.add = function(equipment) {
				if (scope.form.$valid && scope.equipment.description) {
					Notification.display("Adding new " + scope.description + "...", false);
					scope.equipment.$create(function () {
						Notification.display(scope.description + " Added.");
						scope.equipment = new Equipment();
					}, function () {
						Notication.display("Could not add " + scope.description, false);
					});
				}
			};

			scope.addImage = function (data) {
				scope.equipment.image = data;
			};
			
	
		}
	};
}]);
