
angular.module('employeeApp')
.controller('ProjectRoomDetailsCtrl', ['$scope', 'Room', '$routeParams', 'Notification', '$mdDialog', 'RoomItem',
function ($scope, Room, $routeParams, Notification, $mdDialog, RoomItem) {
    
    $scope.room = Room.get({id: $routeParams.id});
	$scope.item = new RoomItem();
 
	/*
	 * Create dialog to add item
	 */
	$scope.showAddItem = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-room-item.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Add files to the current item
	 */
	$scope.addItemFiles = function ($file) {
		$scope.item.files = $scope.item.files || [];
		$scope.item.files.push($file);
	}
	
	/*
	 * Complete adding item process and close the dialog 
	 */
	$scope.completeAddItem = function () {
		$mdDialog.hide();
		var item = angular.copy($scope.item);
		item.room = $scope.room;
		$scope.item = new RoomItem();
		item.$create(function (resp) {
			$scope.room.items = $scope.room.items || [];
			$scope.room.items.push(resp);
		});
	};
	
	/*
	 * Cancel adding a item 
	 */
	$scope.cancelAddItem = function () {
		$mdDialog.hide();
		$scope.item = new RoomItem();
	};
	
}]);
