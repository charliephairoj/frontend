
angular.module('employeeApp')
.controller('ProjectDetailsCtrl', ['$scope', 'Project', '$routeParams', 'Room', 'Notification', 'FileUploader', '$http', '$timeout',
function ($scope, Project, $routeParams, Room, Notification, FileUploader, $http, $timeout) {
    
	var timeoutPromise;
    $scope.showAddRoom = false;
    $scope.flag = false;
    $scope.project = Project.get({id: $routeParams.id});
    $scope.room = {};
    
	$scope.addCustomer = function (customer) {
		$scope.showCustomers = false;
		$scope.project.customer = customer;
	};
	
	$scope.addSupply = function ($supply) {
		
		$scope.showAddSupply = false;
		
		$scope.project.supplies.push($supply);
		
		//Notify the user
		Notification.display("Adding "+$supply.description+" to "+$scope.project.codename);
		
	};
	
	$scope.removeSupply = function ($index) {
		$scope.project.supplies.splice($index, 1);
	};
	
    $scope.addImage = function (image) {
        var promise = FileUploader.upload(image, 'project/room/image');
        promise.then(function (response) {
            $scope.room.image = response;
            $scope.cropper.reset();
        });
    };
    
    $scope.addSchematic = function (files) {
        var file = angular.isArray(files) ? files[0] : files;
        var promise = FileUploader.upload(file, 'project/room/schematic');
        promise.then(function (response) {
            $scope.room.schematic = response; 
        });
    };
    
    $scope.addRoom = function () {
        Notification.display('Adding ' + $scope.room.description, false);
        var room = new Room();
        angular.extend(room, $scope.room);
        room.project = {id: $scope.project.id};
        room.$save(function (response) {
            Notification.display($scope.room.description + " added.");
            $scope.showAddRoom = false;
            $scope.project.rooms.push(room);
        }, function (e) {
            $scope.flag = true; 
        });
    };
	
	/*
	 * Watches the project for changes in order to autosave
	 */
    $scope.$watch('project', function (newVal, oldVal) {
    	console.log(newVal, oldVal);
		
		if (oldVal.hasOwnProperty('id')) {
	    	$timeout.cancel(timeoutPromise);
		
			timeoutPromise = $timeout(function () {
				Notification.display('Saving...', false);
				var project = angular.copy($scope.project);
				project.$update(function () {
					Notification.display('Project ' + $scope.project.codename + ' saved');
				});
			}, 750);
		}
    }, true);
	
}]);
