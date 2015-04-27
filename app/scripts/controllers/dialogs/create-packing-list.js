
/**
 * @ngdoc function
 * @name frontendApp.controller:DialogsCreatePackingListCtrl
 * @description
 * # DialogsCreatePackingListCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('DialogsCreatePackingListCtrl', 
['$scope', '$mdDialog', 'Room', 'Shipping', function ($scope, $mdDialog, Room, Shipping) {
	
	function getRoomDetails() {
		for (var i = 0; i < $scope.project.rooms.length; i++) {
			var room = Room.get({id: $scope.project.rooms[i].id}, function (resp) {
				angular.extend($scope.project.rooms[$scope.project.rooms.indexOfById(resp)], resp);
			});
		}
	}
	
	setTimeout(function () {
		$scope.project = this.project;
		getRoomDetails();
		
		
	}.bind(this))
	/*
	 * Complete adding packing list process and close the dialog 
	 */
	$scope.completeAddPacking = function () {
		var shipping = new Shipping();
		shipping.phase = $scope.phase;
		shipping.project = $scope.project;
		shipping.items = [];
		
		for (var i = 0; i < $scope.project.rooms.length; i++) {
			
			for (var h = 0; h < $scope.project.rooms[i].items.length; h++) {
				
				for (var j = 0; j < $scope.project.rooms[i].items[h].parts.length; j++) {
					shipping.items.push($scope.project.rooms[i].items[h].parts[j]);
				}
			}
		}
		
		$mdDialog.hide();
		
		shipping.$create(function (resp) {
			console.log(resp);
		});
	};
	
	/*
	 * Cancel create a packing list 
	 */
	$scope.cancelAddPacking = function () {
		$mdDialog.hide();
		$scope.room = new Room();
	};
}]);
