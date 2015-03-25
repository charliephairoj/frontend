
angular.module('employeeApp')
.controller('ProjectRoomDetailsCtrl', ['$scope', 'Room', '$routeParams', 'Notification', '$mdDialog', 'RoomItem', 'FileUploader', '$timeout', '$mdToast', 'Phase', 'ProjectItemPart',
function ($scope, Room, $routeParams, Notification, $mdDialog, RoomItem, FileUploader, $timeout, $mdToast, Phase, Part) {
    
	var timeoutPromise = {};
    $scope.room = Room.get({id: $routeParams.id}, beginWatch);
	$scope.room.items = $scope.room.items || [];
	$scope.item = new RoomItem();
 
 	function setTimeoutFactory(item, i) {
		timeoutPromise[i] = setTimeout(function(item) {
			$mdToast.show($mdToast.simple()
				.hideDelay(0)
				.position('top right')
				.content("Saving " + item.description + "..."));
			
			item = new RoomItem(angular.copy(item));
			
			function callback() {
				$mdToast.show($mdToast.simple()
					.hideDelay(2000)
					.position('top right')
					.content(item.description + " saved."));
			}
			
			item.id ? item.$update(callback) : item.$create(callback); //jshint ignore:line
				
		}, 2000, item);
 	}
	
 	/*
	 * Watch the items
	 */
	function beginWatch() {
		$scope.$watch('room.items', function (newVal, oldVal) {
			if (newVal.length === oldVal.length) {
				for (var i = 0; i < newVal.length; i++) {
					if (!angular.equals(newVal[i], oldVal[i])) {
						clearTimeout(timeoutPromise[i]);
						setTimeoutFactory(newVal[i], i);	
					}
				}
			}
			
		}, true);
	}
	
	/*
	 * Add files to the current item
	 */
	$scope.addListedItemFiles = function ($files, $index) {
				
		$scope.room.items[$index].files = $scope.room.items[$index].files || [];
		
		/* jshint ignore:start */
		for (var i = 0; i < $files.length; i++) {
			//$scope.room.items[$index].files.push({filename: $files[i].name});
			
			var promise = FileUploader.upload($files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				$scope.room.items[$index].files.push(data);
				for (var h = 0; h < $scope.room.items[$index].files.length; h++) {
					//if (data.filename == $scope.room.items[$index].files[h].filename) {
					//	angular.extend($scope.room.items[$index].files[h], data);
					//}
				}
			}, function (e) {
				
			});
		}
		/* jshint ignore:end */
	};
	
	
	/*
	 * Create dialog to add item
	 */
	$scope.showAddItem = function () {
		$scope.item = new RoomItem();
		$mdDialog.show({
			templateUrl: 'views/templates/add-room-item.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Add files to the current item
	 */
	$scope.addItemFiles = function ($files, $index) {
		var item = $scope.item || $scope.room.items[$index];
		
		
		item.files = item.files || [];
		
		/* jshint ignore:start */
		for (var i = 0; i < $files.length; i++) {
			item.files.push({filename: $files[i].name});
			
			var promise = FileUploader.upload($files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < item.files.length; h++) {
					if (data.filename == item.files[h].filename) {
						angular.extend(item.files[h], data);
					}
				}
			}, function (e) {
				
			});
		}
		/* jshint ignore:end */
	};
	
	/*
	 * Complete adding item process and close the dialog 
	 */
	$scope.completeAddItem = function () {
		$mdDialog.hide();
		var item = angular.copy($scope.item);
		item.room = $scope.room;
		$scope.item = undefined;
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
		$scope.item = undefined;
	};
	
	/*
	 * Create dialog to add part
	 */
	$scope.showAddPart = function () {
		$scope.part = new Part();
		$mdDialog.show({
			templateUrl: 'views/templates/add-part.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Complete adding part process and close the dialog 
	 */
	$scope.completeAddPart = function ($id) {
		$mdDialog.hide();
		var part = angular.copy($scope.part);
		$scope.part = undefined;
		part.item = $id;
		part.$create(function (resp) {
			$scope.room.items[$scope.room.items.indexOfById($id)].parts.push(resp);
		});
	};
	
	/*
	 * Cancel adding a part 
	 */
	$scope.cancelAddPart = function () {
		$mdDialog.hide();
		$scope.part = undefined;
	};
	
	/*
	 *  Shows the supply list modal
	 */
	$scope.showAddSupply = function ($index) {
		//Set the current item being worked on
		$scope.$active = $index;
		$scope.showSupplyToggle = true;
	};
	
	/* 
	 * Add Supply to Item
	 */
	$scope.addSupply = function ($supply) {
		$scope.room.items[$scope.$active].supplies = $scope.room.items[$scope.$active].supplies || [];
		var supply = angular.copy($supply);
		supply.quantity = 0;
		$scope.room.items[$scope.$active].supplies.push(supply);
		
		$scope.showSupplyToggle = false;
	};
	
}]);
